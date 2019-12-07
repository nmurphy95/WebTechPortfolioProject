const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const Resume = require('./schemas/Resume');

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

const dbRoute = 'mongodb+srv://XADGIT:rootit@cluster0-jujfj.gcp.mongodb.net/portfolio?retryWrites=true&w=majority';

mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));

router.get('/getData', (req, res) => {
    Resume.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
});

router.post('/updateData', (req, res) => {
    console.log(req.body);
    const { id, update } = req.body;
    Resume.findByIdAndUpdate(id, update, { new: true }, (err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

router.delete('/deleteData', (req, res) => {
    const { id } = req.body;
    Resume.findByIdAndRemove(id, (err) => {
        if (err) return res.send(err);
        return res.json({ success: true });
    });
});

router.post('/putData', (req, res) => {
    let resume = new Resume();

    const { id, message } = req.body;

    if ((!id && id !== 0) || !message) {
        return res.json({
            success: false,
            error: 'INVALID INPUTS',
        });
    }
    resume.name = message.name;
    resume.id = id;
    resume.sections = message.sections;
    resume.save((err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

app.use('/api', router);

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));