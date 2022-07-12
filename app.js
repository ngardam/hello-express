const { response } = require('express');
const Express = require('express')
const app = Express();
const routes = require('./routes/routes')

const PORT = 4000;

app.use(routes)

app.listen(PORT, () => {
    console.log("You are on port " + PORT)
})
