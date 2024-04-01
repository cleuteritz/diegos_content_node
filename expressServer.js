const express = require('express');
const path = require('path');

const app = express();
const port = 1337;

// Set the path to the public directory
const publicPath = path.join(__dirname, 'public');

// Serve static files from the public directory
app.use(express.static(publicPath));

// Serve each web page based on the path
app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

// Handle specific routes for CSS files
app.get(['/css/home_pg.css', '/css/about_me.css', '/css/contact_me.css', '/css/portfolio.css'], (req, res) => {
    res.sendFile(path.join(publicPath, req.path));
});

// Handle specific routes for images
app.get(['/images/*.jpg', '/images/bg_image.jpeg'], (req, res) => {
    res.sendFile(path.join(publicPath, req.path));
});

// Handle specific routes for other HTML pages
app.get(['/photography.html', '/contact_me.html', '/about_me.html'], (req, res) => {
    res.sendFile(path.join(publicPath, req.path));
});

// Handle specific routes for JavaScript files
app.get(['/js/*.js'], (req, res) => {
    res.sendFile(path.join(publicPath, req.path));
});

// Handle specific routes for data files
app.get(['/data/about_me_data.html', '/data/submit_message.xml'], (req, res) => {
    res.sendFile(path.join(publicPath, req.path));
});

// Default route for 404
app.get('*', (req, res) => {
    res.status(404).sendFile(path.join(publicPath, '404.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
