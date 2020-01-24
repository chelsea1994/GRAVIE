const express = require('express');
const app = express();
const axios = require('axios');

app.use(express.json());
app.use(express.static( __dirname + '/public/dist/public' ));

app.get('/games', function(req, res){
    axios.get('https://www.giantbomb.com/api/games/?api_key=8f44edd61cc7203f58cc8cfbbb4a83abf7e6ea2b&format=json&field_list=name,id,image,guid,deck&limit=10')
    .then(data => {
        console.log(data['data']['results']);
        res.json(data['data']['results']);
    })
    .catch(error => {
        console.log(error);
        res.json(error);
    })
});

app.listen(8000, () => console.log("listening on port 8000"));
