const { Router } = require('express')
const router = Router()

const commits_controllers = require('../controllers/commits.controller.js')

router.get('/', commits_controllers.presentation)
router.get('/commits', commits_controllers.getCommits)
router.post('/save/commits', commits_controllers.saveCommits)

module.exports = router