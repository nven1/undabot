const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser')
const Joi = require('joi');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')))

const schema = Joi.object({
    email: Joi.string().email().min(3).required(),
    message: Joi.string().min(30).required(),
});

app.post('/API/contact', (req, res) => {
    const { error, value } = schema.validate(req.body);
    if (error == undefined) {
        res.status(200).json({
            message: 'Your message has been sent!',
            values: value
        })
    } else {
        res.status(422).json(error)
    }
});

const port = process.env.port || 5000;

app.listen(port, () => console.log(`started - ${port}`));