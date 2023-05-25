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
            json_archive        : "records.json",
            php_archive         : "records.php",
            api_folder          : "./api_files/",
            api_create_json_url : "create_json.php",
            api_url             : "api.php",
            api_data            : "",
            // overlay_bool, quando settato a true consente il passaggio alla modalità full screen con card in formato maxi su overlay opaco
            overlay_bool    : false,
            // oggetto che conterrà i dati della card cliccata
            clicked_card    : null
        }
    },
    created()
    {
        this.api_create_json_method();
    },
    mounted()
    {
        // Chiamata alla API per acquisizione dati
        this.call_to_api();
    },
    methods: 
    {

        api_create_json_method()
        {
            axios.get(this.api_folder + this.api_create_json_url).then( res => 
                {
                    this.api_data = res.data;
                });
        },

        // Metodo incaricato della chiamata alla API
        call_to_api()
        {
            axios.get(this.api_folder + this.api_url).then( res =>
                {
                    this.api_data = res.data;
                });
        },

        // Metodo che consente il passaggio alla modalità full screen con card in formato maxi su overlay opaco
        full_screen(index)
        {
            this.overlay_bool = true;
            this.clicked_card = this.api_data[index];
        }
    }
}).mount('#vue_app')