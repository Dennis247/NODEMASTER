const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');
const path = require('path');
const rootDir = require('./utils/path');

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/admin", adminRoute);
app.use(shopRoute);
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'Views', '404.html'));
})
app.listen(3000);