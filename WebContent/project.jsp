<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
	<%@ page import="com.bbm.action.*"%>
<%@taglib prefix="s" uri="/struts-tags" %>
<%@ page import="com.bbm.util.*,java.sql.*"%>
<%@ page import=" java.util.ArrayList"%>
<%@ page import=" java.util.List"%>
<%@ page import=" com.bbm.bean.ei_ideas1"%>
<%@ page import=" com.bbm.bean.UpdateUser"%>
<%@ page import=" com.bbm.util.DBconnection"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html style="overflow: visible;">
<!--<![endif]-->
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="./style/css/e7fb1b89a0"></script>
<script src="./style/js/nr-995.min.js"></script>
<script type="text/javascript" async src="./style/css/s62265652707682"></script>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta http-equiv="X-UA-Compatible" content="chrome=1">
<script type="text/javascript">(window.NREUM||(NREUM={})).loader_config={xpid:"VgUFVldbGwEHUFZQBggA"};window.NREUM||(NREUM={}),__nr_require=function(t,e,n){function r(n){if(!e[n]){var o=e[n]={exports:{}};t[n][0].call(o.exports,function(e){var o=t[n][1][e];return r(o||e)},o,o.exports)}return e[n].exports}if("function"==typeof __nr_require)return __nr_require;for(var o=0;o<n.length;o++)r(n[o]);return r}({1:[function(t,e,n){function r(t){try{c.console&&console.log(t)}catch(e){}}var o,i=t("ee"),a=t(15),c={};try{o=localStorage.getItem("__nr_flags").split(","),console&&"function"==typeof console.log&&(c.console=!0,o.indexOf("dev")!==-1&&(c.dev=!0),o.indexOf("nr_dev")!==-1&&(c.nrDev=!0))}catch(s){}c.nrDev&&i.on("internal-error",function(t){r(t.stack)}),c.dev&&i.on("fn-err",function(t,e,n){r(n.stack)}),c.dev&&(r("NR AGENT IN DEVELOPMENT MODE"),r("flags: "+a(c,function(t,e){return t}).join(", ")))},{}],2:[function(t,e,n){function r(t,e,n,r,o){try{d?d-=1:i("err",[o||new UncaughtException(t,e,n)])}catch(c){try{i("ierr",[c,(new Date).getTime(),!0])}catch(s){}}return"function"==typeof f&&f.apply(this,a(arguments))}function UncaughtException(t,e,n){this.message=t||"Uncaught error with no additional information",this.sourceURL=e,this.line=n}function o(t){i("err",[t,(new Date).getTime()])}var i=t("handle"),a=t(16),c=t("ee"),s=t("loader"),f=window.onerror,u=!1,d=0;s.features.err=!0,t(1),window.onerror=r;try{throw new Error}catch(l){"stack"in l&&(t(8),t(7),"addEventListener"in window&&t(5),s.xhrWrappable&&t(9),u=!0)}c.on("fn-start",function(t,e,n){u&&(d+=1)}),c.on("fn-err",function(t,e,n){u&&(this.thrown=!0,o(n))}),c.on("fn-end",function(){u&&!this.thrown&&d>0&&(d-=1)}),c.on("internal-error",function(t){i("ierr",[t,(new Date).getTime(),!0])})},{}],3:[function(t,e,n){t("loader").features.ins=!0},{}],4:[function(t,e,n){function r(t){}if(window.performance&&window.performance.timing&&window.performance.getEntriesByType){var o=t("ee"),i=t("handle"),a=t(8),c=t(7),s="learResourceTimings",f="addEventListener",u="resourcetimingbufferfull",d="bstResource",l="resource",p="-start",h="-end",m="fn"+p,w="fn"+h,v="bstTimer",y="pushState";t("loader").features.stn=!0,t(6);var g=NREUM.o.EV;o.on(m,function(t,e){var n=t[0];n instanceof g&&(this.bstStart=Date.now())}),o.on(w,function(t,e){var n=t[0];n instanceof g&&i("bst",[n,e,this.bstStart,Date.now()])}),a.on(m,function(t,e,n){this.bstStart=Date.now(),this.bstType=n}),a.on(w,function(t,e){i(v,[e,this.bstStart,Date.now(),this.bstType])}),c.on(m,function(){this.bstStart=Date.now()}),c.on(w,function(t,e){i(v,[e,this.bstStart,Date.now(),"requestAnimationFrame"])}),o.on(y+p,function(t){this.time=Date.now(),this.startPath=location.pathname+location.hash}),o.on(y+h,function(t){i("bstHist",[location.pathname+location.hash,this.startPath,this.time])}),f in window.performance&&(window.performance["c"+s]?window.performance[f](u,function(t){i(d,[window.performance.getEntriesByType(l)]),window.performance["c"+s]()},!1):window.performance[f]("webkit"+u,function(t){i(d,[window.performance.getEntriesByType(l)]),window.performance["webkitC"+s]()},!1)),document[f]("scroll",r,!1),document[f]("keypress",r,!1),document[f]("click",r,!1)}},{}],5:[function(t,e,n){function r(t){for(var e=t;e&&!e.hasOwnProperty(u);)e=Object.getPrototypeOf(e);e&&o(e)}function o(t){c.inPlace(t,[u,d],"-",i)}function i(t,e){return t[1]}var a=t("ee").get("events"),c=t(17)(a,!0),s=t("gos"),f=XMLHttpRequest,u="addEventListener",d="removeEventListener";e.exports=a,"getPrototypeOf"in Object?(r(document),r(window),r(f.prototype)):f.prototype.hasOwnProperty(u)&&(o(window),o(f.prototype)),a.on(u+"-start",function(t,e){var n=t[1],r=s(n,"nr@wrapped",function(){function t(){if("function"==typeof n.handleEvent)return n.handleEvent.apply(n,arguments)}var e={object:t,"function":n}[typeof n];return e?c(e,"fn-",null,e.name||"anonymous"):n});this.wrapped=t[1]=r}),a.on(d+"-start",function(t){t[1]=this.wrapped||t[1]})},{}],6:[function(t,e,n){var r=t("ee").get("history"),o=t(17)(r);e.exports=r,o.inPlace(window.history,["pushState","replaceState"],"-")},{}],7:[function(t,e,n){var r=t("ee").get("raf"),o=t(17)(r),i="equestAnimationFrame";e.exports=r,o.inPlace(window,["r"+i,"mozR"+i,"webkitR"+i,"msR"+i],"raf-"),r.on("raf-start",function(t){t[0]=o(t[0],"fn-")})},{}],8:[function(t,e,n){function r(t,e,n){t[0]=a(t[0],"fn-",null,n)}function o(t,e,n){this.method=n,this.timerDuration="number"==typeof t[1]?t[1]:0,t[0]=a(t[0],"fn-",this,n)}var i=t("ee").get("timer"),a=t(17)(i),c="setTimeout",s="setInterval",f="clearTimeout",u="-start",d="-";e.exports=i,a.inPlace(window,[c,"setImmediate"],c+d),a.inPlace(window,[s],s+d),a.inPlace(window,[f,"clearImmediate"],f+d),i.on(s+u,r),i.on(c+u,o)},{}],9:[function(t,e,n){function r(t,e){d.inPlace(e,["onreadystatechange"],"fn-",c)}function o(){var t=this,e=u.context(t);t.readyState>3&&!e.resolved&&(e.resolved=!0,u.emit("xhr-resolved",[],t)),d.inPlace(t,w,"fn-",c)}function i(t){v.push(t),h&&(g=-g,b.data=g)}function a(){for(var t=0;t<v.length;t++)r([],v[t]);v.length&&(v=[])}function c(t,e){return e}function s(t,e){for(var n in t)e[n]=t[n];return e}t(5);var f=t("ee"),u=f.get("xhr"),d=t(17)(u),l=NREUM.o,p=l.XHR,h=l.MO,m="readystatechange",w=["onload","onerror","onabort","onloadstart","onloadend","onprogress","ontimeout"],v=[];e.exports=u;var y=window.XMLHttpRequest=function(t){var e=new p(t);try{u.emit("new-xhr",[e],e),e.addEventListener(m,o,!1)}catch(n){try{u.emit("internal-error",[n])}catch(r){}}return e};if(s(p,y),y.prototype=p.prototype,d.inPlace(y.prototype,["open","send"],"-xhr-",c),u.on("send-xhr-start",function(t,e){r(t,e),i(e)}),u.on("open-xhr-start",r),h){var g=1,b=document.createTextNode(g);new h(a).observe(b,{characterData:!0})}else f.on("fn-end",function(t){t[0]&&t[0].type===m||a()})},{}],10:[function(t,e,n){function r(t){var e=this.params,n=this.metrics;if(!this.ended){this.ended=!0;for(var r=0;r<d;r++)t.removeEventListener(u[r],this.listener,!1);if(!e.aborted){if(n.duration=(new Date).getTime()-this.startTime,4===t.readyState){e.status=t.status;var i=o(t,this.lastSize);if(i&&(n.rxSize=i),this.sameOrigin){var a=t.getResponseHeader("X-NewRelic-App-Data");a&&(e.cat=a.split(", ").pop())}}else e.status=0;n.cbTime=this.cbTime,f.emit("xhr-done",[t],t),c("xhr",[e,n,this.startTime])}}}function o(t,e){var n=t.responseType;if("json"===n&&null!==e)return e;var r="arraybuffer"===n||"blob"===n||"json"===n?t.response:t.responseText;return h(r)}function i(t,e){var n=s(e),r=t.params;r.host=n.hostname+":"+n.port,r.pathname=n.pathname,t.sameOrigin=n.sameOrigin}var a=t("loader");if(a.xhrWrappable){var c=t("handle"),s=t(11),f=t("ee"),u=["load","error","abort","timeout"],d=u.length,l=t("id"),p=t(14),h=t(13),m=window.XMLHttpRequest;a.features.xhr=!0,t(9),f.on("new-xhr",function(t){var e=this;e.totalCbs=0,e.called=0,e.cbTime=0,e.end=r,e.ended=!1,e.xhrGuids={},e.lastSize=null,p&&(p>34||p<10)||window.opera||t.addEventListener("progress",function(t){e.lastSize=t.loaded},!1)}),f.on("open-xhr-start",function(t){this.params={method:t[0]},i(this,t[1]),this.metrics={}}),f.on("open-xhr-end",function(t,e){"loader_config"in NREUM&&"xpid"in NREUM.loader_config&&this.sameOrigin&&e.setRequestHeader("X-NewRelic-ID",NREUM.loader_config.xpid)}),f.on("send-xhr-start",function(t,e){var n=this.metrics,r=t[0],o=this;if(n&&r){var i=h(r);i&&(n.txSize=i)}this.startTime=(new Date).getTime(),this.listener=function(t){try{"abort"===t.type&&(o.params.aborted=!0),("load"!==t.type||o.called===o.totalCbs&&(o.onloadCalled||"function"!=typeof e.onload))&&o.end(e)}catch(n){try{f.emit("internal-error",[n])}catch(r){}}};for(var a=0;a<d;a++)e.addEventListener(u[a],this.listener,!1)}),f.on("xhr-cb-time",function(t,e,n){this.cbTime+=t,e?this.onloadCalled=!0:this.called+=1,this.called!==this.totalCbs||!this.onloadCalled&&"function"==typeof n.onload||this.end(n)}),f.on("xhr-load-added",function(t,e){var n=""+l(t)+!!e;this.xhrGuids&&!this.xhrGuids[n]&&(this.xhrGuids[n]=!0,this.totalCbs+=1)}),f.on("xhr-load-removed",function(t,e){var n=""+l(t)+!!e;this.xhrGuids&&this.xhrGuids[n]&&(delete this.xhrGuids[n],this.totalCbs-=1)}),f.on("addEventListener-end",function(t,e){e instanceof m&&"load"===t[0]&&f.emit("xhr-load-added",[t[1],t[2]],e)}),f.on("removeEventListener-end",function(t,e){e instanceof m&&"load"===t[0]&&f.emit("xhr-load-removed",[t[1],t[2]],e)}),f.on("fn-start",function(t,e,n){e instanceof m&&("onload"===n&&(this.onload=!0),("load"===(t[0]&&t[0].type)||this.onload)&&(this.xhrCbStart=(new Date).getTime()))}),f.on("fn-end",function(t,e){this.xhrCbStart&&f.emit("xhr-cb-time",[(new Date).getTime()-this.xhrCbStart,this.onload,e],e)})}},{}],11:[function(t,e,n){e.exports=function(t){var e=document.createElement("a"),n=window.location,r={};e.href=t,r.port=e.port;var o=e.href.split("://");!r.port&&o[1]&&(r.port=o[1].split("/")[0].split("@").pop().split(":")[1]),r.port&&"0"!==r.port||(r.port="https"===o[0]?"443":"80"),r.hostname=e.hostname||n.hostname,r.pathname=e.pathname,r.protocol=o[0],"/"!==r.pathname.charAt(0)&&(r.pathname="/"+r.pathname);var i=!e.protocol||":"===e.protocol||e.protocol===n.protocol,a=e.hostname===document.domain&&e.port===n.port;return r.sameOrigin=i&&(!e.hostname||a),r}},{}],12:[function(t,e,n){function r(){}function o(t,e,n){return function(){return i(t,[(new Date).getTime()].concat(c(arguments)),e?null:this,n),e?void 0:this}}var i=t("handle"),a=t(15),c=t(16),s=t("ee").get("tracer"),f=NREUM;"undefined"==typeof window.newrelic&&(newrelic=f);var u=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit"],d="api-",l=d+"ixn-";a(u,function(t,e){f[e]=o(d+e,!0,"api")}),f.addPageAction=o(d+"addPageAction",!0),f.setCurrentRouteName=o(d+"routeName",!0),e.exports=newrelic,f.interaction=function(){return(new r).get()};var p=r.prototype={createTracer:function(t,e){var n={},r=this,o="function"==typeof e;return i(l+"tracer",[Date.now(),t,n],r),function(){if(s.emit((o?"":"no-")+"fn-start",[Date.now(),r,o],n),o)try{return e.apply(this,arguments)}finally{s.emit("fn-end",[Date.now()],n)}}}};a("setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(t,e){p[e]=o(l+e)}),newrelic.noticeError=function(t){"string"==typeof t&&(t=new Error(t)),i("err",[t,(new Date).getTime()])}},{}],13:[function(t,e,n){e.exports=function(t){if("string"==typeof t&&t.length)return t.length;if("object"==typeof t){if("undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer&&t.byteLength)return t.byteLength;if("undefined"!=typeof Blob&&t instanceof Blob&&t.size)return t.size;if(!("undefined"!=typeof FormData&&t instanceof FormData))try{return JSON.stringify(t).length}catch(e){return}}}},{}],14:[function(t,e,n){var r=0,o=navigator.userAgent.match(/Firefox[\/\s](\d+\.\d+)/);o&&(r=+o[1]),e.exports=r},{}],15:[function(t,e,n){function r(t,e){var n=[],r="",i=0;for(r in t)o.call(t,r)&&(n[i]=e(r,t[r]),i+=1);return n}var o=Object.prototype.hasOwnProperty;e.exports=r},{}],16:[function(t,e,n){function r(t,e,n){e||(e=0),"undefined"==typeof n&&(n=t?t.length:0);for(var r=-1,o=n-e||0,i=Array(o<0?0:o);++r<o;)i[r]=t[e+r];return i}e.exports=r},{}],17:[function(t,e,n){function r(t){return!(t&&t instanceof Function&&t.apply&&!t[a])}var o=t("ee"),i=t(16),a="nr@original",c=Object.prototype.hasOwnProperty,s=!1;e.exports=function(t,e){function n(t,e,n,o){function nrWrapper(){var r,a,c,s;try{a=this,r=i(arguments),c="function"==typeof n?n(r,a):n||{}}catch(f){l([f,"",[r,a,o],c])}u(e+"start",[r,a,o],c);try{return s=t.apply(a,r)}catch(d){throw u(e+"err",[r,a,d],c),d}finally{u(e+"end",[r,a,s],c)}}return r(t)?t:(e||(e=""),nrWrapper[a]=t,d(t,nrWrapper),nrWrapper)}function f(t,e,o,i){o||(o="");var a,c,s,f="-"===o.charAt(0);for(s=0;s<e.length;s++)c=e[s],a=t[c],r(a)||(t[c]=n(a,f?c+o:o,i,c))}function u(n,r,o){if(!s||e){var i=s;s=!0;try{t.emit(n,r,o)}catch(a){l([a,n,r,o])}s=i}}function d(t,e){if(Object.defineProperty&&Object.keys)try{var n=Object.keys(t);return n.forEach(function(n){Object.defineProperty(e,n,{get:function(){return t[n]},set:function(e){return t[n]=e,e}})}),e}catch(r){l([r])}for(var o in t)c.call(t,o)&&(e[o]=t[o]);return e}function l(e){try{t.emit("internal-error",e)}catch(n){}}return t||(t=o),n.inPlace=f,n.flag=a,n}},{}],ee:[function(t,e,n){function r(){}function o(t){function e(t){return t&&t instanceof r?t:t?s(t,c,i):i()}function n(n,r,o){if(!p){t&&t(n,r,o);for(var i=e(o),a=h(n),c=a.length,s=0;s<c;s++)a[s].apply(i,r);var f=u[y[n]];return f&&f.push([g,n,r,i]),i}}function l(t,e){v[t]=h(t).concat(e)}function h(t){return v[t]||[]}function m(t){return d[t]=d[t]||o(n)}function w(t,e){f(t,function(t,n){e=e||"feature",y[n]=e,e in u||(u[e]=[])})}var v={},y={},g={on:l,emit:n,get:m,listeners:h,context:e,buffer:w,abort:a};return g}function i(){return new r}function a(){p=!0,u=l.backlog={}}var c="nr@context",s=t("gos"),f=t(15),u={},d={},l=e.exports=o(),p=!1;l.backlog=u},{}],gos:[function(t,e,n){function r(t,e,n){if(o.call(t,e))return t[e];var r=n();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(t,e,{value:r,writable:!0,enumerable:!1}),r}catch(i){}return t[e]=r,r}var o=Object.prototype.hasOwnProperty;e.exports=r},{}],handle:[function(t,e,n){function r(t,e,n,r){o.buffer([t],r),o.emit(t,e,n)}var o=t("ee").get("handle");e.exports=r,r.ee=o},{}],id:[function(t,e,n){function r(t){var e=typeof t;return!t||"object"!==e&&"function"!==e?-1:t===window?0:a(t,i,function(){return o++})}var o=1,i="nr@id",a=t("gos");e.exports=r},{}],loader:[function(t,e,n){function r(){if(!b++){var t=g.info=NREUM.info,e=d.getElementsByTagName("script")[0];if(setTimeout(f.abort,3e4),!(t&&t.licenseKey&&t.applicationID&&e))return f.abort();s(v,function(e,n){t[e]||(t[e]=n)}),c("mark",["onload",a()],null,"api");var n=d.createElement("script");n.src="https://"+t.agent,e.parentNode.insertBefore(n,e)}}function o(){"complete"===d.readyState&&i()}function i(){c("mark",["domContent",a()],null,"api")}function a(){return(new Date).getTime()}var c=t("handle"),s=t(15),f=t("ee"),u=window,d=u.document,l="addEventListener",p="attachEvent",h=u.XMLHttpRequest,m=h&&h.prototype;NREUM.o={ST:setTimeout,CT:clearTimeout,XHR:h,REQ:u.Request,EV:u.Event,PR:u.Promise,MO:u.MutationObserver},t(12);var w=""+location,v={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"./style/js/nr-995.min.js"},y=h&&m&&m[l]&&!/CriOS/.test(navigator.userAgent),g=e.exports={offset:a(),origin:w,features:{},xhrWrappable:y};d[l]?(d[l]("DOMContentLoaded",i,!1),u[l]("load",r,!1)):(d[p]("onreadystatechange",o),u[p]("onload",r)),c("mark",["firstbyte",a()],null,"api");var b=0},{}]},{},["loader",2,10,4,3]);</script>

<meta http-equiv="cache-control" content="no-cache">

<meta name="language" content="english">
<meta name="distribution" content="global">
<meta name="author" content="Behance">
<meta name="publisher" content="Behance">
<meta name="copyright" content="2016 Behance">
<meta name="p:domain_verify" content="d7cdd4d26570133b3ce3a1e3c095b3a4">
<meta name="fb:app_id" content="229702757350">
<meta name="twitter:widgets:csp" content="on">


<meta name="viewport"
	content="width=device-width, initial-scale=0.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">

<link rel="alternate" type="application/rss+xml" title="RSS" href="#">

<link rel="alternate" type="application/json+oembed" href="#"
	title="maya bora on Behance">
<meta name="description" content="maya bora on Behance">
<meta name="keywords"
	content="maya bora, Illustration, Character Design, Drawing">
<meta name="robots" content="index, follow">
<meta name="revisit-after" content="2 days">
<meta property="og:site_name" content="Behance">
<meta property="og:title" content="maya bora on Behance">
<meta property="og:image"
	content="https://mir-s3-cdn-cf.behance.net/user/276/6a65bc14393183.557444a2387a6.jpg">

<link rel="shortcut icon" href="#">
<link rel="apple-touch-icon" href="#">

<title>maya bora on Behance</title>

<link rel="stylesheet" href="./style/css/networki.css" type="text/css">
<link rel="stylesheet" href="./style/css/responsive.css" type="text/css">
<link rel="stylesheet" href="./style/css/view.css" type="text/css">


<script type="application/json" id="global-config-json">{"CBSTR":"cb=1020668724","ASSETSURL":"https:\/\/a3.behance.net\/"}</script>

<script type="text/javascript" nonce="">!function(){"use strict";function n(n,t,e){function r(n){i.push(n),u||(u=!0,setTimeout(function(){e(i),u=!1,i=[]},0))}var o={},i=[],u=!1,c=n.onerror;n.onerror=function(){var n=t.apply(null,arguments),e=JSON.stringify(n);o[e]||(o[e]=!0,r(n)),c&&c.apply(this,arguments)}}function t(n){return"undefined"!=typeof n}function e(n){return"[object Event]"===String(n)?"Event#target.src="+(n.target&&n.target.src):n}function r(n,r,o,i,u){var c={};return n&&(n=String("object"==typeof n?e(n):n)),r&&(c.file=String(r)),t(o)&&(c.line=Number(o)),t(i)&&(c.column=Number(i)),u&&u.stack&&(c.stack=String(u.stack)),{level:"ERROR",channel:"js_errors",message:n,context:c}}function o(n){for(var t=[],e=0;e<n.length;e++)t[e]="logs[]="+encodeURIComponent(JSON.stringify(n[e]));return t.join("&")}function i(n){var t=new XMLHttpRequest;t.open("POST","/log"),t.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),t.send(o(n))}n(window,r,i)}();</script>
<script crossorigin="" type="text/javascript"
	src="./style./style/js/es6-shim.js"></script>
<script crossorigin="" type="text/javascript"
	src="./style./style/js/require.js"></script>
<script crossorigin="" type="text/javascript"
	src="./style./style/js/jquery.min.js"></script>
<script crossorigin="" type="text/javascript"
	src="./style./style/js/config.js"></script>
<script
	src="./style./style/js/satelliteLib-2b43738638f531ea196940466fee2fa1d507608c.js"></script>
<script
	src="./style/js/mbox-contents-7748e8dabc4ffc8c33bccad2e1f3cf106dd23ef1.js"></script>
<script src="./style/js/satellite-54400420b1f6d7daf10001cd.js"></script>
<style>
.mboxDefault {
	visibility: hidden;
}
</style>
<script src="./style/js/target.js"></script>
<script src="./style/css/ajax"></script>
<style type="text/css"></style>
<style type="text/css">/** IMPORTANT: If you are in a CSS file (and not in a SCSS file), close this and open the corresponding SCSS file to edit */
.activate-account-popup {
	font-size: 16px;
	text-align: center;
}

.activate-account-popup.desktop.no-title .popup-content {
	padding: 0;
}

.activate-account-popup .user-image-container {
	width: 97px;
	height: 97px;
	margin: 42px auto 25px;
}

.activate-account-popup .owner-image {
	width: 100%;
}

.activate-account-popup .adobe-id, .activate-account-popup .have-account-login
	{
	font-weight: bold;
}

.activate-account-popup .already-have-account {
	border-top: 1px solid #e0e0e0;
	font-size: 14px;
	margin: 62px 0 0;
	padding: 22px 0;
}

.activate-account-popup .have-account-login {
	color: #262626;
}

.activate-account-content {
	overflow: hidden;
	padding: 0 30px;
}

.activate-welcome-header {
	font-size: 26px;
	font-weight: 300;
	line-height: 30px;
	margin: 0 0 11px;
}

.activate-login-info {
	line-height: 25px;
	padding: 0 0 29px;
}

.activate-content-divider {
	width: 44px;
	height: 1px;
	background: #e0e0e0;
	display: inline-block;
	margin: 0 0 32px;
}

.activate-behance {
	margin: 0 0 25px;
}

@media ( max-width : 603px) {
	.activate-account-popup .user-image-container {
		display: none;
	}
	.activate-account-popup.popup.layover .popup-content {
		padding-left: 0;
		padding-right: 0;
	}
	.activate-account-popup .already-have-account {
		margin-top: 52px;
		padding-bottom: 0;
		padding-top: 13px;
	}
	.activate-welcome-header {
		line-height: 30px;
		margin-bottom: 12px;
		margin-top: 10px;
	}
	.activate-login-info {
		padding-bottom: 15px;
	}
	.activate-content-divider {
		margin-bottom: 22px;
	}
}
</style>
<script type="text/javascript" charset="utf-8" async
	data-requirecontext="_"
	data-requiremodule="./style/js/imslib.min.js?client_id=BehanceWebSusi1&amp;locale=zh_CN"
	src="./style/js/imslib.min.js"></script>
<style type="text/css">
.popup.mini-profile:before {
	width: 20px;
	height: 20px;
	background: #fff;
	box-shadow: -2px -2px 4px -2px rgba(0, 0, 0, 0.4);
	content: '';
	position: absolute;
	z-index: -1;
}

.popup.mini-profile.top-right:before, .popup.mini-profile.top-left:before
	{
	-webkit-transform: rotate(45deg);
	-moz-transform: rotate(45deg);
	-ms-transform: rotate(45deg);
	-o-transform: rotate(45deg);
	transform: rotate(45deg);
	top: -8px;
}

.popup.mini-profile.bottom-right:before, .popup.mini-profile.bottom-left:before
	{
	-webkit-transform: rotate(-134deg);
	-moz-transform: rotate(-134deg);
	-ms-transform: rotate(-134deg);
	-o-transform: rotate(-134deg);
	transform: rotate(-134deg);
	bottom: -8px;
}

.popup.mini-profile.top-right:before, .popup.mini-profile.bottom-right:before
	{
	right: 45px;
}

.popup.mini-profile.top-left:before, .popup.mini-profile.bottom-left:before
	{
	left: 45px;
}

.mini-profile-wrap {
	width: 331px;
}

.mini-profile-wrap .gallery-projects-wrap {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	background: #fff;
	border: 1px solid #d9d9d9;
	border-radius: 4px;
	padding: 4px 3px 4px 1px;
	position: relative;
	text-decoration: none;
	width: 361px;
}

.mini-profile-wrap .gallery-projects-wrap .gallery-cover-overlay {
	background: #0088f5;
	background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(0, 156, 252, 0.75)),
		to(rgba(0, 116, 238, 0.75)));
	background: -webkit-linear-gradient(0% 0%, 0% 100%, from(rgba(0, 156, 252, 0.75)),
		to(rgba(0, 116, 238, 0.75)));
	background: -moz-linear-gradient(center top, rgba(0, 156, 252, 0.75),
		rgba(0, 116, 238, 0.75));
	background: linear-gradient(rgba(0, 156, 252, 0.75),
		rgba(0, 116, 238, 0.75));
	-webkit-transition: opacity 0.15s ease-in;
	transition: opacity 0.15s ease-in;
	border: 1px solid #356bca;
	border-radius: 4px;
	bottom: 0;
	color: #fff;
	font-size: 16px;
	left: 0;
	opacity: 0;
	position: absolute;
	right: 0;
	text-align: center;
	text-decoration: none !important;
	text-shadow: 1px 2px 0 #0a4fb9;
	text-transform: uppercase;
	top: 0;
}

.ie .mini-profile-wrap .gallery-projects-wrap .gallery-cover-overlay {
	display: none;
	font-weight: bold;
}

.mini-profile-wrap .gallery-projects-wrap:hover .gallery-cover-overlay {
	opacity: 1;
}

.ie .mini-profile-wrap .gallery-projects-wrap:hover .gallery-cover-overlay
	{
	background: rgba(0, 156, 252, 0.75);
	display: block;
}

.mini-profile-wrap .gallery-projects-wrap .gallery-cover-overlay-text {
	-ms-transform: translateY(-50%);
	-webkit-transform: translateY(-50%);
	transform: translateY(-50%);
	position: absolute;
	top: 50%;
	width: 100%;
}

.mini-profile-wrap .gallery-projects-wrap .project-cover-wrap {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	background: #f3f3f3;
	border-left: 3px solid #fff;
	float: left;
	height: 90px;
	overflow: hidden;
	width: 33.3%;
}

.mini-profile-wrap .gallery-projects-wrap .project-cover-wrap .project-cover
	{
	border-radius: 0;
	box-shadow: none;
	margin: 0;
	vertical-align: top;
	visibility: visible;
	width: 100%;
}

.mini-profile-wrap .gallery-projects-wrap .project-cover-wrap.empty .project-cover
	{
	display: none;
}

.mini-profile-wrap .gallery-projects-wrap-4 {
	width: 479px;
}

.mini-profile-wrap .gallery-projects-wrap-4 .project-cover-wrap {
	width: 25%;
}

.mini-profile-wrap .gallery-projects-wrap-4 .project-cover-wrap:nth-child(n+5)
	{
	display: none;
}

.mini-profile-wrap .gallery-projects-wrap-2 {
	width: 242px;
}

.mini-profile-wrap .gallery-projects-wrap-2 .project-cover-wrap {
	width: 50%;
}

.mini-profile-wrap .gallery-projects-wrap-2 .project-cover-wrap:nth-child(n+3)
	{
	display: none;
}

.mini-profile-wrap .user-image-wrap, .mini-profile-wrap .user-image {
	width: 35px;
	height: 35px;
}

.mini-profile-wrap .user-image-wrap {
	background: #f3f3f3;
	display: block;
	float: left;
	margin: 0 10px 0 0;
	padding: 0;
}

.mini-profile-wrap .user-info {
	display: inline-block;
	max-width: 160px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.mini-profile-wrap .user-name {
	color: #3c3c3c;
	display: block;
	font-size: 14px;
	padding-bottom: 3px;
}

.mini-profile-wrap .location-link {
	color: #6f6f6f;
	font-size: 13px;
}

.mini-profile-wrap .location-link:before {
	margin-right: 3px;
}

.mini-profile-wrap .follow-button-container {
	float: right;
	width: auto !important;
}

.mini-profile-wrap .gallery-projects-wrap {
	float: left;
	margin: 0 0 10px;
	width: 331px;
}

.mini-profile-wrap .gallery-projects-wrap .project-cover-wrap {
	display: block !important;
	height: 82px;
	width: 108px;
}

.mini-profile-wrap .user-stats-followed {
	float: inherit;
}

.mini-profile-wrap .user-info-container {
	display: inline-block;
}

.mini-profile-wrap .stats-wrap {
	color: #adadad;
	font-size: 13px;
	font-weight: bold;
	margin-bottom: -2px;
}

.mini-profile-wrap .cover-stat {
	margin-right: 10px;
}

.mini-profile-wrap .cover-stat:before {
	margin-right: 2px;
}
</style>
<style type="text/css">/*! fancyBox v2.0.4 fancyapps.com | fancyapps.com/fancybox/#license */
.fancybox-tmp iframe, .fancybox-tmp object {
	vertical-align: top;
	padding: 0;
	margin: 0;
}

.fancybox-wrap {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1002;
}

.fancybox-outer {
	padding: 0;
	margin: 0;
	background: #f9f9f9;
	color: #444;
	text-shadow: none;
	-webkit-border-radius: 4px;
	-moz-border-radius: 4px;
	border-radius: 4px;
}

.fancybox-opened {
	z-index: 1003;
}

.fancybox-opened .fancybox-outer {
	-webkit-box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
	-moz-box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
	box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
}

.fancybox-inner {
	width: 100%;
	height: 100%;
	padding: 0;
	margin: 0;
	position: relative;
	outline: none;
	overflow: hidden;
}

.fancybox-error {
	color: #444;
	font: 14px/20px "Helvetica Neue", Helvetica, Arial, sans-serif;
	margin: 0;
	padding: 10px;
}

.fancybox-image, .fancybox-iframe {
	display: block;
	width: 100%;
	height: 100%;
	border: 0;
	padding: 0;
	margin: 0;
	vertical-align: top;
}

.fancybox-image {
	max-width: 100%;
	max-height: 100%;
}

#fancybox-loading {
	position: fixed;
	top: 50%;
	left: 50%;
	margin-top: -21px;
	margin-left: -21px;
	width: 42px;
	height: 42px;
	background:
		url("//a3.behance.net/img/jquery/plugins/fancybox/loading.gif?cb=1020668724");
	opacity: 0.8;
	cursor: pointer;
	z-index: 1010;
}

.fancybox-close, .fancybox-prev span, .fancybox-next span {
	background-image:
		url("//a3.behance.net/img/jquery/plugins/fancybox/sprite.png?cb=1020668724");
}

.fancybox-close {
	position: absolute;
	top: -18px;
	right: -18px;
	width: 36px;
	height: 36px;
	cursor: pointer;
	z-index: 1004;
}

.fancybox-prev, .fancybox-next {
	position: absolute;
	top: 0;
	width: 40%;
	height: 100%;
	cursor: pointer;
	background: transparent
		url("//a3.behance.net/img/jquery/blank.gif?cb=1020668724");
	/* helps IE */
	z-index: 1003;
}

.fancybox-prev {
	left: 0;
}

.fancybox-next {
	right: 0;
}

.fancybox-prev span, .fancybox-next span {
	position: absolute;
	top: 50%;
	left: -9999px;
	width: 36px;
	height: 36px;
	margin-top: -18px;
	cursor: pointer;
	z-index: 1003;
}

.fancybox-prev span {
	background-position: 0 -36px;
}

.fancybox-next span {
	background-position: 0 -72px;
}

.fancybox-prev:hover, .fancybox-next:hover {
	visibility: visible;
}

.fancybox-prev:hover span {
	left: 20px;
}

.fancybox-next:hover span {
	left: auto;
	right: 20px;
}

.fancybox-tmp {
	position: absolute;
	top: -9999px;
	left: -9999px;
	padding: 0;
	overflow: visible;
	visibility: hidden;
}

/* Overlay helper */
#fancybox-overlay {
	position: absolute;
	top: 0;
	left: 0;
	overflow: hidden;
	display: none;
	z-index: 1001;
	background: #000;
}

/* Title helper */
.fancybox-title {
	visibility: hidden;
	font: normal 13px/20px "Helvetica Neue", Helvetica, Arial, sans-serif;
	position: relative;
	text-shadow: none;
	z-index: 1005;
}

.fancybox-opened .fancybox-title {
	visibility: visible;
}

.fancybox-title-float-wrap {
	position: absolute;
	bottom: 0;
	right: 50%;
	margin-bottom: -35px;
	z-index: 1003;
	text-align: center;
}

.fancybox-title-float-wrap .child {
	display: inline-block;
	margin-right: -100%;
	padding: 2px 20px;
	background: transparent;
	/* Fallback for web browsers that doesn't support RGBa */
	background: rgba(0, 0, 0, 0.8);
	-webkit-border-radius: 15px;
	-moz-border-radius: 15px;
	border-radius: 15px;
	text-shadow: 0 1px 2px #222;
	color: #FFF;
	font-weight: bold;
	line-height: 24px;
	white-space: nowrap;
}

.fancybox-title-outside-wrap {
	position: relative;
	margin-top: 10px;
	color: #fff;
}

.fancybox-title-inside-wrap {
	margin-top: 10px;
}

.fancybox-title-over-wrap {
	position: absolute;
	bottom: 0;
	left: 0;
	color: #fff;
	padding: 10px;
	background: #000;
	background: rgba(0, 0, 0, 0.8);
}
</style>
<style type="text/css">
html.lightbox-enabled, html.lightbox-enabled body {
	overflow: hidden;
}

html.lightbox-zoomed .lightbox-content {
	cursor: zoom-out;
	overflow: auto;
}

html.lightbox-zoomed .lightbox-content.zoomable-x {
	justify-content: flex-start;
}

html.lightbox-zoomed .lightbox-content.zoomable-y {
	align-items: baseline;
}

html.lightbox-zoomed #lightbox-wrap img {
	max-width: inherit;
	max-height: inherit;
}

html.lightbox-zoomed #lightbox-img-wrap .lightbox-extra {
	display: none;
}

.lightbox-link, .lightbox-content.zoomable {
	cursor: zoom-in;
}

#lightbox-wrap .lightbox-contents {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none;
}

.lightbox-content {
	align-items: center;
	display: flex;
	height: 100vh;
	justify-content: center;
	opacity: 1;
	position: absolute;
	top: 0;
	transition: opacity .4s;
	width: 100vw;
}

#lightbox-blocking {
	align-items: center;
	bottom: 0;
	display: flex;
	justify-content: center;
	left: 0;
	position: fixed;
	right: 0;
	top: 0;
	z-index: 1002;
}

#lightbox-blocking .lightbox-spinner {
	display: none;
}

#lightbox-wrap {
	height: 100vh;
	left: 0;
	position: fixed;
	top: 0;
	width: 100vw;
	z-index: 1001;
}

#lightbox-wrap .offscreen, #lightbox-wrap.offscreen {
	height: 0;
	overflow: hidden;
	visibility: hidden;
	-webkit-transform: translateX(-99999px);
	-ms-transform: translateX(-99999px);
	transform: translateX(-99999px);
	width: 0;
}

#lightbox-wrap.loading .lightbox-spinner {
	display: block;
}

#lightbox-wrap .hidden {
	opacity: 0;
}

#lightbox-wrap .lightbox-contents {
	display: inline-block;
	max-height: 100%;
	max-width: 100%;
}

#lightbox-wrap.single .next, #lightbox-wrap.single .next:hover,
	#lightbox-wrap.single .prev, #lightbox-wrap.single .prev:hover {
	display: none;
}

#lightbox-wrap.extras-hidden #lightbox-img-wrap .lightbox-extra {
	opacity: 0;
	transition: opacity 1s;
}

#lightbox-wrap img {
	max-height: 100vh;
	max-width: 100vw;
}

#lightbox-inner-wrap {
	margin: auto;
	position: relative;
	z-index: 1003;
}

#lightbox-inner-wrap .control {
	cursor: pointer;
	position: absolute;
	z-index: 1003;
}

#lightbox-inner-wrap svg .lightbox-icon-bg {
	fill: #696969;
	opacity: .2;
}

#lightbox-inner-wrap svg:hover .lightbox-icon-bg {
	opacity: .4;
}

#lightbox-inner-wrap .next, #lightbox-inner-wrap .prev {
	height: 100vh;
	opacity: 0;
	top: 0;
	width: 30vw;
}

#lightbox-inner-wrap .next:hover, #lightbox-inner-wrap .prev:hover {
	opacity: 1;
}

#lightbox-inner-wrap .next.hidden, #lightbox-inner-wrap .prev.hidden {
	cursor: default;
}

#lightbox-inner-wrap .next.hidden svg, #lightbox-inner-wrap .prev.hidden svg
	{
	display: none;
}

#lightbox-inner-wrap .next svg, #lightbox-inner-wrap .prev svg {
	top: -webkit-calc(50% - 30px);
	top: calc(50% - 30px);
	position: absolute;
}

#lightbox-inner-wrap .next svg .lightbox-icon-arrow,
	#lightbox-inner-wrap .prev svg .lightbox-icon-arrow {
	fill: #FFFFFF;
}

#lightbox-inner-wrap .next {
	right: 0;
}

#lightbox-inner-wrap .next svg {
	right: 20px;
}

#lightbox-inner-wrap .prev {
	left: 0;
}

#lightbox-inner-wrap .prev svg {
	left: 20px;
}

#lightbox-inner-wrap .close {
	position: fixed;
	height: 40px;
	right: 20px;
	top: 20px;
	width: 40px;
}

#lightbox-inner-wrap .close:hover {
	cursor: pointer;
}

#lightbox-inner-wrap .close .lightbox-icon-bg {
	fill: #fff;
}

@media ( max-width : 1024px) {
	#lightbox-inner-wrap .close {
		right: 0;
		top: 0;
	}
	#lightbox-inner-wrap .close circle {
		display: none;
	}
	#lightbox-inner-wrap .next:hover, #lightbox-inner-wrap .prev:hover {
		opacity: 0;
	}
}

@media ( min-width : 1024px) {
	.lightbox-link {
		position: relative;
	}
	.lightbox-link:hover::after {
		background: rgba(105, 105, 105, 0.2)
			url(data:image/svg+xml;base64,PHN2ZyBzdHlsZT0iZmlsbDogd2hpdGUiIHZpZXdCb3g9IjAgMCAyMSAyMSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICA8cGF0aCBkPSJNLTEuMjUyMjIyNTEsMTUuNjAzNDE5NyBDLTEuMzUyNTE5MjcsMTUuNjkzNjg2OCAtMS40MjUyMzMzMywxNS43OTg5OTY4IC0xLjQ3MDM2Njg3LDE1LjkxOTM1MjkgQy0xLjUxNTUwMDQxLDE2LjAzOTcwOSAtMS41MzgwNjY4NCwxNi4xNjAwNjMzIC0xLjUzODA2Njg0LDE2LjI4MDQxOTQgQy0xLjUzODA2Njg0LDE2LjQwMDc3NTUgLTEuNTE1NTAwNDEsMTYuNTIxMTI5OCAtMS40NzAzNjY4NywxNi42NDE0ODU5IEMtMS40MjUyMzMzMywxNi43NjE4NDIgLTEuMzUyNTE5MjcsMTYuODY3MTUyIC0xLjI1MjIyMjUxLDE2Ljk1NzQxOTEgTDMuNTYxOTk3NzEsMjEuNzcxNjM5MyBDMy43NTI1NjE1NSwyMS45NjIyMDMyIDMuOTgwNzMzMjQsMjIuMDU3NDgzNyA0LjI0NjUxOTY1LDIyLjA1NzQ4MzcgQzQuNTEyMzA2MDUsMjIuMDU3NDgzNyA0LjczNTQ2Mjk5LDIxLjk2MjIwMzIgNC45MTU5OTcxNSwyMS43NzE2MzkzIEM1LjEwNjU2MDk4LDIxLjU4MTA3NTUgNS4yMDE4NDE0NywyMS4zNTU0MTEyIDUuMjAxODQxNDcsMjEuMDk0NjM5NiBDNS4yMDE4NDE0NywyMC44MzM4NjggNS4xMDY1NjA5OCwyMC42MDgyMDM3IDQuOTE1OTk3MTUsMjAuNDE3NjM5OSBMMS43NTY2NjUxMywxNy4yNDMyNjM0IEwxMC4wMTYwNjE3LDE3LjI0MzI2MzQgQzEwLjI4Njg2MjksMTcuMjQzMjYzNCAxMC41MTUwMzQ2LDE3LjE1MDQ5MDMgMTAuNzAwNTgzNiwxNi45NjQ5NDEzIEMxMC44ODYxMzI2LDE2Ljc3OTM5MjMgMTAuOTc4OTA1NywxNi41NTEyMjA2IDEwLjk3ODkwNTcsMTYuMjgwNDE5NCBDMTAuOTc4OTA1NywxNi4wMDk2MTgyIDEwLjg4NjEzMjYsMTUuNzgxNDQ2NSAxMC43MDA1ODM2LDE1LjU5NTg5NzUgQzEwLjUxNTAzNDYsMTUuNDEwMzQ4NSAxMC4yODY4NjI5LDE1LjMxNzU3NTMgMTAuMDE2MDYxNywxNS4zMTc1NzUzIEwxLjc1NjY2NTEzLDE1LjMxNzU3NTMgTDQuOTE1OTk3MTUsMTIuMTQzMTk4OSBDNS4xMDY1NjA5OCwxMS45NTI2MzUxIDUuMjAxODQxNDcsMTEuNzI2OTcwNyA1LjIwMTg0MTQ3LDExLjQ2NjE5OTIgQzUuMjAxODQxNDcsMTEuMjA1NDI3NiA1LjEwNjU2MDk4LDEwLjk3OTc2MzMgNC45MTU5OTcxNSwxMC43ODkxOTk1IEM0LjczNTQ2Mjk5LDEwLjU5ODYzNTYgNC41MTIzMDYwNSwxMC41MDMzNTUxIDQuMjQ2NTE5NjUsMTAuNTAzMzU1MSBDMy45ODA3MzMyNCwxMC41MDMzNTUxIDMuNzUyNTYxNTUsMTAuNTk4NjM1NiAzLjU2MTk5NzcxLDEwLjc4OTE5OTUgTC0xLjI1MjIyMjUxLDE1LjYwMzQxOTcgWiIgaWQ9IngiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQuNzIwNDE5LCAxNi4yODA0MTkpIHJvdGF0ZSgtNDUuMDAwMDAwKSB0cmFuc2xhdGUoLTQuNzIwNDE5LCAtMTYuMjgwNDE5KSAiPjwvcGF0aD4KICA8cGF0aCBkPSJNMTAuMzA3Nzc3NCw0LjA0MzQxOTczIEMxMC4yMDc0ODA3LDQuMTMzNjg2ODEgMTAuMTM0NzY2Niw0LjIzODk5NjgzIDEwLjA4OTYzMzEsNC4zNTkzNTI5MyBDMTAuMDQ0NDk5NSw0LjQ3OTcwOTA0IDEwLjAyMTkzMzEsNC42MDAwNjMzNCAxMC4wMjE5MzMxLDQuNzIwNDE5NDUgQzEwLjAyMTkzMzEsNC44NDA3NzU1NiAxMC4wNDQ0OTk1LDQuOTYxMTI5ODYgMTAuMDg5NjMzMSw1LjA4MTQ4NTk3IEMxMC4xMzQ3NjY2LDUuMjAxODQyMDcgMTAuMjA3NDgwNyw1LjMwNzE1MjA5IDEwLjMwNzc3NzQsNS4zOTc0MTkxNyBMMTUuMTIxOTk3NywxMC4yMTE2Mzk0IEMxNS4zMTI1NjE1LDEwLjQwMjIwMzIgMTUuNTQwNzMzMiwxMC40OTc0ODM3IDE1LjgwNjUxOTYsMTAuNDk3NDgzNyBDMTYuMDcyMzA2LDEwLjQ5NzQ4MzcgMTYuMjk1NDYyOSwxMC40MDIyMDMyIDE2LjQ3NTk5NzEsMTAuMjExNjM5NCBDMTYuNjY2NTYwOSwxMC4wMjEwNzU2IDE2Ljc2MTg0MTQsOS43OTU0MTEyNCAxNi43NjE4NDE0LDkuNTM0NjM5NjcgQzE2Ljc2MTg0MTQsOS4yNzM4NjgxMSAxNi42NjY1NjA5LDkuMDQ4MjAzNzkgMTYuNDc1OTk3MSw4Ljg1NzYzOTk1IEwxMy4zMTY2NjUxLDUuNjgzMjYzNDkgTDIxLjU3NjA2MTYsNS42ODMyNjM0OSBDMjEuODQ2ODYyOSw1LjY4MzI2MzQ5IDIyLjA3NTAzNDYsNS41OTA0OTAzOSAyMi4yNjA1ODM2LDUuNDA0OTQxMzkgQzIyLjQ0NjEzMjYsNS4yMTkzOTIzOSAyMi41Mzg5MDU3LDQuOTkxMjIwNjkgMjIuNTM4OTA1Nyw0LjcyMDQxOTQ1IEMyMi41Mzg5MDU3LDQuNDQ5NjE4MjEgMjIuNDQ2MTMyNiw0LjIyMTQ0NjUxIDIyLjI2MDU4MzYsNC4wMzU4OTc1MSBDMjIuMDc1MDM0NiwzLjg1MDM0ODUxIDIxLjg0Njg2MjksMy43NTc1NzU0MSAyMS41NzYwNjE2LDMuNzU3NTc1NDEgTDEzLjMxNjY2NTEsMy43NTc1NzU0MSBMMTYuNDc1OTk3MSwwLjU4MzE5ODk0NyBDMTYuNjY2NTYwOSwwLjM5MjYzNTExMSAxNi43NjE4NDE0LDAuMTY2OTcwNzk0IDE2Ljc2MTg0MTQsLTAuMDkzODAwNzcxNSBDMTYuNzYxODQxNCwtMC4zNTQ1NzIzMzcgMTYuNjY2NTYwOSwtMC41ODAyMzY2NTQgMTYuNDc1OTk3MSwtMC43NzA4MDA0OSBDMTYuMjk1NDYyOSwtMC45NjEzNjQzMjcgMTYuMDcyMzA2LC0xLjA1NjY0NDgyIDE1LjgwNjUxOTYsLTEuMDU2NjQ0ODIgQzE1LjU0MDczMzIsLTEuMDU2NjQ0ODIgMTUuMzEyNTYxNSwtMC45NjEzNjQzMjcgMTUuMTIxOTk3NywtMC43NzA4MDA0OSBMMTAuMzA3Nzc3NCw0LjA0MzQxOTczIFoiIGlkPSJ4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4yODA0MTksIDQuNzIwNDE5KSByb3RhdGUoLTIyNS4wMDAwMDApIHRyYW5zbGF0ZSgtMTYuMjgwNDE5LCAtNC43MjA0MTkpICI+PC9wYXRoPgo8L3N2Zz4K)
			no-repeat center;
		background-size: 16px;
		border-radius: 50%;
		content: '';
		display: block;
		height: 36px;
		position: absolute;
		right: 10px;
		top: 10px;
		width: 36px;
		z-index: 1000;
	}
}

@media all and (-ms-high-contrast: none) {
	.lightbox-link, .lightbox-content.zoomable {
		cursor: pointer;
	}
}
</style>
<style type="text/css">
@
-webkit-keyframes rotate-forever { 0% {
	-webkit-transform: rotate(0deg);
	-moz-transform: rotate(0deg);
	-ms-transform: rotate(0deg);
	-o-transform: rotate(0deg);
	transform: rotate(0deg);
}

100%
{
-webkit-transform
:
 
rotate
(360deg);

    
-moz-transform
:
 
rotate
(360deg);

    
-ms-transform
:
 
rotate
(360deg);

    
-o-transform
:
 
rotate
(360deg);

    
transform
:
 
rotate
(360deg);
 
}
}
@
-moz-keyframes rotate-forever { 0% {
	-webkit-transform: rotate(0deg);
	-moz-transform: rotate(0deg);
	-ms-transform: rotate(0deg);
	-o-transform: rotate(0deg);
	transform: rotate(0deg);
}

100%
{
-webkit-transform
:
 
rotate
(360deg);

    
-moz-transform
:
 
rotate
(360deg);

    
-ms-transform
:
 
rotate
(360deg);

    
-o-transform
:
 
rotate
(360deg);

    
transform
:
 
rotate
(360deg);
 
}
}
@
keyframes rotate-forever { 0% {
	-webkit-transform: rotate(0deg);
	-moz-transform: rotate(0deg);
	-ms-transform: rotate(0deg);
	-o-transform: rotate(0deg);
	transform: rotate(0deg);
}

100%
{
-webkit-transform
:
 
rotate
(360deg);

    
-moz-transform
:
 
rotate
(360deg);

    
-ms-transform
:
 
rotate
(360deg);

    
-o-transform
:
 
rotate
(360deg);

    
transform
:
 
rotate
(360deg);
 
}
}
.lightbox-spinner {
	-webkit-animation-duration: 0.7s;
	-moz-animation-duration: 0.7s;
	animation-duration: 0.7s;
	-webkit-animation-iteration-count: infinite;
	-moz-animation-iteration-count: infinite;
	animation-iteration-count: infinite;
	-webkit-animation-name: rotate-forever;
	-moz-animation-name: rotate-forever;
	animation-name: rotate-forever;
	-webkit-animation-timing-function: linear;
	-moz-animation-timing-function: linear;
	animation-timing-function: linear;
	height: 30px;
	width: 30px;
	border: 4px solid #fff;
	border-right-color: transparent;
	border-radius: 50%;
	display: inline-block;
	opacity: 0.7;
}
</style>
<script
	src="./style/js/s-code-contents-40e4725b2f3af45dff60d7dec96cf87a5c20e2ff.js"></script>
<link rel="prefetch"
	href="https://ims-na1.adobelogin.com/favicon.ico?cache_bust=80aed2c7068c7">
<script type="text/javascript" charset="utf-8" async
	data-requirecontext="_" data-requiremodule="./style/js/globalnav.js"
	src="./style/js/globalnav.js"></script>
<style type="text/css"></style>
<link type="text/css" rel="stylesheet" href="./style/css/globalnav.css">
<style type="text/css"></style>
<style type="text/css"></style>
<script type="text/javascript" src="./style/js/globalnav(1).js"></script>
</head>

<body
	class="logged-out zh_CN networki responsive profile profile-page show-cta profile-creative be-network no-has-touch has-placeholders globalnav__external__no-touch"
	lang="zh">
	<div id="globalnav__header"
		class="globalnav__js__header globalnav__feature-flag--dc"
		data-locale="zh_CN" data-language="zh_CN" data-country="CN">
		<nav aria-hidden="true" data-has-list-columns="true"
			class="globalnav__overlay globalnav__overlay--variable-height globalnav__profile"
			style="z-index: 2147483647;">
		<div
			class="globalnav__overlay__root globalnav__js__overlay__empty-space">
			<div
				class="globalnav__overlay__container globalnav__js__overlay__empty-space globalnav__js__profile__parent">
			</div>
		</div>
		</nav>
	</div>
	<div class="mboxDefault"
		id="mbox-adobe-global-mbox-1477187836606-569189"
		style="visibility: visible; display: block;"></div>
	<form action="" method="get">
		<nav id="nav-wrap" class="js-nav-primary dark-background">
		<h1 id="behance-logo">
			<a id="logo-link" href="https://www.behance.net/"><svg
					class="behance-svg" xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 152.5 28.2" width="75" height="58">
				<path
					d="M13.1 0c1.3 0 2.5 0.1 3.6 0.4c1.1 0.2 2 0.6 2.8 1.1c0.8 0.5 1.4 1.2 1.8 2.1c0.4 0.9 0.6 2 0.6 3.2 c0 1.4-0.3 2.6-1 3.5c-0.6 0.9-1.6 1.7-2.8 2.3c1.7 0.5 3 1.4 3.8 2.6c0.8 1.2 1.3 2.7 1.3 4.4c0 1.4-0.3 2.6-0.8 3.6 c-0.5 1-1.3 1.9-2.2 2.5c-0.9 0.6-2 1.1-3.2 1.4c-1.2 0.3-2.4 0.5-3.6 0.5H0V0H13.1z M12.3 11.2c1.1 0 2-0.3 2.7-0.8 c0.7-0.5 1-1.4 1-2.5c0-0.6-0.1-1.2-0.3-1.6c-0.2-0.4-0.5-0.7-0.9-1c-0.4-0.2-0.8-0.4-1.3-0.5c-0.5-0.1-1-0.1-1.6-0.1H6.1v6.5 H12.3z M12.6 23c0.6 0 1.2-0.1 1.7-0.2c0.5-0.1 1-0.3 1.4-0.6c0.4-0.3 0.7-0.6 1-1.1c0.2-0.5 0.4-1.1 0.4-1.8 c0-1.4-0.4-2.4-1.2-3.1c-0.8-0.6-1.9-0.9-3.2-0.9H6.1V23H12.6z"></path>
				<path
					d="M31.9 22.9c0.8 0.8 2 1.2 3.6 1.2c1.1 0 2.1-0.3 2.9-0.8c0.8-0.6 1.3-1.2 1.5-1.8h4.9c-0.8 2.4-2 4.1-3.6 5.2 c-1.6 1-3.5 1.6-5.8 1.6c-1.6 0-3-0.3-4.3-0.8c-1.3-0.5-2.3-1.2-3.2-2.2c-0.9-0.9-1.6-2-2-3.3c-0.5-1.3-0.7-2.7-0.7-4.3 c0-1.5 0.2-2.9 0.7-4.2c0.5-1.3 1.2-2.4 2.1-3.4c0.9-0.9 2-1.7 3.2-2.2c1.3-0.5 2.6-0.8 4.2-0.8c1.7 0 3.2 0.3 4.5 1 c1.3 0.7 2.3 1.5 3.1 2.7c0.8 1.1 1.4 2.4 1.8 3.8C45 16 45.1 17.4 45 19H30.5C30.5 20.6 31.1 22.1 31.9 22.9z M38.2 12.4 c-0.7-0.7-1.8-1.1-3.1-1.1c-0.9 0-1.6 0.2-2.2 0.5c-0.6 0.3-1 0.7-1.4 1.1c-0.4 0.4-0.6 0.9-0.7 1.4c-0.1 0.5-0.2 0.9-0.2 1.3h9 C39.4 14.1 38.9 13.1 38.2 12.4z"></path>
				<path
					d="M52.8 0v10.4h0.1c0.7-1.2 1.6-2 2.7-2.5c1.1-0.5 2.1-0.8 3.2-0.8c1.5 0 2.7 0.2 3.6 0.6c0.9 0.4 1.7 1 2.2 1.7 c0.5 0.7 0.9 1.6 1.1 2.6c0.2 1 0.3 2.1 0.3 3.4v12.3h-5.5V16.4c0-1.7-0.3-2.9-0.8-3.7c-0.5-0.8-1.4-1.2-2.7-1.2 c-1.5 0-2.6 0.5-3.2 1.3c-0.7 0.9-1 2.4-1 4.4v10.5h-5.5V0H52.8z"></path>
				<path
					d="M70 10.6c0.6-0.9 1.3-1.5 2.2-2.1c0.9-0.5 1.9-0.9 3-1.1c1.1-0.2 2.2-0.3 3.3-0.3c1 0 2 0.1 3.1 0.2c1 0.1 2 0.4 2.8 0.8 c0.9 0.4 1.5 1 2.1 1.7c0.5 0.7 0.8 1.7 0.8 2.9v10.5c0 0.9 0.1 1.8 0.2 2.6c0.1 0.8 0.4 1.5 0.7 1.9l-5.6 0 c-0.2-0.2-0.3-0.6-0.4-0.9c-0.1-0.3-0.1-0.7-0.1-1c-0.9 0.9-1.9 1.5-3.1 1.9c-1.2 0.4-2.4 0.5-3.6 0.5c-1 0-1.8-0.1-2.7-0.4 c-0.8-0.2-1.5-0.6-2.2-1.1c-0.6-0.5-1.1-1.1-1.5-1.9c-0.3-0.8-0.5-1.6-0.5-2.7c0-1.1 0.2-2.1 0.6-2.8c0.4-0.7 0.9-1.3 1.5-1.8 c0.6-0.4 1.4-0.8 2.2-1c0.8-0.2 1.6-0.4 2.5-0.5c0.8-0.1 1.6-0.2 2.4-0.3c0.8-0.1 1.5-0.2 2.1-0.3c0.6-0.2 1.1-0.4 1.5-0.7 c0.4-0.3 0.5-0.7 0.5-1.3c0-0.6-0.1-1.1-0.3-1.4c-0.2-0.3-0.5-0.6-0.8-0.8c-0.3-0.2-0.7-0.3-1.1-0.4c-0.4-0.1-0.9-0.1-1.4-0.1 c-1.1 0-1.9 0.2-2.5 0.7c-0.6 0.5-1 1.3-1.1 2.3h-5.5C69.1 12.5 69.5 11.4 70 10.6z M80.9 18.4c-0.3 0.1-0.7 0.2-1.1 0.3 c-0.4 0.1-0.8 0.1-1.3 0.2c-0.4 0.1-0.9 0.1-1.3 0.2c-0.4 0.1-0.8 0.2-1.2 0.3c-0.4 0.1-0.8 0.3-1 0.5c-0.3 0.2-0.5 0.5-0.7 0.8 C74 21.1 74 21.5 74 22c0 0.5 0.1 0.9 0.3 1.2c0.2 0.3 0.4 0.6 0.7 0.8c0.3 0.2 0.7 0.3 1.1 0.4c0.4 0.1 0.8 0.1 1.3 0.1 c1.1 0 1.9-0.2 2.5-0.5c0.6-0.4 1-0.8 1.3-1.3c0.3-0.5 0.5-1 0.5-1.5c0.1-0.5 0.1-0.9 0.1-1.2v-2.1 C81.5 18.1 81.2 18.3 80.9 18.4z"></path>
				<path
					d="M95.6 7.6v2.8h0.1c0.7-1.2 1.6-2 2.7-2.5c1.1-0.5 2.3-0.8 3.4-0.8c1.5 0 2.7 0.2 3.6 0.6c1 0.4 1.7 1 2.2 1.7 c0.5 0.7 0.9 1.6 1.2 2.6c0.2 1 0.3 2.1 0.3 3.4v12.3h-5.5V16.4c0-1.7-0.3-2.9-0.8-3.7c-0.5-0.8-1.4-1.3-2.8-1.3 c-1.5 0-2.6 0.6-3.3 1.5c-0.7 0.9-1 2.4-1 4.4v10.5h-5.5V7.6H95.6z"></path>
				<path
					d="M121.4 11.2c-0.9 0-1.6 0.2-2.2 0.6c-0.6 0.4-1.1 0.9-1.5 1.6c-0.4 0.6-0.6 1.3-0.8 2.1c-0.2 0.8-0.2 1.5-0.2 2.3 c0 0.7 0.1 1.5 0.2 2.2c0.2 0.8 0.4 1.4 0.8 2c0.4 0.6 0.8 1.1 1.4 1.5c0.6 0.4 1.3 0.6 2.2 0.6c1.3 0 2.3-0.4 3.1-1.1 c0.7-0.7 1.2-1.7 1.3-3h5.3c-0.4 2.7-1.4 4.7-3.1 6.1c-1.7 1.4-3.9 2.1-6.6 2.1c-1.5 0-2.9-0.3-4.1-0.8c-1.3-0.5-2.3-1.2-3.2-2.1 c-0.9-0.9-1.6-2-2.1-3.2c-0.5-1.3-0.7-2.6-0.7-4.1c0-1.6 0.2-3 0.7-4.3c0.5-1.3 1.1-2.5 2-3.5c0.9-1 2-1.7 3.2-2.3 c1.3-0.5 2.7-0.8 4.3-0.8c1.2 0 2.3 0.2 3.4 0.5c1.1 0.3 2.1 0.8 2.9 1.4c0.9 0.6 1.6 1.4 2.1 2.4c0.5 0.9 0.8 2.1 0.9 3.4h-5.4 C125.1 12.4 123.8 11.2 121.4 11.2z"></path>
				<rect x="29.4" y="1.9" width="11.2" height="2.7"></rect>
				<path
					d="M139.3 22.9c0.8 0.8 2.1 1.2 3.6 1.2c1.1 0 2.1-0.3 2.9-0.8c0.8-0.6 1.3-1.2 1.5-1.8h4.8c-0.8 2.4-2 4.1-3.6 5.2 c-1.6 1-3.5 1.6-5.8 1.6c-1.6 0-3-0.3-4.3-0.8c-1.3-0.5-2.3-1.2-3.2-2.2c-0.9-0.9-1.6-2-2-3.3c-0.5-1.3-0.7-2.7-0.7-4.3 c0-1.5 0.2-2.9 0.7-4.2c0.5-1.3 1.2-2.4 2.1-3.4c0.9-0.9 2-1.7 3.2-2.2c1.3-0.5 2.7-0.8 4.2-0.8c1.7 0 3.2 0.3 4.4 1 c1.3 0.7 2.3 1.5 3.1 2.7c0.8 1.1 1.4 2.4 1.8 3.8c0.4 1.4 0.5 2.9 0.4 4.5h-14.5C137.9 20.6 138.5 22.1 139.3 22.9z M145.7 12.4 c-0.7-0.7-1.8-1.1-3.1-1.1c-0.9 0-1.6 0.2-2.2 0.5c-0.6 0.3-1.1 0.7-1.4 1.1c-0.3 0.4-0.6 0.9-0.7 1.4c-0.1 0.5-0.2 0.9-0.2 1.3 h9C146.8 14.1 146.3 13.1 145.7 12.4z"></path></svg></a>
		</h1>


		<div id="nav-primary-wrap">
			<ul id="nav-primary" class="nav-list">
				<li class="nav-item"><a class="nav-item-link active"
					href="https://www.behance.net/search"> 发现 </a>
					<ul class="nav-submenu">
						<li class="nav-item"><a
							class="nav-item-link active beicons-pre beicons-pre-discover"
							href="https://www.behance.net/search"> 搜索和浏览 </a></li>
						<li class="nav-item"><a
							class="nav-item-link active beicons-pre beicons-pre-badge"
							href="https://www.behance.net/galleries"> 策展库 </a></li>
						<li class="nav-item"><a
							class="nav-item-link active beicons-pre beicons-pre-columns"
							href="https://www.behance.net/poweredby"> 学校和组织 </a></li>
					</ul></li>
				<li class="nav-item"><a class="nav-item-link"
					href="https://www.behance.net/joblist"> 职位 </a>
					<ul class="nav-submenu">
						<li class="nav-item"><a
							class="nav-item-link beicons-pre beicons-pre-suitcase"
							href="https://www.behance.net/joblist"> 创意职位 </a></li>
						<li class="nav-item"><a
							class="nav-item-link beicons-pre beicons-pre-add"
							href="https://www.behance.net/adobetalent?tracking_source=nav_button">
								发布职位 </a></li>
					</ul></li>
				<!-- <li class="nav-joblist">招聘人才？ < -->
				!--
				<a
					class="job-button js-job-button form-button form-button-small form-button-dark"
					href="#">发布职位</a> -->
				</li>
			</ul>


		</div>
		<!-- /#nav-primary-wrap -->
		<div id="nav-upsell-wrap">
			<ul id="nav-upsell" class="nav-list">
				展示和发现创意作品
				<a id="sign-up-button"
					class="js-adobeid-signup form-button form-button-small form-button-default"
					data-signup-from="Discover_BlueButton_SignUpFree_SmallHeader">免费注册</a>
				<li class="nav-joblist">招聘人才？ <a
					class="job-button js-job-button form-button form-button-small form-button-dark"
					href="#" data-signup-from="NavHeader_PostAJob">发布职位</a></li>
			</ul>
		</div>
		<!-- /#nav-upsell-wrap --> <a id="nav-adobe" href="#" target="_blank">
			<svg class="adobe-svg" xmlns="#" viewBox="0 165 612 627" width="26"
				height="58">
			<polygon points="368.4,169.1 511.2,519.5 511.2,169.1" class="style0"></polygon>
			<polygon points="123.6,169.1 123.6,519.5 267.6,169.1" class="style0"></polygon>
			<polygon
				points="254.4,449.9 321.6,449.9 349.2,519.5 409.2,519.5 318,298.7"
				class="style0"></polygon>&gt;<path
				d="M42 735.5l-16.8 48c0 1.2-1.2 1.2-2.4 1.2H6c-1.2 0-1.2-1.2-1.2-2.4c13.2-36 34.8-97.2 50.4-136.8 c1.2-2.4 1.2-3.6 1.2-9.6c0-1.2 0-1.2 1.2-1.2h22.8c1.2 0 1.2 0 1.2 1.2c18 48 36 98.4 54 147.6c0 1.2 0 1.2-1.2 1.2h-18 c-1.2 0-1.2 0-2.4-1.2l-16.8-48H42z M92.4 718.7c-4.8-15.6-19.2-52.8-24-68.4l0 0c-3.6 14.4-14.4 43.2-22.8 68.4H92.4z"
				class="style0 logo-letter"></path>
			<path
				d="M147.6 729.5c0-33.6 25.2-57.6 61.2-57.6c6 0 12 0 16.8 2.4v-51.6c0-1.2 0-1.2 1.2-1.2h16.8 c1.2 0 1.2 0 1.2 1.2v139.2c0 3.6 0 8.4 0 10.8c0 1.2 0 1.2-1.2 2.4c-13.2 7.2-27.6 10.8-42 10.8 C170.4 785.9 147.6 766.7 147.6 729.5z M225.6 689.9c-4.8-2.4-10.8-2.4-18-2.4c-24 0-39.6 16.8-39.6 40.8c0 30 18 40.8 37.2 40.8 c8.4 0 15.6-1.2 20.4-2.4L225.6 689.9L225.6 689.9z"
				class="style0 logo-letter"></path>
			<path
				d="M374.4 728.3c0 34.8-21.6 57.6-52.8 57.6c-38.4 0-52.8-30-52.8-57.6c0-33.6 21.6-56.4 54-56.4 S374.4 695.9 374.4 728.3z M288 728.3c0 24 12 43.2 33.6 43.2c15.6 0 32.4-10.8 32.4-42c0-22.8-9.6-43.2-33.6-43.2 C301.2 686.3 288 703.1 288 728.3z"
				class="style0 logo-letter"></path>
			<path
				d="M415.2 620.3c1.2 0 1.2 0 1.2 1.2v56.4c8.4-3.6 18-6 28.8-6c31.2 0 49.2 21.6 49.2 51.6 c0 39.6-30 62.4-63.6 62.4c-12 0-21.6-1.2-32.4-4.8c-1.2 0-1.2-1.2-1.2-2.4v-156c0-1.2 0-1.2 1.2-1.2h16.8V620.3z M441.6 687.5 c-8.4 0-16.8 1.2-24 6v74.4c4.8 1.2 9.6 2.4 16.8 2.4c20.4 0 40.8-14.4 40.8-44.4C475.2 703.1 462 687.5 441.6 687.5z"
				class="style0 logo-letter"></path>
			<path
				d="M532.8 730.7c0 22.8 12 38.4 37.2 38.4c8.4 0 19.2-1.2 28.8-6c1.2 0 1.2 0 1.2 1.2v13.2 c0 1.2 0 2.4-1.2 2.4c-8.4 4.8-18 6-32.4 7.2c-39.6 0-54-28.8-54-56.4c0-32.4 19.2-57.6 50.4-57.6s44.4 25.2 44.4 44.4 c0 8.4-1.2 12-2.4 13.2c-3.6 1.2-12 1.2-24 1.2h-48V730.7z M576 717.5c10.8 0 13.2-1.2 13.2-1.2s0-2.4 0-3.6 c0-7.2-4.8-26.4-26.4-26.4c-18 0-27.6 14.4-30 31.2H576z"
				class="style0 logo-letter"></path></svg>
		</a>
		<div id="nav-login">
			<a id="login-link"
				class="js-adobeid-signin beicons-pre beicons-pre-privacy">登录</a>
		</div>
		<a class="js-browse-link browse-link hide"
			href="https://www.behance.net/">暂时仅供浏览 →</a> </nav>
		<div id="top-panel" class="slide-panel js-top-panel">
			<a id="top-panel-blocking" class="js-top-panel-blocking"></a>
			<div class="toolbar">
				<a id="hamburger-button" class="js-hamburger-button burger"><span
					id="patty" class="burger"></span></a>


				<div class="toolbar-signup">
					<a
						class="js-adobeid-signup form-button form-button-default form-button-small"
						data-signup-from="Mobile_ToolBar_Signup">Sign Up</a> <a
						class="js-adobeid-signin form-button form-button-dark form-button-small">Log
						In</a>
				</div>


				<h1 class="header">

					<span id="behance-logo"> <a id="logo-link"
						href="https://www.behance.net/"> <svg class="behance-svg"
								xmlns="http://www.w3.org/2000/svg" viewBox="0 0 152.5 28.2"
								width="75" height="58">
							<path
								d="M13.1 0c1.3 0 2.5 0.1 3.6 0.4c1.1 0.2 2 0.6 2.8 1.1c0.8 0.5 1.4 1.2 1.8 2.1c0.4 0.9 0.6 2 0.6 3.2 c0 1.4-0.3 2.6-1 3.5c-0.6 0.9-1.6 1.7-2.8 2.3c1.7 0.5 3 1.4 3.8 2.6c0.8 1.2 1.3 2.7 1.3 4.4c0 1.4-0.3 2.6-0.8 3.6 c-0.5 1-1.3 1.9-2.2 2.5c-0.9 0.6-2 1.1-3.2 1.4c-1.2 0.3-2.4 0.5-3.6 0.5H0V0H13.1z M12.3 11.2c1.1 0 2-0.3 2.7-0.8 c0.7-0.5 1-1.4 1-2.5c0-0.6-0.1-1.2-0.3-1.6c-0.2-0.4-0.5-0.7-0.9-1c-0.4-0.2-0.8-0.4-1.3-0.5c-0.5-0.1-1-0.1-1.6-0.1H6.1v6.5 H12.3z M12.6 23c0.6 0 1.2-0.1 1.7-0.2c0.5-0.1 1-0.3 1.4-0.6c0.4-0.3 0.7-0.6 1-1.1c0.2-0.5 0.4-1.1 0.4-1.8 c0-1.4-0.4-2.4-1.2-3.1c-0.8-0.6-1.9-0.9-3.2-0.9H6.1V23H12.6z"></path>
							<path
								d="M31.9 22.9c0.8 0.8 2 1.2 3.6 1.2c1.1 0 2.1-0.3 2.9-0.8c0.8-0.6 1.3-1.2 1.5-1.8h4.9c-0.8 2.4-2 4.1-3.6 5.2 c-1.6 1-3.5 1.6-5.8 1.6c-1.6 0-3-0.3-4.3-0.8c-1.3-0.5-2.3-1.2-3.2-2.2c-0.9-0.9-1.6-2-2-3.3c-0.5-1.3-0.7-2.7-0.7-4.3 c0-1.5 0.2-2.9 0.7-4.2c0.5-1.3 1.2-2.4 2.1-3.4c0.9-0.9 2-1.7 3.2-2.2c1.3-0.5 2.6-0.8 4.2-0.8c1.7 0 3.2 0.3 4.5 1 c1.3 0.7 2.3 1.5 3.1 2.7c0.8 1.1 1.4 2.4 1.8 3.8C45 16 45.1 17.4 45 19H30.5C30.5 20.6 31.1 22.1 31.9 22.9z M38.2 12.4 c-0.7-0.7-1.8-1.1-3.1-1.1c-0.9 0-1.6 0.2-2.2 0.5c-0.6 0.3-1 0.7-1.4 1.1c-0.4 0.4-0.6 0.9-0.7 1.4c-0.1 0.5-0.2 0.9-0.2 1.3h9 C39.4 14.1 38.9 13.1 38.2 12.4z"></path>
							<path
								d="M52.8 0v10.4h0.1c0.7-1.2 1.6-2 2.7-2.5c1.1-0.5 2.1-0.8 3.2-0.8c1.5 0 2.7 0.2 3.6 0.6c0.9 0.4 1.7 1 2.2 1.7 c0.5 0.7 0.9 1.6 1.1 2.6c0.2 1 0.3 2.1 0.3 3.4v12.3h-5.5V16.4c0-1.7-0.3-2.9-0.8-3.7c-0.5-0.8-1.4-1.2-2.7-1.2 c-1.5 0-2.6 0.5-3.2 1.3c-0.7 0.9-1 2.4-1 4.4v10.5h-5.5V0H52.8z"></path>
							<path
								d="M70 10.6c0.6-0.9 1.3-1.5 2.2-2.1c0.9-0.5 1.9-0.9 3-1.1c1.1-0.2 2.2-0.3 3.3-0.3c1 0 2 0.1 3.1 0.2c1 0.1 2 0.4 2.8 0.8 c0.9 0.4 1.5 1 2.1 1.7c0.5 0.7 0.8 1.7 0.8 2.9v10.5c0 0.9 0.1 1.8 0.2 2.6c0.1 0.8 0.4 1.5 0.7 1.9l-5.6 0 c-0.2-0.2-0.3-0.6-0.4-0.9c-0.1-0.3-0.1-0.7-0.1-1c-0.9 0.9-1.9 1.5-3.1 1.9c-1.2 0.4-2.4 0.5-3.6 0.5c-1 0-1.8-0.1-2.7-0.4 c-0.8-0.2-1.5-0.6-2.2-1.1c-0.6-0.5-1.1-1.1-1.5-1.9c-0.3-0.8-0.5-1.6-0.5-2.7c0-1.1 0.2-2.1 0.6-2.8c0.4-0.7 0.9-1.3 1.5-1.8 c0.6-0.4 1.4-0.8 2.2-1c0.8-0.2 1.6-0.4 2.5-0.5c0.8-0.1 1.6-0.2 2.4-0.3c0.8-0.1 1.5-0.2 2.1-0.3c0.6-0.2 1.1-0.4 1.5-0.7 c0.4-0.3 0.5-0.7 0.5-1.3c0-0.6-0.1-1.1-0.3-1.4c-0.2-0.3-0.5-0.6-0.8-0.8c-0.3-0.2-0.7-0.3-1.1-0.4c-0.4-0.1-0.9-0.1-1.4-0.1 c-1.1 0-1.9 0.2-2.5 0.7c-0.6 0.5-1 1.3-1.1 2.3h-5.5C69.1 12.5 69.5 11.4 70 10.6z M80.9 18.4c-0.3 0.1-0.7 0.2-1.1 0.3 c-0.4 0.1-0.8 0.1-1.3 0.2c-0.4 0.1-0.9 0.1-1.3 0.2c-0.4 0.1-0.8 0.2-1.2 0.3c-0.4 0.1-0.8 0.3-1 0.5c-0.3 0.2-0.5 0.5-0.7 0.8 C74 21.1 74 21.5 74 22c0 0.5 0.1 0.9 0.3 1.2c0.2 0.3 0.4 0.6 0.7 0.8c0.3 0.2 0.7 0.3 1.1 0.4c0.4 0.1 0.8 0.1 1.3 0.1 c1.1 0 1.9-0.2 2.5-0.5c0.6-0.4 1-0.8 1.3-1.3c0.3-0.5 0.5-1 0.5-1.5c0.1-0.5 0.1-0.9 0.1-1.2v-2.1 C81.5 18.1 81.2 18.3 80.9 18.4z"></path>
							<path
								d="M95.6 7.6v2.8h0.1c0.7-1.2 1.6-2 2.7-2.5c1.1-0.5 2.3-0.8 3.4-0.8c1.5 0 2.7 0.2 3.6 0.6c1 0.4 1.7 1 2.2 1.7 c0.5 0.7 0.9 1.6 1.2 2.6c0.2 1 0.3 2.1 0.3 3.4v12.3h-5.5V16.4c0-1.7-0.3-2.9-0.8-3.7c-0.5-0.8-1.4-1.3-2.8-1.3 c-1.5 0-2.6 0.6-3.3 1.5c-0.7 0.9-1 2.4-1 4.4v10.5h-5.5V7.6H95.6z"></path>
							<path
								d="M121.4 11.2c-0.9 0-1.6 0.2-2.2 0.6c-0.6 0.4-1.1 0.9-1.5 1.6c-0.4 0.6-0.6 1.3-0.8 2.1c-0.2 0.8-0.2 1.5-0.2 2.3 c0 0.7 0.1 1.5 0.2 2.2c0.2 0.8 0.4 1.4 0.8 2c0.4 0.6 0.8 1.1 1.4 1.5c0.6 0.4 1.3 0.6 2.2 0.6c1.3 0 2.3-0.4 3.1-1.1 c0.7-0.7 1.2-1.7 1.3-3h5.3c-0.4 2.7-1.4 4.7-3.1 6.1c-1.7 1.4-3.9 2.1-6.6 2.1c-1.5 0-2.9-0.3-4.1-0.8c-1.3-0.5-2.3-1.2-3.2-2.1 c-0.9-0.9-1.6-2-2.1-3.2c-0.5-1.3-0.7-2.6-0.7-4.1c0-1.6 0.2-3 0.7-4.3c0.5-1.3 1.1-2.5 2-3.5c0.9-1 2-1.7 3.2-2.3 c1.3-0.5 2.7-0.8 4.3-0.8c1.2 0 2.3 0.2 3.4 0.5c1.1 0.3 2.1 0.8 2.9 1.4c0.9 0.6 1.6 1.4 2.1 2.4c0.5 0.9 0.8 2.1 0.9 3.4h-5.4 C125.1 12.4 123.8 11.2 121.4 11.2z"></path>
							<rect x="29.4" y="1.9" width="11.2" height="2.7"></rect>
							<path
								d="M139.3 22.9c0.8 0.8 2.1 1.2 3.6 1.2c1.1 0 2.1-0.3 2.9-0.8c0.8-0.6 1.3-1.2 1.5-1.8h4.8c-0.8 2.4-2 4.1-3.6 5.2 c-1.6 1-3.5 1.6-5.8 1.6c-1.6 0-3-0.3-4.3-0.8c-1.3-0.5-2.3-1.2-3.2-2.2c-0.9-0.9-1.6-2-2-3.3c-0.5-1.3-0.7-2.7-0.7-4.3 c0-1.5 0.2-2.9 0.7-4.2c0.5-1.3 1.2-2.4 2.1-3.4c0.9-0.9 2-1.7 3.2-2.2c1.3-0.5 2.7-0.8 4.2-0.8c1.7 0 3.2 0.3 4.4 1 c1.3 0.7 2.3 1.5 3.1 2.7c0.8 1.1 1.4 2.4 1.8 3.8c0.4 1.4 0.5 2.9 0.4 4.5h-14.5C137.9 20.6 138.5 22.1 139.3 22.9z M145.7 12.4 c-0.7-0.7-1.8-1.1-3.1-1.1c-0.9 0-1.6 0.2-2.2 0.5c-0.6 0.3-1.1 0.7-1.4 1.1c-0.3 0.4-0.6 0.9-0.7 1.4c-0.1 0.5-0.2 0.9-0.2 1.3 h9C146.8 14.1 146.3 13.1 145.7 12.4z"></path></svg>
					</a>
					</span>


				</h1>

				<a class="js-header-action-search header-action search right"> <span
					id="search-button" class="nav-icon nav-icon-search"></span>
				</a>
			</div>
			<!-- .toolbar -->


			<div id="site-content" class="js-site-content">


				<div id="profile-header-actions"
					class="layout-wrap js-profile-header-actions">
					<div id="navmenui-breadcrumbs" class="js-navmenui-breadcrumbs">
						<span class="breadcrumb-text" classes="breadcrumb"><a
							href="https://www.behance.net/search">发现</a></span><span class="rarr">→</span><span
							class="breadcrumb-text" classes="breadcrumb">maya bora</span>
					</div>
					<div class="header-right-wrapper">
						<div id="viral-icons"
							class="js-profile-share-button form-button form-button-normal form-button-light-and-grey profile-header-action layout-wrap-action"
							data-header="共享此个人资料" data-text="查看 @Behance 上的 maya  data-url="#">
							<!--   <span class="beicons-pre beicons-pre-share">fanhuishouye</span> -->
						</div>
					</div>
				</div>
				<div id="profile" class="js-profile content-container layout-wrap">
					<div id="profile-info"
						class="profile-section content-minor-section content-mobile-major-section js-profile-info">
						<div id="profile-display-name">
							<!-- <a href="https://www.behance.net/mayabora">maya bora</a> -->
						</div>
						<a href="selectUserById"> <img id="profile-image"
							src="./style/img/6a65bc14393183.557444a2387a6.jpg"></a>
							<div style="margin-top: 123px;"> 
							<a  href="publishWorks.jsp">发布作品</a>
							</div>
						<div id="profile-details">
							<div class="profile-location has-website"></div>
							<div id="profile-actions" class="hide-phone show-tablet">
								<div title="向用户发送消息"
									class="profile-action js-action-message-user"
									data-contact_name="maya bora" data-contact_id="14393183">
									<a
										class="form-button form-button-light-and-grey beicons-pre beicons-pre-mail">信息</a>
								</div>
							</div>


						</div>

						<div id="profile-actions" class="hide-tablet">
							<div id="profile-action-follow"
								class="js-profile-action-follow profile-action">
								<div
									class="user-follow js-action-follow follow-button-container"
									data-followee="14393183" data-entity="user"></div>
							</div>
						</div>
					</div>


					<span class="js-nav-phone"></span>
					<div id="profile-stats"
						class="profile-section content-minor-section content-mobile-first-section js-profile-stats">
						<div class="profile-stat">
						<s:iterator value="#session.User" var="user">
							<div>
								<span class="stat-text"> 用户名:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" value='<s:property value="#user.Username"/>'
									name="username"
									style="border: none; background-color: rgb(250, 250, 250);" /></span>
							</div>
							<div>
								<span class="stat-text">性  别:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" value='<s:property value="#user.Sex"/>'
									name="sex"
									style="border: none; background-color: rgb(250, 250, 250);"></span></div>
									<div>
									<span class="stat-text"> 年   龄:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" value='<s:property value="#user.Age"/>'
									name="age"
									style="border: none; background-color: rgb(250, 250, 250);" /></span>
							</div>
							<div>
								<span class="stat-text"> Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" value='<s:property value="#user.Email"/>'
									name="email"
									style="border: none; background-color: rgb(250, 250, 250);" /></span>
							</div>
							<div>
								<span class="stat-text"> 详细地址:&nbsp;&nbsp;&nbsp;<input type="text" value='<s:property value="#user.Address"/>'
									name="address"
									style="border: none; background-color: rgb(250, 250, 250);" /></span>
							</div>
							</s:iterator>
							
							<div class="profile-stat-count">
								<!-- <a href="https://www.behance.net/mayabora/stats" class="js-project-views-count">4079</a> -->
							</div>
						</div>
			
						<div class="profile-stat">
							<div
								class="profile-stat-label profile-sidebar-label content-minor-secton-label beicons-pre beicons-pre-followers">
								<!-- <span class="stat-text">关注者</span> -->
							</div>
							<div class="profile-stat-count">
								<!--    <a href="https://www.behance.net/mayabora/followers" class="js-followers-count">180</a>  -->
							</div>
						</div>
						<!-- /.profile-stat -->
						<div class="profile-stat">
							<div
								class="profile-stat-label profile-sidebar-label content-minor-secton-label beicons-pre beicons-pre-following">
								<!-- <span class="stat-text">正在关注</span> -->
							</div>
							<div class="profile-stat-count">
								<!--  <a href="https://www.behance.net/mayabora/following" class="js-following-count">363</a>   -->
							</div>
						</div>
						<!-- /.profile-stat -->
					</div>
					<!-- /#profile-stats -->
					<span class="js-nav-desktop-tablet"></span>
					<div id="profile-nav"
						class="content-main content-section-nav js-profile-nav">
						<div class="js-iscroll-wrap profile-nav-inner content-nav-inner">
							<div
								class="profile-section-header content-section-header js-section-header js-iscroll"
								data-section-header="gallery">
								<a
									class="profile-section-header-item content-section-nav-item js-section js-iscroll-item show-tablet show-phone not-active"
									data-section="info" href="https://www.behance.net/mayabora#">信息</a>
								<a
									class="profile-section-header-item content-section-nav-item js-section js-iscroll-item active"
									data-section="projects" href="project.jsp">项目</a> <!-- <a
									class="profile-section-header-item content-section-nav-item js-section js-iscroll-item not-active"
									data-section="collections" href="centerjsp.jsp">作品集</a> --> <a
									class="profile-section-header-item content-section-nav-item js-section js-iscroll-item not-active"
									data-section="appreciated" href="appreciate.jsp">已赞</a>
							</div>
							<div
								class="profile-section-header content-section-header js-section-header js-iscroll profile-section-header-connections hide"
								data-section-header="connections">
								<a
									class="profile-section-header-item content-section-nav-item js-section js-iscroll-item"
									data-section="followers" href="centerjsp.jsp">关注者 <span
									class="profile-section-header-item content-section-nav-item-count">(180)</span></a>
								<a
									class="profile-section-header-item content-section-nav-item js-section js-iscroll-item"
									data-section="following" href="centerjsp.jsp">正在关注 <span
									class="profile-section-header-item content-section-nav-item-count">(363)</span></a>
							</div>
							<form id="searchForm" class="js-search-form profile-search hide">
								<div class="form-item form-item-text be-placeholder"
									id="search-container"></div>
							</form>
						</div>
						<div
							class="js-profile-collection-select profile-collection-select hide">
							<select
								class="js-popstate-listener form-select ui-selectmenu-light ui-selectmenu-xlarge">
								<option class="form-option" value="#">maya bora 的作品集</option>
								<option class="form-option" value="#">maya bora 关注的作品集
								</option>
							</select>
						</div>
					</div>


					<div id="profile-info-wrap"
						class="js-profile-info-wrap content-section-wrap">


						<div id="profile-focus"
							class="profile-section content-minor-section">
							<h3 class="profile-sidebar-label content-minor-section-label">
								创意领域</h3>
							<a href="paint.jsp" title="插图" class="field">插图</a>, <a
								href="desine.jsp" title="人物设计" class="field">人物设计</a>, <a
								href="paintColor.jsp" title="绘图" class="field">绘图</a>
						</div>
								
						<!-- /#profile-focus -->
						<div id="profile-featured"
							class="profile-section content-minor-section">
							<h3 class="profile-sidebar-label content-minor-section-label">
								专题刊登</h3>
							<span class="featured-ribbon-wrap"><a
								href="#"
								target="_blank"><div data-picture=""
										data-rendered="rendered">
										<div
											data-src="https://a3.behance.net/img/galleries/icons/ribbons/1x/11.png?cb=1263814702"
											data-title="Game Design" data-class="featured-ribbon"></div>
										<div
											data-src="https://a3.behance.net/img/galleries/icons/ribbons/2x/11@2x.png?cb=1263814702"
											data-title="Game Design"
											data-media="(-webkit-min-device-pixel-ratio: 1.3),
               (min--moz-device-pixel-ratio: 1.3),
               (-o-min-device-pixel-ratio: 4/3),
               (min-device-pixel-ratio: 1.3),
               (min-resolution: 1.3dppx)"
											data-class="featured-ribbon featured-ribbon-2x"></div>
										<noscript>&lt;img class="featured-ribbon"
											src="https://a3.behance.net/img/galleries/icons/ribbons/1x/11.png?cb=1263814702"
											title="Game Design"&gt;&lt;/img&gt;</noscript>
										<img src="./style/img/11@2x.png"
											class="featured-ribbon featured-ribbon-2x"
											title="Game Design" data-pin-nopin="pin">
									</div></a></span>
						</div>
						<!-- /#profile-featured -->
						<div id="profile-web"
							class="profile-section content-minor-section">
							<!-- <h3 class="profile-sidebar-label content-minor-section-label">        帐户连接 -->
							</h3>
							<ul id="profile-web-list">
								<li>
									<!-- <a class="ss-social" href="http://facebook.com/maya.bora.5" title="Facebook" target="_blank">Facebook</a> -->
								</li>
								<li>
									<!-- <a class="ss-social" href="http://mayabora.tumblr.com/" title="Tumblr" target="_blank">Tumblr</a> -->
								</li>
								<li>
									<!-- <a class="ss-social" href="http://instagram.com/mayabora" title="Instagram" target="_blank">Instagram</a> -->
								</li>
							</ul>
						</div>
						<!-- /#profile-web -->











						<div id="profile-date"
							class="profile-section content-minor-section">
							<!--  <span class="profile-date-text">      
      自以下日期开始加入的成员: <span class="profile-date js-format-timestamp" data-timestamp="1433682823">2015年6月7日</span>   -->
							</span>

						</div>
					</div>
					<div id="gallery" class="content-main cfix js-gallery"
						data-section="projects">
						<div class="profile-gallery-content-wrap" style="text-align: left;">
			 
          
							<div class="profile-gallery-content js-profile-gallery-content"
								data-section="projects" style="max-width: 977px;">
											 			
							    <%  
							    int id= Integer.parseInt( session.getAttribute("id").toString().trim());
									List<ei_ideas1> list = new ArrayList<ei_ideas1>();
									 String sql="select * from ei_ideas where User_ID='"+id+"' and Status=0";
						              ResultSet rs = DBconnection.executeQuery(sql);
					        	while (rs.next()) {
						    %>
								<div
									class="js-item cover-block project-cover js-project-cover editable cfix"
									data-id="43165143">
									<div class="cover-img">
										<a
											href='works_detail.jsp?<%=rs.getInt("ID")%>'
											class="cover-img-link"> <picture class="cover-img-el">
											<source
												srcset="123345678"
												media="(-webkit-min-device-pixel-ratio: 1.3),
           (min--moz-device-pixel-ratio: 1.3),
           (-o-min-device-pixel-ratio: 4/3),
           (min-device-pixel-ratio: 1.3),
           (min-resolution: 1.3dppx)">
											<img class="cover-img-el"
												srcset="<%=rs.getString("Work_uri")%>"
												alt="An illustrated Book: Biography of Beatrix Potter"></picture>
											<noscript>&lt;

												 /&gt;</noscript>
										</a>
									</div>


									<div class="cover-info-stats">
										<div class="cover-info">
											<div class="cover-name">
												<a href="#" class="projectName cover-name-link">An
													illustrated Book: Biography of Beatrix Potter</a>
											</div>
											<div class="cover-by-wrap">
												<div class="cover-by-link text-ellipsis ">
												
													<span class="cover-by">作者</span> <a
														class="single-owner-link" href="#"> 
														<s:iterator value="#session.User" var="user"><span
														class="js-mini-profile" data-id="14393183">
                                                     <s:property value="#user.Username"/>
                                                     </s:iterator>
     												</span>
													</a>

												</div>
											</div>
										</div>
										<div class="cover-stat-fields-wrap">
											<div class="cover-stat-wrap">
												<span
													class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb "
													data-timestamp="1474731959"><%=rs.getString("ass_count")%></span> <span
													class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone"><%=rs.getString("thumbs_up_count")%></span>

											</div>
											<!-- .cover-stat-wrap -->
											<div class="cover-fields">
												<a href="#" title="插图" class="field-link">插图</a>, <a
													href="#" title="人物设计" class="field-link">人物设计</a>, <a
													href="#" title="绘图" class="field-link">绘图</a>
											</div>
											<!-- .cover-fields -->
										</div>
										<!-- .cover-info -->
									</div>
									<!-- #cover-stat-fields-wrap -->
								</div>
								 <%
									}
						          DBconnection.close();
								
								%> 
							</div>
							<!-- .profile-gallery-content -->
							<div class="js-spin profile-spinner" style="display: none;">
								<div class="spinner" aria-role="progressbar"
									style="position: relative; width: 0px; z-index: 2000000000; left: 31px; top: 30px;">
									<div
										style="position: absolute; top: -1px; transform: translate3d(0px, 0px, 0px); opacity: 0; animation: opacity-100-0-0-30 0.5s linear infinite;">
										<div
											style="position: absolute; width: 2px; height: 2px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(0deg) translate(9px, 0px); border-radius: 0px; background: rgb(0, 140, 255);"></div>
									</div>
									<div
										style="position: absolute; top: -1px; transform: translate3d(0px, 0px, 0px); opacity: 0; animation: opacity-100-0-1-30 0.5s linear infinite;">
										<div
											style="position: absolute; width: 2px; height: 2px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(12deg) translate(9px, 0px); border-radius: 0px; background: rgb(0, 140, 255);"></div>
									</div>
									<div
										style="position: absolute; top: -1px; transform: translate3d(0px, 0px, 0px); opacity: 0; animation: opacity-100-0-2-30 0.5s linear infinite;">
										<div
											style="position: absolute; width: 2px; height: 2px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(24deg) translate(9px, 0px); border-radius: 0px; background: rgb(0, 140, 255);"></div>
									</div>
									<div
										style="position: absolute; top: -1px; transform: translate3d(0px, 0px, 0px); opacity: 0; animation: opacity-100-0-3-30 0.5s linear infinite;">
										<div
											style="position: absolute; width: 2px; height: 2px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(36deg) translate(9px, 0px); border-radius: 0px; background: rgb(0, 140, 255);"></div>
									</div>
									<div
										style="position: absolute; top: -1px; transform: translate3d(0px, 0px, 0px); opacity: 0; animation: opacity-100-0-4-30 0.5s linear infinite;">
										<div
											style="position: absolute; width: 2px; height: 2px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(48deg) translate(9px, 0px); border-radius: 0px; background: rgb(0, 140, 255);"></div>
									</div>
									<div
										style="position: absolute; top: -1px; transform: translate3d(0px, 0px, 0px); opacity: 0; animation: opacity-100-0-5-30 0.5s linear infinite;">
										<div
											style="position: absolute; width: 2px; height: 2px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(60deg) translate(9px, 0px); border-radius: 0px; background: rgb(0, 140, 255);"></div>
									</div>
									<div
										style="position: absolute; top: -1px; transform: translate3d(0px, 0px, 0px); opacity: 0; animation: opacity-100-0-6-30 0.5s linear infinite;">
										<div
											style="position: absolute; width: 2px; height: 2px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(72deg) translate(9px, 0px); border-radius: 0px; background: rgb(0, 140, 255);"></div>
									</div>
									<div
										style="position: absolute; top: -1px; transform: translate3d(0px, 0px, 0px); opacity: 0; animation: opacity-100-0-7-30 0.5s linear infinite;">
										<div
											style="position: absolute; width: 2px; height: 2px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(84deg) translate(9px, 0px); border-radius: 0px; background: rgb(0, 140, 255);"></div>
									</div>
									<div
										style="position: absolute; top: -1px; transform: translate3d(0px, 0px, 0px); opacity: 0; animation: opacity-100-0-8-30 0.5s linear infinite;">
										<div
											style="position: absolute; width: 2px; height: 2px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(96deg) translate(9px, 0px); border-radius: 0px; background: rgb(0, 140, 255);"></div>
									</div>
									<div
										style="position: absolute; top: -1px; transform: translate3d(0px, 0px, 0px); opacity: 0; animation: opacity-100-0-9-30 0.5s linear infinite;">
										<div
											style="position: absolute; width: 2px; height: 2px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(108deg) translate(9px, 0px); border-radius: 0px; background: rgb(0, 140, 255);"></div>
									</div>
									<div
										style="position: absolute; top: -1px; transform: translate3d(0px, 0px, 0px); opacity: 0; animation: opacity-100-0-10-30 0.5s linear infinite;">
										<div
											style="position: absolute; width: 2px; height: 2px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(120deg) translate(9px, 0px); border-radius: 0px; background: rgb(0, 140, 255);"></div>
									</div>
									<div
										style="position: absolute; top: -1px; transform: translate3d(0px, 0px, 0px); opacity: 0; animation: opacity-100-0-11-30 0.5s linear infinite;">
										<div
											style="position: absolute; width: 2px; height: 2px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(132deg) translate(9px, 0px); border-radius: 0px; background: rgb(0, 140, 255);"></div>
									</div>
									<div
										style="position: absolute; top: -1px; transform: translate3d(0px, 0px, 0px); opacity: 0; animation: opacity-100-0-12-30 0.5s linear infinite;">
										<div
											style="position: absolute; width: 2px; height: 2px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(144deg) translate(9px, 0px); border-radius: 0px; background: rgb(0, 140, 255);"></div>
									</div>
									<div
										style="position: absolute; top: -1px; transform: translate3d(0px, 0px, 0px); opacity: 0; animation: opacity-100-0-13-30 0.5s linear infinite;">
										<div
											style="position: absolute; width: 2px; height: 2px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(156deg) translate(9px, 0px); border-radius: 0px; background: rgb(0, 140, 255);"></div>
									</div>
									<div
										style="position: absolute; top: -1px; transform: translate3d(0px, 0px, 0px); opacity: 0; animation: opacity-100-0-14-30 0.5s linear infinite;">
										<div
											style="position: absolute; width: 2px; height: 2px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(168deg) translate(9px, 0px); border-radius: 0px; background: rgb(0, 140, 255);"></div>
									</div>
									<div
										style="position: absolute; top: -1px; transform: translate3d(0px, 0px, 0px); opacity: 0; animation: opacity-100-0-15-30 0.5s linear infinite;">
										<div
											style="position: absolute; width: 2px; height: 2px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(180deg) translate(9px, 0px); border-radius: 0px; background: rgb(0, 140, 255);"></div>
									</div>
									<div
										style="position: absolute; top: -1px; transform: translate3d(0px, 0px, 0px); opacity: 0; animation: opacity-100-0-16-30 0.5s linear infinite;">
										<div
											style="position: absolute; width: 2px; height: 2px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(192deg) translate(9px, 0px); border-radius: 0px; background: rgb(0, 140, 255);"></div>
									</div>
									<div
										style="position: absolute; top: -1px; transform: translate3d(0px, 0px, 0px); opacity: 0; animation: opacity-100-0-17-30 0.5s linear infinite;">
										<div
											style="position: absolute; width: 2px; height: 2px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(204deg) translate(9px, 0px); border-radius: 0px; background: rgb(0, 140, 255);"></div>
									</div>
									<div
										style="position: absolute; top: -1px; transform: translate3d(0px, 0px, 0px); opacity: 0; animation: opacity-100-0-18-30 0.5s linear infinite;">
										<div
											style="position: absolute; width: 2px; height: 2px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(216deg) translate(9px, 0px); border-radius: 0px; background: rgb(0, 140, 255);"></div>
									</div>
									<div
										style="position: absolute; top: -1px; transform: translate3d(0px, 0px, 0px); opacity: 0; animation: opacity-100-0-19-30 0.5s linear infinite;">
										<div
											style="position: absolute; width: 2px; height: 2px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(228deg) translate(9px, 0px); border-radius: 0px; background: rgb(0, 140, 255);"></div>
									</div>
									<div
										style="position: absolute; top: -1px; transform: translate3d(0px, 0px, 0px); opacity: 0; animation: opacity-100-0-20-30 0.5s linear infinite;">
										<div
											style="position: absolute; width: 2px; height: 2px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(240deg) translate(9px, 0px); border-radius: 0px; background: rgb(0, 140, 255);"></div>
									</div>
									<div
										style="position: absolute; top: -1px; transform: translate3d(0px, 0px, 0px); opacity: 0; animation: opacity-100-0-21-30 0.5s linear infinite;">
										<div
											style="position: absolute; width: 2px; height: 2px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(252deg) translate(9px, 0px); border-radius: 0px; background: rgb(0, 140, 255);"></div>
									</div>
									<div
										style="position: absolute; top: -1px; transform: translate3d(0px, 0px, 0px); opacity: 0; animation: opacity-100-0-22-30 0.5s linear infinite;">
										<div
											style="position: absolute; width: 2px; height: 2px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(264deg) translate(9px, 0px); border-radius: 0px; background: rgb(0, 140, 255);"></div>
									</div>
									<div
										style="position: absolute; top: -1px; transform: translate3d(0px, 0px, 0px); opacity: 0; animation: opacity-100-0-23-30 0.5s linear infinite;">
										<div
											style="position: absolute; width: 2px; height: 2px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(276deg) translate(9px, 0px); border-radius: 0px; background: rgb(0, 140, 255);"></div>
									</div>
									<div
										style="position: absolute; top: -1px; transform: translate3d(0px, 0px, 0px); opacity: 0; animation: opacity-100-0-24-30 0.5s linear infinite;">
										<div
											style="position: absolute; width: 2px; height: 2px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(288deg) translate(9px, 0px); border-radius: 0px; background: rgb(0, 140, 255);"></div>
									</div>
									<div
										style="position: absolute; top: -1px; transform: translate3d(0px, 0px, 0px); opacity: 0; animation: opacity-100-0-25-30 0.5s linear infinite;">
										<div
											style="position: absolute; width: 2px; height: 2px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(300deg) translate(9px, 0px); border-radius: 0px; background: rgb(0, 140, 255);"></div>
									</div>
									<div
										style="position: absolute; top: -1px; transform: translate3d(0px, 0px, 0px); opacity: 0; animation: opacity-100-0-26-30 0.5s linear infinite;">
										<div
											style="position: absolute; width: 2px; height: 2px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(312deg) translate(9px, 0px); border-radius: 0px; background: rgb(0, 140, 255);"></div>
									</div>
									<div
										style="position: absolute; top: -1px; transform: translate3d(0px, 0px, 0px); opacity: 0; animation: opacity-100-0-27-30 0.5s linear infinite;">
										<div
											style="position: absolute; width: 2px; height: 2px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(324deg) translate(9px, 0px); border-radius: 0px; background: rgb(0, 140, 255);"></div>
									</div>
									<div
										style="position: absolute; top: -1px; transform: translate3d(0px, 0px, 0px); opacity: 0; animation: opacity-100-0-28-30 0.5s linear infinite;">
										<div
											style="position: absolute; width: 2px; height: 2px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(336deg) translate(9px, 0px); border-radius: 0px; background: rgb(0, 140, 255);"></div>
									</div>
									<div
										style="position: absolute; top: -1px; transform: translate3d(0px, 0px, 0px); opacity: 0; animation: opacity-100-0-29-30 0.5s linear infinite;">
										<div
											style="position: absolute; width: 2px; height: 2px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(348deg) translate(9px, 0px); border-radius: 0px; background: rgb(0, 140, 255);"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- #gallery -->
				</div>
			</div>
			<!-- #site-content -->

			<div id="infinity-footer" class="hide-phone hide-tablet js-footer">
				<div class="tooltipi-container left">
					<div class="infinity-footer-button">更多 Behance</div>
					<ul class="tooltipi tooltipi-up infinity-tooltipi">
						<li><a href="https://www.behance.net/about"> <span
								class="infinity-footer-icon-wrap"> <span
									class="infinity-footer-sprite infinity-footer-about"></span>
							</span> 关于 Behance 和招贤纳士
						</a></li>
						<li><a
							href="https://www.myportfolio.com/?promoid=ZKD5FJ7P&amp;mv=other">
								<span class="infinity-footer-icon-wrap"> <span
									class="infinity-footer-sprite infinity-footer-portfolio"></span>
							</span> Adobe Portfolio
						</a></li>
						<li><a href="http://blog.behance.net/"> <span
								class="infinity-footer-icon-wrap"> <span
									class="infinity-footer-sprite infinity-footer-blog"></span>
							</span> 博客
						</a></li>
						<li><a href="https://www.behance.net/dev"> <span
								class="infinity-footer-icon-wrap"> <span
									class="infinity-footer-sprite infinity-footer-api"></span>
							</span> Behance API
						</a></li>
						<li><a href="https://www.behance.net/reviews"> <span
								class="infinity-footer-icon-wrap"> <span
									class="infinity-footer-sprite infinity-footer-portfolio-review"></span>
							</span> 作品集回顾之周
						</a></li>
						<li><a
							href="http://99u.com/?utm_source=network&amp;utm_medium=activity_feed_footer&amp;utm_campaign=network_footer_references">
								<span class="infinity-footer-icon-wrap"> <span
									class="infinity-footer-sprite infinity-footer-insights"></span>
							</span> 创作职业提示
						</a></li>
						<li><a href="https://www.behance.net/apps"> <span
								class="infinity-footer-icon-wrap"> <span
									class="infinity-footer-sprite infinity-footer-apps"></span>
							</span> 应用程序
						</a></li>
					</ul>
				</div>
				<div class="tooltipi-container left">
					<div class="infinity-footer-button">
						<span class="beta-label">测试版</span> 中文(简体)
					</div>
					<ul class="tooltipi tooltipi-up infinity-tooltipi">
						<li><a class="js-language-option"
							data-language-locale="en_US" title="English">English</a></li>
						<li><a class="js-language-option"
							data-language-locale="cs_CZ" title="Czech">Čeština</a></li>
						<li><a class="js-language-option"
							data-language-locale="da_DK" title="Danish">Dansk</a></li>
						<li><a class="js-language-option"
							data-language-locale="de_DE" title="German">Deutsch</a></li>
						<li><a class="js-language-option"
							data-language-locale="es_ES" title="Spanish">Español</a></li>
						<li><a class="js-language-option"
							data-language-locale="fr_FR" title="French">Français</a></li>
						<li><a class="js-language-option"
							data-language-locale="it_IT" title="Italian">Italiano</a></li>
						<li><a class="js-language-option"
							data-language-locale="nl_NL" title="Dutch">Nederlands</a></li>
						<li><a class="js-language-option"
							data-language-locale="nb_NO" title="Norwegian">Norsk</a></li>
						<li><a class="js-language-option"
							data-language-locale="pl_PL" title="Polish">Polski</a></li>
						<li><a class="js-language-option"
							data-language-locale="pt_BR" title="Portuguese">Português</a></li>
						<li><a class="js-language-option"
							data-language-locale="ru_RU" title="Russian">Pусский</a></li>
						<li><a class="js-language-option"
							data-language-locale="fi_FI" title="Finnish">Suomi</a></li>
						<li><a class="js-language-option"
							data-language-locale="sv_SE" title="Swedish">Svenska</a></li>
						<li><a class="js-language-option"
							data-language-locale="tr_TR" title="Turkish">Türkçe</a></li>
						<li><a class="js-language-option"
							data-language-locale="ja_JP" title="Japanese">日本語</a></li>
						<li><a class="js-language-option"
							data-language-locale="ko_KR" title="Korean">한국어</a></li>
						<li class="active"><a class="js-language-option"
							data-language-locale="zh_CN" title="Chinese (Simplified)">中文(简体)</a></li>
						<li><a class="js-language-option"
							data-language-locale="zh_TW" title="Chinese (Traditional)">中文(繁體)</a></li>
					</ul>
				</div>
				<div class="left">
					<a href="https://www.behance.net/misc/terms"
						class="infinity-footer-link"> TOU 和隐私 </a>
				</div>
				<div class="left">
					<a href="https://www.behance.net/faq" class="infinity-footer-link">
						常见问题解答 </a>
				</div>
				<div class="right">
					<a href="http://adobe.com/"
						class="beicons-pre beicons-pre-adobe infinity-footer-adobe"
						target="_blank"> Adobe 产品家族中的成员 </a>
				</div>
			</div>
		</div>
		<!-- .slide-panel -->

		<div id="nav-basement" class="js-nav-basement">
			<ul class="nav-items cfix dark-background">
				<li class="nav-item nav-item-signup cfix first action-container"
					id="nav_item_signup"><a
					class="js-adobeid-signup form-button form-button-default action-signup"
					href="https://www.behance.net/mayabora#"><div class="nav-text"
							data-signup-from="MobileMenu_SignUp">注册</div></a></li>
				<li class="nav-item nav-item-login cfix action-container"
					id="nav_item_login"><a
					class="js-adobeid-signin form-button form-button-dark"
					href="https://www.behance.net/mayabora#"><div
							class="nav-text inline-block">登录</div></a></li>

				<li class="nav-item"><a
					class="nav-item-link active beicons-pre beicons-pre-discover"
					href="https://www.behance.net/search"> 发现 </a></li>
				<li class="nav-item"><a
					class="nav-item-link beicons-pre beicons-pre-badge"
					href="https://www.behance.net/galleries"> 策展库 </a></li>
				<li class="nav-item"><a
					class="nav-item-link beicons-pre beicons-pre-columns"
					href="https://www.behance.net/poweredby"> 学校和组织 </a></li>
				<li class="nav-item"><a
					class="nav-item-link beicons-pre beicons-pre-suitcase"
					href="https://www.behance.net/joblist"> 职位 </a></li>
				<li class="nav-item"><a
					class="nav-item-link beicons-pre beicons-pre-clone"
					href="https://www.behance.net/apps"> 应用程序 </a></li>
			</ul>
		</div>
		<script type="application/json" id="beconfig-page_constants">{"GLOBALNAV":{"URLS":{"JS":"/js\/globalnav.js","CSS":"/css\/globalnav.css"},"OPEN_NOTIFICATIONS":false,"NOTIFICATION_TITLE":"\u60a8\u7684\u901a\u77e5","NOTIFICATION_PROPS_TITLE":"\u60a8\u7684\u7533\u8bf7"},"TYPEKIT":{"KIT_IDS":{"ADOBE":"jhi6ekj"},"URL":"\/\/use.typekit.com\/"},"XHR":{"URL_SIGNUP_ACTIVATE":"\/signup\/activate"},"SSO":{"CLIENT_ID":"BehanceWebSusi1","COOKIE_IMS_ACCESS_TOKEN_TTL":86400,"COOKIE_IMS_LOGGED_OUT_TTL":60,"COOKIE_IMS_ACCESS_TOKEN":"iat0","COOKIE_IMS_IMPERSONATOR_TOKEN":"iatx","COOKIE_IMS_LOGGED_OUT":"ilo0","COOKIES_DISABLED":"ilo0","IGNORE_COOKIE_UPDATE":false,"LOCALE":"zh_CN","LOGIN_DISABLED":false,"IS_LOGGED_IN_FULL_USER":false,"USES_SINGLE_LOG_OUT":false,"OMNITURE_AC_STATE":"behance.net","QS_IMS_SSO_INBOUND":"sso_inbound","QS_IMS_SIGNIN_ATTEMPT":"isa0","SCOPES":["AdobeID","openid","gnav","sao.cce_private","creative_cloud","creative_sdk","be.pro2.external_client","additional_info.roles"],"URLS":{"IMS":"/js\/imslib.min.js?client_id=BehanceWebSusi1&locale=zh_CN","AUTH_CHECK":"https:\/\/www.behance.net\/auth\/check","FAQ_THIRD_PARTY_COOKIES":"https:\/\/help.behance.net\/entries\/45476840-Why-am-I-getting-logged-out-of-Behance-spontaneously-","LOGOUT":"https:\/\/www.behance.net\/auth\/logout","LOGIN":"https:\/\/www.behance.net\/auth\/login","ACTIVITY":"\/activity","ONBOARDING":"\/onboarding"}},"PAGE_URLS":{"ADOBE_PORTFOLIO":"https:\/\/www.myportfolio.com\/?promoid=ZP46FDHN&mv=other","TEAM_ONBOARDING":"\/team\/onboarding","TEAM_SIGNUP":"\/team\/signup","TEAMS_SEGMENT_MEMBERS":"\/members","TEAMS_ENDPOINT":"\/v2\/teams","TEAMS_SEARCH":"\/v2\/teams\/search","USER_PROFILE":false,"POPULAR_COLLECTIONS":"\/poweredby\/collections","SEARCH":"\/search","GALLERIES":"\/galleries","CREATIVES_TO_FOLLOW":"\/search?content=users&sort=featured_date&time=all","PROJECT_EDITOR":"\/portfolio\/editor","API_PROFILE_EDITOR":"\/v2\/profile\/editor\/","ADMIN_TALENT_RECOMMENDATION_POPULATE":"\/a\/talent\/recommendations_populate","ADMIN_TALENT_RECOMMENDATION_POPULATE_ADD":"\/a\/talent\/recommendations_populate","APPS_DOWNLOAD_NETWORK":"http:\/\/c00.adobe.com\/579cf86a-96dc-4de9-9ba0-e1e8a00ab180\/xn5ym653\/i\/489667151"},"SERVICES":{"DATA_TYPES":{"1":1,"2":1,"3":1,"4":2,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1},"TYPE_USERNAME":1,"TYPE_URL":2,"URLS":{"1":"twitter.com\/","2":"facebook.com\/","3":"dribbble.com\/","4":"linkedin.com\/","5":"vimeo.com\/","6":"flickr.com\/","7":"youtube.com\/","8":"pinterest.com\/","9":"tumblr.com","10":"plus.google.com\/","11":"etsy.com\/shop\/","12":"instagram.com\/"}},"SEGMENT_DEPTH":1,"EDITOR":{"CUSTOM_SECTION_LIMIT":3},"COLLECTIONS":{"DELETE_URL":"\/user\/delete_collection","LEAVE_URL":"\/user\/leave_collection","PRIVACY_URL":"\/user\/privacy_collection","RENAME_URL":"\/user\/rename_collection","OWNER_URL":"\/user\/coown_collection","OWNER_DATA_URL":"\/user\/coown_data_collection"},"PROJECTS":{"ORDER_URL":"\/user\/save_order","DELETE_URL":"\/user\/delete_project","REMOVE_OWNER_URL":"\/user\/remove_owner","CLONE_URL":"\/user\/clone_project","UNPUBLISH_URL":"\/user\/unpublish_project"},"IMAGE":{"EXTENSIONS":["jpg","gif","png","jpeg"],"LIMIT":1048576,"UPLOAD_URL":"\/v2\/profile\/avatar","UPLOAD_KEY":"image","WIDTH":276,"HEIGHT":276,"RATIO":0.5},"ADOBE_PORTFOLIO":{"URLS":{"GALLERIES":"https:\/\/pro2-view.myportfolio.com\/v1\/galleries"}},"BREADCRUMBS":{"DISCOVER":"\u53d1\u73b0","CONNECTIONS":"\u8054\u7cfb"}}</script>
		<script type="application/json" id="beconfig-page_gates">{"lightbox":1,"project_view_chrome":1}</script>
		<script crossorigin="" type="text/javascript"
			src="./style/js/network.js"></script>
		<script crossorigin="" type="text/javascript" src="./style/js/user.js"></script>
		<script type="text/javascript" nonce="">if (typeof _satellite !== "undefined" && _satellite.pageBottom) { _satellite.pageBottom(); }</script>
		<!--[if lte IE 9]>
<div id="ie-message" class="message-block" >

  <div id="message-transparent-bg"></div>

  <div id="ie-message-container" class="message-containers message-block">

  <div id="ie-message-outter" class="message-block"></div>

  <div id="ie-message-inner" class="message-block">

    <div id="message-header-container" class="message-containers">

      <span id="warning-icon" class="browser-icon"></span>

      <h1 id="we-noticed">We notice you are using an outdated version of Internet Explorer.</h1>
      <h2 id="browser-not-supported">This version is not supported by Behance.</h2>

    </div>


    <div id="we-recommend-container" class="message-containers">

      <p id="we-recommend">For the best experience, we recommend using one of the latest versions of the following supported browsers:</p>

      <ul id="reccommendation-list">
        <li id="chrome" class="container-block left">
          <a href="https://www.google.com/chrome" class="browser-link-container">
            <span class="browser-icon"></span>
            <span class="browser-link">Google Chrome</span>
            <span class="platform">PC/Mac/Linux</span>
          </a>
        </li>
        <li id="firefox" class="container-block left">
          <a href="http://www.mozilla.org/en-US/firefox/fx/" class="browser-link-container">
            <span class="browser-icon"></span>
            <span class="browser-link">Firefox</span>
            <span class="platform">PC/Mac/Linux</span>
          </a>
        </li>
      </ul>

    </div>

  </div>

  </div>

</div>

<![endif]-->

		<script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","licenseKey":"e7fb1b89a0","applicationID":"27472197","transactionName":"ZwZaYkJVDERXUxULCV5Me0NDQA1aGWsmJzJtQ21FVUZYDV9eBQce","queueTime":0,"applicationTime":143,"atts":"S0FZFApPH0o=","errorBeacon":"bam.nr-data.net","agent":""}</script>


		<iframe id="destination_publishing_iframe_adobe_0"
			src="./style/img/dest5.html" class="aamIframeLoaded"
			style="display: none; width: 0px; height: 0px;"></iframe>
	</form>
</body>
</html>