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
            headers_obj         : {headers : { 'Content-Type' : 'multipart/form-data' }},
            json_archive        : "records.json",
            php_archive         : "records.php",
            api_folder          : "./api_files/",
            api_create_json_url : "create_json.php",
            api_CRUD_index_url  : "api_CRUD_index.php",
            api_CRUD_show_url   : "api_CRUD_show.php",
            api_data            : "",
            // overlay_bool, quando settato a true consente il passaggio alla modalità full screen con card in formato maxi su overlay opaco
            overlay_bool        : false,
            // oggetto che conterrà i dati della card cliccata
            clicked_card        : {}
        }
    },
    created()
    {
        this.api_create_json_method();
    },
    mounted()
    {
        // Chiamata alla API per acquisizione dati
        this.api_CRUD_index_method();
    },
    methods: 
    {

        api_create_json_method()
        {
            const   records_files = {
                                        php_source          : this.php_archive,
                                        json_destination    : this.json_archive
                                    };
            axios.post(this.api_folder + this.api_create_json_url, records_files, this.headers_obj);
        },

        // Metodo incaricato della chiamata alla API
        api_CRUD_index_method()
        {
            axios.get(this.api_folder + this.api_CRUD_index_url).then( res =>
                {
                    this.api_data = res.data;
                });
        },

        api_CRUD_show_method(index)
        {
            const   CRUD_obj =  {
                                    record_index    : index
                                };
            axios.post(this.api_folder + this.api_CRUD_show_url, CRUD_obj, this.headers_obj).then( res =>
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