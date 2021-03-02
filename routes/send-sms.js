const { Router } = require('express');
const { smsGet, smsPost, smsPut, smsDelete } = require('../controllers/send-sms');
const router = Router();

router.get('/', smsGet);
router.post('/', smsPost);
router.put('/', smsPut);
router.delete('/', smsDelete);

module.exports = router;