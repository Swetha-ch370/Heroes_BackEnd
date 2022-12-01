var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());
var bodyParser = require('body-parser')
app.use(bodyParser.json())
const mongo = require('./database')

app.get("/url", (req, res, next) => {
   res.json(["HTML", "CSS", "Javascript", "Angular", "node"]);
});


app.listen(3000, () => {
   console.log("Server running on port 3000");
});


app.get("/details", async (req, res) => {
   var data = await getData();
   res.send(data);
});


app.post("/details/delete/:id", async (req, res) => {
   console.log("in delete", req.params)
   var result = await mongo.deleteHero(req.params.id);
   console.log("result: ", result)
   if (result) {
      res.status(200).send(true)
   }
   else {
      res.status(400).send(false)
   }
})

app.post("/details/add/:name", async (req, res) => {
   
   var result = await mongo.addHero(req.params.name)
   console.log(result)
   if (result) {
      res.status(200).send(true);
   }
   else {
      res.status(400).send(false)
   }

})


app.post("/details/update/:id", async (req, res) => {
   console.log(req.body, req.params)
   var result = await mongo.updateHero(req.body.name, req.body.id)

   console.log(result)
   if (result) {
      res.status(200).send(true);
   }
   else {
      res.status(400).send(false)
   }

})
async function getData() {
   var data = await mongo.main();
   //    console.log("data",data)
   return data;
}