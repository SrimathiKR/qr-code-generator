const express = require("express");
const path = require("path");
const QRCode = require("qrcode");

const app = express();

// Set EJS as the templating engine and define the views directory explicitly
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files from the public directory for CSS and other assets
app.use(express.static("public"));

// Middleware to parse URL-encoded data from forms
app.use(express.urlencoded({ extended: false }));

// Home route: render the form for generating QR codes
app.get("/", (req, res) => {
  res.render("index");
});

// Route to handle form submission and generate the QR code
app.post("/generate", (req, res) => {
  const { url, fgColor, bgColor, errorCorrectionLevel } = req.body;

  // Build QR Code options with user inputs or defaults
  const options = {
    errorCorrectionLevel: errorCorrectionLevel || "M",
    color: {
      dark: fgColor || "#000000",
      light: bgColor || "#ffffff",
    },
  };

  // Generate a QR code from the given URL/text with custom options
  QRCode.toDataURL(url, options, (err, src) => {
    if (err) return res.send("Error occurred while generating the QR code.");
    res.render("result", { src, url });
  });
});

// Start the server on the specified port (default 3000)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
