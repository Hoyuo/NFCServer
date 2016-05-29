var mongoose = require('mongoose');

var express = require('express');
var router = express.Router();

mongoose.connect('mongodb://localhost/myDB');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback() {
    console.log('OPEN');
});


var NFCSchema = mongoose.Schema({
    code: 'string'
});

var nfc = mongoose.model('NFC', NFCSchema);


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

/* NFC Image Upload */

router.post('/fileupload', function (req, res, next) {

    var jsonContent = JSON.parse(req);

    var Data = new nfc({
        code: jsonContent.id
    });

    Data.save(function (err, data) {
        if (err) {
        }
    });

    res.write('OK');
    res.end();
});

router.get('/NFC', function (req, rex, next) {

});


module.exports = router;
