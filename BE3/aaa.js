const express = require('express');
const app = express();
const port = 5000;

app.use(express.static('./public'));

const homeRoutes = require('./routes/home');
const aboutRoutes = require('./routes/about');
const contactRoutes = require('./routes/contact');
const hireMeRoutes = require('./routes/hire_me');
const miniGamesRoutes = require('./routes/minigames');
const myBlogARRoutes = require('./routes/myblog-ar');
const thankYouRoutes = require('./routes/thank_you');



app.use('/', homeRoutes);
app.use('/about', aboutRoutes);
app.use('/contact', contactRoutes);
app.use('/hire_me', hireMeRoutes);
app.use('/minigames', miniGamesRoutes);
app.use('/myblog-ar', myBlogARRoutes);
app.use('/thank_you', thankYouRoutes);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
