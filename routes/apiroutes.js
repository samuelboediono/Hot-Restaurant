module.exports = function(app){
  
  app.get("/api/tables", function(req, res){
    return res.json(reservations);
  })

  app.post("/api/reserve", function(req, res){

    var newreservation = req.body
    console.log(newreservation);

    reservations.push(newreservation);
    res.json(newreservation);

  })
}
