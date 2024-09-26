const express = require("express");
const app = express();
const port = 3000;

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Serve static files (CSS, images, etc.) from the 'public' folder
app.use(express.static("public"));

app.get("/", (req, res) => {
  // Render the 'index.ejs' template
  res.render("index");
});

app.listen(port, () => {
  console.log("App listening on port:", port);
});
