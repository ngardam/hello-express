const Express = require('express')
const app = Express();

const PORT = 4000;

app.listen(PORT, () => {
    console.log("You are on port " + PORT)
})