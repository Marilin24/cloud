const express = require('express')
const customerHandler =require('./app/handlers/customer.handler');

const router = express.Router();



router.get('/customers', customerHandler.listCustomer)
router.post('/customers', customerHandler.insertCustomer)
router.patch('/customers/:id', customerHandler.updateCustomer)
router.delete('/customers/:id', customerHandler.deleteCustomer)


module.exports = router;