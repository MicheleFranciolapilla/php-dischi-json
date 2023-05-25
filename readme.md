## ESERCIZIO BASATO SULLE API CRUD (PHP) ##
___


#### Consegna: creare una web-app che permetta di leggere una lista di dischi presente nel nostro server ####
___


**L'esercizio è stato sviluppato con Vue-JS-3 (per la parte front-end) e PHP (per la parte back-end).**
**Per le chiamate alle API è stato utilizzato Axios; per la parte di stile, invece, si è fatto ricorso a Bootstrap 5 e poche righe di CSS**

**I files principali del progetto sono:**
-   ***index.php*** e ***main.js*** dentro cui si implementa tutto il codice HTML e VUE-JS
-   **cartella** ***"api_files"*** con il suo contenuto:

    -   ***records.php*** contenente l'array associativo dei dati (oggetti);
    -   ***create_json.php***, file incaricato di creare (nella fase `created`) da zero il file *records.json* a seguito di chiamata "POST";
    -   ***records.json***; il file contiene l'array associativo, convertito in formato JSON ed è la fonte di approvvigionamento dati del progetto;
    -   ***api_CRUD_index.php***, file deputato, a seguito di chiamata "GET", a fornire l'intero array di dati (la chiamata viene eseguita nella fase `mounted`);
    -   ***api_CRUD_show.php***, responsabile dell'invio dell'oggetto "singolo disco", a seguito di chiamata "POST".

---

#### Criticità riscontrate: ####

**A seguito di riavvio del pc, alla prima esecuzione del programma, nelle cards (correttamente posizionate) non è presente alcun dato e le relative variabili Vue-JS contengono solo una stringa recante messaggi di errore. Al refresh o alla successiva esecuzione del programma il tutto funziona regolarmente.**