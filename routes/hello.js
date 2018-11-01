
//initialize express router
const router = require('express').Router()


router.get('/',async (req,res) =>{
    res.end('Hello Dear Node!This Statement is from Express Router.');
})

module.exports = router