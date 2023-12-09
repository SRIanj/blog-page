const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the public folder
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/post/:id', (req, res) => {
    // Fetch blog post data based on the ID and pass it to the post.html template
    res.sendFile(__dirname + '/views/post.html');
});

// Start the server
app.listen(port, () => {
    console.log(Server is running at http://localhost:${port});
});