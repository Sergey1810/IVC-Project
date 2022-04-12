const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const ticketRouter = require('./ticketRouter')


router.use('/user',userRouter)
router.use('/ticket',ticketRouter)


module.exports = router