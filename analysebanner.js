var scroller_width='160px';
var scroller_height='80px';

var bgcolor='#EFEFEF';
var pause=5000;
var curpos = scroller_height*(1);
var degree = 9;
var curcanvas = "canvas0";
var curindex  = 0;
var nextindex = 1;
var ie4 = document.all;
var dom = document.getElementById && navigator.userAgent.indexOf("Opera") == -1;
var lanFlag = LANGUAGE_STR =="gb"  || LANGUAGE_STR =="big"  || typeof(Accept_Language) =="undefined" ||  (Accept_Language.indexOf("zh-cn") == -1 && (typeof(ADVISIBLE)=="undefined" || ADVISIBLE));
