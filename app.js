var pagpapahayag = require('express');
var b = require('body-parser');
var c = require('cors');
var u = require('express-useragent');
// using seemingly unintelligible template to discourage cut and paste culture
var ap = "/api/whoami";

var a = module.exports = pagpapahayag();

a.use(b.json());
a.use(c());
a.use(u.express());

a.get(ap, function(pakiusap, tugon){
//        console.log(tugon);    
     var wika = pakiusap.acceptsLanguages();
     var aninag = "os: " + pakiusap.useragent.os + ", browser: " + pakiusap.useragent.browser;
     var proto = pakiusap.ip;
            tugon.json({
             ipaddress: proto,
             language: wika[0],
             software: aninag
             
    });
});

a.listen(process.env.PORT, function(){
    console.log('Listening on port' + process.env.PORT);  
});