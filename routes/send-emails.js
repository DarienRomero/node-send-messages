const { Router } = require('express');
const { emailsGet, emailsPost, emailsPut, emailsDelete } = require('../controllers/send-emails');
const router = Router();

router.get('/', emailsGet);
router.post('/', emailsPost);
router.put('/', emailsPut);
router.delete('/', emailsDelete);

module.exports = router;