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
            api_url     : "./api.php",
            api_data    : ""
                }
    },
    created()
    {
    },
    mounted()
    {
        this.call_to_api();
    },
    methods: 
    {
        call_to_api()
        {
            axios.get(this.api_url).then( res =>
                {
                    this.api_data = res.data;
                });
        }
    }
}).mount('#vue_app')