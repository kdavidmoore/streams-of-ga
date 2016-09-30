var express = require('express');
var router = express.Router();
var http = require('http');

router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Warning',
        message: 'No route paramters set.'
    });
});

router.get('/:whatever', function(req, res, next) {
    // var huc_raw = encodeURI(req.params.huc);
    // var huc = huc_raw.substring(0, s.indexOf('?'));
    // console.log(huc);
    // var huc = 03130001;

    var API_URL = {
        host: 'waterservices.usgs.gov',
        path: '/nwis/iv/?format=json&huc=03130001&parameterCd=00060,00065'
    };

    http.request(API_URL, function(response) {
        var str = '';
        response.on('data', function(chunk) {
            str += chunk;
        });
        response.on('end', function() {
            res.json(JSON.parse(str));
        });
    }).end();
});

module.exports = router;
