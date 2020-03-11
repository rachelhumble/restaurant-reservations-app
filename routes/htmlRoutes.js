const path = require("path");

module.exports = function(app) {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/reserve", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/makeres.html"));
  });

  app.get("/tables", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/viewres.html"));
  });
};