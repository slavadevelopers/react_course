var str = require('./constant');
var $ = require('jquery');
require('./less');

var App = function() {
    // console.log(str);
    $('body').addClass('page').html('<h1 class=\'page__main-title\'>Heading</h1><p class=\'page__paragraph\'>' + str + '</p>');
};

var app = new App;
app.get = function() {};
