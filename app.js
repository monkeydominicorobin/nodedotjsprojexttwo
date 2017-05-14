var pagpapahayag = require('express');
var m = require('morgan');

var ap = "/api/whoami";

var a = module.exports = pagpapahayag();
a.use(m('dev'));

a.get(ap, function(pakiusap, tugon){
    var wika = pakiusap.headers['accept-language'];
    var aninag = pakiusap.headers['user-agent'];
    var proto = pakiusap.headers['x-forwarded-for'];
    tugon.json({
        language: wika,
        software: aninag,
        ipaddress: proto
    });
});

a.listen(process.env.PORT, function(){
    console.log('Listening on port' + process.env.PORT);  
});