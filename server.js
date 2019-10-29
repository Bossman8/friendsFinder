var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var http = require("http");
var fs = require("fs");

var app = express();
var PORT = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

// app.use(function (req, res) {
//     res.sendFile(path.join(__dirname + "/app/public/home.html"));
// });

require("./routing/apiRoutes")(app);
require("./routing/htmRoutes")(app);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
