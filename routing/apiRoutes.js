var friends = require("../app/data/friends");

function totalDifference(data) {
  var user = data[data.length - 1].scores;

  for (i = 0; i < data.length - 1; i++) {
    for (j = 0; j < data[i].length; j++) {
      var total = 0;
      total += Math.abs(parseInt(user[j]) - data[i].scores[j]);
    }
  }
}

module.exports = function(app) {
  app.get("/api/friends", (req, res) => {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    friends.push(req.body);
    res.json(totalDifference(friends));
  });
};
