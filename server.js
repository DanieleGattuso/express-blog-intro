// Richiamiamo express

const express = require('express')
const app = express()
const port = 3000


const foodPosts = [
    {
        title: "Ciambellone soffice",
        content: "Un dolce classico e soffice, perfetto per la colazione o la merenda, spolverato con zucchero a velo.",
        image: "/images/ciambellone.jpeg",
        tags: ["dolce", "colazione", "tradizionale"]
    },
    {
        title: "Cracker alla barbabietola",
        content: "Croccanti cracker dal colore vivace grazie alla barbabietola, arricchiti con semi e serviti con una crema di formaggio.",
        image: "/images/cracker_barbabietola.jpeg",
        tags: ["salato", "snack", "vegetariano"]
    },
    {
        title: "Pane fritto dolce",
        content: "Deliziosi bocconcini di pane fritto ricoperti di zucchero e cannella, ideali per una pausa golosa.",
        image: "/images/pane_fritto_dolce.jpeg",
        tags: ["dolce", "fritto", "sfizioso"]
    },
    {
        title: "Pasta alla barbabietola",
        content: "Rigatoni conditi con una crema di barbabietola e guarniti con pistacchi e salvia per un gusto sorprendente.",
        image: "/images/pasta_barbabietola.jpeg",
        tags: ["primo", "vegetariano", "colorato"]
    },
    {
        title: "Torta paesana",
        content: "Un dolce tipico della tradizione lombarda, preparato con pane raffermo, cacao, uvetta e pinoli.",
        image: "/images/torta_paesana.jpeg",
        tags: ["dolce", "tradizionale", "rustico"]
    }
];

app.use(express.static('images'));

app.get('/', (req, res) => {
    res.send('Server del mio blog')
    
    
    })

app.get('/bacheca', (req, res) => {
    res.json(foodPosts);
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })    
