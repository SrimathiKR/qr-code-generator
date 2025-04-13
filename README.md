# qr-code-generator

A web-based QR code generator built with Node.js, Express, EJS, and the [qrcode](https://www.npmjs.com/package/qrcode) npm package. This application allows users to generate customized QR codes by entering a URL or text, adjusting foreground and background colors, selecting an error correction level, and downloading the generated QR code as an image.

## Features

- **Customizable QR Codes:**  
  - Input any URL or text to generate a QR code.
  - Customize foreground and background colors.
  - Choose different error correction levels (L, M, Q, H).

- **User-friendly Interface:**  
  - Clean, modern design using a responsive CSS layout.
  - Easy navigation between the QR code generation form and result page.

- **Download Option:**  
  - Download the generated QR code image for offline use or sharing.

## Technologies Used

- **Backend:**  
  - Node.js  
  - Express.js

- **Frontend:**  
  - EJS Templating Engine  
  - HTML5, CSS3 (with a modern, responsive design)

- **QR Code Generation:**  
  - [qrcode](https://www.npmjs.com/package/qrcode)

## Project Structure
qr-code-generator/ ├── index.js # Main server file ├── package.json # Project dependencies and scripts ├── views/ # EJS view templates │ ├── index.ejs # Home page with the QR code form │ └── result.ejs # Result page to display generated QR code └── public/ └── css/ └── style.css # Custom CSS styling


## Getting Started

### Prerequisites

- Node.js (version 12 or later)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/qr-code-generator.git
   cd qr-code-generator

## Getting Started

### Prerequisites

- Node.js (version 12 or later)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/qr-code-generator.git
   cd qr-code-generator
2. Install dependencies:
npm install
3. Run the application:
node index.js
4.Open the application in your browser:
Go to http://localhost:3000

Usage
On the home page, enter the URL or text you want to encode.

Select your preferred foreground color, background color, and error correction level.

Click the "Generate QR Code" button.

View the generated QR code on the results page.

Click the "Download QR Code" button to save the image locally.

Use the "Generate Another" link to create a new QR code.

Customization
Feel free to modify the source code, tweak the CSS styles, or enhance the functionality based on your requirements. Contributions, suggestions, and issues are welcome!

License
Distributed under the MIT License. See the LICENSE file for more information.

Acknowledgments
Express

EJS

qrcode npm package

Modern UI inspiration from various online resources.

