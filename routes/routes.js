const { request } = require("express")

const router = require("express").Router()

router.get("/", (req, res) => {
    res.send('<h1>Hello, home!</h1>')
})

router.get("/world", (req, res) => {
    res.send('<h1>Hello, World!</h1>')
})

router.get("/profile", (req, res) => {
    res.send('<h1>Hello, profile!</h1>')
})

router.get("/newman", (req, res) => {
    res.send('<h1>Hello, newman!</h1>')
})

router.get("/:page", (req, res) => {
    res.send(`<h1>Welcome to your very own ${req.params.page} page</h1>`)
})



module.exports = router