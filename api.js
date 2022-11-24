var express =require('express');
var cors=require('cors');
var app=express();
app.use(cors());
//call back function
app.get("/url", (req, res, next) => {
    res.json(["HTML","CSS","Javascript","Angular","node"]);
   });
app.listen(3000, () => {
    console.log("Server running on port 3000");
   });
   app.get("/", (req, res, next) => {
    res.json("Hello....");
   });
   app.get("/details", (req, res, next) => {
    res.json([
        { id: 12, name: 'Dr. Nice' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr. IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }
      ]);
   });