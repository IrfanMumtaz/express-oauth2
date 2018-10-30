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


app.get("/api/v1/users/view", APIController.index);
app.get("/api/v1/users/view/:id", APIController.view);
app.post("/api/v1/users/store/", APIController.store);
app.put("/api/v1/users/update/:id", APIController.update);
app.delete("/api/v1/users/delete/:id", APIController.delete);


app.get("*", (req, res) =>{
    res.json("This app is for api use only, api host is http://localhost:8000/api/v1, to check api is working or not call http://localhost/api/v1/users to check users list");
});

app.listen(app.get('port'), () => {
    console.log('App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
    console.log('Press CTRL-C to stop\n');
});