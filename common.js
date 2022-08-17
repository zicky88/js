String.prototype.Trim = function(){return   this.replace(/(^\s*)|(\s*$)/g,"");} 
function $$(id){
	return document.getElementById(id);
}
function show(obj, type) {
	if(type == 1) {
		$$(obj).style.display = 'block';
	} else {
		$$(obj).style.display = 'none';
	}
}
function Request(Variable){
	var query = location.search;
	if (query != ""){
		query = query.split("?")[1];
		query = query.split("&");
		for (var i=0;i<query.length;i++){
			var querycoll = query[i].split("=");
			if (querycoll.length == 2){
				if (querycoll[0].toUpperCase() == Variable.toUpperCase()){
					return querycoll[1];
					break;
				}
			}
		}
	}
	return "";
}
function LoadJS(fileUrl,callback) { 
    var oHead = document.getElementsByTagName('HEAD').item(0); 
    var oScript= document.createElement("script"); 
    oScript.type = "text/javascript";
	/*
	if(code)
	{
		oScript.charset="gb2312";
	} 
	*/
    oScript.src=fileUrl ;  
	oHead.appendChild(oScript); 
	if(document.addEventListener){ 
		oScript.onload = callback; 
		oScript.onerror = callback;
		//oScript.addEventListener('onload',   LoadJsReady,   false);    
	}else{
		oScript.onreadystatechange =function(){ LoadJsReady(oScript,callback);}; 
	}
}

function LoadJsReady(obj,callBack){ 
	if(obj.readyState=="loaded"){  
		callBack();
	} 
}

var isIE= window.ActiveXObject?true:false;
function getCookie(sName){
 var reg1=new RegExp("(?: |\\b)"+sName+"(?:=)?([^ =;]*)","i");
 var ma1=document.cookie.match(reg1);
 if(!ma1) return "";
 return ma1[1];
}

function setCookie(cookiename, cookievalue, days) {
	var date = new Date();
	date.setTime(date.getTime() + Number(days) * 24 * 3600 * 1000);
	document.cookie = cookiename + "=" + cookievalue + "; path=/;expires = " + date.toGMTString();
}

function getCookie(sName){
 var reg1=new RegExp("(?: |\\b)"+sName+"(?:=)?([^ =;]*)","i");
 var ma1=document.cookie.match(reg1);
 if(!ma1) return "";
 return ma1[1];
}


function imageResize(img,width,height)
{
	var tmpImg = new Image();
	tmpImg.src = img.src;
	var oW,oH;
	oW=tmpImg.width;
	oH=tmpImg.height;
	if(tmpImg.width>width)
	{
		img.width=width;
		img.height=oH*width/oW;
	}
	if(tmpImg.height>height)
	{
		img.height=height;
		img.width=oW*height/oH;
	}
	img.style.display = "";

}
Date.prototype._toString=Date.prototype.toString;
Date.prototype.toString=function(format){var self=this;var p=function p(s){return(s.toString().length==1)?"0"+s:s;};return format?format.replace(/dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?/g,function(format){switch(format){case"hh":return p(self.getHours()<13?self.getHours():(self.getHours()-12));case"h":return self.getHours()<13?self.getHours():(self.getHours()-12);case"HH":return p(self.getHours());case"H":return self.getHours();case"mm":return p(self.getMinutes());case"m":return self.getMinutes();case"ss":return p(self.getSeconds());case"s":return self.getSeconds();case"yyyy":return self.getFullYear();case"yy":return self.getFullYear().toString().substring(2,4);case"dddd":return self.getDayName();case"ddd":return self.getDayName(true);case"dd":return p(self.getDate());case"d":return self.getDate().toString();case"MMMM":return self.getMonthName();case"MMM":return self.getMonthName(true);case"MM":return p((self.getMonth()+1));case"M":return self.getMonth()+1;case"t":return self.getHours()<12?Date.CultureInfo.amDesignator.substring(0,1):Date.CultureInfo.pmDesignator.substring(0,1);case"tt":return self.getHours()<12?Date.CultureInfo.amDesignator:Date.CultureInfo.pmDesignator;case"zzz":case"zz":case"z":return"";}}):this._toString();};


