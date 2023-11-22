const express = require('express');
const app = express();
const path = require('path');
const port = 5000; 

app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname,'../myBlog.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.resolve(__dirname,'../about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.resolve(__dirname,'../contact.html'));
});

app.get('/hire_me', (req, res) => {
  res.sendFile(path.resolve(__dirname,'../hire_me.html'));
});

app.get('/minigames', (req, res) => {
  res.sendFile(path.resolve(__dirname,'../minigames.html'));
});

app.get('/myblog-ar', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../myblog-ar.html'));
});

app.get('/thank_you', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../thank_you.html'));
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
