const { request, response } = require('express');
const sgMail = require('@sendgrid/mail');
const fs = require('fs');
const { promisify } = require('util');

const emailsGet = (req = request, res = response) => {
    const msg = "Get";
    res.json({
        msg
    });
}
const emailsPost = async(req = request, res = response) => {
    const { from, to } = req.body;
    sgMail.setApiKey(process.env.SENDGRID_APIKEY);
    const readFile = promisify(fs.readFile);
    const msg = {
        from: from,
        to: to,
        subject: 'Bienvenido',
        text: 'Bienvenido a EZV',
        html: await readFile('./public/plantilla_correo.html', 'utf8'),
    };
    sgMail.send(msg);
    res.json({
        from,
        to
    });
}
const emailsPut = (req = request, res = response) => {
    const msg = "Put";
    res.json({
        msg
    });
}
const emailsDelete = (req = request, res = response) => {
    const msg = "Delete";
    res.json({
        msg
    });
}

module.exports = {
    emailsGet,
    emailsPost,
    emailsPut,
    emailsDelete,
}