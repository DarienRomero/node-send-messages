const { request, response } = require('express');


const smsGet = (req = request, res = response) => {
    const msg = "Get SMS";
    res.json({
        msg
    });
}
const smsPost = async(req = request, res = response) => {
    const { fullPhoneNumber } = req.body;

    const account_sid = process.env.TWILIO_ACCOUNT_SID;
    const auth_token = process.env.TWILIO_AUTH_TOKEN;
    const client = require('twilio')(account_sid, auth_token);
    const sms_code = Math.floor(100000 + Math.random() * 900000);

    client.messages.create({
            to: "+51941418370",
            from: "+12702089099",
            body: `Your code is ${sms_code}`
        })
        .then(message => res.status(200).json({ sms_code }))
        .catch(error => res.status(400).json({ "error": "error" }));
}
const smsPut = (req = request, res = response) => {
    const msg = "Put SMS";
    res.json({
        msg
    });
}
const smsDelete = (req = request, res = response) => {
    const msg = "Delete SMS";
    res.json({
        msg
    });
}

module.exports = {
    smsGet,
    smsPost,
    smsPut,
    smsDelete,
}