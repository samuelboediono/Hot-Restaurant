module.exports = function(app){
  
  app.get("/api/tables", function(req, res){
   var data = require("../data/data.js");
    return res.json(data);
  })

  app.post("/api/reserve", function(req, res){

    var newreservation = req.body
    console.log(newreservation);

    reservations.push(newreservation);
    res.json(newreservation);

  })
}
