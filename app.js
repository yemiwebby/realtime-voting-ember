const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Pusher = require('pusher');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const pusher = new Pusher({
    appId: process.env.PUSHER_APP_ID,
    key: process.env.PUSHER_APP_KEY,
    secret: process.env.PUSHER_APP_SECRET,
    cluster: process.env.PUSHER_APP_CLUSTER,
    encrypted: true
});

app.set('port', process.env.PORT || 3000);

app.post('/vote', (req, res) => {
    const payload = {
        fans: req.body.id,
        points: 10
    }
    pusher.trigger('poll', 'vote', payload);
    res.send(payload)
})

app.listen(app.get('port'), () => {
    console.log("Listening on port " + app.get('port'));
})


