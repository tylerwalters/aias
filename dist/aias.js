(function(){"use strict";function e(e){try{return JSON.parse(e)}catch(t){return e}}function t(t,r,o){return new n(function(n,u){var i=window.XMLHttpRequest||ActiveXObject;req=new i("MSXML2.XMLHTTP.3.0"),req.open(t,r,!0),req.setRequestHeader("Content-type","application/x-www-form-urlencoded"),req.onreadystatechange=function(){if(4===this.readyState)if(200===this.status){var t=e(req.responseText);n(t)}else u(new Error("Request responded with status "+req.status))},req.send(o)})}var n="undefined"!=typeof module&&module.exports?require("promise"):this.Promise,r={};r.get=function(e){return t("GET",e)},r.post=function(e,n){return t("POST",e,n)},r.put=function(e,n){return t("PUT",e,n)},r["delete"]=function(e){return t("DELETE",e)},"function"==typeof define&&define.amd?define("aias",function(){return r}):"undefined"!=typeof module&&module.exports?module.exports=r:this.aias=r}).call(window);