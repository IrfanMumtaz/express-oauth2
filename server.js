const express = require('express');
const bodyParser = require('body-parser');
const dotENV = require('dotenv');
const path = require('path');

dotENV.load({ path: '.env'});


const app = express();

app.set("host", process.env.OPENSHIFT_IP || "0.0.0.0");
app.set("port", process.env.PORT  || process.env.OPENSHIFT_NODEJS_PORT || 8000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//controllers
APIController = require("./controllers/users");


app.get("/api/v1/users", APIController.users);
app.get("/api/v1/user/:id", APIController.user);

app.get("*", (req, res) =>{
    res.json("This app is for api use only, api host is http://localhost:8000/api/v1, to check api is working or not call http://localhost/api/v1/users to check users list");
});

app.listen(app.get('port'), () => {
    console.log('App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
    console.log('Press CTRL-C to stop\n');
});