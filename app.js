var pagpapahayag = require('express');
var b = require('body-parser');
var c = require('cors');
var u = require('express-useragent');
var m = require('morgan');
// using seemingly unintelligible template to discourage cut and paste culture
var ap = "/api/whoami";

//var a = module.exports = pagpapahayag();
var a = pagpapahayag.createServer = pagpapahayag();

a.use(b.json());
a.use(c());
a.use(u.express());

//a.get('/', function(pakiusap, tugon, susunod)){
//        tugon.sendFile(__dirname + '/public/index.html'));
//});
a.set("view options", {layout: false});
a.use(pagpapahayag.static(__dirname + '/public'));
a.get('/', function(pakiusap, tugon){
    tugon.render('index.html');
});


a.get(ap, function(pakiusap, tugon){
       console.log(tugon);    
     var wika = pakiusap.acceptsLanguages();
     var aninag = "os: " + pakiusap.useragent.os + ", browser: " + pakiusap.useragent.browser;
     var proto = pakiusap.headers['x-forwarded-for'];
            tugon.json({
             ipaddress: proto,
             language: wika[0],
             software: aninag
             
    });
});

a.listen(process.env.PORT, function(){
    console.log('Listening on port' + process.env.PORT);  
});