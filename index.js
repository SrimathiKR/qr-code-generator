const express = require("express");
const QRCode = require("qrcode");

const app = express();

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Serve static files from the public directory (for CSS, images, etc.)
app.use(express.static("public"));

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: false }));

// Route for the home page to display the form
app.get("/", (req, res) => {
  res.render("index");
});

// Route to handle form submission and generate the QR code
app.post("/generate", (req, res) => {
  const { url } = req.body; // Get the URL from the form
  // Generate a QR code based on the URL input
  QRCode.toDataURL(url, (err, src) => {
    if (err) return res.send("Error occurred while generating the QR code");
    // Render the result page with the generated QR image
    res.render("result", { src });
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
