const { urlencoded } = require('express');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require('./routes');


// Serve Public Directory
app.use(express.static(`${__dirname}/public`));

// SECTION Middleware
app.use(express.json());
app.use(urlencoded({extended:true}));

// SECTION View Routes
app.use('/', routes.views);


app.listen(PORT, () => {
    console.log(`Application listening on ${PORT}..`);
});