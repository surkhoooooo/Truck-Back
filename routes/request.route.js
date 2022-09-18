const {Router} = require('express')
const router = Router()
const {request} = require('../controllers/request.controller')
const authMiddleware = require('../middleware/auth.middleware')
const morgan = require('morgan')
ç
router.get('/request', request.getRequests)
router.post('/request',morgan('combined'), authMiddleware, request.addRequest)
router.patch('/request/:id', morgan('combined'),authMiddleware, request.updateRequest)
router.delete('/request/:id',morgan('combined'), authMiddleware, request.deleteRequest)

module.exports = router