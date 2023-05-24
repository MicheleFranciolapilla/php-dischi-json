<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Link a Bootstrap 5 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <!-- Link al foglio di stile -->
    <!-- <link href="./style.css" media="screen" rel="stylesheet" type="text/css"> -->
    <link rel="stylesheet" href="style.css">
    <title>Dischi JSON</title>
</head>
<body>
    <div id="vue_app" class="vh-100 position-relative">
        <header class="d-flex justify-content-center align-items-center position-relative">
            <img src="./logo-small.svg" alt="logo">
            <h1 class="text-center text-primary">Spotify Records</h1>
        </header>
        <main class="d-flex justify-content-center align-items-start pt-4">
            <div id="card_set" class="row flex-wrap justify-content-between align-items-center">
                <div class="card"
                 v-for="(item, index) in api_data"
                 :key="index"
                 v-on:click="full_screen(index)"
                >
                    <img :src="item.poster" class="card-img-top mx-auto my-2" :alt="item.author">
                    <div class="card-body m-0 p-0 text-center text-white">
                        <h6 class="card-title">{{ item.title }}</h6>
                        <span class="card-text text-info" style="font-size: medium;">{{ item.author }}</span>
                        <span class="card-text d-block" style="font-size: small;">{{ item.year }}</span>
                        <h6 class="text-success">{{item.genre}}</h6>
                    </div>
                </div>
            </div>
        </main>
        <div v-if="overlay_bool" id="overlay">
            <div class="card">
                <img :src="clicked_card.poster" class="card-img-top" :alt="clicked_card.author">
                <div class="card-body m-0 p-0 text-center text-white">
                    <h6 class="card-title">{{ clicked_card.title }}</h6>
                    <span class="card-text text-info" style="font-size: medium;">{{ clicked_card.author }}</span>
                    <span class="card-text d-block" style="font-size: small;">{{ clicked_card.year }}</span>
                    <h6 class="text-success">{{clicked_card.genre}}</h6>
                </div>
            </div>
        </div>
    </div>
    <!-- CDN Bootstrap 5 -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <!-- CDN Axios -->
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <!-- CDN Vue3 -->
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <!-- Link al file di script JS -->
    <script src="./main.js"></script>
</body>
</html>