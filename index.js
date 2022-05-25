const express = require('express')
const app = express()
const port = 4000;

app.use(require('./routes/products.router.js'));
app.use(require('./routes/brands.router.js'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })