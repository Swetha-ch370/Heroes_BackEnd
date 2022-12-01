var express =require('express');
var cors=require('cors');
var app=express();
app.use(cors());
const mongo = require('./database')
//call back function

app.get("/url", (req, res, next) => {
    res.json(["HTML","CSS","Javascript","Angular","node"]);
   });


   app.listen(3000, () => {
    console.log("Server running on port 3000");
   });


   app.get("/details",  async(req,res) => {
    // console.log("request",req.length)
    var data = await getData();
    // console.log("in get api", data)
    res.send(data);
   });


   app.post("/details/delete/:id",async(req,res)=>
{
   console.log("in delete",req.params)
   var result=await mongo.deleteHero(req.params.id);
   console.log("result: ", result)
   if(result) {
      res.status(200).send(true)
   }
   else
   {
      res.status(400).send(false)
   }
})
app.post("/details/add/:name",async(req,res)=>
{
   //  console.log("Post request", req.body, req.params);
    var result=await mongo.addHero(req.params.name)
    console.log(result)
    if(result)
    {
      res.status(200).send(true);
    }
    else{
      res.status(400).send(false)
    }
      
})


//    app.get("/details", (req, res, next) => {
//     res.json([
//         { id: 12, name: 'Dr. Nice' },
//         { id: 13, name: 'Bombasto' },
//         { id: 14, name: 'Celeritas' },
//         { id: 15, name: 'Magneta' },
//         { id: 16, name: 'RubberMan' },
//         { id: 17, name: 'Dynama' },
//         { id: 18, name: 'Dr. IQ' },
//         { id: 19, name: 'Magma' },
//         { id: 20, name: 'Tornado' }
//       ]);
    async function getData()
    {
       var data = await mongo.main();
    //    console.log("data",data)
       return data;
    }