// Wait for the canvas element to be fully loaded
const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));
await delay(2000); // Change the delay time as needed

// Get the canvas element
const canvas = document.querySelector('.maker-canvas.lower-canvas');

// Create a new SVG element
const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

// Set the width and height of the SVG element to match the canvas
svg.setAttribute('width', canvas.width);
svg.setAttribute('height', canvas.height);

// Create a new SVG image element and set its href attribute to the canvas data URI
const image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
image.setAttribute('href', canvas.toDataURL());

// Append the SVG image element to the SVG element
svg.appendChild(image);

// Convert the SVG element to a string
const svgString = new XMLSerializer().serializeToString(svg);

// Create a new blob object from the SVG string
const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });

// Create a new URL object from the blob
const url = URL.createObjectURL(blob);

// Create a new anchor element and set its href attribute to the URL
const anchor = document.createElement('a');
anchor.setAttribute('href', url);

// Set the download attribute of the anchor element to the filename you want to use for the SVG file
anchor.setAttribute('download', 'my-logo.svg');

// Click the anchor element to initiate the download
anchor.click();

// Clean up by revoking the URL object
URL.revokeObjectURL(url);