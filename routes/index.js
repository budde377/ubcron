const express = require('express')
const router = express.Router()
const path = require('path')

router.use('/', (req, res) => res.sendFile(path.resolve(__dirname, '..', 'public', 'index.htm')))

module.exports = router
