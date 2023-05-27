// Descrizione
// Dobbiamo creare una web-app che permetta di leggere una lista di dischi presente nel nostro server.
// Stack
// Html, CSS, VueJS (importato tramite CDN), axios, PHP
// Consigli
// Nello svolgere l’esercizio seguite un approccio graduale.
// Prima assicuratevi che la vostra pagina index.php (il vostro front-end) riesca a comunicare correttamente con il vostro script PHP (le vostre “API”).
// Solo a questo punto sarà utile passare alla lettura della lista da un file JSON.
// Bonus
// Al click su un disco, recuperare e mostrare i dati del disco selezionato.

// Script Vue 3
const {createApp} = Vue 

createApp(
{
    data() 
    {
        return  {
            // headers_obj contiene l'oggetto da passare alle chiamate axios.POST
            headers_obj         : {headers : { 'Content-Type' : 'multipart/form-data' }},
            // File JSON che viene creato ad ogni avvio di programma ed utilizzato nei metodi CRUD
            json_archive        : "records.json",
            // File PHP in cui si trova l'array originario
            php_archive         : "records.php",
            // Le variabili seguenti contengono gli url parziali ai sotto-programmi php di creazione del file JSON e dei metodi CRUD
            api_folder          : "./api_files/",
            api_create_json_url : "create_json.php",
            api_CRUD_index_url  : "api_CRUD_index.php",
            api_CRUD_show_url   : "api_CRUD_show.php",
            // Variabile che raccoglie l'intero array dei dischi (nel metodo CRUD index)
            api_data            : [],
            // overlay_bool, quando settato a true consente il passaggio alla modalità full screen con card in formato maxi su overlay opaco
            overlay_bool        : false,
            // oggetto che conterrà i dati della card cliccata (popolato nel metodo CRUD show)
            clicked_card        : {}
        }
    },
    created()
    {
        // Generazione del file JSON a partire dall'array originario in formato PHP
        this.api_create_json_method();
    },
    mounted()
    {
        // Chiamata CRUD index per acquisizione dati da file JSON
        this.api_CRUD_index_method();
    },
    methods: 
    {
        // Generatore del file JSON. Invocato in created
        async api_create_json_method()
        {
            const   records_files = {
                                        php_source          : this.php_archive,
                                        json_destination    : this.json_archive
                                    };
            await axios.post(this.api_folder + this.api_create_json_url, records_files, {headers : { 'Content-Type' : 'multipart/form-data' }});
        },

        // Metodo per il popolamento dell'array dei dati. Invocato in mounted
        async api_CRUD_index_method()
        {
            let counter = 0;
            let status = 0;
            do
            {
                counter++;
                await axios.get(this.api_folder + this.api_CRUD_index_url)
                    .then( res =>
                        {
                            this.api_data = res.data;
                            status = res.request.status;
                            console.log(this.api_data);
                            console.log(res.request);
                        });
                console.log(counter);
            } while ((status != 200) && (counter < 100))
        },

        // Metodo per l'acquisizione dei dati del singolo disco. Invocato da full_screen (al click)
        api_CRUD_show_method(index)
        {
            const   CRUD_obj =  {
                                    record_index    : index
                                };
            axios.post(this.api_folder + this.api_CRUD_show_url, CRUD_obj, {headers : { 'Content-Type' : 'multipart/form-data' }}).then( res =>
                {
                    this.clicked_card = res.data;
                });
        },

        // Metodo che consente il passaggio alla modalità full screen con card in formato maxi su overlay opaco
        full_screen(index)
        {
            this.api_CRUD_show_method(index);
            this.overlay_bool = true;
        }
    }
}).mount('#vue_app')