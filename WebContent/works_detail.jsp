<%@page import="com.opensymphony.xwork2.ActionContext"%>
<%@page import="com.bbm.bean.ei_user"%>
<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
    <%@ page import="com.bbm.util.*,java.sql.*"%>
    <%@ page import=" java.util.ArrayList"%>
    <%@ page import=" java.util.List"%>
    <%@ page import=" com.bbm.bean.ei_ideas"%>
    <%@ page import=" com.bbm.util.DBconnection"%>
    <%@ page import=" com.bbm.bean.ei_work_comment"%>
    <%@ page import=" java.util.Date" %>
    <%@ page import=" javax.servlet.http.HttpSession" %>
    <%@ page import=" org.apache.struts2.ServletActionContext" %>


<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "#">

<html class="" style="overflow: hidden;"><!--<![endif]--><head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<!-- <script type="text/javascript" async="async" src="./style/img/s67132760655244"></script>
<script type="text/javascript" src="./style/img/e7fb1b89a0"></script>
<script src="./style/js/nr-974.min.js"></script>
<script type="text/javascript" async="async" src="./style/img/s648322658125"></script> -->
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta http-equiv="X-UA-Compatible" content="chrome=1">
<!-- <script type="text/javascript">(window.NREUM||(NREUM={})).loader_config={xpid:"VgUFVldbGwEHUFZQBggA"};window.NREUM||(NREUM={}),__nr_require=function(t,e,n){function r(n){if(!e[n]){var o=e[n]={exports:{}};t[n][0].call(o.exports,function(e){var o=t[n][1][e];return r(o||e)},o,o.exports)}return e[n].exports}if("function"==typeof __nr_require)return __nr_require;for(var o=0;o<n.length;o++)r(n[o]);return r}({1:[function(t,e,n){function r(t){try{s.console&&console.log(t)}catch(e){}}var o,i=t("ee"),a=t(15),s={};try{o=localStorage.getItem("__nr_flags").split(","),console&&"function"==typeof console.log&&(s.console=!0,o.indexOf("dev")!==-1&&(s.dev=!0),o.indexOf("nr_dev")!==-1&&(s.nrDev=!0))}catch(c){}s.nrDev&&i.on("internal-error",function(t){r(t.stack)}),s.dev&&i.on("fn-err",function(t,e,n){r(n.stack)}),s.dev&&(r("NR AGENT IN DEVELOPMENT MODE"),r("flags: "+a(s,function(t,e){return t}).join(", ")))},{}],2:[function(t,e,n){function r(t,e,n,r,o){try{d?d-=1:i("err",[o||new UncaughtException(t,e,n)])}catch(s){try{i("ierr",[s,(new Date).getTime(),!0])}catch(c){}}return"function"==typeof f&&f.apply(this,a(arguments))}function UncaughtException(t,e,n){this.message=t||"Uncaught error with no additional information",this.sourceURL=e,this.line=n}function o(t){i("err",[t,(new Date).getTime()])}var i=t("handle"),a=t(16),s=t("ee"),c=t("loader"),f=window.onerror,u=!1,d=0;c.features.err=!0,t(1),window.onerror=r;try{throw new Error}catch(l){"stack"in l&&(t(8),t(7),"addEventListener"in window&&t(5),c.xhrWrappable&&t(9),u=!0)}s.on("fn-start",function(t,e,n){u&&(d+=1)}),s.on("fn-err",function(t,e,n){u&&(this.thrown=!0,o(n))}),s.on("fn-end",function(){u&&!this.thrown&&d>0&&(d-=1)}),s.on("internal-error",function(t){i("ierr",[t,(new Date).getTime(),!0])})},{}],3:[function(t,e,n){t("loader").features.ins=!0},{}],4:[function(t,e,n){function r(t){}if(window.performance&&window.performance.timing&&window.performance.getEntriesByType){var o=t("ee"),i=t("handle"),a=t(8),s=t(7),c="learResourceTimings",f="addEventListener",u="resourcetimingbufferfull",d="bstResource",l="resource",p="-start",h="-end",m="fn"+p,w="fn"+h,v="bstTimer",y="pushState";t("loader").features.stn=!0,t(6);var g=NREUM.o.EV;o.on(m,function(t,e){var n=t[0];n instanceof g&&(this.bstStart=Date.now())}),o.on(w,function(t,e){var n=t[0];n instanceof g&&i("bst",[n,e,this.bstStart,Date.now()])}),a.on(m,function(t,e,n){this.bstStart=Date.now(),this.bstType=n}),a.on(w,function(t,e){i(v,[e,this.bstStart,Date.now(),this.bstType])}),s.on(m,function(){this.bstStart=Date.now()}),s.on(w,function(t,e){i(v,[e,this.bstStart,Date.now(),"requestAnimationFrame"])}),o.on(y+p,function(t){this.time=Date.now(),this.startPath=location.pathname+location.hash}),o.on(y+h,function(t){i("bstHist",[location.pathname+location.hash,this.startPath,this.time])}),f in window.performance&&(window.performance["c"+c]?window.performance[f](u,function(t){i(d,[window.performance.getEntriesByType(l)]),window.performance["c"+c]()},!1):window.performance[f]("webkit"+u,function(t){i(d,[window.performance.getEntriesByType(l)]),window.performance["webkitC"+c]()},!1)),document[f]("scroll",r,!1),document[f]("keypress",r,!1),document[f]("click",r,!1)}},{}],5:[function(t,e,n){function r(t){for(var e=t;e&&!e.hasOwnProperty(u);)e=Object.getPrototypeOf(e);e&&o(e)}function o(t){s.inPlace(t,[u,d],"-",i)}function i(t,e){return t[1]}var a=t("ee").get("events"),s=t(17)(a),c=t("gos"),f=XMLHttpRequest,u="addEventListener",d="removeEventListener";e.exports=a,"getPrototypeOf"in Object?(r(document),r(window),r(f.prototype)):f.prototype.hasOwnProperty(u)&&(o(window),o(f.prototype)),a.on(u+"-start",function(t,e){if(t[1]){var n=t[1];if("function"==typeof n){var r=c(n,"nr@wrapped",function(){return s(n,"fn-",null,n.name||"anonymous")});this.wrapped=t[1]=r}else"function"==typeof n.handleEvent&&s.inPlace(n,["handleEvent"],"fn-")}}),a.on(d+"-start",function(t){var e=this.wrapped;e&&(t[1]=e)})},{}],6:[function(t,e,n){var r=t("ee").get("history"),o=t(17)(r);e.exports=r,o.inPlace(window.history,["pushState","replaceState"],"-")},{}],7:[function(t,e,n){var r=t("ee").get("raf"),o=t(17)(r),i="equestAnimationFrame";e.exports=r,o.inPlace(window,["r"+i,"mozR"+i,"webkitR"+i,"msR"+i],"raf-"),r.on("raf-start",function(t){t[0]=o(t[0],"fn-")})},{}],8:[function(t,e,n){function r(t,e,n){t[0]=a(t[0],"fn-",null,n)}function o(t,e,n){this.method=n,this.timerDuration="number"==typeof t[1]?t[1]:0,t[0]=a(t[0],"fn-",this,n)}var i=t("ee").get("timer"),a=t(17)(i),s="setTimeout",c="setInterval",f="clearTimeout",u="-start",d="-";e.exports=i,a.inPlace(window,[s,"setImmediate"],s+d),a.inPlace(window,[c],c+d),a.inPlace(window,[f,"clearImmediate"],f+d),i.on(c+u,r),i.on(s+u,o)},{}],9:[function(t,e,n){function r(t,e){d.inPlace(e,["onreadystatechange"],"fn-",s)}function o(){var t=this,e=u.context(t);t.readyState>3&&!e.resolved&&(e.resolved=!0,u.emit("xhr-resolved",[],t)),d.inPlace(t,w,"fn-",s)}function i(t){v.push(t),h&&(g=-g,b.data=g)}function a(){for(var t=0;t<v.length;t++)r([],v[t]);v.length&&(v=[])}function s(t,e){return e}function c(t,e){for(var n in t)e[n]=t[n];return e}t(5);var f=t("ee"),u=f.get("xhr"),d=t(17)(u),l=NREUM.o,p=l.XHR,h=l.MO,m="readystatechange",w=["onload","onerror","onabort","onloadstart","onloadend","onprogress","ontimeout"],v=[];e.exports=u;var y=window.XMLHttpRequest=function(t){var e=new p(t);try{u.emit("new-xhr",[e],e),e.addEventListener(m,o,!1)}catch(n){try{u.emit("internal-error",[n])}catch(r){}}return e};if(c(p,y),y.prototype=p.prototype,d.inPlace(y.prototype,["open","send"],"-xhr-",s),u.on("send-xhr-start",function(t,e){r(t,e),i(e)}),u.on("open-xhr-start",r),h){var g=1,b=document.createTextNode(g);new h(a).observe(b,{characterData:!0})}else f.on("fn-end",function(t){t[0]&&t[0].type===m||a()})},{}],10:[function(t,e,n){function r(t){var e=this.params,n=this.metrics;if(!this.ended){this.ended=!0;for(var r=0;r<d;r++)t.removeEventListener(u[r],this.listener,!1);if(!e.aborted){if(n.duration=(new Date).getTime()-this.startTime,4===t.readyState){e.status=t.status;var i=o(t,this.lastSize);if(i&&(n.rxSize=i),this.sameOrigin){var a=t.getResponseHeader("X-NewRelic-App-Data");a&&(e.cat=a.split(", ").pop())}}else e.status=0;n.cbTime=this.cbTime,f.emit("xhr-done",[t],t),s("xhr",[e,n,this.startTime])}}}function o(t,e){var n=t.responseType;if("json"===n&&null!==e)return e;var r="arraybuffer"===n||"blob"===n||"json"===n?t.response:t.responseText;return h(r)}function i(t,e){var n=c(e),r=t.params;r.host=n.hostname+":"+n.port,r.pathname=n.pathname,t.sameOrigin=n.sameOrigin}var a=t("loader");if(a.xhrWrappable){var s=t("handle"),c=t(11),f=t("ee"),u=["load","error","abort","timeout"],d=u.length,l=t("id"),p=t(14),h=t(13),m=window.XMLHttpRequest;a.features.xhr=!0,t(9),f.on("new-xhr",function(t){var e=this;e.totalCbs=0,e.called=0,e.cbTime=0,e.end=r,e.ended=!1,e.xhrGuids={},e.lastSize=null,p&&(p>34||p<10)||window.opera||t.addEventListener("progress",function(t){e.lastSize=t.loaded},!1)}),f.on("open-xhr-start",function(t){this.params={method:t[0]},i(this,t[1]),this.metrics={}}),f.on("open-xhr-end",function(t,e){"loader_config"in NREUM&&"xpid"in NREUM.loader_config&&this.sameOrigin&&e.setRequestHeader("X-NewRelic-ID",NREUM.loader_config.xpid)}),f.on("send-xhr-start",function(t,e){var n=this.metrics,r=t[0],o=this;if(n&&r){var i=h(r);i&&(n.txSize=i)}this.startTime=(new Date).getTime(),this.listener=function(t){try{"abort"===t.type&&(o.params.aborted=!0),("load"!==t.type||o.called===o.totalCbs&&(o.onloadCalled||"function"!=typeof e.onload))&&o.end(e)}catch(n){try{f.emit("internal-error",[n])}catch(r){}}};for(var a=0;a<d;a++)e.addEventListener(u[a],this.listener,!1)}),f.on("xhr-cb-time",function(t,e,n){this.cbTime+=t,e?this.onloadCalled=!0:this.called+=1,this.called!==this.totalCbs||!this.onloadCalled&&"function"==typeof n.onload||this.end(n)}),f.on("xhr-load-added",function(t,e){var n=""+l(t)+!!e;this.xhrGuids&&!this.xhrGuids[n]&&(this.xhrGuids[n]=!0,this.totalCbs+=1)}),f.on("xhr-load-removed",function(t,e){var n=""+l(t)+!!e;this.xhrGuids&&this.xhrGuids[n]&&(delete this.xhrGuids[n],this.totalCbs-=1)}),f.on("addEventListener-end",function(t,e){e instanceof m&&"load"===t[0]&&f.emit("xhr-load-added",[t[1],t[2]],e)}),f.on("removeEventListener-end",function(t,e){e instanceof m&&"load"===t[0]&&f.emit("xhr-load-removed",[t[1],t[2]],e)}),f.on("fn-start",function(t,e,n){e instanceof m&&("onload"===n&&(this.onload=!0),("load"===(t[0]&&t[0].type)||this.onload)&&(this.xhrCbStart=(new Date).getTime()))}),f.on("fn-end",function(t,e){this.xhrCbStart&&f.emit("xhr-cb-time",[(new Date).getTime()-this.xhrCbStart,this.onload,e],e)})}},{}],11:[function(t,e,n){e.exports=function(t){var e=document.createElement("a"),n=window.location,r={};e.href=t,r.port=e.port;var o=e.href.split("://");!r.port&&o[1]&&(r.port=o[1].split("/")[0].split("@").pop().split(":")[1]),r.port&&"0"!==r.port||(r.port="https"===o[0]?"443":"80"),r.hostname=e.hostname||n.hostname,r.pathname=e.pathname,r.protocol=o[0],"/"!==r.pathname.charAt(0)&&(r.pathname="/"+r.pathname);var i=!e.protocol||":"===e.protocol||e.protocol===n.protocol,a=e.hostname===document.domain&&e.port===n.port;return r.sameOrigin=i&&(!e.hostname||a),r}},{}],12:[function(t,e,n){function r(){}function o(t,e,n){return function(){return i(t,[(new Date).getTime()].concat(s(arguments)),e?null:this,n),e?void 0:this}}var i=t("handle"),a=t(15),s=t(16),c=t("ee").get("tracer"),f=NREUM;"undefined"==typeof window.newrelic&&(newrelic=f);var u=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit"],d="api-",l=d+"ixn-";a(u,function(t,e){f[e]=o(d+e,!0,"api")}),f.addPageAction=o(d+"addPageAction",!0),e.exports=newrelic,f.interaction=function(){return(new r).get()};var p=r.prototype={createTracer:function(t,e){var n={},r=this,o="function"==typeof e;return i(l+"tracer",[Date.now(),t,n],r),function(){if(c.emit((o?"":"no-")+"fn-start",[Date.now(),r,o],n),o)try{return e.apply(this,arguments)}finally{c.emit("fn-end",[Date.now()],n)}}}};a("setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(t,e){p[e]=o(l+e)}),newrelic.noticeError=function(t){"string"==typeof t&&(t=new Error(t)),i("err",[t,(new Date).getTime()])}},{}],13:[function(t,e,n){e.exports=function(t){if("string"==typeof t&&t.length)return t.length;if("object"==typeof t){if("undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer&&t.byteLength)return t.byteLength;if("undefined"!=typeof Blob&&t instanceof Blob&&t.size)return t.size;if(!("undefined"!=typeof FormData&&t instanceof FormData))try{return JSON.stringify(t).length}catch(e){return}}}},{}],14:[function(t,e,n){var r=0,o=navigator.userAgent.match(/Firefox[\/\s](\d+\.\d+)/);o&&(r=+o[1]),e.exports=r},{}],15:[function(t,e,n){function r(t,e){var n=[],r="",i=0;for(r in t)o.call(t,r)&&(n[i]=e(r,t[r]),i+=1);return n}var o=Object.prototype.hasOwnProperty;e.exports=r},{}],16:[function(t,e,n){function r(t,e,n){e||(e=0),"undefined"==typeof n&&(n=t?t.length:0);for(var r=-1,o=n-e||0,i=Array(o<0?0:o);++r<o;)i[r]=t[e+r];return i}e.exports=r},{}],17:[function(t,e,n){function r(t){return!(t&&"function"==typeof t&&t.apply&&!t[a])}var o=t("ee"),i=t(16),a="nr@original",s=Object.prototype.hasOwnProperty,c=!1;e.exports=function(t){function e(t,e,n,o){function nrWrapper(){var r,a,s,c;try{a=this,r=i(arguments),s="function"==typeof n?n(r,a):n||{}}catch(u){d([u,"",[r,a,o],s])}f(e+"start",[r,a,o],s);try{return c=t.apply(a,r)}catch(l){throw f(e+"err",[r,a,l],s),l}finally{f(e+"end",[r,a,c],s)}}return r(t)?t:(e||(e=""),nrWrapper[a]=t,u(t,nrWrapper),nrWrapper)}function n(t,n,o,i){o||(o="");var a,s,c,f="-"===o.charAt(0);for(c=0;c<n.length;c++)s=n[c],a=t[s],r(a)||(t[s]=e(a,f?s+o:o,i,s))}function f(e,n,r){if(!c){c=!0;try{t.emit(e,n,r)}catch(o){d([o,e,n,r])}c=!1}}function u(t,e){if(Object.defineProperty&&Object.keys)try{var n=Object.keys(t);return n.forEach(function(n){Object.defineProperty(e,n,{get:function(){return t[n]},set:function(e){return t[n]=e,e}})}),e}catch(r){d([r])}for(var o in t)s.call(t,o)&&(e[o]=t[o]);return e}function d(e){try{t.emit("internal-error",e)}catch(n){}}return t||(t=o),e.inPlace=n,e.flag=a,e}},{}],ee:[function(t,e,n){function r(){}function o(t){function e(t){return t&&t instanceof r?t:t?s(t,a,i):i()}function n(n,r,o){t&&t(n,r,o);for(var i=e(o),a=l(n),s=a.length,c=0;c<s;c++)a[c].apply(i,r);var u=f[w[n]];return u&&u.push([v,n,r,i]),i}function d(t,e){m[t]=l(t).concat(e)}function l(t){return m[t]||[]}function p(t){return u[t]=u[t]||o(n)}function h(t,e){c(t,function(t,n){e=e||"feature",w[n]=e,e in f||(f[e]=[])})}var m={},w={},v={on:d,emit:n,get:p,listeners:l,context:e,buffer:h};return v}function i(){return new r}var a="nr@context",s=t("gos"),c=t(15),f={},u={},d=e.exports=o();d.backlog=f},{}],gos:[function(t,e,n){function r(t,e,n){if(o.call(t,e))return t[e];var r=n();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(t,e,{value:r,writable:!0,enumerable:!1}),r}catch(i){}return t[e]=r,r}var o=Object.prototype.hasOwnProperty;e.exports=r},{}],handle:[function(t,e,n){function r(t,e,n,r){o.buffer([t],r),o.emit(t,e,n)}var o=t("ee").get("handle");e.exports=r,r.ee=o},{}],id:[function(t,e,n){function r(t){var e=typeof t;return!t||"object"!==e&&"function"!==e?-1:t===window?0:a(t,i,function(){return o++})}var o=1,i="nr@id",a=t("gos");e.exports=r},{}],loader:[function(t,e,n){function r(){if(!g++){var t=y.info=NREUM.info,e=u.getElementsByTagName("script")[0];if(t&&t.licenseKey&&t.applicationID&&e){c(w,function(e,n){t[e]||(t[e]=n)});var n="https"===m.split(":")[0]||t.sslForHttp;y.proto=n?"https://":"http://",s("mark",["onload",a()],null,"api");var r=u.createElement("script");r.src=y.proto+t.agent,e.parentNode.insertBefore(r,e)}}}function o(){"complete"===u.readyState&&i()}function i(){s("mark",["domContent",a()],null,"api")}function a(){return(new Date).getTime()}var s=t("handle"),c=t(15),f=window,u=f.document,d="addEventListener",l="attachEvent",p=f.XMLHttpRequest,h=p&&p.prototype;NREUM.o={ST:setTimeout,CT:clearTimeout,XHR:p,REQ:f.Request,EV:f.Event,PR:f.Promise,MO:f.MutationObserver},t(12);var m=""+location,w={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-974.min.js"},v=p&&h&&h[d]&&!/CriOS/.test(navigator.userAgent),y=e.exports={offset:a(),origin:m,features:{},xhrWrappable:v};u[d]?(u[d]("DOMContentLoaded",i,!1),f[d]("load",r,!1)):(u[l]("onreadystatechange",o),f[l]("onload",r)),s("mark",["firstbyte",a()],null,"api");var g=0},{}]},{},["loader",2,10,4,3]);</script>
 -->
<meta http-equiv="cache-control" content="no-cache">

<meta name="language" content="english">
<meta name="distribution" content="global">
<meta name="author" content="Behance">
<meta name="publisher" content="Behance">
<meta name="copyright" content="2016 Behance">
<meta name="p:domain_verify" content="d7cdd4d26570133b3ce3a1e3c095b3a4">
<meta name="fb:app_id" content="229702757350">
<meta name="twitter:widgets:csp" content="on">


<meta name="viewport" content="width=device-width, initial-scale=0.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">

<link rel="alternate" type="application/rss+xml" title="RSS" href="#">

<meta name="description" content="Showcase and discover the latest work from top online portfolios by creative professionals across industries.">
<meta name="keywords" content="online portfolio, online portfolio site, creative professional platform, creative network, creative community, creative talent">
<meta name="robots" content="index, follow">
<meta name="revisit-after" content="2 days">

<link rel="shortcut icon" href="#">
<link rel="apple-touch-icon" href="#">

<title>Canon G7 X II Promo on Behance</title>

<link rel="stylesheet" href="./style/css/networki.css" type="text/css">
<link rel="stylesheet" href="./style/css/responsive.css" type="text/css">
<link rel="stylesheet" href="./style/css/galleries.css" type="text/css">

<!--[if lte IE 9]>
  <link rel="stylesheet" href="#" type="text/css" />
<![endif]-->
<script type="application/json" id="global-config-json">{"CBSTR":"cb=1020668724","ASSETSURL":"https:\/\/a3.behance.net\/"}</script>

<!--<script type="text/javascript" nonce="">!function(){"use strict";function n(n,t,e){function r(n){i.push(n),u||(u=!0,setTimeout(function(){e(i),u=!1,i=[]},0))}var o={},i=[],u=!1,c=n.onerror;n.onerror=function(){var n=t.apply(null,arguments),e=JSON.stringify(n);o[e]||(o[e]=!0,r(n)),c&&c.apply(this,arguments)}}function t(n){return"undefined"!=typeof n}function e(n){return"[object Event]"===String(n)?"Event#target.src="+(n.target&&n.target.src):n}function r(n,r,o,i,u){var c={};return n&&(n=String("object"==typeof n?e(n):n)),r&&(c.file=String(r)),t(o)&&(c.line=Number(o)),t(i)&&(c.column=Number(i)),u&&u.stack&&(c.stack=String(u.stack)),{level:"ERROR",channel:"js_errors",message:n,context:c}}function o(n){for(var t=[],e=0;e<n.length;e++)t[e]="logs[]="+encodeURIComponent(JSON.stringify(n[e]));return t.join("&")}function i(n){var t=new XMLHttpRequest;t.open("POST","/log"),t.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),t.send(o(n))}n(window,r,i)}();</script>
<script crossorigin="" type="text/javascript" src="./style/js/es6-shim.js"></script>
<script crossorigin="" type="text/javascript" src="./style/js/require.js"></script>
<script crossorigin="" type="text/javascript" src="./style/js/jquery.min.js"></script>
<script crossorigin="" type="text/javascript" src="./style/js/config.js"></script>
<script src="./style/js/satelliteLib-2b43738638f531ea196940466fee2fa1d507608c.js"></script><script src="./style/js/mbox-contents-7748e8dabc4ffc8c33bccad2e1f3cf106dd23ef1.js"></script><script src="./style/js/satellite-54400420b1f6d7daf10001cd.js"></script><style>.mboxDefault { visibility:hidden; }</style><script src="./style/js/target.js"></script><script src="./style/img/ajax"></script>-->
    <style type="text/css"></style><style type="text/css">/** IMPORTANT: If you are in a CSS file (and not in a SCSS file), close this and open the corresponding SCSS file to edit */
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
.activate-account-popup .adobe-id,
.activate-account-popup .have-account-login {
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

@media (max-width: 603px) {
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


</style><style type="text/css">/*! fancyBox v2.0.4 fancyapps.com | fancyapps.com/fancybox/#license */
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
  font: 14px/20px "Helvetica Neue",Helvetica,Arial,sans-serif;
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
  background: url("//a3.behance.net/img/jquery/plugins/fancybox/loading.gif?cb=1020668724");
  opacity: 0.8;
  cursor: pointer;
  z-index: 1010;
}

.fancybox-close, .fancybox-prev span, .fancybox-next span {
  background-image: url("//a3.behance.net/img/jquery/plugins/fancybox/sprite.png?cb=1020668724");
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
  background: transparent url("//a3.behance.net/img/jquery/blank.gif?cb=1020668724");
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
  font: normal 13px/20px "Helvetica Neue",Helvetica,Arial,sans-serif;
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


</style><style type="text/css">.popup.mini-profile:before {
  width: 20px;
  height: 20px;
  background: #fff;
  box-shadow: -2px -2px 4px -2px rgba(0, 0, 0, 0.4);
  content: '';
  position: absolute;
  z-index: -1;
}
.popup.mini-profile.top-right:before, .popup.mini-profile.top-left:before {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  top: -8px;
}
.popup.mini-profile.bottom-right:before, .popup.mini-profile.bottom-left:before {
  -webkit-transform: rotate(-134deg);
  -moz-transform: rotate(-134deg);
  -ms-transform: rotate(-134deg);
  -o-transform: rotate(-134deg);
  transform: rotate(-134deg);
  bottom: -8px;
}
.popup.mini-profile.top-right:before, .popup.mini-profile.bottom-right:before {
  right: 45px;
}
.popup.mini-profile.top-left:before, .popup.mini-profile.bottom-left:before {
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
  background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(0, 156, 252, 0.75)), to(rgba(0, 116, 238, 0.75)));
  background: -webkit-linear-gradient(0% 0%, 0% 100%, from(rgba(0, 156, 252, 0.75)), to(rgba(0, 116, 238, 0.75)));
  background: -moz-linear-gradient(center top, rgba(0, 156, 252, 0.75), rgba(0, 116, 238, 0.75));
  background: linear-gradient(rgba(0, 156, 252, 0.75), rgba(0, 116, 238, 0.75));
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
.ie .mini-profile-wrap .gallery-projects-wrap:hover .gallery-cover-overlay {
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
.mini-profile-wrap .gallery-projects-wrap .project-cover-wrap .project-cover {
  border-radius: 0;
  box-shadow: none;
  margin: 0;
  vertical-align: top;
  visibility: visible;
  width: 100%;
}
.mini-profile-wrap .gallery-projects-wrap .project-cover-wrap.empty .project-cover {
  display: none;
}
.mini-profile-wrap .gallery-projects-wrap-4 {
  width: 479px;
}
.mini-profile-wrap .gallery-projects-wrap-4 .project-cover-wrap {
  width: 25%;
}
.mini-profile-wrap .gallery-projects-wrap-4 .project-cover-wrap:nth-child(n+5) {
  display: none;
}
.mini-profile-wrap .gallery-projects-wrap-2 {
  width: 242px;
}
.mini-profile-wrap .gallery-projects-wrap-2 .project-cover-wrap {
  width: 50%;
}
.mini-profile-wrap .gallery-projects-wrap-2 .project-cover-wrap:nth-child(n+3) {
  display: none;
}
.mini-profile-wrap .user-image-wrap,
.mini-profile-wrap .user-image {
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


</style><style type="text/css">html.lightbox-enabled,
html.lightbox-enabled body {
  overflow: hidden; }

html.lightbox-zoomed .lightbox-content {
  cursor: zoom-out;
  overflow: auto; }
  html.lightbox-zoomed .lightbox-content.zoomable-x {
    justify-content: flex-start; }
  html.lightbox-zoomed .lightbox-content.zoomable-y {
    align-items: baseline; }

html.lightbox-zoomed #lightbox-wrap img {
  max-width: inherit;
  max-height: inherit; }

html.lightbox-zoomed #lightbox-img-wrap .lightbox-extra {
  display: none; }

.lightbox-link,
.lightbox-content.zoomable {
  cursor: zoom-in; }

#lightbox-wrap .lightbox-contents {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none; }

.lightbox-content {
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  opacity: 1;
  position: absolute;
  top: 0;
  transition: opacity .4s;
  width: 100vw; }

#lightbox-blocking {
  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1002; }
  #lightbox-blocking .lightbox-spinner {
    display: none; }

#lightbox-wrap {
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1001; }
  #lightbox-wrap .offscreen, #lightbox-wrap.offscreen {
    height: 0;
    overflow: hidden;
    visibility: hidden;
    -webkit-transform: translateX(-99999px);
    -ms-transform: translateX(-99999px);
    transform: translateX(-99999px);
    width: 0; }
  #lightbox-wrap.loading .lightbox-spinner {
    display: block; }
  #lightbox-wrap .hidden {
    opacity: 0; }
  #lightbox-wrap .lightbox-contents {
    display: inline-block;
    max-height: 100%;
    max-width: 100%; }
  #lightbox-wrap.single .next, #lightbox-wrap.single .next:hover,
  #lightbox-wrap.single .prev,
  #lightbox-wrap.single .prev:hover {
    display: none; }
  #lightbox-wrap.extras-hidden #lightbox-img-wrap .lightbox-extra {
    opacity: 0;
    transition: opacity 1s; }
  #lightbox-wrap img {
    max-height: 100vh;
    max-width: 100vw; }

#lightbox-inner-wrap {
  margin: auto;
  position: relative;
  z-index: 1003; }
  #lightbox-inner-wrap .control {
    cursor: pointer;
    position: absolute;
    z-index: 1003; }
  #lightbox-inner-wrap svg .lightbox-icon-bg {
    fill: #696969;
    opacity: .2; }
  #lightbox-inner-wrap svg:hover .lightbox-icon-bg {
    opacity: .4; }
  #lightbox-inner-wrap .next,
  #lightbox-inner-wrap .prev {
    height: 100vh;
    opacity: 0;
    top: 0;
    width: 30vw; }
    #lightbox-inner-wrap .next:hover,
    #lightbox-inner-wrap .prev:hover {
      opacity: 1; }
    #lightbox-inner-wrap .next.hidden,
    #lightbox-inner-wrap .prev.hidden {
      cursor: default; }
      #lightbox-inner-wrap .next.hidden svg,
      #lightbox-inner-wrap .prev.hidden svg {
        display: none; }
    #lightbox-inner-wrap .next svg,
    #lightbox-inner-wrap .prev svg {
      top: -webkit-calc(50% - 30px) ;
      top: calc(50% - 30px) ;
      position: absolute; }
      #lightbox-inner-wrap .next svg .lightbox-icon-arrow,
      #lightbox-inner-wrap .prev svg .lightbox-icon-arrow {
        fill: #FFFFFF; }
  #lightbox-inner-wrap .next {
    right: 0; }
    #lightbox-inner-wrap .next svg {
      right: 20px; }
  #lightbox-inner-wrap .prev {
    left: 0; }
    #lightbox-inner-wrap .prev svg {
      left: 20px; }
  #lightbox-inner-wrap .close {
    position: fixed;
    height: 40px;
    right: 20px;
    top: 20px;
    width: 40px; }
    #lightbox-inner-wrap .close:hover {
      cursor: pointer; }
    #lightbox-inner-wrap .close .lightbox-icon-bg {
      fill: #fff; }

@media (max-width: 1024px) {
  #lightbox-inner-wrap .close {
    right: 0;
    top: 0; }
    #lightbox-inner-wrap .close circle {
      display: none; }
  #lightbox-inner-wrap .next:hover,
  #lightbox-inner-wrap .prev:hover {
    opacity: 0; } }

@media (min-width: 1024px) {
  .lightbox-link {
    position: relative; }
    .lightbox-link:hover::after {
      background: rgba(105, 105, 105, 0.2) url(data:image/svg+xml;base64,PHN2ZyBzdHlsZT0iZmlsbDogd2hpdGUiIHZpZXdCb3g9IjAgMCAyMSAyMSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICA8cGF0aCBkPSJNLTEuMjUyMjIyNTEsMTUuNjAzNDE5NyBDLTEuMzUyNTE5MjcsMTUuNjkzNjg2OCAtMS40MjUyMzMzMywxNS43OTg5OTY4IC0xLjQ3MDM2Njg3LDE1LjkxOTM1MjkgQy0xLjUxNTUwMDQxLDE2LjAzOTcwOSAtMS41MzgwNjY4NCwxNi4xNjAwNjMzIC0xLjUzODA2Njg0LDE2LjI4MDQxOTQgQy0xLjUzODA2Njg0LDE2LjQwMDc3NTUgLTEuNTE1NTAwNDEsMTYuNTIxMTI5OCAtMS40NzAzNjY4NywxNi42NDE0ODU5IEMtMS40MjUyMzMzMywxNi43NjE4NDIgLTEuMzUyNTE5MjcsMTYuODY3MTUyIC0xLjI1MjIyMjUxLDE2Ljk1NzQxOTEgTDMuNTYxOTk3NzEsMjEuNzcxNjM5MyBDMy43NTI1NjE1NSwyMS45NjIyMDMyIDMuOTgwNzMzMjQsMjIuMDU3NDgzNyA0LjI0NjUxOTY1LDIyLjA1NzQ4MzcgQzQuNTEyMzA2MDUsMjIuMDU3NDgzNyA0LjczNTQ2Mjk5LDIxLjk2MjIwMzIgNC45MTU5OTcxNSwyMS43NzE2MzkzIEM1LjEwNjU2MDk4LDIxLjU4MTA3NTUgNS4yMDE4NDE0NywyMS4zNTU0MTEyIDUuMjAxODQxNDcsMjEuMDk0NjM5NiBDNS4yMDE4NDE0NywyMC44MzM4NjggNS4xMDY1NjA5OCwyMC42MDgyMDM3IDQuOTE1OTk3MTUsMjAuNDE3NjM5OSBMMS43NTY2NjUxMywxNy4yNDMyNjM0IEwxMC4wMTYwNjE3LDE3LjI0MzI2MzQgQzEwLjI4Njg2MjksMTcuMjQzMjYzNCAxMC41MTUwMzQ2LDE3LjE1MDQ5MDMgMTAuNzAwNTgzNiwxNi45NjQ5NDEzIEMxMC44ODYxMzI2LDE2Ljc3OTM5MjMgMTAuOTc4OTA1NywxNi41NTEyMjA2IDEwLjk3ODkwNTcsMTYuMjgwNDE5NCBDMTAuOTc4OTA1NywxNi4wMDk2MTgyIDEwLjg4NjEzMjYsMTUuNzgxNDQ2NSAxMC43MDA1ODM2LDE1LjU5NTg5NzUgQzEwLjUxNTAzNDYsMTUuNDEwMzQ4NSAxMC4yODY4NjI5LDE1LjMxNzU3NTMgMTAuMDE2MDYxNywxNS4zMTc1NzUzIEwxLjc1NjY2NTEzLDE1LjMxNzU3NTMgTDQuOTE1OTk3MTUsMTIuMTQzMTk4OSBDNS4xMDY1NjA5OCwxMS45NTI2MzUxIDUuMjAxODQxNDcsMTEuNzI2OTcwNyA1LjIwMTg0MTQ3LDExLjQ2NjE5OTIgQzUuMjAxODQxNDcsMTEuMjA1NDI3NiA1LjEwNjU2MDk4LDEwLjk3OTc2MzMgNC45MTU5OTcxNSwxMC43ODkxOTk1IEM0LjczNTQ2Mjk5LDEwLjU5ODYzNTYgNC41MTIzMDYwNSwxMC41MDMzNTUxIDQuMjQ2NTE5NjUsMTAuNTAzMzU1MSBDMy45ODA3MzMyNCwxMC41MDMzNTUxIDMuNzUyNTYxNTUsMTAuNTk4NjM1NiAzLjU2MTk5NzcxLDEwLjc4OTE5OTUgTC0xLjI1MjIyMjUxLDE1LjYwMzQxOTcgWiIgaWQ9IngiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQuNzIwNDE5LCAxNi4yODA0MTkpIHJvdGF0ZSgtNDUuMDAwMDAwKSB0cmFuc2xhdGUoLTQuNzIwNDE5LCAtMTYuMjgwNDE5KSAiPjwvcGF0aD4KICA8cGF0aCBkPSJNMTAuMzA3Nzc3NCw0LjA0MzQxOTczIEMxMC4yMDc0ODA3LDQuMTMzNjg2ODEgMTAuMTM0NzY2Niw0LjIzODk5NjgzIDEwLjA4OTYzMzEsNC4zNTkzNTI5MyBDMTAuMDQ0NDk5NSw0LjQ3OTcwOTA0IDEwLjAyMTkzMzEsNC42MDAwNjMzNCAxMC4wMjE5MzMxLDQuNzIwNDE5NDUgQzEwLjAyMTkzMzEsNC44NDA3NzU1NiAxMC4wNDQ0OTk1LDQuOTYxMTI5ODYgMTAuMDg5NjMzMSw1LjA4MTQ4NTk3IEMxMC4xMzQ3NjY2LDUuMjAxODQyMDcgMTAuMjA3NDgwNyw1LjMwNzE1MjA5IDEwLjMwNzc3NzQsNS4zOTc0MTkxNyBMMTUuMTIxOTk3NywxMC4yMTE2Mzk0IEMxNS4zMTI1NjE1LDEwLjQwMjIwMzIgMTUuNTQwNzMzMiwxMC40OTc0ODM3IDE1LjgwNjUxOTYsMTAuNDk3NDgzNyBDMTYuMDcyMzA2LDEwLjQ5NzQ4MzcgMTYuMjk1NDYyOSwxMC40MDIyMDMyIDE2LjQ3NTk5NzEsMTAuMjExNjM5NCBDMTYuNjY2NTYwOSwxMC4wMjEwNzU2IDE2Ljc2MTg0MTQsOS43OTU0MTEyNCAxNi43NjE4NDE0LDkuNTM0NjM5NjcgQzE2Ljc2MTg0MTQsOS4yNzM4NjgxMSAxNi42NjY1NjA5LDkuMDQ4MjAzNzkgMTYuNDc1OTk3MSw4Ljg1NzYzOTk1IEwxMy4zMTY2NjUxLDUuNjgzMjYzNDkgTDIxLjU3NjA2MTYsNS42ODMyNjM0OSBDMjEuODQ2ODYyOSw1LjY4MzI2MzQ5IDIyLjA3NTAzNDYsNS41OTA0OTAzOSAyMi4yNjA1ODM2LDUuNDA0OTQxMzkgQzIyLjQ0NjEzMjYsNS4yMTkzOTIzOSAyMi41Mzg5MDU3LDQuOTkxMjIwNjkgMjIuNTM4OTA1Nyw0LjcyMDQxOTQ1IEMyMi41Mzg5MDU3LDQuNDQ5NjE4MjEgMjIuNDQ2MTMyNiw0LjIyMTQ0NjUxIDIyLjI2MDU4MzYsNC4wMzU4OTc1MSBDMjIuMDc1MDM0NiwzLjg1MDM0ODUxIDIxLjg0Njg2MjksMy43NTc1NzU0MSAyMS41NzYwNjE2LDMuNzU3NTc1NDEgTDEzLjMxNjY2NTEsMy43NTc1NzU0MSBMMTYuNDc1OTk3MSwwLjU4MzE5ODk0NyBDMTYuNjY2NTYwOSwwLjM5MjYzNTExMSAxNi43NjE4NDE0LDAuMTY2OTcwNzk0IDE2Ljc2MTg0MTQsLTAuMDkzODAwNzcxNSBDMTYuNzYxODQxNCwtMC4zNTQ1NzIzMzcgMTYuNjY2NTYwOSwtMC41ODAyMzY2NTQgMTYuNDc1OTk3MSwtMC43NzA4MDA0OSBDMTYuMjk1NDYyOSwtMC45NjEzNjQzMjcgMTYuMDcyMzA2LC0xLjA1NjY0NDgyIDE1LjgwNjUxOTYsLTEuMDU2NjQ0ODIgQzE1LjU0MDczMzIsLTEuMDU2NjQ0ODIgMTUuMzEyNTYxNSwtMC45NjEzNjQzMjcgMTUuMTIxOTk3NywtMC43NzA4MDA0OSBMMTAuMzA3Nzc3NCw0LjA0MzQxOTczIFoiIGlkPSJ4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4yODA0MTksIDQuNzIwNDE5KSByb3RhdGUoLTIyNS4wMDAwMDApIHRyYW5zbGF0ZSgtMTYuMjgwNDE5LCAtNC43MjA0MTkpICI+PC9wYXRoPgo8L3N2Zz4K) no-repeat center;
      background-size: 16px;
      border-radius: 50%;
      content: '';
      display: block;
      height: 36px;
      position: absolute;
      right: 10px;
      top: 10px;
      width: 36px;
      z-index: 1000; } }

@media all and (-ms-high-contrast: none) {
  .lightbox-link,
  .lightbox-content.zoomable {
    cursor: pointer; } }
</style><style type="text/css">@-webkit-keyframes rotate-forever {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg); }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg); } }

@-moz-keyframes rotate-forever {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg); }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg); } }

@keyframes rotate-forever {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg); }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg); } }

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
  opacity: 0.7; }
</style><!-- <script src="./style/js/s-code-contents-40e4725b2f3af45dff60d7dec96cf87a5c20e2ff.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="#" src="./style/js/imslib.min.js"></script><link rel="prefetch" href="#"><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="#" src="./style/js/globalnav.js"></script> -->
<style type="text/css"></style><link type="text/css" rel="stylesheet" href="./style/css/globalnav.css"><style type="text/css"></style><style type="text/css"></style><!-- <script type="text/javascript" src="./style/js/globalnav(1).js"></script> -->
<link type="text/css" rel="stylesheet" href="./style/css/popup-new-chrome.css"><style type="text/css">#project-modules .title { font-family: arial,helvetica,sans-serif;font-weight: bold;font-style: normal;text-decoration: none;line-height: 1.1em;font-size: 36px;color: #191919;text-align: left; }
#project-modules .sub-title { font-family: arial,helvetica,sans-serif;font-weight: normal;font-style: normal;text-decoration: none;line-height: 1.4em;font-size: 20px;color: #a4a4a4;text-align: left; }
#project-modules .editor-text .main-text, #primary-project-content.project-styles .main-text { font-family: arial,helvetica,sans-serif;font-weight: normal;font-style: normal;text-decoration: none;line-height: 1.4em;font-size: 20px;color: #696969;text-align: left; }
#project-modules .caption, #project-modules .caption-text-wrap { font-family: arial,helvetica,sans-serif;font-weight: normal;font-style: italic;text-decoration: none;line-height: 1.4em;font-size: 14px;color: #a4a4a4;text-align: left; }
#project-modules .caption-text-wrap a { font-size: 14px !important; }
#project-modules .main-text a { font-family: arial,helvetica,sans-serif;font-weight: normal;font-style: normal;text-decoration: none;line-height: 1.4em;font-size: 12px;color: #1769FF;text-align: left; }
#primary-project-content .module { padding-bottom: 0px; }
#primary-project-content { padding-top: 50px; background-color: #FFFFFF;  }
.spacer { height: 60px; }.divider { display: none; }.module.last .divider { display: none; }</style></head>

  <body class="logged-out zh_CN networki no-right-column curated-galleries has-cta-header responsive be-network no-has-touch has-placeholders globalnav__external__no-touch project-popup-open" lang="zh" style="overflow: hidden;"><div id="globalnav__header" class="globalnav__js__header globalnav__feature-flag--dc" data-locale="zh_CN" data-language="zh_CN" data-country="CN">  <nav aria-hidden="true" data-has-list-columns="true" class="globalnav__overlay globalnav__overlay--variable-height globalnav__profile" style="z-index: 2147483647;"> <div class="globalnav__overlay__root globalnav__js__overlay__empty-space"> <div class="globalnav__overlay__container globalnav__js__overlay__empty-space globalnav__js__profile__parent"> </div> </div> </nav></div><div class="mboxDefault" id="mbox-adobe-global-mbox-1477185803997-974319" style="visibility: visible; display: block;"></div>

    <nav id="nav-wrap" class="js-nav-primary dark-background  scrolled">
  <h1 id="behance-logo"><a id="logo-link" href="#"><svg class="behance-svg" xmlns="#" viewBox="0 0 152.5 28.2" width="75" height="58"><path d="M13.1 0c1.3 0 2.5 0.1 3.6 0.4c1.1 0.2 2 0.6 2.8 1.1c0.8 0.5 1.4 1.2 1.8 2.1c0.4 0.9 0.6 2 0.6 3.2 c0 1.4-0.3 2.6-1 3.5c-0.6 0.9-1.6 1.7-2.8 2.3c1.7 0.5 3 1.4 3.8 2.6c0.8 1.2 1.3 2.7 1.3 4.4c0 1.4-0.3 2.6-0.8 3.6 c-0.5 1-1.3 1.9-2.2 2.5c-0.9 0.6-2 1.1-3.2 1.4c-1.2 0.3-2.4 0.5-3.6 0.5H0V0H13.1z M12.3 11.2c1.1 0 2-0.3 2.7-0.8 c0.7-0.5 1-1.4 1-2.5c0-0.6-0.1-1.2-0.3-1.6c-0.2-0.4-0.5-0.7-0.9-1c-0.4-0.2-0.8-0.4-1.3-0.5c-0.5-0.1-1-0.1-1.6-0.1H6.1v6.5 H12.3z M12.6 23c0.6 0 1.2-0.1 1.7-0.2c0.5-0.1 1-0.3 1.4-0.6c0.4-0.3 0.7-0.6 1-1.1c0.2-0.5 0.4-1.1 0.4-1.8 c0-1.4-0.4-2.4-1.2-3.1c-0.8-0.6-1.9-0.9-3.2-0.9H6.1V23H12.6z"></path><path d="M31.9 22.9c0.8 0.8 2 1.2 3.6 1.2c1.1 0 2.1-0.3 2.9-0.8c0.8-0.6 1.3-1.2 1.5-1.8h4.9c-0.8 2.4-2 4.1-3.6 5.2 c-1.6 1-3.5 1.6-5.8 1.6c-1.6 0-3-0.3-4.3-0.8c-1.3-0.5-2.3-1.2-3.2-2.2c-0.9-0.9-1.6-2-2-3.3c-0.5-1.3-0.7-2.7-0.7-4.3 c0-1.5 0.2-2.9 0.7-4.2c0.5-1.3 1.2-2.4 2.1-3.4c0.9-0.9 2-1.7 3.2-2.2c1.3-0.5 2.6-0.8 4.2-0.8c1.7 0 3.2 0.3 4.5 1 c1.3 0.7 2.3 1.5 3.1 2.7c0.8 1.1 1.4 2.4 1.8 3.8C45 16 45.1 17.4 45 19H30.5C30.5 20.6 31.1 22.1 31.9 22.9z M38.2 12.4 c-0.7-0.7-1.8-1.1-3.1-1.1c-0.9 0-1.6 0.2-2.2 0.5c-0.6 0.3-1 0.7-1.4 1.1c-0.4 0.4-0.6 0.9-0.7 1.4c-0.1 0.5-0.2 0.9-0.2 1.3h9 C39.4 14.1 38.9 13.1 38.2 12.4z"></path><path d="M52.8 0v10.4h0.1c0.7-1.2 1.6-2 2.7-2.5c1.1-0.5 2.1-0.8 3.2-0.8c1.5 0 2.7 0.2 3.6 0.6c0.9 0.4 1.7 1 2.2 1.7 c0.5 0.7 0.9 1.6 1.1 2.6c0.2 1 0.3 2.1 0.3 3.4v12.3h-5.5V16.4c0-1.7-0.3-2.9-0.8-3.7c-0.5-0.8-1.4-1.2-2.7-1.2 c-1.5 0-2.6 0.5-3.2 1.3c-0.7 0.9-1 2.4-1 4.4v10.5h-5.5V0H52.8z"></path><path d="M70 10.6c0.6-0.9 1.3-1.5 2.2-2.1c0.9-0.5 1.9-0.9 3-1.1c1.1-0.2 2.2-0.3 3.3-0.3c1 0 2 0.1 3.1 0.2c1 0.1 2 0.4 2.8 0.8 c0.9 0.4 1.5 1 2.1 1.7c0.5 0.7 0.8 1.7 0.8 2.9v10.5c0 0.9 0.1 1.8 0.2 2.6c0.1 0.8 0.4 1.5 0.7 1.9l-5.6 0 c-0.2-0.2-0.3-0.6-0.4-0.9c-0.1-0.3-0.1-0.7-0.1-1c-0.9 0.9-1.9 1.5-3.1 1.9c-1.2 0.4-2.4 0.5-3.6 0.5c-1 0-1.8-0.1-2.7-0.4 c-0.8-0.2-1.5-0.6-2.2-1.1c-0.6-0.5-1.1-1.1-1.5-1.9c-0.3-0.8-0.5-1.6-0.5-2.7c0-1.1 0.2-2.1 0.6-2.8c0.4-0.7 0.9-1.3 1.5-1.8 c0.6-0.4 1.4-0.8 2.2-1c0.8-0.2 1.6-0.4 2.5-0.5c0.8-0.1 1.6-0.2 2.4-0.3c0.8-0.1 1.5-0.2 2.1-0.3c0.6-0.2 1.1-0.4 1.5-0.7 c0.4-0.3 0.5-0.7 0.5-1.3c0-0.6-0.1-1.1-0.3-1.4c-0.2-0.3-0.5-0.6-0.8-0.8c-0.3-0.2-0.7-0.3-1.1-0.4c-0.4-0.1-0.9-0.1-1.4-0.1 c-1.1 0-1.9 0.2-2.5 0.7c-0.6 0.5-1 1.3-1.1 2.3h-5.5C69.1 12.5 69.5 11.4 70 10.6z M80.9 18.4c-0.3 0.1-0.7 0.2-1.1 0.3 c-0.4 0.1-0.8 0.1-1.3 0.2c-0.4 0.1-0.9 0.1-1.3 0.2c-0.4 0.1-0.8 0.2-1.2 0.3c-0.4 0.1-0.8 0.3-1 0.5c-0.3 0.2-0.5 0.5-0.7 0.8 C74 21.1 74 21.5 74 22c0 0.5 0.1 0.9 0.3 1.2c0.2 0.3 0.4 0.6 0.7 0.8c0.3 0.2 0.7 0.3 1.1 0.4c0.4 0.1 0.8 0.1 1.3 0.1 c1.1 0 1.9-0.2 2.5-0.5c0.6-0.4 1-0.8 1.3-1.3c0.3-0.5 0.5-1 0.5-1.5c0.1-0.5 0.1-0.9 0.1-1.2v-2.1 C81.5 18.1 81.2 18.3 80.9 18.4z"></path><path d="M95.6 7.6v2.8h0.1c0.7-1.2 1.6-2 2.7-2.5c1.1-0.5 2.3-0.8 3.4-0.8c1.5 0 2.7 0.2 3.6 0.6c1 0.4 1.7 1 2.2 1.7 c0.5 0.7 0.9 1.6 1.2 2.6c0.2 1 0.3 2.1 0.3 3.4v12.3h-5.5V16.4c0-1.7-0.3-2.9-0.8-3.7c-0.5-0.8-1.4-1.3-2.8-1.3 c-1.5 0-2.6 0.6-3.3 1.5c-0.7 0.9-1 2.4-1 4.4v10.5h-5.5V7.6H95.6z"></path><path d="M121.4 11.2c-0.9 0-1.6 0.2-2.2 0.6c-0.6 0.4-1.1 0.9-1.5 1.6c-0.4 0.6-0.6 1.3-0.8 2.1c-0.2 0.8-0.2 1.5-0.2 2.3 c0 0.7 0.1 1.5 0.2 2.2c0.2 0.8 0.4 1.4 0.8 2c0.4 0.6 0.8 1.1 1.4 1.5c0.6 0.4 1.3 0.6 2.2 0.6c1.3 0 2.3-0.4 3.1-1.1 c0.7-0.7 1.2-1.7 1.3-3h5.3c-0.4 2.7-1.4 4.7-3.1 6.1c-1.7 1.4-3.9 2.1-6.6 2.1c-1.5 0-2.9-0.3-4.1-0.8c-1.3-0.5-2.3-1.2-3.2-2.1 c-0.9-0.9-1.6-2-2.1-3.2c-0.5-1.3-0.7-2.6-0.7-4.1c0-1.6 0.2-3 0.7-4.3c0.5-1.3 1.1-2.5 2-3.5c0.9-1 2-1.7 3.2-2.3 c1.3-0.5 2.7-0.8 4.3-0.8c1.2 0 2.3 0.2 3.4 0.5c1.1 0.3 2.1 0.8 2.9 1.4c0.9 0.6 1.6 1.4 2.1 2.4c0.5 0.9 0.8 2.1 0.9 3.4h-5.4 C125.1 12.4 123.8 11.2 121.4 11.2z"></path><rect x="29.4" y="1.9" width="11.2" height="2.7"></rect><path d="M139.3 22.9c0.8 0.8 2.1 1.2 3.6 1.2c1.1 0 2.1-0.3 2.9-0.8c0.8-0.6 1.3-1.2 1.5-1.8h4.8c-0.8 2.4-2 4.1-3.6 5.2 c-1.6 1-3.5 1.6-5.8 1.6c-1.6 0-3-0.3-4.3-0.8c-1.3-0.5-2.3-1.2-3.2-2.2c-0.9-0.9-1.6-2-2-3.3c-0.5-1.3-0.7-2.7-0.7-4.3 c0-1.5 0.2-2.9 0.7-4.2c0.5-1.3 1.2-2.4 2.1-3.4c0.9-0.9 2-1.7 3.2-2.2c1.3-0.5 2.7-0.8 4.2-0.8c1.7 0 3.2 0.3 4.4 1 c1.3 0.7 2.3 1.5 3.1 2.7c0.8 1.1 1.4 2.4 1.8 3.8c0.4 1.4 0.5 2.9 0.4 4.5h-14.5C137.9 20.6 138.5 22.1 139.3 22.9z M145.7 12.4 c-0.7-0.7-1.8-1.1-3.1-1.1c-0.9 0-1.6 0.2-2.2 0.5c-0.6 0.3-1.1 0.7-1.4 1.1c-0.3 0.4-0.6 0.9-0.7 1.4c-0.1 0.5-0.2 0.9-0.2 1.3 h9C146.8 14.1 146.3 13.1 145.7 12.4z"></path></svg></a></h1>


  <div id="nav-primary-wrap">    <ul id="nav-primary" class="nav-list">      <li class="nav-item">        <a class="nav-item-link active" href="#">          发现
        </a>          <ul class="nav-submenu">            <li class="nav-item">              <a class="nav-item-link active beicons-pre beicons-pre-discover" href="#">                搜索和浏览
              </a>            </li>            <li class="nav-item">              <a class="nav-item-link active beicons-pre beicons-pre-badge" href="#">                策展库
              </a>            </li>            <li class="nav-item">              <a class="nav-item-link active beicons-pre beicons-pre-columns" href="#">                学校和组织
              </a>            </li>          </ul>      </li>      <li class="nav-item">        <a class="nav-item-link" href="#">          职位
        </a>          <ul class="nav-submenu">            <li class="nav-item">              <a class="nav-item-link beicons-pre beicons-pre-suitcase" href="#">                创意职位
              </a>            </li>            <li class="nav-item">              <a class="nav-item-link beicons-pre beicons-pre-add" href="#">                发布职位
              </a>            </li>          </ul>      </li>
      <li class="nav-joblist">招聘人才？ <a class="job-button js-job-button form-button form-button-small form-button-dark" href="#">发布职位</a></li>    </ul>


  </div><!-- /#nav-primary-wrap -->
  <div id="nav-upsell-wrap">    <ul id="nav-upsell" class="nav-list">      展示和发现创意作品 <a id="sign-up-button" class="js-adobeid-signup form-button form-button-small form-button-default" data-signup-from="Discover_BlueButton_SignUpFree_SmallHeader">免费注册</a>      <li class="nav-joblist">招聘人才？ <a class="job-button js-job-button form-button form-button-small form-button-dark" href="#" data-signup-from="NavHeader_PostAJob">发布职位</a></li>    </ul>  </div><!-- /#nav-upsell-wrap -->

  <a id="nav-adobe" href="#" target="_blank">    <svg class="adobe-svg" xmlns="#" viewBox="0 165 612 627" width="26" height="58"><polygon points="368.4,169.1 511.2,519.5 511.2,169.1" class="style0"></polygon><polygon points="123.6,169.1 123.6,519.5 267.6,169.1" class="style0"></polygon><polygon points="254.4,449.9 321.6,449.9 349.2,519.5 409.2,519.5 318,298.7" class="style0"></polygon>&gt;<path d="M42 735.5l-16.8 48c0 1.2-1.2 1.2-2.4 1.2H6c-1.2 0-1.2-1.2-1.2-2.4c13.2-36 34.8-97.2 50.4-136.8 c1.2-2.4 1.2-3.6 1.2-9.6c0-1.2 0-1.2 1.2-1.2h22.8c1.2 0 1.2 0 1.2 1.2c18 48 36 98.4 54 147.6c0 1.2 0 1.2-1.2 1.2h-18 c-1.2 0-1.2 0-2.4-1.2l-16.8-48H42z M92.4 718.7c-4.8-15.6-19.2-52.8-24-68.4l0 0c-3.6 14.4-14.4 43.2-22.8 68.4H92.4z" class="style0 logo-letter"></path><path d="M147.6 729.5c0-33.6 25.2-57.6 61.2-57.6c6 0 12 0 16.8 2.4v-51.6c0-1.2 0-1.2 1.2-1.2h16.8 c1.2 0 1.2 0 1.2 1.2v139.2c0 3.6 0 8.4 0 10.8c0 1.2 0 1.2-1.2 2.4c-13.2 7.2-27.6 10.8-42 10.8 C170.4 785.9 147.6 766.7 147.6 729.5z M225.6 689.9c-4.8-2.4-10.8-2.4-18-2.4c-24 0-39.6 16.8-39.6 40.8c0 30 18 40.8 37.2 40.8 c8.4 0 15.6-1.2 20.4-2.4L225.6 689.9L225.6 689.9z" class="style0 logo-letter"></path><path d="M374.4 728.3c0 34.8-21.6 57.6-52.8 57.6c-38.4 0-52.8-30-52.8-57.6c0-33.6 21.6-56.4 54-56.4 S374.4 695.9 374.4 728.3z M288 728.3c0 24 12 43.2 33.6 43.2c15.6 0 32.4-10.8 32.4-42c0-22.8-9.6-43.2-33.6-43.2 C301.2 686.3 288 703.1 288 728.3z" class="style0 logo-letter"></path><path d="M415.2 620.3c1.2 0 1.2 0 1.2 1.2v56.4c8.4-3.6 18-6 28.8-6c31.2 0 49.2 21.6 49.2 51.6 c0 39.6-30 62.4-63.6 62.4c-12 0-21.6-1.2-32.4-4.8c-1.2 0-1.2-1.2-1.2-2.4v-156c0-1.2 0-1.2 1.2-1.2h16.8V620.3z M441.6 687.5 c-8.4 0-16.8 1.2-24 6v74.4c4.8 1.2 9.6 2.4 16.8 2.4c20.4 0 40.8-14.4 40.8-44.4C475.2 703.1 462 687.5 441.6 687.5z" class="style0 logo-letter"></path><path d="M532.8 730.7c0 22.8 12 38.4 37.2 38.4c8.4 0 19.2-1.2 28.8-6c1.2 0 1.2 0 1.2 1.2v13.2 c0 1.2 0 2.4-1.2 2.4c-8.4 4.8-18 6-32.4 7.2c-39.6 0-54-28.8-54-56.4c0-32.4 19.2-57.6 50.4-57.6s44.4 25.2 44.4 44.4 c0 8.4-1.2 12-2.4 13.2c-3.6 1.2-12 1.2-24 1.2h-48V730.7z M576 717.5c10.8 0 13.2-1.2 13.2-1.2s0-2.4 0-3.6 c0-7.2-4.8-26.4-26.4-26.4c-18 0-27.6 14.4-30 31.2H576z" class="style0 logo-letter"></path></svg>  </a>
    <div id="nav-login">      <a id="login-link" class="js-adobeid-signin beicons-pre beicons-pre-privacy">登录</a>    </div>
  <a class="js-browse-link browse-link hide" href="#">暂时仅供浏览 →</a>
</nav>
    <div id="top-panel" class="slide-panel js-top-panel">
      <a id="top-panel-blocking" class="js-top-panel-blocking"></a>
      <div class="toolbar">
        <a id="hamburger-button" class="js-hamburger-button burger"><span id="patty" class="burger"></span></a>

        
          <div class="toolbar-signup">
            <a class="js-adobeid-signup form-button form-button-default form-button-small" data-signup-from="Mobile_ToolBar_Signup">Sign Up</a>
            <a class="js-adobeid-signin form-button form-button-dark form-button-small">Log In</a>
          </div>

        
        <h1 class="header">

          <span id="behance-logo">
            <a id="logo-link" href="#">
              <svg class="behance-svg" xmlns="#" viewBox="0 0 152.5 28.2" width="75" height="58"><path d="M13.1 0c1.3 0 2.5 0.1 3.6 0.4c1.1 0.2 2 0.6 2.8 1.1c0.8 0.5 1.4 1.2 1.8 2.1c0.4 0.9 0.6 2 0.6 3.2 c0 1.4-0.3 2.6-1 3.5c-0.6 0.9-1.6 1.7-2.8 2.3c1.7 0.5 3 1.4 3.8 2.6c0.8 1.2 1.3 2.7 1.3 4.4c0 1.4-0.3 2.6-0.8 3.6 c-0.5 1-1.3 1.9-2.2 2.5c-0.9 0.6-2 1.1-3.2 1.4c-1.2 0.3-2.4 0.5-3.6 0.5H0V0H13.1z M12.3 11.2c1.1 0 2-0.3 2.7-0.8 c0.7-0.5 1-1.4 1-2.5c0-0.6-0.1-1.2-0.3-1.6c-0.2-0.4-0.5-0.7-0.9-1c-0.4-0.2-0.8-0.4-1.3-0.5c-0.5-0.1-1-0.1-1.6-0.1H6.1v6.5 H12.3z M12.6 23c0.6 0 1.2-0.1 1.7-0.2c0.5-0.1 1-0.3 1.4-0.6c0.4-0.3 0.7-0.6 1-1.1c0.2-0.5 0.4-1.1 0.4-1.8 c0-1.4-0.4-2.4-1.2-3.1c-0.8-0.6-1.9-0.9-3.2-0.9H6.1V23H12.6z"></path><path d="M31.9 22.9c0.8 0.8 2 1.2 3.6 1.2c1.1 0 2.1-0.3 2.9-0.8c0.8-0.6 1.3-1.2 1.5-1.8h4.9c-0.8 2.4-2 4.1-3.6 5.2 c-1.6 1-3.5 1.6-5.8 1.6c-1.6 0-3-0.3-4.3-0.8c-1.3-0.5-2.3-1.2-3.2-2.2c-0.9-0.9-1.6-2-2-3.3c-0.5-1.3-0.7-2.7-0.7-4.3 c0-1.5 0.2-2.9 0.7-4.2c0.5-1.3 1.2-2.4 2.1-3.4c0.9-0.9 2-1.7 3.2-2.2c1.3-0.5 2.6-0.8 4.2-0.8c1.7 0 3.2 0.3 4.5 1 c1.3 0.7 2.3 1.5 3.1 2.7c0.8 1.1 1.4 2.4 1.8 3.8C45 16 45.1 17.4 45 19H30.5C30.5 20.6 31.1 22.1 31.9 22.9z M38.2 12.4 c-0.7-0.7-1.8-1.1-3.1-1.1c-0.9 0-1.6 0.2-2.2 0.5c-0.6 0.3-1 0.7-1.4 1.1c-0.4 0.4-0.6 0.9-0.7 1.4c-0.1 0.5-0.2 0.9-0.2 1.3h9 C39.4 14.1 38.9 13.1 38.2 12.4z"></path><path d="M52.8 0v10.4h0.1c0.7-1.2 1.6-2 2.7-2.5c1.1-0.5 2.1-0.8 3.2-0.8c1.5 0 2.7 0.2 3.6 0.6c0.9 0.4 1.7 1 2.2 1.7 c0.5 0.7 0.9 1.6 1.1 2.6c0.2 1 0.3 2.1 0.3 3.4v12.3h-5.5V16.4c0-1.7-0.3-2.9-0.8-3.7c-0.5-0.8-1.4-1.2-2.7-1.2 c-1.5 0-2.6 0.5-3.2 1.3c-0.7 0.9-1 2.4-1 4.4v10.5h-5.5V0H52.8z"></path><path d="M70 10.6c0.6-0.9 1.3-1.5 2.2-2.1c0.9-0.5 1.9-0.9 3-1.1c1.1-0.2 2.2-0.3 3.3-0.3c1 0 2 0.1 3.1 0.2c1 0.1 2 0.4 2.8 0.8 c0.9 0.4 1.5 1 2.1 1.7c0.5 0.7 0.8 1.7 0.8 2.9v10.5c0 0.9 0.1 1.8 0.2 2.6c0.1 0.8 0.4 1.5 0.7 1.9l-5.6 0 c-0.2-0.2-0.3-0.6-0.4-0.9c-0.1-0.3-0.1-0.7-0.1-1c-0.9 0.9-1.9 1.5-3.1 1.9c-1.2 0.4-2.4 0.5-3.6 0.5c-1 0-1.8-0.1-2.7-0.4 c-0.8-0.2-1.5-0.6-2.2-1.1c-0.6-0.5-1.1-1.1-1.5-1.9c-0.3-0.8-0.5-1.6-0.5-2.7c0-1.1 0.2-2.1 0.6-2.8c0.4-0.7 0.9-1.3 1.5-1.8 c0.6-0.4 1.4-0.8 2.2-1c0.8-0.2 1.6-0.4 2.5-0.5c0.8-0.1 1.6-0.2 2.4-0.3c0.8-0.1 1.5-0.2 2.1-0.3c0.6-0.2 1.1-0.4 1.5-0.7 c0.4-0.3 0.5-0.7 0.5-1.3c0-0.6-0.1-1.1-0.3-1.4c-0.2-0.3-0.5-0.6-0.8-0.8c-0.3-0.2-0.7-0.3-1.1-0.4c-0.4-0.1-0.9-0.1-1.4-0.1 c-1.1 0-1.9 0.2-2.5 0.7c-0.6 0.5-1 1.3-1.1 2.3h-5.5C69.1 12.5 69.5 11.4 70 10.6z M80.9 18.4c-0.3 0.1-0.7 0.2-1.1 0.3 c-0.4 0.1-0.8 0.1-1.3 0.2c-0.4 0.1-0.9 0.1-1.3 0.2c-0.4 0.1-0.8 0.2-1.2 0.3c-0.4 0.1-0.8 0.3-1 0.5c-0.3 0.2-0.5 0.5-0.7 0.8 C74 21.1 74 21.5 74 22c0 0.5 0.1 0.9 0.3 1.2c0.2 0.3 0.4 0.6 0.7 0.8c0.3 0.2 0.7 0.3 1.1 0.4c0.4 0.1 0.8 0.1 1.3 0.1 c1.1 0 1.9-0.2 2.5-0.5c0.6-0.4 1-0.8 1.3-1.3c0.3-0.5 0.5-1 0.5-1.5c0.1-0.5 0.1-0.9 0.1-1.2v-2.1 C81.5 18.1 81.2 18.3 80.9 18.4z"></path><path d="M95.6 7.6v2.8h0.1c0.7-1.2 1.6-2 2.7-2.5c1.1-0.5 2.3-0.8 3.4-0.8c1.5 0 2.7 0.2 3.6 0.6c1 0.4 1.7 1 2.2 1.7 c0.5 0.7 0.9 1.6 1.2 2.6c0.2 1 0.3 2.1 0.3 3.4v12.3h-5.5V16.4c0-1.7-0.3-2.9-0.8-3.7c-0.5-0.8-1.4-1.3-2.8-1.3 c-1.5 0-2.6 0.6-3.3 1.5c-0.7 0.9-1 2.4-1 4.4v10.5h-5.5V7.6H95.6z"></path><path d="M121.4 11.2c-0.9 0-1.6 0.2-2.2 0.6c-0.6 0.4-1.1 0.9-1.5 1.6c-0.4 0.6-0.6 1.3-0.8 2.1c-0.2 0.8-0.2 1.5-0.2 2.3 c0 0.7 0.1 1.5 0.2 2.2c0.2 0.8 0.4 1.4 0.8 2c0.4 0.6 0.8 1.1 1.4 1.5c0.6 0.4 1.3 0.6 2.2 0.6c1.3 0 2.3-0.4 3.1-1.1 c0.7-0.7 1.2-1.7 1.3-3h5.3c-0.4 2.7-1.4 4.7-3.1 6.1c-1.7 1.4-3.9 2.1-6.6 2.1c-1.5 0-2.9-0.3-4.1-0.8c-1.3-0.5-2.3-1.2-3.2-2.1 c-0.9-0.9-1.6-2-2.1-3.2c-0.5-1.3-0.7-2.6-0.7-4.1c0-1.6 0.2-3 0.7-4.3c0.5-1.3 1.1-2.5 2-3.5c0.9-1 2-1.7 3.2-2.3 c1.3-0.5 2.7-0.8 4.3-0.8c1.2 0 2.3 0.2 3.4 0.5c1.1 0.3 2.1 0.8 2.9 1.4c0.9 0.6 1.6 1.4 2.1 2.4c0.5 0.9 0.8 2.1 0.9 3.4h-5.4 C125.1 12.4 123.8 11.2 121.4 11.2z"></path><rect x="29.4" y="1.9" width="11.2" height="2.7"></rect><path d="M139.3 22.9c0.8 0.8 2.1 1.2 3.6 1.2c1.1 0 2.1-0.3 2.9-0.8c0.8-0.6 1.3-1.2 1.5-1.8h4.8c-0.8 2.4-2 4.1-3.6 5.2 c-1.6 1-3.5 1.6-5.8 1.6c-1.6 0-3-0.3-4.3-0.8c-1.3-0.5-2.3-1.2-3.2-2.2c-0.9-0.9-1.6-2-2-3.3c-0.5-1.3-0.7-2.7-0.7-4.3 c0-1.5 0.2-2.9 0.7-4.2c0.5-1.3 1.2-2.4 2.1-3.4c0.9-0.9 2-1.7 3.2-2.2c1.3-0.5 2.7-0.8 4.2-0.8c1.7 0 3.2 0.3 4.4 1 c1.3 0.7 2.3 1.5 3.1 2.7c0.8 1.1 1.4 2.4 1.8 3.8c0.4 1.4 0.5 2.9 0.4 4.5h-14.5C137.9 20.6 138.5 22.1 139.3 22.9z M145.7 12.4 c-0.7-0.7-1.8-1.1-3.1-1.1c-0.9 0-1.6 0.2-2.2 0.5c-0.6 0.3-1.1 0.7-1.4 1.1c-0.3 0.4-0.6 0.9-0.7 1.4c-0.1 0.5-0.2 0.9-0.2 1.3 h9C146.8 14.1 146.3 13.1 145.7 12.4z"></path></svg>            </a>
          </span>

          
        </h1>

        <a class="js-header-action-search header-action search right">
                <span id="search-button" class="nav-icon nav-icon-search"></span>
              </a>
      </div> <!-- .toolbar -->

      
      <div id="site-content" class="js-site-content">

        <div id="curated-galleries" class="js-curated-galleries">
  <div class="cta-header ">    <h1 class="cta-header-title">策展库</h1>    <h2 class="cta-header-subtitle">好工作、主要创新人才的精选集合</h2>  </div>
  <div id="content-wrapper">    <div id="content-container" class="grid-site cfix">      <div id="content" class="border-box cfix users-gallery-container projects">          <div class="category-row">            <div class="category-row-header">              <div class="category-label-wrap">                <h2 class="category-label"><a href="#">摄影</a></h2>                <span class="rarr category-label-arrow">→</span>              </div>              <div class="category-link-wrap">                <a class="category-link" href="#">查看图库</a>                <span class="rarr category-link-arrow">→</span>              </div>            </div>            <div class="category-row-body cfix">                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="7208597">                  <div class="cover-img">                    <a href="#" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset=# media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="# # 2x" alt="Dead Memories // Personal Project">                      </picture>                    <noscript>&lt;img alt="Dead Memories // Personal Project" title="Dead Memories // Personal Project" src="#" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="#" class="projectName cover-name-link">Dead Memories // Personal Project</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="#">                
<span class="js-mini-profile" data-id="313139">Vova Paukov</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1368130689">33</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">426</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/22/2016">10/22/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="#" title="人物设计" class="field-link">人物设计</a>, 
                          <a href="#" title="数码艺术" class="field-link">数码艺术</a>, 
                          <a href="#" title="工业设计" class="field-link">工业设计</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="43744021" data-ordinal="1">                  <div class="cover-img">                    <a href="#" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="# # 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="# # 2x" alt="Dolomites 2">                      </picture>                    <noscript>&lt;img alt="Dolomites 2" title="Dolomites 2" src="https://mir-s3-cdn-cf.behance.net/projects/202/e5f50443744021.Y3JvcCwyMTkwLDE3MTQsMzQ2LDA.jpeg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="#" class="projectName cover-name-link">Dolomites 2</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="#">                
<span class="js-mini-profile" data-id="3753367">Felix Meyer</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1476098090">59</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">219</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/22/2016">10/22/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="#" title="摄影" class="field-link">摄影</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="33220751" data-ordinal="2">                  <div class="cover-img">                    <a href="#" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="# # 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="# # 2x" alt="Black on White Snake">                      </picture>                    <noscript>&lt;img alt="Black on White Snake" title="Black on White Snake" src="#" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="#" class="projectName cover-name-link">Black on White Snake</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="#">                
<span class="js-mini-profile" data-id="81558">Joshua Reis</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1453646242">87</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">376</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/22/2016">10/22/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="#" title="数码艺术" class="field-link">数码艺术</a>, 
                          <a href="#" title="数码摄影" class="field-link">数码摄影</a>, 
                          <a href="#" title="修图" class="field-link">修图</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="43747087" data-ordinal="3">                  <div class="cover-img">                    <a href="#" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="# # 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="# # 2x" alt="Canon G7 X II Promo">                      </picture>                    <noscript>&lt;img alt="Canon G7 X II Promo" title="Canon G7 X II Promo" src="#" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="#" class="projectName cover-name-link">Canon G7 X II Promo</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="#">                
<span class="js-mini-profile" data-id="1185777">Nick Frank</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1476104707">326</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">1665</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/22/2016">10/22/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="#" title="摄影" class="field-link">摄影</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="43665551" data-ordinal="4">                  <div class="cover-img">                    <a href="#" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="# # 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="# # 2x" alt="NASA - Past and Present Dreams of the Future">                      </picture>                    <noscript>&lt;img alt="NASA - Past and Present Dreams of the Future" title="NASA - Past and Present Dreams of the Future" src="#" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="#" class="projectName cover-name-link">NASA - Past and Present Dreams of the Future</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="#">                
<span class="js-mini-profile" data-id="903815">INK Studio</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1476201622">112</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">737</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/21/2016">10/21/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="#" title="艺术指导" class="field-link">艺术指导</a>, 
                          <a href="#" title="摄影" class="field-link">摄影</a>, 
                          <a href="#" title="修图" class="field-link">修图</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="43768649" data-ordinal="5">                  <div class="cover-img">                    <a href="#" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="# # 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="# # 2x" alt="Blank Space">                      </picture>                    <noscript>&lt;img alt="Blank Space" title="Blank Space" src="https://mir-s3-cdn-cf.behance.net/projects/202/46140a43768649.Y3JvcCw5MjAsNzIwLDIwLDQ1.jpeg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="#" class="projectName cover-name-link">Blank Space</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="#">                
<span class="js-mini-profile" data-id="48730325">Robert Cybulski</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1476141805">242</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">1485</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/21/2016">10/21/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="#" title="摄影" class="field-link">摄影</a>, 
                          <a href="#" title="数码摄影" class="field-link">数码摄影</a>, 
                          <a href="#" title="新闻摄影" class="field-link">新闻摄影</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="41910487" data-ordinal="6">                  <div class="cover-img">                    <a href="#" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="# # 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset=# alt="Shanghai Cityscapes">                      </picture>                    <noscript>&lt;img alt="Shanghai Cityscapes" title="Shanghai Cityscapes" src="#" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="#" class="projectName cover-name-link">Shanghai Cityscapes</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="#">                
<span class="js-mini-profile" data-id="90244">Johannes Heuckeroth</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1471777196">343</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">3324</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/21/2016">10/21/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="#" title="摄影" class="field-link">摄影</a>, 
                          <a href="#" title="数码艺术" class="field-link">数码艺术</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>            </div>          </div>          <div class="category-row">            <div class="category-row-header">              <div class="category-label-wrap">                <h2 class="category-label"><a href="https://www.behance.net/galleries/14/Sound">声音</a></h2>                <span class="rarr category-label-arrow">→</span>              </div>              <div class="category-link-wrap">                <a class="category-link" href="#">查看图库</a>                <span class="rarr category-link-arrow">→</span>              </div>            </div>            <div class="category-row-body cfix">                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="1286931">                  <div class="cover-img">                    <a href="#" class="cover-img-link">                      <img src="./style/img/1286931.5449b845c30e9.jpg" alt="Nand Gate Synth Drone" title="Nand Gate Synth Drone" class="cover-img-el" data-pin-nopin="nopin">                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="#" class="projectName cover-name-link">Nand Gate Synth Drone</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="#">                
<span class="js-mini-profile" data-id="337453">Pablo A. Arias Cid</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1303326275">24</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">950</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="9/29/2016">9/29/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="#" title="音乐制作" class="field-link">音乐制作</a>, 
                          <a href="#" title="音效设计" class="field-link">音效设计</a>, 
                          <a href="#" title="数码艺术" class="field-link">数码艺术</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="33369179" data-ordinal="1">                  <div class="cover-img">                    <a href="#" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="# # 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="# # 2x" alt="Closet Monster">                      </picture>                    <noscript>&lt;img alt="Closet Monster" title="Closet Monster" src="://mir-s3-cdn-cf.behance.net/projects/202/73434e33369179.Y3JvcCwxOTQ0LDE1MTgsMCw1ODM.jpg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="#" class="projectName cover-name-link">Closet Monster</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="#">                
<span class="js-mini-profile" data-id="327829">Todor Kobakov</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1453917696">43</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">785</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="9/28/2016">9/28/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="#" title="音乐" class="field-link">音乐</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="803962" data-ordinal="2">                  <div class="cover-img">                    <a href="#" class="cover-img-link">                      <img src="./style/img/803962.54439f0290326.jpg" alt="Film Music" title="Film Music" class="cover-img-el" data-pin-nopin="nopin">                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="#" class="projectName cover-name-link">Film Music</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="#">                
<span class="js-mini-profile" data-id="252620">Richard Bronskill</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1289506137">16</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">738</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="9/27/2016">9/27/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="#" title="胶片" class="field-link">胶片</a>, 
                          <a href="#" title="音乐" class="field-link">音乐</a>, 
                          <a href="#" title="音乐创作" class="field-link">音乐创作</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="7402745" data-ordinal="3">                  <div class="cover-img">                    <a href="#" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="# # 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="# # 2x" alt="Google Glass">                      </picture>                    <noscript>&lt;img alt="Google Glass" title="Google Glass" src="https://mir-s3-cdn-cf.behance.net/projects/202/7402745.5471bafcd8580.png" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="#" class="projectName cover-name-link">Google Glass</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="#">                
<span class="js-mini-profile" data-id="81005">Connor Moore</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1362171597">30</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">1752</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="9/16/2016">9/16/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="#" title="产品设计" class="field-link">产品设计</a>, 
                          <a href="#" title="音效设计" class="field-link">音效设计</a>, 
                          <a href="#" title="用户界面/用户体验" class="field-link">用户界面/用户体验</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="704942" data-ordinal="4">                  <div class="cover-img">                    <a href="#" class="cover-img-link">                      <img src="./style/img/704942.5441e508aa210.jpg" alt="Arté" title="Arté" class="cover-img-el" data-pin-nopin="nopin">                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="#" class="projectName cover-name-link">Arté</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="#">                
<span class="js-mini-profile" data-id="231782">Rodrigo Pérez-Segnini</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1284689819">12</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">484</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="9/15/2016">9/15/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="#" title="音乐制作" class="field-link">音乐制作</a>, 
                          <a href="#" title="多媒体" class="field-link">多媒体</a>, 
                          <a href="#" title="音效设计" class="field-link">音效设计</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="2161629" data-ordinal="5">                  <div class="cover-img">                    <a href="#" class="cover-img-link">                      <img src="./style/img/2161629.54528d16d29c0.jpg" alt="Music from a Dry Cleaner" title="Music from a Dry Cleaner" class="cover-img-el" data-pin-nopin="nopin">                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="#" class="projectName cover-name-link">Music from a Dry Cleaner</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="#">                
<span class="js-mini-profile" data-id="82453">Diego Stocco</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1316455587">1102</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">33501</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="9/27/2011">9/27/2011</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="#" title="音乐制作" class="field-link">音乐制作</a>, 
                          <a href="#" title="音效设计" class="field-link">音效设计</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="33369911" data-ordinal="6">                  <div class="cover-img">                    <a href="#" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="# # 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="# # 2x" alt="Life After Death From Above 1979">                      </picture>                    <noscript>&lt;img alt="Life After Death From Above 1979" title="Life After Death From Above 1979" src="https://mir-s3-cdn-cf.behance.net/projects/202/48a4f833369911.Y3JvcCw1MTYsNDA0LDQ3LDEzNw.jpg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="#" class="projectName cover-name-link">Life After Death From Above 1979</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="#">                
<span class="js-mini-profile" data-id="327829">Todor Kobakov</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1453918250">28</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">450</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="9/13/2016">9/13/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="#" title="音乐" class="field-link">音乐</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>            </div>          </div>          <div class="category-row">            <div class="category-row-header">              <div class="category-label-wrap">                <h2 class="category-label"><a href="#">广告</a></h2>                <span class="rarr category-label-arrow">→</span>              </div>              <div class="category-link-wrap">                <a class="category-link" href="https://www.behance.net/galleries/9/Advertising">查看图库</a>                <span class="rarr category-link-arrow">→</span>              </div>            </div>            <div class="category-row-body cfix">                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="43352855">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/43352855/Audi-A3-Campaign-Next-Level-2016" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="# # 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="# # 2x" alt="Audi A3 Campaign &quot;Next Level&quot; 2016">                      </picture>                    <noscript>&lt;img alt="Audi A3 Campaign &amp;quot;Next Level&amp;quot; 2016" title="Audi A3 Campaign &amp;quot;Next Level&amp;quot; 2016" src="https://mir-s3-cdn-cf.behance.net/projects/202/66701943352855.Y3JvcCwyMDIyLDE1ODIsNDg0LDExOQ.png" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="#" class="projectName cover-name-link">Audi A3 Campaign "Next Level" 2016</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="#">                
<span class="js-mini-profile" data-id="2362917">Roman-Geoffrey Lukowski</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1476351497">119</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">1122</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/19/2016">10/19/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="#" title="艺术指导" class="field-link">艺术指导</a>, 
                          <a href="#" title="广告" class="field-link">广告</a>, 
                          <a href="#" title="计算机动画" class="field-link">计算机动画</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="39957353" data-ordinal="1">                  <div class="cover-img">                    <a href="#" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="# # 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="# # 2x" alt="Alcohol Art">                      </picture>                    <noscript>&lt;img alt="Alcohol Art" title="Alcohol Art" src="https://mir-s3-cdn-cf.behance.net/projects/202/36659939957353.Y3JvcCwxMzM1LDEwNDQsMTQyLDA.jpg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="#" class="projectName cover-name-link">Alcohol Art</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="#">                
<span class="js-mini-profile" data-id="544670">Fabian Rüther</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1467096824">322</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">1971</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/18/2016">10/18/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="#" title="艺术指导" class="field-link">艺术指导</a>, 
                          <a href="#" title="图形设计" class="field-link">图形设计</a>, 
                          <a href="#" title="摄影" class="field-link">摄影</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="43708005" data-ordinal="2">                  <div class="cover-img">                    <a href="#" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="# # 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="# # 2x" alt="TEDx &quot;Women speakers&quot;">                      </picture>                    <noscript>&lt;img alt="TEDx &amp;quot;Women speakers&amp;quot;" title="TEDx &amp;quot;Women speakers&amp;quot;" src="https://mir-s3-cdn-cf.behance.net/projects/202/27e3cd43708005.Y3JvcCw0MDUsMzE3LDAsMA.jpeg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="#" class="projectName cover-name-link">TEDx "Women speakers"</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link multiple-cover-by">                          <span class="cover-by">作者</span>                          <span class="multiple-owners-list tooltipi-container">                            多个所有者<ul class="tooltipi tooltipi-white-links">                              <li class="clear">                                <a class="multiple-owner-link" href="#">                
                                    <span class="multiple-owner-image-container"><img class="multiple-owner-image js-mini-profile" data-id="17368119" src="./style/img/70aded17368119.5702d3ee6e590.jpg"></span><span class="js-mini-profile" data-id="17368119">César Chinchilla</span>                                </a>                
                              </li>                              <li class="clear">                                <a class="multiple-owner-link" href="https://www.behance.net/IllusionCGIstudio">                
                                    <span class="multiple-owner-image-container"><img class="multiple-owner-image js-mini-profile" data-id="14252465" src="./style/img/2f84e714252465.55a0cf457101e.jpg"></span><span class="js-mini-profile" data-id="14252465">Illusion CGI Studio</span>                                </a>                
                              </li>                          </ul>                          </span>                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1476201685">480</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">2180</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/17/2016">10/17/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="#" title="艺术指导" class="field-link">艺术指导</a>, 
                          <a href="#" title="广告" class="field-link">广告</a>, 
                          <a href="#" title="创意指导" class="field-link">创意指导</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="33782842" data-ordinal="3">                  <div class="cover-img">                    <a href="#" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="# # 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="# # 2x" alt="P&amp;O&#39;s Biggest Ever Offer">                      </picture>                    <noscript>&lt;img alt="P&amp;amp;O's Biggest Ever Offer" title="P&amp;amp;O's Biggest Ever Offer" src="https://mir-s3-cdn-cf.behance.net/projects/202/81a73d33782842.Y3JvcCwxNDMwLDExMTcsMCww.png" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="#" class="projectName cover-name-link">P&amp;O's Biggest Ever Offer</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="#">                
<span class="js-mini-profile" data-id="233162">Ben Pearce</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1454906061">99</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">1471</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/13/2016">10/13/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="#" title="广告" class="field-link">广告</a>, 
                          <a href="#" title="艺术指导" class="field-link">艺术指导</a>, 
                          <a href="#" title="品牌推广" class="field-link">品牌推广</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="37241681" data-ordinal="4">                  <div class="cover-img">                    <a href="#" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="# # 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset=# alt="I TRADE. I LOVE IT">                      </picture>                    <noscript>&lt;img alt="I TRADE. I LOVE IT" title="I TRADE. I LOVE IT" src="https://mir-s3-cdn-cf.behance.net/projects/202/467aca37241681.Y3JvcCwxMTgzLDkyNSwwLDY0.png" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="#" class="projectName cover-name-link">I TRADE. I LOVE IT</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link multiple-cover-by">                          <span class="cover-by">作者</span>                          <span class="multiple-owners-list tooltipi-container">                            多个所有者<ul class="tooltipi tooltipi-white-links">                              <li class="clear">                                <a class="multiple-owner-link" href="#">                
                                    <span class="multiple-owner-image-container"><img class="multiple-owner-image js-mini-profile" data-id="375727" src="./style/img/375727.53ad9ac83da7f.png"></span><span class="js-mini-profile" data-id="375727">Patryk Kościelniak</span>                                </a>                
                              </li>                              <li class="clear">                                <a class="multiple-owner-link" href="#">                
                                    <span class="multiple-owner-image-container"><img class="multiple-owner-image js-mini-profile" data-id="948314" src="./style/img/948314.54a2006b37ad0.jpg"></span><span class="js-mini-profile" data-id="948314">Jasiek Taras</span>                                </a>                
                              </li>                          </ul>                          </span>                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1463664022">158</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">2178</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/12/2016">10/12/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="#" title="艺术指导" class="field-link">艺术指导</a>, 
                          <a href="https://www.behance.net/search?field=27" title="数码摄影" class="field-link">数码摄影</a>, 
                          <a href="https://www.behance.net/search?field=102" title="网页设计" class="field-link">网页设计</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="33554345" data-ordinal="5">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/33554345/National-Geographic-Store" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/dad2e333554345.Y3JvcCw3MDEsNTQ4LDIwMywxMw.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/dad2e333554345.Y3JvcCw3MDEsNTQ4LDIwMywxMw.jpg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/dad2e333554345.Y3JvcCw3MDEsNTQ4LDIwMywxMw.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/dad2e333554345.Y3JvcCw3MDEsNTQ4LDIwMywxMw.jpg 2x" alt="National Geographic Store">                      </picture>                    <noscript>&lt;img alt="National Geographic Store" title="National Geographic Store" src="https://mir-s3-cdn-cf.behance.net/projects/202/dad2e333554345.Y3JvcCw3MDEsNTQ4LDIwMywxMw.jpg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/33554345/National-Geographic-Store" class="projectName cover-name-link">National Geographic Store</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/wildbytes">                
<span class="js-mini-profile" data-id="14983359">Wildbytes Studio</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1454349974">21</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">340</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/11/2016">10/11/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=109" title="品牌推广" class="field-link">品牌推广</a>, 
                          <a href="https://www.behance.net/search?field=137" title="创意指导" class="field-link">创意指导</a>, 
                          <a href="https://www.behance.net/search?field=123" title="编程" class="field-link">编程</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="36275899" data-ordinal="6">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/36275899/Worry-Less" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/e70b6f36275899.Y3JvcCwyNTUwLDE5OTMsNDU2LDU.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/e70b6f36275899.Y3JvcCwyNTUwLDE5OTMsNDU2LDU.jpg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/e70b6f36275899.Y3JvcCwyNTUwLDE5OTMsNDU2LDU.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/e70b6f36275899.Y3JvcCwyNTUwLDE5OTMsNDU2LDU.jpg 2x" alt="Worry Less">                      </picture>                    <noscript>&lt;img alt="Worry Less" title="Worry Less" src="https://mir-s3-cdn-cf.behance.net/projects/202/e70b6f36275899.Y3JvcCwyNTUwLDE5OTMsNDU2LDU.jpg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/36275899/Worry-Less" class="projectName cover-name-link">Worry Less</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/felipemayer">                
<span class="js-mini-profile" data-id="686174">Felipe Mayer</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1461077029">798</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">4824</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/10/2016">10/10/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=108" title="广告" class="field-link">广告</a>, 
                          <a href="https://www.behance.net/search?field=5" title="艺术指导" class="field-link">艺术指导</a>, 
                          <a href="https://www.behance.net/search?field=48" title="插图" class="field-link">插图</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>            </div>          </div>          <div class="category-row">            <div class="category-row-header">              <div class="category-label-wrap">                <h2 class="category-label"><a href="https://www.behance.net/galleries/5/Architecture">建筑</a></h2>                <span class="rarr category-label-arrow">→</span>              </div>              <div class="category-link-wrap">                <a class="category-link" href="https://www.behance.net/galleries/5/Architecture">查看图库</a>                <span class="rarr category-link-arrow">→</span>              </div>            </div>            <div class="category-row-body cfix">                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="32263139">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/32263139/Kettal" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/c60e4f32263139.Y3JvcCwzNjgzLDI4ODMsMTU2LDA.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/c60e4f32263139.Y3JvcCwzNjgzLDI4ODMsMTU2LDA.jpg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/c60e4f32263139.Y3JvcCwzNjgzLDI4ODMsMTU2LDA.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/c60e4f32263139.Y3JvcCwzNjgzLDI4ODMsMTU2LDA.jpg 2x" alt="Kettal">                      </picture>                    <noscript>&lt;img alt="Kettal" title="Kettal" src="https://mir-s3-cdn-cf.behance.net/projects/202/c60e4f32263139.Y3JvcCwzNjgzLDI4ODMsMTU2LDA.jpg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/32263139/Kettal" class="projectName cover-name-link">Kettal</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/jonaslindstrom">                
<span class="js-mini-profile" data-id="2074381">Jonas Lindström</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1450645720">103</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">458</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/22/2016">10/22/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=73" title="摄影" class="field-link">摄影</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="43749497" data-ordinal="1">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/43749497/Stylish-family-apartment" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/35430f43749497.Y3JvcCwxNTkxLDEyNDUsMzYxLDExNw.jpeg, https://mir-s3-cdn-cf.behance.net/projects/404/35430f43749497.Y3JvcCwxNTkxLDEyNDUsMzYxLDExNw.jpeg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/35430f43749497.Y3JvcCwxNTkxLDEyNDUsMzYxLDExNw.jpeg, https://mir-s3-cdn-cf.behance.net/projects/404/35430f43749497.Y3JvcCwxNTkxLDEyNDUsMzYxLDExNw.jpeg 2x" alt="Stylish family apartment">                      </picture>                    <noscript>&lt;img alt="Stylish family apartment" title="Stylish family apartment" src="https://mir-s3-cdn-cf.behance.net/projects/202/35430f43749497.Y3JvcCwxNTkxLDEyNDUsMzYxLDExNw.jpeg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/43749497/Stylish-family-apartment" class="projectName cover-name-link">Stylish family apartment</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/yodezeen">                
<span class="js-mini-profile" data-id="3386429">YØ DEZEEN</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1476108630">132</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">1586</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/22/2016">10/22/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=4" title="建筑" class="field-link">建筑</a>, 
                          <a href="https://www.behance.net/search?field=52" title="室内设计" class="field-link">室内设计</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="43913739" data-ordinal="2">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/43913739/gorki" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/606ffe43913739.Y3JvcCwxMTk3LDkzNiwxODYsMA.jpeg, https://mir-s3-cdn-cf.behance.net/projects/404/606ffe43913739.Y3JvcCwxMTk3LDkzNiwxODYsMA.jpeg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/606ffe43913739.Y3JvcCwxMTk3LDkzNiwxODYsMA.jpeg, https://mir-s3-cdn-cf.behance.net/projects/404/606ffe43913739.Y3JvcCwxMTk3LDkzNiwxODYsMA.jpeg 2x" alt="gorki">                      </picture>                    <noscript>&lt;img alt="gorki" title="gorki" src="https://mir-s3-cdn-cf.behance.net/projects/202/606ffe43913739.Y3JvcCwxMTk3LDkzNiwxODYsMA.jpeg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/43913739/gorki" class="projectName cover-name-link">gorki</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/Alexandre_Kudimov">                
<span class="js-mini-profile" data-id="21784619">Александр Кудимов</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1476465472">131</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">805</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/22/2016">10/22/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=4" title="建筑" class="field-link">建筑</a>, 
                          <a href="https://www.behance.net/search?field=73" title="摄影" class="field-link">摄影</a>, 
                          <a href="https://www.behance.net/search?field=52" title="室内设计" class="field-link">室内设计</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="43753699" data-ordinal="3">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/43753699/Artex-Poliform-Varenna" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/897ce343753699.Y3JvcCwxMDU0LDgyNSwxNzQsMA.jpeg, https://mir-s3-cdn-cf.behance.net/projects/404/897ce343753699.Y3JvcCwxMDU0LDgyNSwxNzQsMA.jpeg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/897ce343753699.Y3JvcCwxMDU0LDgyNSwxNzQsMA.jpeg, https://mir-s3-cdn-cf.behance.net/projects/404/897ce343753699.Y3JvcCwxMDU0LDgyNSwxNzQsMA.jpeg 2x" alt="Artex - Poliform Varenna">                      </picture>                    <noscript>&lt;img alt="Artex - Poliform Varenna" title="Artex - Poliform Varenna" src="https://mir-s3-cdn-cf.behance.net/projects/202/897ce343753699.Y3JvcCwxMDU0LDgyNSwxNzQsMA.jpeg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/43753699/Artex-Poliform-Varenna" class="projectName cover-name-link">Artex - Poliform Varenna</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/jwrenders">                
<span class="js-mini-profile" data-id="1195457">Javier Wainstein</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1476115614">143</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">1133</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/22/2016">10/22/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=4" title="建筑" class="field-link">建筑</a>, 
                          <a href="https://www.behance.net/search?field=49" title="工业设计" class="field-link">工业设计</a>, 
                          <a href="https://www.behance.net/search?field=52" title="室内设计" class="field-link">室内设计</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="41012597" data-ordinal="4">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/41012597/For-the-man-who-is-cuts-off-unnecessary" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/c7277341012597.Y3JvcCwxMjM2LDk2OCw0NSww.jpeg, https://mir-s3-cdn-cf.behance.net/projects/404/c7277341012597.Y3JvcCwxMjM2LDk2OCw0NSww.jpeg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/c7277341012597.Y3JvcCwxMjM2LDk2OCw0NSww.jpeg, https://mir-s3-cdn-cf.behance.net/projects/404/c7277341012597.Y3JvcCwxMjM2LDk2OCw0NSww.jpeg 2x" alt="For the man, who is cuts off unnecessary">                      </picture>                    <noscript>&lt;img alt="For the man, who is cuts off unnecessary" title="For the man, who is cuts off unnecessary" src="https://mir-s3-cdn-cf.behance.net/projects/202/c7277341012597.Y3JvcCwxMjM2LDk2OCw0NSww.jpeg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/41012597/For-the-man-who-is-cuts-off-unnecessary" class="projectName cover-name-link">For the man, who is cuts off unnecessary</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/lndsheva">                
<span class="js-mini-profile" data-id="16053567">Landusheva Nastia</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1469452927">336</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">2823</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/22/2016">10/22/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=4" title="建筑" class="field-link">建筑</a>, 
                          <a href="https://www.behance.net/search?field=52" title="室内设计" class="field-link">室内设计</a>, 
                          <a href="https://www.behance.net/search?field=122" title="数码艺术" class="field-link">数码艺术</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="16082697" data-ordinal="5">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/16082697/Recent-Various-Volume-2" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/7684fe16082697.Y3JvcCwxOTE0LDE0OTgsMzM1LDA.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/7684fe16082697.Y3JvcCwxOTE0LDE0OTgsMzM1LDA.jpg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/7684fe16082697.Y3JvcCwxOTE0LDE0OTgsMzM1LDA.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/7684fe16082697.Y3JvcCwxOTE0LDE0OTgsMzM1LDA.jpg 2x" alt="Recent: Various, Volume 2">                      </picture>                    <noscript>&lt;img alt="Recent: Various, Volume 2" title="Recent: Various, Volume 2" src="https://mir-s3-cdn-cf.behance.net/projects/202/7684fe16082697.Y3JvcCwxOTE0LDE0OTgsMzM1LDA.jpg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/16082697/Recent-Various-Volume-2" class="projectName cover-name-link">Recent: Various, Volume 2</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/peterjsieger">                
<span class="js-mini-profile" data-id="5473669">Pete Sieger</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1397419589">17</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">316</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/21/2016">10/21/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=4" title="建筑" class="field-link">建筑</a>, 
                          <a href="https://www.behance.net/search?field=73" title="摄影" class="field-link">摄影</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="43598005" data-ordinal="6">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/43598005/University-Tower-CDMX-by-Del-Parque" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/c53d7343598005.Y3JvcCwxNDAzLDEwOTgsMCw0NQ.jpeg, https://mir-s3-cdn-cf.behance.net/projects/404/c53d7343598005.Y3JvcCwxNDAzLDEwOTgsMCw0NQ.jpeg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/c53d7343598005.Y3JvcCwxNDAzLDEwOTgsMCw0NQ.jpeg, https://mir-s3-cdn-cf.behance.net/projects/404/c53d7343598005.Y3JvcCwxNDAzLDEwOTgsMCw0NQ.jpeg 2x" alt="University Tower CDMX by Del Parque">                      </picture>                    <noscript>&lt;img alt="University Tower CDMX by Del Parque" title="University Tower CDMX by Del Parque" src="https://mir-s3-cdn-cf.behance.net/projects/202/c53d7343598005.Y3JvcCwxNDAzLDEwOTgsMCw0NQ.jpeg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/43598005/University-Tower-CDMX-by-Del-Parque" class="projectName cover-name-link">University Tower CDMX by Del Parque</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/VERON3D">                
<span class="js-mini-profile" data-id="1091725">Carlos Veron</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1475692273">118</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">544</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/21/2016">10/21/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=4" title="建筑" class="field-link">建筑</a>, 
                          <a href="https://www.behance.net/search?field=3" title="动画" class="field-link">动画</a>, 
                          <a href="https://www.behance.net/search?field=122" title="数码艺术" class="field-link">数码艺术</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>            </div>          </div>          <div class="category-row">            <div class="category-row-header">              <div class="category-label-wrap">                <h2 class="category-label"><a href="https://www.behance.net/galleries/11/Game-Design">游戏设计</a></h2>                <span class="rarr category-label-arrow">→</span>              </div>              <div class="category-link-wrap">                <a class="category-link" href="https://www.behance.net/galleries/11/Game-Design">查看图库</a>                <span class="rarr category-link-arrow">→</span>              </div>            </div>            <div class="category-row-body cfix">                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="40669139">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/40669139/G-A-M-E" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/443d8840669139.Y3JvcCwxMTgxMSw5MjI4LDAsOTAw.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/443d8840669139.Y3JvcCwxMTgxMSw5MjI4LDAsOTAw.jpg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/443d8840669139.Y3JvcCwxMTgxMSw5MjI4LDAsOTAw.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/443d8840669139.Y3JvcCwxMTgxMSw5MjI4LDAsOTAw.jpg 2x" alt="G A M E">                      </picture>                    <noscript>&lt;img alt="G A M E" title="G A M E" src="https://mir-s3-cdn-cf.behance.net/projects/202/443d8840669139.Y3JvcCwxMTgxMSw5MjI4LDAsOTAw.jpg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/40669139/G-A-M-E" class="projectName cover-name-link">G A M E</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link multiple-cover-by">                          <span class="cover-by">作者</span>                          <span class="multiple-owners-list tooltipi-container">                            多个所有者<ul class="tooltipi tooltipi-white-links">                              <li class="clear">                                <a class="multiple-owner-link" href="https://www.behance.net/simonyieni">                
                                    <span class="multiple-owner-image-container"><img class="multiple-owner-image js-mini-profile" data-id="1206385" src="./style/img/18f1301206385.579630f4222ac.jpg"></span><span class="js-mini-profile" data-id="1206385">Eni Simonyi</span>                                </a>                
                              </li>                              <li class="clear">                                <a class="multiple-owner-link" href="https://www.behance.net/juhaszmark">                
                                    <span class="multiple-owner-image-container"><img class="multiple-owner-image js-mini-profile" data-id="25491333" src="./style/img/891a9425491333.569658c358fdd.jpg"></span><span class="js-mini-profile" data-id="25491333">Márk Juhász</span>                                </a>                
                              </li>                          </ul>                          </span>                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1468531664">414</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">3075</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/21/2016">10/21/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=124" title="人物设计" class="field-link">人物设计</a>, 
                          <a href="https://www.behance.net/search?field=41" title="游戏设计" class="field-link">游戏设计</a>, 
                          <a href="https://www.behance.net/search?field=48" title="插图" class="field-link">插图</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="33849774" data-ordinal="1">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/33849774/Abandoned-village" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/7d163e33849774.Y3JvcCw4MjgsNjQ4LDQxLDA.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/7d163e33849774.Y3JvcCw4MjgsNjQ4LDQxLDA.jpg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/7d163e33849774.Y3JvcCw4MjgsNjQ4LDQxLDA.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/7d163e33849774.Y3JvcCw4MjgsNjQ4LDQxLDA.jpg 2x" alt="Abandoned village">                      </picture>                    <noscript>&lt;img alt="Abandoned village" title="Abandoned village" src="https://mir-s3-cdn-cf.behance.net/projects/202/7d163e33849774.Y3JvcCw4MjgsNjQ4LDQxLDA.jpg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/33849774/Abandoned-village" class="projectName cover-name-link">Abandoned village</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/pavaks">                
<span class="js-mini-profile" data-id="16363063">Pavel Pavaks</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1455056742">43</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">355</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/20/2016">10/20/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=4" title="建筑" class="field-link">建筑</a>, 
                          <a href="https://www.behance.net/search?field=5" title="艺术指导" class="field-link">艺术指导</a>, 
                          <a href="https://www.behance.net/search?field=41" title="游戏设计" class="field-link">游戏设计</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="33836774" data-ordinal="2">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/33836774/A-Ggj-2016-Game-Rites-Of-Passages" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/3eb73233836774.Y3JvcCwxMzE0LDEwMjgsNDEwLDc0.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/3eb73233836774.Y3JvcCwxMzE0LDEwMjgsNDEwLDc0.jpg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/3eb73233836774.Y3JvcCwxMzE0LDEwMjgsNDEwLDc0.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/3eb73233836774.Y3JvcCwxMzE0LDEwMjgsNDEwLDc0.jpg 2x" alt="A Ggj 2016 Game - Rites Of Passages">                      </picture>                    <noscript>&lt;img alt="A Ggj 2016 Game - Rites Of Passages" title="A Ggj 2016 Game - Rites Of Passages" src="https://mir-s3-cdn-cf.behance.net/projects/202/3eb73233836774.Y3JvcCwxMzE0LDEwMjgsNDEwLDc0.jpg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/33836774/A-Ggj-2016-Game-Rites-Of-Passages" class="projectName cover-name-link">A Ggj 2016 Game - Rites Of Passages</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/mayabora">                
<span class="js-mini-profile" data-id="14393183">maya bora</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1455050617">64</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">457</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/19/2016">10/19/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=3" title="动画" class="field-link">动画</a>, 
                          <a href="https://www.behance.net/search?field=41" title="游戏设计" class="field-link">游戏设计</a>, 
                          <a href="https://www.behance.net/search?field=48" title="插图" class="field-link">插图</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="43098489" data-ordinal="3">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/43098489/League-of-Legends-Hextech-Visual-Identity" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/df811843098489.Y3JvcCw5NDgsNzQyLDIyNyww.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/df811843098489.Y3JvcCw5NDgsNzQyLDIyNyww.jpg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/df811843098489.Y3JvcCw5NDgsNzQyLDIyNyww.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/df811843098489.Y3JvcCw5NDgsNzQyLDIyNyww.jpg 2x" alt="League of Legends Hextech Visual Identity">                      </picture>                    <noscript>&lt;img alt="League of Legends Hextech Visual Identity" title="League of Legends Hextech Visual Identity" src="https://mir-s3-cdn-cf.behance.net/projects/202/df811843098489.Y3JvcCw5NDgsNzQyLDIyNyww.jpg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/43098489/League-of-Legends-Hextech-Visual-Identity" class="projectName cover-name-link">League of Legends Hextech Visual Identity</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link multiple-cover-by">                          <span class="cover-by">作者</span>                          <span class="multiple-owners-list tooltipi-container">                            多个所有者<ul class="tooltipi tooltipi-white-links">                              <li class="clear">                                <a class="multiple-owner-link" href="https://www.behance.net/aaronsather">                
                                    <span class="multiple-owner-image-container"><img class="multiple-owner-image js-mini-profile" data-id="106250" src="./style/img/0c661d106250.5792646cd12d8.jpg"></span><span class="js-mini-profile" data-id="106250">Aaron Sather</span>                                </a>                
                              </li>                              <li class="clear">                                <a class="multiple-owner-link" href="https://www.behance.net/hi2794">                
                                    <span class="multiple-owner-image-container"><img class="multiple-owner-image js-mini-profile" data-id="17996101" src="./style/img/8bb5d117996101.57e3126cd9394.png"></span><span class="js-mini-profile" data-id="17996101">Ricky Linn</span>                                </a>                
                              </li>                              <li class="clear">                                <a class="multiple-owner-link" href="https://www.behance.net/ted-a">                
                                    <span class="multiple-owner-image-container"><img class="multiple-owner-image js-mini-profile" data-id="1356793" src="./style/img/1356793.53d91aab53a51.png"></span><span class="js-mini-profile" data-id="1356793">Ted Angelilli</span>                                </a>                
                              </li>                              <li class="clear">                                <a class="multiple-owner-link" href="https://www.behance.net/kevinkvalsddf5">                
                                    <span class="multiple-owner-image-container"><img class="multiple-owner-image js-mini-profile" data-id="18673193" src="./style/img/b4bc9f18673193.57ed5c75a0108.png"></span><span class="js-mini-profile" data-id="18673193">Kevin Kvalstad</span>                                </a>                
                              </li>                              <li class="clear">                                <a class="multiple-owner-link" href="https://www.behance.net/matchu24">                
                                    <span class="multiple-owner-image-container"><img class="multiple-owner-image js-mini-profile" data-id="234593" src="./style/img/7e478a234593.57ec83633b5ce.png"></span><span class="js-mini-profile" data-id="234593">Mathew DeSanctis</span>                                </a>                
                              </li>                              <li class="clear">                                <a class="multiple-owner-link" href="https://www.behance.net/MelDesgagne">                
                                    <span class="multiple-owner-image-container"><img class="multiple-owner-image js-mini-profile" data-id="934849" src="./style/img/0e5250934849.57ed6c60ee9dc.jpeg"></span><span class="js-mini-profile" data-id="934849">Melanie Desgagne</span>                                </a>                
                              </li>                              <li class="clear">                                <a class="multiple-owner-link" href="https://www.behance.net/joyhenartf3f3">                
                                    <span class="multiple-owner-image-container"><img class="multiple-owner-image js-mini-profile" data-id="48767593" src="./style/img/no-image-50.jpg"></span><span class="js-mini-profile" data-id="48767593">Jessica Oyhenart</span>                                </a>                
                              </li>                          </ul>                          </span>                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1475126576">794</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">6800</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/18/2016">10/18/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=109" title="品牌推广" class="field-link">品牌推广</a>, 
                          <a href="https://www.behance.net/search?field=51" title="交互设计" class="field-link">交互设计</a>, 
                          <a href="https://www.behance.net/search?field=132" title="用户界面/用户体验" class="field-link">用户界面/用户体验</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="42105283" data-ordinal="4">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/42105283/Drill-Land-Game-Art-Project" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/d6b87342105283.Y3JvcCw4MDUsNjMwLDAsMA.png, https://mir-s3-cdn-cf.behance.net/projects/404/d6b87342105283.Y3JvcCw4MDUsNjMwLDAsMA.png 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/d6b87342105283.Y3JvcCw4MDUsNjMwLDAsMA.png, https://mir-s3-cdn-cf.behance.net/projects/404/d6b87342105283.Y3JvcCw4MDUsNjMwLDAsMA.png 2x" alt="Drill Land | Game Art Project">                      </picture>                    <noscript>&lt;img alt="Drill Land | Game Art Project" title="Drill Land | Game Art Project" src="https://mir-s3-cdn-cf.behance.net/projects/202/d6b87342105283.Y3JvcCw4MDUsNjMwLDAsMA.png" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/42105283/Drill-Land-Game-Art-Project" class="projectName cover-name-link">Drill Land | Game Art Project</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link multiple-cover-by">                          <span class="cover-by">作者</span>                          <span class="multiple-owners-list tooltipi-container">                            多个所有者<ul class="tooltipi tooltipi-white-links">                              <li class="clear">                                <a class="multiple-owner-link" href="https://www.behance.net/drawcoincr66d2">                
                                    <span class="multiple-owner-image-container"><img class="multiple-owner-image js-mini-profile" data-id="43319953" src="./style/img/58174e43319953.57e40089dc551.png"></span><span class="js-mini-profile" data-id="43319953">DrawCoin Creative</span>                                </a>                
                              </li>                              <li class="clear">                                <a class="multiple-owner-link" href="https://www.behance.net/dorzhgotov">                
                                    <span class="multiple-owner-image-container"><img class="multiple-owner-image js-mini-profile" data-id="472041" src="./style/img/370976472041.570e367a8c5fc.png"></span><span class="js-mini-profile" data-id="472041">Dorzhgotov Bum-Erdenehiyn</span>                                </a>                
                              </li>                              <li class="clear">                                <a class="multiple-owner-link" href="https://www.behance.net/hodas">                
                                    <span class="multiple-owner-image-container"><img class="multiple-owner-image js-mini-profile" data-id="5388395" src="./style/img/5388395.5436ffad2495b.jpg"></span><span class="js-mini-profile" data-id="5388395">Artem Hodas</span>                                </a>                
                              </li>                          </ul>                          </span>                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1474560169">568</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">3203</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/17/2016">10/17/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=48" title="插图" class="field-link">插图</a>, 
                          <a href="https://www.behance.net/search?field=122" title="数码艺术" class="field-link">数码艺术</a>, 
                          <a href="https://www.behance.net/search?field=41" title="游戏设计" class="field-link">游戏设计</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="43604967" data-ordinal="5">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/43604967/Counter-Strike-Global-Offensive-UI-Redesign" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/27155643604967.Y3JvcCw2MzUsNDk3LDE1Niww.jpeg, https://mir-s3-cdn-cf.behance.net/projects/404/27155643604967.Y3JvcCw2MzUsNDk3LDE1Niww.jpeg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/27155643604967.Y3JvcCw2MzUsNDk3LDE1Niww.jpeg, https://mir-s3-cdn-cf.behance.net/projects/404/27155643604967.Y3JvcCw2MzUsNDk3LDE1Niww.jpeg 2x" alt="Counter-Strike Global Offensive UI Redesign">                      </picture>                    <noscript>&lt;img alt="Counter-Strike Global Offensive UI Redesign" title="Counter-Strike Global Offensive UI Redesign" src="https://mir-s3-cdn-cf.behance.net/projects/202/27155643604967.Y3JvcCw2MzUsNDk3LDE1Niww.jpeg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/43604967/Counter-Strike-Global-Offensive-UI-Redesign" class="projectName cover-name-link">Counter-Strike Global Offensive UI Redesign</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/saulopintar">                
<span class="js-mini-profile" data-id="12007567">Saulo Pintar</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1475711345">894</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">44446</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/13/2016">10/13/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=44" title="图形设计" class="field-link">图形设计</a>, 
                          <a href="https://www.behance.net/search?field=132" title="用户界面/用户体验" class="field-link">用户界面/用户体验</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="43161345" data-ordinal="6">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/43161345/Icons-and-Items-for-Pirates-game" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/b736f443161345.Y3JvcCwxMDUwLDgyMiw0NCw0Ng.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/b736f443161345.Y3JvcCwxMDUwLDgyMiw0NCw0Ng.jpg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/b736f443161345.Y3JvcCwxMDUwLDgyMiw0NCw0Ng.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/b736f443161345.Y3JvcCwxMDUwLDgyMiw0NCw0Ng.jpg 2x" alt="Icons and Items for Pirates game">                      </picture>                    <noscript>&lt;img alt="Icons and Items for Pirates game" title="Icons and Items for Pirates game" src="https://mir-s3-cdn-cf.behance.net/projects/202/b736f443161345.Y3JvcCwxMDUwLDgyMiw0NCw0Ng.jpg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/43161345/Icons-and-Items-for-Pirates-game" class="projectName cover-name-link">Icons and Items for Pirates game</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/enyelka">                
<span class="js-mini-profile" data-id="15739713">Anna Turkova</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1474642780">135</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">802</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/12/2016">10/12/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=131" title="图标设计" class="field-link">图标设计</a>, 
                          <a href="https://www.behance.net/search?field=122" title="数码艺术" class="field-link">数码艺术</a>, 
                          <a href="https://www.behance.net/search?field=41" title="游戏设计" class="field-link">游戏设计</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>            </div>          </div>          <div class="category-row">            <div class="category-row-header">              <div class="category-label-wrap">                <h2 class="category-label"><a href="https://www.behance.net/galleries/2/Graphic-Design">图形设计</a></h2>                <span class="rarr category-label-arrow">→</span>              </div>              <div class="category-link-wrap">                <a class="category-link" href="https://www.behance.net/galleries/2/Graphic-Design">查看图库</a>                <span class="rarr category-link-arrow">→</span>              </div>            </div>            <div class="category-row-body cfix">                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="37024717">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/37024717/2016-National-Design-Awards-Portfolio-Book" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/0e07cf37024717.Y3JvcCwxNDcxLDExNTIsMzIyLDA.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/0e07cf37024717.Y3JvcCwxNDcxLDExNTIsMzIyLDA.jpg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/0e07cf37024717.Y3JvcCwxNDcxLDExNTIsMzIyLDA.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/0e07cf37024717.Y3JvcCwxNDcxLDExNTIsMzIyLDA.jpg 2x" alt="2016 National Design Awards Portfolio Book">                      </picture>                    <noscript>&lt;img alt="2016 National Design Awards Portfolio Book" title="2016 National Design Awards Portfolio Book" src="https://mir-s3-cdn-cf.behance.net/projects/202/0e07cf37024717.Y3JvcCwxNDcxLDExNTIsMzIyLDA.jpg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/37024717/2016-National-Design-Awards-Portfolio-Book" class="projectName cover-name-link">2016 National Design Awards Portfolio Book</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/ammunitiongroup">                
<span class="js-mini-profile" data-id="32702051">Ammunition Group</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1462903136">103</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">1171</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/23/2016">10/23/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=49" title="工业设计" class="field-link">工业设计</a>, 
                          <a href="https://www.behance.net/search?field=79" title="产品设计" class="field-link">产品设计</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="38628949" data-ordinal="1">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/38628949/Hands-on-engineeringAssemblin" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/4b2b6b38628949.Y3JvcCwyNzM2LDIxNDIsMjM0LDA.png, https://mir-s3-cdn-cf.behance.net/projects/404/4b2b6b38628949.Y3JvcCwyNzM2LDIxNDIsMjM0LDA.png 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/4b2b6b38628949.Y3JvcCwyNzM2LDIxNDIsMjM0LDA.png, https://mir-s3-cdn-cf.behance.net/projects/404/4b2b6b38628949.Y3JvcCwyNzM2LDIxNDIsMjM0LDA.png 2x" alt="Hands-on engineering—Assemblin">                      </picture>                    <noscript>&lt;img alt="Hands-on engineering—Assemblin" title="Hands-on engineering—Assemblin" src="https://mir-s3-cdn-cf.behance.net/projects/202/4b2b6b38628949.Y3JvcCwyNzM2LDIxNDIsMjM0LDA.png" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/38628949/Hands-on-engineeringAssemblin" class="projectName cover-name-link">Hands-on engineering—Assemblin</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/esseninternational">                
<span class="js-mini-profile" data-id="6027035">Essen International</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1466584330">404</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">5475</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/22/2016">10/22/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=109" title="品牌推广" class="field-link">品牌推广</a>, 
                          <a href="https://www.behance.net/search?field=44" title="图形设计" class="field-link">图形设计</a>, 
                          <a href="https://www.behance.net/search?field=102" title="网页设计" class="field-link">网页设计</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="43736499" data-ordinal="2">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/43736499/Brand-marks" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/5f688643736499.Y3JvcCw0ODEsMzc2LDQ1NCwxNDg.jpeg, https://mir-s3-cdn-cf.behance.net/projects/404/5f688643736499.Y3JvcCw0ODEsMzc2LDQ1NCwxNDg.jpeg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/5f688643736499.Y3JvcCw0ODEsMzc2LDQ1NCwxNDg.jpeg, https://mir-s3-cdn-cf.behance.net/projects/404/5f688643736499.Y3JvcCw0ODEsMzc2LDQ1NCwxNDg.jpeg 2x" alt="Brand marks">                      </picture>                    <noscript>&lt;img alt="Brand marks" title="Brand marks" src="https://mir-s3-cdn-cf.behance.net/projects/202/5f688643736499.Y3JvcCw0ODEsMzc2LDQ1NCwxNDg.jpeg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/43736499/Brand-marks" class="projectName cover-name-link">Brand marks</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/yer-band">                
<span class="js-mini-profile" data-id="480657">Anton Yermolov</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1476080483">128</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">555</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/22/2016">10/22/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=109" title="品牌推广" class="field-link">品牌推广</a>, 
                          <a href="https://www.behance.net/search?field=131" title="图标设计" class="field-link">图标设计</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="43872703" data-ordinal="3">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/43872703/Rain-Pattern-Specimen" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/db5f9643872703.Y3JvcCwyNjQ5LDIwNzMsMTQzLDA.jpeg, https://mir-s3-cdn-cf.behance.net/projects/404/db5f9643872703.Y3JvcCwyNjQ5LDIwNzMsMTQzLDA.jpeg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/db5f9643872703.Y3JvcCwyNjQ5LDIwNzMsMTQzLDA.jpeg, https://mir-s3-cdn-cf.behance.net/projects/404/db5f9643872703.Y3JvcCwyNjQ5LDIwNzMsMTQzLDA.jpeg 2x" alt="Rain Pattern Specimen">                      </picture>                    <noscript>&lt;img alt="Rain Pattern Specimen" title="Rain Pattern Specimen" src="https://mir-s3-cdn-cf.behance.net/projects/202/db5f9643872703.Y3JvcCwyNjQ5LDIwNzMsMTQzLDA.jpeg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/43872703/Rain-Pattern-Specimen" class="projectName cover-name-link">Rain Pattern Specimen</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/coton-design">                
<span class="js-mini-profile" data-id="3040561">Hiroko Sakai</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1476375193">255</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">1442</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/22/2016">10/22/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=48" title="插图" class="field-link">插图</a>, 
                          <a href="https://www.behance.net/search?field=44" title="图形设计" class="field-link">图形设计</a>, 
                          <a href="https://www.behance.net/search?field=69" title="图案设计" class="field-link">图案设计</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="10087227" data-ordinal="4">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/10087227/GRAFFITI-SITE-SPECIFIC-Anamorph" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/10087227.547f82581e7e4.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/10087227.547f82581e7e4.jpg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/10087227.547f82581e7e4.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/10087227.547f82581e7e4.jpg 2x" alt="GRAFFITI SITE SPECIFIC / Anamorph">                      </picture>                    <noscript>&lt;img alt="GRAFFITI SITE SPECIFIC / Anamorph" title="GRAFFITI SITE SPECIFIC / Anamorph" src="https://mir-s3-cdn-cf.behance.net/projects/202/10087227.547f82581e7e4.jpg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/10087227/GRAFFITI-SITE-SPECIFIC-Anamorph" class="projectName cover-name-link">GRAFFITI SITE SPECIFIC / Anamorph</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/truly-design">                
<span class="js-mini-profile" data-id="131170">Truly Design Urban Artists</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1375096344">185</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">3790</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/22/2016">10/22/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=4" title="建筑" class="field-link">建筑</a>, 
                          <a href="https://www.behance.net/search?field=36" title="展览设计" class="field-link">展览设计</a>, 
                          <a href="https://www.behance.net/search?field=43" title="涂鸦艺术" class="field-link">涂鸦艺术</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="43675905" data-ordinal="5">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/43675905/Lettering-Solos" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/2264ae43675905.Y3JvcCw3ODQsNjE0LDMwOSw0MTQ.jpeg, https://mir-s3-cdn-cf.behance.net/projects/404/2264ae43675905.Y3JvcCw3ODQsNjE0LDMwOSw0MTQ.jpeg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/2264ae43675905.Y3JvcCw3ODQsNjE0LDMwOSw0MTQ.jpeg, https://mir-s3-cdn-cf.behance.net/projects/404/2264ae43675905.Y3JvcCw3ODQsNjE0LDMwOSw0MTQ.jpeg 2x" alt="Lettering Solos">                      </picture>                    <noscript>&lt;img alt="Lettering Solos" title="Lettering Solos" src="https://mir-s3-cdn-cf.behance.net/projects/202/2264ae43675905.Y3JvcCw3ODQsNjE0LDMwOSw0MTQ.jpeg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/43675905/Lettering-Solos" class="projectName cover-name-link">Lettering Solos</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/Daviher">                
<span class="js-mini-profile" data-id="5774371">Daviher loredo</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1475869913">62</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">339</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/22/2016">10/22/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=44" title="图形设计" class="field-link">图形设计</a>, 
                          <a href="https://www.behance.net/search?field=133" title="书法" class="field-link">书法</a>, 
                          <a href="https://www.behance.net/search?field=97" title="排版业" class="field-link">排版业</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="30279599" data-ordinal="6">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/30279599/ReporteNewspaper-Covers" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/88551a30279599.561c083c454b3.png, https://mir-s3-cdn-cf.behance.net/projects/404/88551a30279599.561c083c454b3.png 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/88551a30279599.561c083c454b3.png, https://mir-s3-cdn-cf.behance.net/projects/404/88551a30279599.561c083c454b3.png 2x" alt="Reporte⎢Newspaper Covers">                      </picture>                    <noscript>&lt;img alt="Reporte⎢Newspaper Covers" title="Reporte⎢Newspaper Covers" src="https://mir-s3-cdn-cf.behance.net/projects/202/88551a30279599.561c083c454b3.png" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/30279599/ReporteNewspaper-Covers" class="projectName cover-name-link">Reporte⎢Newspaper Covers</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/melisarivas">                
<span class="js-mini-profile" data-id="2493943">Melisa Rivas</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1444677849">1422</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">13398</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/22/2016">10/22/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=32" title="编辑设计" class="field-link">编辑设计</a>, 
                          <a href="https://www.behance.net/search?field=44" title="图形设计" class="field-link">图形设计</a>, 
                          <a href="https://www.behance.net/search?field=97" title="排版业" class="field-link">排版业</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>            </div>          </div>          <div class="category-row">            <div class="category-row-header">              <div class="category-label-wrap">                <h2 class="category-label"><a href="https://www.behance.net/galleries/6/Product-Design">产品设计</a></h2>                <span class="rarr category-label-arrow">→</span>              </div>              <div class="category-link-wrap">                <a class="category-link" href="https://www.behance.net/galleries/6/Product-Design">查看图库</a>                <span class="rarr category-link-arrow">→</span>              </div>            </div>            <div class="category-row-body cfix">                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="43067055">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/43067055/Ctype-Chair-Dining-Chair" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/16f6cd43067055.Y3JvcCwxMjc3LDk5OSw1Niw3NQ.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/16f6cd43067055.Y3JvcCwxMjc3LDk5OSw1Niw3NQ.jpg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/16f6cd43067055.Y3JvcCwxMjc3LDk5OSw1Niw3NQ.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/16f6cd43067055.Y3JvcCwxMjc3LDk5OSw1Niw3NQ.jpg 2x" alt="Ctype Chair -  Dining Chair">                      </picture>                    <noscript>&lt;img alt="Ctype Chair -  Dining Chair" title="Ctype Chair -  Dining Chair" src="https://mir-s3-cdn-cf.behance.net/projects/202/16f6cd43067055.Y3JvcCwxMjc3LDk5OSw1Niw3NQ.jpg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/43067055/Ctype-Chair-Dining-Chair" class="projectName cover-name-link">Ctype Chair -  Dining Chair</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/jyesign2d01">                
<span class="js-mini-profile" data-id="47055441">Jiyoun Kim</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1474440356">171</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">1372</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/22/2016">10/22/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=49" title="工业设计" class="field-link">工业设计</a>, 
                          <a href="https://www.behance.net/search?field=137" title="创意指导" class="field-link">创意指导</a>, 
                          <a href="https://www.behance.net/search?field=40" title="家具设计" class="field-link">家具设计</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="34288773" data-ordinal="1">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/34288773/Curious-Smart-Oven" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/5098f934288773.Y3JvcCwzNjA4LDI4MjIsNjM2LDQwNA.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/5098f934288773.Y3JvcCwzNjA4LDI4MjIsNjM2LDQwNA.jpg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/5098f934288773.Y3JvcCwzNjA4LDI4MjIsNjM2LDQwNA.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/5098f934288773.Y3JvcCwzNjA4LDI4MjIsNjM2LDQwNA.jpg 2x" alt="Curious Smart Oven">                      </picture>                    <noscript>&lt;img alt="Curious Smart Oven" title="Curious Smart Oven" src="https://mir-s3-cdn-cf.behance.net/projects/202/5098f934288773.Y3JvcCwzNjA4LDI4MjIsNjM2LDQwNA.jpg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/34288773/Curious-Smart-Oven" class="projectName cover-name-link">Curious Smart Oven</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/kyuminha">                
<span class="js-mini-profile" data-id="4272231">Kyumin Ha</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1456221307">795</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">8401</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/22/2016">10/22/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=40" title="家具设计" class="field-link">家具设计</a>, 
                          <a href="https://www.behance.net/search?field=49" title="工业设计" class="field-link">工业设计</a>, 
                          <a href="https://www.behance.net/search?field=79" title="产品设计" class="field-link">产品设计</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="36395301" data-ordinal="2">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/36395301/B-chair" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/37628036395301.Y3JvcCwyMTYxLDE2OTEsNDMwLDA.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/37628036395301.Y3JvcCwyMTYxLDE2OTEsNDMwLDA.jpg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/37628036395301.Y3JvcCwyMTYxLDE2OTEsNDMwLDA.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/37628036395301.Y3JvcCwyMTYxLDE2OTEsNDMwLDA.jpg 2x" alt="B-chair">                      </picture>                    <noscript>&lt;img alt="B-chair" title="B-chair" src="https://mir-s3-cdn-cf.behance.net/projects/202/37628036395301.Y3JvcCwyMTYxLDE2OTEsNDMwLDA.jpg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/36395301/B-chair" class="projectName cover-name-link">B-chair</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link multiple-cover-by">                          <span class="cover-by">作者</span>                          <span class="multiple-owners-list tooltipi-container">                            多个所有者<ul class="tooltipi tooltipi-white-links">                              <li class="clear">                                <a class="multiple-owner-link" href="https://www.behance.net/sanone">                
                                    <span class="multiple-owner-image-container"><img class="multiple-owner-image js-mini-profile" data-id="2449983" src="./style/img/45bee82449983.5733d4441ea01.jpg"></span><span class="js-mini-profile" data-id="2449983">Maryan Ivasyk</span>                                </a>                
                              </li>                              <li class="clear">                                <a class="multiple-owner-link" href="https://www.behance.net/tarkodesigner">                
                                    <span class="multiple-owner-image-container"><img class="multiple-owner-image js-mini-profile" data-id="2766847" src="./style/img/b778252766847.5635ef26cbc23.jpg"></span><span class="js-mini-profile" data-id="2766847">Taras Pastushchuk | Tarkо</span>                                </a>                
                              </li>                          </ul>                          </span>                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1461345844">135</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">811</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/22/2016">10/22/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=4" title="建筑" class="field-link">建筑</a>, 
                          <a href="https://www.behance.net/search?field=109" title="品牌推广" class="field-link">品牌推广</a>, 
                          <a href="https://www.behance.net/search?field=49" title="工业设计" class="field-link">工业设计</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="43508089" data-ordinal="3">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/43508089/SMART-DOT" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/e0a7fc43508089.Y3JvcCwxMDAyLDc4NCwwLDQ5.jpeg, https://mir-s3-cdn-cf.behance.net/projects/404/e0a7fc43508089.Y3JvcCwxMDAyLDc4NCwwLDQ5.jpeg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/e0a7fc43508089.Y3JvcCwxMDAyLDc4NCwwLDQ5.jpeg, https://mir-s3-cdn-cf.behance.net/projects/404/e0a7fc43508089.Y3JvcCwxMDAyLDc4NCwwLDQ5.jpeg 2x" alt="SMART DOT">                      </picture>                    <noscript>&lt;img alt="SMART DOT" title="SMART DOT" src="https://mir-s3-cdn-cf.behance.net/projects/202/e0a7fc43508089.Y3JvcCwxMDAyLDc4NCwwLDQ5.jpeg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/43508089/SMART-DOT" class="projectName cover-name-link">SMART DOT</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/dowonkimdesign">                
<span class="js-mini-profile" data-id="4590009">Dowon kim</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1475505857">130</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">1974</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/22/2016">10/22/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=49" title="工业设计" class="field-link">工业设计</a>, 
                          <a href="https://www.behance.net/search?field=79" title="产品设计" class="field-link">产品设计</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="43381033" data-ordinal="4">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/43381033/JOIN-workstation-billion-combinations-only-3-shapes" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/2d3c4643381033.Y3JvcCwxMzQ1LDEwNTMsNTMsMA.jpeg, https://mir-s3-cdn-cf.behance.net/projects/404/2d3c4643381033.Y3JvcCwxMzQ1LDEwNTMsNTMsMA.jpeg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/2d3c4643381033.Y3JvcCwxMzQ1LDEwNTMsNTMsMA.jpeg, https://mir-s3-cdn-cf.behance.net/projects/404/2d3c4643381033.Y3JvcCwxMzQ1LDEwNTMsNTMsMA.jpeg 2x" alt="JOIN workstation - billion combinations, only 3 shapes">                      </picture>                    <noscript>&lt;img alt="JOIN workstation - billion combinations, only 3 shapes" title="JOIN workstation - billion combinations, only 3 shapes" src="https://mir-s3-cdn-cf.behance.net/projects/202/2d3c4643381033.Y3JvcCwxMzQ1LDEwNTMsNTMsMA.jpeg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/43381033/JOIN-workstation-billion-combinations-only-3-shapes" class="projectName cover-name-link">JOIN workstation - billion combinations, only 3 shapes</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/bigtricks">                
<span class="js-mini-profile" data-id="32010069">Giuseppe Burgio</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1475142167">500</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">2319</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/21/2016">10/21/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=40" title="家具设计" class="field-link">家具设计</a>, 
                          <a href="https://www.behance.net/search?field=122" title="数码艺术" class="field-link">数码艺术</a>, 
                          <a href="https://www.behance.net/search?field=137" title="创意指导" class="field-link">创意指导</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="38325149" data-ordinal="5">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/38325149/New-generation-of-the-Indian-spirit" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/5384f938325149.Y3JvcCwzNDUzLDI3MDMsMTQ2LDA.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/5384f938325149.Y3JvcCwzNDUzLDI3MDMsMTQ2LDA.jpg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/5384f938325149.Y3JvcCwzNDUzLDI3MDMsMTQ2LDA.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/5384f938325149.Y3JvcCwzNDUzLDI3MDMsMTQ2LDA.jpg 2x" alt="New generation of the Indian spirit">                      </picture>                    <noscript>&lt;img alt="New generation of the Indian spirit" title="New generation of the Indian spirit" src="https://mir-s3-cdn-cf.behance.net/projects/202/5384f938325149.Y3JvcCwzNDUzLDI3MDMsMTQ2LDA.jpg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/38325149/New-generation-of-the-Indian-spirit" class="projectName cover-name-link">New generation of the Indian spirit</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/wbachleda">                
<span class="js-mini-profile" data-id="15029997">WOJTEK BACHLEDA</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1465768351">119</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">718</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/21/2016">10/21/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=130" title="自动化设计" class="field-link">自动化设计</a>, 
                          <a href="https://www.behance.net/search?field=122" title="数码艺术" class="field-link">数码艺术</a>, 
                          <a href="https://www.behance.net/search?field=49" title="工业设计" class="field-link">工业设计</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="43481607" data-ordinal="6">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/43481607/IO" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/f657c943481607.Y3JvcCwyMTM2LDE2NzIsMTg0LDA.jpeg, https://mir-s3-cdn-cf.behance.net/projects/404/f657c943481607.Y3JvcCwyMTM2LDE2NzIsMTg0LDA.jpeg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/f657c943481607.Y3JvcCwyMTM2LDE2NzIsMTg0LDA.jpeg, https://mir-s3-cdn-cf.behance.net/projects/404/f657c943481607.Y3JvcCwyMTM2LDE2NzIsMTg0LDA.jpeg 2x" alt="I/O">                      </picture>                    <noscript>&lt;img alt="I/O" title="I/O" src="https://mir-s3-cdn-cf.behance.net/projects/202/f657c943481607.Y3JvcCwyMTM2LDE2NzIsMTg0LDA.jpeg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/43481607/IO" class="projectName cover-name-link">I/O</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/dustinlee">                
<span class="js-mini-profile" data-id="2655843">Dustin Lee</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1475452245">543</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">3506</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/21/2016">10/21/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=49" title="工业设计" class="field-link">工业设计</a>, 
                          <a href="https://www.behance.net/search?field=79" title="产品设计" class="field-link">产品设计</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>            </div>          </div>          <div class="category-row">            <div class="category-row-header">              <div class="category-label-wrap">                <h2 class="category-label"><a href="https://www.behance.net/galleries/12/Crafts">手工艺</a></h2>                <span class="rarr category-label-arrow">→</span>              </div>              <div class="category-link-wrap">                <a class="category-link" href="https://www.behance.net/galleries/12/Crafts">查看图库</a>                <span class="rarr category-link-arrow">→</span>              </div>            </div>            <div class="category-row-body cfix">                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="41926393">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/41926393/Venus-Anttrap-Beetle" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/ad1a4841926393.Y3JvcCw4NTQsNjY5LDExMSww.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/ad1a4841926393.Y3JvcCw4NTQsNjY5LDExMSww.jpg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/ad1a4841926393.Y3JvcCw4NTQsNjY5LDExMSww.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/ad1a4841926393.Y3JvcCw4NTQsNjY5LDExMSww.jpg 2x" alt="Venus Anttrap Beetle">                      </picture>                    <noscript>&lt;img alt="Venus Anttrap Beetle" title="Venus Anttrap Beetle" src="https://mir-s3-cdn-cf.behance.net/projects/202/ad1a4841926393.Y3JvcCw4NTQsNjY5LDExMSww.jpg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/41926393/Venus-Anttrap-Beetle" class="projectName cover-name-link">Venus Anttrap Beetle</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/hine">                
<span class="js-mini-profile" data-id="231381">Hine Mizushima（水島ひね）</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1471823947">348</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">1995</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/13/2016">10/13/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=21" title="手工艺" class="field-link">手工艺</a>, 
                          <a href="https://www.behance.net/search?field=86" title="雕塑" class="field-link">雕塑</a>, 
                          <a href="https://www.behance.net/search?field=126" title="玩具设计" class="field-link">玩具设计</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="42284891" data-ordinal="1">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/42284891/MY-TERRITORY" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/866f4c42284891.Y3JvcCw3MjYsNTY4LDcxLDA.jpeg, https://mir-s3-cdn-cf.behance.net/projects/404/866f4c42284891.Y3JvcCw3MjYsNTY4LDcxLDA.jpeg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/866f4c42284891.Y3JvcCw3MjYsNTY4LDcxLDA.jpeg, https://mir-s3-cdn-cf.behance.net/projects/404/866f4c42284891.Y3JvcCw3MjYsNTY4LDcxLDA.jpeg 2x" alt="MY TERRITORY">                      </picture>                    <noscript>&lt;img alt="MY TERRITORY" title="MY TERRITORY" src="https://mir-s3-cdn-cf.behance.net/projects/202/866f4c42284891.Y3JvcCw3MjYsNTY4LDcxLDA.jpeg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/42284891/MY-TERRITORY" class="projectName cover-name-link">MY TERRITORY</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link multiple-cover-by">                          <span class="cover-by">作者</span>                          <span class="multiple-owners-list tooltipi-container">                            多个所有者<ul class="tooltipi tooltipi-white-links">                              <li class="clear">                                <a class="multiple-owner-link" href="https://www.behance.net/Mostafa-Abdelmawla">                
                                    <span class="multiple-owner-image-container"><img class="multiple-owner-image js-mini-profile" data-id="2406757" src="./style/img/17167c2406757.56e3f95ddf714.jpg"></span><span class="js-mini-profile" data-id="2406757">Mostafa Abdelmawla</span>                                </a>                
                              </li>                              <li class="clear">                                <a class="multiple-owner-link" href="https://www.behance.net/SeragMounir">                
                                    <span class="multiple-owner-image-container"><img class="multiple-owner-image js-mini-profile" data-id="7165213" src="./style/img/7165213.53d3d38cf0d86.jpg"></span><span class="js-mini-profile" data-id="7165213">Serag Mounir</span>                                </a>                
                              </li>                          </ul>                          </span>                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1472764005">787</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">5183</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/12/2016">10/12/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=73" title="摄影" class="field-link">摄影</a>, 
                          <a href="https://www.behance.net/search?field=21" title="手工艺" class="field-link">手工艺</a>, 
                          <a href="https://www.behance.net/search?field=86" title="雕塑" class="field-link">雕塑</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="37326517" data-ordinal="2">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/37326517/Ore-Board-How-we-craft-wooden-keyboards" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/49009337326517.Y3JvcCwzMDUwLDIzODMsMzAzLDA.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/49009337326517.Y3JvcCwzMDUwLDIzODMsMzAzLDA.jpg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/49009337326517.Y3JvcCwzMDUwLDIzODMsMzAzLDA.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/49009337326517.Y3JvcCwzMDUwLDIzODMsMzAzLDA.jpg 2x" alt="Orée Board - How we craft wooden keyboards">                      </picture>                    <noscript>&lt;img alt="Orée Board - How we craft wooden keyboards" title="Orée Board - How we craft wooden keyboards" src="https://mir-s3-cdn-cf.behance.net/projects/202/49009337326517.Y3JvcCwzMDUwLDIzODMsMzAzLDA.jpg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/37326517/Ore-Board-How-we-craft-wooden-keyboards" class="projectName cover-name-link">Orée Board - How we craft wooden keyboards</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/oreeartisans">                
<span class="js-mini-profile" data-id="34358143">Orée Artisans</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1463582274">860</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">4864</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/11/2016">10/11/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=21" title="手工艺" class="field-link">手工艺</a>, 
                          <a href="https://www.behance.net/search?field=33" title="工程学" class="field-link">工程学</a>, 
                          <a href="https://www.behance.net/search?field=79" title="产品设计" class="field-link">产品设计</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="42853395" data-ordinal="3">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/42853395/Dumpster" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/bc723742853395.Y3JvcCw1NTYsNDM1LDM3NCw1MTc.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/bc723742853395.Y3JvcCw1NTYsNDM1LDM3NCw1MTc.jpg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/bc723742853395.Y3JvcCw1NTYsNDM1LDM3NCw1MTc.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/bc723742853395.Y3JvcCw1NTYsNDM1LDM3NCw1MTc.jpg 2x" alt="Dumpster">                      </picture>                    <noscript>&lt;img alt="Dumpster" title="Dumpster" src="https://mir-s3-cdn-cf.behance.net/projects/202/bc723742853395.Y3JvcCw1NTYsNDM1LDM3NCw1MTc.jpg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/42853395/Dumpster" class="projectName cover-name-link">Dumpster</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/grandmondo">                
<span class="js-mini-profile" data-id="10358559">The Grandmondo</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1473899914">52</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">695</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/10/2016">10/10/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=21" title="手工艺" class="field-link">手工艺</a>, 
                          <a href="https://www.behance.net/search?field=86" title="雕塑" class="field-link">雕塑</a>, 
                          <a href="https://www.behance.net/search?field=135" title="街头艺术" class="field-link">街头艺术</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="28570605" data-ordinal="4">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/28570605/Tea-and-fern" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/af18d528570605.55c747aa807ea.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/af18d528570605.55c747aa807ea.jpg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/af18d528570605.55c747aa807ea.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/af18d528570605.55c747aa807ea.jpg 2x" alt="Tea and fern">                      </picture>                    <noscript>&lt;img alt="Tea and fern" title="Tea and fern" src="https://mir-s3-cdn-cf.behance.net/projects/202/af18d528570605.55c747aa807ea.jpg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/28570605/Tea-and-fern" class="projectName cover-name-link">Tea and fern</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/udvanik">                
<span class="js-mini-profile" data-id="12697479">Anikó Udvari</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1439123695">35</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">514</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/6/2016">10/6/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=21" title="手工艺" class="field-link">手工艺</a>, 
                          <a href="https://www.behance.net/search?field=52" title="室内设计" class="field-link">室内设计</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="42091123" data-ordinal="5">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/42091123/Amanita-Beetle" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/1c6d4842091123.Y3JvcCw3MTUsNTYwLDAsMTg5.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/1c6d4842091123.Y3JvcCw3MTUsNTYwLDAsMTg5.jpg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/1c6d4842091123.Y3JvcCw3MTUsNTYwLDAsMTg5.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/1c6d4842091123.Y3JvcCw3MTUsNTYwLDAsMTg5.jpg 2x" alt="Amanita Beetle">                      </picture>                    <noscript>&lt;img alt="Amanita Beetle" title="Amanita Beetle" src="https://mir-s3-cdn-cf.behance.net/projects/202/1c6d4842091123.Y3JvcCw3MTUsNTYwLDAsMTg5.jpg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/42091123/Amanita-Beetle" class="projectName cover-name-link">Amanita Beetle</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/hine">                
<span class="js-mini-profile" data-id="231381">Hine Mizushima（水島ひね）</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1472198073">235</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">1362</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/5/2016">10/5/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=21" title="手工艺" class="field-link">手工艺</a>, 
                          <a href="https://www.behance.net/search?field=86" title="雕塑" class="field-link">雕塑</a>, 
                          <a href="https://www.behance.net/search?field=126" title="玩具设计" class="field-link">玩具设计</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="42612235" data-ordinal="6">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/42612235/Flamingo" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/ad661442612235.Y3JvcCwxMDk1LDg1Nyw1NDEsNDM.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/ad661442612235.Y3JvcCwxMDk1LDg1Nyw1NDEsNDM.jpg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/ad661442612235.Y3JvcCwxMDk1LDg1Nyw1NDEsNDM.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/ad661442612235.Y3JvcCwxMDk1LDg1Nyw1NDEsNDM.jpg 2x" alt="Flamingo">                      </picture>                    <noscript>&lt;img alt="Flamingo" title="Flamingo" src="https://mir-s3-cdn-cf.behance.net/projects/202/ad661442612235.Y3JvcCwxMDk1LDg1Nyw1NDEsNDM.jpg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/42612235/Flamingo" class="projectName cover-name-link">Flamingo</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/traceyellencameron">                
<span class="js-mini-profile" data-id="35913629">Tracey Cameron</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1473347294">64</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">596</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/4/2016">10/4/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=21" title="手工艺" class="field-link">手工艺</a>, 
                          <a href="https://www.behance.net/search?field=86" title="雕塑" class="field-link">雕塑</a>, 
                          <a href="https://www.behance.net/search?field=95" title="纺织品设计" class="field-link">纺织品设计</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>            </div>          </div>          <div class="category-row">            <div class="category-row-header">              <div class="category-label-wrap">                <h2 class="category-label"><a href="https://www.behance.net/galleries/1/Illustration">插图</a></h2>                <span class="rarr category-label-arrow">→</span>              </div>              <div class="category-link-wrap">                <a class="category-link" href="https://www.behance.net/galleries/1/Illustration">查看图库</a>                <span class="rarr category-link-arrow">→</span>              </div>            </div>            <div class="category-row-body cfix">                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="7920825">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/7920825/Avatar-The-Last-Airbender-Comic-Nickelodeon-Magazine" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/7920825.54748875c1b05.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/7920825.54748875c1b05.jpg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/7920825.54748875c1b05.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/7920825.54748875c1b05.jpg 2x" alt="Avatar: The Last Airbender Comic Nickelodeon Magazine">                      </picture>                    <noscript>&lt;img alt="Avatar: The Last Airbender Comic Nickelodeon Magazine" title="Avatar: The Last Airbender Comic Nickelodeon Magazine" src="https://mir-s3-cdn-cf.behance.net/projects/202/7920825.54748875c1b05.jpg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/7920825/Avatar-The-Last-Airbender-Comic-Nickelodeon-Magazine" class="projectName cover-name-link">Avatar: The Last Airbender Comic Nickelodeon Magazine</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/TomMcWeeney">                
<span class="js-mini-profile" data-id="974967">Tom McWeeney</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1364848782">158</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">1233</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/22/2016">10/22/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=9" title="漫画" class="field-link">漫画</a>, 
                          <a href="https://www.behance.net/search?field=48" title="插图" class="field-link">插图</a>, 
                          <a href="https://www.behance.net/search?field=91" title="故事板" class="field-link">故事板</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="21041063" data-ordinal="1">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/21041063/Ilustracion-infantil" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/ea61a921041063.Y3JvcCw2MDYsNDc0LDgyLDIy.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/ea61a921041063.Y3JvcCw2MDYsNDc0LDgyLDIy.jpg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/ea61a921041063.Y3JvcCw2MDYsNDc0LDgyLDIy.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/ea61a921041063.Y3JvcCw2MDYsNDc0LDgyLDIy.jpg 2x" alt="Ilustración infantil">                      </picture>                    <noscript>&lt;img alt="Ilustración infantil" title="Ilustración infantil" src="https://mir-s3-cdn-cf.behance.net/projects/202/ea61a921041063.Y3JvcCw2MDYsNDc0LDgyLDIy.jpg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/21041063/Ilustracion-infantil" class="projectName cover-name-link">Ilustración infantil</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/cajavelera">                
<span class="js-mini-profile" data-id="527831">Cajavelera - Navegamos sueños, ilustramos historias</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1415125218">17</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">82</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/22/2016">10/22/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=48" title="插图" class="field-link">插图</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="43730215" data-ordinal="2">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/43730215/Female-Form-I" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/8de6d343730215.Y3JvcCwxNDAzLDEwOTgsMCwxMTc.jpeg, https://mir-s3-cdn-cf.behance.net/projects/404/8de6d343730215.Y3JvcCwxNDAzLDEwOTgsMCwxMTc.jpeg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/8de6d343730215.Y3JvcCwxNDAzLDEwOTgsMCwxMTc.jpeg, https://mir-s3-cdn-cf.behance.net/projects/404/8de6d343730215.Y3JvcCwxNDAzLDEwOTgsMCwxMTc.jpeg 2x" alt="Female Form I.">                      </picture>                    <noscript>&lt;img alt="Female Form I." title="Female Form I." src="https://mir-s3-cdn-cf.behance.net/projects/202/8de6d343730215.Y3JvcCwxNDAzLDEwOTgsMCwxMTc.jpeg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/43730215/Female-Form-I" class="projectName cover-name-link">Female Form I.</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/Venkov">                
<span class="js-mini-profile" data-id="71910">Ivan Venkov</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1476059037">57</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">489</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/22/2016">10/22/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=122" title="数码艺术" class="field-link">数码艺术</a>, 
                          <a href="https://www.behance.net/search?field=112" title="美术" class="field-link">美术</a>, 
                          <a href="https://www.behance.net/search?field=86" title="雕塑" class="field-link">雕塑</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="43385185" data-ordinal="3">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/43385185/DOBLE-SS16-GRAPHICS" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/46b9f543385185.Y3JvcCw3NjUsNTk4LDMzMCww.png, https://mir-s3-cdn-cf.behance.net/projects/404/46b9f543385185.Y3JvcCw3NjUsNTk4LDMzMCww.png 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/46b9f543385185.Y3JvcCw3NjUsNTk4LDMzMCww.png, https://mir-s3-cdn-cf.behance.net/projects/404/46b9f543385185.Y3JvcCw3NjUsNTk4LDMzMCww.png 2x" alt="DOBLE SS16 GRAPHICS">                      </picture>                    <noscript>&lt;img alt="DOBLE SS16 GRAPHICS" title="DOBLE SS16 GRAPHICS" src="https://mir-s3-cdn-cf.behance.net/projects/202/46b9f543385185.Y3JvcCw3NjUsNTk4LDMzMCww.png" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/43385185/DOBLE-SS16-GRAPHICS" class="projectName cover-name-link">DOBLE SS16 GRAPHICS</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/ekiem">                
<span class="js-mini-profile" data-id="517462">EKIEM .</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1475151762">156</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">908</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/22/2016">10/22/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=44" title="图形设计" class="field-link">图形设计</a>, 
                          <a href="https://www.behance.net/search?field=48" title="插图" class="field-link">插图</a>, 
                          <a href="https://www.behance.net/search?field=109" title="品牌推广" class="field-link">品牌推广</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="24981827" data-ordinal="4">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/24981827/-In-the-place-of-my-memories" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/82f3af24981827.Y3JvcCw1MzcsNDIxLDYyLDEy.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/82f3af24981827.Y3JvcCw1MzcsNDIxLDYyLDEy.jpg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/82f3af24981827.Y3JvcCw1MzcsNDIxLDYyLDEy.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/82f3af24981827.Y3JvcCw1MzcsNDIxLDYyLDEy.jpg 2x" alt="在能被记忆看到的地方 In the place of my memories">                      </picture>                    <noscript>&lt;img alt="在能被记忆看到的地方 In the place of my memories" title="在能被记忆看到的地方 In the place of my memories" src="https://mir-s3-cdn-cf.behance.net/projects/202/82f3af24981827.Y3JvcCw1MzcsNDIxLDYyLDEy.jpg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/24981827/-In-the-place-of-my-memories" class="projectName cover-name-link">在能被记忆看到的地方 In the place of my memories</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/qulan">                
<span class="js-mini-profile" data-id="2779083">QU LAN</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1427879613">55</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">322</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/22/2016">10/22/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=122" title="数码艺术" class="field-link">数码艺术</a>, 
                          <a href="https://www.behance.net/search?field=110" title="绘图" class="field-link">绘图</a>, 
                          <a href="https://www.behance.net/search?field=48" title="插图" class="field-link">插图</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="43863197" data-ordinal="5">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/43863197/SkullyJuly-2-Pt3-(2015)" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/bf9b1243863197.Y3JvcCw3MzAsNTcyLDE0MiwzNg.jpeg, https://mir-s3-cdn-cf.behance.net/projects/404/bf9b1243863197.Y3JvcCw3MzAsNTcyLDE0MiwzNg.jpeg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/bf9b1243863197.Y3JvcCw3MzAsNTcyLDE0MiwzNg.jpeg, https://mir-s3-cdn-cf.behance.net/projects/404/bf9b1243863197.Y3JvcCw3MzAsNTcyLDE0MiwzNg.jpeg 2x" alt="#SkullyJuly 2 Pt.3 (2015)">                      </picture>                    <noscript>&lt;img alt="#SkullyJuly 2 Pt.3 (2015)" title="#SkullyJuly 2 Pt.3 (2015)" src="https://mir-s3-cdn-cf.behance.net/projects/202/bf9b1243863197.Y3JvcCw3MzAsNTcyLDE0MiwzNg.jpeg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/43863197/SkullyJuly-2-Pt3-(2015)" class="projectName cover-name-link">#SkullyJuly 2 Pt.3 (2015)</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/nitrouzzz">                
<span class="js-mini-profile" data-id="316707">Andrey Pridybaylo</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1476357710">179</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">610</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/22/2016">10/22/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=110" title="绘图" class="field-link">绘图</a>, 
                          <a href="https://www.behance.net/search?field=124" title="人物设计" class="field-link">人物设计</a>, 
                          <a href="https://www.behance.net/search?field=112" title="美术" class="field-link">美术</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="24861713" data-ordinal="6">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/24861713/Postcards" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/242f5424861713.5515acdd4214a.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/242f5424861713.5515acdd4214a.jpg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/242f5424861713.5515acdd4214a.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/242f5424861713.5515acdd4214a.jpg 2x" alt="Postcards!">                      </picture>                    <noscript>&lt;img alt="Postcards!" title="Postcards!" src="https://mir-s3-cdn-cf.behance.net/projects/202/242f5424861713.5515acdd4214a.jpg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/24861713/Postcards" class="projectName cover-name-link">Postcards!</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/ragnarama">                
<span class="js-mini-profile" data-id="2002379">Brandon Johnson</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1427483949">292</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">2468</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/22/2016">10/22/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=109" title="品牌推广" class="field-link">品牌推广</a>, 
                          <a href="https://www.behance.net/search?field=124" title="人物设计" class="field-link">人物设计</a>, 
                          <a href="https://www.behance.net/search?field=48" title="插图" class="field-link">插图</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>            </div>          </div>          <div class="category-row">            <div class="category-row-header">              <div class="category-label-wrap">                <h2 class="category-label"><a href="https://www.behance.net/galleries/3/Fashion">时尚</a></h2>                <span class="rarr category-label-arrow">→</span>              </div>              <div class="category-link-wrap">                <a class="category-link" href="https://www.behance.net/galleries/3/Fashion">查看图库</a>                <span class="rarr category-link-arrow">→</span>              </div>            </div>            <div class="category-row-body cfix">                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="43594591">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/43594591/WALK-THIS-WAY-SCHOEN" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/3ab89f43594591.Y3JvcCw4MjksNjQ5LDIyLDA.jpeg, https://mir-s3-cdn-cf.behance.net/projects/404/3ab89f43594591.Y3JvcCw4MjksNjQ5LDIyLDA.jpeg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/3ab89f43594591.Y3JvcCw4MjksNjQ5LDIyLDA.jpeg, https://mir-s3-cdn-cf.behance.net/projects/404/3ab89f43594591.Y3JvcCw4MjksNjQ5LDIyLDA.jpeg 2x" alt="WALK THIS WAY | SCHÖN!">                      </picture>                    <noscript>&lt;img alt="WALK THIS WAY | SCHÖN!" title="WALK THIS WAY | SCHÖN!" src="https://mir-s3-cdn-cf.behance.net/projects/202/3ab89f43594591.Y3JvcCw4MjksNjQ5LDIyLDA.jpeg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/43594591/WALK-THIS-WAY-SCHOEN" class="projectName cover-name-link">WALK THIS WAY | SCHÖN!</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/emilysoto">                
<span class="js-mini-profile" data-id="234399">Emily Soto</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1475686835">70</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">495</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/23/2016">10/23/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=37" title="时尚" class="field-link">时尚</a>, 
                          <a href="https://www.behance.net/search?field=73" title="摄影" class="field-link">摄影</a>, 
                          <a href="https://www.behance.net/search?field=27" title="数码摄影" class="field-link">数码摄影</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="33806710" data-ordinal="1">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/33806710/Kestin-Hare-SS16-Campaign-A-bigger-splash" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/3871de33806710.Y3JvcCwxMjgxLDEwMDAsMCwxOTE.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/3871de33806710.Y3JvcCwxMjgxLDEwMDAsMCwxOTE.jpg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/3871de33806710.Y3JvcCwxMjgxLDEwMDAsMCwxOTE.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/3871de33806710.Y3JvcCwxMjgxLDEwMDAsMCwxOTE.jpg 2x" alt="Kestin Hare SS16 Campaign - A bigger splash">                      </picture>                    <noscript>&lt;img alt="Kestin Hare SS16 Campaign - A bigger splash" title="Kestin Hare SS16 Campaign - A bigger splash" src="https://mir-s3-cdn-cf.behance.net/projects/202/3871de33806710.Y3JvcCwxMjgxLDEwMDAsMCwxOTE.jpg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/33806710/Kestin-Hare-SS16-Campaign-A-bigger-splash" class="projectName cover-name-link">Kestin Hare SS16 Campaign - A bigger splash</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/tibor_galamb">                
<span class="js-mini-profile" data-id="2588621">Tibor Galamb</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1455023445">42</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">398</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/22/2016">10/22/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=5" title="艺术指导" class="field-link">艺术指导</a>, 
                          <a href="https://www.behance.net/search?field=37" title="时尚" class="field-link">时尚</a>, 
                          <a href="https://www.behance.net/search?field=73" title="摄影" class="field-link">摄影</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="33351047" data-ordinal="2">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/33351047/Dangerous-shades-Ellements-Magazine-012016" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/00824733351047.Y3JvcCwyNzE4LDIxMjMsMCw4ODk.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/00824733351047.Y3JvcCwyNzE4LDIxMjMsMCw4ODk.jpg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/00824733351047.Y3JvcCwyNzE4LDIxMjMsMCw4ODk.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/00824733351047.Y3JvcCwyNzE4LDIxMjMsMCw4ODk.jpg 2x" alt="&quot;Dangerous shades&quot; Ellements Magazine 01/2016">                      </picture>                    <noscript>&lt;img alt="&amp;quot;Dangerous shades&amp;quot; Ellements Magazine 01/2016" title="&amp;quot;Dangerous shades&amp;quot; Ellements Magazine 01/2016" src="https://mir-s3-cdn-cf.behance.net/projects/202/00824733351047.Y3JvcCwyNzE4LDIxMjMsMCw4ODk.jpg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/33351047/Dangerous-shades-Ellements-Magazine-012016" class="projectName cover-name-link">"Dangerous shades" Ellements Magazine 01/2016</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link multiple-cover-by">                          <span class="cover-by">作者</span>                          <span class="multiple-owners-list tooltipi-container">                            多个所有者<ul class="tooltipi tooltipi-white-links">                              <li class="clear">                                <a class="multiple-owner-link" href="https://www.behance.net/nastyaretouch">                
                                    <span class="multiple-owner-image-container"><img class="multiple-owner-image js-mini-profile" data-id="12729613" src="./style/img/895bc612729613.56964cb140460.jpg"></span><span class="js-mini-profile" data-id="12729613">Anastasia Kuchma</span>                                </a>                
                              </li>                              <li class="clear">                                <a class="multiple-owner-link" href="https://www.behance.net/veronicaformos">                
                                    <span class="multiple-owner-image-container"><img class="multiple-owner-image js-mini-profile" data-id="5528219" src="./style/img/5528219.53c2ba676f98b.jpg"></span><span class="js-mini-profile" data-id="5528219">Veronica Formos</span>                                </a>                
                              </li>                          </ul>                          </span>                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1453895219">22</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">166</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/22/2016">10/22/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=136" title="修图" class="field-link">修图</a>, 
                          <a href="https://www.behance.net/search?field=59" title="化妆艺术 (MUA)" class="field-link">化妆艺术 (MUA)</a>, 
                          <a href="https://www.behance.net/search?field=73" title="摄影" class="field-link">摄影</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="43936269" data-ordinal="3">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/43936269/Flora" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/ce2ef243936269.Y3JvcCw4MDEsNjI3LDAsODE.jpeg, https://mir-s3-cdn-cf.behance.net/projects/404/ce2ef243936269.Y3JvcCw4MDEsNjI3LDAsODE.jpeg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/ce2ef243936269.Y3JvcCw4MDEsNjI3LDAsODE.jpeg, https://mir-s3-cdn-cf.behance.net/projects/404/ce2ef243936269.Y3JvcCw4MDEsNjI3LDAsODE.jpeg 2x" alt="Flora">                      </picture>                    <noscript>&lt;img alt="Flora" title="Flora" src="https://mir-s3-cdn-cf.behance.net/projects/202/ce2ef243936269.Y3JvcCw4MDEsNjI3LDAsODE.jpeg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/43936269/Flora" class="projectName cover-name-link">Flora</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/belinskaya">                
<span class="js-mini-profile" data-id="4341117">Ekaterina Belinskaya</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1476538916">129</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">519</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/22/2016">10/22/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=5" title="艺术指导" class="field-link">艺术指导</a>, 
                          <a href="https://www.behance.net/search?field=136" title="修图" class="field-link">修图</a>, 
                          <a href="https://www.behance.net/search?field=27" title="数码摄影" class="field-link">数码摄影</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="25458041" data-ordinal="4">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/25458041/Emma-A-at-Modellink" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/3c1ad525458041.55329833e8bf8.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/3c1ad525458041.55329833e8bf8.jpg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/3c1ad525458041.55329833e8bf8.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/3c1ad525458041.55329833e8bf8.jpg 2x" alt="Emma Å at Modellink">                      </picture>                    <noscript>&lt;img alt="Emma Å at Modellink" title="Emma Å at Modellink" src="https://mir-s3-cdn-cf.behance.net/projects/202/3c1ad525458041.55329833e8bf8.jpg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/25458041/Emma-A-at-Modellink" class="projectName cover-name-link">Emma Å at Modellink</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/themisspopo">                
<span class="js-mini-profile" data-id="114834">Polina Vinogradova</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1429379301">80</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">656</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/21/2016">10/21/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=37" title="时尚" class="field-link">时尚</a>, 
                          <a href="https://www.behance.net/search?field=73" title="摄影" class="field-link">摄影</a>, 
                          <a href="https://www.behance.net/search?field=136" title="修图" class="field-link">修图</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="30393865" data-ordinal="5">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/30393865/BRITISH" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/e94d0730393865.5620b4bfee1a3.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/e94d0730393865.5620b4bfee1a3.jpg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/e94d0730393865.5620b4bfee1a3.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/e94d0730393865.5620b4bfee1a3.jpg 2x" alt="BRITISH">                      </picture>                    <noscript>&lt;img alt="BRITISH" title="BRITISH" src="https://mir-s3-cdn-cf.behance.net/projects/202/e94d0730393865.5620b4bfee1a3.jpg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/30393865/BRITISH" class="projectName cover-name-link">BRITISH</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/joseherrera2012">                
<span class="js-mini-profile" data-id="834027">Jose Herrera</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1444984093">136</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">1522</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/21/2016">10/21/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=37" title="时尚" class="field-link">时尚</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="28861049" data-ordinal="6">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/28861049/Bronze" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/57510628861049.55d5d31931910.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/57510628861049.55d5d31931910.jpg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/57510628861049.55d5d31931910.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/57510628861049.55d5d31931910.jpg 2x" alt="Bronze">                      </picture>                    <noscript>&lt;img alt="Bronze" title="Bronze" src="https://mir-s3-cdn-cf.behance.net/projects/202/57510628861049.55d5d31931910.jpg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/28861049/Bronze" class="projectName cover-name-link">Bronze</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/KobrinPhoto">                
<span class="js-mini-profile" data-id="16885283">Nikita&amp;Olga Kobrin</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1440077444">60</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">532</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/21/2016">10/21/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=37" title="时尚" class="field-link">时尚</a>, 
                          <a href="https://www.behance.net/search?field=59" title="化妆艺术 (MUA)" class="field-link">化妆艺术 (MUA)</a>, 
                          <a href="https://www.behance.net/search?field=73" title="摄影" class="field-link">摄影</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>            </div>          </div>          <div class="category-row">            <div class="category-row-header">              <div class="category-label-wrap">                <h2 class="category-label"><a href="https://www.behance.net/galleries/8/Interaction">交互</a></h2>                <span class="rarr category-label-arrow">→</span>              </div>              <div class="category-link-wrap">                <a class="category-link" href="https://www.behance.net/galleries/8/Interaction">查看图库</a>                <span class="rarr category-link-arrow">→</span>              </div>            </div>            <div class="category-row-body cfix">                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="42272523">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/42272523/Tommy-Brown-2016" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/463c1a42272523.Y3JvcCw3NjgsNjAxLDE3LDA.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/463c1a42272523.Y3JvcCw3NjgsNjAxLDE3LDA.jpg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/463c1a42272523.Y3JvcCw3NjgsNjAxLDE3LDA.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/463c1a42272523.Y3JvcCw3NjgsNjAxLDE3LDA.jpg 2x" alt="Tommy Brown 2016">                      </picture>                    <noscript>&lt;img alt="Tommy Brown 2016" title="Tommy Brown 2016" src="https://mir-s3-cdn-cf.behance.net/projects/202/463c1a42272523.Y3JvcCw3NjgsNjAxLDE3LDA.jpg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/42272523/Tommy-Brown-2016" class="projectName cover-name-link">Tommy Brown 2016</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link multiple-cover-by">                          <span class="cover-by">作者</span>                          <span class="multiple-owners-list tooltipi-container">                            多个所有者<ul class="tooltipi tooltipi-white-links">                              <li class="clear">                                <a class="multiple-owner-link" href="https://www.behance.net/dzaplava168a">                
                                    <span class="multiple-owner-image-container"><img class="multiple-owner-image js-mini-profile" data-id="995297" src="./style/img/995297.54c01d3ea47f3.jpg"></span><span class="js-mini-profile" data-id="995297">Dmitry Zaplava</span>                                </a>                
                              </li>                              <li class="clear">                                <a class="multiple-owner-link" href="https://www.behance.net/Eugene_Tiodorov">                
                                    <span class="multiple-owner-image-container"><img class="multiple-owner-image js-mini-profile" data-id="17853831" src="./style/img/5af6bf17853831.57177307d63ee.png"></span><span class="js-mini-profile" data-id="17853831">Eugene Tiodorov</span>                                </a>                
                              </li>                          </ul>                          </span>                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1472662464">1187</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">11049</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/22/2016">10/22/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=5" title="艺术指导" class="field-link">艺术指导</a>, 
                          <a href="https://www.behance.net/search?field=132" title="用户界面/用户体验" class="field-link">用户界面/用户体验</a>, 
                          <a href="https://www.behance.net/search?field=102" title="网页设计" class="field-link">网页设计</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="42150973" data-ordinal="1">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/42150973/Dot-Architect-Company" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/241ab442150973.Y3JvcCwxMTQ4LDg5OSwxMTMsMg.png, https://mir-s3-cdn-cf.behance.net/projects/404/241ab442150973.Y3JvcCwxMTQ4LDg5OSwxMTMsMg.png 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/241ab442150973.Y3JvcCwxMTQ4LDg5OSwxMTMsMg.png, https://mir-s3-cdn-cf.behance.net/projects/404/241ab442150973.Y3JvcCwxMTQ4LDg5OSwxMTMsMg.png 2x" alt="Dot. Architect Company.">                      </picture>                    <noscript>&lt;img alt="Dot. Architect Company." title="Dot. Architect Company." src="https://mir-s3-cdn-cf.behance.net/projects/202/241ab442150973.Y3JvcCwxMTQ4LDg5OSwxMTMsMg.png" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/42150973/Dot-Architect-Company" class="projectName cover-name-link">Dot. Architect Company.</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/colloum">                
<span class="js-mini-profile" data-id="15547627">Alexey Ivanov</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1472388056">1440</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">10527</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/22/2016">10/22/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=5" title="艺术指导" class="field-link">艺术指导</a>, 
                          <a href="https://www.behance.net/search?field=102" title="网页设计" class="field-link">网页设计</a>, 
                          <a href="https://www.behance.net/search?field=132" title="用户界面/用户体验" class="field-link">用户界面/用户体验</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="32512367" data-ordinal="2">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/32512367/DNA-Modeling" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/c77c5932512367.Y3JvcCw0MDQsMzE2LDUsMA.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/c77c5932512367.Y3JvcCw0MDQsMzE2LDUsMA.jpg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/c77c5932512367.Y3JvcCw0MDQsMzE2LDUsMA.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/c77c5932512367.Y3JvcCw0MDQsMzE2LDUsMA.jpg 2x" alt="DNA Modeling">                      </picture>                    <noscript>&lt;img alt="DNA Modeling" title="DNA Modeling" src="https://mir-s3-cdn-cf.behance.net/projects/202/c77c5932512367.Y3JvcCw0MDQsMzE2LDUsMA.jpg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/32512367/DNA-Modeling" class="projectName cover-name-link">DNA Modeling</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/evanrochon">                
<span class="js-mini-profile" data-id="8214917">Evan Rochon</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1452026389">323</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">3057</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/22/2016">10/22/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=109" title="品牌推广" class="field-link">品牌推广</a>, 
                          <a href="https://www.behance.net/search?field=132" title="用户界面/用户体验" class="field-link">用户界面/用户体验</a>, 
                          <a href="https://www.behance.net/search?field=102" title="网页设计" class="field-link">网页设计</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="42501921" data-ordinal="3">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/42501921/Kellys-Bicycles-Redesign" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/fa189842501921.Y3JvcCw4MDEsNjI3LDAsMA.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/fa189842501921.Y3JvcCw4MDEsNjI3LDAsMA.jpg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/fa189842501921.Y3JvcCw4MDEsNjI3LDAsMA.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/fa189842501921.Y3JvcCw4MDEsNjI3LDAsMA.jpg 2x" alt="Kellys Bicycles Redesign">                      </picture>                    <noscript>&lt;img alt="Kellys Bicycles Redesign" title="Kellys Bicycles Redesign" src="https://mir-s3-cdn-cf.behance.net/projects/202/fa189842501921.Y3JvcCw4MDEsNjI3LDAsMA.jpg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/42501921/Kellys-Bicycles-Redesign" class="projectName cover-name-link">Kellys Bicycles Redesign</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/Lukas">                
<span class="js-mini-profile" data-id="79455">Lukas Majzlan</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1473236829">559</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">5921</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/22/2016">10/22/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=51" title="交互设计" class="field-link">交互设计</a>, 
                          <a href="https://www.behance.net/search?field=132" title="用户界面/用户体验" class="field-link">用户界面/用户体验</a>, 
                          <a href="https://www.behance.net/search?field=102" title="网页设计" class="field-link">网页设计</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="43614737" data-ordinal="4">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/43614737/Handrew-Stickers-for-iMessage" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/6f1dc943614737.Y3JvcCw0NDQsMzQ3LDg0LDg0.jpeg, https://mir-s3-cdn-cf.behance.net/projects/404/6f1dc943614737.Y3JvcCw0NDQsMzQ3LDg0LDg0.jpeg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/6f1dc943614737.Y3JvcCw0NDQsMzQ3LDg0LDg0.jpeg, https://mir-s3-cdn-cf.behance.net/projects/404/6f1dc943614737.Y3JvcCw0NDQsMzQ3LDg0LDg0.jpeg 2x" alt="Handrew Stickers for iMessage">                      </picture>                    <noscript>&lt;img alt="Handrew Stickers for iMessage" title="Handrew Stickers for iMessage" src="https://mir-s3-cdn-cf.behance.net/projects/202/6f1dc943614737.Y3JvcCw0NDQsMzQ3LDg0LDg0.jpeg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/43614737/Handrew-Stickers-for-iMessage" class="projectName cover-name-link">Handrew Stickers for iMessage</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/TokyoCandies">                
<span class="js-mini-profile" data-id="92474">Rubens Cantuni</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1475732654">134</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">901</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/22/2016">10/22/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=48" title="插图" class="field-link">插图</a>, 
                          <a href="https://www.behance.net/search?field=124" title="人物设计" class="field-link">人物设计</a>, 
                          <a href="https://www.behance.net/search?field=131" title="图标设计" class="field-link">图标设计</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="41857641" data-ordinal="5">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/41857641/Communigate" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/12e78841857641.Y3JvcCwxMzQ1LDEwNTMsMCww.png, https://mir-s3-cdn-cf.behance.net/projects/404/12e78841857641.Y3JvcCwxMzQ1LDEwNTMsMCww.png 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/12e78841857641.Y3JvcCwxMzQ1LDEwNTMsMCww.png, https://mir-s3-cdn-cf.behance.net/projects/404/12e78841857641.Y3JvcCwxMzQ1LDEwNTMsMCww.png 2x" alt="Communigate">                      </picture>                    <noscript>&lt;img alt="Communigate" title="Communigate" src="https://mir-s3-cdn-cf.behance.net/projects/202/12e78841857641.Y3JvcCwxMzQ1LDEwNTMsMCww.png" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/41857641/Communigate" class="projectName cover-name-link">Communigate</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link multiple-cover-by">                          <span class="cover-by">作者</span>                          <span class="multiple-owners-list tooltipi-container">                            多个所有者<ul class="tooltipi tooltipi-white-links">                              <li class="clear">                                <a class="multiple-owner-link" href="https://www.behance.net/jostttt">                
                                    <span class="multiple-owner-image-container"><img class="multiple-owner-image js-mini-profile" data-id="1926965" src="./style/img/1926965.53b6d6d70d042.jpg"></span><span class="js-mini-profile" data-id="1926965">Aleksandr Zagoliuk</span>                                </a>                
                              </li>                              <li class="clear">                                <a class="multiple-owner-link" href="https://www.behance.net/jaffat">                
                                    <span class="multiple-owner-image-container"><img class="multiple-owner-image js-mini-profile" data-id="9470135" src="./style/img/0f9b6f9470135.5540f3fe2a727.jpg"></span><span class="js-mini-profile" data-id="9470135">Andrii Denysov</span>                                </a>                
                              </li>                          </ul>                          </span>                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1471606434">803</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">7012</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/21/2016">10/21/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=102" title="网页设计" class="field-link">网页设计</a>, 
                          <a href="https://www.behance.net/search?field=132" title="用户界面/用户体验" class="field-link">用户界面/用户体验</a>, 
                          <a href="https://www.behance.net/search?field=51" title="交互设计" class="field-link">交互设计</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="42000199" data-ordinal="6">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/42000199/Freebie-UNUM-Free-PSD-portfolio-template" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/fb5bfd42000199.Y3JvcCwxNjIwLDEyNjgsMCww.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/fb5bfd42000199.Y3JvcCwxNjIwLDEyNjgsMCww.jpg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/fb5bfd42000199.Y3JvcCwxNjIwLDEyNjgsMCww.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/fb5bfd42000199.Y3JvcCwxNjIwLDEyNjgsMCww.jpg 2x" alt="Freebie | UNUM. Free PSD / portfolio template">                      </picture>                    <noscript>&lt;img alt="Freebie | UNUM. Free PSD / portfolio template" title="Freebie | UNUM. Free PSD / portfolio template" src="https://mir-s3-cdn-cf.behance.net/projects/202/fb5bfd42000199.Y3JvcCwxNjIwLDEyNjgsMCww.jpg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/42000199/Freebie-UNUM-Free-PSD-portfolio-template" class="projectName cover-name-link">Freebie | UNUM. Free PSD / portfolio template</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/iamfrankeu">                
<span class="js-mini-profile" data-id="2751825">Frank van Deursen</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1471986870">366</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">2948</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/21/2016">10/21/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=51" title="交互设计" class="field-link">交互设计</a>, 
                          <a href="https://www.behance.net/search?field=132" title="用户界面/用户体验" class="field-link">用户界面/用户体验</a>, 
                          <a href="https://www.behance.net/search?field=102" title="网页设计" class="field-link">网页设计</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>            </div>          </div>          <div class="category-row">            <div class="category-row-header">              <div class="category-label-wrap">                <h2 class="category-label"><a href="https://www.behance.net/galleries/10/Fine-Arts">美术</a></h2>                <span class="rarr category-label-arrow">→</span>              </div>              <div class="category-link-wrap">                <a class="category-link" href="https://www.behance.net/galleries/10/Fine-Arts">查看图库</a>                <span class="rarr category-link-arrow">→</span>              </div>            </div>            <div class="category-row-body cfix">                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="33846268">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/33846268/HARVARD-BUSINESS-REVIEW-AWARDS" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/76a44233846268.Y3JvcCw0NDUyLDM0ODMsNDk4LDQyMw.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/76a44233846268.Y3JvcCw0NDUyLDM0ODMsNDk4LDQyMw.jpg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/76a44233846268.Y3JvcCw0NDUyLDM0ODMsNDk4LDQyMw.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/76a44233846268.Y3JvcCw0NDUyLDM0ODMsNDk4LDQyMw.jpg 2x" alt="HARVARD BUSINESS  REVIEW AWARDS">                      </picture>                    <noscript>&lt;img alt="HARVARD BUSINESS  REVIEW AWARDS" title="HARVARD BUSINESS  REVIEW AWARDS" src="https://mir-s3-cdn-cf.behance.net/projects/202/76a44233846268.Y3JvcCw0NDUyLDM0ODMsNDk4LDQyMw.jpg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/33846268/HARVARD-BUSINESS-REVIEW-AWARDS" class="projectName cover-name-link">HARVARD BUSINESS  REVIEW AWARDS</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/alperaydinn">                
<span class="js-mini-profile" data-id="4285941">ALPER AYDIN</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1455050739">54</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">274</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/21/2016">10/21/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=112" title="美术" class="field-link">美术</a>, 
                          <a href="https://www.behance.net/search?field=86" title="雕塑" class="field-link">雕塑</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="43596231" data-ordinal="1">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/43596231/Ping-Pong-Auto-Shack" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/10193d43596231.Y3JvcCw0MDI0LDMxNDksODc0LDM0Nw.jpeg, https://mir-s3-cdn-cf.behance.net/projects/404/10193d43596231.Y3JvcCw0MDI0LDMxNDksODc0LDM0Nw.jpeg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/10193d43596231.Y3JvcCw0MDI0LDMxNDksODc0LDM0Nw.jpeg, https://mir-s3-cdn-cf.behance.net/projects/404/10193d43596231.Y3JvcCw0MDI0LDMxNDksODc0LDM0Nw.jpeg 2x" alt="Ping Pong Auto Shack">                      </picture>                    <noscript>&lt;img alt="Ping Pong Auto Shack" title="Ping Pong Auto Shack" src="https://mir-s3-cdn-cf.behance.net/projects/202/10193d43596231.Y3JvcCw0MDI0LDMxNDksODc0LDM0Nw.jpeg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/43596231/Ping-Pong-Auto-Shack" class="projectName cover-name-link">Ping Pong Auto Shack</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/Yokyoker">                
<span class="js-mini-profile" data-id="86683">YOK and SHERYO .</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1475689343">257</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">1341</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/20/2016">10/20/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=48" title="插图" class="field-link">插图</a>, 
                          <a href="https://www.behance.net/search?field=52" title="室内设计" class="field-link">室内设计</a>, 
                          <a href="https://www.behance.net/search?field=135" title="街头艺术" class="field-link">街头艺术</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="31600151" data-ordinal="2">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/31600151/Cubic-Geometry-iii" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/10d33931600151.Y3JvcCwyODc3LDIyNDksMTM4LDQxOQ.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/10d33931600151.Y3JvcCwyODc3LDIyNDksMTM4LDQxOQ.jpg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/10d33931600151.Y3JvcCwyODc3LDIyNDksMTM4LDQxOQ.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/10d33931600151.Y3JvcCwyODc3LDIyNDksMTM4LDQxOQ.jpg 2x" alt="Cubic Geometry iii">                      </picture>                    <noscript>&lt;img alt="Cubic Geometry iii" title="Cubic Geometry iii" src="https://mir-s3-cdn-cf.behance.net/projects/202/10d33931600151.Y3JvcCwyODc3LDIyNDksMTM4LDQxOQ.jpg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/31600151/Cubic-Geometry-iii" class="projectName cover-name-link">Cubic Geometry iii</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/DavidUmemoto">                
<span class="js-mini-profile" data-id="1107451">DAVID UMEMOTO</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1448860579">122</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">571</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/19/2016">10/19/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=4" title="建筑" class="field-link">建筑</a>, 
                          <a href="https://www.behance.net/search?field=86" title="雕塑" class="field-link">雕塑</a>, 
                          <a href="https://www.behance.net/search?field=112" title="美术" class="field-link">美术</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="43173895" data-ordinal="3">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/43173895/DEEP" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/e374a243173895.Y3JvcCw3NzIsNjA0LDAsMjQ0.jpeg, https://mir-s3-cdn-cf.behance.net/projects/404/e374a243173895.Y3JvcCw3NzIsNjA0LDAsMjQ0.jpeg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/e374a243173895.Y3JvcCw3NzIsNjA0LDAsMjQ0.jpeg, https://mir-s3-cdn-cf.behance.net/projects/404/e374a243173895.Y3JvcCw3NzIsNjA0LDAsMjQ0.jpeg 2x" alt="DEEP">                      </picture>                    <noscript>&lt;img alt="DEEP" title="DEEP" src="https://mir-s3-cdn-cf.behance.net/projects/202/e374a243173895.Y3JvcCw3NzIsNjA0LDAsMjQ0.jpeg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/43173895/DEEP" class="projectName cover-name-link">DEEP</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/doya">                
<span class="js-mini-profile" data-id="719024">Felipe Bedoya</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1476039519">320</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">1660</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/18/2016">10/18/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=73" title="摄影" class="field-link">摄影</a>, 
                          <a href="https://www.behance.net/search?field=59" title="化妆艺术 (MUA)" class="field-link">化妆艺术 (MUA)</a>, 
                          <a href="https://www.behance.net/search?field=112" title="美术" class="field-link">美术</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="38764811" data-ordinal="4">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/38764811/glaze" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/db6d0738764811.576dbd71ca3fd.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/db6d0738764811.576dbd71ca3fd.jpg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/db6d0738764811.576dbd71ca3fd.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/db6d0738764811.576dbd71ca3fd.jpg 2x" alt="glaze">                      </picture>                    <noscript>&lt;img alt="glaze" title="glaze" src="https://mir-s3-cdn-cf.behance.net/projects/202/db6d0738764811.576dbd71ca3fd.jpg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/38764811/glaze" class="projectName cover-name-link">glaze</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/chaoharnkafc94">                
<span class="js-mini-profile" data-id="13101523">harn kae Chao 曹涵凱</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1466809715">55</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">399</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/17/2016">10/17/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=112" title="美术" class="field-link">美术</a>, 
                          <a href="https://www.behance.net/search?field=86" title="雕塑" class="field-link">雕塑</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="41530127" data-ordinal="5">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/41530127/In-Feudum-Perpetuo" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/51f59941530127.Y3JvcCw1NDgsNDI5LDg5LDU1Mg.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/51f59941530127.Y3JvcCw1NDgsNDI5LDg5LDU1Mg.jpg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/51f59941530127.Y3JvcCw1NDgsNDI5LDg5LDU1Mg.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/51f59941530127.Y3JvcCw1NDgsNDI5LDg5LDU1Mg.jpg 2x" alt="&#39;In Feudum Perpetuo&#39;">                      </picture>                    <noscript>&lt;img alt="'In Feudum Perpetuo'" title="'In Feudum Perpetuo'" src="https://mir-s3-cdn-cf.behance.net/projects/202/51f59941530127.Y3JvcCw1NDgsNDI5LDg5LDU1Mg.jpg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/41530127/In-Feudum-Perpetuo" class="projectName cover-name-link">'In Feudum Perpetuo'</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/samuelgomez">                
<span class="js-mini-profile" data-id="376681">Samuel Gomez</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1470752869">462</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">1836</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/14/2016">10/14/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=110" title="绘图" class="field-link">绘图</a>, 
                          <a href="https://www.behance.net/search?field=112" title="美术" class="field-link">美术</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="43723019" data-ordinal="6">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/43723019/Yeezy-Boost-Glitch-Sculpture" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/0a59e543723019.Y3JvcCwxMDA5LDc5MCwxOTcsMA.jpeg, https://mir-s3-cdn-cf.behance.net/projects/404/0a59e543723019.Y3JvcCwxMDA5LDc5MCwxOTcsMA.jpeg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/0a59e543723019.Y3JvcCwxMDA5LDc5MCwxOTcsMA.jpeg, https://mir-s3-cdn-cf.behance.net/projects/404/0a59e543723019.Y3JvcCwxMDA5LDc5MCwxOTcsMA.jpeg 2x" alt="Yeezy Boost Glitch Sculpture">                      </picture>                    <noscript>&lt;img alt="Yeezy Boost Glitch Sculpture" title="Yeezy Boost Glitch Sculpture" src="https://mir-s3-cdn-cf.behance.net/projects/202/0a59e543723019.Y3JvcCwxMDA5LDc5MCwxOTcsMA.jpeg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/43723019/Yeezy-Boost-Glitch-Sculpture" class="projectName cover-name-link">Yeezy Boost Glitch Sculpture</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/ShaneGriffin">                
<span class="js-mini-profile" data-id="618512">Shane Griffin</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1476038033">84</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">822</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/13/2016">10/13/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=4" title="建筑" class="field-link">建筑</a>, 
                          <a href="https://www.behance.net/search?field=112" title="美术" class="field-link">美术</a>, 
                          <a href="https://www.behance.net/search?field=86" title="雕塑" class="field-link">雕塑</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>            </div>          </div>          <div class="category-row">            <div class="category-row-header">              <div class="category-label-wrap">                <h2 class="category-label"><a href="https://www.behance.net/galleries/4/Motion">动画</a></h2>                <span class="rarr category-label-arrow">→</span>              </div>              <div class="category-link-wrap">                <a class="category-link" href="https://www.behance.net/galleries/4/Motion">查看图库</a>                <span class="rarr category-link-arrow">→</span>              </div>            </div>            <div class="category-row-body cfix">                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="35503265">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/35503265/Larse-On-Canvas" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/7ec10835503265.Y3JvcCw1NDgsNDI5LDIyLDA.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/7ec10835503265.Y3JvcCw1NDgsNDI5LDIyLDA.jpg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/7ec10835503265.Y3JvcCw1NDgsNDI5LDIyLDA.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/7ec10835503265.Y3JvcCw1NDgsNDI5LDIyLDA.jpg 2x" alt="Larse - On Canvas">                      </picture>                    <noscript>&lt;img alt="Larse - On Canvas" title="Larse - On Canvas" src="https://mir-s3-cdn-cf.behance.net/projects/202/7ec10835503265.Y3JvcCw1NDgsNDI5LDIyLDA.jpg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/35503265/Larse-On-Canvas" class="projectName cover-name-link">Larse - On Canvas</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/vincentschwenk">                
<span class="js-mini-profile" data-id="1435617">Vincent Schwenk</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1462977294">70</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">433</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/22/2016">10/22/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=3" title="动画" class="field-link">动画</a>, 
                          <a href="https://www.behance.net/search?field=122" title="数码艺术" class="field-link">数码艺术</a>, 
                          <a href="https://www.behance.net/search?field=44" title="图形设计" class="field-link">图形设计</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="3613103" data-ordinal="1">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/3613103/Jamestown-Revival" class="cover-img-link">                      <img src="./style/img/3613103.545de7dcafbc6.jpg" alt="Jamestown Revival" title="Jamestown Revival" class="cover-img-el" data-pin-nopin="nopin">                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/3613103/Jamestown-Revival" class="projectName cover-name-link">Jamestown Revival</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/joshfraner">                
<span class="js-mini-profile" data-id="1071297">josh franer</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1334129502">4</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">191</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/22/2016">10/22/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=137" title="创意指导" class="field-link">创意指导</a>, 
                          <a href="https://www.behance.net/search?field=28" title="导演" class="field-link">导演</a>, 
                          <a href="https://www.behance.net/search?field=73" title="摄影" class="field-link">摄影</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="33779666" data-ordinal="2">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/33779666/Ice-Age-4" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/09fc5a33779666.56b7ebb87fa0c.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/09fc5a33779666.56b7ebb87fa0c.jpg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/09fc5a33779666.56b7ebb87fa0c.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/09fc5a33779666.56b7ebb87fa0c.jpg 2x" alt="Ice Age 4">                      </picture>                    <noscript>&lt;img alt="Ice Age 4" title="Ice Age 4" src="https://mir-s3-cdn-cf.behance.net/projects/202/09fc5a33779666.56b7ebb87fa0c.jpg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/33779666/Ice-Age-4" class="projectName cover-name-link">Ice Age 4</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/malaparte">                
<span class="js-mini-profile" data-id="7425991">Justin Gladis</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1454894008">18</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">133</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/22/2016">10/22/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=3" title="动画" class="field-link">动画</a>, 
                          <a href="https://www.behance.net/search?field=38" title="胶片" class="field-link">胶片</a>, 
                          <a href="https://www.behance.net/search?field=67" title="绘画" class="field-link">绘画</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="41405493" data-ordinal="3">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/41405493/Taiwan-ReDesign-Ident" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/87298d41405493.Y3JvcCw4NjIsNjc1LDE5Myww.png, https://mir-s3-cdn-cf.behance.net/projects/404/87298d41405493.Y3JvcCw4NjIsNjc1LDE5Myww.png 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/87298d41405493.Y3JvcCw4NjIsNjc1LDE5Myww.png, https://mir-s3-cdn-cf.behance.net/projects/404/87298d41405493.Y3JvcCw4NjIsNjc1LDE5Myww.png 2x" alt="Taiwan ReDesign Ident">                      </picture>                    <noscript>&lt;img alt="Taiwan ReDesign Ident" title="Taiwan ReDesign Ident" src="https://mir-s3-cdn-cf.behance.net/projects/202/87298d41405493.Y3JvcCw4NjIsNjc1LDE5Myww.png" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/41405493/Taiwan-ReDesign-Ident" class="projectName cover-name-link">Taiwan ReDesign Ident</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/WhitelightMotion">                
<span class="js-mini-profile" data-id="22976399">Whitelight Motion</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1470671257">130</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">2316</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/22/2016">10/22/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=5" title="艺术指导" class="field-link">艺术指导</a>, 
                          <a href="https://www.behance.net/search?field=109" title="品牌推广" class="field-link">品牌推广</a>, 
                          <a href="https://www.behance.net/search?field=63" title="动态图像设计" class="field-link">动态图像设计</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="41704513" data-ordinal="4">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/41704513/Starry-Night" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/1ae8f241704513.Y3JvcCwxMjYyLDk4Nyw0MzAsMjE.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/1ae8f241704513.Y3JvcCwxMjYyLDk4Nyw0MzAsMjE.jpg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/1ae8f241704513.Y3JvcCwxMjYyLDk4Nyw0MzAsMjE.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/1ae8f241704513.Y3JvcCwxMjYyLDk4Nyw0MzAsMjE.jpg 2x" alt="Starry Night">                      </picture>                    <noscript>&lt;img alt="Starry Night" title="Starry Night" src="https://mir-s3-cdn-cf.behance.net/projects/202/1ae8f241704513.Y3JvcCwxMjYyLDk4Nyw0MzAsMjE.jpg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/41704513/Starry-Night" class="projectName cover-name-link">Starry Night</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link multiple-cover-by">                          <span class="cover-by">作者</span>                          <span class="multiple-owners-list tooltipi-container">                            多个所有者<ul class="tooltipi tooltipi-white-links">                              <li class="clear">                                <a class="multiple-owner-link" href="https://www.behance.net/shin0kim">                
                                    <span class="multiple-owner-image-container"><img class="multiple-owner-image js-mini-profile" data-id="2115955" src="./style/img/1b18982115955.56ddc49412624.jpg"></span><span class="js-mini-profile" data-id="2115955">Shinyoung Kim</span>                                </a>                
                              </li>                              <li class="clear">                                <a class="multiple-owner-link" href="https://www.behance.net/cobbtv">                
                                    <span class="multiple-owner-image-container"><img class="multiple-owner-image js-mini-profile" data-id="14753807" src="./style/img/28fbc014753807.5585613d49fb4.jpg"></span><span class="js-mini-profile" data-id="14753807">cobb studio</span>                                </a>                
                              </li>                          </ul>                          </span>                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1471247254">90</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">732</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/22/2016">10/22/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=63" title="动态图像设计" class="field-link">动态图像设计</a>, 
                          <a href="https://www.behance.net/search?field=3" title="动画" class="field-link">动画</a>, 
                          <a href="https://www.behance.net/search?field=64" title="音乐" class="field-link">音乐</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="5801643" data-ordinal="5">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/5801643/Rebellious-Children-of-the-Unconscious" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/5801643.54692e76b212c.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/5801643.54692e76b212c.jpg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/5801643.54692e76b212c.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/5801643.54692e76b212c.jpg 2x" alt="Rebellious Children of the Unconscious">                      </picture>                    <noscript>&lt;img alt="Rebellious Children of the Unconscious" title="Rebellious Children of the Unconscious" src="https://mir-s3-cdn-cf.behance.net/projects/202/5801643.54692e76b212c.jpg" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/5801643/Rebellious-Children-of-the-Unconscious" class="projectName cover-name-link">Rebellious Children of the Unconscious</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/miguelvelez">                
<span class="js-mini-profile" data-id="91418">Miguel Vélez</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1352155344">8</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">178</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/22/2016">10/22/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=38" title="胶片" class="field-link">胶片</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>                <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="35855339" data-ordinal="6">                  <div class="cover-img">                    <a href="https://www.behance.net/gallery/35855339/Voices-of-the-Ancestors" class="cover-img-link">                      <picture class="cover-img-el">                        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/de7e2435855339.Y3JvcCwxMzE0LDEwMjgsODEsNTI.png, https://mir-s3-cdn-cf.behance.net/projects/404/de7e2435855339.Y3JvcCwxMzE0LDEwMjgsODEsNTI.png 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
                           (min--moz-device-pixel-ratio: 1.3),
                           (-o-min-device-pixel-ratio: 4/3),
                           (min-device-pixel-ratio: 1.3),
                           (min-resolution: 1.3dppx)">                        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/de7e2435855339.Y3JvcCwxMzE0LDEwMjgsODEsNTI.png, https://mir-s3-cdn-cf.behance.net/projects/404/de7e2435855339.Y3JvcCwxMzE0LDEwMjgsODEsNTI.png 2x" alt="Voices of the Ancestors">                      </picture>                    <noscript>&lt;img alt="Voices of the Ancestors" title="Voices of the Ancestors" src="https://mir-s3-cdn-cf.behance.net/projects/202/de7e2435855339.Y3JvcCwxMzE0LDEwMjgsODEsNTI.png" class="cover-img-el" /&gt;</noscript>                    </a>                  </div>                
                
                
                  <div class="cover-info-stats">                
                    <div class="cover-info">                
                      <div class="cover-name">                        <a href="https://www.behance.net/gallery/35855339/Voices-of-the-Ancestors" class="projectName cover-name-link">Voices of the Ancestors</a>                      </div>                
                      <div class="cover-by-wrap">                        <div class="cover-by-link text-ellipsis ">                          <span class="cover-by">作者</span>                              
                                <a class="single-owner-link" href="https://www.behance.net/brasnacte">                
<span class="js-mini-profile" data-id="4898379">Julius Hosthuis</span>                                </a>                
                              
                        </div>                      </div>                
                    </div>                
                    <div class="cover-stat-fields-wrap">                
                      <div class="cover-stat-wrap">                
                        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1460011938">20</span>                        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">200</span>                
                          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">                
                            <div class="tooltipi">                              推荐日期: <strong class="js-format-date" data-date="10/22/2016">10/22/2016</strong>                            </div>                
                          </div> <!-- .featured -->                
                      </div><!-- .cover-stat-wrap -->                
                      <div class="cover-fields">                          <a href="https://www.behance.net/search?field=15" title="计算机动画" class="field-link">计算机动画</a>, 
                          <a href="https://www.behance.net/search?field=122" title="数码艺术" class="field-link">数码艺术</a>, 
                          <a href="https://www.behance.net/search?field=63" title="动态图像设计" class="field-link">动态图像设计</a>                      </div><!-- .cover-fields -->                
                    </div><!-- .cover-info -->                
                  </div><!-- #cover-stat-fields-wrap -->                
                </div>            </div>          </div>      </div>    </div>  </div></div>
      </div> <!-- #site-content -->

      <div id="site-footer" class="js-footer">
  <div id="super-footer" class="cfix">
    <h3>      <span class="footer-logo">Bēhance</span>      <span class="footer-tagline">        掌控创意、<br class="show-phone">实现灵感
      </span>    </h3>
    <ul>        <li class="">          <a href="#" class="light-link">关于 Behance 和招贤纳士</a>        </li>        <li class="">          <a href="https://www.myportfolio.com/?promoid=ZKD5FJ7P&amp;mv=other" class="light-link">Adobe Portfolio</a>        </li>        <li class="">          <a href="#" class="light-link">博客</a>        </li>        <li class="">          <a href="https://www.behance.net/dev" class="light-link">Behance API</a>        </li>          <br class="show-phone">        <li class=" footer-first">          <a href="https://www.behance.net/reviews" class="light-link">作品集回顾之周</a>        </li>        <li class="">          <a href="#99u.com/?utm_source=network&amp;utm_medium=activity_feed_footer&amp;utm_campaign=network_footer_references" class="light-link">创作职业提示</a>        </li>        <li class="">          <a href="https://www.behance.net/apps" class="light-link">应用程序</a>        </li>    </ul>
    <ul id="footer-social">        <li><a href="#" class="ss-social">twitter</a></li>        <li><a href="#" class="ss-social">linkedin</a></li>        <li><a href="#" class="ss-social">facebook</a></li>        <li><a href="#" class="ss-social">pinterest</a></li>        <li><a href="#" class="ss-social">instagram</a></li>    </ul>
  </div> <!-- #super-footer -->
  <div id="sub-footer" class="cfix">
    <a href="#" class="footer-adobe beicons-pre beicons-pre-adobe" target="_blank">Adobe 产品家族中的成员</a>
    <div class="footer-misc">
      <ul>          <li class="tooltipi-container">            <a class="footer-button">              <span class="beta-label">测试版</span>              中文(简体)
            </a>            <ul class="tooltipi tooltipi-up footer-tooltipi">                <li><a class="js-language-option" data-language-locale="en_US" title="English">English</a></li>                <li><a class="js-language-option" data-language-locale="cs_CZ" title="Czech">Čeština</a></li>                <li><a class="js-language-option" data-language-locale="da_DK" title="Danish">Dansk</a></li>                <li><a class="js-language-option" data-language-locale="de_DE" title="German">Deutsch</a></li>                <li><a class="js-language-option" data-language-locale="es_ES" title="Spanish">Español</a></li>                <li><a class="js-language-option" data-language-locale="fr_FR" title="French">Français</a></li>                <li><a class="js-language-option" data-language-locale="it_IT" title="Italian">Italiano</a></li>                <li><a class="js-language-option" data-language-locale="nl_NL" title="Dutch">Nederlands</a></li>                <li><a class="js-language-option" data-language-locale="nb_NO" title="Norwegian">Norsk</a></li>                <li><a class="js-language-option" data-language-locale="pl_PL" title="Polish">Polski</a></li>                <li><a class="js-language-option" data-language-locale="pt_BR" title="Portuguese">Português</a></li>                <li><a class="js-language-option" data-language-locale="ru_RU" title="Russian">Pусский</a></li>                <li><a class="js-language-option" data-language-locale="fi_FI" title="Finnish">Suomi</a></li>                <li><a class="js-language-option" data-language-locale="sv_SE" title="Swedish">Svenska</a></li>                <li><a class="js-language-option" data-language-locale="tr_TR" title="Turkish">Türkçe</a></li>                <li><a class="js-language-option" data-language-locale="ja_JP" title="Japanese">日本語</a></li>                <li><a class="js-language-option" data-language-locale="ko_KR" title="Korean">한국어</a></li>                <li class="active"><a class="js-language-option" data-language-locale="zh_CN" title="Chinese (Simplified)">中文(简体)</a></li>                <li><a class="js-language-option" data-language-locale="zh_TW" title="Chinese (Traditional)">中文(繁體)</a></li>            </ul>          </li>        <li><a href="https://www.behance.net/misc/terms">TOU 和隐私</a></li>        <li><a href="https://www.behance.net/faq" class="js-zendesk">常见问题解答</a></li>        <li class="footer-copyright">          纽约制造.
          所有成员作品版权均属各自所有者，否则，© 2006-2016 Adobe Systems Incorporated。</li>      </ul>
    </div> <!-- .footer-misc -->
  </div> <!-- #sub-footer -->
</div> <!-- #site-footer -->
    </div> <!-- .slide-panel -->

    <div id="nav-basement" class="js-nav-basement">
  <ul class="nav-items cfix dark-background">
    <li class="nav-item nav-item-signup cfix first action-container" id="nav_item_signup"><a class="js-adobeid-signup form-button form-button-default action-signup" href="https://www.behance.net/gallery/43747087/Canon-G7-X-II-Promo#"><div class="nav-text" data-signup-from="MobileMenu_SignUp">注册</div></a></li>    <li class="nav-item nav-item-login cfix action-container" id="nav_item_login"><a class="js-adobeid-signin form-button form-button-dark" href="https://www.behance.net/gallery/43747087/Canon-G7-X-II-Promo#"><div class="nav-text inline-block">登录</div></a></li>

      <li class="nav-item">        
        <a class="nav-item-link beicons-pre beicons-pre-discover" href="https://www.behance.net/search">          发现
        </a>      </li>      <li class="nav-item">        
        <a class="nav-item-link active beicons-pre beicons-pre-badge" href="https://www.behance.net/galleries">          策展库
        </a>      </li>      <li class="nav-item">        
        <a class="nav-item-link beicons-pre beicons-pre-columns" href="https://www.behance.net/poweredby">          学校和组织
        </a>      </li>      <li class="nav-item">        
        <a class="nav-item-link beicons-pre beicons-pre-suitcase" href="https://www.behance.net/joblist">          职位
        </a>      </li>      <li class="nav-item">        
        <a class="nav-item-link beicons-pre beicons-pre-clone" href="https://www.behance.net/apps">          应用程序
        </a>      </li>
  </ul>
</div><!--<script type="application/json" id="beconfig-page_constants">{"GLOBALNAV":{"URLS":{"JS":"https:\/\/wwwimages2.adobe.com\/assets\/globalnav\/v1.1.4\/js\/globalnav.js","CSS":"https:\/\/wwwimages2.adobe.com\/assets\/globalnav\/v1.1.4\/css\/globalnav.css"},"OPEN_NOTIFICATIONS":false,"NOTIFICATION_TITLE":"\u60a8\u7684\u901a\u77e5","NOTIFICATION_PROPS_TITLE":"\u60a8\u7684\u7533\u8bf7"},"TYPEKIT":{"KIT_IDS":{"ADOBE":"jhi6ekj"},"URL":"\/\/use.typekit.com\/"},"XHR":{"URL_SIGNUP_ACTIVATE":"\/signup\/activate"},"SSO":{"CLIENT_ID":"BehanceWebSusi1","COOKIE_IMS_ACCESS_TOKEN_TTL":86400,"COOKIE_IMS_LOGGED_OUT_TTL":60,"COOKIE_IMS_ACCESS_TOKEN":"iat0","COOKIE_IMS_IMPERSONATOR_TOKEN":"iatx","COOKIE_IMS_LOGGED_OUT":"ilo0","COOKIES_DISABLED":"ilo0","IGNORE_COOKIE_UPDATE":false,"LOCALE":"zh_CN","LOGIN_DISABLED":false,"IS_LOGGED_IN_FULL_USER":false,"USES_SINGLE_LOG_OUT":false,"OMNITURE_AC_STATE":"behance.net","QS_IMS_SSO_INBOUND":"sso_inbound","QS_IMS_SIGNIN_ATTEMPT":"isa0","SCOPES":["AdobeID","openid","gnav","sao.cce_private","creative_cloud","creative_sdk","be.pro2.external_client","additional_info.roles"],"URLS":{"IMS":"https:\/\/static.adobelogin.com\/imslib\/imslib.min.js?client_id=BehanceWebSusi1&locale=zh_CN","AUTH_CHECK":"https:\/\/www.behance.net\/auth\/check","FAQ_THIRD_PARTY_COOKIES":"https:\/\/help.behance.net\/entries\/45476840-Why-am-I-getting-logged-out-of-Behance-spontaneously-","LOGOUT":"https:\/\/www.behance.net\/auth\/logout","LOGIN":"https:\/\/www.behance.net\/auth\/login","ACTIVITY":"\/activity","ONBOARDING":"\/onboarding"}}}</script>
<script type="application/json" id="beconfig-page_gates">{"lightbox":1,"project_view_chrome":1}</script>
<script type="application/json" id="beconfig-page_config">{"IMS":[],"MOBILE_APP_BANNER":{"ANDROID_DOWNLOAD":"http:\/\/ad.apps.fm\/p3HVur-M2FFCc2B--6htOa5px440Px0vtrw1ww5B54yL-oy8vYIvq1wkvI9CV4ClRvm3pZMmeQBk72w1MLZOeetiqv8kwmxRSHbfwWpek9IyXpHcGaTyo2BdEGaPxYu-"},"CBSTR":"cb=1020668724","ASSETSURL":"https:\/\/a3.behance.net\/","FQDOMAIN":"www.behance.net","ADOBE_VERIFY":"https:\/\/accounts.adobe.com\/account","BEHANCE":{"COOKIE_USER_LANGUAGE":"u_lang","ZENDESK":{"subdomain":"behancenetwork.zendesk.com","identify":{"ze21276880":"behance_usersubmit"}}},"LOCALIZATION":{"IS_DEFAULT_LANGUAGE":false,"TRANSLATIONS":{"account_delete_active_subscription_popup_message":"\u60a8\u5fc5\u987b\u5728 <a href=\"https:\/\/{{adobe_plans_url}}\">{{adobe_plans_url}}<\/a> \u4e0a\u53d6\u6d88\u60a8\u7684 Adobe Talent \u8ba2\u9605\uff0c<br\/>\u7136\u540e\u624d\u80fd\u5220\u9664\u60a8\u7684 Behance \u5e10\u6237\u3002","account_delete_active_subscription_popup_processing":"\u8bf7\u7b49\u5f85\u6700\u591a 5 \u5206\u949f\u65f6\u95f4\uff0c\u4ee5\u4fbf\u6211\u4eec\u5904\u7406\u60a8\u7684\u8bf7\u6c42\u3002","account_settings_account_information":"\u5e10\u6237\u4fe1\u606f","account_settings_adobe_talent_notifications":"Adobe Talent \u901a\u77e5","account_settings_app_access":"\u5e94\u7528\u7a0b\u5e8f\u8bbf\u95ee\u6743\u9650","account_settings_apps_access":"\u8fd9\u4e9b\u5e94\u7528\u7a0b\u5e8f\u53ef\u8bbf\u95ee\u60a8\u7684 Behance \u5e10\u6237","account_settings_apps_approved":"\u5df2\u6279\u51c6:","account_settings_apps_hide_permissions":"+ \u9690\u85cf\u6743\u9650","account_settings_apps_no_access":"\u60a8\u5f53\u524d\u4e0d\u5141\u8bb8\u4efb\u4f55\u5e94\u7528\u7a0b\u5e8f\u8bbf\u95ee\u60a8\u7684\u5e10\u6237","account_settings_apps_revoke_access":"\u64a4\u9500<br\/>\u8bbf\u95ee\u6743\u9650","account_settings_apps_view_permissions":"+ \u67e5\u770b\u6743\u9650","account_settings_block_mature_content":"\u963b\u6b62 Behance \u56fe\u5e93\u4e2d\u7684\u6210\u4eba\u5185\u5bb9","account_settings_blocked_none":"\u60a8\u6ca1\u6709\u963b\u6b62\u4efb\u4f55\u7528\u6237","account_settings_blocked_see_more":"\u67e5\u770b\u66f4\u591a<span class=\"beicons\">k<\/span>","account_settings_blocked_the_following":"\u60a8\u76ee\u524d\u6b63\u5728\u963b\u6b62\u4ee5\u4e0b\u7528\u6237","account_settings_blocked_users":"\u5df2\u963b\u6b62\u7684\u7528\u6237","account_settings_delete_account":"\u5220\u9664\u5e10\u6237","account_settings_delete_agree":"\u6211\u540c\u610f\u8fd9\u4e9b\u6761\u6b3e\u548c\u6761\u4ef6\uff0c\u5e76\u60f3\u8981\u6c38\u4e45\u5220\u9664\u6211\u7684\u5e10\u6237\u3002","account_settings_delete_button_delete":"\u5220\u9664\u6211\u7684\u5e10\u6237","account_settings_delete_c0nditions_subtitle":"\u8bf7\u5728\u5220\u9664\u5e10\u6237\u4e4b\u524d\u9605\u8bfb\u4ee5\u4e0b\u6761\u6b3e\u548c\u6761\u4ef6:","account_settings_delete_conditions_access":"\u4efb\u4f55\u4eba\u90fd\u5c06\u65e0\u6cd5\u518d\u8bbf\u95ee\u60a8\u7684\u4e2a\u4eba\u8d44\u6599\u6216\u9879\u76ee\u3002","account_settings_delete_conditions_adobe_portfolio":"\u5220\u9664\u60a8\u7684 Behance \u5e10\u6237\u4e5f\u5c06\u5220\u9664\u60a8 <a href=\"{{urls.adobe_portfolio}}\">Adobe Portfolio<\/a> \u53ca\u5176\u6240\u6709\u5185\u5bb9\u3002<strong>\u8fd9\u662f\u6c38\u4e45\u6027\u5220\u9664\u3002<\/strong>","account_settings_delete_conditions_content":"\u60a8\u7684\u6240\u6709\u5185\u5bb9\u90fd\u5c06\u88ab\u5220\u9664\u3002","account_settings_delete_conditions_galleries":"\u5220\u9664\u60a8\u7684 Behance \u5e10\u6237\u8fd8\u5c06\u5220\u9664\u60a8\u5728\u4ee5\u4e0b\u56fe\u5e93\u4e0a\u7684\u4e2a\u4eba\u8d44\u6599\uff1a","account_settings_delete_conditions_information":"\u5305\u62ec\u8bc4\u8bba\u3001\u6d88\u606f\u7b49\u5728\u5185\u7684\u60a8\u7684\u6240\u6709\u4fe1\u606f\u90fd\u5c06\u88ab\u5220\u9664\u3002","account_settings_delete_conditions_permanent":"\u5e10\u6237\u5220\u9664\u662f\u6c38\u4e45\u6027\u5220\u9664\u4e14\u65e0\u6cd5\u8fd8\u539f\u3002\u60a8\u9a6c\u4e0a\u5c31\u5c06\u65e0\u6cd5\u8bbf\u95ee\u5e10\u6237\u3002\u5220\u9664\u4e2a\u4eba\u8d44\u6599\u53ef\u80fd\u9700\u8981\u6700\u591a 24 \u5c0f\u65f6\u3002","account_settings_delete_conditions_talent":"\u5fc5\u987b\u5728 <a href=\"https:\/\/{{urls.talent_search_billing}}\">{{urls.talent_search_billing}}<\/a> \u4e0a\u53d6\u6d88\u60a8\u7684 Adobe Talent \u8ba2\u9605\uff0c\u7136\u540e\u624d\u80fd\u5220\u9664\u60a8\u7684 Behance \u5e10\u6237\u3002\u6240\u6709 Adobe Talent \u6570\u636e\u90fd\u5c06\u5220\u9664\u3002","account_settings_delete_conditions_teams":"\u5982\u679c\u60a8\u662f\u5c0f\u7ec4\u7684\u552f\u4e00\u7ba1\u7406\u5458\uff0c\u5220\u9664\u60a8\u7684 Behance \u5e10\u6237\u8fd8\u5c06\u5220\u9664\u60a8\u7684\u5c0f\u7ec4\u3002\u8bf7\u6307\u5b9a\u53e6\u4e00\u540d\u7528\u6237\u4f5c\u4e3a\u5c0f\u7ec4\u7ba1\u7406\u5458\u4ee5\u9632\u60a8\u7684\u5c0f\u7ec4\u4e0e\u60a8\u7684\u5e10\u6237\u4e00\u8d77\u88ab\u5220\u9664\u3002","account_settings_delete_conditions_title":"\u5220\u9664 Behance \u5e10\u6237\u4f1a\u5e26\u6765\u7684\u5f71\u54cd","account_settings_delete_full_name":"\u8bf7\u8f93\u5165\u60a8\u7684\u5168\u540d\u4ee5\u7ee7\u7eed","account_settings_delete_prosite_link":"\u6211\u60f3\u5220\u9664\u81ea\u5df1\u7684\u5e10\u6237","account_settings_delete_subtitle":"\u5220\u9664\u60a8\u7684\u5e10\u6237\u5c06\u5220\u9664\u60a8\u7684\u6240\u6709\u5185\u5bb9\u5e76\u79fb\u9664\u4e0e\u4e4b\u5173\u8054\u7684\u6240\u6709\u6570\u636e\u3002","account_settings_delete_title":"\u662f\u5426\u9700\u8981\u5220\u9664 Behance \u5e10\u6237\uff1f","account_settings_email_activity_subtitle":"\u8bf7\u901a\u8fc7\u7535\u5b50\u90ae\u4ef6\u5411\u6211\u53d1\u9001\u6709\u5173\u4ee5\u4e0b\u5185\u5bb9\u7684\u6c47\u603b\uff1a","account_settings_email_activity_title":"\u7f51\u7edc\u6d3b\u52a8","account_settings_email_jobs_subtitle":"\u5f53\u6709\u4eba\u51fa\u73b0\u4ee5\u4e0b\u884c\u4e3a\u65f6\uff0c\u8bf7\u7acb\u5373\u53d1\u9001\u7535\u5b50\u90ae\u4ef6\u7ed9\u6211\uff1a","account_settings_email_jobs_title":"\u6211\u7684\u804c\u4f4d","account_settings_email_newsletters_subtitle":"\u6211\u60f3\u8981\u63a5\u6536\uff1a","account_settings_email_newsletters_title":"\u65b0\u95fb\u901a\u8baf","account_settings_email_notifications":"\u7535\u5b50\u90ae\u4ef6\u901a\u77e5","account_settings_email_notifications_subtitle":"\u5f53\u6709\u4eba\u51fa\u73b0\u4ee5\u4e0b\u884c\u4e3a\u65f6\uff0c\u8bf7\u7acb\u5373\u53d1\u9001\u7535\u5b50\u90ae\u4ef6\u7ed9\u6211\uff1a","account_settings_email_notifications_title":"\u53ef\u6267\u884c\u7684\u7535\u5b50\u90ae\u4ef6\u901a\u77e5","account_settings_email_summary_description":"\u6536\u5230\u6709\u5173\u901a\u77e5\u7684\u7535\u5b50\u90ae\u4ef6\u6c47\u603b\uff0c\u800c\u4e0d\u662f\u5355\u72ec\u7684\u901a\u77e5\u90ae\u4ef6","account_settings_email_summary_header":"\u901a\u77e5\u6c47\u603b","account_settings_email_talent_subtitle":"\u5f53\u6709\u4eba\u51fa\u73b0\u4ee5\u4e0b\u884c\u4e3a\u65f6\uff0c\u8bf7\u7acb\u5373\u53d1\u9001\u7535\u5b50\u90ae\u4ef6\u7ed9\u6211\uff1a","account_settings_email_talent_title":"Adobe Talent \u901a\u77e5","account_settings_enable_lightbox":"\u5728\u6211\u7684\u9879\u76ee\u4e2d\u542f\u7528Lightbox\u663e\u793a\u6548\u679c","account_settings_error_active_subscription":"\u5220\u9664\u5e10\u6237\u524d\u5fc5\u987b\u5148\u53d6\u6d88 Adobe Talent \u8ba2\u9605\u3002","account_settings_error_billing_unavailable":"\u6211\u4eec\u53d1\u73b0\u60a8\u7684\u5e10\u6237\u6709\u95ee\u9898\uff0c\u8bf7\u8054\u7cfb Behance \u83b7\u53d6\u5e2e\u52a9\u3002","account_settings_error_name_mismatch":"\u60a8\u8f93\u5165\u7684\u59d3\u540d\u4e0d\u5339\u914d\u3002","account_settings_info_adobe_id":"Adobe ID","account_settings_info_behance_url":"Behance URL","account_settings_info_edit":"\u7f16\u8f91","account_settings_info_edit_id":"\u5728<span class=\"hide-phone\"> Adobe.com <\/span>\u4e0a\u7f16\u8f91\u8be5 Adobe ID","account_settings_info_unverified_account":"\u60a8\u5c1a\u672a\u9a8c\u8bc1\u60a8\u7684\u7535\u5b50\u90ae\u4ef6\uff01\u8981\u53d1\u5e03\u9879\u76ee\u5e76\u6267\u884c\u5176\u4ed6\u64cd\u4f5c\uff0c\u8bf7<a href=\"{{email.manage_url}}\">\u9a8c\u8bc1\u60a8\u7684\u7535\u5b50\u90ae\u4ef6\u3002<\/a>","account_settings_info_url_cancel":"\u53d6\u6d88","account_settings_info_url_tooltip":"\u60a8\u7684 URL \u4e5f\u662f\u60a8\u7684 Behance \u7528\u6237\u540d\u3002\u5982\u679c\u66f4\u6539\u6b64\u7528\u6237\u540d\uff0c\u90a3\u4e48\u8f6c\u5230\u65e7 URL \u7684\u94fe\u63a5\u5c06\u4f1a\u5931\u6548\u3002","account_settings_label_apply":"\u5e94\u7528","account_settings_label_off":"\u5173","account_settings_label_on":"\u5f00","account_settings_new_profile_name":"\u65b0\u4e2a\u4eba\u8d44\u6599\u540d\u79f0","account_settings_notifications_subtitle":"\u5f53\u6709\u4eba\u51fa\u73b0\u4ee5\u4e0b\u884c\u4e3a\u65f6\uff0c\u8bf7\u53d1\u9001\u7535\u5b50\u90ae\u4ef6\u7ed9\u6211\uff1a","account_settings_notifications_title":"\u5355\u72ec\u7684\u901a\u77e5","account_settings_page_title":"\u5e10\u6237\u8bbe\u7f6e","account_settings_placeholder_username":"\u60a8\u7684\u65b0\u914d\u7f6e\u6587\u4ef6\u540d\u79f0","account_settings_portfolio_warning":"\u5207\u6362 Behance Adobe ID \u5c06\u4f1a\u5f71\u54cd Adobe Portfolio\u3002\u5982\u679c\u60a8\u6b63\u5728\u4f7f\u7528 Adobe Portfolio\uff0c\u8bf7\u5728\u5207\u6362\u4e4b\u524d<a href=\"https:\/\/help.myportfolio.com\" target=\"_blank\">\u8054\u7cfb\u6211\u4eec<\/a>\u3002","account_settings_switch_adobe_ids":"\u5207\u6362 Adobe ID","account_settings_switch_content":"\u8bf7\u8f93\u5165\u60a8\u767b\u5f55 Behance \u5e10\u6237\u8981\u4f7f\u7528\u7684 Adobe ID \u51ed\u636e\u3002\u4ece\u73b0\u5728\u8d77\u60a8\u5c06\u4f7f\u7528\u8be5 Adobe ID \u767b\u5f55\u5e10\u6237\u3002","account_settings_switch_description":"\u60a8\u53ef\u4ee5\u4f7f\u7528 Adobe ID \u767b\u5f55\u60a8\u7684 Behance \u5e10\u6237\u3002\u5982\u679c\u60a8\u6709\u5176\u4ed6 Adobe ID \u5e76\u60f3\u5c06\u5176\u4e0e\u60a8\u7684\u5e10\u6237\u8fdb\u884c\u5173\u8054\uff0c\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u94fe\u63a5\u3002","account_settings_switch_forgot":"\u5fd8\u8bb0\u60a8\u7684 Adobe ID \u5bc6\u7801\uff1f","account_settings_switch_title":"\u4f7f\u7528\u5176\u4ed6 Adobe ID","account_settings_switch_use_different":"\u4f7f\u7528\u5176\u4ed6 Adobe ID","account_settings_too_many_requests":"\u8bf7\u6c42\u8fc7\u591a","account_settings_unblock_button":"\u53d6\u6d88\u963b\u6b62","account_settings_unblock_popup_message":"\u53d6\u6d88\u963b\u6b62\u8be5\u7528\u6237\u5c06\u5141\u8bb8\u5176\u76f4\u63a5\u5411\u60a8\u53d1\u9001\u6d88\u606f\u3002","account_settings_url_popup_message_links":"\u60a8\u5171\u4eab\u7ed9\u539f URL \u7684\u6240\u6709\u94fe\u63a5\u90fd\u5c06\u65ad\u5f00","account_settings_url_popup_title":"\u662f\u5426\u786e\u5b9e\u8981\u5c06\u60a8\u7684 Behance \u4e2a\u4eba\u8d44\u6599 URL \u66f4\u6539\u4e3a\uff1a","account_settings_user_id":"\u7528\u6237 ID","account_settings_user_name_confirmation":"\u7528\u6237\u540d\u786e\u8ba4","account_settings_your_adobe_id":"\u60a8\u7684 Adobe ID","account_settings_your_adobe_id_password":"\u60a8\u7684 Adobe ID \u5bc6\u7801","activate_dialog_activate_behance":"\u9488\u5bf9\u6b64\u5e10\u6237\u6fc0\u6d3b Behance:","activate_dialog_button_create_profile":"\u521b\u5efa\u6211\u7684 Behance \u4f5c\u54c1\u96c6","activate_dialog_currently_logged_in":"\u60a8\u5f53\u524d\u5df2\u4f7f\u7528\u4ee5\u4e0b Adobe ID \u767b\u5f55:","activate_dialog_different_account":"\u60f3\u8981\u8bbf\u95ee\u5176\u4ed6 Behance \u5e10\u6237\uff1f","activate_dialog_log_out":"\u6ce8\u9500","activate_dialog_welcome_to_behance":"{{first_name}}\uff0c\u6b22\u8fce\u4f7f\u7528 Behance\uff01","activity_announcement_email_question":"\u60f3\u5728 Behance \u4e0a\u83b7\u53d6\u5173\u4e8e\u65b0\u589e\u529f\u80fd\u7684\u7075\u611f\u548c\u66f4\u65b0\u5417\uff1f","activity_announcement_email_thanks":"\u5f88\u597d\uff0c\u73b0\u5728\u60a8\u53ef\u4ee5\u76f4\u63a5\u5728\u60a8\u7684\u6536\u4ef6\u7bb1\u4e2d\u83b7\u53d6\u7075\u611f\uff0c\u5e76\u53ef\u5728\u60a8\u7684<a href=\"\/account\/settings\">\u5e10\u6237\u8bbe\u7f6e<\/a>\u4e2d\u968f\u65f6\u66f4\u6539\u901a\u77e5\u8bbe\u7f6e\u4e86\u3002","activity_announcement_email_welcome":"{{first_name}}\uff0c\u6b22\u8fce\u4f7f\u7528 Behance\uff01","activity_label_activity_by":"\u6d3b\u52a8\u53d1\u8d77\u4eba\uff1a","activity_label_new_activity":"\u65b0\u5efa\u6d3b\u52a8","activity_label_see_all_appreciations":"\u67e5\u770b\u6240\u6709\u597d\u8bc4","activity_label_see_all_work":"\u67e5\u770b\u6240\u6709\u4f5c\u54c1","activity_label_see_all_work_from_team":"\u67e5\u770b\u56e2\u961f\u7684\u6240\u6709\u4f5c\u54c1","activity_label_see_collection":"\u67e5\u770b\u4f5c\u54c1\u96c6","activity_label_view_gallery":"\u67e5\u770b\u56fe\u5e93","activity_page_title":"\u6d3b\u52a8","additional_info_newsletter":"\u5411\u6211\u53d1\u9001\u6765\u81ea Behance \u7684\u65b0\u95fb\u548c\u7279\u6b8a\u673a\u4f1a","adobe_talent_behance_network":"Behance \u662f\u5168\u7403\u6700\u5927\u7684\u521b\u610f\u7f51\u7edc\u3002","adobe_talent_billing_processing":"\u8bf7\u7a0d\u5019...","adobe_talent_billing_select_subscription":"\u9009\u62e9\u60a8\u7684\u8ba2\u9605","adobe_talent_billing_start_hiring":"\u4ece\u8d85\u8fc7 500 \u4e07\u521b\u610f\u4e13\u4e1a\u4eba\u5458\u4e2d\u5f00\u59cb\u62db\u8058","adobe_talent_copy_brands":"\u9876\u7ea7\u521b\u610f\u54c1\u724c\u548c\u516c\u53f8\u4f7f\u7528 Behance \u6765\u5bfb\u627e\u548c\u96c7\u4f63\u9876\u7ea7\u521b\u610f\u4eba\u624d\u3002","adobe_talent_copy_cta":"\u5f00\u59cb\u4ece\u5305\u542b\u8d85\u8fc7<strong>\u4e94\u767e\u4e07\u521b\u610f\u4eba\u624d<\/strong>\u7684\u4eba\u624d\u50a8\u5907\u5e93\u4e2d\u5f00\u59cb\u62db\u8058","adobe_talent_copy_find":"Adobe Talent \u7684\u529f\u80fd\u4e0d\u53ea\u662f\u804c\u4f4d\u53d1\u5e03","adobe_talent_copy_pool":"\u5f00\u59cb\u4ece\u5305\u542b\u8d85\u8fc7<strong>\u4e94\u767e\u4e07\u521b\u610f\u4eba\u624d<\/strong>\u7684\u4eba\u624d\u50a8\u5907\u5e93\u4e2d\u8fdb\u884c\u62db\u8058\uff0c\u8fd9\u4e9b\u521b\u610f\u4eba\u624d\u5df2\u53d1\u5e03\u8d85\u8fc7<strong>\u516b\u767e\u4e07\u4e2a\u9879\u76ee<\/strong>","adobe_talent_copy_subtitle":"\u4ece Behance \u4e0a\u7684\u4e94\u767e\u4e07\u521b\u610f\u4eba\u624d\u4e2d\u627e\u5230\u5408\u9002\u7684\u4eba\u9009","adobe_talent_copy_title":"Adobe Talent","adobe_talent_enterprise_plan":"\u662f\u5426\u5728\u5bfb\u627e\u4f01\u4e1a\u8ba1\u5212?","adobe_talent_features_body_collaboration":"\u60a8\u53ef\u5728\u7ecf\u7406\u3001\u8bbe\u8ba1\u5e08\u548c\u62db\u8058\u4eba\u5458\uff08\u96c7\u4f63\u8fc7\u7a0b\u4e2d\u7275\u6d89\u7684\u6240\u6709\u4eba\uff09\u4e4b\u95f4\u5171\u4eab\u804c\u4f4d\u53d1\u5e03\u3002\u4e3a\u5019\u9009\u4eba\u7559\u8a00\u4ee5\u5206\u4eab\u60a8\u7684\u89c2\u70b9\u6216\u8bb0\u5f55\u91cd\u8981\u7684\u8be6\u7ec6\u4fe1\u606f\u3002","adobe_talent_features_body_discover":"\u5f53\u53d1\u73b0\u60a8\u559c\u6b22\u7684\u4eba\u65f6\uff0c\u60a8\u53ef\u901a\u8fc7\u5176\u9879\u76ee\u548c\u4e2a\u4eba\u8d44\u6599\u5c06\u5176\u4fdd\u5b58\u4e3a\u5019\u9009\u4eba\u3002\u6211\u4eec\u5c06\u501f\u6b64\u6539\u8fdb\u6211\u4eec\u7684\u4eba\u624d\u63a8\u8350\u3002\u6b64\u5916\uff0c\u60a8\u8fd8\u53ef\u4ee5\u57fa\u4e8e\u98ce\u683c\u3001\u4f4d\u7f6e\u7b49\u67e5\u770b\u4e0e\u8fd9\u4e9b\u6761\u4ef6\u5339\u914d\u7684\u521b\u610f\u4eba\u624d\u3002","adobe_talent_features_body_recommendations":"\u83b7\u53d6\u9488\u5bf9\u60a8\u53d1\u5e03\u7684\u6bcf\u4e2a\u804c\u4f4d\u7684\u5b9a\u5236\u5efa\u8bae\u3002\u6211\u4eec\u6839\u636e\u60a8\u5728\u53d1\u5e03\u804c\u4f4d\u65f6\u586b\u5199\u7684\u6761\u4ef6\uff0c\u5728\u6211\u4eec\u7684\u4eba\u9645\u7f51\u4e2d\u641c\u7d22\u7b26\u5408\u60a8\u9700\u8981\u7684\u521b\u610f\u4eba\u624d\u3002\u6b63\u5728\u62db\u8058\u5e73\u9762\u8bbe\u8ba1\u5e08\uff1f\u6211\u4eec\u5c06\u63a8\u8350\u5408\u9002\u7684\u4eba\u9009\u3002","adobe_talent_features_body_simlarity":"\u5229\u7528 Adobe \u56fe\u50cf\u5339\u914d\u6280\u672f\uff0c\u6211\u4eec\u53ef\u4ee5\u7acb\u5373\u751f\u6210\u4e0e\u60a8\u559c\u6b22\u7684\u9879\u76ee\u7c7b\u4f3c\u7684\u4e00\u5217\u9879\u76ee\u3002\u8fd9\u662f\u4e00\u79cd\u975e\u5e38\u68d2\u7684\u53d1\u73b0\u5177\u6709\u76f8\u4f3c\u98ce\u683c\u7684\u65b0\u5019\u9009\u4eba\uff08\u5c24\u5176\u662f\u6444\u5f71\u5e08\uff09\u7684\u65b9\u5f0f\u3002","adobe_talent_features_body_sync":"\u7edd\u5bf9\u4e0d\u4f1a\u518d\u8ddf\u4e22\u4f18\u79c0\u7684\u5019\u9009\u4eba\u3002\u5229\u7528\u6211\u4eec\u4e13\u7528\u4e8e iPhone \u548c iPad \u7684\u5e94\u7528\u7a0b\u5e8f Adobe Talent \u4fdd\u5b58\u5019\u9009\u4eba\u5e76\u7ba1\u7406\u60a8\u7684\u804c\u4f4d\u3002","adobe_talent_features_title_collaboration":"\u62db\u8058\u7ecf\u7406\u548c\u8bbe\u8ba1\u5e08\u4e4b\u95f4\u7684\u65e0\u7f1d\u534f\u4f5c","adobe_talent_features_title_discover":"\u53d1\u73b0\u4e86\u4f18\u79c0\u7684\u5019\u9009\u4eba?","adobe_talent_features_title_recommendations":"\u6211\u4eec\u63a8\u8350\u5408\u9002\u7684\u521b\u610f\u4e13\u4e1a\u4eba\u5458\u3002","adobe_talent_features_title_simlarity":"\u662f\u5426\u5728\u5bfb\u627e\u597d\u9879\u76ee?","adobe_talent_features_title_sync":"\u5728\u5404\u8bbe\u5907\u95f4\u4fdd\u6301\u540c\u6b65","adobe_talent_gd_copy_brands":"\u9876\u7ea7\u521b\u610f\u54c1\u724c\u548c\u516c\u53f8\u4f7f\u7528 Behance \u6765\u5bfb\u627e\u548c\u62db\u8058\u56fe\u5f62\u8bbe\u8ba1\u5e08\u3002","adobe_talent_gd_copy_cta":"\u5f00\u59cb\u62db\u8058\u56fe\u5f62\u8bbe\u8ba1\u5e08","adobe_talent_gd_copy_find":"\u5bfb\u627e\u4f18\u79c0\u7684\u56fe\u5f62\u8bbe\u8ba1\u5e08","adobe_talent_gd_copy_pool":"\u5f00\u59cb\u4ece\u5305\u542b\u8d85\u8fc7<strong>\u4e94\u767e\u4e07\u521b\u610f\u4eba\u624d<\/strong>\u7684\u4eba\u624d\u50a8\u5907\u5e93\u4e2d\u8fdb\u884c\u62db\u8058\uff0c\u8fd9\u4e9b\u4eba\u624d\u5305\u62ec\u56fe\u5f62\u8bbe\u8ba1\u5e08\u3001\u6444\u5f71\u5e08\u548c\u827a\u672f\u603b\u76d1\u7b49\u3002","adobe_talent_gd_copy_subtitle":"\u4f7f\u7528 Adobe Talent \u5bfb\u627e\u9876\u5c16\u56fe\u5f62\u8bbe\u8ba1\u5e08","adobe_talent_gd_copy_title":"\u62db\u8058\u56fe\u5f62\u8bbe\u8ba1\u5e08","adobe_talent_gd_features_body_collaboration":"\u60a8\u53ef\u5728\u7ecf\u7406\u3001\u8bbe\u8ba1\u5e08\u548c\u62db\u8058\u4eba\u5458\uff08\u96c7\u4f63\u8fc7\u7a0b\u4e2d\u6d89\u53ca\u7684\u6240\u6709\u4eba\uff09\u4e4b\u95f4\u5171\u4eab\u804c\u4f4d\u53d1\u5e03\u3002\u4e3a\u56fe\u5f62\u8bbe\u8ba1\u5019\u9009\u4eba\u7559\u8a00\u4ee5\u5206\u4eab\u60a8\u7684\u89c2\u70b9\u6216\u8bb0\u5f55\u91cd\u8981\u7684\u8be6\u7ec6\u4fe1\u606f\u3002","adobe_talent_gd_features_body_discover":"\u5f53\u53d1\u73b0\u60a8\u559c\u6b22\u7684\u5e73\u9762\u8bbe\u8ba1\u5e08\u65f6\uff0c\u60a8\u53ef\u901a\u8fc7\u5176\u9879\u76ee\u548c\u4e2a\u4eba\u8d44\u6599\u5c06\u5176\u4fdd\u5b58\u4e3a\u5019\u9009\u4eba\u3002\u6211\u4eec\u5c06\u501f\u6b64\u6539\u8fdb\u6211\u4eec\u7684\u4eba\u624d\u63a8\u8350\u3002\u6b64\u5916\uff0c\u60a8\u8fd8\u53ef\u4ee5\u57fa\u4e8e\u98ce\u683c\u3001\u4f4d\u7f6e\u7b49\u67e5\u770b\u4e0e\u8fd9\u4e9b\u6761\u4ef6\u5339\u914d\u7684\u5e73\u9762\u8bbe\u8ba1\u5e08\u3002","adobe_talent_gd_features_body_recommendations":"\u83b7\u53d6\u9488\u5bf9\u60a8\u53d1\u5e03\u7684\u6bcf\u4e2a\u804c\u4f4d\u7684\u5b9a\u5236\u5efa\u8bae\u3002\u6211\u4eec\u5c06\u91c7\u7528\u60a8\u5728\u804c\u4f4d\u53d1\u5e03\u4e2d\u8bbe\u7f6e\u7684\u6761\u4ef6\uff0c\u5e76\u5728\u6211\u4eec\u7684\u7f51\u7edc\u4e2d\u641c\u7d22\u4e0e\u60a8\u7684\u9700\u6c42\u76f8\u7b26\u7684\u56fe\u5f62\u8bbe\u8ba1\u5e08\u3002","adobe_talent_gd_features_body_simlarity":"\u5229\u7528 Adobe \u56fe\u50cf\u5339\u914d\u6280\u672f\uff0c\u6211\u4eec\u53ef\u4ee5\u7acb\u5373\u751f\u6210\u4e0e\u60a8\u559c\u6b22\u7684\u9879\u76ee\u7c7b\u4f3c\u7684\u56fe\u5f62\u8bbe\u8ba1\u9879\u76ee\u7684\u5217\u8868\u3002\u8fd9\u662f\u4e00\u79cd\u975e\u5e38\u68d2\u7684\u53d1\u73b0\u65b0\u7684\u5177\u6709\u76f8\u4f3c\u98ce\u683c\u7684\u56fe\u5f62\u8bbe\u8ba1\u5e08\u7684\u65b9\u6cd5\u3002","adobe_talent_gd_features_body_sync":"\u7edd\u5bf9\u4e0d\u4f1a\u518d\u4e0e\u4f18\u79c0\u7684\u56fe\u5f62\u8bbe\u8ba1\u5e08\u5931\u53bb\u8054\u7cfb\u3002\u5229\u7528\u6211\u4eec\u72ec\u6709\u7684\u9002\u7528\u4e8e iPhone \u548c iPad \u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u53ef\u4ee5\u5728 Adobe Talent \u4e2d\u4fdd\u5b58\u56fe\u5f62\u8bbe\u8ba1\u5e08\u5019\u9009\u4eba\u5e76\u7ba1\u7406\u60a8\u7684\u804c\u4f4d\u3002","adobe_talent_gd_features_title_collaboration":"\u62db\u8058\u7ecf\u7406\u548c\u56fe\u5f62\u8bbe\u8ba1\u5e08\u4e4b\u95f4\u7684\u65e0\u7f1d\u534f\u4f5c","adobe_talent_gd_features_title_discover":"\u662f\u5426\u5728\u5bfb\u627e\u4f18\u79c0\u7684\u56fe\u5f62\u8bbe\u8ba1\u5e08?","adobe_talent_gd_features_title_recommendations":"\u6211\u4eec\u63a8\u8350\u5408\u9002\u7684\u56fe\u5f62\u8bbe\u8ba1\u5e08\u3002","adobe_talent_gd_features_title_simlarity":"\u662f\u5426\u5728\u5bfb\u627e\u4f18\u79c0\u7684\u56fe\u5f62\u8bbe\u8ba1\u9879\u76ee?","adobe_talent_gd_features_title_sync":"\u5728\u5404\u8bbe\u5907\u95f4\u4fdd\u6301\u540c\u6b65","adobe_talent_gd_page_description":"\u4ece Adobe Talent \u4e0a\u7684\u8d85\u8fc7\u4e94\u767e\u4e07\u521b\u610f\u4eba\u624d\u4e2d\u5bfb\u627e\u548c\u62db\u8058\u56fe\u5f62\u8bbe\u8ba1\u5e08\u3002\u7acb\u5373\u53d1\u5e03\u804c\u4f4d\u3002","adobe_talent_gd_page_title":"\u5bfb\u627e\u5e76\u62db\u8058\u56fe\u5f62\u8bbe\u8ba1\u5e08 | Adobe Talent","adobe_talent_get_a_quote":"\u83b7\u53d6\u62a5\u4ef7 &rarr;","adobe_talent_job_posts_start":"\u804c\u4f4d\u53d1\u5e03\u7684\u8d77\u4ef7\u4e3a\u6bcf\u6708 &#36;{{price_talent_search_limited}}","adobe_talent_job_posts_start_special":"\u53d1\u5e03\u60a8\u672c\u6708\u5b9a\u4ef7\u4e3a {{special_pricing_price}} \u7684\u7279\u60e0\u804c\u4f4d\uff0c\u539f\u4ef7\u4e3a &#36;{{price_talent_search_limited}}","adobe_talent_plans_one_description":"\u4e00\u4e2a\u6708\u53d1\u5e03\u4e00\u4e2a\u804c\u4f4d","adobe_talent_plans_one_price":"<span class=\"currency\"><\/span>{{price_talent_search_limited}} \u7f8e\u5143<span class=\"month\"> \/\u6708<\/span>","adobe_talent_plans_one_title":"Adobe Talent","adobe_talent_plans_unlimited_description":"\u968f\u65f6\u53d1\u5e03\u804c\u4f4d\uff0c\u6b21\u6570\u4e0d\u9650","adobe_talent_plans_unlimited_price":"<span class=\"currency\"><\/span>{{price_talent_search}} \u7f8e\u5143<span class=\"month\"> \/\u6708<\/span>","adobe_talent_plans_unlimited_title":"Adobe Talent Unlimited","adobe_talent_post_a_job":"\u53d1\u5e03\u804c\u4f4d","adobe_talent_post_a_job_now":"\u7acb\u5373\u53d1\u5e03\u804c\u4f4d","adobe_talent_post_your_job_now":"\u7acb\u5373\u53d1\u5e03\u60a8\u7684\u804c\u4f4d &rarr;","adobe_talent_promo_subtitle_month1_279":"\uff08\u5e38\u89c4\u4ef7\u683c\u7684 30%\uff09","adobe_talent_promo_subtitle_month1_99":"\u72ec\u5bb6\u4f18\u60e0","adobe_talent_promo_title_month1_279":"\u7279\u522b\u4f18\u60e0\uff1a\u9996\u6708\u4f7f\u7528 Adobe Talent \u4eab\u53d7\u4e03\u6298\u4f18\u60e0","adobe_talent_promo_title_month1_99":"\u7279\u522b\u4f18\u60e0\uff1a\u9996\u6708\u4f7f\u7528 Adobe Talent \u4ef7\u683c\u4e3a $0.99","adobe_talent_start_hiring_today":"<strong>\u7acb\u5373\u5f00\u59cb\u96c7\u4f63:<\/strong> \u5e73\u9762\u8bbe\u8ba1\u5e08 &bull; UI\/UX \u8bbe\u8ba1\u5e08 &bull; Web \u8bbe\u8ba1 &bull; \u4f53\u9a8c\u8bbe\u8ba1 &bull; \u4ea4\u4e92\u8bbe\u8ba1 &bull; \u4ea7\u54c1\u8bbe\u8ba1 &bull; \u6444\u5f71\u5e08","adobe_talent_start_subscription":"\u5f00\u59cb\u8ba2\u9605","adobe_talent_subscription_pricing":"\u8ba2\u9605\u5b9a\u4ef7","adobe_talent_testimonials_attribution_rga":"Nick Law\uff0cR\/GA \u5168\u7403\u9996\u5e2d\u521b\u610f\u5b98","adobe_talent_testimonials_attribution_sapient":"Thomas Moeller\uff0cSapientNitro \u521b\u610f\u603b\u76d1","adobe_talent_testimonials_attribution_starwood":"Stephen Gates\uff0cStarwood Hotel & Resorts \u7684\u5168\u7403\u54c1\u724c\u8bbe\u8ba1\u526f\u603b\u88c1\u517c\u521b\u610f\u603b\u76d1","adobe_talent_testimonials_quote_rga":"\u201cBehance \u662f\u4e00\u4e2a\u975e\u5e38\u5b9d\u8d35\u7684\u8d44\u6e90\uff0c\u5728\u6211\u4eec\u7684\u884c\u4e1a\u5185\uff0c\u4eba\u624d\u662f\u6700\u91cd\u8981\u7684\u3002\u60a8\u53ef\u80fd\u8017\u8d39\u5927\u91cf\u7cbe\u529b\u4e4b\u540e\u624d\u4f1a\u770b\u4e2d\u4e00\u4efd\u7b80\u5386\uff0c\u4f46\u4ece\u6839\u672c\u4e0a\u8bf4\uff0c\u60a8\u771f\u6b63\u611f\u5174\u8da3\u7684\u662f\u5019\u9009\u4eba\u7684\u4f5c\u54c1\u3002\u56e0\u6b64 Behance \u662f\u83b7\u53d6\u6211\u4eec\u6240\u5bfb\u6c42\u7684\u4f5c\u54c1\u7684\u6700\u4f73\u5e73\u53f0\u3002\u201d","adobe_talent_testimonials_quote_sapient":"\u201c\u6211\u4eec\u4e00\u76f4\u5728\u5bfb\u627e\u6700\u68d2\u7684\u8bbe\u8ba1\u5e08\u548c\u521b\u610f\u4eba\u624d\uff0c\u6bcf\u5929\u4f7f\u7528 Behance \u5bf9\u6211\u4eec\u4f01\u4e1a\u7684\u6210\u957f\u975e\u5e38\u91cd\u8981\u3002\u201d","adobe_talent_testimonials_quote_starwood":"\u201c\u65e0\u8bba\u6211\u4eec\u4f55\u65f6\u5f00\u59cb\u641c\u7d22\u521b\u610f\u4eba\u624d\uff0cBehance \u59cb\u7ec8\u662f\u6211\u4eec\u9996\u9009\u7684\u8d77\u59cb\u70b9\u3002\u6211\u4eec\u9700\u8981\u8bb8\u591a\u5f88\u5177\u4f53\u4f46\u6c34\u5e73\u5f88\u9ad8\u7684\u521b\u610f\u6280\u80fd\u7ec4\u5408\uff0cBehance \u4f7f\u6211\u4eec\u53ef\u5728\u641c\u7d22\u4e2d\u5f88\u5177\u4f53\u5730\u8bbe\u7f6e\u67e5\u627e\u6761\u4ef6\uff0c\u5e76\u56e0\u6b64\u53ef\u627e\u5230\u6700\u5408\u9002\u7684\u4eba\u624d\u3002\u201d","adobeid_swap_already_linked":"<strong>{{existing_email}}<\/strong> Adobe ID \u5df2\u4e0e\u4ee5\u4e0b Behance \u5e10\u6237\u5173\u8054:","adobeid_swap_log_you_out":"\u94fe\u63a5\u5e10\u6237\u9700\u8981\u60a8\u9000\u51fa\u767b\u5f55\u3002","adobeid_swap_to_switch":"\u8981\u5207\u6362 Adobe ID\uff0c\u6211\u4eec\u4f1a\u5c06 <strong>be.net\/{{existing_username}}<\/strong> \u94fe\u63a5\u81f3\u60a8\u7684 <strong>{{current_adobe_email}}<\/strong> Adobe ID\u3002","app_popup_email_message":"\u8bf7\u8f93\u5165\u60a8\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\uff0c\u6211\u4eec\u5c06\u5411\u60a8\u53d1\u9001\u94fe\u63a5\uff0c\u4ee5\u4fbf\u60a8\u76f4\u63a5\u901a\u8fc7\u79fb\u52a8\u8bbe\u5907\u8fdb\u884c\u4e0b\u8f7d\u3002","app_popup_email_placeholder":"\u7535\u5b50\u90ae\u4ef6","apps_page_apple_store":"\u5728 App Store \u4e0a\u4e0b\u8f7d","apps_page_behance_desc":"\u4ece\u60a8\u77e5\u9053\u7684\u9876\u7ea7\u521b\u610f\u8bbe\u8ba1\u4eba\u5458\u90a3\u91cc\u53d1\u73b0\u4e16\u754c\u4e0a\u6700\u597d\u7684\u521b\u610f\u4f5c\u54c1","apps_page_cloud_desc":"\u76f4\u63a5\u4ece\u60a8\u7684\u684c\u9762\u65e0\u7f1d\u8fde\u63a5\u5230 Behance \u5e76\u4e86\u89e3\u6700\u65b0\u6d3b\u52a8","apps_page_creative_desc":"\u65e0\u8bba\u8eab\u5728\u4f55\u5904\uff0c\u5747\u53ef\u8f7b\u677e\u5c55\u793a\u60a8\u7684 Behance \u4f5c\u54c1\u96c6\uff0c\u751a\u81f3\u4e0d\u9700\u8981 Internet \u8fde\u63a5","apps_page_download":"\u4e0b\u8f7d","apps_page_email_sent":"\u7528\u4e8e\u4e0b\u8f7d\u8be5\u5e94\u7528\u7684\u94fe\u63a5\u5df2\u53d1\u9001\u5230\u60a8\u7684\u7535\u5b50\u90ae\u4ef6\u3002","apps_page_fields_error":"\u8bf7\u66f4\u6b63\u4e0a\u9762\u7684\u5b57\u6bb5","apps_page_google_play":"\u5728 Google Play \u4e0a\u83b7\u53d6","apps_page_on_the_go":"\u51fa\u95e8\u5728\u5916? <br class=\"show-phone\" \/>\u8ba9 Behance \u4f34\u60a8\u5de6\u53f3!","apps_page_portfolio_android":"\u5728 Android \u8bbe\u5907\u4e0a\u968f\u65f6\u8bbf\u95ee\u60a8\u7684\u4f5c\u54c1\u96c6","apps_page_portfolio_ios":"\u5728 iPhone \u548c iPad \u4e0a\u968f\u65f6\u8bbf\u95ee\u60a8\u7684\u4f5c\u54c1\u96c6","apps_page_send_email":"\u5c06\u94fe\u63a5\u53d1\u9001\u5230\u60a8\u7684\u7535\u5b50\u90ae\u4ef6","apps_page_send_phone":"\u5c06\u94fe\u63a5\u53d1\u9001\u5230\u60a8\u7684\u624b\u673a","apps_page_showcase":"\u5728\u60a8\u7684 iOS \u6216 Android \u8bbe\u5907\u4e0a\u5c55\u793a\u548c\u53d1\u73b0\u521b\u610f\u4f5c\u54c1","apps_page_sketch_desc":"\u81ea\u7136\u7684\u7ed8\u56fe\u5de5\u5177\u4e0e Behance \u548c Adobe Ink &amp; Slide \u65e0\u7f1d\u96c6\u6210","apps_page_submit_error":"\u60a8\u7684\u63d0\u4ea4\u53d1\u751f\u4e86\u9519\u8bef\u3002","apps_page_title":"Behance \u5e94\u7528\u7a0b\u5e8f","apps_page_wallpaper_desc":"\u901a\u8fc7\u60a8\u7684\u684c\u9762\u5899\u7eb8\u53d1\u73b0\u4e16\u754c\u4e0a\u6700\u597d\u7684\u521b\u610f\u4f5c\u54c1","autoselect_new_option_add":"\u6dfb\u52a0\u201c{{search}}\u201d","be_share_link_copy_project_link":"\u590d\u5236\u9879\u76ee\u94fe\u63a5","be_share_link_copy_project_link_with_others":"\u590d\u5236\u4ee5\u4e0b\u94fe\u63a5\uff0c\u4e0e\u4ed6\u4eba\u5171\u4eab\u6b64\u9879\u76ee\u3002","button_add_work":"\u6dfb\u52a0\u4f5c\u54c1","button_follow":"\u5173\u6ce8","button_follow_all":"\u5168\u90e8\u5173\u6ce8","button_follow_collection_responsive":"\u5173\u6ce8<span class=\"hide-phone\">\u4f5c\u54c1\u96c6<\/span>","button_follow_gallery_responsive":"\u5173\u6ce8<span class=\"hide-phone\">\u56fe\u5e93<\/span>","button_following":"\u6b63\u5728\u5173\u6ce8","button_following_all":"\u6b63\u5728\u5173\u6ce8\u5168\u90e8","button_following_collection_responsive":"\u6b63\u5728\u5173\u6ce8<span class=\"hide-phone\">\u4f5c\u54c1\u96c6<\/span>","button_following_gallery_responsive":"\u6b63\u5728\u5173\u6ce8<span class=\"hide-phone\">\u56fe\u5e93<\/span>","button_join":"\u52a0\u5165","button_joined":"\u5df2\u52a0\u5165","button_message":"\u4fe1\u606f","button_message_user":"\u5411\u7528\u6237\u53d1\u9001\u6d88\u606f","button_save":"\u4fdd\u5b58","button_share":"\u5171\u4eab","button_unfollow":"\u53d6\u6d88\u5173\u6ce8","button_unfollow_all":"\u5168\u90e8\u53d6\u6d88\u5173\u6ce8","button_unfollow_collection_responsive":"\u53d6\u6d88\u5173\u6ce8<span class=\"hide-phone\">\u4f5c\u54c1\u96c6<\/span>&nbsp;","button_unfollow_gallery_responsive":"\u53d6\u6d88\u5173\u6ce8<span class=\"hide-phone\">\u56fe\u5e93<\/span>&nbsp;","collection_collection":"\u6536\u85cf\u5939","collection_cover_by":"\u4f5c\u8005","collection_cover_multiple_owners":"\u591a\u4e2a\u6240\u6709\u8005","collection_cover_view_collection":"\u67e5\u770b\u4f5c\u54c1\u96c6","collection_empty_havent_added_projects":"\u60a8\u5c1a\u672a\u6dfb\u52a0\u4efb\u4f55\u9879\u76ee\u3002","collection_empty_no_projects":"\u6b64\u4f5c\u54c1\u96c6\u6ca1\u6709\u4efb\u4f55\u9879\u76ee\u3002","collection_empty_owner_hasnt_added_projects":"\u6b64\u4f5c\u54c1\u96c6\u7684\u6240\u6709\u8005\u5c1a\u672a\u6dfb\u52a0\u4efb\u4f55\u9879\u76ee\u3002","collection_empty_to_add_project":"\u8981\u5411\u6b64\u4f5c\u54c1\u96c6\u6dfb\u52a0\u9879\u76ee\uff0c\u8bf7\u5355\u51fb\u4efb\u610f\u9879\u76ee\u4fa7\u8fb9\u680f\u7684\u201c\u6dfb\u52a0\u5230\u4f5c\u54c1\u96c6\u201d\u6309\u94ae\u3002","collection_gallery_text":"\u67e5\u770b\u4f5c\u54c1\u96c6","collection_header_by":"\u4f5c\u8005:","collection_header_followers":"\u5173\u6ce8\u8005","collection_header_projects":"\u9879\u76ee","collection_header_updated":"\u66f4\u65b0\u65f6\u95f4:","collection_note_public_by_default":"\u6ce8\u610f: \u65b0\u7684\u4f5c\u54c1\u96c6\u9ed8\u8ba4\u662f\u516c\u5f00\u7684\u3002\u8bf7\u4ece\u4f5c\u54c1\u96c6\u4e2d\u66f4\u6539\u9690\u79c1\u8bbe\u7f6e\u3002","colorpicker_popup_button_add":"\u6dfb\u52a0","colorpicker_popup_button_cancel":"\u53d6\u6d88","colorpicker_popup_button_confirm":"\u786e\u8ba4","colorpicker_popup_rgb_blue":"B","colorpicker_popup_rgb_green":"G","colorpicker_popup_rgb_red":"R","colorpicker_popup_title_select_color":"\u9009\u62e9\u989c\u8272","comment_link_warning":"\u6b63\u5728\u53d1\u5e03\u94fe\u63a5\uff1f\u8bf7\u6ce8\u610f\uff0c\u8bc4\u8bba\u4e2d\u7684\u94fe\u63a5\u5c06\u663e\u793a\u4e3a\u7eaf\u6587\u672c\u3002","comment_replied_to":"\u5df2\u56de\u590d <a href=\"{{user.url}}\">{{user.name}}<\/a>","coowners_dialog_awaiting":"\u6b63\u5728\u7b49\u5f85...","coowners_dialog_confirmed":"\u5df2\u786e\u8ba4!","coowners_dialog_remove":"\u79fb\u53bb","creative_rank_label_all":"\u5168\u90e8","creative_rank_label_forty":"\u524d 26% - 40%","creative_rank_label_ten":"\u524d 10%","creative_rank_label_twenty_five":"\u524d 11% - 25%","cta_apps_subtitle":"\u5728\u6bcf\u53f0\u8bbe\u5907\u4e0a\u5c55\u793a Behance \u7684\u6700\u4f73\u4f5c\u54c1\uff0c\u968f\u65f6\u968f\u5730\uff0c\u89e6\u624b\u53ef\u5f97","cta_apps_title":"\u4e0b\u8f7d\u6211\u4eec\u7684\u5e94\u7528\u7a0b\u5e8f","cta_button_activate_behance":"\u6fc0\u6d3b Behance","cta_button_sign_up":"\u6ce8\u518c","cta_galleries_subheader":"\u597d\u5de5\u4f5c\u3001\u4e3b\u8981\u521b\u65b0\u4eba\u624d\u7684\u7cbe\u9009\u96c6\u5408","cta_galleries_title":"\u7b56\u5c55\u5e93","cta_powered_by_subtitle":"\u67e5\u627e\u6765\u81ea\u9886\u5148\u4f01\u4e1a\u7684\u5de5\u4f5c","cta_powered_by_title":"\u7531 Behance \u63d0\u4f9b\u652f\u6301","cta_showcase_and_discover_creative_work":"\u5c55\u793a\u548c\u53d1\u73b0\u521b\u610f\u4f5c\u54c1","curated_galleries_back_to_all_galleries":"\u8fd4\u56de\u6240\u6709\u56fe\u5e93","curated_galleries_empty_search_header":"\u60a8\u641c\u7d22\u7684\u201c{{search}}\u201d\u672a\u8fd4\u56de\u4efb\u4f55\u4f5c\u54c1\u96c6\u3002","curated_galleries_empty_search_message":"\u8bf7\u786e\u4fdd\u6240\u6709\u5b57\u8bcd\u62fc\u5199\u6b63\u786e\u6216\u5c1d\u8bd5\u5176\u4ed6\u5173\u952e\u5b57\u3002","curated_galleries_people":"\u4eba\u7269","curated_galleries_projects":"\u9879\u76ee","curated_galleries_view_gallery":"\u67e5\u770b\u56fe\u5e93","discover_content_option_people":"\u4eba\u7269","discover_content_option_projects":"\u9879\u76ee","discover_content_option_teams":"\u56e2\u961f","discover_empty_header_search":"\u60a8\u7684\u641c\u7d22\u672a\u8fd4\u56de\u4efb\u4f55\u5185\u5bb9\u3002","discover_empty_header_standard":"\u6ca1\u6709\u4efb\u4f55\u5185\u5bb9\u7b26\u5408\u60a8\u7684\u7b5b\u9009\u6761\u4ef6\u3002","discover_empty_message_additional":"\u60a8\u8fd8\u53ef\u4ee5\u6d4f\u89c8\u4e0b\u5217\u70ed\u95e8\u641c\u7d22\u3002","discover_empty_message_search":"\u8bf7\u786e\u4fdd\u6240\u6709\u5b57\u8bcd\u62fc\u5199\u6b63\u786e\u6216\u5c1d\u8bd5\u5176\u4ed6\u5173\u952e\u5b57\u3002","discover_empty_message_standard":"\u8bf7\u5c1d\u8bd5\u6309\u66f4\u5e38\u89c4\u7684\u6761\u4ef6\u7b5b\u9009\u3002","discover_empty_popular_fields":"\u70ed\u95e8\u9886\u57df","discover_empty_popular_tags":"\u70ed\u95e8\u6807\u7b7e","discover_field_option_all_fields":"\u6240\u6709\u521b\u610f\u9886\u57df","discover_label_adobe_talent_mode":"Adobe Talent \u6a21\u5f0f","discover_label_alphabetical":"\u6309\u5b57\u6bcd\u987a\u5e8f","discover_label_apply":"\u5e94\u7528","discover_label_awards":"\u5956\u54c1","discover_label_brand_company":"\u54c1\u724c\/\u516c\u53f8","discover_label_browse":"\u6d4f\u89c8","discover_label_city":"\u57ce\u5e02","discover_label_clear":"\u6e05\u9664","discover_label_clear_all_filters":"\u6e05\u9664\u6240\u6709\u7b5b\u9009\u5668","discover_label_color":"\u989c\u8272","discover_label_country":"\u56fd\u5bb6\/\u5730\u533a","discover_label_creative_index":"\u521b\u610f\u6307\u6570","discover_label_dialog_awards":"\u641c\u7d22\u5956\u54c1","discover_label_dialog_clients":"\u641c\u7d22\u5ba2\u6237\u7aef","discover_label_dialog_creative_rank":"\u6309\u521b\u610f\u6307\u6570\u7b5b\u9009","discover_label_dialog_schools":"\u5b66\u6821","discover_label_dialog_tools":"\u5de5\u5177","discover_label_filter_by":"\u7b5b\u9009\u6761\u4ef6","discover_label_filter_placeholder":"\u5f00\u59cb\u952e\u5165\u4ee5\u67e5\u770b\u5217\u8868","discover_label_limit_dialog_awards":"\u60a8\u53ea\u80fd\u9009\u62e9 3 \u4e2a\u5956\u54c1\u3002","discover_label_limit_dialog_clients":"\u60a8\u53ea\u80fd\u9009\u62e9 3 \u5bb6\u516c\u53f8\u3002","discover_label_limit_dialog_schools":"\u60a8\u53ea\u80fd\u9009\u62e9 3 \u6240\u5b66\u6821\u3002","discover_label_limit_dialog_tools":"\u60a8\u53ea\u80fd\u9009\u62e9 3 \u4e2a\u5de5\u5177\u3002","discover_label_location":"\u4f4d\u7f6e","discover_label_placeholder_country":"-- \u9009\u62e9\u56fd\u5bb6\/\u5730\u533a","discover_label_placeholder_province":"-- \u9009\u62e9\u7701\/\u76f4\u8f96\u5e02\/\u81ea\u6cbb\u533a","discover_label_placeholder_state":"-- \u9009\u62e9\u5dde","discover_label_popular":"\u5e38\u7528","discover_label_popular_creative_fields":"\u70ed\u95e8\u521b\u610f\u9886\u57df","discover_label_premium_filters":"\u9ad8\u7ea7\u7b5b\u9009\u5668","discover_label_province":"\u7701","discover_label_related_tags":"\u76f8\u5173\u6807\u7b7e","discover_label_schools":"\u5b66\u6821","discover_label_search":"\u641c\u7d22","discover_label_see_all_tags":"\u67e5\u770b\u6240\u6709\u6807\u7b7e","discover_label_see_fewer_tags":"\u67e5\u770b\u90e8\u5206\u6807\u7b7e","discover_label_state":"\u5dde","discover_label_time":"\u65f6\u95f4","discover_label_tools":"\u6240\u7528\u5de5\u5177","discover_label_variance":"\u5dee\u5f02","discover_label_view":"\u67e5\u770b","discover_label_visit_galleries":"\u8bbf\u95ee\u56fe\u5e93","discover_label_your_creative_fields":"\u60a8\u7684\u521b\u610f\u9886\u57df","discover_location_block_header":"\u6309\u4f4d\u7f6e\u7b5b\u9009\u662f\u4e00\u9879\u9ad8\u7ea7\u529f\u80fd","discover_location_block_message":"\u501f\u52a9 Talent \u641c\u7d22\u5668\uff0c\u6309\u4f4d\u7f6e\u641c\u7d22\u4e0d\u53d7\u4efb\u4f55\u9650\u5236","discover_location_block_more":"\u4e86\u89e3 Talent \u641c\u7d22","discover_location_option_worldwide":"\u5168\u7403","discover_sort_option_alpha":"\u6309\u5b57\u6bcd\u987a\u5e8f","discover_sort_option_creative_index":"\u521b\u610f\u6307\u6570","discover_sort_option_featured":"\u7279\u522b\u63a8\u8350","discover_sort_option_list_order":"\u5217\u8868\u987a\u5e8f","discover_sort_option_most_appreciated":"\u597d\u8bc4\u6700\u591a","discover_sort_option_most_discussed":"\u8ba8\u8bba\u6700\u591a","discover_sort_option_most_followed":"\u88ab\u5173\u6ce8\u6700\u591a\u7684\u4f5c\u54c1","discover_sort_option_most_recent":"\u6700\u65b0","discover_sort_option_most_relevant":"\u6700\u76f8\u5173","discover_sort_option_most_similar":"\u6700\u76f8\u4f3c","discover_sort_option_most_viewed":"\u67e5\u770b\u6700\u591a","discover_time_option_all_time":"\uff08\u6240\u6709\u65f6\u95f4\uff09","discover_time_option_this_month":"\u672c\u6708","discover_time_option_this_week":"\u672c\u5468","discover_time_option_today":"\u4eca\u5929","edit_add_custom_section":"+ \u6dfb\u52a0\u81ea\u5b9a\u4e49\u533a\u57df","edit_basic_company":"\u516c\u53f8","edit_basic_first_name":"\u540d\u5b57","edit_basic_last_name":"\u59d3\u6c0f","edit_basic_occupation":"\u804c\u4e1a","edit_basic_occupation_placeholder":"\u4f8b\u5982: \u8d44\u6df1\u8bbe\u8ba1\u4eba\u5458\u3001\u827a\u672f\u603b\u76d1\u3001\u5b66\u751f","edit_basic_website":"\u7f51\u7ad9 URL","edit_custom_about":"\u5173\u4e8e\u6211","edit_custom_desc":"\u8bf4\u660e","edit_custom_section":"\u81ea\u5b9a\u4e49\u533a\u57df","edit_custom_title":"\u533a\u57df\u6807\u9898","edit_profile_basic":"\u57fa\u672c\u4fe1\u606f","edit_profile_download_pdf":"\u4e0b\u8f7d\u4e3a PDF","edit_profile_experience":"\u5de5\u4f5c\u7ecf\u5386","edit_profile_experience_button":"\u7f16\u8f91\u5de5\u4f5c\u7ecf\u5386","edit_profile_links":"Web \u5f15\u7528","edit_profile_open_pdf":"\u4f5c\u4e3a PDF \u6253\u5f00","edit_profile_teams":"\u56e2\u961f","edit_profile_web":"\u5e10\u6237\u8fde\u63a5","edit_teams_label":"\u52a0\u5165\u56e2\u961f","edit_teams_placeholder":"\u56e2\u961f\u540d\u79f0","email_unsubscribed_message":"\u67e5\u770b\u6211\u4eec\u6392\u540d\u9760\u524d\u7684\u9879\u76ee\u548c\u7b56\u5c55\u5e93","email_unsubscribed_title":"\u60a8\u5df2\u53d6\u6d88\u8ba2\u9605\u6211\u4eec\u53d1\u9001\u7684\u7535\u5b50\u90ae\u4ef6\u3002","error_adobe_already_linked":"Adobe ID \u5df2\u94fe\u63a5\u5230\u53e6\u4e00\u4e2a Behance \u5e10\u6237","error_adobe_swap_no_match":"\u60a8\u7684\u7535\u5b50\u90ae\u4ef6\u6216\u5bc6\u7801\u4e0d\u5339\u914d\u3002\u8bf7\u786e\u4fdd\u8f93\u5165\u60a8\u7684 <strong>Adobe ID \u5bc6\u7801<\/strong>","error_adobe_unable_to_find":"\u65e0\u6cd5\u627e\u5230\u60a8\u7684 Adobe ID","error_back_to_adobe_id_login":"\u8fd4\u56de\u5230 Adobe ID \u767b\u5f55","error_cant_find_that_page":"\u7cdf\u7cd5\uff01\u6211\u4eec\u65e0\u6cd5\u627e\u5230\u8be5\u9875\u9762\u3002","error_internal_server_error":"\u51fa\u73b0\u4e86\u5185\u90e8\u670d\u52a1\u5668\u9519\u8bef\u3002","error_page_not_found":"\u627e\u4e0d\u5230\u9875\u9762","error_updated_credentials":"\u5df2\u66f4\u65b0\u51ed\u636e","error_we_apologize_for_inconvenience":"\u4e3a\u6b64\u9020\u6210\u7684\u4efb\u4f55\u4e0d\u4fbf\uff0c\u6211\u4eec\u6df1\u8868\u6b49\u610f\uff0c\u540c\u65f6\u611f\u8c22\u60a8\u7684\u8010\u5fc3\u7b49\u5f85\u3002","error_why_not_check_out":"\u4e0d\u59a8\u67e5\u770b\u6211\u4eec\u6392\u540d\u9760\u524d\u7684\u9879\u76ee\u548c\u7b56\u5c55\u5e93\u3002","follow_message_following":"\u6b63\u5728\u5173\u6ce8 {{signupFrom.title}}","follow_message_gathering":"\u6536\u96c6\u4ed6\u4eec\u7684\u9879\u76ee\u548c\u6d3b\u52a8...","footer_adobe_family":"Adobe \u4ea7\u54c1\u5bb6\u65cf\u4e2d\u7684\u6210\u5458","footer_beta_label":"\u6d4b\u8bd5\u7248","footer_copyright":"\u6240\u6709\u6210\u5458\u4f5c\u54c1\u7248\u6743\u5747\u5c5e\u5404\u81ea\u6240\u6709\u8005\uff0c\u5426\u5219\uff0c&copy; 2006-{{year}} Adobe Systems Incorporated\u3002","footer_faq":"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54","footer_made_in_nyc":"\u7ebd\u7ea6\u5236\u9020","footer_more_about":"\u5173\u4e8e Behance \u548c\u62db\u8d24\u7eb3\u58eb","footer_more_api":"Behance API","footer_more_apps":"\u5e94\u7528\u7a0b\u5e8f","footer_more_behance":"\u66f4\u591a Behance","footer_more_blog":"\u535a\u5ba2","footer_more_portfolio":"Adobe Portfolio","footer_more_prw":"\u4f5c\u54c1\u96c6\u56de\u987e\u4e4b\u5468","footer_more_success":"\u6210\u529f\u6848\u4f8b","footer_more_tips":"\u521b\u4f5c\u804c\u4e1a\u63d0\u793a","footer_take_creative_control_mih":"\u638c\u63a7\u521b\u610f\u3001<br class=\"show-phone\" \/>\u5b9e\u73b0\u7075\u611f","footer_tou_privacy":"TOU \u548c\u9690\u79c1","form_template_error_saving":"\u4fdd\u5b58\u65f6\u51fa\u9519: \u8bf7\u7a0d\u540e\u91cd\u8bd5","form_template_saved":"\u5df2\u4fdd\u5b58","form_template_saving":"\u5b58\u50a8...","galleries_all_categories":"\u6240\u6709\u7c7b\u522b","galleries_collections_button_new":"\u65b0\u5efa\u6536\u85cf\u5939","galleries_collections_empty_header":"\u60a8\u7684\u641c\u7d22\u672a\u8fd4\u56de\u4efb\u4f55\u4f5c\u54c1\u96c6\u3002","galleries_collections_empty_message":"\u8bf7\u786e\u4fdd\u6240\u6709\u5b57\u8bcd\u62fc\u5199\u6b63\u786e\u6216\u5c1d\u8bd5\u5176\u4ed6\u5173\u952e\u5b57\u3002","galleries_collections_label_sort":"\u5206\u7c7b","galleries_collections_placeholder_search":"\u641c\u7d22\u4f5c\u54c1\u96c6","galleries_collections_sort_most_followed":"\u88ab\u5173\u6ce8\u6700\u591a\u7684\u4f5c\u54c1","galleries_collections_sort_most_recent":"\u6700\u8fd1\u66f4\u65b0","inbox_accept":"\u63a5\u53d7","inbox_action":"\u884c\u52a8","inbox_action_archive":"\u5df2\u5c06\u90ae\u4ef6\u5b58\u6863!","inbox_action_block":"\u5df2\u963b\u6b62\u7684\u7528\u6237!","inbox_action_delete":"\u90ae\u4ef6\u5df2\u5220\u9664!","inbox_action_spam":"\u90ae\u4ef6\u5df2\u6807\u8bb0\u4e3a\u5783\u573e\u90ae\u4ef6!","inbox_action_unarchive":"\u90ae\u4ef6\u5df2\u79fb\u81f3\u6536\u4ef6\u7bb1!","inbox_archive_empty":"\u5b58\u6863\u4e2d\u6ca1\u6709\u90ae\u4ef6","inbox_archive_empty_search":"\u5b58\u6863\u4e2d\u6ca1\u6709\u4e0e\u60a8\u7684\u641c\u7d22\u5339\u914d\u7684\u90ae\u4ef6","inbox_archive_noun_label":"\u5f52\u6863","inbox_archive_search":"\u641c\u7d22\u5b58\u6863\u90ae\u4ef6","inbox_archive_verb_label":"\u5f52\u6863","inbox_block":"\u963b\u6b62\u7528\u6237","inbox_block_msg":"\u60a8\u5c06\u4e0d\u518d\u63a5\u6536\u6765\u81ea\u88ab\u963b\u6b62\u7684\u7528\u6237\u7684\u90ae\u4ef6\u3002\u60a8\u53ef\u4ee5\u5728\u5e10\u6237\u8bbe\u7f6e\u4e2d\u53d6\u6d88\u963b\u6b62\u7528\u6237\u3002","inbox_compose":"\u7f16\u5199","inbox_compose_cancel":"\u53d6\u6d88","inbox_compose_message":"\u4fe1\u606f","inbox_compose_multiple":"\u6b64\u90ae\u4ef6\u5c06\u662f\u60a8\u4e0e\u4ee5\u4e0a\u6536\u4ef6\u4eba\u4e4b\u95f4\u7684\u5bf9\u8bdd\u7ebf\u7d22\u3002","inbox_compose_new":"\u65b0\u90ae\u4ef6","inbox_compose_send":"\u53d1\u9001","inbox_compose_sent":"\u5df2\u53d1\u9001\u90ae\u4ef6!","inbox_compose_to":"\u6536\u4ef6\u4eba","inbox_confirm_alert":"\u4ece\u9875\u9762\u79bb\u5f00\u5c06\u5bfc\u81f4\u60a8\u4e22\u5931\u6b63\u5728\u7f16\u5199\u7684\u90ae\u4ef6\u3002\u662f\u5426\u786e\u5b9e\u8981\u79bb\u5f00?","inbox_decline":"\u62d2\u7edd","inbox_delete":"\u6c38\u4e45\u5220\u9664","inbox_dialog_cancel":"\u53d6\u6d88","inbox_dialog_delete_cancel":"\u53d6\u6d88","inbox_dialog_delete_html":"\u662f\u5426\u786e\u5b9a\u8981\u6c38\u4e45\u5220\u9664\u6b64\u90ae\u4ef6? \u5220\u9664\u7684\u90ae\u4ef6\u65e0\u6cd5\u6062\u590d\u3002","inbox_dialog_delete_okay":"\u6c38\u4e45\u5220\u9664!","inbox_dialog_delete_title":"\u5220\u9664\u90ae\u4ef6","inbox_dialog_okay":"\u786e\u5b9a","inbox_dialog_spam_html":"\u662f\u5426\u786e\u5b9e\u8981\u5c06\u6b64\u90ae\u4ef6\u6807\u8bb0\u4e3a\u5783\u573e\u90ae\u4ef6?<br>\u5982\u679c\u8fd9\u6837\u505a\uff0c\u60a8\u5c06\u963b\u6b62\u4e0e\u6b64\u4eba\u5458\u7684\u672a\u6765\u901a\u4fe1\u3002<br><br>\u60a8\u53ef\u4ee5\u5728\u5e10\u6237\u8bbe\u7f6e\u4e2d\u53d6\u6d88\u963b\u6b62\u4eba\u5458\u3002","inbox_dialog_spam_title":"\u6807\u8bb0\u4e3a\u5783\u573e\u90ae\u4ef6","inbox_dialog_warning_html":"\u662f\u5426\u786e\u5b9e\u8981\u79bb\u5f00? \u60a8\u5c06\u4e22\u5931\u60a8\u7684\u5f53\u524d\u90ae\u4ef6\u3002","inbox_dialog_warning_title":"\u60a8\u5728\u6b64\u9875\u9762\u4e0a\u6709\u672a\u4fdd\u5b58\u7684\u90ae\u4ef6\u3002","inbox_empty":"\u60a8\u7684\u6536\u4ef6\u7bb1\u4e2d\u6ca1\u6709\u90ae\u4ef6\u3002","inbox_empty_search":"\u6536\u4ef6\u7bb1\u4e2d\u6ca1\u6709\u4e0e\u60a8\u7684\u641c\u7d22\u5339\u914d\u7684\u90ae\u4ef6\u3002","inbox_error":"\u6536\u4ef6\u7bb1\u5f53\u524d\u6b63\u5728\u7ef4\u62a4\u4e2d\u3002\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002","inbox_job_empty":"\u6ca1\u6709\u4efb\u4f55\u90ae\u4ef6\u6807\u8bb0\u4e3a\u804c\u4f4d\u673a\u4f1a","inbox_job_empty_search":"\u6ca1\u6709\u6807\u8bb0\u4e3a\u804c\u4f4d\u673a\u4f1a\u5e76\u4e0e\u60a8\u7684\u641c\u7d22\u5339\u914d\u7684\u90ae\u4ef6","inbox_job_label":"\u804c\u4f4d\u673a\u4f1a","inbox_job_opportunities_for_you":"\u60a8\u7684\u804c\u4f4d\u673a\u4f1a<\/span><span class=\"beicons-pre beicons-pre-check\"><\/span>","inbox_job_search":"\u641c\u7d22\u6807\u8bb0\u4e3a\u804c\u4f4d\u673a\u4f1a\u7684\u90ae\u4ef6","inbox_label":"\u6536\u4ef6\u7bb1","inbox_mark_as_job":"\u6807\u8bb0\u4e3a\u6536\u4ef6\u4eba\u7684\u201c\u804c\u4f4d\u673a\u4f1a\u201d","inbox_message_archived":"\u5df2\u5b58\u6863","inbox_message_job":"\u804c\u4f4d","inbox_message_sent_as_job":"\u5df2\u4f5c\u4e3a\u804c\u4f4d\u53d1\u9001","inbox_message_tooltip_others":"{{numAdditional}} \u5176\u4ed6","inbox_message_with":"\u4e0e\u6b64\u4eba\u7684\u5f80\u6765\u90ae\u4ef6","inbox_messages":"\u60a8\u7684\u90ae\u4ef6","inbox_messages_empty":"\u6536\u4ef6\u7bb1\u4e2d\u6ca1\u6709\u90ae\u4ef6","inbox_messages_empty_search":"\u6536\u4ef6\u7bb1\u4e2d\u6ca1\u6709\u4e0e\u60a8\u7684\u641c\u7d22\u5339\u914d\u7684\u90ae\u4ef6","inbox_more":"\u52a0\u8f7d\u66f4\u591a\u90ae\u4ef6","inbox_move":"\u79fb\u52a8\u81f3\u6536\u4ef6\u7bb1","inbox_need_verified_email_address_to_access":"\u60a8\u9700\u8981\u5177\u5907\u7ecf\u8fc7\u9a8c\u8bc1\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u624d\u80fd\u4f7f\u7528\u6b64\u529f\u80fd","inbox_no_user":"\u627e\u4e0d\u5230\u5177\u6709\u8be5\u540d\u79f0\u7684\u7528\u6237","inbox_none_selected":"\u672a\u9009\u62e9\u90ae\u4ef6","inbox_page_title":"\u6536\u4ef6\u7bb1","inbox_read":"\u6807\u8bb0\u4e3a\u5df2\u8bfb","inbox_recipients_blocked":"\u76ee\u524d\u5df2\u5c4f\u853d\u4e00\u4e2a\u6216\u591a\u4e2a\u5df2\u9009\u62e9\u7684\u6536\u4ef6\u4eba\u3002\u8bf7\u8bbf\u95ee\u5e10\u6237\u8bbe\u7f6e\u7684\u9690\u79c1\u6807\u7b7e\u9875\u89e3\u9664\u5bf9\u6210\u5458\u7684\u5c4f\u853d\u3002","inbox_reply":"\u56de\u590d","inbox_request_accept":"\u5df2\u63a5\u53d7\u8bf7\u6c42","inbox_request_declined":"\u5df2\u62d2\u7edd\u8bf7\u6c42","inbox_search":"\u641c\u7d22\u6536\u4ef6\u7bb1\u90ae\u4ef6","inbox_see":"\u67e5\u770b\u6240\u6709\u90ae\u4ef6","inbox_select_all":"\u5168\u9009","inbox_spam":"\u6807\u8bb0\u4e3a\u5783\u573e\u90ae\u4ef6","inbox_unable_to_send_message":"\u6b64\u65f6\u6211\u4eec\u65e0\u6cd5\u5411\u60a8\u53d1\u9001\u4fe1\u606f","inbox_view":"\u67e5\u770b\u5168\u90e8","inbox_welcome":"\u6b22\u8fce\u8bbf\u95ee\u60a8\u7684\u65b0\u6536\u4ef6\u7bb1","inbox_welcome_faq":"\u6709\u66f4\u591a\u95ee\u9898? <a href=\"{{faq}}\">\u8bf7\u67e5\u770b\u5e38\u89c1\u95ee\u9898\u89e3\u7b54 &rarr;<\/a>","inbox_welcome_feat":"\u4e00\u4e9b\u8981\u4e86\u89e3\u7684\u65b0\u589e\u529f\u80fd:","inbox_welcome_notif":"\u90ae\u4ef6\u901a\u77e5","inbox_welcome_notif_desc":"\u901a\u77e5\u73b0\u5728\u5c06\u8ba1\u5165\u5230\u7ebf\u7d22\u800c\u975e\u5355\u72ec\u7684\u90ae\u4ef6\u4e2d\uff0c\u56e0\u6b64\u60a8\u7684\u672a\u8bfb\u90ae\u4ef6\u7684\u8ba1\u6570\u53ef\u80fd\u663e\u5f97\u8f83\u5c0f\u3002","inbox_welcome_thread":"\u5b9e\u65f6\u7684\u7ebf\u7d22\u5f0f\u90ae\u4ef6","inbox_welcome_thread_desc":"\u90ae\u4ef6\u73b0\u5728\u662f\u7ebf\u7d22\u5f0f\u5bf9\u8bdd\u3002\u82e5\u53d1\u9001\u7ed9\u591a\u4e2a\u4eba\uff0c\u5c06\u521b\u5efa\u5bf9\u6240\u6709\u6536\u4ef6\u4eba\u53ef\u89c1\u7684\u7fa4\u53d1\u90ae\u4ef6\u3002\u60a8\u7684\u5df2\u53d1\u9001\u90ae\u4ef6\u662f\u7ebf\u7d22\u7684\u4e00\u90e8\u5206\u3002","job_applicant_label_fields":"\u9886\u57df:","job_applicant_label_location":"\u4f4d\u7f6e:","job_button_apply_at_url":"\u7533\u8bf7\u7f51\u5740 {{apply_url_label}}","job_button_apply_for_job":"\u7533\u8bf7\u804c\u4f4d","job_button_back_to_post":"\u8fd4\u56de\u53d1\u5e03","job_button_edit_profile":"\u7f16\u8f91\u4e2a\u4eba\u8d44\u6599","job_button_submit_application":"\u63d0\u4ea4\u7533\u8bf7","job_label_about":"\u5173\u4e8e","job_label_current_openings":"\u5f53\u524d\u7a7a\u7f3a\u804c\u4f4d","job_label_team":"\u56e2\u961f","job_label_team_members":"\u56e2\u961f\u6210\u5458","job_label_view_all":"\u67e5\u770b\u5168\u90e8","job_location_anywhere":" \u4efb\u4f55\u5730\u70b9","job_remove_from_team":"\u4ece\u6211\u7684\u56e2\u961f\u79fb\u9664\u6b64\u53d1\u5e03","job_type_freelance":"\u81ea\u7531\u804c\u4e1a\u8005","job_type_full_time":"\u5168\u804c","job_type_internship":"\u5b9e\u4e60","joblist_breadcrumbs_joblist":"\u804c\u4f4d\u6e05\u5355","joblist_button_apply":"\u5e94\u7528","joblist_button_post_a_job":"\u53d1\u5e03\u804c\u4f4d","joblist_empty_filter_header":"\u6ca1\u6709\u4efb\u4f55\u804c\u4f4d\u7b26\u5408\u60a8\u7684\u7b5b\u9009\u6761\u4ef6","joblist_empty_filter_message":"\u8bf7\u5c1d\u8bd5\u6309\u66f4\u5e38\u89c4\u7684\u6761\u4ef6\u7b5b\u9009\u3002","joblist_empty_search_header":"\u60a8\u7684\u641c\u7d22\u201c{{search}}\u201d\u672a\u8fd4\u56de\u4efb\u4f55\u804c\u4f4d\u3002","joblist_empty_search_message":"\u8bf7\u786e\u4fdd\u6240\u6709\u5b57\u8bcd\u62fc\u5199\u6b63\u786e\u6216\u5c1d\u8bd5\u5176\u4ed6\u5173\u952e\u5b57\u3002","joblist_job_applied_tag":"\u5df2\u7533\u8bf7","joblist_job_apply_with_profile":"\u5229\u7528\u60a8\u7684\u4e2a\u4eba\u8d44\u6599\u8fdb\u884c\u7533\u8bf7","joblist_job_archive_message":"\u7531 <a href=\"{{creator.url}}\" target=\"_blank\">{{creator.display_name}}<\/a> \u53d1\u5e03\u7684\u5e16\u5b50\u5c06\u4f1a\u7acb\u5373\u4ece Behance \u548c\u60a8\u7684\u56e2\u961f\u9875\u9762 \"{{team.name}}\" \u4e2d\u5220\u9664\u3002\u5c06\u4f1a\u901a\u77e5\u53d1\u5e03\u8005\u6709\u5173\u5220\u9664\u60c5\u51b5\u3002","joblist_label_active_filters":"\u6d3b\u52a8\u7b5b\u9009\u5668\uff1a","joblist_label_creative_field":"\u521b\u610f\u9886\u57df","joblist_label_filter_jobs_by":"\u804c\u4f4d\u7b5b\u9009\u6761\u4ef6:","joblist_label_location":"\u4f4d\u7f6e","joblist_label_search_by_company":"\u6309\u516c\u53f8\u641c\u7d22","joblist_option_fields_all":"\u6240\u6709\u521b\u610f\u9886\u57df","joblist_option_location_country":"\u56fd\u5bb6\/\u5730\u533a","joblist_option_location_province":"\u7701\/\u76f4\u8f96\u5e02\/\u81ea\u6cbb\u533a","joblist_option_location_state":"\u5dde","joblist_placeholder_location_city":"\u57ce\u5e02","joblist_placeholder_search_keywords":"\u641c\u7d22\u5173\u952e\u5b57...","joblist_placeholder_type_company_name":"\u952e\u5165\u516c\u53f8\u540d\u79f0","loggedout_page_title":"\u5728\u51e0\u5206\u949f\u5185\u6784\u5efa\u4e00\u4e2a\u7f51\u7ad9","message_popup_label_message":"\u4fe1\u606f","message_popup_label_recipient":"\u6536\u4ef6\u4eba","mobile_banner_behance_for_platform":"Behance for Android","moretoggle_read_less":"\u8bfb\u53d6\u66f4\u5c11\u5185\u5bb9","moretoggle_read_more":"\u9605\u8bfb\u66f4\u591a","nav_breadcrumbs_collections":"\u4f5c\u54c1\u96c6","nav_breadcrumbs_collections_i_follow":"\u6211\u5173\u6ce8\u7684\u4f5c\u54c1\u96c6","nav_breadcrumbs_connections":"\u8054\u7cfb","nav_breadcrumbs_discover":"\u53d1\u73b0","nav_breadcrumbs_my_collections":"\u6211\u7684\u4f5c\u54c1\u96c6","nav_breadcrumbs_my_profile":"\u6211\u7684\u4e2a\u4eba\u8d44\u6599","nav_breadcrumbs_poweredby":"\u6280\u672f\u652f\u6301:","nav_primary_activity":"\u6d3b\u52a8","nav_primary_add_project":"\u6dfb\u52a0\u9879\u76ee","nav_primary_add_work":"\u6dfb\u52a0\u4f5c\u54c1","nav_primary_apps":"\u5e94\u7528\u7a0b\u5e8f","nav_primary_curated_galleries":"\u7b56\u5c55\u5e93","nav_primary_discover":"\u53d1\u73b0","nav_primary_get_the_app":"\u83b7\u53d6\u5e94\u7528\u7a0b\u5e8f","nav_primary_hiring_talent":"\u62db\u8058\u4eba\u624d\uff1f","nav_primary_jobs":"\u804c\u4f4d","nav_primary_jobs_billing":"\u5e10\u5355","nav_primary_jobs_creative_jobs":"\u521b\u610f\u804c\u4f4d","nav_primary_jobs_my_talent_searches":"\u6211\u7684\u804c\u4f4d","nav_primary_jobs_new_talent_search":"\u53d1\u5e03\u804c\u4f4d","nav_primary_just_browse":"\u6682\u65f6\u4ec5\u4f9b\u6d4f\u89c8","nav_primary_log_in":"\u767b\u5f55","nav_primary_me":"\u6211","nav_primary_me_account_settings":"\u5e10\u6237\u8bbe\u7f6e","nav_primary_me_activate_behance":"\u6fc0\u6d3b Behance","nav_primary_me_help":"\u5e2e\u52a9","nav_primary_me_log_out":"\u6ce8\u9500","nav_primary_me_manage_my_adobe_id":"\u7ba1\u7406\u6211\u7684 Adobe ID","nav_primary_me_my_creative_cloud":"\u6211\u7684 Creative Cloud","nav_primary_me_my_portfolio":"\u6211\u7684\u4e2a\u4eba\u8d44\u6599","nav_primary_me_statistics":"\u7edf\u8ba1","nav_primary_me_work_experience":"\u5de5\u4f5c\u7ecf\u5386","nav_primary_portfolio":"\u914d\u7f6e\u6587\u4ef6","nav_primary_portfolio_my_profile":"\u6211\u7684\u4e2a\u4eba\u8d44\u6599","nav_primary_portfolio_my_team_page":"\u6211\u7684\u56e2\u961f\u9875\u9762","nav_primary_schools_and_orgs":"\u5b66\u6821\u548c\u7ec4\u7ec7","nav_primary_search_explore":"\u641c\u7d22\u548c\u6d4f\u89c8","nav_primary_showcase_discover_creative_work":"\u5c55\u793a\u548c\u53d1\u73b0\u521b\u610f\u4f5c\u54c1","nav_primary_sign_up":"\u6ce8\u518c","nav_primary_sign_up_for_free":"\u514d\u8d39\u6ce8\u518c","nav_primary_start_talent_search":"\u53d1\u5e03\u804c\u4f4d","nav_primary_talent_search":"\u53d1\u5e03\u804c\u4f4d","nav_primary_welome_message":"\u6b22\u8fce\u4f60\uff0c{{first_name}}\uff01","nav_secondary_joblist_creative_jobs":"\u521b\u610f\u804c\u4f4d","nav_secondary_joblist_my_jobs":"\u6211\u7684\u804c\u4f4d","nav_secondary_portfolio_my_portfolio":"\u6211\u7684 Adobe Portfolio","nav_secondary_portfolio_my_profile":"\u6211\u7684\u4e2a\u4eba\u8d44\u6599","nav_secondary_portfolio_my_team_page":"\u6211\u7684\u56e2\u961f\u9875\u9762","nav_secondary_portfolio_team_name_page":"{{label.name}} \u7684\u9875\u9762","nav_secondary_powered_by_collections":"\u4f5c\u54c1\u96c6","nav_secondary_powered_by_organizations":"\u7ec4\u7ec7","nav_secondary_powered_by_schools":"\u5b66\u6821","notifications_accepted":"\u63a5\u53d7","notifications_added_search":"{{actor.display_name}} \u5df2\u5c06 <a href=\"{{user.url}}\">{{user.display_name}}<\/a> \u6dfb\u52a0\u5230\u60a8\u7684\u201c<a href=\"{{job._links.recruiter}}\"<\/a>{{job.title}}<\/a>\u201d\u641c\u7d22","notifications_applied_job":"{{actor.display_name}} \u5df2\u7533\u8bf7\u60a8\u7684\u804c\u4f4d\u201c<a href=\"{{job._links.recruiter}}\"<\/a>{{job.title}}<\/a>\u201d","notifications_appreciated":"<a href=\"{{actor.url}}\" class=\"js-mini-profile\" data-id=\"{{actor.id}}\">{{actor.display_name}}<\/a> \u6b23\u8d4f\u60a8\u7684\u9879\u76ee","notifications_archived_job":"<a href=\"{{actor.url}}\">{{actor.display_name}} <\/a> \u5df2\u5c06\u4e0e\u60a8\u5171\u4eab\u7684\u804c\u4f4d\u201c<a href=\"{{job._links.recruiter}}\">{{job.title}}<\/a>\u201d\u5b58\u6863","notifications_declined":"\u62d2\u7edd\u9080\u8bf7","notifications_empty_content":"\u6211\u4eec\u4f1a\u5728\u60a8\u83b7\u5f97\u597d\u8bc4\u3001\u8bc4\u8bba\u6216\u65b0\u5173\u6ce8\u8005\u65f6\u901a\u77e5\u60a8\u3002\u8981\u5f00\u59cb\uff0c\u8bf7\u4e0a\u4f20\u65b0\u4f5c\u54c1\u3002","notifications_empty_title":"\u60a8\u5f53\u524d\u6ca1\u6709\u4efb\u4f55\u901a\u77e5\u3002","notifications_followed_collection":"<span class=\"js-mini-profile\" data-id=\"{{actor.id}}\">{{actor.display_name}}<\/span> \u5df2\u5173\u6ce8\u60a8\u7684\u4f5c\u54c1\u96c6\u201c<a href=\"{{collection.url}}\">{{collection.title}}<\/a>\u201d","notifications_followed_work":"<a href=\"{{actor.url}}\" class=\"js-mini-profile\" data-id=\"{{actor.id}}\">{{actor.display_name}}<\/a> \u5df2\u5173\u6ce8\u60a8\u7684\u4f5c\u54c1","notifications_group_more_updates":"+ <span class=\"count\">0<\/span> \u66f4\u591a\u6700\u65b0\u52a8\u6001","notifications_invite":"\u60a8\u5df2\u53d7\u9080\u52a0\u5165 <a href=\"{{actor.url}}\">{{actor.display_name}} \u7684<\/a>\u804c\u4f4d\u201c<a href=\"{{job._links.recruiter}}\"<\/a>{{job.title}}<\/a>\u201d","notifications_mentioned":"<a href=\"{{actor.url}}\">{{actor.display_name}}<\/a> \u5728\u8bc4\u8bba\u4e2d\u63d0\u5230\u4e86\u60a8","notifications_note":"{{actor.display_name}} \u5728\u60a8\u7684\u201c<a href=\"{{job._links.recruiter}}\">{{job.title}}<\/a>\u201d\u804c\u4f4d\u4e2d\u4e3a <a href=\"{{user.url}}\">{{user.display_name}}<\/a> \u8fdb\u884c\u4e86\u7559\u8a00","notifications_props_title":"\u60a8\u7684\u7533\u8bf7","notifications_recommendation_count":"\u6709\u5173\u201c<a href=\"{{job._links.recruiter}}\">{{job.title}}<\/a>\u201d\u7684\u65b0\u63a8\u8350: {{count}} \u4e2a","notifications_saved":"<a href=\"{{actor.url}}\" class=\"js-mini-profile\" data-id=\"{{actor.id}}\">{{actor.display_name}}<\/a> \u5df2\u4fdd\u5b58\u201c<a href=\"{{project.url}}\">{{project.name}}<\/a>\u201d","notifications_short_list":"{{actor.display_name}} \u5df2\u5c06 <a href=\"{{user.url}}\">{{user.display_name}}<\/a> \u6dfb\u52a0\u5230\u60a8\u7684\u201c<a href=\"{{job._links.recruiter}}\"<\/a>{{job.title}}<\/a>\u201d\u5019\u9009\u540d\u5355","notifications_social":"<div class=\"msg\">\u60a8\u7684 {{app}} \u597d\u53cb <a class=\"js-mini-profile\" data-id=\"{{actor.id}}\" href=\"{{actor.url}}\">{{actor.display_name}}<\/a> \u5df2\u52a0\u5165 Behance<\/div>","notifications_title":"\u60a8\u7684\u901a\u77e5","oboarding_submit_selected_galleries_gathering":"\u6536\u96c6\u4f18\u79c0\u7684 {{gallery1}} \u548c {{gallery2}} \u9879\u76ee...","onboarding_also_see_creative_work_in":"\u6211\u5e0c\u671b\u67e5\u770b\u4ee5\u4e0b\u4f4d\u7f6e\u7684\u521b\u610f\u4f5c\u54c1\uff1a","onboarding_followed":"\u5df2\u5173\u6ce8","onboarding_pulsePoint_appreciate_good_work":"\u4f5c\u54c1\u5f88\u68d2\uff01","onboarding_pulsePoint_appreciate_p1":"\u6b23\u8d4f\u9879\u76ee\u80fd\u63d0\u9ad8\u9879\u76ee\u7684\u66dd\u5149\u7387\u3002\u60a8\u7684\u5173\u6ce8\u8005\u5c06\u4f1a\u5728\u4ed6\u4eec\u7684\u6e90\u4e3b\u9875\u4e0a\u770b\u5230\u60a8\u6b23\u8d4f\u7684\u4f5c\u54c1\u3002","onboarding_pulsePoint_appreciate_p2":"\u800c\u4e14\uff0c\u8fd9\u4e5f\u662f\u4e00\u79cd\u4eab\u53d7:)","onboarding_pulsePoint_appreciate_projects":"\u6b23\u8d4f\u60a8\u559c\u6b22\u7684\u9879\u76ee\uff01","onboarding_pulsePoint_appreciated_p1":"\u5c0f\u8d34\u58eb\uff1a\u60a8\u53ef\u4ee5\u5728\u4e2a\u4eba\u8d44\u6599\u4e2d\u770b\u5230\u5b8c\u6574\u7684\u5df2\u6b23\u8d4f\u9879\u76ee\u5217\u8868\u3002","onboarding_pulsePoint_follow_creatives":"\u5173\u6ce8\u521b\u610f\u8bbe\u8ba1\u4eba\u5458","onboarding_pulsePoint_follow_nice":"\u597d\uff0c\u60a8\u73b0\u5728\u6b63\u5728\u5173\u6ce8","onboarding_pulsePoint_follow_p1":"\u5173\u6ce8\u521b\u610f\u8bbe\u8ba1\u4eba\u5458\uff0c\u4ee5\u5728\u81ea\u5df1\u7684\u6e90\u4e2d\u67e5\u770b\u4ed6\u4eec\u7684\u4f5c\u54c1\u3002","onboarding_pulsePoint_follow_p2":"\u60a8\u5c06\u4f1a\u770b\u5230\u4ed6\u4eec\u66f4\u65b0\u548c\u53d1\u5e03\u7684\u9879\u76ee\u53ca\u6b23\u8d4f\u7684\u6240\u6709\u4f5c\u54c1\uff0c\u4ee5\u4fbf\u4e86\u89e3","onboarding_see_creative_work_in":"\u6211\u8fd8\u5e0c\u671b\u67e5\u770b\u4ee5\u4e0b\u4f4d\u7f6e\u7684\u521b\u610f\u4f5c\u54c1\uff1a","onboarding_site_subtitle":"\u6b22\u8fce\u4f7f\u7528 Behance","onboarding_submit_selected_galleries_creating_custom":"\u521b\u5efa\u60a8\u7684\u81ea\u5b9a\u4e49\u6e90","portfolio_logout_creative_cloud":"\u53ef\u901a\u8fc7 Creative Cloud \u514d\u8d39\u83b7\u5f97","portfolio_logout_headline":"\u5728\u51e0\u5206\u949f\u5185\u6784\u5efa\u4e00\u4e2a\u7f51\u7ad9","portfolio_logout_responsive":"\u5b8c\u5168\u54cd\u5e94","portfolio_logout_sync_behance":"\u4e0e Behance \u540c\u6b65","portfolio_upsell_cc_members":"{{first_name}}\uff0c\u60a8\u597d\uff01 \u60a8\u5df2\u62e5\u6709 Creative Cloud\uff0c\u6240\u4ee5\u60a8\u53ef\u4ee5\u514d\u8d39\u83b7\u53d6 Adobe Portfolio\uff01","portfolio_upsell_cc_members_p1":"\u60a8\u7684\u8ddf\u4f5c\u54c1\u96c6\u7f51\u7ad9\u514d\u8d39\u4f7f\u7528 Creative Cloud\uff0c\u4e0e Behance \u540c\u6b65\uff0c\u4e14\u4e3a\u5168\u54cd\u5e94\u5f0f\u3002","profile_about_me_label":"\u5173\u4e8e\u6211","profile_about_team_label":"\u5173\u4e8e {{name}}","profile_add_button":"\u6dfb\u52a0","profile_add_custom_section":"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u533a\u57df","profile_add_new_page":"\u6dfb\u52a0\u65b0\u9875\u9762","profile_all_countries":"\u6240\u6709\u56fd\u5bb6\/\u5730\u533a","profile_apprecations_label":"\u597d\u8bc4","profile_back_to":"\u8fd4\u56de\u4e2a\u4eba\u8d44\u6599","profile_button_edit_info":"\u7f16\u8f91\u4fe1\u606f","profile_button_members":"\u6210\u5458","profile_button_projects":"\u9879\u76ee","profile_city":"\u57ce\u5e02","profile_collection_add_owner":"\u6dfb\u52a0\u6240\u6709\u8005","profile_collection_delete":"\u5220\u9664","profile_collection_edit_collection":"\u7f16\u8f91\u4f5c\u54c1\u96c6","profile_collection_make_private":"\u8bbe\u4e3a\u79c1\u6709","profile_collection_make_public":"\u8bbe\u4e3a\u516c\u5f00","profile_collection_note_privileges":"\u6ce8\u610f\uff1a\u5171\u540c\u6240\u6709\u8005\u62e5\u6709\u5bf9\u4f5c\u54c1\u96c6\u7684\u5168\u90e8\u7f16\u8f91\u6743\u9650\u3002","profile_collection_remove":"\u79fb\u53bb","profile_collection_rename":"\u91cd\u547d\u540d","profile_collection_who_co_owns":"\u8c01\u662f\u6b64\u4f5c\u54c1\u96c6\u7684\u5171\u540c\u6240\u6709\u8005?","profile_collections_i_follow":"\u6211\u5173\u6ce8\u7684\u4f5c\u54c1\u96c6","profile_collections_i_own":"\u6211\u7684\u4f5c\u54c1\u96c6","profile_collections_placeholder_search":"\u641c\u7d22","profile_collections_user_follows":"{{profile.display_name}} \u5173\u6ce8\u7684\u4f5c\u54c1\u96c6","profile_collections_user_owns":"{{profile.display_name}} \u7684\u4f5c\u54c1\u96c6","profile_current_openings_label":"\u5f53\u524d\u7a7a\u7f3a\u804c\u4f4d","profile_current_teams":"\u5f53\u524d\u56e2\u961f","profile_delete_project_confirm":"\u662f\u5426\u786e\u5b9e\u8981\u5220\u9664\u6b64\u9879\u76ee\uff1f","profile_delete_project_confirm_multiple_owners":"\u6b64\u9879\u76ee\u5177\u6709\u591a\u4e2a\u6240\u6709\u8005\uff0c\u5e76\u4e14\u5c06\u4ece\u5168\u90e8\u6240\u6709\u8005\u7684\u8d44\u6599\u4e2d\u5c06\u5176\u5b8c\u5168\u5220\u9664\u3002","profile_delete_project_confirm_portfolio":"\u91cd\u8981\u8bf4\u660e\uff1a\u8bf7\u6ce8\u610f\uff0c\u6b64\u9879\u76ee\u4e5f\u5c06\u4ece\u60a8\u7684 Adobe Portfolio \u7ad9\u70b9\u4e2d\u5220\u9664\uff0c\u4e14\u65e0\u6cd5\u6062\u590d\u3002","profile_delete_project_content":"\u5c06\u6c38\u4e45\u5220\u9664\u4e0e\u6b64\u9879\u76ee\u5173\u8054\u7684\u6240\u6709\u56fe\u50cf\u3001\u6587\u672c\u3001\u597d\u8bc4\u548c\u89c6\u56fe\u3002","profile_delete_project_draft_confirm":"\u662f\u5426\u786e\u5b9e\u8981\u5220\u9664\u6b64\u9879\u76ee\u8349\u7a3f\uff1f","profile_edit_drafts":"\u7f16\u8f91\u9879\u76ee\u8349\u7a3f","profile_edit_profile":"\u7f16\u8f91\u4e2a\u4eba\u8d44\u6599","profile_empty_add_first_project":"\u6dfb\u52a0\u60a8\u7684\u7b2c\u4e00\u4e2a\u9879\u76ee","profile_empty_check_back_explore_creatives":"\u8bf7\u7a0d\u540e\u56de\u6765\u3002\u90a3\u65f6\uff0c\u60a8\u53ef\u4ee5\u6d4f\u89c8\u6211\u4eec\u7684<a href=\"{{PAGE_URLS.CREATIVES_TO_FOLLOW}}\">\u7b56\u5c55\u521b\u610f\u5217\u8868\u8fdb\u884c\u5173\u6ce8\u3002<\/a>","profile_empty_check_back_explore_discover":"\u8bf7\u7a0d\u540e\u56de\u6765\u3002\u90a3\u65f6\uff0c\u60a8\u53ef\u4ee5\u6d4f\u89c8<a href=\"{{PAGE_URLS.SEARCH}}\">\u53d1\u73b0<\/a>\u4e2d\u7684\u5176\u4ed6\u521b\u610f\u4f5c\u54c1\u3002","profile_empty_collection_follow":"\u8981\u5173\u6ce8\u4f5c\u54c1\u96c6\uff0c\u8bf7\u5355\u51fb\u201c\u5173\u6ce8\u4f5c\u54c1\u96c6\u201d\u6309\u94ae\u3002\u9996\u5148\uff0c\u68c0\u67e5<a href=\"{{PAGE_URLS.POPULAR_COLLECTIONS}}\">\u70ed\u95e8\u4f5c\u54c1\u96c6<\/a>\u7684\u56fe\u5e93\u3002","profile_empty_create_collection":"\u8981\u521b\u5efa\u4e00\u4e2a\uff0c\u8bf7\u5355\u51fb\u4efb\u610f\u9879\u76ee\u5e95\u90e8\u7684\u201c\u6dfb\u52a0\u5230\u4f5c\u54c1\u96c6\u201d\u6309\u94ae\u3002","profile_empty_explore_creatives":"\u6d4f\u89c8\u6211\u4eec\u7684<a href=\"{{PAGE_URLS.CREATIVES_TO_FOLLOW}}\">\u7b56\u5c55\u521b\u610f\u5217\u8868\u8fdb\u884c\u5173\u6ce8\u3002<\/a>","profile_empty_explore_curated_creatives":"\u6d4f\u89c8\u6211\u4eec\u7684<a href=\"{{PAGE_URLS.CREATIVES_TO_FOLLOW}}\">\u7b56\u5c55\u521b\u610f\u5217\u8868\u8fdb\u884c\u5173\u6ce8\u3002<\/a>","profile_empty_followers":"\u60a8\u6ca1\u6709\u4efb\u4f55\u5173\u6ce8\u8005\u3002","profile_empty_followers_search":"\u60a8\u6ca1\u6709\u540d\u4e3a {{search}} \u7684\u4efb\u4f55\u5173\u6ce8\u8005\u3002","profile_empty_following":"\u60a8\u6ca1\u6709\u5173\u6ce8\u4efb\u4f55\u6210\u5458\u3002","profile_empty_following_search":"\u60a8\u6ca1\u6709\u5173\u6ce8\u540d\u4e3a {{search}} \u7684\u4efb\u4f55\u7528\u6237\u3002","profile_empty_no_appreciated":"\u60a8\u5c1a\u672a\u4e3a\u4efb\u4f55\u9879\u76ee\u70b9\u8d5e\u3002","profile_empty_no_collections":"\u60a8\u5c1a\u672a\u542f\u52a8\u4f5c\u54c1\u96c6\u3002","profile_empty_no_collections_followed":"\u60a8\u5c1a\u672a\u5173\u6ce8\u4f5c\u54c1\u96c6\u3002","profile_empty_no_team_members":"\u60a8\u6ca1\u6709\u4efb\u4f55\u56e2\u961f\u6210\u5458\u3002","profile_empty_no_team_members_search":"\u60a8\u6ca1\u6709\u540d\u4e3a {{search}} \u7684\u4efb\u4f55\u56e2\u961f\u6210\u5458\u3002","profile_empty_publish_promote":"\u8981\u5f00\u59cb\uff0c\u8bf7<a href=\"{{PAGE_URLS.PROJECT_EDITOR}}\">\u53d1\u5e03\u9879\u76ee<\/a>\u5e76\u5728\u60a8\u7684\u793e\u4ea4\u7f51\u7edc\u4e0a\u5ba3\u4f20\u8be5\u9879\u76ee\u3002","profile_empty_search_projects":"\u4f7f\u7528<a href=\"{{PAGE_URLS.SEARCH}}\">\u53d1\u73b0<\/a>\u9009\u9879\u5361\u6216\u6d4f\u89c8\u521b\u610f\u4f5c\u54c1\u7684<a href=\"{{PAGE_URLS.GALLERIES}}\">\u56fe\u5e93<\/a>\u6765\u53d1\u73b0\u51fa\u8272\u9879\u76ee\u3002","profile_empty_team_add_projects":"\u60a8\u53ef\u4ee5\u5728\u9879\u76ee\u7f16\u8f91\u5668\u4e2d\u7684\u9879\u76ee\u8bbe\u7f6e\u90e8\u5206\u5c06\u9879\u76ee\u6dfb\u52a0\u5230\u56e2\u961f\u8d44\u6599\u3002","profile_empty_team_members":"\u60a8\u6ca1\u6709\u4efb\u4f55\u56e2\u961f\u6210\u5458\u3002","profile_empty_team_members_search":"\u60a8\u6ca1\u6709\u540d\u4e3a {{search}} \u7684\u4efb\u4f55\u56e2\u961f\u6210\u5458\u3002","profile_empty_team_projects":"\u6b64\u56e2\u961f\u6ca1\u6709\u9879\u76ee","profile_empty_upload_files":"\u4e0a\u8f7d\u6587\u4ef6","profile_empty_upload_work":"\u4e0a\u8f7d\u60a8\u7684\u4f5c\u54c1\u4ee5\u83b7\u5f97\u53cd\u9988\u3001\u89c2\u70b9\u548c\u8bc4\u4ef7\u3002\u5df2\u53d1\u5e03\u7684\u9879\u76ee\u8fd8\u4f1a\u5f97\u5230\u6211\u4eec\u7ba1\u7406\u8005\u7684\u63a8\u4ecb\u3002","profile_empty_user_following":"{{profile.display_name}} \u672a\u5173\u6ce8\u4efb\u4f55\u6210\u5458\u3002","profile_empty_user_following_search":"{{profile.display_name}} \u6ca1\u6709\u5173\u6ce8\u540d\u4e3a {{search}} \u7684\u4efb\u4f55\u6210\u5458","profile_empty_user_has_no_appreciated":"{{profile.display_name}} \u5c1a\u672a\u4e3a\u4efb\u4f55\u9879\u76ee\u70b9\u8d5e\u3002","profile_empty_user_has_no_collection":"{{profile.display_name}} \u5c1a\u672a\u542f\u52a8\u4f5c\u54c1\u96c6\u3002","profile_empty_user_no_collections_followed":"{{profile.display_name}} \u5c1a\u672a\u5173\u6ce8\u4f5c\u54c1\u96c6\u3002","profile_empty_user_no_followers":"{{profile.display_name}} \u6ca1\u6709\u4efb\u4f55\u5173\u6ce8\u8005\u3002","profile_empty_user_no_followers_search":"{{profile.display_name}} \u6ca1\u6709\u540d\u4e3a {{search}} \u7684\u4efb\u4f55\u5173\u6ce8\u8005\u3002","profile_empty_user_no_projects":"{{profile.display_name}} \u5c1a\u672a\u4e0a\u4f20\u4efb\u4f55\u9879\u76ee\u3002","profile_empty_user_no_team_members":"{{profile.display_name}} \u6ca1\u6709\u4efb\u4f55\u56e2\u961f\u6210\u5458\u3002","profile_empty_user_no_team_members_search":"{{profile.display_name}} \u6ca1\u6709\u540d\u4e3a {{search}} \u7684\u4efb\u4f55\u56e2\u961f\u6210\u5458","profile_empty_user_team_members":"{{profile.display_name}} \u6ca1\u6709\u4efb\u4f55\u56e2\u961f\u6210\u5458\u3002","profile_empty_user_team_members_search":"{{profile.display_name}} \u6ca1\u6709\u540d\u4e3a {{search}} \u7684\u4efb\u4f55\u56e2\u961f\u6210\u5458\u3002","profile_enter_url":"\u8f93\u5165 URL","profile_enter_url_label":"Url","profile_focus_label":"\u521b\u610f\u9886\u57df","profile_followers_label":"\u5173\u6ce8\u8005","profile_following_label":"\u6b63\u5728\u5173\u6ce8","profile_jobs_view_all":"\u67e5\u770b\u5168\u90e8","profile_label_created_on":"\u521b\u5efa\u65f6\u95f4:","profile_label_member_since":"\u81ea\u4ee5\u4e0b\u65e5\u671f\u5f00\u59cb\u52a0\u5165\u7684\u6210\u5458:","profile_link_title":"\u8f93\u5165\u94fe\u63a5\u6807\u9898","profile_link_title_label":"\u94fe\u63a5\u6807\u9898","profile_location_label":"\u4f4d\u7f6e","profile_mark_as_spam":"\u6807\u8bb0\u4e3a\u5783\u573e\u90ae\u4ef6","profile_members_view_all":"\u67e5\u770b\u5168\u90e8","profile_my_teams":"\u6211\u7684\u56e2\u961f","profile_networks_label":"\u7f51\u7edc","profile_on_the_web_label":"\u5e10\u6237\u8fde\u63a5","profile_project_clone":"\u4eff\u5236","profile_project_copy":" \uff08\u526f\u672c\uff09","profile_project_delete":"\u5220\u9664","profile_project_edit":"\u7f16\u8f91","profile_project_promote":"\u63a8\u8350","profile_project_remove":"\u79fb\u53bb","profile_project_remove_owner":"\u79fb\u53bb","profile_project_unpublish":"\u53d6\u6d88\u53d1\u5e03","profile_project_views_label":"\u9879\u76ee\u4eba\u6c14","profile_province":"\u7701","profile_remove_owner_project_confirm":"\u6b64\u9879\u76ee{{#draft}}\u8349\u7a3f{{\/draft}}\u5c06\u4ece\u60a8\u7684\u4e2a\u4eba\u8d44\u6599\u4e2d\u5220\u9664\uff0c\u6b64\u540e\u60a8\u5c06\u65e0\u6cd5\u7ee7\u7eed\u5bf9\u5176\u8fdb\u884c\u8bbf\u95ee\u3002\u4f46\u4ecd\u53ef\u5728\u5176\u4ed6\u5171\u540c\u6240\u6709\u8005\u7684\u4e2a\u4eba\u8d44\u6599\u4e2d\u770b\u5230\u6b64\u8349\u7a3f\u3002","profile_remove_owner_project_confirm_portfolio":"\u91cd\u8981\u8bf4\u660e\uff1a\u8bf7\u6ce8\u610f\uff0c\u6b64\u9879\u76ee\u4e5f\u5c06\u4ece\u60a8\u7684 Adobe Portfolio \u7ad9\u70b9\u4e2d\u5220\u9664\u3002","profile_report":"\u62a5\u544a","profile_sent_for_verification":"\u60a8\u7684\u4e2a\u4eba\u8d44\u6599\u5c06\u53d1\u9001\u7ed9 {{profile.display_name}} \u56e2\u961f\u7ba1\u7406\u5458\u4ee5\u8fdb\u884c\u9a8c\u8bc1\u3002","profile_social_enter_url":"\u8f93\u5165 URL","profile_social_enter_username":"\u8f93\u5165\u7528\u6237\u540d","profile_social_link":"\u94fe\u63a5","profile_social_sharing_collection_text":"\u67e5\u770b @Behance \u4e0a\u7684 {{title}} \u4f5c\u54c1\u96c6\uff1a{{url}}","profile_social_sharing_my_collection_text":"\u67e5\u770b\u6211\u5728 @Behance \u4e0a\u7684\u4f5c\u54c1\u96c6\uff1a{{url}}","profile_social_sharing_my_profile_text":"\u67e5\u770b\u6211\u5728 @Behance \u4e0a\u7684\u4e2a\u4eba\u8d44\u6599\uff1a{{url}}","profile_social_sharing_my_team_text":"\u67e5\u770b\u6211\u5728 @Behance \u4e0a\u7684\u56e2\u961f\uff1a{{url}}","profile_social_sharing_profile_text":"\u67e5\u770b @Behance \u4e0a\u7684 {{display_name}}\uff1a{{url}}","profile_social_sharing_team_text":"\u67e5\u770b @Behance \u4e0a\u7684 {{display_name}} \u56e2\u961f\uff1a{{url}}","profile_social_sharing_this_collection_header":"\u5171\u4eab\u6b64\u4f5c\u54c1\u96c6","profile_social_sharing_this_profile_header":"\u5171\u4eab\u6b64\u4e2a\u4eba\u8d44\u6599","profile_social_sharing_this_team_header":"\u5171\u4eab\u6b64\u56e2\u961f","profile_social_sharing_your_collection_header":"\u5171\u4eab\u60a8\u7684\u4f5c\u54c1\u96c6","profile_social_sharing_your_profile_header":"\u5171\u4eab\u60a8\u7684\u4e2a\u4eba\u8d44\u6599","profile_social_sharing_your_team_header":"\u5171\u4eab\u60a8\u7684\u56e2\u961f","profile_social_submit":"\u63d0\u4ea4","profile_social_view_less":"\u67e5\u770b\u66f4\u5c11","profile_social_view_more":"\u67e5\u770b\u66f4\u591a","profile_state":"\u5dde","profile_tab_appreciated":"\u5df2\u8d5e","profile_tab_collections":"\u4f5c\u54c1\u96c6","profile_tab_info":"\u4fe1\u606f","profile_tab_projects":"\u9879\u76ee","profile_tab_team_members":"\u56e2\u961f\u6210\u5458","profile_team_admin":"\u7ba1\u7406\u5458","profile_team_back_to":"\u8fd4\u56de\u56e2\u961f","profile_team_badge":"\u56e2\u961f","profile_team_leave_team":"\u79bb\u5f00\u56e2\u961f","profile_team_make_admin":"\u8bbe\u4e3a\u7ba1\u7406\u5458","profile_team_member":"\u6210\u5458","profile_team_members":"\u56e2\u961f\u6210\u5458","profile_team_members_label":"\u56e2\u961f\u6210\u5458","profile_team_pending":"(\u7b49\u5f85\u786e\u8ba4)","profile_team_remove":"\u79fb\u53bb","profile_team_remove_admin":"\u79fb\u53bb\u7ba1\u7406\u5458","profile_teams_label":"\u56e2\u961f","profile_verification_request_sent_label":"\u9a8c\u8bc1\u8bf7\u6c42\u5df2\u53d1\u9001","profile_verified_profile_visible":"\u7ecf\u9a8c\u8bc1\u540e\uff0c\u60a8\u7684\u4e2a\u4eba\u8d44\u6599\u5c06\u5728 {{profile.display_name}} \u7684\u201c\u56e2\u961f\u6210\u5458\u201d\u4e0b\u65b9\u663e\u793a\uff0c\u5e76\u4e14 {{profile.display_name}} \u56e2\u961f\u5c06\u5728\u60a8\u7684\u4e2a\u4eba\u8d44\u6599\u4e2d\u663e\u793a\u3002","profile_view_experience":"\u67e5\u770b\u5de5\u4f5c\u7ecf\u5386","profile_view_full_resume":"\u67e5\u770b\u5b8c\u6574\u7b80\u5386","profile_web_references_label":"Web \u5f15\u7528","profile_work_experience_label":"\u5de5\u4f5c\u7ecf\u5386","profiled_featured_in_label":"\u4e13\u9898\u520a\u767b","project_about_label":"\u5173\u4e8e","project_add_collection":"\u6dfb\u52a0","project_add_to_collection_button":"\u6dfb\u52a0\u5230\u4f5c\u54c1\u96c6","project_apprecation_thank_you":"\u611f\u8c22!","project_appreciate_project":"\u6b23\u8d4f\u9879\u76ee","project_appreciate_thank_you":"\u611f\u8c22!","project_basic_info_label":"\u57fa\u672c\u4fe1\u606f","project_button_save_candidate":"\u53e6\u5b58\u4e3a\u5019\u9009\u4eba","project_by_label":"\u9879\u76ee\u4f5c\u8005","project_candidates_view_all":"\u67e5\u770b\u5168\u90e8","project_comments_title":"\u8bc4\u8bba <span class=\"js-comments-total\"><\/span>","project_copyright_attr":"\u5c5e\u6027","project_copyright_attr_no_deriv":"\u5c5e\u6027, \u7981\u6b62\u6f14\u7ece","project_copyright_attr_non_co":"\u5c5e\u6027, \u975e\u5546\u4e1a","project_copyright_attr_non_co_no_deriv":"\u5c5e\u6027, \u975e\u5546\u4e1a, \u7981\u6b62\u6f14\u7ece","project_copyright_attr_non_co_share_alike":"\u7f72\u540d, \u975e\u5546\u4e1a, \u76f8\u540c\u65b9\u5f0f\u5206\u4eab","project_copyright_attr_share_alike":"\u5c5e\u6027, \u76f8\u540c\u65b9\u5f0f\u5206\u4eab","project_copyright_info_label":"\u7248\u6743\u4fe1\u606f","project_copyright_no_use":"\u672a\u7ecf\u6240\u6709\u8005\u660e\u786e\u8bb8\u53ef\u4e0d\u5f97\u4f7f\u7528","project_copyright_read_more":"\u9605\u8bfb\u66f4\u591a","project_cover_by":"\u4f5c\u8005","project_cover_featured_on":"\u63a8\u8350\u65e5\u671f:","project_cover_marked_private":"\u6b64\u9879\u76ee\u88ab\u6807\u8bb0\u4e3a\u201c\u79c1\u5bc6\u201d\u3002","project_create_new_collection_placeholder":"\u521b\u5efa\u65b0\u4f5c\u54c1\u96c6","project_credits_label":"\u53c2\u4e0e\u4eba\u5458\u540d\u5355","project_download_trial":"\u7acb\u5373\u4e0b\u8f7d","project_draft_button_delete":"\u5220\u9664","project_draft_button_edit":"\u7f16\u8f91","project_draft_button_remove":"\u79fb\u53bb","project_draft_label_add_to_team":"\u6dfb\u52a0\u5230\u56e2\u961f\u9875\u9762","project_draft_last_modified":"\u6700\u540e\u4fee\u6539\u65e5\u671f: ","project_draft_no_image_yet":"\u8fd8\u6ca1\u6709\u56fe\u50cf","project_edit_button":"\u7f16\u8f91\u9879\u76ee","project_editor_first_time_button":"\u4e0a\u8f7d\u6587\u4ef6","project_editor_first_time_message":"(\u4e0a\u8f7d\u591a\u4e2a\u56fe\u50cf\u3001\u89c6\u9891\u548c\u97f3\u9891)","project_editor_first_time_select":"\u9009\u62e9\u60a8\u9879\u76ee\u7684\u6587\u4ef6","project_editor_full_bleed_full_width":"\u7ed9\u56fe\u50cf\u4e00\u4e9b\u751f\u52a8\u7a7a\u95f4\u5e76\u5411\u4e24\u8fb9\u6dfb\u52a0\u4e00\u4e9b\u7a7a\u767d","project_editor_full_bleed_not_bleedable":"\u8981\u5c06\u56fe\u50cf\u8bbe\u4e3a\u5168\u5bbd\uff0c<br>\u8bf7\u4e0a\u8f7d\u5bbd\u5ea6\u81f3\u5c11<br>\u4e3a 1400 \u50cf\u7d20\u7684\u56fe\u50cf\u3002","project_editor_full_bleed_not_full_width":"\u5c06\u56fe\u50cf\u8bbe\u7f6e\u4e3a\u5168\u5bbd","project_editor_maximum_modules_error":"\u60a8\u5df2\u8fbe\u5230\u6bcf\u9879\u76ee\u5141\u8bb8\u7684\u6700\u5927\u4e0a\u4f20\u6570\u91cf\u3002","project_editor_minimum_cover_size":"\u56fe\u50cf\u5fc5\u987b\u81f3\u5c11 {{cover_width}} x {{cover_height}}","project_editor_placeholder_description":"\u60a8\u7684\u63cf\u8ff0\u5c06\u663e\u793a\u5728\u6b64\u5904","project_editor_placeholder_name":"\u4e3a\u9879\u76ee\u547d\u540d","project_editor_settings_few_moments":"\u8fd9\u53ef\u80fd\u9700\u8981\u4e00\u6bb5\u65f6\u95f4","project_editor_settings_publishing_your_project":"\u6b63\u5728\u53d1\u5e03\u60a8\u7684\u9879\u76ee&hellip;","project_editor_sidebar_add_media":"\u6dfb\u52a0\u5a92\u4f53","project_editor_sidebar_add_text":"\u6dfb\u52a0\u6587\u672c","project_editor_sidebar_creative_cloud":"Creative Cloud","project_editor_sidebar_edit_design":"\u7f16\u8f91\u8bbe\u8ba1","project_editor_sidebar_edit_styles_layout":"\u7f16\u8f91\u6837\u5f0f\u4e0e\u5e03\u5c40","project_editor_sidebar_embed_media":"\u5d4c\u5165\u5a92\u4f53","project_editor_sidebar_lightroom":"Lightroom","project_editor_sidebar_need_help_faq":"\u9700\u8981\u5e2e\u52a9? <a href=\"{{faq_link}}\" target=\"_blank\">\u8bbf\u95ee\u6211\u4eec\u7684\u5e38\u89c1\u95ee\u9898\u89e3\u7b54 &rarr;<\/a>","project_editor_sidebar_upload_fiels":"\u4e0a\u8f7d\u6587\u4ef6","project_editor_warning_background":"\u6b64\u8fc7\u6e21\u53ef\u80fd\u5bfc\u81f4\u5bf9\u6587\u672c\u3001<br \/>\u95f4\u8ddd\u548c\u56fe\u50cf\u5927\u5c0f\u8fdb\u884c\u4e00\u4e9b\u683c\u5f0f\u66f4\u6539\u3002\u4f5c\u4e3a\u6b64\u66f4\u6539\u7684\u4e00\u90e8\u5206\uff0c\u6211\u4eec\u73b0\u5728<br \/>\u4ec5\u652f\u6301\u62fc\u8d34\u80cc\u666f\u56fe\u50cf\u3002","project_editor_warning_full_bleed":"\u60a8\u73b0\u5728\u8fd8\u5c06\u80fd\u591f\u4e0a\u8f7d 1200 \u50cf\u7d20\u56fe\u50cf\uff0c<br \/>\u6216\u8005\u5c55\u5f00\u5230 1400 \u50cf\u7d20\u4ee5\u5b9e\u73b0\u5168\u51fa\u8840\u4f53\u9a8c\u3002","project_editor_warning_improved":"\u6211\u4eec\u5df2\u663e\u8457\u6539\u5584\u4e86\u60a8\u7f16\u8f91\u9879\u76ee\u7684\u65b9\u5f0f\u3002","project_editor_warning_learn_more_faq":"\u5728\u6211\u4eec\u7684<a href=\"https:\/\/help.behance.net\/forums\/20802815\" target=\"_blank\">\u5e38\u89c1\u95ee\u9898\u89e3\u7b54<\/a>\u4e2d\u4e86\u89e3\u66f4\u591a\u4fe1\u606f","project_featured_on":"\u7279\u522b\u63a8\u8350\u9879\u76ee:","project_get_started":"\u5f00\u59cb","project_made_for_label":"\u4e3a\u4ee5\u4e0b\u5bf9\u8c61\u521b\u5efa\u7684\u9879\u76ee","project_mark_as_spam":"\u6807\u8bb0\u4e3a\u5783\u573e\u90ae\u4ef6","project_multiple_owners":"\u591a\u4e2a\u6240\u6709\u8005","project_no_account_signup":"\u6ca1\u6709\u5e10\u6237\uff1f<a class=\"js-adobeid-signup signup\" data-signup-from=\"Mature_Content_SignUpBehance\">\u6ce8\u518c Behance<\/a>","project_other_projects_by":"Other projects by","project_portfolio_list_1":"\u4efb\u4f55 Adobe Creative Cloud \u8ba1\u5212\u4f1a\u5458\u5747\u53ef\u514d\u8d39\u4f7f\u7528","project_portfolio_list_1_alt":"\u60a8\u662f Creative Cloud \u4f1a\u5458\uff0c\u53ef\u4ee5\u901a\u8fc7 CC \u8ba1\u5212\u514d\u8d39\u4f7f\u7528\u4f5c\u54c1\u96c6","project_portfolio_list_2":"\u4e0e Behance \u540c\u6b65","project_portfolio_list_3":"\u54cd\u5e94\u5f0f\u5e03\u5c40","project_portfolio_list_4":"\u8bbf\u95ee\u6240\u6709 Typekit \u5b57\u4f53","project_portfolio_nav_1":"\u5173\u4e8e\u6211","project_portfolio_nav_2":"\u8054\u7cfb\u65b9\u5f0f","project_portfolio_start":"\u7acb\u5373\u5f00\u59cb\u4f7f\u7528\u60a8\u7684\u4f5c\u54c1\u96c6","project_portfolio_title":"\u73b0\u5728\u60a8\u5df2\u53d1\u5e03\u4e86\u4e00\u4e2a\u9879\u76ee\uff0c\u4e0d\u59a8\u62ff\u51fa\u51e0\u5206\u949f\u4f7f\u7528 Adobe Portfolio \u6784\u5efa\u81ea\u5b9a\u4e49\u7f51\u7ad9\u3002","project_post_comment_button":"\u53d1\u8868\u8bc4\u8bba","project_published_date":"\u5df2\u53d1\u5e03:","project_report":"\u62a5\u544a","project_see_more_comments":"\u67e5\u770b\u66f4\u591a\u8bc4\u8bba","project_sign_in_mature":"\u5fc5\u987b\u767b\u5f55\u6216\u6ce8\u518c Behance<br class=\"hide-phone\"> \u624d\u80fd\u67e5\u770b\u5305\u542b\u6210\u4eba\u5185\u5bb9\u7684\u9879\u76ee\u3002<\/span>","project_sign_up_to_comment":"\u60a8\u5fc5\u987b<a class=\"js-comments-signup link-login fake-link\">\u6ce8\u518c<\/a>\u4ee5\u52a0\u5165\u5bf9\u8bdd\u3002","project_similar_creatives_label":"\u76f8\u4f3c\u521b\u610f","project_similar_projects_label":"\u76f8\u4f3c\u9879\u76ee","project_similar_projects_view_all":"\u67e5\u770b\u5168\u90e8","project_social_sharing_copy_link":"\u590d\u5236\u94fe\u63a5","project_social_sharing_my_text":"\u67e5\u770b\u6211\u7684 @Behance \u9879\u76ee\uff1a\u201c{{name}}\u201d{{url}}","project_social_sharing_text":"\u67e5\u770b\u6b64 @Behance \u9879\u76ee:\u201c{{name}}\u201d{{url}}","project_tags_label":"\u6807\u7b7e","project_tools_label":"\u5de5\u5177","project_tools_used_label":"\u6240\u7528\u5de5\u5177","project_unverified_popup_click_here":"\u5355\u51fb\u6b64\u5904","project_unverified_popup_message":"\u60a8\u7684\u9879\u76ee\u5f53\u524d\u4e0d\u4f1a\u516c\u5f00\u53ef\u89c1\uff0c\u56e0\u4e3a\u60a8\u7684\u5e10\u6237<br \/>\u672a\u7ecf\u9a8c\u8bc1\u3002","project_unverified_popup_warning_email":"\u8fd8\u6ca1\u6709\u6536\u5230\u9a8c\u8bc1\u7535\u5b50\u90ae\u4ef6\uff1f","project_unverified_popup_warning_inbox":"\u8bf7\u67e5\u770b\u60a8\u7684\u6536\u4ef6\u7bb1 {{#email}}({{email}}){{\/email}} \u5e76\u9a8c\u8bc1\u60a8\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u3002","project_view_complete_profile":"\u67e5\u770b<span class=\"complete\">\u5b8c\u6574<\/span>\u8d44\u6599","project_view_complete_profile_link":"\u67e5\u770b\u5b8c\u6574\u8d44\u6599","project_view_gallery":"\u67e5\u770b\u56fe\u5e93","prw_page_attend_link":"\u53c2\u52a0\u6d3b\u52a8","prw_page_curated":"\u4ee5\u6253\u9020\u521b\u610f\u804c\u4e1a\u751f\u6daf\u7684\u6f14\u8bb2\u4f5c\u4e3a\u6d3b\u52a8\u7684\u5f00\u573a\u767d\u3002","prw_page_curated_title":"\u7279\u522b\u6311\u9009\u7684\u6f14\u8bb2\u8005","prw_page_empty_closed":"\u4f5c\u54c1\u96c6\u56de\u987e\u5468\u7684\u6ce8\u518c\u73b0\u5df2\u5173\u95ed\u3002","prw_page_empty_hosting":"\u662f\u5426\u6709\u5174\u8da3\u4e3b\u529e\u201c\u4f5c\u54c1\u96c6\u56de\u987e\u201d\uff1f<a href=\"{{reviewevent}}\">\u5c06\u6d3b\u52a8\u6dfb\u52a0\u5230\u5217\u8868\u4e2d\uff01<\/a>","prw_page_empty_no_match":"\u6ca1\u6709\u4e0e\u60a8\u6240\u5728\u4f4d\u7f6e\u5339\u914d\u7684\u6d3b\u52a8","prw_page_empty_no_results":"\u6ca1\u6709\u7ed3\u679c","prw_page_event_address":"\u5730\u5740","prw_page_event_button_submit":"\u63d0\u4ea4","prw_page_event_city":"\u57ce\u5e02","prw_page_event_country":"\u56fd\u5bb6\/\u5730\u533a","prw_page_event_date":"\u6d3b\u52a8\u65e5\u671f","prw_page_event_details_disclaimer":"\u8bf7\u586b\u5199\u6d3b\u52a8\u7684\u8be6\u7ec6\u4fe1\u606f\u3002\u60a8\u53ef\u4ee5\u7a0d\u540e\u7f16\u8f91\u6d3b\u52a8\u7684\u8be6\u7ec6\u4fe1\u606f\u3002","prw_page_event_details_title":"\u4e8b\u4ef6\u8be6\u7ec6\u4fe1\u606f","prw_page_event_location_id":"\u4f4d\u7f6e ID","prw_page_event_org_desc":"\u60f3\u8981\u7ec4\u7ec7 Behance \u4f5c\u54c1\u96c6\u56de\u987e? \u8bf7\u9009\u62e9\u65e5\u671f\u548c\u573a\u5730\uff0c\u5728\u60a8\u9009\u62e9\u7684\u5e73\u53f0(Eventbrite\u3001Facebook \u7b49)\u4e0a\u521b\u5efa RSVP \u7684\u6d3b\u52a8\u9875\u9762\uff0c\u7136\u540e\u586b\u5199\u4e0b\u9762\u7684\u8868\u5355\u3002\u5df2\u6279\u51c6\u7684\u6d3b\u52a8\u5c06\u4f1a\u663e\u793a\u5728\u5b98\u65b9\u7684\u201c\u4f5c\u54c1\u96c6\u56de\u987e\u6d3b\u52a8\u201d\u9875\u9762\u4e0a\uff0c\u5e76\u4e14\u60a8\u5c06\u4f1a\u6536\u5230\u4f5c\u54c1\u96c6\u56de\u987e\u5de5\u5177\u5305\u3002","prw_page_event_org_title":"\u7ec4\u7ec7 Behance \u4f5c\u54c1\u96c6\u56de\u987e","prw_page_event_organizer":"\u7ec4\u7ec7\u8005","prw_page_event_state":"\u5dde","prw_page_event_success_desc":"\u6240\u6709\u6d3b\u52a8\u5728\u53d1\u5e03\u5230\u6d3b\u52a8\u9875\u9762\u4e4b\u524d\u90fd\u5c06\u7531 Behance \u56e2\u961f\u5ba1\u67e5\u3002\u60a8\u7684\u6d3b\u52a8\u5e94\u4f1a\u5728 2 \u4e2a\u5de5\u4f5c\u65e5\u5185\u83b7\u5f97\u5ba1\u6279\u6216\u53cd\u9988\u3002","prw_page_event_success_title":"\u60a8\u7684\u6d3b\u52a8\u5df2\u6210\u529f\u63d0\u4ea4!","prw_page_event_url":"\u6d3b\u52a8\u9875\u9762 URL","prw_page_event_venue_disclaimer":"\u5982\u679c\u60a8\u5c1a\u672a\u786e\u8ba4\u60a8\u7684\u5730\u70b9\uff0c\u8bf7\u6307\u5b9a\u6d3b\u52a8\u4e3e\u529e\u5730\u6240\u5728\u7684\u57ce\u5e02\u6216\u793e\u533a\u3002","prw_page_event_venue_name":"\u5730\u70b9\u540d\u79f0","prw_page_find_all_events":"\u6240\u6709\u6d3b\u52a8","prw_page_find_desc":"\u6bcf\u5e74\uff0c\u521b\u610f\u8bbe\u8ba1\u4eba\u5458\u90fd\u4f1a\u53c2\u52a0\u5728\u5168\u7403\u6570\u767e\u4e2a\u57ce\u5e02\u4e3e\u529e\u7684\u6d3b\u52a8\u3002\u901a\u8fc7\u5728\u4e0b\u9762\u641c\u7d22\u6765\u67e5\u627e\u60a8\u9644\u8fd1\u7684\u6d3b\u52a8:","prw_page_find_events_near_you":"\u60a8\u9644\u8fd1\u7684\u6d3b\u52a8","prw_page_find_finished":"\u4f5c\u54c1\u96c6\u56de\u987e\u5468\u5df2\u7ed3\u675f\u3002","prw_page_find_interest":"\u662f\u5426\u6709\u5174\u8da3\u4e3e\u529e\u4e0b\u6b21\u7684\u4f5c\u54c1\u96c6\u56de\u987e\uff1f<br><a href=\"{{revieworganize}}\">\u5728\u6b64\u5904\u4e86\u89e3\u66f4\u591a\u4fe1\u606f<\/a>\u3002","prw_page_find_over":"\u5f88\u9057\u61be\uff0c\u4f5c\u54c1\u96c6\u56de\u987e\u5468\u5df2\u8fc7\uff0c\u6240\u6709\u6d3b\u52a8\u90fd\u5df2\u7ed3\u675f\u3002\u8bf7\u5728\u4e0d\u4e45\u4e4b\u540e\u56de\u6765\u53c2\u52a0\u4e0b\u4e00\u6b21\u7684\u56de\u987e\u5468!","prw_page_find_title":"\u67e5\u627e\u60a8\u9644\u8fd1\u7684\u6d3b\u52a8","prw_page_hosted":"\u4e3b\u529e\u65b9\uff1a<a class=\"host-link text-ellipsis\" href=\"{{user.url}}\" target=\"_blank\">{{user.display_name}}<\/a>","prw_page_info":"\u7ec4\u7ec7\u8005\u7684\u4fe1\u606f","prw_page_info_add":"\u5c06\u60a8\u7684\u6d3b\u52a8\u6dfb\u52a0\u5230\u6211\u4eec\u7684\u5b98\u65b9\u9875\u9762","prw_page_info_add_desc":"\u82e5\u8981\u4eab\u53d7\u5404\u79cd\u597d\u5904(\u4f8b\u5982\u6211\u4eec\u63d0\u4f9b\u7684\u5ba3\u4f20\u3001\u5de5\u5177\u5305\u548c\u5168\u7a0b\u5e2e\u52a9)\uff0c\u60a8\u9700\u8981\u586b\u5199{{#active_week.open}}<a href=\"{{reviewevent}}\"{{^user}} class=\"js-adobeid-signup\"{{\/user}} data-signup-from=\"prw_page_signup\" data-adobeid-signup-enable-login=\"true\" data-adobeid-signup-destination=\"{{reviewevent}}\">\u6b64\u8868\u5355<\/a>{{\/active_week.open}}{{^active_week.open}}\u4e00\u4efd\u8868\u5355{{\/active_week.open}}\u6765\u6b63\u5f0f\u7533\u8bf7\u3002","prw_page_info_closed":"\u4f5c\u54c1\u96c6\u56de\u987e\u5468\u7684\u6ce8\u518c\u73b0\u5df2\u5173\u95ed\u3002","prw_page_info_comm":"\u5728 Facebook \u548c Twitter \u4e0a\u521b\u5efa\u672c\u5730\u793e\u533a","prw_page_info_comm_desc":"\u6211\u4eec\u9f13\u52b1\u91cd\u590d\u4e3e\u529e\u4f5c\u54c1\u96c6\u56de\u987e\u7684\u4e3e\u529e\u65b9\u5728 Facebook \u548c Twitter \u4e0a\u521b\u5efa\u548c\u7ef4\u62a4\u5e10\u6237\uff0c\u4ee5\u5ba3\u4f20\u5176\u56de\u987e\u6d3b\u52a8\u5e76\u4fdd\u6301\u6d3b\u52a8\u4eba\u6c14\u3002\u5982\u679c\u60a8\u8fd9\u6837\u505a\uff0c\u8bf7\u9075\u5faa\u8fd9\u4e9b\u51c6\u5219\u5e76\u4e0b\u8f7d\u8bbe\u8ba1\u8d44\u6e90\u4ee5\u521b\u5efa\u60a8\u7684\u9875\u9762\u3002","prw_page_info_comm_link":"\u793e\u4ea4\u5a92\u4f53\u6307\u5357","prw_page_info_create":"\u521b\u5efa\u6d3b\u52a8\u9080\u8bf7","prw_page_info_create_desc":"\u521b\u5efa\u6d3b\u52a8\u9080\u8bf7\u9875\u9762\uff0c\u53c2\u4e0e\u8005\u53ef\u5728\u5176\u4e2d\u4e86\u89e3\u6709\u5173\u60a8\u7684\u6d3b\u52a8\u548c RSVP \u7684\u66f4\u591a\u4fe1\u606f\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528\u81ea\u5df1\u559c\u6b22\u7684\u4efb\u4f55\u5e73\u53f0\u6536\u96c6 RSVP - \u8fd9\u5b8c\u5168\u7531\u60a8\u51b3\u5b9a! \u5f88\u591a\u4e3b\u529e\u65b9\u5bf9 Eventbrite\u3001Meetup.com \u6216 Facebook \u6d3b\u52a8\u62e5\u6709\u5f88\u597d\u7684\u4f53\u9a8c\u3002\u8bf7\u52a1\u5fc5\u5c3d\u65e9\u5217\u51fa\u60a8\u7684\u6240\u6709\u4fe1\u606f(\u5730\u5740\u3001\u65f6\u95f4\u3001\u8def\u7ebf\u548c\u665a\u4e0a\u7684\u5b89\u6392)\uff0c\u7136\u540e\u5728\u6d3b\u52a8\u65e5\u671f\u5230\u6765\u4e4b\u524d\u7ee7\u7eed\u66f4\u65b0\u60a8\u7684\u6765\u5bbe\u3002","prw_page_info_curate":"\u7279\u522b\u6311\u9009\u4e00\u4f4d\u6f14\u8bb2\u8005\u6765\u5f00\u542f\u60a8\u7684\u6d3b\u52a8","prw_page_info_curate_desc":"\u4e3a\u4e86\u8ba9\u6d3b\u52a8\u7684\u5f00\u5e55\u5f15\u4eba\u6ce8\u76ee\uff0c\u6240\u6709\u7ec4\u7ec7\u8005\u90fd\u5c06\u7279\u522b\u6311\u9009\u4e00\u4f4d\u660e\u661f\u6f14\u8bb2\u8005\u6765\u53d1\u8868\u4e3a\u65f6 15-20 \u5206\u949f\u7684\u6709\u5173\u6253\u9020\u5353\u8d8a\u7684\u521b\u610f\u804c\u4e1a\u751f\u6daf\u7684\u6f14\u8bb2\u3002\u9080\u8bf7\u5728\u81ea\u5df1\u7684\u9886\u57df\u5177\u6709\u9886\u5bfc\u5730\u4f4d\u7684\u5f53\u5730\u521b\u610f\u4eba\u58eb\u5411\u60a8\u7684\u89c2\u4f17\u53d1\u8868\u6f14\u8bb2\u3002","prw_page_info_desc":"\u4efb\u4f55\u6709\u5174\u8da3\u652f\u6301\u672c\u5730\u521b\u610f\u793e\u533a\u7684 Behance \u6210\u5458\u5747\u53ef\u4e3e\u529e\u4f5c\u54c1\u96c6\u56de\u987e\u3002\u5982\u679c\u60a8\u613f\u610f\u6295\u5165\u65f6\u95f4\u548c\u7cbe\u529b\u6765\u7b79\u5212\u3001\u5ba3\u4f20\u548c\u4e3e\u529e Behance \u4f5c\u54c1\u96c6\u56de\u987e - \u60a8\u5c31\u591f\u683c\u4e86! \u6211\u4eec\u5c06\u81f3\u59cb\u81f3\u7ec8\u4e0e\u60a8\u4fdd\u6301\u8054\u7cfb\uff0c\u4ee5\u63d0\u4f9b\u6709\u5173\u4e3e\u529e\u548c\u5ba3\u4f20\u60a8\u7684\u6d3b\u52a8\u7684\u8be6\u7ec6\u6307\u5bfc\u4ee5\u53ca\u4e00\u4e2a\u90ae\u5bc4\u7ed9\u60a8\u7684\u6d3b\u52a8\u5de5\u5177\u5305\u3002","prw_page_info_event_create_label":"\u521b\u5efa\u60a8\u7684\u6d3b\u52a8","prw_page_info_event_kit":"\u56de\u987e\u6d3b\u52a8\u5de5\u5177\u5305","prw_page_info_event_kit_desc":"\u786e\u8ba4\u60a8\u7684\u6d3b\u52a8\u540e\uff0c\u60a8\u5c06\u5f00\u59cb\u4ece\u6211\u4eec\u8fd9\u91cc\u63a5\u6536\u6750\u6599\uff0c\u5305\u62ec\u4e00\u4e2a\u7acb\u523b\u8ba9\u60a8\u5f00\u59cb\u7740\u624b\u5de5\u4f5c\u7684\u6570\u5b57\u5de5\u5177\u5305\uff0c\u4ee5\u53ca\u4e00\u4e2a\u90ae\u5bc4\u7ed9\u60a8\u7684\u3001\u5305\u542b\u5e2e\u52a9\u60a8\u4e3b\u529e\u6d3b\u52a8\u7684\u81ea\u5b9a\u4e49\u6750\u6599\u7684\u6d3b\u52a8\u5de5\u5177\u5305\u3002","prw_page_info_event_update_label":"\u66f4\u65b0\u60a8\u7684\u6d3b\u52a8","prw_page_info_host":"\u5b89\u6392\u4e00\u4e2a\u7a7a\u95f4\u6765\u4e3e\u529e\u60a8\u7684\u6d3b\u52a8","prw_page_info_host_desc":"\u6211\u4eec\u5efa\u8bae\u5229\u7528\u60a8\u7684\u793e\u533a\u4e2d\u7684\u8d44\u6e90\u6765\u501f\u7528\u7a7a\u95f4\uff0c\u6216\u5bfb\u627e\u53ef\u7528\u4e8e\u60a8\u7684\u6d3b\u52a8\u7684\u516c\u5171\u573a\u6240\u3002\u5982\u679c\u60a8\u613f\u610f\uff0c\u6211\u4eec\u53ef\u4ee5\u5141\u8bb8\u60a8\u4e0e\u8d5e\u52a9\u5546\u5408\u4f5c\u3002","prw_page_info_invite":"\u9080\u8bf7\u7ecf\u9a8c\u4e30\u5bcc\u7684\u4e13\u4e1a\u4eba\u5458\u62c5\u4efb\u56de\u987e\u5c0f\u7ec4\u7684\u7ec4\u957f","prw_page_info_invite_desc":"\u4e3a\u4e86\u8ba9\u6240\u6709\u4eba\u90fd\u6709\u673a\u4f1a\u5c55\u793a\u5176\u4f5c\u54c1\uff0c\u6211\u4eec\u5efa\u8bae\u5c06\u53c2\u4e0e\u8005\u5206\u4e3a\u82e5\u5e72\u4e2a\u8f83\u5c0f\u7684\u7ec4\uff0c\u5e76\u8ba9\u6bcf\u4e2a\u5c0f\u7ec4\u7684\u7ec4\u957f\u6765\u63d0\u4f9b\u6307\u5bfc\u548c\u53cd\u9988\u3002","prw_page_info_need_title":"\u60a8\u9700\u8981\u91c7\u53d6\u7684\u63aa\u65bd","prw_page_info_tips":"\u5ba3\u4f20\u63d0\u793a","prw_page_info_tips_desc":"\u4f7f\u7528 #BehanceReviews \u5728\u793e\u4ea4\u5a92\u4f53\u4e0a\u8c08\u8bba\u60a8\u7684\u6d3b\u52a8\u3002\u53ca\u65f6\u66f4\u65b0 Behance \u76f8\u5173\u4fe1\u606f\u548c\u60a8\u7684 RSVP \u94fe\u63a5\uff0c\u8ba9\u6240\u6709\u4eba\u90fd\u80fd\u83b7\u77e5\u6b63\u786e\u7684\u5730\u70b9\u3001\u65e5\u671f\u548c\u65f6\u95f4\u3002\u63a5\u89e6\u672c\u5730\u521b\u610f\u7ec4\u7ec7\u4ee5\u5ba3\u4f20\u60a8\u7684\u6d3b\u52a8\u3002\u968f\u7740\u6d3b\u52a8\u65e5\u671f\u7684\u4e34\u8fd1\uff0c\u901a\u8fc7\u6301\u7eed\u66f4\u65b0\u60a8\u7684\u9080\u8bf7\u6765\u8ba9\u60a8\u7684 RSVP \u4fdd\u6301\u70ed\u5ea6\u3002","prw_page_last_desc":"\u67e5\u770b\u6765\u81ea 120 \u4e2a\u56fd\u5bb6\/\u5730\u533a\u7684 1000 \u591a\u9879\u6d3b\u52a8\u7684\u7167\u7247\u548c\u89c6\u9891!","prw_page_last_email":"\u5411\u6211\u4eec\u53d1\u9001\u7535\u5b50\u90ae\u4ef6\u4ee5\u516c\u5f00\u60a8\u7684\u5185\u5bb9","prw_page_last_title":"\u67e5\u770b\u8fc7\u53bb\u7684\u6d3b\u52a8","prw_page_location_btn":"\u4f7f\u7528\u5f53\u524d\u4f4d\u7f6e","prw_page_motivator":"\u4f5c\u54c1\u96c6\u56de\u987e\u5468\u5c06\u6211\u4eec\u7e41\u8363\u7684\u7ebf\u4e0a\u793e\u533a\u5e26\u5230\u7ebf\u4e0b\u7a7a\u95f4\uff0c\u5e2e\u52a9\u521b\u610f\u8bbe\u8ba1\u4eba\u5458\u5206\u4eab\u4f5c\u54c1\u548c\u63d0\u5347\u6280\u827a\u3002\u53c2\u52a0\u60a8\u5f53\u5730\u7684\u4f5c\u54c1\u96c6\u56de\u987e\u5373\u53ef\u5c55\u793a\u60a8\u7684\u4f5c\u54c1\u5e76\u83b7\u53d6\u53cd\u9988\uff0c\u542c\u53d6\u5404\u7c7b\u5609\u5bbe\u6f14\u8bb2\u8005\u7684\u7cbe\u5f69\u6f14\u8bb2\uff0c\u5e76\u4e0e\u60a8\u5f53\u5730\u7684\u521b\u610f\u793e\u533a\u7684\u6210\u5458\u4ea4\u5f80\u3002","prw_page_motivator_title":"\u4e3a\u4f55\u53c2\u52a0\u4f5c\u54c1\u96c6\u56de\u987e\u5468\uff1f","prw_page_network":"\u5728\u6d3b\u52a8\u73b0\u573a\u56db\u5904\u8d70\u52a8\u4ee5\u7ed3\u8bc6\u60a8\u7684\u540c\u884c\u548c\u884c\u4e1a\u9886\u8896\u4eba\u7269\u5e76\u4e0e\u4e4b\u4ea4\u6d41\u3002","prw_page_network_title":"\u878d\u5165\u3001\u4ea4\u6d41\u548c\u7545\u996e","prw_page_organize_link":"\u7ec4\u7ec7\u6d3b\u52a8","prw_page_questions":"\u5982\u6709\u4efb\u4f55\u7591\u95ee\uff0c<a href=\"{{reviewsemail}}\">\u8bf7\u8054\u7cfb\u6211\u4eec\u3002<\/a>","prw_page_replace":"\u66ff\u6362","prw_page_review":"\u53c2\u4e0e\u8005\u5c06\u5206\u4e3a\u8f83\u5c0f\u7684\u7ec4\u6765\u5c55\u793a\u5de5\u4f5c\u548c\u83b7\u5f97\u53cd\u9988\u3002","prw_page_review_desc":"\u4f5c\u54c1\u96c6\u56de\u987e\u6d3b\u52a8\u53d1\u751f\u4e86\u4ec0\u4e48\u4e8b?","prw_page_review_title":"\u4f5c\u54c1\u96c6\u56de\u987e","prw_page_social_do_1":"\u5982\u679c\u201cBehance \u56de\u987e [\u5730\u70b9]\u201d\u4e0d\u5408\u9002\uff0c\u8bf7\u5728\u60a8\u7684\u5e10\u6237\u540d\u79f0\u4e2d\u52a0\u5165\u201cBeReviews\u201d\u3002","prw_page_social_do_2":"\u4f7f\u76f8\u5173\u5185\u5bb9\u4e0e Behance \u548c\u521b\u610f\u754c\u6b63\u5728\u5f00\u5c55\u7684\u5176\u4ed6\u6d3b\u52a8\u5bc6\u5207\u76f8\u5173\u3002","prw_page_social_do_3":"\u5f00\u59cb\u521b\u5efa\u4e00\u4e2a Facebook \u9875\u9762\uff0c\u800c\u975e\u4e00\u4e2a\u7ec4 (Facebook)\u3002","prw_page_social_do_4":"\u516c\u5f00\u7ba1\u7406\u5458\u4fe1\u606f (Facebook)\u3002","prw_page_social_do_5":"\u786e\u4fdd\u5df2\u586b\u5199\u60a8\u7684\u4e2a\u4eba twitter \u7d22\u5f15\u6216\u7535\u5b50\u90ae\u4ef6\u5730\u5740\uff0c\u4ee5\u4fbf\u4ed6\u4eba\u53ef\u4ee5\u8054\u7cfb\u5230\u60a8 (Twitter)\u3002","prw_page_social_do_title":"\u8bf7\u5b9e\u65bd:","prw_page_social_dont_1":"\u4f7f\u7528\u6b64\u9875\u9762\u5ba3\u4f20\u975e\u4e3b\u6d41\u6d3b\u52a8\u6216\u4e0e\u4e3b\u9898\u4e0d\u76f8\u5e72\u7684\u6d3b\u52a8\u3002","prw_page_social_dont_2":"\u58f0\u660e\u5141\u8bb8 Behance \u4f7f\u7528\u3002","prw_page_social_dont_3":"\u4f7f\u7528\u201c\u5b98\u65b9\u5e10\u6237\u201d\u6216\u201c\u5b98\u65b9\u793e\u533a\u201d\u8bed\u8a00\u3002\u5426\u5219\uff0c\u8bf7\u4f7f\u7528\u201c\u672c\u5730\u793e\u533a\u201d\u3002","prw_page_social_dont_4":"\u901a\u8fc7\u4f7f\u7528 #BehanceReviews \u6765\u4f7f\u7528\u53d7\u5546\u6807\u6216\u7248\u6743\u4fdd\u62a4\u7684\u7b26\u53f7\u3002","prw_page_social_dont_title":"\u8bf7\u52ff\u5b9e\u65bd:","prw_page_social_fb_1_desc":"\u8bf7\u4f7f\u7528\u6211\u4eec\u7684\u5b98\u65b9\u4e2a\u4eba\u8d44\u6599\u7167\u7247:","prw_page_social_fb_1_link":"\u4e0b\u8f7d Facebook \u4e2a\u4eba\u8d44\u6599\u7167\u7247","prw_page_social_fb_1_title":"\u4e2a\u4eba\u8d44\u6599\u7167\u7247","prw_page_social_fb_2_desc":"\u4e0b\u8f7d\u6211\u4eec\u7684\u5b98\u65b9\u5c01\u9762\u56fe\u50cf\u3002\u8981\u5c06\u5176\u8bbe\u4e3a\u81ea\u5df1\u7684\u56fe\u50cf\uff0c\u53ea\u9700\u4f7f\u7528\u60a8\u672c\u5730\u521b\u610f\u793e\u533a\u7684\u56fe\u50cf\u66ff\u6362\u8fd9\u4e9b\u56fe\u50cf\u5373\u53ef\u3002\u8bf7\u4fdd\u7559\u5fbd\u6807\u7684\u4f4d\u7f6e\u4e0d\u53d8\u3002","prw_page_social_fb_2_link":"\u4e0b\u8f7d Facebook \u5c01\u9762\u56fe\u50cf","prw_page_social_fb_2_title":"\u5c01\u9762\u56fe\u50cf","prw_page_social_fb_3_desc_1":"\u60a8\u7684\u9875\u9762\u540d\u79f0\u5fc5\u987b\u91c7\u7528\u6b64\u683c\u5f0f:","prw_page_social_fb_3_desc_2":"\"Behance \u56de\u987e\uff08\u5df4\u585e\u7f57\u90a3\uff09\"","prw_page_social_fb_3_title":"\u9875\u9762\u540d\u79f0","prw_page_social_fb_4_desc_1":"\u60a8\u7684\u63cf\u8ff0\u5e94\u4e3a:","prw_page_social_fb_4_desc_2":"\u5728\u60a8\u9875\u9762\u4e2d\u7bc7\u5e45\u8f83\u957f\u7684\u201c\u5173\u4e8e\u201d\u90e8\u5206\uff0c\u786e\u4fdd\u5305\u542b:","prw_page_social_fb_4_quote_1":"\u201c\u6b22\u8fce\u52a0\u5165 [\u67d0\u5730\u7684] \u672c\u5730 Behance \u793e\u533a\u3002\u53c2\u52a0\u4f5c\u54c1\u96c6\u56de\u987e\u6d3b\u52a8\u4ee5\u5c55\u793a\u60a8\u7684\u521b\u610f\u4f5c\u54c1\u5e76\u83b7\u5f97\u53cd\u9988\u3002\u201d","prw_page_social_fb_4_quote_2":"\u201c\u6b64\u9875\u7531 Behance \u4f1a\u5458\u548c\u7248\u4e3b [\u60a8\u7684\u59d3\u540d] \u7ef4\u62a4\uff0c\u53ef\u901a\u8fc7 [\u7535\u5b50\u90ae\u4ef6\u5730\u5740] \u4e0e\u4e4b\u8054\u7cfb\u3002\u201d","prw_page_social_fb_4_title":"\u9875\u9762\u63cf\u8ff0","prw_page_social_fb_desc":"\u8bbe\u7f6e\u548c\u7ef4\u62a4\u60a8\u7684 Behance \u4f5c\u54c1\u96c6\u56de\u987e\u7684 Facebook \u9875\u9762\u65f6\u8bf7\u9075\u5faa\u8fd9\u4e9b\u51c6\u5219\u3002\u4e0b\u9762\u63d0\u4f9b\u7684\u6240\u6709\u8d44\u6e90\u53ef\u4ee5\u540c\u6837\u7528\u4e8e Pinterest\u3001Instagram \u548c Google+ \u7b49\u5e94\u7528\u4e0a\u7684\u5e10\u6237\u3002","prw_page_social_fb_headline":"Facebook \u51c6\u5219","prw_page_social_headline":"\u793e\u4ea4\u5a92\u4f53\u6307\u5357","prw_page_social_main_desc":"\u6211\u4eec\u9f13\u52b1\u4e3e\u529e\u4f5c\u54c1\u96c6\u56de\u987e\u7684 Behance \u7248\u4e3b\u5728 Facebook \u548c Twitter \u7b49\u7f51\u7edc\u4e0a\u4e3a\u5176\u201c\u672c\u5730\u793e\u533a\u201d\u521b\u5efa\u548c\u7ef4\u62a4\u793e\u4ea4\u5a92\u4f53\u5e10\u6237\uff0c\u4ee5\u5ba3\u4f20\u5176\u672c\u5730\u4f5c\u54c1\u96c6\u56de\u987e\u5e76\u4fdd\u6301\u6d3b\u52a8\u4eba\u6c14\u3002","prw_page_social_main_subdesc":"\u6211\u4eec\u5df2\u9881\u5e03\u4e86\u51e0\u4e2a\u51c6\u5219\u6765\u5e2e\u52a9\u60a8\u7684\u5e10\u6237\u53d6\u5f97\u6210\u529f\u3002\u53ea\u8981\u60a8\u9075\u5faa\u8fd9\u4e9b\u51c6\u5219\uff0c\u6211\u4eec\u5c31\u5c06\u5ba3\u4f20\u60a8\u7684\u6d3b\u52a8\u5e76\u5e2e\u52a9\u589e\u52a0\u60a8\u7684\u672c\u5730\u5e10\u6237\u5728\u793e\u4ea4\u5a92\u4f53\u4e0a\u7684\u66dd\u5149\u5ea6\u3002","prw_page_social_subheadline":"\u7ef4\u62a4 Behance \u793e\u533a\u793e\u4ea4\u5a92\u4f53\u5e10\u6237\u7684\u5efa\u8bae\u3002","prw_page_social_tips_1_desc":"\u9080\u8bf7\u4ed6\u4eba\u5728\u793e\u4ea4\u5a92\u4f53\u4e0a\u4e0e\u60a8\u5206\u4eab\u4ed6\u4eec\u7684\u4f5c\u54c1\uff0c\u4ee5\u4fbf\u60a8\u53ef\u4ee5\u53d1\u5e03\u76f8\u5173\u4f5c\u54c1\uff08\u4f8b\u5982\u4f7f\u7528\u4e95\u53f7\u6807\u7b7e\uff0c\u5982 #BehanceRiyadh \u6216\u60a8\u8ba4\u4e3a\u5408\u9002\u7684\u5176\u4ed6\u9879\uff09\u3002","prw_page_social_tips_1_title":"\u5ba3\u4f20\u60a8\u7684\u6d3b\u52a8","prw_page_social_tips_2_desc":"\u5728\u60a8\u7684\u6d3b\u52a8\u5f00\u59cb\u524d\u7684\u51e0\u5468\u5185\uff0c\u901a\u8fc7\u521b\u5efa Facebook \u6d3b\u52a8\u5e76\u53d1\u5e03\u4ee4\u4eba\u597d\u5947\u7684\u5e7f\u544a\u548c\u7167\u7247\u6765\u8425\u9020\u6fc0\u60c5\u6c1b\u56f4\uff0c\u5927\u529b\u5ba3\u4f20\u60a8\u7684\u6d3b\u52a8\u3002","prw_page_social_tips_2_title":"\u8425\u9020\u6fc0\u60c5\u6c1b\u56f4","prw_page_social_tips_3_desc":"\u4f7f\u7528 Behance \u7684\u201c\u4f5c\u54c1\u96c6\u201d\u529f\u80fd\u521b\u5efa\u672c\u5730\u4f5c\u54c1\u7684\u4f5c\u54c1\u96c6\uff08\u5e76\u5728\u5176\u4e2d\u4e0d\u65ad\u6dfb\u52a0\u65b0\u4f5c\u54c1\uff09\u3002","prw_page_social_tips_3_title":"\u521b\u5efa\u4f5c\u54c1\u96c6","prw_page_social_tips_4_desc":"\u4f7f\u7528 Behance \u4e0a\u7684\u641c\u7d22\u8fc7\u6ee4\u5668\u6765\u67e5\u627e\u60a8\u6240\u5728\u533a\u57df\u7684\u4f5c\u54c1\u5e76\u5206\u4eab\u60a8\u559c\u7231\u7684\u4f5c\u54c1\uff08\u786e\u4fdd\u5c3d\u53ef\u80fd\u6e05\u6670\u6807\u6ce8\u4f5c\u54c1\u7684\u5f52\u5c5e\uff09\u3002","prw_page_social_tips_4_title":"\u5206\u4eab\u672c\u5730\u827a\u672f\u5bb6\u7684\u4f5c\u54c1","prw_page_social_tips_5_desc":"\u901a\u8fc7\u5411 Behance \u7528\u6237\u53d1\u9001\u6d88\u606f\uff0c\u4f7f\u5176\u5173\u6ce8\u60a8\u7684\u793e\u4ea4\u7f51\u7edc\u6216\u6210\u4e3a\u7c89\u4e1d\uff0c\u4ece\u800c\u5ba3\u4f20\u60a8\u7684\u5e10\u6237\uff0c\u6216\u5bfb\u627e\u793e\u4ea4\u5a92\u4f53\u4e0a\u7684\u8d85\u7ea7\u7528\u6237\u5e76\u4e0e\u4e4b\u63a5\u6d3d\u3002","prw_page_social_tips_5_title":"\u6269\u5927\u60a8\u7684\u7528\u6237\u7fa4","prw_page_social_tips_6_desc":"\u7528\u60a8\u7684\u6bcd\u8bed\u3001\u82f1\u8bed\u6216\u4ee5\u4e0a\u4e24\u79cd\u8bed\u8a00\u8fdb\u884c\u53d1\u5e03!","prw_page_social_tips_6_title":"\u7528\u4ed6\u4eec\u7684\u8bed\u8a00\u6c9f\u901a","prw_page_social_tips_7_desc":"\u8fd9\u91cc\u8fd8\u6709\u8bb8\u591a\u672c\u5730 Behance \u793e\u533a - \u52a0\u5165\u5176\u4e2d\u4e00\u4e9b\u793e\u533a\u4ee5\u5229\u7528\u5176\u4e2d\u7684\u5185\u5bb9\uff0c\u5e76\u521b\u7acb\u66f4\u52a0\u7d27\u5bc6\u7684 Behance \u5168\u7403\u793e\u533a\u3002","prw_page_social_tips_7_title":"\u4e0e\u5176\u4ed6\u793e\u533a\u4e92\u52a8","prw_page_social_tips_8_desc":"\u5728 Behance \u4f5c\u54c1\u96c6\u56de\u987e\u5468\u5230\u6765\u4e4b\u524d\uff0c\u4f7f\u7528 #BehanceReviews \u5ba3\u4f20\u60a8\u7684\u6d3b\u52a8\uff08\u6216\u60a8\u6240\u5728\u533a\u57df\u6b63\u5728\u4e3e\u529e\u7684\u6d3b\u52a8\uff09\u3002","prw_page_social_tips_8_title":"\u5c55\u793a\u60a8\u7684\u5173\u6ce8\u8005\u7684\u4f5c\u54c1","prw_page_social_tips_desc":"\u6700\u6210\u529f\u7684\u5e10\u6237\u4f1a\u5b8c\u6210\u4e24\u9879\u5de5\u4f5c: \u5ba3\u4f20\u672c\u5730\u4f5c\u54c1\u5e76\u5728\u4e0b\u4e00\u6b21\u4f5c\u54c1\u96c6\u56de\u987e\u6d3b\u52a8\u4e0a\u53d1\u5e03\u76f8\u5173\u4fe1\u606f\u3002","prw_page_social_tips_headline":"\u63d0\u793a: \u8981\u53d1\u5e03\u7684\u5185\u5bb9","prw_page_social_twtr_1_desc":"\u8bf7\u4f7f\u7528\u6211\u4eec\u7684\u5b98\u65b9\u4e2a\u4eba\u8d44\u6599\u7167\u7247:","prw_page_social_twtr_1_link":"\u4e0b\u8f7d Twitter \u4e2a\u4eba\u8d44\u6599\u7167\u7247","prw_page_social_twtr_1_title":"\u4e2a\u4eba\u8d44\u6599\u7167\u7247","prw_page_social_twtr_2_desc":"\u60a8\u7684\u5e10\u6237\u540d\u79f0\u5e94\u91c7\u7528\u6b64\u683c\u5f0f: \u201cBehance \u56de\u987e\uff08\u5df4\u585e\u7f57\u90a3\uff09\u201d","prw_page_social_twtr_2_title":"\u5e10\u6237\u540d\u79f0","prw_page_social_twtr_3_desc":"\u60a8\u7684 Twitter \u7d22\u5f15\u5fc5\u987b\u91c7\u7528\u6b64\u683c\u5f0f: \u201c@BeReviewsBarcelona\u201d","prw_page_social_twtr_3_title":"Twitter \u7d22\u5f15","prw_page_social_twtr_4_desc":"\u60a8\u7684 Twitter \u7d22\u5f15\u5e94\u91c7\u7528\u6b64\u683c\u5f0f: \u6b22\u8fce\u52a0\u5165 [\u67d0\u5730\u7684] \u672c\u5730 Behance \u793e\u533a\u3002\u53c2\u52a0\u4f5c\u54c1\u96c6\u56de\u987e\u6d3b\u52a8\u4ee5\u5c55\u793a\u60a8\u7684\u4f5c\u54c1\u5e76\u83b7\u5f97\u53cd\u9988\u3002","prw_page_social_twtr_4_title":"\u8bf4\u660e","prw_page_social_twtr_5_desc":"\u8bf7\u94fe\u63a5\u60a8\u7684\u6d3b\u52a8 RSVP\uff08FB \u4e0a\u7684\u4e00\u4e2a Behance \u672c\u5730\u793e\u533a\u9875\u9762\uff09\u6216 Behance.net\u3002","prw_page_social_twtr_5_title":"\u7f51\u7ad9 URL","prw_page_social_twtr_6_desc":"\u4e0b\u8f7d\u6211\u4eec\u7684\u5b98\u65b9\u6807\u9898\u7167\u7247\u3002\u8981\u5c06\u5176\u8bbe\u4e3a\u81ea\u5df1\u7684\u7167\u7247\uff0c\u53ea\u9700\u4f7f\u7528\u60a8\u672c\u5730\u521b\u610f\u793e\u533a\u7684\u56fe\u50cf\u66ff\u6362\u8fd9\u4e9b\u56fe\u50cf\u5373\u53ef\u3002","prw_page_social_twtr_6_link":"\u4e0b\u8f7d Twitter \u6807\u9898","prw_page_social_twtr_6_title":"\u6807\u9898\u7167\u7247","prw_page_social_twtr_desc":"\u5728\u4e3a\u60a8\u7684 Behance \u4f5c\u54c1\u96c6\u56de\u987e\u8bbe\u7f6e\u548c\u7ef4\u62a4 Twitter \u5e10\u6237\u65f6\uff0c\u8bf7\u9075\u5faa\u8fd9\u4e9b\u51c6\u5219\u3002","prw_page_social_twtr_headline":"Twitter \u51c6\u5219","prw_page_subtitle":"\u8fde\u63a5\u5e76\u83b7\u5f97\u6709\u5173\u60a8\u7684\u521b\u610f\u4f5c\u54c1\u7684\u53cd\u9988","prw_page_title":"Behance \u4f5c\u54c1\u96c6\u56de\u987e","prw_page_upload":"\u4e0a\u8f7d","prw_page_welcome":"Behance \u6bcf\u5e74\u4e3e\u884c\u4e24\u6b21\u201c\u4f5c\u54c1\u96c6\u56de\u987e\u5468\u201d\uff0c\u8fd9\u662f\u7531\u81ea\u613f\u8005\u7ec4\u7ec7\u7684\u4e00\u7cfb\u5217\u524d\u6240\u672a\u6709\u7684\u6d3b\u52a8\uff0c\u6d89\u53ca\u5168\u7403\u6570\u767e\u4e2a\u57ce\u5e02\uff0c\u76ee\u7684\u662f\u5c06\u521b\u610f\u4e13\u4e1a\u4eba\u5458\u805a\u96c6\u5728\u4e00\u8d77\u3002","report_popup_failed_validation":"\u4e00\u9879\u6216\u591a\u9879\u8f93\u5165\u5185\u5bb9\u9a8c\u8bc1\u5931\u8d25","report_popup_reason_adult":"\u5305\u542b\u6210\u4eba\u5185\u5bb9","report_popup_reason_copyright":"\u5305\u542b\u7248\u6743\u4fb5\u72af\u5185\u5bb9","report_popup_reason_offensive":"\u5305\u542b\u653b\u51fb\u6027\u6750\u6599","report_popup_reason_privacy":"\u4fb5\u72af\u6211\u7684\u9690\u79c1","report_popup_reason_spam":"\u5305\u542b\u5783\u573e\u90ae\u4ef6","report_popup_reason_trademark":"\u5305\u542b\u5546\u6807\u4fb5\u6743\u5185\u5bb9","report_popup_seect_reason":"\u5fc5\u987b\u4e3a\u6b64\u62a5\u544a\u9009\u62e9\u4e00\u4e2a\u539f\u56e0","report_popup_team_disclaimer":"\u56e2\u961f\u9875\u9762\u4ec5\u53ef\u7531\u4fe1\u8a89\u826f\u597d\u7684\u73b0\u6709\u56e2\u961f\u6210\u5458\u6216\u56e2\u961f\u7684\u6cd5\u5b9a\u4ee3\u8868\u521b\u5efa\u3002\u5982\u679c\u60a8\u8ba4\u4e3a\u6b64\u56e2\u961f\u8fdd\u53cd\u4e86\u6211\u4eec\u7684<a href='\/misc\/community'>\u793e\u533a\u6307\u5bfc\u539f\u5219<a\/>\uff0c\u8bf7\u5728\u4e0b\u5217\u7a7a\u767d\u5904\u544a\u77e5\u6211\u4eec:","request_verification_label":"\u8bf7\u6c42\u9a8c\u8bc1","resume_no_resume":"{{name}} has no public resume.","resume_view_profile":"View their public profile","search_behance_button_cancel":"\u53d6\u6d88","search_behance_placeholder":"\u641c\u7d22 Behance","search_proximity":"\u76f8\u8fd1\u6027","search_proximity_note":"<span class=\"js-mi\">0<\/span> \u82f1\u91cc (<span class=\"js-km\">0<\/span> km) \u4ee5\u5185","share_popup_promote_your_work":"\u63a8\u8350\u60a8\u7684\u4f5c\u54c1","signup_dialog_collection":"\u52a0\u5165 Behance\uff0c\u5c06\u6b64\u9879\u76ee\u6dfb\u52a0\u5230\u4f5c\u54c1\u96c6","signup_dialog_comment":"\u52a0\u5165 Behance\uff0c\u5bf9\u6b64\u9879\u76ee\u53d1\u8868\u8bc4\u8bba","signup_dialog_follow":"\u52a0\u5165 Behance \u4ee5\u5173\u6ce8 {{title}}","signup_dialog_join":"\u52a0\u5165 Behance","signup_dialog_message":"\u52a0\u5165 Behance \u4ee5\u5411 {{title}} \u53d1\u9001\u6d88\u606f","signup_dialog_signin":"\u5df2\u6210\u4e3a\u4f1a\u5458\uff1f<a class=\"js-adobeid-signin\">\u767b\u5f55 &rarr;<\/a>","site_title_discover":"Behance \u5728\u7ebf\u4f5c\u54c1\u96c6","site_title_galleries_collections":"Behance \u4f5c\u54c1\u96c6","site_title_joblist":"Behance \u4e0a\u63d0\u4f9b\u7684\u521b\u610f\u804c\u4f4d\u548c\u81ea\u7531\u804c\u4e1a\u673a\u4f1a","site_title_powered_by":"\u7531 Behance \u63d0\u4f9b\u652f\u6301","splash_page_button_activate":"\u6fc0\u6d3b Behance \u5e10\u6237","splash_page_button_sign_up":"\u6ce8\u518c Behance","splash_page_by":"\u4f5c\u8005:","splash_page_have_account":"\u5df2\u7ecf\u6709 Behance \u5e10\u6237? ","splash_page_header":"\u5c55\u793a\u3001\u53d1\u73b0<span class=hide-phone\">\u548c<\/span><span class=\"show-phone hide\">\u548c<\/span> \u6536\u96c6\u6709\u521b\u610f\u7684\u4f5c\u54c1","splash_page_log_in":"\u767b\u5f55","statistics_activity_project_views":"\u6d3b\u52a8: <span class=\"normal-font-weight\">\u9879\u76ee\u4eba\u6c14<\/span>","statistics_all_galleries":"\u6240\u6709\u56fe\u5e93","statistics_all_stats":"\u6240\u6709\u65f6\u95f4\u7edf\u8ba1\u6570\u636e","statistics_all_time":"\u6240\u6709\u65f6\u95f4","statistics_all_time_parens":"(\u6240\u6709\u65f6\u95f4)","statistics_appreciated_by":"\u597d\u8bc4\u8005:","statistics_appreciations":"\u9879\u76ee\u597d\u8bc4","statistics_appreciations_single":"\u597d\u8bc4","statistics_appreciators":"\u597d\u8bc4\u8005","statistics_back_to_statistics":"\u8fd4\u56de\u5230\u7edf\u8ba1\u6570\u636e","statistics_commenters":"\u8bc4\u8bba\u8005","statistics_comments":"\u8bc4\u8bba","statistics_discover":"\u53d1\u73b0","statistics_empty_portfolio":"\u60a8\u7684\u4f5c\u54c1\u96c6\u4e3a\u7a7a\u3002","statistics_fields":"\u9886\u57df:","statistics_full_project":"\u67e5\u770b\u5b8c\u6574\u7edf\u8ba1\u6570\u636e","statistics_given":"\u5df2\u7ed9\u51fa","statistics_in":"\u5728: ","statistics_last_days":"(\u6700\u8fd1 30 \u5929\u4e2d)","statistics_last_sixty":"(\u6700\u8fd1 60 \u5929\u4e2d)","statistics_last_thirty":"(\u6700\u8fd1 30 \u5929\u4e2d)","statistics_monthly_review":"\u4f5c\u54c1\u96c6\u6bcf\u6708\u56de\u987e","statistics_page_title":"\u6709\u5173\u4ee5\u4e0b\u65b9\u9762\u7684\u7edf\u8ba1\u6570\u636e:","statistics_portfolio_review":"\u4f5c\u54c1\u96c6\u6bcf\u6708\u56de\u987e","statistics_prof_views":"\u4e2a\u4eba\u8d44\u6599\u67e5\u770b\u6b21\u6570","statistics_profile_views":"\u4e2a\u4eba\u8d44\u6599\u67e5\u770b\u6b21\u6570","statistics_proj_comm":"\u9879\u76ee\u8bc4\u8bba","statistics_proj_views":"\u9879\u76ee\u67e5\u770b\u6b21\u6570","statistics_project":"\u9879\u76ee","statistics_project_appreciations":"\u6211\u4eec\u5c06\u5728 2011 \u5e74 6 \u6708 9 \u65e5\u5f00\u59cb\u8bb0\u5f55\u9879\u76ee\u597d\u8bc4\u3002\u8be5\u65e5\u671f\u4e4b\u540e\u7684\u6240\u6709\u597d\u8bc4\u5c06\u663e\u793a\u5728\u6b64\u9875\u4e0a\u3002","statistics_project_comments":"\u9879\u76ee\u8bc4\u8bba","statistics_project_views":"\u9879\u76ee\u4eba\u6c14","statistics_projects_breakdown":"\u6392\u540d\u9760\u524d\u7684\u9879\u76ee\u7ec6\u5206","statistics_public_view":"\u5171\u4eab\u7edf\u8ba1\u6570\u636e\u7684<a href=\"{{stats_user_public}}\">\u516c\u5171\u89c6\u56fe<\/a>:","statistics_published":"\u53d1\u5e03\u65f6\u95f4\uff1a","statistics_rank":"\u6392\u540d","statistics_received":"\u5df2\u6536\u5230","statistics_share_post":"\u5171\u4eab\u6b64\u7edf\u8ba1\u6570\u636e\u9875:","statistics_show_rows":"\u663e\u793a\u884c\u6570:","statistics_statistics":"\u7edf\u8ba1","statistics_thirty_days":"(\u6700\u8fd1 30 \u5929\u4e2d)","statistics_this_month":"\u672c\u6708","statistics_this_week":"\u672c\u5468","statistics_time":"\u6240\u6709\u65f6\u95f4","statistics_top_appreciations":"\u67e5\u770b\u6392\u540d\u9760\u524d\u7684\u597d\u8bc4","statistics_top_appreciators":"\u5bf9\u60a8\u7684\u4f5c\u54c1\u6392\u540d\u9760\u524d\u7684\u597d\u8bc4\u8005","statistics_top_commenters":"\u67e5\u770b\u6392\u540d\u9760\u524d\u7684\u8bc4\u8bba\u8005","statistics_top_commenters_work":"\u5bf9\u60a8\u7684\u4f5c\u54c1\u6392\u540d\u9760\u524d\u7684\u8bc4\u8bba\u8005","statistics_total":"\u603b\u8ba1","statistics_uploading_work":"\u4e0a\u4f20\u4f5c\u54c1\u5f88\u5bb9\u6613\uff0c<a href=\"%s\">\u9a6c\u4e0a\u4e0a\u4f20\u5427!<\/a>","statistics_user_stats":"<a href=\"{{stats_user_url}}\">{{stats_user_name}}<\/a> \u7684\u7edf\u8ba1\u6570\u636e","statistics_view_commenters":"\u67e5\u770b\u6392\u540d\u9760\u524d\u7684\u8bc4\u8bba\u8005","statistics_view_summary":"\u9879\u76ee\u4eba\u6c14\u6c47\u603b","statistics_view_top_appreciations":"\u67e5\u770b\u6392\u540d\u9760\u524d\u7684\u597d\u8bc4","statistics_yesterday":"\u6628\u5929","talent_backend_button_post_new_job":"\u53d1\u5e03\u65b0\u804c\u4f4d","talent_backend_empty_subtitle_active_limited":"\u901a\u8fc7\u8ba2\u9605 Adobe Talent\uff0c\u60a8\u53ef\u7acb\u5373\u53d1\u5e03\u804c\u4f4d\u3002","talent_backend_empty_subtitle_active_unlimited":"\u901a\u8fc7\u8ba2\u9605 Adobe Talent\uff0c\u60a8\u53ef\u53d1\u5e03\u4e0d\u9650\u6570\u91cf\u7684\u804c\u4f4d\u3002","talent_backend_empty_subtitle_all_limited":"\u901a\u8fc7\u8ba2\u9605 Adobe Talent\uff0c\u60a8\u53ef\u7acb\u5373\u53d1\u5e03\u804c\u4f4d\u3002","talent_backend_empty_subtitle_all_unlimited":"\u901a\u8fc7\u8ba2\u9605 Adobe Talent\uff0c\u60a8\u53ef\u53d1\u5e03\u4e0d\u9650\u6570\u91cf\u7684\u804c\u4f4d\u3002","talent_backend_empty_subtitle_search":"\u8bf7\u5c1d\u8bd5\u6309\u66f4\u5e38\u89c4\u7684\u6761\u4ef6\u7b5b\u9009\u3002","talent_backend_empty_title_active":"\u60a8\u5f53\u524d\u6ca1\u6709\u6d3b\u52a8\u804c\u4f4d\u3002","talent_backend_empty_title_all":"\u60a8\u5f53\u524d\u6ca1\u6709\u6d3b\u52a8\u6216\u5df2\u5b58\u6863\u7684\u804c\u4f4d\u3002","talent_backend_empty_title_archived":"\u60a8\u5f53\u524d\u6ca1\u6709\u5df2\u5b58\u6863\u7684\u804c\u4f4d\u3002","talent_backend_empty_title_search":"\u6ca1\u6709\u4efb\u4f55\u804c\u4f4d\u7b26\u5408\u60a8\u7684\u7b5b\u9009\u6761\u4ef6\u3002","talent_backend_job_category_active":"\u6d3b\u52a8\u804c\u4f4d\u53d1\u5e03","talent_backend_job_category_all":"\u6240\u6709\u804c\u4f4d\u53d1\u5e03","talent_backend_job_category_archived":"\u5df2\u5b58\u6863\u7684\u804c\u4f4d\u53d1\u5e03","talent_backend_jobs_shared_with_me":"\u4e0e\u6211\u5171\u4eab\u7684\u804c\u4f4d","talent_backend_label_include":"\u5305\u542b","talent_backend_label_search_by_keywork":"\u5173\u952e\u5b57\u641c\u7d22","talent_backend_label_view":"\u67e5\u770b","talent_backend_listing_archive_job":"\u5b58\u6863\u804c\u4f4d","talent_backend_listing_archived":"\u804c\u4f4d\u53d1\u5e03\u5df2\u5b58\u6863","talent_backend_listing_by":"\u4f5c\u8005: ","talent_backend_listing_delete_job":"\u5220\u9664\u804c\u4f4d","talent_backend_listing_edit_job":"\u7f16\u8f91\u804c\u4f4d","talent_backend_listing_expired_on":"\u804c\u4f4d\u53d1\u5e03\u5df2\u4e8e <span class=\"js-format-timestamp\" data-timestamp=\"{{expires_on}}\"> \u8fc7\u671f","talent_backend_listing_expires_in":"\u804c\u4f4d\u53d1\u5e03\u5c06\u5728 {{expires_in_days}} \u5929\u540e\u8fc7\u671f","talent_backend_listing_multiple_users":"\u591a\u4e2a\u7528\u6237","talent_backend_listing_new_applications":"\u65b0\u7684\u7533\u8bf7","talent_backend_listing_new_recommendations":"\u65b0\u63a8\u8350","talent_backend_listing_num_candidates":"{{total_candidates}} \u4e2a\u5019\u9009\u4eba","talent_backend_listing_reactivate_job":"\u91cd\u65b0\u6fc0\u6d3b\u804c\u4f4d","talent_backend_listing_remove_from_jobs":"\u4ece\u6211\u7684\u804c\u4f4d\u4e2d\u5220\u9664","talent_backend_listing_shared_with":"\u5171\u4eab\u5bf9\u8c61:","talent_backend_listing_sort_alpha":"\u6309\u5b57\u6bcd\u987a\u5e8f","talent_backend_listing_sort_by":"\u6392\u5e8f\u4f9d\u636e:","talent_backend_listing_sort_date_posted":"\u53d1\u5e03\u65e5\u671f","talent_backend_listing_sort_newest":"\u6700\u65b0\u5019\u9009\u4eba","talent_backend_page_title":"\u6211\u7684\u804c\u4f4d","talent_backend_placeholder_search":"\u641c\u7d22...","talent_billing_assignment_make_edits":"\u8981\u8fdb\u884c\u4efb\u4f55\u7f16\u8f91\uff0c\u8bf7\u5728 <a href=\"mailto:{{provision.provisioned_by.email}}\">{{provision.provisioned_by.email}}<\/a> \u5904\u4e0e\u60a8\u7684\u7ba1\u7406\u5458\u8054\u7cfb","talent_billing_get_team_add_seats":"\u5728 Adobe Talent \u4e0a\u7ec4\u5efa\u60a8\u7684\u56e2\u961f! \u8981\u6dfb\u52a0\u5e2d\u4f4d\uff0c\u8bf7\u8054\u7cfb <a href=\"mailto:{{contact_email}}\">{{contact_email}}<\/a>","talent_billing_get_team_on_talent":"\u5728 Adobe Talent \u4e0a\u7ec4\u5efa\u60a8\u7684\u56e2\u961f! <a href=\"{{talent_url}}\">\u5728\u6b64\u5904\u6ce8\u518c Adobe Talent\u3002<\/a>","talent_billing_history_contact":"\u6709\u5173\u5e10\u5355\u67e5\u8be2\uff0c\u8bf7\u901a\u8fc7 <a href=\"mailto:{{contact_email}}\">{{contact_email}}<\/a> \u4e0e\u60a8\u7684\u9500\u552e\u4ee3\u8868\u8054\u7cfb","talent_billing_history_external":"\u5728 <a href=\"http:\/\/{{billing_url}}\">{{billing_url}}<\/a> \u5904\u67e5\u627e\u60a8\u7684\u6700\u8fd1\u8d39\u7528\u7684\u8bb0\u5f55","talent_billing_invitation_already_invited":"\u5df2\u5411 Adobe Talent \u53d1\u9001\u7535\u5b50\u90ae\u4ef6\u9080\u8bf7:","talent_billing_invitation_already_member":"\u7535\u5b50\u90ae\u4ef6\u5df2\u4f5c\u4e3a\u4ee5\u4e0b\u5185\u5bb9\u5b58\u653e\u5230 Behance \u4e0a:","talent_billing_make_edits":"\u8981\u5bf9\u60a8\u7684\u5f53\u524d\u8ba1\u5212\u8fdb\u884c\u4efb\u4f55\u7f16\u8f91\uff0c\u8bf7\u8054\u7cfb <a href=\"mailto:{{contact_email}}\">{{contact_email}}<\/a>","talent_billing_no_stored_info":"\u60a8\u6ca1\u6709\u4efb\u4f55\u5df2\u5b58\u50a8\u7684\u5e10\u5355\u4fe1\u606f\u3002","talent_billing_page_title":"\u5e10\u5355","talent_billing_provision_already_exists":"\u5df2\u4e3a\u8be5\u7528\u6237\u914d\u7f6e Adobe Talent:","talent_billing_provision_cannot_assign":"\u5c1a\u672a\u4e3a\u60a8\u8fdb\u884c\u76f8\u5e94\u914d\u7f6e\uff0c\u65e0\u6cd5\u6307\u5b9a Adobe Talent \u5e2d\u4f4d","talent_billing_provision_input_label":"\u4e3a Adobe Talent \u914d\u7f6e\u4eba\u5458","talent_billing_provision_input_placeholder":"\u8f93\u5165\u7528\u6237\u540d\u6216\u7535\u5b50\u90ae\u4ef6","talent_billing_provision_limit_reached":"\u5df2\u6307\u5b9a\u6700\u5927\u5e2d\u4f4d\u6570","talent_billing_provisioned_by":"{{provision.provisioned_by.display_name}} \u5f53\u524d\u5df2\u4e3a\u60a8\u914d\u7f6e\u4e86\u5e2d\u4f4d\u3002","talent_billing_provisioned_no_addiitonal":"\u5f53\u524d\u6ca1\u6709\u4e3a\u60a8\u914d\u7f6e\u4efb\u4f55\u5176\u4ed6 Adobe Talent \u5e10\u6237\u3002","talent_billing_provisioned_not":"\u5f53\u524d\u6ca1\u6709\u4e3a\u60a8\u914d\u7f6e Adobe Talent\u3002","talent_billing_seat_invited":"(\u53d7\u9080\u4f7f\u7528 Behance)","talent_billing_seat_no_one":"\u5c1a\u672a\u4e3a\u6b64\u5e2d\u4f4d\u914d\u7f6e\u4efb\u4f55\u4eba\u3002","talent_billing_seats_current":"\u5f53\u524d\u5e2d\u4f4d","talent_billing_seats_remaining":"\u60a8\u8fd8\u5269\u4f59 <span class=\"js-seats-remaining\">{{seats_remaining}}<\/span> \u4e2a Adobe Talent \u5e2d\u4f4d","talent_billing_seats_using":"\u60a8\u5f53\u524d\u6b63\u5728\u4f7f\u7528\u60a8\u7684 {{provision.seats}} \u4e2a\u5df2\u914d\u7f6e\u7684 Adobe Talent \u5e2d\u4f4d\u4e2d\u7684 <span class=\"js-seats-taken\">{{seats_taken}}<\/span> \u4e2a\u3002","talent_billing_section_history":"\u4ea4\u6613\u5386\u53f2\u8bb0\u5f55","talent_billing_section_information":"\u5e10\u5355\u4fe1\u606f","talent_billing_section_seats":"Adobe Talent \u5e2d\u4f4d","talent_billing_view_edit_details":"\u5728 <a href=\"http:\/\/{{billing_url}}\">{{billing_url}}<\/a> \u5904\u67e5\u770b\u6216\u7f16\u8f91\u4e0e\u60a8\u7684\u5e10\u6237\u76f8\u5173\u7684\u8d26\u5355\u8be6\u7ec6\u4fe1\u606f","talent_candidate_popup_or":"\u6216\u8005","talent_create_button_back":"&larr; \u540e\u9000","talent_create_button_next":"\u4e0b\u4e00\u6b65","talent_create_button_submit":"\u63d0\u4ea4","talent_create_dialog_over_limit":"\u60a8\u76ee\u524d\u6709\u4e00\u4e2a\u6d3b\u52a8\u804c\u4f4d\uff0c\u8fd9\u662f \u60a8\u4e00\u6b21\u53ef\u8fd0\u884c\u7684\u6700\u5927\u804c\u4f4d\u6570\u3002<b>\u8bf7\u5b58\u6863\u6216\u5220\u9664\u4e00\u4e2a\u73b0\u6709\u804c\u4f4d\u4ee5\u521b\u5efa\u65b0\u804c\u4f4d\u3002<\/b>","talent_create_dialog_upgrade":"\u8981\u83b7\u5f97\u65e0\u9650\u804c\u4f4d\u4fe1\u606f\uff0c\u8bf7\u901a\u8fc7 <a href=\"{{settings_url}}\">Adobe \u5e10\u6237\u8bbe\u7f6e&rarr;<\/a>\u5347\u7ea7\u60a8\u7684\u5e10\u6237","talent_create_edit_hire_talent":"\u62db\u8058\u60a8\u9700\u8981\u7684\u4eba\u624d","talent_create_edit_start_hiring":"\u4ece\u8d85\u8fc7 500 \u4e07\u521b\u610f\u4e13\u4e1a\u4eba\u5458\u4e2d\u5f00\u59cb\u62db\u8058","talent_create_edit_your_job":"\u7f16\u8f91\u60a8\u7684\u804c\u4f4d","talent_create_form_header_company":"\u516c\u53f8","talent_create_form_header_enter_job_details":"\u63a5\u4e0b\u6765\uff0c\u8bf7\u8f93\u5165\u804c\u4f4d\u8be6\u60c5","talent_create_form_header_find_candidates":"\u5e2e\u52a9\u6211\u4eec\u5bfb\u627e\u60a8\u7684\u804c\u4f4d\u5019\u9009\u4eba","talent_create_form_header_first":"\u9996\u5148\uff0c\u8fd9\u662f\u54ea\u5bb6\u516c\u53f8\u7684\u804c\u4f4d\uff1f","talent_create_form_header_job_details":"\u804c\u4f4d\u8be6\u60c5","talent_create_form_header_public_post":"\u516c\u5f00\u804c\u4f4d","talent_create_form_note_anywhere":"\u5bf9\u4e8e\u516c\u5f00\u804c\u4f4d\uff0c\u5730\u70b9\u4e00\u680f\u5c06\u663e\u793a\u201c\u4efb\u4f55\u5730\u70b9\u201d\u3002","talent_create_form_note_private_job":"\u79c1\u6709\u804c\u4f4d\u5c06\u4e0d\u518d\u663e\u793a\u5728 Behance \u804c\u4f4d\u5217\u8868\u4e0a\u3002\u60a8\u5c06\u4e0d\u4f1a\u6536\u5230\u7533\u8bf7\u8005\u7533\u8bf7\u3002","talent_create_label_apply_url":"URL","talent_create_label_apply_via":"\u7533\u8bf7\u8005\u5e94\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u7533\u8bf7:","talent_create_label_apply_via_behance":"Behance","talent_create_label_apply_via_external":"\u5916\u90e8\u94fe\u63a5","talent_create_label_company":"\u516c\u53f8","talent_create_label_creative_fields":"\u521b\u610f\u9886\u57df","talent_create_label_job_description":"\u804c\u4f4d\u8bf4\u660e","talent_create_label_job_location":"\u5de5\u4f5c\u5730\u70b9","talent_create_label_job_title":"\u804c\u52a1","talent_create_label_job_type":"\u804c\u4f4d\u7c7b\u578b","talent_create_label_job_type_freelance":"\u81ea\u7531\u804c\u4e1a\u8005","talent_create_label_job_type_full_time":"\u5168\u804c","talent_create_label_job_type_internship":"\u5b9e\u4e60","talent_create_label_on_site":"\u73b0\u573a\u5de5\u4f5c","talent_create_label_other_locations_no":"\u5426","talent_create_label_other_locations_off":"\u6211\u4eec\u5c06\u4ec5\u63a8\u8350\u6765\u81ea\u5de5\u4f5c\u5730\u70b9\u7684\u5019\u9009\u4eba\u3002","talent_create_label_other_locations_on":"\u6211\u4eec\u5c06\u63a8\u8350\u4e16\u754c\u5404\u5730\u6700\u9002\u5408\u60a8\u804c\u4f4d\u7684\u5019\u9009\u4eba\u3002","talent_create_label_other_locations_yes":"\u662f","talent_create_label_post_visibility":"\u804c\u4f4d\u53d1\u5e03\u53ef\u89c1\u6027","talent_create_label_private_job":"\u79c1\u6709\u804c\u4f4d","talent_create_label_public_post":"\u516c\u5f00\u804c\u4f4d","talent_create_label_remote":"\u8fdc\u7a0b","talent_create_label_share_with":"\u7528\u6237","talent_create_label_tags":"\u5173\u952e\u5b57","talent_create_label_team_url":"Behance \u56e2\u961f URL","talent_create_location_city":"\u57ce\u5e02","talent_create_location_country":"\u6240\u6709\u56fd\u5bb6\/\u5730\u533a","talent_create_location_province":"\u7701\/\u76f4\u8f96\u5e02\/\u81ea\u6cbb\u533a","talent_create_location_recommendation":"\u63a8\u8350\u5730\u70b9","talent_create_location_state":"\u5dde","talent_create_location_where":"\u5de5\u4f5c\u5730\u70b9\u5728\u54ea\uff1f","talent_create_note_tags":"\u8fd9\u6837\u53ef\u4ece\u60a8\u6536\u5230\u7684\u63a8\u8350\u4e2d\u53bb\u7c97\u53d6\u7cbe\u3002","talent_create_placeholder_apply_url":"www.yourcompany.com\/job123","talent_create_placeholder_company_name":"\u516c\u53f8\u540d\u79f0","talent_create_placeholder_creative_fields":"\u4f8b\u5982: \u56fe\u5f62\u8bbe\u8ba1\u3001\u4ea4\u4e92\u8bbe\u8ba1...","talent_create_placeholder_job_title":"\u4f8b\u5982: \u56fe\u5f62\u8bbe\u8ba1\u5e08\u3001\u7528\u6237\u754c\u9762\/\u7528\u6237\u4f53\u9a8c\u8bbe\u8ba1\u5e08","talent_create_placeholder_share_with":"\u5f00\u59cb\u952e\u5165\u4ee5\u67e5\u770b\u5217\u8868","talent_create_placeholder_tags":"\u4f8b\u5982: \u56fe\u6807\u3001\u5fbd\u6807\u8bbe\u8ba1\u3001\u5e94\u7528\u7a0b\u5e8f...","talent_create_purchase_currency_note":"\u6ce8\u610f: \u4ee5\u975e\u7f8e\u5143\u8d27\u5e01\u6807\u660e\u7684\u4ef7\u683c\u53ef\u80fd\u4f1a\u53d1\u751f\u53d8\u5316\uff0c\u6ce8\u518c\u671f\u95f4\u5c06\u786e\u8ba4\u5177\u4f53\u4ef7\u683c\u4ee5\u83b7\u5f97\u4ed8\u6b3e\u8be6\u60c5\u3002","talent_create_purchase_pick_plan":"\u9009\u62e9\u4e00\u4e2a\u65b9\u6848","talent_create_reactivate":"\u91cd\u65b0\u6fc0\u6d3b\u4eba\u624d\u641c\u7d22","talent_create_reccomend_global_candidates":"\u6211\u4eec\u662f\u5426\u5e94\u63a8\u8350\u6765\u81ea\u5168\u7403\u7684\u5019\u9009\u4eba\uff1f","talent_create_repost_notice_expired":"\u4e0e\u8be5\u4eba\u624d\u641c\u7d22\u6709\u5173\u7684\u5e16\u5b50\u5df2\u8fc7\u671f\u5e76\u5df2\u81ea\u52a8\u8bbe\u4e3a\u79c1\u6709\u3002\u8bf7\u66f4\u6539\u53ef\u89c1\u6027\u5e76\u4fdd\u5b58\u66f4\u6539\uff0c\u4ee5\u4fbf\u91cd\u65b0\u53d1\u5e03\u4ee5\u4e0b\u804c\u4f4d\u3002","talent_create_save_changes":"\u4fdd\u5b58\u66f4\u6539","talent_create_saving_your_job":"\u6b63\u5728\u4fdd\u5b58\u60a8\u7684\u804c\u4f4d...","talent_create_selected_team_company":"\u516c\u53f8","talent_invite_email":"\u672a\u770b\u5230\u60a8\u6b63\u5728\u5bfb\u627e\u7684\u4eba\u5458? \u8bf7\u952e\u5165\u4e00\u4e2a\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u4ee5\u9080\u8bf7\u975e\u4f1a\u5458\u3002","talent_invite_user":"<span class=\"fake-link\">\u9080\u8bf7 {{term}}<\/span> \u4f7f\u7528 Behance \u5e76\u9488\u5bf9 Adobe Talent \u8fdb\u884c\u914d\u7f6e","talent_post_archive_popup_private":"\u6b64\u804c\u4f4d\u53d1\u5e03\u5c06\u8bbe\u4e3a\u79c1\u6709\u5e76\u4e14\u5c06\u4e0d\u518d\u5728\u804c\u4f4d\u516c\u544a\u677f\u4e0a\u663e\u793a\u3002","talent_post_archive_popup_replace":"\u901a\u8fc7\u60a8\u7684 Adobe Talent \u8ba2\u9605\uff0c\u60a8\u53ef\u968f\u65f6\u514d\u8d39\u5730\u5c06\u6b64\u53d1\u5e03\u66ff\u6362\u4e3a\u53e6\u4e00\u4e2a\u65b0\u53d1\u5e03\u3002","talent_post_archive_popup_share":"\u8fd8\u5c06\u4e3a\u5df2\u4e0e\u5176\u5171\u4eab\u7684\u4efb\u4f55\u4eba\u5bf9\u5b83\u8fdb\u884c\u5b58\u6863\u3002","talent_post_browse_discover":"\u5728<a href=\"{{URLS.DISCOVER}}\">\u53d1\u73b0<\/a>\u9009\u9879\u5361\u4e0a\u6d4f\u89c8\u9876\u5c16\u521b\u610f\u4eba\u624d\u3002","talent_post_button_settings":"\u8bbe\u7f6e","talent_post_button_share_job":"\u5171\u540c\u6240\u6709\u8005","talent_post_candidate_applied_on":"\u7533\u8bf7{{#applied_on}}\u65e5\u671f: <span class=\"js-updating-timestamp\" data-timestamp=\"{{applied_on}}\"><\/span>{{\/applied_on}}","talent_post_candidate_button_remove":"\u79fb\u53bb","talent_post_candidate_button_shortlist":"\u6700\u7ec8\u5019\u9009\u540d\u5355","talent_post_candidate_discovered_by_on":"\u7531 {{discovered_by.display_name}} \u4e8e <span class=\"js-updating-timestamp\" data-timestamp=\"{{discovered_on}}\"><\/span> \u53d1\u73b0","talent_post_candidate_discovered_on":"\u53d1\u73b0\u65e5\u671f: <span class=\"js-updating-timestamp\" data-timestamp=\"{{discovered_on}}\"><\/span>","talent_post_candidate_make_a_note":"\u505a\u6ce8\u91ca","talent_post_candidate_recommended_on":"\u63a8\u8350{{#recommended_on}}\u65e5\u671f: <span class=\"js-updating-timestamp\" data-timestamp=\"{{recommended_on}}\"><\/span>{{\/recommended_on}}","talent_post_candidate_view_website":"\u67e5\u770b\u7f51\u7ad9","talent_post_candidates_based":"\u63a8\u8350\u57fa\u4e8e\u60a8\u5217\u5165\u5230\u6700\u7ec8\u5019\u9009\u540d\u5355\u7684\u5019\u9009\u4eba\u4ee5\u53ca\u60a8\u53d1\u73b0\u7684\u5019\u9009\u4eba\u3002","talent_post_creative_index":"\u521b\u610f\u6307\u6570","talent_post_delete_post_are_you_sure":"\u662f\u5426\u786e\u5b9e\u8981\u5220\u9664\u6b64\u6b21\u53d1\u5e03? \u804c\u4f4d\u53d1\u5e03\u5220\u9664\u662f\u6c38\u4e45\u6027\u7684\u5e76\u4e14\u65e0\u6cd5\u64a4\u6d88\u3002\u60a8\u5c06\u5931\u53bb\u4e0e\u6b64\u641c\u7d22\u5173\u8054\u7684\u6240\u6709\u6ce8\u91ca\u3001\u5019\u9009\u4eba\u53ca\u6570\u636e\u3002","talent_post_delete_search_are_you_sure":"\u662f\u5426\u786e\u5b9e\u8981\u5220\u9664\u6b64\u641c\u7d22? \u4eba\u624d\u641c\u7d22\u5220\u9664\u662f\u6c38\u4e45\u6027\u7684\u5e76\u4e14\u65e0\u6cd5\u64a4\u6d88\u3002\u60a8\u5c06\u5931\u53bb\u4e0e\u6b64\u641c\u7d22\u5173\u8054\u7684\u6240\u6709\u6ce8\u91ca\u3001\u5019\u9009\u4eba\u53ca\u6570\u636e\u3002","talent_post_empty_add_from_profile":"\u7136\u540e\uff0c\u60a8\u53ef\u4ece\u5019\u9009\u4eba\u4e2a\u4eba\u8d44\u6599\u6216\u9879\u76ee\u4e2d\u5411\u60a8\u7684\u641c\u7d22\u6dfb\u52a0\u5019\u9009\u4eba\u3002","talent_post_empty_chosen_external_url":"\u60a8\u5df2\u9009\u62e9\u901a\u8fc7\u5916\u90e8 URL \u8ba9\u7533\u8bf7\u4eba\u7533\u8bf7\u6b64\u804c\u4f4d\u3002","talent_post_empty_discover_try":"\u5c1d\u8bd5\u4f7f\u7528<a href=\"{{URLS.DISCOVER}}\">\u53d1\u73b0<\/a>\u9009\u9879\u5361\u67e5\u627e\u9002\u5408\u60a8\u7684\u804c\u4f4d\u7684\u65b0\u5019\u9009\u4eba\u3002","talent_post_empty_discover_use":"\u4f7f\u7528<a href=\"{{URLS.DISCOVER}}\">\u53d1\u73b0<\/a>\u9009\u9879\u5361\u67e5\u627e\u9002\u5408\u60a8\u7684\u804c\u4f4d\u7684\u65b0\u5019\u9009\u4eba\u3002","talent_post_empty_filtering":"\u6ca1\u6709\u4efb\u4f55\u5019\u9009\u4eba\u7b26\u5408\u60a8\u7684\u7b5b\u9009\u6761\u4ef6\u3002","talent_post_empty_learn_more":"\u8be6\u7ec6\u4e86\u89e3 Adobe Talent &rarr;","talent_post_empty_no_applicants":"\u60a8\u6ca1\u6709\u7533\u8bf7\u4eba\u3002","talent_post_empty_no_candidates":"\u60a8\u6ca1\u6709\u5019\u9009\u4eba\u3002","talent_post_empty_no_discovered":"\u60a8\u5c1a\u672a\u53d1\u73b0\u4efb\u4f55\u5019\u9009\u4eba\u3002","talent_post_empty_no_recommended":"\u60a8\u6ca1\u6709\u66f4\u591a\u63a8\u8350\u5019\u9009\u4eba\u3002","talent_post_empty_no_shortlisted":"\u60a8\u7684\u6700\u7ec8\u5019\u9009\u540d\u5355\u4e3a\u7a7a\u3002","talent_post_empty_premium_discover":"\u9ad8\u7ea7\u529f\u80fd: \u4f7f\u7528\u201c\u53d1\u73b0\u201d\u9009\u9879\u5361\u67e5\u627e\u65b0\u5019\u9009\u4eba\u3002","talent_post_empty_premium_filters":"Adobe Talent \u6210\u5458\u6709\u6743\u4f7f\u7528\u9ad8\u7ea7\u7b5b\u9009\u5668\u6765\u5e2e\u52a9\u60a8\u7f29\u5c0f\u8303\u56f4\u3002","talent_post_empty_premium_recommended":"\u9ad8\u7ea7\u529f\u80fd: \u8ba9\u6211\u4eec\u5411\u60a8\u63a8\u8350\u5019\u9009\u4eba","talent_post_empty_private_job":"\u6b64\u804c\u4f4d\u4e3a\u79c1\u6709\u804c\u4f4d\u3002","talent_post_empty_private_no_applicants":"\u79c1\u6709\u804c\u4f4d\u4e0d\u63a5\u6536\u7533\u8bf7\u3002","talent_post_empty_recommended_algorithms":"\u6211\u4eec\u7684\u7b97\u6cd5\u5728\u540e\u53f0\u8fd0\u884c\uff0c\u4ee5\u67e5\u627e\u9002\u5408\u60a8\u7684\u804c\u4f4d\u7684\u6700\u4f18\u79c0\u5e76\u4e14<br>\u6700\u5408\u9002\u7684\u4eba\u624d\u3002","talent_post_empty_recommended_available":"\u53ef\u5411 Adobe Talent \u8ba2\u6237\u63d0\u4f9b\u63a8\u8350\u7684\u5019\u9009\u4eba\u3002","talent_post_empty_removed_all":"\u60a8\u5df2\u4ece\u60a8\u7684\u804c\u4f4d\u4e2d\u5220\u9664\u6240\u6709\u5019\u9009\u4eba\u3002","talent_post_empty_shortlist_generate":"\u6211\u4eec\u5c06\u6839\u636e\u60a8\u52a0\u5165\u6700\u7ec8\u5019\u9009\u540d\u5355\u7684\u4eba\u5458\u63a8\u8350\u66f4\u591a\u4eba\u5458\u3002","talent_post_empty_shortlist_track":"\u60a8\u53ef\u5411\u60a8\u7684\u6700\u7ec8\u5019\u9009\u540d\u5355\u6dfb\u52a0\u5019\u9009\u4eba\u4ee5\u8ddf\u8e2a\u60a8\u7684\u6392\u540d\u9760\u524d\u7684\u5019\u9009\u4eba\u3002","talent_post_empty_upgrade_now":"\u7acb\u5373\u5347\u7ea7","talent_post_empty_view_public_post":"\u67e5\u770b\u60a8\u7684\u516c\u5f00\u804c\u4f4d\u53d1\u5e03 &rarr;","talent_post_expired_job_post":"\u5df2\u8fc7\u671f\u7684\u804c\u4f4d\u53d1\u5e03","talent_post_label_added_to":"\u5df2\u6dfb\u52a0\u81f3:","talent_post_label_all_loaded":"\u5df2\u52a0\u8f7d\u6240\u6709\u5f53\u524d\u63a8\u8350","talent_post_label_archived":"(\u5df2\u5b58\u6863)","talent_post_label_load_more":"\u52a0\u8f7d\u66f4\u591a\u63a8\u8350","talent_post_label_matching_candidates":"\u5339\u914d\u5019\u9009\u4eba:","talent_post_label_sort_by":"\u6392\u5e8f\u4f9d\u636e:","talent_post_label_sort_premium_feature":"\u6b64\u5206\u7c7b\u4e3a\u9ad8\u7ea7\u529f\u80fd\u3002","talent_post_label_view":"\u67e5\u770b: ","talent_post_label_view_job_post":"\u67e5\u770b\u804c\u4f4d\u53d1\u5e03","talent_post_note_popup_none":"\u60a8\u672a\u5bf9 {{username}} \u8fdb\u884c\u4efb\u4f55\u6ce8\u91ca\u3002","talent_post_note_popup_visible_share":"\u6ce8\u91ca\u4ec5\u5bf9\u60a8\u53ca\u60a8\u4e0e\u5176\u5171\u4eab\u4e86\u804c\u4f4d\u7684\u4eba\u5458\u53ef\u89c1\u3002","talent_post_note_popup_visible_you":"\u6ce8\u91ca\u4ec5\u5bf9\u60a8\u53ef\u89c1\u3002","talent_post_or_browse_discover":"\u6216\u8005\uff0c\u5728<a href=\"{{URLS.DISCOVER}}\">\u53d1\u73b0<\/a>\u9009\u9879\u5361\u4e0a\u6d4f\u89c8\u9876\u5c16\u521b\u610f\u4eba\u624d\u3002","talent_post_private_job":"\u79c1\u6709\u804c\u4f4d","talent_post_public_post":"\u516c\u5f00\u804c\u4f4d","talent_post_sidebar_all_candidates":"\u6240\u6709\u5019\u9009\u4eba <span class=\"count\">({{totals.all}})<\/span>","talent_post_sidebar_applied":"\u5df2\u7533\u8bf7 <span class=\"count\">({{totals.apply}})<\/span>","talent_post_sidebar_discovered":"\u5df2\u53d1\u73b0 <span class=\"count\">({{totals.discover}})<\/span>","talent_post_sidebar_label_clients":"\u4efb\u804c\u8fc7\u7684\u516c\u53f8","talent_post_sidebar_label_contact":"\u8054\u7cfb\u5386\u53f2\u8bb0\u5f55","talent_post_sidebar_label_creative_index":"\u521b\u610f\u6307\u6570","talent_post_sidebar_label_filter":"\u5019\u9009\u4eba\u7b5b\u9009\u4f9d\u636e:","talent_post_sidebar_label_keyword":"\u5173\u952e\u5b57\u641c\u7d22","talent_post_sidebar_label_location":"\u4f4d\u7f6e","talent_post_sidebar_label_noted":"\u641c\u7d22\u6ce8\u91ca","talent_post_sidebar_label_schools":"\u66fe\u5c31\u8bfb\u7684\u5b66\u6821","talent_post_sidebar_label_tools":"\u6240\u7528\u5de5\u5177","talent_post_sidebar_label_view":"\u67e5\u770b","talent_post_sidebar_location_button_apply":"\u5e94\u7528","talent_post_sidebar_location_city":"\u57ce\u5e02","talent_post_sidebar_location_country":"\u56fd\u5bb6\/\u5730\u533a","talent_post_sidebar_location_province":"\u7701\/\u76f4\u8f96\u5e02\/\u81ea\u6cbb\u533a","talent_post_sidebar_location_state":"\u5dde","talent_post_sidebar_my_shortlist":"\u6211\u7684\u6700\u7ec8\u5019\u9009\u540d\u5355 <span class=\"count js-count\">({{totals.shortlist}})<\/span>","talent_post_sidebar_placeholder_clients":"\u516c\u53f8\u540d\u79f0...","talent_post_sidebar_placeholder_contacted":"\u6211\u5411\u5176\u53d1\u9001\u6d88\u606f\u7684\u4eba\u5458","talent_post_sidebar_placeholder_noted":"\u6211\u5df2\u5bf9\u5176\u505a\u6ce8\u91ca\u7684\u4eba\u5458","talent_post_sidebar_placeholder_schools":"SCAD\u3001RISD\u3001SVA \u7b49","talent_post_sidebar_placeholder_search":"\u641c\u7d22...","talent_post_sidebar_placeholder_tools":"\u8f6f\u4ef6\u3001\u6750\u6599\u7b49","talent_post_sidebar_recommended":"\u5df2\u63a8\u8350 <span class=\"count\">({{totals.recommend}})<\/span>","talent_post_sort_alphabetical":"\u6309\u5b57\u6bcd\u987a\u5e8f","talent_post_sort_most_appreciated":"\u597d\u8bc4\u6700\u591a","talent_post_sort_most_recent":"\u6700\u65b0","talent_post_upgrade_to_talent":"\u5347\u7ea7\u5230 Adobe Talent &rarr;","talent_sidebar_adobe_talent_info":"Adobe Talent \u4fe1\u606f","talent_sidebar_empty_no_active_jobs":"\u60a8\u6ca1\u6709\u4efb\u4f55\u6d3b\u52a8\u804c\u4f4d","talent_sidebar_linkedin_profile":"Linkedin \u4e2a\u4eba\u8d44\u6599","talent_sidebar_personal_website":"\u4e2a\u4eba\u7f51\u7ad9","talent_sidebar_post_a_job":"\u53d1\u5e03\u804c\u4f4d","talent_sidebar_post_a_job_rarr":"\u53d1\u5e03\u804c\u4f4d &rarr;","talent_sidebar_resume":"\u7b80\u5386","talent_sidebar_save_as_candidate":"\u53e6\u5b58\u4e3a\u5019\u9009\u4eba","talent_sidebar_similar_creatives":"\u76f8\u4f3c\u521b\u610f","talent_sidebar_similar_projects":"\u76f8\u4f3c\u9879\u76ee","talent_sidebar_view_more_creatives":"\u67e5\u770b\u66f4\u591a\u7c7b\u4f3c\u521b\u610f\u8bbe\u8ba1\u4eba\u5458 &rarr;","talent_sidebar_view_more_projects":"\u67e5\u770b\u66f4\u591a\u7c7b\u4f3c\u9879\u76ee &rarr;","talent_walkthrough_applicants":"\u6b64\u5904\u5217\u51fa\u4e86\u7533\u8bf7\u60a8\u7684\u516c\u5f00\u804c\u4f4d\u53d1\u5e03\u7684\u5019\u9009\u4eba\u3002","talent_walkthrough_applicants_title":"\u7533\u8bf7\u4eba","talent_walkthrough_contact":"\u5411\u6b64\u804c\u4f4d\u7684\u6392\u540d\u9760\u524d\u7684\u5019\u9009\u4eba\u53d1\u9001\u6d88\u606f\u3002","talent_walkthrough_contact_title":"\u8054\u7cfb\u5019\u9009\u4eba","talent_walkthrough_dicovered_title":"\u5df2\u53d1\u73b0","talent_walkthrough_discovered":"\u6b64\u5904\u5217\u51fa\u4e86\u4ece\u5019\u9009\u4eba\u7684\u9879\u76ee\u548c\u4e2a\u4eba\u8d44\u6599\u4e2d\u6dfb\u52a0\u7684\u5019\u9009\u4eba\u3002","talent_walkthrough_notes1":"\u7f16\u5199\u6709\u5173\u5019\u9009\u4eba\u7684\u6ce8\u91ca\uff0c\u4ee5\u4f9b\u672a\u6765\u53c2\u8003\u3002","talent_walkthrough_notes2":"\u60a8\u4e0e\u5176\u5171\u4eab\u4e86\u6b64\u804c\u4f4d\u7684\u4efb\u4f55\u4eba\u53ef\u67e5\u770b\u548c\u6dfb\u52a0\u6ce8\u91ca\u3002","talent_walkthrough_notes_title":"\u505a\u6ce8\u91ca","talent_walkthrough_recommended":"\u6211\u4eec\u5c06\u57fa\u4e8e\u60a8\u7684\u641c\u7d22\u6761\u4ef6\u63a8\u8350\u5019\u9009\u4eba\u3002","talent_walkthrough_recommended_title":"\u63a8\u8350","talent_walkthrough_refine":"\u5f53\u60a8\u5c06\u67d0\u4e2a\u5019\u9009\u4eba\u5217\u5165\u5230\u6700\u7ec8\u5019\u9009\u540d\u5355\u4e0a\u65f6\uff0cAdobe Talent \u4f1a\u4e86\u89e3\u60a8\u7684\u504f\u597d\u5e76\u6539\u8fdb\u63a8\u8350\u3002","talent_walkthrough_refine_title":"\u4f18\u5316\u60a8\u7684\u641c\u7d22","talent_walkthrough_shortlist":"\u5728\u4e00\u4e2a\u5217\u8868\u4e2d\u5217\u51fa\u6392\u540d\u9760\u524d\u7684\u5019\u9009\u4eba\u4f9b\u60a8\u8bbf\u95ee\u548c\u67e5\u770b\u3002","talent_walkthrough_shortlist_title":"\u6700\u7ec8\u5019\u9009\u540d\u5355","team_about":"\u5173\u4e8e","team_admin_has_not_verified_email":"\u8981\u6dfb\u52a0 Web \u5f15\u7528\uff0c\u60a8\u7684\u56e2\u961f\u7ba1\u7406\u5458\u5fc5\u987b\u5177\u6709\u7ecf\u9a8c\u8bc1\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740","team_already_invited":"\u60a8\u5df2\u9080\u8bf7\u6b64\u4eba\u52a0\u5165\u56e2\u961f","team_already_member_of_team":"\u7528\u6237\u5df2\u7ecf\u662f\u56e2\u961f\u6210\u5458","team_behance_url":"Behance URL","team_creation_add_project":"\u6dfb\u52a0\u9879\u76ee","team_creation_admin_role":"\u7ba1\u7406\u5458","team_creation_attract_hire":"\u5438\u5f15\u5e76\u96c7\u4f63\u4eba\u624d","team_creation_back":"&larr; \u540e\u9000","team_creation_basic_information":"\u57fa\u672c\u4fe1\u606f","team_creation_company_team":"\u516c\u53f8\/\u56e2\u961f\u540d\u79f0","team_creation_create_a":"\u521b\u5efa\u56e2\u961f","team_creation_create_new":"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u56e2\u961f\u9875\u9762\u6216\u8bf7\u6c42\u52a0\u5165 Behance \u4e0a\u7684\u4e00\u4e2a\u73b0\u6709\u56e2\u961f\u3002","team_creation_create_now":"\u7acb\u5373\u521b\u5efa &rarr;","team_creation_create_page":"\u521b\u5efa\u60a8\u7684\u56e2\u961f\u9875\u9762","team_creation_create_team":"\u521b\u5efa\u56e2\u961f","team_creation_creating_team":"\u521b\u5efa\u56e2\u961f\u9875\u9762\u975e\u5e38\u7b80\u5355\uff0c\u4e5f\u65e0\u9700\u65b0\u5e10\u6237\u3002","team_creation_currently_work_at":"\u60a8\u73b0\u5728\u662f\u5426\u5728 {{profile.display_name}} \u5de5\u4f5c\uff1f","team_creation_discover_new":"\u53d1\u73b0\u65b0\u56e2\u961f","team_creation_does_not_exist":"<div class=\"empty-team-name\">&ldquo;{{term}}&rdquo;<\/div> Behance \u4e0a\u5c1a\u4e0d\u5b58\u5728\u6b64\u56e2\u961f\u3002","team_creation_enter_name":"\u8f93\u5165\u540d\u79f0","team_creation_get_credit":"\u83b7\u5f97\u6240\u505a\u5de5\u4f5c\u7684\u529f\u52b3","team_creation_get_started":"\u5f00\u59cb\u4f7f\u7528\u56e2\u961f","team_creation_how_team":"\u56e2\u961f\u5982\u4f55\u5de5\u4f5c?","team_creation_last_step":"&larr; \u56de\u5230\u4e0a\u4e00\u6b65","team_creation_member":"\u6210\u5458","team_creation_member_role":"\u6210\u5458","team_creation_next":"\u4e0b\u4e00\u6b65","team_creation_no_users":"\u627e\u4e0d\u5230\u7528\u6237\u3002\u8bf7\u952e\u5165\u4e00\u4e2a\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u4ee5\u9080\u8bf7\u975e\u4f1a\u5458\u7528\u6237\u3002","team_creation_one_add":"1. \u6dfb\u52a0\u57fa\u672c\u4fe1\u606f","team_creation_one_basic":"1. \u6dfb\u52a0\u57fa\u672c\u4fe1\u606f","team_creation_pending":"\u7b49\u5f85\u786e\u8ba4","team_creation_project_added":"\u9879\u76ee\u5df2\u6dfb\u52a0","team_creation_public_team":"\u60a8\u6ca1\u6709\u4efb\u4f55\u516c\u5171\u9879\u76ee\u53ef\u6dfb\u52a0\u5230\u6b64\u56e2\u961f\u3002","team_creation_remove_project":"\u79fb\u53bb\u9879\u76ee","team_creation_requested":"\u5df2\u8bf7\u6c42","team_creation_select_projects":"\u9009\u62e9\u5728\u60a8\u7684\u56e2\u961f\u9875\u9762\u4e0a\u663e\u793a\u7684\u9879\u76ee","team_creation_structure_team":"\u56e2\u961f\u9875\u9762\u7684\u7ed3\u6784\u53ef\u786e\u4fdd\u4f60\u4eec\u6240\u505a\u5de5\u4f5c\u7684\u529f\u52b3\u59cb\u7ec8\u5f52\u4e8e\u60a8\u548c\u60a8\u7684\u961f\u53cb\u3002","team_creation_take_look":"\u770b\u4e00\u770b Behance \u4e0a\u7684\u516c\u53f8\u662f\u5982\u4f55\u4f7f\u7528\u56e2\u961f\u9875\u9762\u7684\u3002","team_creation_team_behance":"\u60a8\u7684\u56e2\u961f\uff0c\u5728 Behance \u4e0a","team_creation_team_bring":"\u56e2\u961f\u9875\u9762\u5c06\u60a8\u7684\u56e2\u961f\u5b8c\u6210\u7684\u6240\u6709\u5de5\u4f5c\u653e\u5728\u4e00\u4e2a\u5730\u65b9\u3002","team_creation_team_page":"\u56e2\u961f\u9875\u9762\u8ba9\u60a8\u5411\u5168\u4e16\u754c\u5ba3\u4f20\u60a8\u56e2\u961f\u7684\u5de5\u4f5c\u3002\u5982\u679c\u60a8\u6b63\u5728\u62db\u8058\uff0c\u60a8\u7684\u7a7a\u7f3a\u804c\u4f4d\u4f1a\u81ea\u52a8\u663e\u793a\u5728\u9875\u9762\u7684\u4fa7\u680f\u4e2d\u3002","team_creation_three_coworker":"3. \u9080\u8bf7\u5408\u4f5c\u8005","team_creation_three_invite":"3. \u9080\u8bf7\u5408\u4f5c\u8005","team_creation_two_add":"2. \u6dfb\u52a0\u60a8\u7684\u9879\u76ee","team_creation_two_projects":"2. \u6dfb\u52a0\u60a8\u7684\u9879\u76ee","team_creation_your_team":"\u60a8\u5728 Behance \u4e0a\u7684\u56e2\u961f","team_delete_confirm":"\u6211\u8981\u5220\u9664\u6b64\u56e2\u961f\u8d44\u6599","team_delete_text":"\u5220\u9664\u60a8\u7684\u56e2\u961f\u4e5f\u5c06\u4ece\u8be5\u56e2\u961f\u4e2d\u5220\u9664\u6240\u6709\u6210\u5458\u548c\u7ba1\u7406\u5458\u3002\u5220\u9664\u56e2\u961f\u662f\u6c38\u4e45\u6027\u7684\uff0c\u4e0e\u8be5\u56e2\u961f\u5173\u8054\u7684\u6570\u636e\u65e0\u6cd5\u6062\u590d\u3002","team_delete_text_also":"\u5220\u9664\u56e2\u961f\u8fd8\u5c06\u5220\u9664\u4e0e\u6b64\u56e2\u961f\u5173\u8054\u7684\u4efb\u4f55\u804c\u4f4d\u6216\u4eba\u624d\u641c\u7d22\u3002","team_delete_title":"\u662f\u5426\u5220\u9664\u56e2\u961f\u8d44\u6599?","team_invite_already_exists":"\u9080\u8bf7\u5df2\u5b58\u5728","team_invite_failed_to_be_sent":"\u9080\u8bf7\/\u8bf7\u6c42\u53d1\u9001\u5931\u8d25","team_invite_has_been_sent":"\u60a8\u7684\u9080\u8bf7\u5df2\u53d1\u9001","team_invite_only":"\u4f7f\u56e2\u961f\u53ea\u63a5\u53d7\u53d7\u9080\u8bf7\u7684\u7528\u6237(\u7528\u6237\u65e0\u6cd5\u8bf7\u6c42\u52a0\u5165\u6b64\u56e2\u961f)","team_invites_have_been_sent":"\u60a8\u7684\u9080\u8bf7\u5df2\u53d1\u9001","team_not_authorized_to_delete_the_team":"\u60a8\u65e0\u6743\u5220\u9664\u6b64\u56e2\u961f","team_not_authorized_to_remove_members":"\u60a8\u65e0\u6743\u79fb\u53bb\u76f8\u5e94\u6210\u5458","team_not_authorized_to_remove_projects":"\u60a8\u65e0\u6743\u5c06\u9879\u76ee\u4ece\u6b64\u56e2\u961f\u4e2d\u79fb\u9664","team_not_authorized_to_send_invites":"\u60a8\u65e0\u6743\u4ee3\u8868\u6b64\u56e2\u961f\u53d1\u9001\u9080\u8bf7","team_page_disclaimer":"\u56e2\u961f\u9875\u9762\u53ea\u80fd\u7531\u76f8\u5e94\u56e2\u961f\u7684\u5f53\u524d\u6210\u5458\u3001\u54c1\u724c\u3001\u516c\u53f8\u3001\u8bbe\u8ba1\u5355\u4f4d\u6216\u6559\u80b2\u673a\u6784\u521b\u5efa\u3002","team_page_location":"\u4f4d\u7f6e","team_this_person_is_not_a_member_of":"\u6b64\u4eba\u4e0d\u662f\u8be5\u56e2\u961f\u7684\u6210\u5458\u3002","team_unable_to_update_team":"\u65e0\u6cd5\u66f4\u65b0\u56e2\u961f","team_user_is_not_valid":"\u7528\u6237\u65e0\u6548\uff01","team_view_save_button":"\u4fdd\u5b58","team_view_selected_count":"<span class=\"project-drowndown-status\">\u5df2\u9009\u62e9: <span class=\"js-project-count\">{{count}}<\/span><\/span>","team_web_references":"Web \u5f15\u7528","team_you_are_not_authorized_to_edit":"\u60a8\u65e0\u6743\u7f16\u8f91\u6b64\u56e2\u961f","team_you_are_the_only_admin":"\u60a8\u662f\u552f\u4e00\u7684\u7ba1\u7406\u5458\u3002\u5728\u79bb\u5f00\u6b64\u56e2\u961f\u4e4b\u524d\uff0c\u60a8\u9700\u8981\u6307\u5b9a\u4e00\u4e2a\u65b0\u7684\u7ba1\u7406\u5458\uff01","team_you_do_not_have_access":"\u60a8\u6ca1\u6709\u8bbf\u95ee\u6743\u9650","team_you_have_exceeded_max_references":"\u5df2\u8d85\u51fa\u6700\u5927\u5f15\u7528\u6570\u91cf","testimonials_apologize":"\u6210\u529f\u6848\u4f8b\u6570\u636e\u5f53\u524d\u4e0d\u53ef\u7528\u3002\u5bf9\u6b64\u7ed9\u60a8\u5e26\u6765\u7684\u4e0d\u4fbf\uff0c\u6211\u4eec\u6df1\u8868\u6b49\u610f\u3002\u8bf7\u7a0d\u540e\u91cd\u8bd5\u3002","testimonials_article":"\u6587\u7ae0","testimonials_behance":"<strong>B&#275;hance<\/strong> \u6210\u529f\u6848\u4f8b","testimonials_benefited_connect":"\u60a8\u5728\u4f7f\u7528 Behance \u5b9e\u73b0\u8fde\u63a5\u3001\u5c55\u793a<br\/>\u4f5c\u54c1\u6216\u5bfb\u627e\u4eba\u624d\u7684\u8fc7\u7a0b\u4e2d\u662f\u5426\u53d7\u76ca\u532a\u6d45\uff1f\u4e0d\u59a8\u5411\u6211\u4eec\u4e00\u4e00\u9053\u6765\uff01","testimonials_by":"\u4f5c\u8005:","testimonials_loading":"\u6b63\u5728\u8f7d\u5165","testimonials_page_title":"\u6210\u529f\u6848\u4f8b","testimonials_share":"\u5206\u4eab\u60a8\u7684\u6545\u4e8b","testimonials_submitted":"\u60a8\u7684\u6545\u4e8b\u5df2\u63d0\u4ea4\u3002","testimonials_success":"\u60a8\u662f\u5426\u6210\u529f\u4f7f\u7528\u8fc7 Behance?","testimonials_team":"Behance \u56e2\u961f","testimonials_unavailable":"\u6210\u529f\u6848\u4f8b\u4e0d\u53ef\u7528","unverified_messages_access":"\u60a8\u9700\u8981\u5177\u5907\u7ecf\u8fc7\u9a8c\u8bc1\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u624d\u80fd\u4f7f\u7528\u6b64\u529f\u80fd\u3002","unverified_messages_click_here":"\u5355\u51fb\u6b64\u5904\u3002","unverified_messages_email":"\u8fd8\u6ca1\u6709\u6536\u5230\u9a8c\u8bc1\u7535\u5b50\u90ae\u4ef6\uff1f","user_cover_fields":"\u9886\u57df:","user_cover_location":"\u4f4d\u7f6e:","user_cover_view_profile":"\u67e5\u770b\u8d44\u6599","user_cover_view_team":"\u67e5\u770b\u56e2\u961f","user_setting_activity_digest_notification":"\u65b0\u9879\u76ee\u6d3b\u52a8\u548c\u7f51\u7edc\u4f5c\u54c1\u96c6","user_setting_collection_invitation_notification":"\u9080\u8bf7\u6211\u5171\u540c\u62e5\u6709\u4f5c\u54c1\u96c6","user_setting_direct_message_notification":"\u5411\u6211\u76f4\u63a5\u53d1\u9001\u6d88\u606f","user_setting_follower_notification":"\u5173\u6ce8\u6211\u7684\u4f5c\u54c1\u6216\u4f5c\u54c1\u96c6","user_setting_friend_joined_notification":"\u6211\u8ba4\u8bc6\u7684\u4eba\u52a0\u5165\u4e86 Behance","user_setting_hd_images_setting":"\u9ad8\u6e05\u56fe\u50cf","user_setting_occasional_newsletter":"\u58f0\u660e\u548c\u7279\u6b8a\u4f18\u60e0 <span class=\"italic grey\">\uff08\u6781\u5c11\uff09<\/span>","user_setting_project_collection_add_notification":"\u5c06\u6211\u7684\u4e00\u4e2a\u9879\u76ee\u6dfb\u52a0\u5230\u4f5c\u54c1\u96c6\u4e2d","user_setting_project_comment_notification":"\u5bf9\u6211\u7684\u4e00\u4e2a\u9879\u76ee\u53d1\u8868\u8bc4\u8bba","user_setting_project_invitation_notification":"\u9080\u8bf7\u6211\u5171\u540c\u62e5\u6709\u9879\u76ee","user_setting_project_publish_notification":"\u53d1\u5e03\u9879\u76ee","user_setting_request_member_to_team":"\u8bf7\u6c42\u52a0\u5165\u6211\u7684\u4e00\u4e2a\u5c0f\u7ec4","user_setting_request_project_to_team":"\u8bf7\u6c42\u5c06\u4ed6\u4eec\u7684\u9879\u76ee\u6dfb\u52a0\u5230\u6211\u7684\u5c0f\u7ec4","user_setting_request_team_to_member":"\u8bf7\u6c42\u8ba9\u6211\u52a0\u5165\u4ed6\u4eec\u7684\u5c0f\u7ec4","user_setting_safe_browsing_setting":"\u5b89\u5168\u6d4f\u89c8","user_setting_summary_digest_notification":"\u5411\u6211\u53d1\u9001\u6709\u5173\u901a\u77e5\u7684\u7535\u5b50\u90ae\u4ef6\u6c47\u603b\uff08\u4e0d\u8d85\u8fc7 3 \u5929 1 \u6b21\uff09\uff0c\u800c\u4e0d\u662f\u5355\u72ec\u7684\u901a\u77e5\u90ae\u4ef6\u3002","user_setting_talent_search_application":"\u7533\u8bf7\u804c\u4f4d","user_setting_talent_search_archived":"\u5c06\u804c\u4f4d\u5f52\u6863","user_setting_talent_search_digest":"\u65b0\u63a8\u8350\u3001\u53d1\u73b0\u7684\u7528\u6237\u548c\u7533\u8bf7\u4eba","user_setting_talent_search_note":"\u5411\u5019\u9009\u4eba\u6dfb\u52a0\u6ce8\u91ca","user_setting_talent_search_recommendations":"\u63a8\u8350\u7ed9\u4e00\u4e2a\u804c\u4f4d","user_setting_talent_search_shared":"\u5171\u4eab\u804c\u4f4d","user_setting_user_added_to_discovered":"\u5411\u804c\u4f4d\u6dfb\u52a0\u5019\u9009\u4eba","user_setting_user_added_to_shortlist":"\u4f5c\u4e3a\u5019\u9009\u4eba\u6dfb\u52a0\u5230\u6700\u7ec8\u5019\u9009\u540d\u5355","user_setting_user_mention_notification":"\u5728\u8bc4\u8bba\u4e2d\u63d0\u5230\u6211","view_project_again":"View project again","work_experience_add_award":"\u6dfb\u52a0\u5956\u54c1","work_experience_add_education":"\u6dfb\u52a0\u6559\u80b2","work_experience_add_language":"\u6dfb\u52a0\u8bed\u8a00","work_experience_add_work":"\u6dfb\u52a0\u5de5\u4f5c\u7ecf\u5386","work_experience_area_expertise":"\u60a8\u7684\u4e13\u957f\u9886\u57df\u662f\u4ec0\u4e48? \u4f8b\u5982: Adobe Illustrator\u3001Web Design\u3001CSS \u7b49","work_experience_award":"\u5956\u54c1","work_experience_award_organization":"\u5956\u52b1\u7ec4\u7ec7","work_experience_bachelor_arts":"\u4f8b\u5982: \u7f8e\u672f\u5b66\u5b66\u58eb","work_experience_button_save_settings":"\u4fdd\u5b58\u8bbe\u7f6e","work_experience_cancel":"\u53d6\u6d88","work_experience_company_name":"\u516c\u53f8\u540d\u79f0","work_experience_company_organization":"\u516c\u53f8\/\u7ec4\u7ec7","work_experience_contact_info":"\u8054\u7cfb\u4fe1\u606f","work_experience_courses_include":"\u4f8b\u5982: \u6211\u7684\u8bfe\u7a0b\u5305\u62ec...","work_experience_custom_section":"\u81ea\u5b9a\u4e49\u533a\u57df","work_experience_date_received":"\u6536\u5230\u7684\u65e5\u671f","work_experience_degree":"\u5b66\u4f4d","work_experience_delete_award":"\u5220\u9664\u6b64\u5956\u54c1","work_experience_delete_education":"\u5220\u9664\u6b64\u6559\u80b2","work_experience_delete_experience":"\u5220\u9664\u6b64\u5de5\u4f5c\u7ecf\u5386","work_experience_delete_language":"\u5220\u9664\u6b64\u8bed\u8a00","work_experience_details":"\u8be6\u7ec6\u4fe1\u606f","work_experience_display_as":"\u8fd9\u5c06\u663e\u793a\u4e3a:","work_experience_edit_mode":"\u4ec5\u9650\u60a8(\u7f16\u8f91\u6a21\u5f0f)","work_experience_education":"\u6559\u80b2","work_experience_email_address":"\u7535\u5b50\u90ae\u4ef6\u5730\u5740","work_experience_ending_in":"\u7ed3\u675f\u4e8e","work_experience_full_name":"\u5168\u540d","work_experience_international_design":"\u4f8b\u5982: \u56fd\u9645\u8bbe\u8ba1\u5956","work_experience_job_opportunities":"\u5b8c\u6574\u7684\u7b80\u5386\u6709\u52a9\u4e8e\u589e\u52a0\u5de5\u4f5c\u673a\u4f1a\u3002\u4f5c\u51fa\u66f4\u6e05\u6670\u7684\u63cf\u8ff0\uff0c\u4ee5\u4fbf\u6f5c\u5728\u96c7\u4e3b\u4e86\u89e3\u60a8\u7684\u5b8c\u6574\u6280\u80fd\u96c6\u3002","work_experience_language":"\u8bed\u8a00","work_experience_language_advanced":"\u9ad8\u7ea7","work_experience_language_beginner":"\u65b0\u624b","work_experience_language_conversational":"\u5bf9\u8bdd","work_experience_language_fluent":"\u6d41\u7545","work_experience_language_native":"\u672c\u673a","work_experience_location":"\u4f4d\u7f6e","work_experience_members_only":"\u4ec5\u9650 Behance \u4f1a\u5458","work_experience_month":"\u6708","work_experience_more_questions":"\u6709\u5173\u4e8e\u5de5\u4f5c\u7ecf\u5386\u7684\u66f4\u591a\u95ee\u9898? <a href=\"{{faqUrl}}\">\u8bf7\u67e5\u770b\u5e38\u89c1\u95ee\u9898\u89e3\u7b54 &rarr;<\/a>","work_experience_occupation_job":"\u804c\u4e1a\/\u804c\u52a1","work_experience_organization_name":"\u7ec4\u7ec7\u540d\u79f0","work_experience_other_url":"\u5176\u5b83 URL","work_experience_page_title":"\u5de5\u4f5c\u7ecf\u5386","work_experience_personal_statement":"\u4e2a\u4eba\u58f0\u660e","work_experience_phone_number":"\u7535\u8bdd\u53f7\u7801","work_experience_placeholder":"\u7f51\u7ad9 URL","work_experience_plural_awards":"\u5956\u54c1","work_experience_plural_languages":"\u8bed\u8a00","work_experience_position":"\u804c\u4f4d","work_experience_position_example":"\u4f8b\u5982: \u63d2\u753b\u5e08\u3001\u56fe\u5f62\u8bbe\u8ba1\u5e08\u7b49","work_experience_present":"\u5f53\u524d","work_experience_proficiency_level":"\u719f\u7ec3\u7a0b\u5ea6","work_experience_public":"\u516c\u5171","work_experience_public_portfolio":"Behance \u516c\u5171\u4f5c\u54c1\u96c6","work_experience_responsibilities":"\u4f8b\u5982: \u6211\u7684\u804c\u8d23\u5305\u62ec...","work_experience_resume_complete":"\u60a8\u7684\u7b80\u5386\u5feb\u8981\u5b8c\u6210\u4e86!","work_experience_resume_entity_not_found":"\u672a\u627e\u5230\u7b80\u5386\u5b9e\u4f53","work_experience_saving":"\u5b58\u50a8...","work_experience_school":"\u5b66\u6821\u6216\u5927\u5b66","work_experience_school_name":"\u5b66\u6821\u540d\u79f0","work_experience_sections_complete":"5 \u4e2a\u4e3b\u8981\u90e8\u5206\u4e2d\u6709 3 \u4e2a\u5df2\u5b8c\u6210","work_experience_see_resume":"\u8bbe\u7f6e\u8c01\u80fd\u770b\u89c1\u60a8\u7684\u7b80\u5386","work_experience_senior":"\u4f8b\u5982: \u8d44\u6df1\u8bbe\u8ba1\u4eba\u5458\u3001\u827a\u672f\u603b\u76d1\u3001\u5b66\u751f","work_experience_singular_award":"\u5956\u54c1","work_experience_singular_language":"\u8bed\u8a00","work_experience_skills":"\u6280\u80fd","work_experience_starting_from":"\u5f00\u59cb\u4e8e","work_experience_title":"\u6807\u9898","work_experience_title_info":"\u57fa\u672c\u4fe1\u606f","work_experience_view_resume":"\u67e5\u770b\u7b80\u5386","work_experience_visible_to":"\u663e\u793a\u5bf9\u8c61","work_experience_website":"\u7f51\u7ad9","work_experience_website_url":"\u7f51\u7ad9 URL","work_experience_work":"\u5de5\u4f5c\u7ecf\u5386","work_experience_year":"\u5e74","email_behance_welcome":"Behance \u6b22\u8fce\u60a8","email_subject_welcome_to_behance":"\u6b22\u8fce\u4f7f\u7528 Behance (%s)","creative_field:All Realms":"\u6240\u6709\u521b\u610f\u9886\u57df","creative_field:Academia":"\u5b66\u672f\u754c","creative_field:Advertising":"\u5e7f\u544a","creative_field:Animation":"\u52a8\u753b","creative_field:Architecture":"\u5efa\u7b51","creative_field:Art Direction":"\u827a\u672f\u6307\u5bfc","creative_field:Automotive Design":"\u81ea\u52a8\u5316\u8bbe\u8ba1","creative_field:Blogging":"\u535a\u5ba2","creative_field:Branding":"\u54c1\u724c\u63a8\u5e7f","creative_field:Calligraphy":"\u4e66\u6cd5","creative_field:Caricature":"\u6f2b\u753b\u827a\u672f","creative_field:Carpentry":"\u6728\u5de5\u5de5\u827a","creative_field:Cartooning":"\u6f2b\u753b","creative_field:Ceramics":"\u9676\u74f7\u5de5\u827a","creative_field:Character Design":"\u4eba\u7269\u8bbe\u8ba1","creative_field:Choreography":"\u821e\u8e48\u7f16\u6392","creative_field:Cinematography":"\u7535\u5f71\u5236\u4f5c","creative_field:Claymation":"\u6ce5\u5851\u52a8\u753b","creative_field:Comedy":"\u559c\u5267","creative_field:Computer Animation":"\u8ba1\u7b97\u673a\u52a8\u753b","creative_field:Confectionary Arts":"\u7cd6\u679c\u827a\u672f","creative_field:Consulting":"\u54a8\u8be2","creative_field:Copywriting":"\u6587\u6848","creative_field:Costume Design":"\u670d\u88c5\u8bbe\u8ba1","creative_field:Crafts":"\u624b\u5de5\u827a","creative_field:Creative Direction":"\u521b\u610f\u6307\u5bfc","creative_field:Culinary Alchemy":"\u9876\u7ea7\u70f9\u996a\u827a\u672f","creative_field:Culinary Arts":"\u70f9\u996a\u827a\u672f","creative_field:Dance":"\u821e\u8e48","creative_field:Design":"\u8bbe\u8ba1","creative_field:Digital Art":"\u6570\u7801\u827a\u672f","creative_field:Digital Imaging":"\u6570\u7801\u5f71\u50cf","creative_field:Digital Photography":"\u6570\u7801\u6444\u5f71","creative_field:Directing":"\u5bfc\u6f14","creative_field:DJing":"DJ \u884c\u4e1a","creative_field:Documentary":"\u7eaa\u5f55\u7247","creative_field:Drawing":"\u7ed8\u56fe","creative_field:Editing":"\u7f16\u8f91","creative_field:Editorial Design":"\u7f16\u8f91\u8bbe\u8ba1","creative_field:Engineering":"\u5de5\u7a0b\u5b66","creative_field:Enology (Wines)":"\u8461\u8404\u9152\u917f\u5236","creative_field:Entrepreneurship":"\u521b\u4e1a\u5b66","creative_field:Exhibition Design":"\u5c55\u89c8\u8bbe\u8ba1","creative_field:Fashion":"\u65f6\u5c1a","creative_field:Fashion Styling":"\u65f6\u5c1a\u9020\u578b","creative_field:Film":"\u80f6\u7247","creative_field:Fine Arts":"\u7f8e\u672f","creative_field:Furniture Design":"\u5bb6\u5177\u8bbe\u8ba1","creative_field:Game Design":"\u6e38\u620f\u8bbe\u8ba1","creative_field:Glass Blowing":"\u73bb\u7483\u5439\u5236","creative_field:Graffiti":"\u6d82\u9e26\u827a\u672f","creative_field:Graphic Design":"\u56fe\u5f62\u8bbe\u8ba1","creative_field:Hair Styling":"\u53d1\u578b\u8bbe\u8ba1","creative_field:Ice Sculpting":"\u51b0\u96d5","creative_field:Icon Design":"\u56fe\u6807\u8bbe\u8ba1","creative_field:Illustration":"\u63d2\u56fe","creative_field:Industrial Design":"\u5de5\u4e1a\u8bbe\u8ba1","creative_field:Information Architecture":"\u4fe1\u606f\u67b6\u6784","creative_field:Installation Design":"\u5b89\u88c5\u8bbe\u8ba1","creative_field:Interaction Design":"\u4ea4\u4e92\u8bbe\u8ba1","creative_field:Interior Design":"\u5ba4\u5185\u8bbe\u8ba1","creative_field:Jewelry Design":"\u73e0\u5b9d\u8bbe\u8ba1","creative_field:Journalism":"\u65b0\u95fb\u4e1a","creative_field:Landscape Design":"\u666f\u89c2\u8bbe\u8ba1","creative_field:Leather Working":"\u76ae\u9769\u5236\u54c1","creative_field:Lighting Design":"\u706f\u5149\u8bbe\u8ba1","creative_field:Machinima":"\u5f15\u64ce\u7535\u5f71","creative_field:Magic":"\u9b54\u672f","creative_field:MakeUp Arts (MUA)":"\u5316\u5986\u827a\u672f (MUA)","creative_field:Marketing":"\u5e02\u573a\u8425\u9500","creative_field:Masonry":"\u77f3\u5de5\u884c\u4e1a","creative_field:Metal Working":"\u91d1\u5c5e\u52a0\u5de5","creative_field:Millinery":"\u5973\u5e3d\u4e1a","creative_field:Motion Graphics":"\u52a8\u6001\u56fe\u50cf\u8bbe\u8ba1","creative_field:Multimedia":"\u591a\u5a92\u4f53","creative_field:Music":"\u97f3\u4e50","creative_field:Music Composition":"\u97f3\u4e50\u521b\u4f5c","creative_field:Music Production":"\u97f3\u4e50\u5236\u4f5c","creative_field:Origami":"\u6298\u7eb8\u624b\u5de5","creative_field:Packaging":"\u5305\u88c5","creative_field:Painting":"\u7ed8\u753b","creative_field:Pattern Design":"\u56fe\u6848\u8bbe\u8ba1","creative_field:Performing Arts":"\u8868\u6f14\u827a\u672f","creative_field:Perfumery":"\u9999\u6c34\u884c\u4e1a","creative_field:Philanthropy":"\u6148\u5584\u4e8b\u4e1a","creative_field:Philosophy":"\u54f2\u5b66","creative_field:Photo Illustration":"\u63d2\u56fe\u6444\u5f71","creative_field:Photo Manipulation":"\u7167\u7247\u5904\u7406","creative_field:Photography":"\u6444\u5f71","creative_field:Photojournalism":"\u65b0\u95fb\u6444\u5f71","creative_field:Playwriting":"\u7f16\u5267","creative_field:Podcasting":"\u64ad\u5ba2","creative_field:Poetry":"\u8bd7\u6b4c","creative_field:Print Design":"\u5370\u5237\u8bbe\u8ba1","creative_field:Product Design":"\u4ea7\u54c1\u8bbe\u8ba1","creative_field:Production":"\u5236\u7247","creative_field:Programming":"\u7f16\u7a0b","creative_field:Publishing":"\u6b63\u5728\u53d1\u5e03","creative_field:Puppetry":"\u6728\u5076\u827a\u672f","creative_field:Retouching":"\u4fee\u56fe","creative_field:Screenwriting":"\u94f6\u5e55\u7f16\u5267","creative_field:Sculpting":"\u96d5\u5851","creative_field:Set Design":"\u5e03\u666f\u8bbe\u8ba1","creative_field:Singing":"\u97f3\u4e50\u754c","creative_field:Software Architecture":"\u8f6f\u4ef6\u67b6\u6784","creative_field:Songwriting":"\u6b4c\u66f2\u521b\u4f5c","creative_field:Sound Design":"\u97f3\u6548\u8bbe\u8ba1","creative_field:Storyboarding":"\u6545\u4e8b\u677f","creative_field:Storytelling":"\u6545\u4e8b\u53d9\u8ff0","creative_field:Street Art":"\u8857\u5934\u827a\u672f","creative_field:Television":"\u7535\u89c6\u4e1a","creative_field:Textile Design":"\u7eba\u7ec7\u54c1\u8bbe\u8ba1","creative_field:Theater":"\u620f\u5267","creative_field:Toy Design":"\u73a9\u5177\u8bbe\u8ba1","creative_field:Typography":"\u6392\u7248\u4e1a","creative_field:UI\/UX":"\u7528\u6237\u754c\u9762\/\u7528\u6237\u4f53\u9a8c","creative_field:Urbanism":"\u90fd\u5e02\u751f\u6d3b","creative_field:Video Arts":"\u5f71\u50cf\u827a\u672f","creative_field:Video Blogging":"\u89c6\u9891\u535a\u5ba2","creative_field:Video Game Design":"\u89c6\u9891\u6e38\u620f\u8bbe\u8ba1","creative_field:Video Jockey":"\u5f55\u50cf\u8282\u76ee","creative_field:Virtual World Design":"\u865a\u62df\u4e16\u754c\u8bbe\u8ba1","creative_field:Visual Arts":"\u89c6\u89c9\u827a\u672f","creative_field:Visual Effects":"\u89c6\u89c9\u6548\u679c","creative_field:Web Design":"\u7f51\u9875\u8bbe\u8ba1","creative_field:Web Development":"\u7f51\u7ad9\u5f00\u53d1","creative_field:Wood Working":"\u6728\u6750\u5de5\u827a","creative_field:Writing":"\u5199\u4f5c","creative_field_group:Advertising":"\u5e7f\u544a","creative_field_group:Architecture & Interiors":"\u5efa\u7b51\u4e0e\u5ba4\u5185\u8bbe\u8ba1","creative_field_group:Art Direction":"\u827a\u672f\u6307\u5bfc","creative_field_group:Craft":"\u624b\u5de5\u827a","creative_field_group:Digital Art":"\u6570\u7801\u827a\u672f","creative_field_group:Fashion & Clothing":"\u65f6\u5c1a\u548c\u670d\u9970","creative_field_group:Film":"\u80f6\u7247","creative_field_group:Fine Arts":"\u7f8e\u672f","creative_field_group:Food":"\u98df\u7269","creative_field_group:Graphic Design":"\u56fe\u5f62\u8bbe\u8ba1","creative_field_group:Illustration":"\u63d2\u56fe","creative_field_group:Motion":"\u52a8\u753b","creative_field_group:Music & Sound":"\u97f3\u4e50\u548c\u97f3\u6548","creative_field_group:Photography":"\u6444\u5f71","creative_field_group:Industrial Design":"\u5de5\u4e1a\u8bbe\u8ba1","creative_field_group:Street Art":"\u8857\u5934\u827a\u672f","creative_field_group:Performing Arts":"\u8868\u6f14\u827a\u672f","creative_field_group:Typography":"\u6392\u7248\u4e1a","creative_field_group:UX\/UI & Web Design":"\u7528\u6237\u754c\u9762\/\u7528\u6237\u4f53\u9a8c\u548c\u7f51\u9875\u8bbe\u8ba1","creative_field_group:Product & Packaging":"\u4ea7\u54c1\u548c\u5305\u88c5","curated_category:Illustration":"\u63d2\u56fe","curated_category:Graphic Design":"\u56fe\u5f62\u8bbe\u8ba1","curated_category:Fashion":"\u65f6\u5c1a","curated_category:Motion":"\u52a8\u753b","curated_category:Architecture":"\u5efa\u7b51","curated_category:Product Design":"\u4ea7\u54c1\u8bbe\u8ba1","curated_category:Photography":"\u6444\u5f71","curated_category:Interaction":"\u4ea4\u4e92","curated_category:Advertising":"\u5e7f\u544a","curated_category:Fine Arts":"\u7f8e\u672f","curated_category:Game Design":"\u6e38\u620f\u8bbe\u8ba1","curated_category:Crafts":"\u624b\u5de5\u827a","curated_category:Sound":"\u58f0\u97f3","curated_gallery:Typography":"\u6392\u7248\u4e1a","curated_gallery:Illustration":"\u63d2\u56fe","curated_gallery:Industrial Design":"\u5de5\u4e1a\u8bbe\u8ba1","curated_gallery:Motion Graphics":"\u52a8\u6001\u56fe\u50cf\u8bbe\u8ba1","curated_gallery:Web Design":"\u7f51\u9875\u8bbe\u8ba1","curated_gallery:Fashion":"\u65f6\u5c1a","curated_gallery:Character Design":"\u4eba\u7269\u8bbe\u8ba1","curated_gallery:Jewelry":"\u73e0\u5b9d","curated_gallery:Fine Arts":"\u7f8e\u672f","curated_gallery:Photography":"\u6444\u5f71","curated_gallery:Digital Art":"\u6570\u7801\u827a\u672f","curated_gallery:Advertising":"\u5e7f\u544a","curated_gallery:Street":"\u8857\u5934","curated_gallery:Furniture":"\u5bb6\u5177","curated_gallery:Sound":"\u58f0\u97f3","curated_gallery:Architecture":"\u5efa\u7b51","curated_gallery:Sketching":"\u7d20\u63cf","curated_gallery:Packaging":"\u5305\u88c5","curated_gallery:Toy Design":"\u73a9\u5177\u8bbe\u8ba1","curated_gallery:Branding":"\u54c1\u724c\u63a8\u5e7f","curated_gallery:Interior Design":"\u5ba4\u5185\u8bbe\u8ba1","curated_gallery:Editorial":"\u7f16\u8f91","curated_gallery:Apparel":"\u6210\u8863","curated_gallery:Film":"\u80f6\u7247","curated_gallery:Drawing":"\u7ed8\u56fe","curated_gallery:Infographic":"\u4fe1\u606f\u56fe\u8868","curated_gallery:Poster":"\u6d77\u62a5","curated_gallery:Makeup Arts":"\u5316\u5986\u827a\u672f","curated_gallery:Crafts":"\u624b\u5de5\u827a","curated_gallery:Comic":"\u52a8\u6f2b","curated_gallery:Automotive Design":"\u81ea\u52a8\u5316\u8bbe\u8ba1","curated_gallery:App Design":"\u5e94\u7528\u7a0b\u5e8f\u8bbe\u8ba1","curated_gallery:Game Design":"\u6e38\u620f\u8bbe\u8ba1","curated_gallery:Graphic Design":"\u56fe\u5f62\u8bbe\u8ba1","curated_gallery:T Shirt":"T \u6064","curated_gallery:Icon Design":"\u56fe\u6807\u8bbe\u8ba1","curated_gallery:Retouching":"\u4fee\u56fe","curated_gallery:Exhibition & Signage":"\u5c55\u89c8\u548c\u6807\u724c","curated_gallery:Surface Design":"\u8868\u9762\u8bbe\u8ba1","curated_gallery:Logo":"\u5fbd\u6807","curated_gallery:Set, Props & Costume":"\u5957\u88c5\u3001\u9053\u5177\u548c\u670d\u88c5","curated_gallery:Architecture Photography":"\u5efa\u7b51\u6444\u5f71","curated_gallery:Music Packaging":"\u97f3\u4e50\u5305\u88c5","curated_gallery:Architecture Visualization":"\u5efa\u7b51\u53ef\u89c6\u5316","curated_gallery:Gif":"Gif","curated_gallery:Modeling":"\u5efa\u6a21","curated_gallery:Print Design":"\u5370\u5237\u8bbe\u8ba1","curated_gallery:Styleframing":"\u98ce\u683c\u6784\u5efa","curated_gallery:Fashion Design":"\u65f6\u5c1a\u8bbe\u8ba1","curated_gallery:Photojournalism":"\u65b0\u95fb\u6444\u5f71","curated_gallery:UI\/UX":"\u7528\u6237\u754c\u9762\/\u7528\u6237\u4f53\u9a8c","month:January":"\u4e00\u6708","month:February":"\u4e8c\u6708","month:March":"\u4e09\u6708","month:April":"\u56db\u6708","month:May":"\u4e94\u6708","month:June":"\u516d\u6708","month:July":"\u4e03\u6708","month:August":"\u516b\u6708","month:September":"\u4e5d\u6708","month:October":"\u5341\u6708","month:November":"\u5341\u4e00\u6708","month:December":"\u5341\u4e8c\u6708","month:Jan":"1 \u6708","month:Feb":"2 \u6708","month:Mar":"3 \u6708","month:Apr":"4 \u6708","month:Jun":"6 \u6708","month:Jul":"7 \u6708","month:Aug":"8 \u6708","month:Sep":"9 \u6708","month:Oct":"10 \u6708","month:Nov":"11 \u6708","month:Dec":"12 \u6708","day:Monday":"\u661f\u671f\u4e00","day:Tuesday":"\u661f\u671f\u4e8c","day:Wednesday":"\u661f\u671f\u4e09","day:Thursday":"\u661f\u671f\u56db","day:Friday":"\u661f\u671f\u4e94","day:Saturday":"\u661f\u671f\u516d","day:Sunday":"\u661f\u671f\u65e5","day:Mon":"\u5468\u4e00","day:Tue":"\u5468\u4e8c","day:Wed":"\u5468\u4e09","day:Thu":"\u5468\u56db","day:Fri":"\u5468\u4e94","day:Sat":"\u5468\u516d","day:Sun":"\u5468\u65e5","error_template:%fieldname% is a required field":"%fieldname% \u4e3a\u5fc5\u586b\u5b57\u6bb5","error_template:%fieldname% must be a valid city":"%fieldname% \u5fc5\u987b\u4e3a\u6709\u6548\u7684\u57ce\u5e02","error_template:Please enter a valid URL":"\u8bf7\u8f93\u5165\u6709\u6548\u7684 URL","error_template:Please enter a valid email address":"\u8bf7\u8f93\u5165\u6709\u6548\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740","error_template:This field may not contain less than signs (&lt) or greater than signs (&gt;)":"\u6b64\u5b57\u6bb5\u4e0d\u80fd\u5305\u542b\u5c0f\u4e8e\u53f7 (&lt;) \u6216\u5927\u4e8e\u53f7 (&gt;)","error_template:This field must contain only alphanumeric characters":"\u6b64\u5b57\u6bb5\u53ea\u80fd\u5305\u542b\u5b57\u6bcd\u6570\u5b57\u5b57\u7b26","error_template:This field must contain only alpha characters":"\u6b64\u5b57\u6bb5\u53ea\u80fd\u5305\u542b\u5b57\u6bcd\u5b57\u7b26","error_template:This field must contain only alpha characters or dashes":"\u6b64\u5b57\u6bb5\u53ea\u80fd\u5305\u542b\u5b57\u6bcd\u5b57\u7b26\u6216\u7834\u6298\u53f7","error_template:This field must contain only alphanumeric characters or dashes":"\u6b64\u5b57\u6bb5\u53ea\u80fd\u5305\u542b\u5b57\u6bcd\u6570\u5b57\u5b57\u7b26\u6216\u7834\u6298\u53f7","error_template:This field must contain only alphanumeric characters with or without underscores":"\u6b64\u5b57\u6bb5\u53ea\u80fd\u5305\u542b\u5e26\/\u4e0d\u5e26\u4e0b\u5212\u7ebf\u7684\u5b57\u6bcd\u6570\u5b57\u5b57\u7b26","error_template:This field must contain only alphanumeric characters with or without underscores and spaces":"\u6b64\u5b57\u6bb5\u53ea\u80fd\u5305\u542b\u5e26\/\u4e0d\u5e26\u4e0b\u5212\u7ebf\u548c\u7a7a\u683c\u7684\u5b57\u6bcd\u6570\u5b57\u5b57\u7b26","error_template:This field must contain a valid username or email":"\u6b64\u5b57\u6bb5\u5fc5\u987b\u5305\u542b\u6709\u6548\u7684\u7528\u6237\u540d\u6216\u7535\u5b50\u90ae\u4ef6","error_template:This field must only contain numbers, without any spaces":"\u6b64\u5b57\u6bb5\u53ea\u80fd\u5305\u542b\u6570\u5b57\uff0c\u4e0d\u5f97\u5305\u542b\u4efb\u4f55\u7a7a\u683c","error_template:This field must only contain numbers, without any spaces or dashes":"\u6b64\u5b57\u6bb5\u53ea\u80fd\u5305\u542b\u6570\u5b57\uff0c\u4e0d\u5f97\u5305\u542b\u4efb\u4f55\u7a7a\u683c\u6216\u7834\u6298\u53f7","error_template:This field must be a valid decimal number":"\u6b64\u5b57\u6bb5\u5fc5\u987b\u4e3a\u6709\u6548\u7684\u5341\u8fdb\u5236\u6570","error_template:This field must be a valid date":"\u6b64\u5b57\u6bb5\u5fc5\u987b\u4e3a\u6709\u6548\u7684\u65e5\u671f","error_template:This field must be a valid datetime":"\u6b64\u5b57\u6bb5\u5fc5\u987b\u4e3a\u6709\u6548\u7684\u65e5\u671f\u65f6\u95f4","error_template:This field must be a valid email address":"\u6b64\u5b57\u6bb5\u5fc5\u987b\u4e3a\u6709\u6548\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740","error_template:This field must be a valid name":"\u6b64\u5b57\u6bb5\u5fc5\u987b\u4e3a\u6709\u6548\u7684\u540d\u79f0","error_template:This field contains invalid characters. Please use only letters (a-z, A-Z), numbers, dash or underscore characters.":"\u6b64\u5b57\u6bb5\u5305\u542b\u65e0\u6548\u7684\u5b57\u7b26\u3002\u8bf7\u4ec5\u4f7f\u7528\u5b57\u6bcd\uff08a-z\u3001A-Z\uff09\u3001\u6570\u5b57\u3001\u7834\u6298\u53f7\u6216\u4e0b\u5212\u7ebf\u5b57\u7b26\u3002","error_template:Must be between 3 and 20 characters.":"\u5fc5\u987b\u4ecb\u4e8e 3 \u5230 20 \u4e2a\u5b57\u7b26\u4e4b\u95f4\u3002","error_template:Must be between 3 and 50 characters.":"\u5fc5\u987b\u4ecb\u4e8e 3 \u5230 50 \u4e2a\u5b57\u7b26\u4e4b\u95f4\u3002","error_template:This field must be between 6 and 32 characters":"\u6b64\u5b57\u6bb5\u5fc5\u987b\u4ecb\u4e8e 6 \u5230 32 \u4e2a\u5b57\u7b26\u4e4b\u95f4","error_template:This field must be between 0 and 10000 characters":"\u6b64\u5b57\u6bb5\u5fc5\u987b\u4ecb\u4e8e 0 \u5230 10000 \u4e2a\u5b57\u7b26\u4e4b\u95f4","error_template:Field must be between 0 and 10000 characters":"\u76f8\u5173\u5b57\u6bb5\u5fc5\u987b\u4ecb\u4e8e 0 \u5230 10000 \u4e2a\u5b57\u7b26\u4e4b\u95f4","error_template:This field must be a valid address":"\u6b64\u5b57\u6bb5\u5fc5\u987b\u4e3a\u6709\u6548\u7684\u5730\u5740","error_template:This field must be a valid city":"\u6b64\u5b57\u6bb5\u5fc5\u987b\u4e3a\u6709\u6548\u7684\u57ce\u5e02","error_template:This field must be a valid province":"\u6b64\u5b57\u6bb5\u5fc5\u987b\u4e3a\u6709\u6548\u7684\u7701\u4efd","error_template:This field must be a valid zipcode":"\u6b64\u5b57\u6bb5\u5fc5\u987b\u4e3a\u6709\u6548\u7684\u90ae\u653f\u7f16\u7801","error_template:This field must be a valid US zipcode":"\u6b64\u5b57\u6bb5\u5fc5\u987b\u4e3a\u6709\u6548\u7684\u7f8e\u56fd\u90ae\u653f\u7f16\u7801","error_template:This field must be a valid country":"\u6b64\u5b57\u6bb5\u5fc5\u987b\u4e3a\u6709\u6548\u7684\u56fd\u5bb6\/\u5730\u533a","error_template:This field must be a valid phone":"\u6b64\u5b57\u6bb5\u5fc5\u987b\u4e3a\u6709\u6548\u7684\u7535\u8bdd","error_template:This field must be a valid US phone":"\u6b64\u5b57\u6bb5\u5fc5\u987b\u4e3a\u6709\u6548\u7684\u7f8e\u56fd\u7535\u8bdd","error_template:This field must be a valid image extension":"\u6b64\u5b57\u6bb5\u5fc5\u987b\u4e3a\u6709\u6548\u7684\u56fe\u50cf\u6269\u5c55\u540d","error_template:This field must be a valid video extension":"\u6b64\u5b57\u6bb5\u5fc5\u987b\u4e3a\u6709\u6548\u7684\u89c6\u9891\u6269\u5c55\u540d","error_template:This field must be a URL starting with http:\/\/ or www.":"\u6b64\u5b57\u6bb5\u5fc5\u987b\u4e3a\u4ee5 http:\/\/ \u6216 www \u5f00\u5934\u7684 URL\u3002","error_template:This field must be a valid URL":"\u6b64\u5b57\u6bb5\u5fc5\u987b\u4e3a\u6709\u6548\u7684 URL","error_template:This field must be properly formed HTML":"\u6b64\u5b57\u6bb5\u5fc5\u987b\u4e3a\u683c\u5f0f\u6b63\u786e\u7684 HTML","error_template:This field must be a valid twitter username (without the @ character)":"\u6b64\u5b57\u6bb5\u5fc5\u987b\u4e3a\u6709\u6548\u7684 Twitter \u7528\u6237\u540d\uff08\u4e0d\u5e26 @ \u5b57\u7b26\uff09","error_template:This field is required":"\u6b64\u5b57\u6bb5\u4e3a\u5fc5\u586b\u5b57\u6bb5","error_template:Award is a required field":"\u5956\u52b1\u4e3a\u5fc5\u586b\u5b57\u6bb5","error_template:%fieldname% must contain only alphanumeric characters with or without underscores":"%fieldname% \u53ea\u80fd\u5305\u542b\u5e26\/\u4e0d\u5e26\u4e0b\u5212\u7ebf\u7684\u5b57\u6bcd\u6570\u5b57\u5b57\u7b26","error_template:%fieldname% must contain only alphanumeric characters with or without underscores and spaces":"%fieldname% \u53ea\u80fd\u5305\u542b\u5e26\/\u4e0d\u5e26\u4e0b\u5212\u7ebf\u548c\u7a7a\u683c\u7684\u5b57\u6bcd\u6570\u5b57\u5b57\u7b26","error_template:%fieldname% must contain only alphanumeric characters":"%fieldname% \u53ea\u80fd\u5305\u542b\u5b57\u6bcd\u6570\u5b57\u5b57\u7b26","error_template:%fieldname% must be a valid decimal number":"%fieldname% \u5fc5\u987b\u4e3a\u6709\u6548\u7684\u5341\u8fdb\u5236\u6570","error_template:%fieldname% must be a valid email address":"%fieldname% \u5fc5\u987b\u4e3a\u6709\u6548\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740","error_template:%fieldname% must be an array or empty string":"%fieldname% \u5fc5\u987b\u662f\u4e00\u4e2a\u6570\u7ec4\u6216\u7a7a\u5b57\u7b26\u4e32","error_template:%fieldname% may not contain less than signs (&lt;) or greater than signs (&gt;)":"%fieldname% \u4e0d\u80fd\u5305\u542b\u5c0f\u4e8e\u53f7 (&lt;) \u6216\u5927\u4e8e\u53f7 (&gt;)","error_template:%fieldname% must be properly formed HTML":"%fieldname% \u5fc5\u987b\u4e3a\u683c\u5f0f\u6b63\u786e\u7684 HTML","error_template:%fieldname% must be a valid integer greater than 0":"%fieldname% \u5fc5\u987b\u4e3a\u5927\u4e8e 0 \u7684\u6709\u6548\u6574\u6570","error_template:%fieldname% failed validation":"%fieldname% \u9a8c\u8bc1\u5931\u8d25","error_template:%fieldname% must be a HEX color without #":"%fieldname% \u5fc5\u987b\u4e3a\u4e0d\u542b # \u7684\u5341\u516d\u8fdb\u5236\u989c\u8272\u7801","error_template:%fieldname% must match %otherfield%":"%fieldname% \u5fc5\u987b\u4e0e %otherfield% \u5339\u914d","error_template:%fieldname% must be %length% characters or less":"%fieldname% \u5fc5\u987b\u5305\u542b %length% \u4e2a\u6216\u66f4\u5c11\u5b57\u7b26","error_template:%fieldname% must be %length% characters or more":"%fieldname% \u5fc5\u987b\u5305\u542b %length% \u4e2a\u6216\u66f4\u591a\u5b57\u7b26","error_template:%fieldname% is not a null value":"%fieldname% \u4e0d\u662f\u7a7a\u503c","error_template:%fieldname% must be a valid phone number":"%fieldname% \u5fc5\u987b\u4e3a\u6709\u6548\u7684\u624b\u673a\u53f7\u7801","error_template:This URL already exists":"\u6b64 URL \u5df2\u5b58\u5728","error_template:This email is disallowed":"\u6b64\u7535\u5b50\u90ae\u4ef6\u88ab\u7981\u6b62","error_template:This username is disallowed, please try another":"\u6b64\u7528\u6237\u540d\u88ab\u7981\u6b62\uff0c\u8bf7\u5c1d\u8bd5\u5176\u4ed6\u7528\u6237\u540d","error_template:\"Behance\" cannot be used in a team name. Please try again.":"\u4e0d\u5f97\u5728\u56e2\u961f\u540d\u79f0\u4e2d\u4f7f\u7528\u201cBehance\u201d\uff0c\u8bf7\u518d\u6b21\u5c1d\u8bd5\u3002","error_template:Language":"\u8bed\u8a00","error_template:Award":"\u5956\u54c1","error_template:Organization":"\u5355\u4f4d","error_template:School":"\u5b66\u6821"},"LOCALE":"zh_CN","IS_ENABLED":true}}</script>
<script crossorigin="" type="text/javascript" src="./style/js/network.js"></script>
<script crossorigin="" type="text/javascript" src="./style/js/galleries.js"></script>
<script type="text/javascript" nonce="">if (typeof _satellite !== "undefined" && _satellite.pageBottom) { _satellite.pageBottom(); }</script>  --><!--[if lte IE 9]>
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
          <a href="#" class="browser-link-container">
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

  <!-- <script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","licenseKey":"e7fb1b89a0","applicationID":"27472197","transactionName":"ZwZaYkJVDERXUxULCV5Me0NDQA1aGWsmJzJtQ39XXFgHRV9VElhcWQ1cU0g=","queueTime":0,"applicationTime":665,"atts":"S0FZFApPH0o=","errorBeacon":"bam.nr-data.net","agent":""}</script> -->


<iframe id="destination_publishing_iframe_adobe_0" src="./style/img/dest5.html" class="aamIframeLoaded" style="display: none; width: 0px; height: 0px;"></iframe><div class="popup desktop project-view js-project-popup no-buttons no-title shown">
  <div class="popup-inner-wrap">


    <div class="popup-content">
        <div id="project-wrap" class="js-project-wrap v-5">
      
            <div id="project-sidebar" class="show-on-preview unclickable-mask js-project-sidebar-wrap">
      
        <div class="js-project-sidebar sticky-project-sidebar">
     
<form  action="Dianzan"> 
          <div class="sidebar-group js-sidebar-group" style="width: 279px; position: fixed; top: 0px;">
      
              <div id="" class="project-block project-block--owner">
<div class="project-owner-info single-owner-info project-owner-info--header">
      <div class="profile-list">
        <a class="normal-link profile-list-image-wrap js-mini-profile" href="https://www.behance.net/nickfrank" data-id="1185777">
        <img class="profile-list-image" src="./style/img/1185777.53b35fea8109b.jpg">
        
        </a>
        <div class="profile-list-info profile-list-info-row">
          <div class="profile-list-name">
            <a class="normal-link js-mini-profile" data-id="1185777" href="#" >
            
              <%
              String id8 = null;
              id8 = session.getAttribute("work_id").toString();
             // List<ei_user> list = new ArrayList<ei_user>();
              String sql="select Username from ei_user where ID in ( select ID from ei_ideas  where ID= '"+id8+"')";
	             ResultSet rs = DBconnection.executeQuery(sql);
	                %>
        <%  
			while (rs.next()) {
		%>
		   
           <%=rs.getString("Username")%>
      <%
			}
          DBconnection.close();
		
		%> 
            
            </a></div><!-- /.profile-list-name -->
            <div class="profile-location">
              <a class="profile-list-location-link beicons-pre beicons-pre-location" href="https://www.behance.net/search?content=users&amp;sort=appreciations&amp;country=DE&amp;city=Munich">Munich, Germany</a>
            </div><!-- /.profile-location -->
        </div><!-- /.profile-list-info -->
      </div><!-- /.profile-list -->

        <div class="project-owner-actions ">
          <div class="hide-phone js-hide-phone">
        <div class="user-follow js-action-follow follow-button-container" data-followee="1185777" data-entity="user">
 <!--  <a class="form-button js-form-button-follow form-button-follow form-button-small form-button-default">关注</a> -->
  <a class="form-button form-button-following form-button-small form-button-light-and-grey">正在关注</a>
  <a class="form-button js-form-button-unfollow form-button-unfollow form-button-small form-button-red">取消关注&nbsp;</a>
</div>
<div title="向用户发送消息" class="project-action user-message js-action-message-user" data-contact_name="Nick Frank" data-contact_id="1185777">
  <a class="form-button form-button-light-and-grey beicons-pre beicons-pre-mail">信息</a>
</div>          </div>
          <div class="show-phone">
              <div class="user-follow js-action-follow follow-button-container" data-followee="1185777" data-entity="user">
  <!-- <a class="form-button js-form-button-follow form-button-follow form-button-small form-button-default">关注</a> -->
  <a class="form-button form-button-following form-button-small form-button-light-and-grey">正在关注</a>
  <a class="form-button js-form-button-unfollow form-button-unfollow form-button-small form-button-red">取消关注&nbsp;</a>
</div>
              <div class="profile-action user-message">
<a title="向用户发送消息" class="form-button-light-and-grey form-button form-button-small js-action-message-user beicons-pre beicons-pre-mail" data-contact_name="Nick Frank" data-contact_id="1185777" unselectable="on"></a>
              </div>
          </div>
        </div>


</div>
</div>
        <div id="" class="project-block project-block--info">
    <div class="project-title">
    
		  <% 
		  String id7 = null;
          id7 = session.getAttribute("work_id").toString();
		 // String id7 = request.getParameter("id");
		  List<ei_ideas> list3 = new ArrayList<ei_ideas>();
	        String sql3="select * from ei_ideas where ID= "+id7;
		    ResultSet rs3 = DBconnection.executeQuery(sql3);
		%>
	  <%  
				while (rs3.next()) {
			%>
    
		   
           <%=rs3.getString("Ideas_name")%>
  <%
			}
          DBconnection.close();
		
		%> 
    </div>

    <div class="project-fields js-project-fields">
      <ul id="project-fields-list">
        <li class="project-fields-field"><a href="#">
        
         <%  
         String id6 = null;
         id6 = session.getAttribute("work_id").toString();
        // String id6 = request.getParameter("id");
         List<ei_ideas> list4 = new ArrayList<ei_ideas>();
	        String sql4="select Name from ei_idea_area where ID in ( select ID from ei_ideas  where ID="+id6+")";
		    ResultSet rs4 = DBconnection.executeQuery(sql4);
		%>
	  <%  
				while (rs4.next()) {
			%>
    
		   
           <%=rs4.getString("Name")%>
  <%
			}
          DBconnection.close();
		
		%> 
        </a></li>
      </ul>
    </div>

    <div id="project-stats">
<div class="project-stat beicons-pre beicons-pre-eye "><!--浏览量  -->
  
   <%       
           String id5 = null;
           id5 = session.getAttribute("work_id").toString();
            //String id5 = request.getParameter("id");
            List<ei_ideas> list5 = new ArrayList<ei_ideas>();
	       String sql5="select view_times from ei_ideas  where ID= "+id5;
	    
	        
		    ResultSet rs5 = DBconnection.executeQuery(sql5);
		%>
	  <%  
				while (rs5.next()) {
			%>
    
		   
           <%=rs5.getString("view_times")%>
          <%--   <input type="text" style="border:0px;" 
           value=" <%=rs5.getString("view_times")%>" readonly name="Thumbers_up_count" />
            --%>
  <%
			}
          DBconnection.close();
		
		%> 
</div>
<br><br>
<div class="project-stat beicons-pre beicons-pre-thumb js-stats-appreciations"><!--点赞量  -->
  
   <%         
   String id4 = null;
   id4 = session.getAttribute("work_id").toString();
   //String id4 = request.getParameter("id");
   List<ei_ideas> list6 = new ArrayList<ei_ideas>();
   String sql6="select Thumbs_up_count from ei_ideas  where ID= "+id4;
   ResultSet rs6 = DBconnection.executeQuery(sql6);
		%>
	  <%  
				while (rs6.next()) {
			%>
    
		  <%--  <%=rs6.getString("Thumbs_up_count")%> --%>
     
           <input type="text" style="border:0px;" 
           value=" <%=rs6.getString("Thumbs_up_count")%>" readonly name="Thumbers_up_count" />
  <%
			}
          DBconnection.close();
		
		%> 
</div>
<br><br>
<div class="project-stat beicons-pre beicons-pre-comment "><!-- 评论量 -->
  
  <% 
  String id3 = null;
  id3 = session.getAttribute("work_id").toString();
 // String id3 = request.getParameter("id");
  List<ei_ideas> list7 = new ArrayList<ei_ideas>();
  String sql7="select ass_count from ei_ideas  where ID= "+id3;
  ResultSet rs7 = DBconnection.executeQuery(sql7);
		%>
	  <%  
				while (rs7.next()) {
			%>
    
		   
           <%=rs7.getString("ass_count")%>
  <%
			}
          DBconnection.close();
		
		%> 
</div>
    </div>

    <div class="project-published">
      已发布: <span class="js-format-timestamp" data-timestamp="1476104707">
      
      <%
      String id2 = null;
      id2 = session.getAttribute("work_id").toString();
     // String id2 = request.getParameter("id");
      List<ei_ideas> list8 = new ArrayList<ei_ideas>();
      String sql8="select publish_time from ei_ideas  where ID= "+id2;
	    ResultSet rs8 = DBconnection.executeQuery(sql8);
		%>
	  <%  
				while (rs8.next()) {
			%>
    
		   
           <%=rs8.getString("publish_time")%>
  <%
			}
          DBconnection.close();
		
		%> 
      </span>
    </div>
</div>
        <div id="" class="project-block project-block--featured">
      <div class="featured">
          <div class="featured__ribbon tooltipi-container">
            <a href="https://www.behance.net/galleries/7/Photography">
              <picture>
                <source srcset="https://a3.behance.net/img/galleries/icons/ribbons/2x/7@2x.png?cb=1020668724" media="(-webkit-min-device-pixel-ratio: 1.3), (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 4/3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx)">
                <img src="./style/img/7.png">
              </picture>
            </a>
            <div class="tooltipi tooltipi-white">
              <div class="project-block-header">特别推荐项目:</div>
              <div><strong>摄影</strong> — <span class="js-format-date" data-date="10/22/2016">2016-10-22</span></div>
            </div>
          </div>
      </div>
</div>

    <div id="" class="project-block project-block--buttons">
    <div class="appreciation-button js-appreciate" data-render-pulse-point="true">
    
    <div class="form-item form-item-a form-item-appreciate">

    <button type="submit" onclick="loadXMLDoc()" class="form-button thumb form-button-default form-button-large" unselectable="on" tabindex="0">
    <span class="beicons-pre beicons-pre-thumb"></span>欣赏项目</button>
  
    </div>
    <div class="form-item form-item-a form-item-thanks">
    <a class="form-button text form-button-dark form-button-large" unselectable="on" tabindex="0"><span class=""></span>感谢!</a>
    </div>
      <div class="js-appreciation-date project-appreciation-date beicons-pre beicons-pre-thumb"></div>
    </div>
</div>

    </div>
</form>
            <div class="js-social-sharing-sticky social-sharing__sticky" style="position: fixed; bottom: 0px;">
      <div class="social-sharing__icons js-social-sharing" data-text="查看此 @Behance 项目:“Canon G7 X II Promo”https://www.behance.net/gallery/43747087/Canon-G7-X-II-Promo" data-image="https://mir-s3-cdn-cf.behance.net/projects/original/a29af243747087.Y3JvcCw3NjgsNjAxLDY2LDA.jpeg" data-url="https://www.behance.net/gallery/43747087/Canon-G7-X-II-Promo" data-from="sidebar">
  <div class="js-viral-share-buttons social-sharing__icon social-sharing__icon--facebook" data-service="facebook"><svg class="icon-social" version="1.1" xmlns="#" xmlns:xlink="#" viewBox="0 0 20 20" xml:space="preserve">
  <path class="circle" d="M20,10c0,5.5-4.5,10-10,10S0,15.5,0,10S4.5,0,10,0S20,4.5,20,10z"></path>
  <path class="icon" d="M10.8,6.5c0-0.7,0.2-1.2,1-1.2h1.3L13.3,3c0,0-0.7-0.2-1.8-0.2C9,2.8,8,4.3,8,6c0,1.2,0,2.3,0,2.3H6.3v2.5H8
    V17h2.8v-6.2h2.3l0.2-2.5h-2.5V6.5z"></path>
</svg>
</div>
  <div class="js-viral-share-buttons social-sharing__icon social-sharing__icon--twitter" data-service="twitter"><svg class="icon-social" version="1.1" xmlns="#" xmlns:xlink="#" viewBox="0 0 20 20" xml:space="preserve">
  <path class="circle" d="M20,10c0,5.5-4.5,10-10,10S0,15.5,0,10S4.5,0,10,0S20,4.5,20,10z"></path>
  <path class="icon" d="M17.5,6.3c-0.5,0.2-1,0.3-1.7,0.5c0.7-0.3,1-0.8,1.2-1.5c-0.5,0.3-1.2,0.5-1.8,0.7c-0.5-0.5-1.2-0.8-2-0.8
    c-1.5,0-2.8,1.3-2.8,2.8c0,0.2,0,0.5,0,0.7C8,8.5,5.8,7.3,4.5,5.7c-0.2,0.5-0.3,1-0.3,1.5c0,1,0.5,1.8,1.3,2.3
    C5,9.5,4.7,9.3,4.2,9.2l0,0c0,1.3,1,2.5,2.3,2.8c-0.2,0-0.5,0.2-0.7,0.2s-0.3,0-0.5,0c0.3,1.2,1.3,1.8,2.7,2c-1,0.8-2.2,1.3-3.5,1.3
    c-0.2,0-0.5,0-0.7,0c1.3,0.8,2.8,1.2,4.3,1.2c5.2,0,8-4.3,8-8c0-0.2,0-0.3,0-0.3C16.7,7.5,17.2,7,17.5,6.3z"></path>
</svg>
</div>
  <div class="js-viral-share-buttons social-sharing__icon social-sharing__icon--pinterest" data-service="pinterest"><svg class="icon-social" version="1.1" xmlns="#" xmlns:xlink="#" viewBox="0 0 20 20" xml:space="preserve">
  <path class="circle" d="M20,10c0,5.5-4.5,10-10,10S0,15.5,0,10S4.5,0,10,0S20,4.5,20,10z"></path>
	<path class="icon" d="M7.4,19.7c0,0,0.8-1.2,0.9-2C8.5,17.2,9,14.8,9,14.8c0.3,0.7,1.3,1.2,2.5,1.2c3.2,0,5.3-3,5.3-6.8
		c0-3-2.5-5.7-6.3-5.7c-4.8,0-7.2,3.3-7.2,6.2c0,1.7,0.7,3.3,2,3.8c0.2,0.2,0.5,0,0.5-0.3C5.8,13,6,12.5,6,12.3C6,12,6,12,5.8,11.8
		c-0.3-0.5-0.7-1.2-0.7-2C5.2,7.3,7,5,10.2,5c2.7,0,4.2,1.7,4.2,3.8c0,2.8-1.3,5.3-3.2,5.3c-1,0-1.8-0.8-1.5-2
		c0.3-1.3,0.8-2.7,0.8-3.5S10,7.2,9.2,7.2c-1,0-2,1.2-2,2.7c0,1,0.3,1.5,0.3,1.5S6.3,16,6.2,16.8C6,17.5,6,18.5,6,19.2
		c0,0,0.5,0.2,0.7,0.3c0.1,0,0.3,0.1,0.4,0.1C7.3,19.6,7.4,19.7,7.4,19.7z"></path>
</svg>
</div>
  <div class="js-viral-share-buttons social-sharing__icon social-sharing__icon--linkedin" data-service="linkedin"><svg class="icon-social" version="1.1" xmlns="#" xmlns:xlink="#" viewBox="0 0 20 20" xml:space="preserve">
  <path class="circle" d="M20,10c0,5.5-4.5,10-10,10S0,15.5,0,10S4.5,0,10,0S20,4.5,20,10z"></path>
  <path class="icon" d="M7.5,5.2c0-0.8-0.7-1.5-1.7-1.5S4.2,4.3,4.2,5.2s0.7,1.5,1.7,1.5l0,0C6.8,6.7,7.5,6,7.5,5.2z"></path>
  <rect class="icon" x="4.7" y="8" width="2.5" height="7"></rect>
  <path class="icon" d="M16.2,11.2c0-2.3-1.2-3.7-2.8-3.7c-1,0-1.8,0.7-2,1.5l-0.2-1H8.7c0,0.3,0,1.7,0,1.7V15h2.5v-3.8
    c0-1,0.5-1.7,1.2-1.7c0.8,0,1.3,0.3,1.3,1.7v3.7h2.5V11.2z"></path>
</svg>
</div>
</div>
      </div>
      
      
        </div>
      </div>

            <div id="project" class="js-project breakpoint-comments" data-id="43747087" data-mature_content="0" data-mature_access="allowed" data-allow_comments="1" data-appreciations="326" style="max-width: 1100px;">
          <div id="mobile-header">

      <div class="project-data">
        <div id="" class="project-block project-block--owner">
<div class="project-owner-info single-owner-info project-owner-info--header">
      <div class="profile-list">
        <a class="normal-link profile-list-image-wrap js-mini-profile" href="https://www.behance.net/nickfrank" data-id="1185777"><img class="profile-list-image" src="./style/img/1185777.53b35fea8109b.jpg"></a>
        <div class="profile-list-info profile-list-info-row">
          <div class="profile-list-name"><a class="normal-link js-mini-profile" data-id="1185777" href="https://www.behance.net/nickfrank">Nick Frank</a></div><!-- /.profile-list-name -->
            <div class="profile-location">
              <a class="profile-list-location-link beicons-pre beicons-pre-location" href="https://www.behance.net/search?content=users&amp;sort=appreciations&amp;country=DE&amp;city=Munich">Munich, Germany</a>
            </div><!-- /.profile-location -->
        </div><!-- /.profile-list-info -->
      </div><!-- /.profile-list -->

        <div class="project-owner-actions ">
          <div class="hide-phone js-hide-phone">
        <div class="user-follow js-action-follow follow-button-container" data-followee="1185777" data-entity="user">
  <!-- <a class="form-button js-form-button-follow form-button-follow form-button-small form-button-default">关注</a> -->
  <a class="form-button form-button-following form-button-small form-button-light-and-grey">正在关注</a>
  <a class="form-button js-form-button-unfollow form-button-unfollow form-button-small form-button-red">取消关注&nbsp;</a>
</div>
<div title="向用户发送消息" class="project-action user-message js-action-message-user" data-contact_name="Nick Frank" data-contact_id="1185777">
  <a class="form-button form-button-light-and-grey beicons-pre beicons-pre-mail">信息</a>
</div>          </div>
          <div class="show-phone">
              <div class="user-follow js-action-follow follow-button-container" data-followee="1185777" data-entity="user">
 <!--  <a class="form-button js-form-button-follow form-button-follow form-button-small form-button-default">关注</a> -->
  <a class="form-button form-button-following form-button-small form-button-light-and-grey">正在关注</a>
  <a class="form-button js-form-button-unfollow form-button-unfollow form-button-small form-button-red">取消关注&nbsp;</a>
</div>
              <div class="profile-action user-message">
<a title="向用户发送消息" class="form-button-light-and-grey form-button form-button-small js-action-message-user beicons-pre beicons-pre-mail" data-contact_name="Nick Frank" data-contact_id="1185777" unselectable="on"></a>
              </div>
          </div>
        </div>


</div>
</div>

        <div class="project-data__highlights features-1">
          <div id="" class="project-block project-block--info">
    <div class="project-title">Canon G7 X II Promo</div>

    <div class="project-fields js-project-fields">
      <ul id="project-fields-list">
        <li class="project-fields-field"><a href="https://www.behance.net/search?field=73">摄影</a></li>
      </ul>
    </div>

    <div id="project-stats">
<div class="project-stat beicons-pre beicons-pre-eye ">
  1666
</div>

<div class="project-stat beicons-pre beicons-pre-thumb js-stats-appreciations">
  326
</div>

<div class="project-stat beicons-pre beicons-pre-comment ">
  31
</div>
    </div>

    <div class="project-published">
      已发布: <span class="js-format-timestamp" data-timestamp="1476104707">2016年10月10日</span>
    </div>
</div>
      <div id="" class="project-block project-block--featured">
      <div class="featured">
          <div class="featured__ribbon tooltipi-container">
            <a href="https://www.behance.net/galleries/7/Photography">
              <picture>
                <source srcset="https://a3.behance.net/img/galleries/icons/ribbons/2x/7@2x.png?cb=1020668724" media="(-webkit-min-device-pixel-ratio: 1.3), (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 4/3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx)">
                <img src="./style/img/7.png">
              </picture>
            </a>
            <div class="tooltipi tooltipi-white">
              <div class="project-block-header">特别推荐项目:</div>
              <div><strong>摄影</strong> — <span class="js-format-date" data-date="10/22/2016">2016-10-22</span></div>
            </div>
          </div>
      </div>
</div>
    </div>
      </div>

      <ul class="mobile-header__actions">
        <li class="mobile-header__action beicons-pre beicons-pre-add-projects js-action-collection" data-id="43747087">
          添加到作品集
        </li>

    
        <li class="mobile-header__action mobile-header__action--about beicons-pre tooltipi-container">
          关于
          <div class="tooltipi tooltipi-white">
            <h3 class="project-block-header">关于</h3>
            Promo for Canon's G 7X II. Filmed and photographed July 2016.
        <div class="project-published">已发布: <span class="js-format-timestamp" data-timestamp="1476104707">2016年10月10日</span></div>
      </div>
        </li>
      </ul>
    </div>
  <div id="primary-project-content" class="project-styles">
          <div id="project-canvas" class="project-styles">
      <div id="project-modules">
      <div id="project-spacer">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABXgAAAABCAYAAABkHsaZAAAAH0lEQVRYw+3DAQkAAAwEoe9f+pZjoOCqqaqqqqr67wH2oViJHh1OqwAAAABJRU5ErkJggg==">
  </div>
      <div class="project-module module project-module-text text align-center">
        <div class="main-text">
          <div style="text-align:center;">All Images (aside from the ones showing me) shot for Canon Europe<br>on a Canon G7 XII, without tripod and without flashes.</div>
        </div>
      </div>
      
    
    
    
        <div class="spacer">
          <div class="divider"></div>
        </div>
    
          <div class="js-project-module-image-hd project-module module image project-module-image" data-hd-src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/428d5443747087.57fb91069969f.jpg">
        <div class="js-project-lightbox-link project-module-image-inner-wrap lightbox-link">
         <!--  <script type="text/html" class="js-lightbox-slide-content">
    <picture>
  <source srcset="https://mir-s3-cdn-cf.behance.net/project_modules/disp/428d5443747087.57fb91069969f.jpg" media="(max-width: 633px)">
  <source srcset="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/428d5443747087.57fb91069969f.jpg" media="(min-width: 634px) and (max-width: 1233px)">
  <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/428d5443747087.57fb91069969f.jpg">
</picture>  <div class="lightbox-caption lightbox-extra js-lightbox-caption">
        <div class="profile-list">
        <a class="normal-link profile-list-image-wrap js-mini-profile" href="https://www.behance.net/nickfrank" data-id="1185777"><img class="profile-list-image" src="https://mir-s3-cdn-cf.behance.net/user/115/1185777.53b35fea8109b.jpg" /></a>
        <div class="profile-list-info profile-list-info-row">
          <div class="profile-list-name"><a class="normal-link js-mini-profile" data-id="1185777" href="https://www.behance.net/nickfrank">Nick Frank</a></div>
          <div class="project-name">Canon G7 X II Promo</div>
        </div>
      </div>
</div>
</script> -->
<picture>
  <source srcset="https://mir-s3-cdn-cf.behance.net/project_modules/disp/428d5443747087.57fb91069969f.jpg" media="(max-width: 633px)">
  <source srcset="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/428d5443747087.57fb91069969f.jpg" media="(min-width: 634px) and (max-width: 1233px)">
  <img src="./style/img/428d5443747087.57fb91069969f.jpg">
</picture>  </div>
      </div>

    
    
       
    <div class="spacer">
          <div class="divider"></div>
        </div>
    
          <div class="js-project-module-image-hd project-module module image project-module-image" data-hd-src="#">
        <div class="js-project-lightbox-link project-module-image-inner-wrap lightbox-link">
         <!--<script type="text/html" class="js-lightbox-slide-content">
    <picture>
  <source srcset="#" media="(max-width: 633px)">
  <source srcset="#" media="(min-width: 634px) and (max-width: 1233px)">
  <img src="#">
</picture>  <div class="lightbox-caption lightbox-extra js-lightbox-caption">
        <div class="profile-list">
        <a class="normal-link profile-list-image-wrap js-mini-profile" href="https://www.behance.net/nickfrank" data-id="1185777"><img class="profile-list-image" src="https://mir-s3-cdn-cf.behance.net/user/115/1185777.53b35fea8109b.jpg" /></a>
        <div class="profile-list-info profile-list-info-row">
          <div class="profile-list-name"><a class="normal-link js-mini-profile" data-id="1185777" href="https://www.behance.net/nickfrank">Nick Frank</a></div>
          <div class="project-name">Canon G7 X II Promo</div>
        </div>
      </div>
</div>
</script>  --> 
<picture>
  <source srcset="#" media="(max-width: 633px)">
  <source srcset="#" media="(min-width: 634px) and (max-width: 1233px)">
  
<!--   <img src="./style/img/1ef30643747087.57fb910699da4.jpg"> -->
  <!-- 获取图片路径 -->
   <img src="<%
		   String id = null;
           id = session.getAttribute("work_id").toString();
	 //String id = request.getParameter("id");
     List<ei_ideas> list2 = new ArrayList<ei_ideas>();
     String sql2="select * from ei_ideas where ID="+id;
     ResultSet rs2 = DBconnection.executeQuery(sql2);
     ActionContext ac=ActionContext.getContext();
     ac.getSession().put("id", id);
		%>
	  <%  
				while (rs2.next()) {
			%>
			   
	          
	         <%=rs2.getString("Work_uri")%>
	  <%
				}
	          DBconnection.close();
			
			%>"> 
  
</picture>  </div>
      </div>

    
    
        <div class="spacer">
          <div class="divider"></div>
        </div>
    
         

    
    
        <div class="spacer">
          <div class="divider"></div>
        </div>
          <div class="project-module module project-module-text text align-center">
        <div class="main-text">
          <div style="text-align:center;">Find me on Instagram:</div><div style="text-align:center;"><a href="https://www.instagram.com/iso72nickfrank/" target="_blank">https://www.instagram.com/iso72nickfrank/</a><br></div>
        </div>
      </div>
      
    
    
    
        <div class="spacer">
          <div class="divider"></div>
        </div>
      <script type="text/html" class="js-lightbox-overlay-slide">
    <div class="lightbox-overlay-slide">
      <div class="js-last-slide last-slide"></div>
        <div class="other-projects">
          <div class="owners">
            <span class="owners__by">Other projects by</span>
            <div class="owners__name tooltipi-container">
              <a class="owners-link js-mini-profile" data-id="1185777" href="https://www.behance.net/nickfrank">Nick Frank</a>
            </div>
          </div>

          <div class="project-covers">
  <div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="29339619">
  <div class="cover-img">
    <a href="https://www.behance.net/gallery/29339619/Temptations" class="cover-img-link">
      <picture class="cover-img-el">
        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/e7289c29339619.55eea2a25aa1e.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/e7289c29339619.55eea2a25aa1e.jpg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
           (min--moz-device-pixel-ratio: 1.3),
           (-o-min-device-pixel-ratio: 4/3),
           (min-device-pixel-ratio: 1.3),
           (min-resolution: 1.3dppx)">
        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/e7289c29339619.55eea2a25aa1e.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/e7289c29339619.55eea2a25aa1e.jpg 2x" alt="Temptations">
      </picture>
    <noscript><img alt="Temptations" title="Temptations" src="https://mir-s3-cdn-cf.behance.net/projects/202/e7289c29339619.55eea2a25aa1e.jpg" class="cover-img-el" /></noscript>
    </a>
  </div>



  <div class="cover-info-stats">

    <div class="cover-info">

      <div class="cover-name">
        <a href="https://www.behance.net/gallery/29339619/Temptations" class="projectName cover-name-link">Temptations</a>
      </div>

      <div class="cover-by-wrap">
        <div class="cover-by-link multiple-cover-by">
          <span class="cover-by">作者</span>
          <span class="multiple-owners-list tooltipi-container">
            多个所有者<ul class="tooltipi tooltipi-white-links">
              <li class="clear">
                <a class="multiple-owner-link" href="https://www.behance.net/nickfrank">

                    <span class="multiple-owner-image-container"><img class="multiple-owner-image js-mini-profile" data-id="1185777" src="https://mir-s3-cdn-cf.behance.net/user/50/1185777.53b35fea8109b.jpg"/></span><span class="js-mini-profile" data-id="1185777">Nick Frank</span>
                </a>

              </li>
              <li class="clear">
                <a class="multiple-owner-link" href="https://www.behance.net/jeanettehagglund1">

                    <span class="multiple-owner-image-container"><img class="multiple-owner-image js-mini-profile" data-id="6465199" src="https://mir-s3-cdn-cf.behance.net/user/50/745d846465199.55eee36247250.jpg"/></span><span class="js-mini-profile" data-id="6465199">Jeanette Hägglund</span>
                </a>

              </li>
          </ul>
          </span>
        </div>
      </div>

    </div>

    <div class="cover-stat-fields-wrap">

      <div class="cover-stat-wrap">

        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1441702336">2378</span>
        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">23184</span>

          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">

            <div class="tooltipi">
              推荐日期: <strong class="js-format-date" data-date="9/12/2015">9/12/2015</strong>
            </div>

          </div> <!-- .featured -->

      </div><!-- .cover-stat-wrap -->

      <div class="cover-fields">
          <a href="/search?field=4" title="建筑" class="field-link">建筑</a>, 
          <a href="/search?field=73" title="摄影" class="field-link">摄影</a>, 
          <a href="/search?field=70" title="表演艺术" class="field-link">表演艺术</a>
      </div><!-- .cover-fields -->

    </div><!-- .cover-info -->

  </div><!-- #cover-stat-fields-wrap -->

</div>
<div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="17736641">
  <div class="cover-img">
    <a href="https://www.behance.net/gallery/17736641/Farbraum" class="cover-img-link">
      <picture class="cover-img-el">
        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/17736641.548ce49b16c5c.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/17736641.548ce49b16c5c.jpg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
           (min--moz-device-pixel-ratio: 1.3),
           (-o-min-device-pixel-ratio: 4/3),
           (min-device-pixel-ratio: 1.3),
           (min-resolution: 1.3dppx)">
        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/17736641.548ce49b16c5c.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/17736641.548ce49b16c5c.jpg 2x" alt="Farbraum">
      </picture>
    <noscript><img alt="Farbraum" title="Farbraum" src="https://mir-s3-cdn-cf.behance.net/projects/202/17736641.548ce49b16c5c.jpg" class="cover-img-el" /></noscript>
    </a>
  </div>



  <div class="cover-info-stats">

    <div class="cover-info">

      <div class="cover-name">
        <a href="https://www.behance.net/gallery/17736641/Farbraum" class="projectName cover-name-link">Farbraum</a>
      </div>

      <div class="cover-by-wrap">
        <div class="cover-by-link text-ellipsis ">
          <span class="cover-by">作者</span>
              
                <a class="single-owner-link" href="https://www.behance.net/nickfrank">

<span class="js-mini-profile" data-id="1185777">Nick Frank</span>
                </a>

              
        </div>
      </div>

    </div>

    <div class="cover-stat-fields-wrap">

      <div class="cover-stat-wrap">

        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1403090130">4074</span>
        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">34133</span>

          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">

            <div class="tooltipi">
              推荐日期: <strong class="js-format-date" data-date="4/8/2015">4/8/2015</strong>
            </div>

          </div> <!-- .featured -->

      </div><!-- .cover-stat-wrap -->

      <div class="cover-fields">
          <a href="/search?field=73" title="摄影" class="field-link">摄影</a>, 
          <a href="/search?field=136" title="修图" class="field-link">修图</a>
      </div><!-- .cover-fields -->

    </div><!-- .cover-info -->

  </div><!-- #cover-stat-fields-wrap -->

</div>
<div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="31288623">
  <div class="cover-img">
    <a href="https://www.behance.net/gallery/31288623/Mono-Madness-III" class="cover-img-link">
      <picture class="cover-img-el">
        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/2dade731288623.Y3JvcCw4MDAsNjI1LDAsNTY.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/2dade731288623.Y3JvcCw4MDAsNjI1LDAsNTY.jpg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
           (min--moz-device-pixel-ratio: 1.3),
           (-o-min-device-pixel-ratio: 4/3),
           (min-device-pixel-ratio: 1.3),
           (min-resolution: 1.3dppx)">
        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/2dade731288623.Y3JvcCw4MDAsNjI1LDAsNTY.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/2dade731288623.Y3JvcCw4MDAsNjI1LDAsNTY.jpg 2x" alt="Mono Madness III">
      </picture>
    <noscript><img alt="Mono Madness III" title="Mono Madness III" src="https://mir-s3-cdn-cf.behance.net/projects/202/2dade731288623.Y3JvcCw4MDAsNjI1LDAsNTY.jpg" class="cover-img-el" /></noscript>
    </a>
  </div>



  <div class="cover-info-stats">

    <div class="cover-info">

      <div class="cover-name">
        <a href="https://www.behance.net/gallery/31288623/Mono-Madness-III" class="projectName cover-name-link">Mono Madness III</a>
      </div>

      <div class="cover-by-wrap">
        <div class="cover-by-link text-ellipsis ">
          <span class="cover-by">作者</span>
              
                <a class="single-owner-link" href="https://www.behance.net/nickfrank">

<span class="js-mini-profile" data-id="1185777">Nick Frank</span>
                </a>

              
        </div>
      </div>

    </div>

    <div class="cover-stat-fields-wrap">

      <div class="cover-stat-wrap">

        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1447702542">1884</span>
        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">17607</span>

          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">

            <div class="tooltipi">
              推荐日期: <strong class="js-format-date" data-date="11/20/2015">11/20/2015</strong>
            </div>

          </div> <!-- .featured -->

      </div><!-- .cover-stat-wrap -->

      <div class="cover-fields">
          <a href="/search?field=4" title="建筑" class="field-link">建筑</a>, 
          <a href="/search?field=73" title="摄影" class="field-link">摄影</a>, 
          <a href="/search?field=122" title="数码艺术" class="field-link">数码艺术</a>
      </div><!-- .cover-fields -->

    </div><!-- .cover-info -->

  </div><!-- #cover-stat-fields-wrap -->

</div>
<div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="4444505">
  <div class="cover-img">
    <a href="https://www.behance.net/gallery/4444505/space-beyond" class="cover-img-link">
      <img src="https://mir-s3-cdn-cf.behance.net/projects/202/4444505.54622ae6a5008.jpg" alt="space &amp; beyond" title="space &amp; beyond" class="cover-img-el" data-pin-nopin="nopin" />
    </a>
  </div>



  <div class="cover-info-stats">

    <div class="cover-info">

      <div class="cover-name">
        <a href="https://www.behance.net/gallery/4444505/space-beyond" class="projectName cover-name-link">space &amp; beyond</a>
      </div>

      <div class="cover-by-wrap">
        <div class="cover-by-link text-ellipsis ">
          <span class="cover-by">作者</span>
              
                <a class="single-owner-link" href="https://www.behance.net/nickfrank">

<span class="js-mini-profile" data-id="1185777">Nick Frank</span>
                </a>

              
        </div>
      </div>

    </div>

    <div class="cover-stat-fields-wrap">

      <div class="cover-stat-wrap">

        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1341563884">3072</span>
        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">24848</span>

          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">

            <div class="tooltipi">
              推荐日期: <strong class="js-format-date" data-date="8/17/2012">8/17/2012</strong>
            </div>

          </div> <!-- .featured -->

      </div><!-- .cover-stat-wrap -->

      <div class="cover-fields">
          <a href="/search?field=73" title="摄影" class="field-link">摄影</a>, 
          <a href="/search?field=136" title="修图" class="field-link">修图</a>
      </div><!-- .cover-fields -->

    </div><!-- .cover-info -->

  </div><!-- #cover-stat-fields-wrap -->

</div>
<div class="js-item cover-block project-cover js-project-cover editable cfix" data-id="30909979">
  <div class="cover-img">
    <a href="https://www.behance.net/gallery/30909979/Temptations-Part-II" class="cover-img-link">
      <picture class="cover-img-el">
        <source srcset="https://mir-s3-cdn-cf.behance.net/projects/202/00b0d130909979.Y3JvcCw3NDMsNTgxLDAsMA.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/00b0d130909979.Y3JvcCw3NDMsNTgxLDAsMA.jpg 2x" media="(-webkit-min-device-pixel-ratio: 1.3),
           (min--moz-device-pixel-ratio: 1.3),
           (-o-min-device-pixel-ratio: 4/3),
           (min-device-pixel-ratio: 1.3),
           (min-resolution: 1.3dppx)">
        <img class="cover-img-el" srcset="https://mir-s3-cdn-cf.behance.net/projects/202/00b0d130909979.Y3JvcCw3NDMsNTgxLDAsMA.jpg, https://mir-s3-cdn-cf.behance.net/projects/404/00b0d130909979.Y3JvcCw3NDMsNTgxLDAsMA.jpg 2x" alt="Temptations - Part II">
      </picture>
    <noscript><img alt="Temptations - Part II" title="Temptations - Part II" src="https://mir-s3-cdn-cf.behance.net/projects/202/00b0d130909979.Y3JvcCw3NDMsNTgxLDAsMA.jpg" class="cover-img-el" /></noscript>
    </a>
  </div>



  <div class="cover-info-stats">

    <div class="cover-info">

      <div class="cover-name">
        <a href="https://www.behance.net/gallery/30909979/Temptations-Part-II" class="projectName cover-name-link">Temptations - Part II</a>
      </div>

      <div class="cover-by-wrap">
        <div class="cover-by-link multiple-cover-by">
          <span class="cover-by">作者</span>
          <span class="multiple-owners-list tooltipi-container">
            多个所有者<ul class="tooltipi tooltipi-white-links">
              <li class="clear">
                <a class="multiple-owner-link" href="https://www.behance.net/nickfrank">

                    <span class="multiple-owner-image-container"><img class="multiple-owner-image js-mini-profile" data-id="1185777" src="https://mir-s3-cdn-cf.behance.net/user/50/1185777.53b35fea8109b.jpg"/></span><span class="js-mini-profile" data-id="1185777">Nick Frank</span>
                </a>

              </li>
              <li class="clear">
                <a class="multiple-owner-link" href="https://www.behance.net/jeanettehagglund1">

                    <span class="multiple-owner-image-container"><img class="multiple-owner-image js-mini-profile" data-id="6465199" src="https://mir-s3-cdn-cf.behance.net/user/50/745d846465199.55eee36247250.jpg"/></span><span class="js-mini-profile" data-id="6465199">Jeanette Hägglund</span>
                </a>

              </li>
          </ul>
          </span>
        </div>
      </div>

    </div>

    <div class="cover-stat-fields-wrap">

      <div class="cover-stat-wrap">

        <span class="cover-stat cover-stat-appreciations js-cover-stat-appreciations  beicons-pre beicons-pre-thumb " data-timestamp="1446562675">806</span>
        <span class="cover-stat cover-stat-views beicons-pre beicons-pre-eye hide-phone">5059</span>

          <div class="featured tooltipi-container beicons-pre beicons-pre-featured-small">

            <div class="tooltipi">
              推荐日期: <strong class="js-format-date" data-date="1/5/2016">1/5/2016</strong>
            </div>

          </div> <!-- .featured -->

      </div><!-- .cover-stat-wrap -->

      <div class="cover-fields">
          <a href="/search?field=73" title="摄影" class="field-link">摄影</a>, 
          <a href="/search?field=122" title="数码艺术" class="field-link">数码艺术</a>, 
          <a href="/search?field=70" title="表演艺术" class="field-link">表演艺术</a>
      </div><!-- .cover-fields -->

    </div><!-- .cover-info -->

  </div><!-- #cover-stat-fields-wrap -->

</div>
        </div>
        </div>
    </div>
  </script>
  </div>
      <div id="appreciation" class="show-on-preview unclickable-mask appreciation-button js-appreciate" data-appreciate-from="project">
            <script type="text/javascript">
function loadXMLDoc()
{
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","ajax/change.jsp",true);
xmlhttp.send();
}
</script>
      <div id="myDiv">
       <img src="./ajax/69.jpg">
     </div>
  
    <div id="sticker">
  

     
    
    </div>
    <div class="js-appreciation-date project-appreciation-date beicons-pre beicons-pre-thumb"></div>
    <div class="tooltipi tooltipi-white">
      <div class="form-item form-item-a ">
  <a class="form-button form-button-light-and-blue js-action-collection" data-id="43747087" unselectable="on" tabindex="0"><span class="beicons-pre beicons-pre-collection"></span>添加到作品集</a>
</div>
<div class="user-follow js-action-follow follow-button-container" data-followee="1185777" data-entity="user">
<!--   <a class="form-button js-form-button-follow form-button-follow  form-button-default">关注</a> -->
  <a class="form-button form-button-following  form-button-light-and-grey">正在关注</a>
  <a class="form-button js-form-button-unfollow form-button-unfollow  form-button-red">取消关注&nbsp;</a>
</div>
  </div>
  </div>
</div>
  </div>
   
        <div id="project-footer" class="show-on-preview unclickable-mask cfix ">
      <div id="project-footer-inner">
          <div id="project-block-footer-comments" class="project-block ">
  <h3 class="project-block-header">评论 <% int Author_ID=(Integer)session.getAttribute("Author_ID"); %><span class="js-comments-total">
  
  </span></h3>
    
    <div>
      <ul class="js-comments-list comments-list">
      <%
      String idd = null;
      idd = session.getAttribute("work_id").toString();
      List <ei_work_comment> list10 = new ArrayList<ei_work_comment>();
	        String sql10="select * from ei_comment  where Work_id='"+idd+"'";
		    ResultSet rs10 = DBconnection.executeQuery(sql10);
		%>
	  <%  
				while (rs10.next()) {
			%>
    
		   
           
 
      <li class="comment-container cfix user-comment" data-id="32405501" style="display: list-item;">
      <a class="comment-user-image-link left" href="#">
      <img class="comment-user-image js-mini-profile" data-id="29609971" src="./style/img/4d9f1829609971.580ab3a9e674c.jpeg">
      </a><!-- //获得头像 -->
  <div class="comment-text-container left relative">
    <div class="comment-user-date-wrap ui-corner cfix">
      <a class="user-name-link bold js-mini-profile" data-id="29609971" href="https://www.behance.net/johanrider9d57">
      <%=rs10.getInt("reviewer_ID")%><!-- /获得作者姓名 -->
      </a>
      <span class="comment-date js-format-timestamp" data-timestamp="1477149524"><!-- 获取评论时间 -->
      
      <%=rs10.getDate("comment_time")%>
    
      </span>
    </div>
    <div class="comment-text-wrap"><div class="comment-text"><!--获取评论内容  -->
    
    <%=rs10.getString("comment")%>
    </div>
     </div>
  </div>
  <div class="comment-actions">
  </div>
   </li>
    <%
			}
          DBconnection.close();
		
		%> 
</ul>
    </div>
    <div class="js-see-more comments-pagination">
       <a href='add_message.jsp?works_id=<%=request.getSession().getAttribute("work_id")%>'>评论</a>
     <span class="beicons-pre beicons-pre-arrow-down"></span></div>
   </div>
      <div class="project-block-minimal">
        <div id="project-block-copyright">
          <div class="tooltipi-container">
            <img src="./style/img/by.svg">
            <img src="./style/img/nc.svg">
            <img src="./style/img/nd.svg">
            <div class="tooltipi tooltipi-white">
              <div class="project-block-header">版权信息</div>
              <p>属性, 非商业, 禁止演绎</p>
              <a href="#">阅读更多<span class="beicons-pre beicons-pre-promote"></span></a>
            </div>
          </div>
        </div>
          <div id="project-block-spam" class="js-project-spam"><a class="js-action-report beicons-pre beicons-pre-report" data-type="project" data-id="43747087">报告</a></div>
      </div>
    </div>
      </div>
    </div>
<div class="js-lightbox-wrap offscreen" id="lightbox-wrap">
    
  <div class="js-blocking" id="lightbox-blocking" style="opacity: 1; background-color: rgb(0, 0, 0);">
    <span class="lightbox-spinner"></span>
  </div>

    <div class="js-lightbox-inner-wrap" id="lightbox-inner-wrap">
      <div class="js-img-wrap" id="lightbox-img-wrap">
        
  <div class="lightbox-extra control prev js-control js-prev">
    <svg xmlns="#" version="1.1" x="0" y="0" width="60" height="60" viewBox="0 0 60 60" xml:space="preserve">
      <circle class="lightbox-icon-bg" cx="30" cy="30" r="30"></circle>
      <path class="lightbox-icon-arrow" d="M36.8,36.4L30.3,30l6.5-6.4l-3.5-3.4l-10,9.8l10,9.8L36.8,36.4z"></path>
    </svg>
  </div>

        
  <div class="lightbox-extra control next js-control js-next">
    <svg xmlns="#" version="1.1" x="0" y="0" width="60" height="60" viewBox="0 0 60 60" xml:space="preserve">
      <circle class="lightbox-icon-bg" cx="30" cy="30" r="30"></circle>
      <path class="lightbox-icon-arrow" d="M24.2,23.5l6.6,6.5l-6.6,6.5l3.6,3.5L37.8,30l-10.1-9.9L24.2,23.5z"></path>
    </svg>
  </div>

        
  <div class="lightbox-extra control close js-control js-close">
    <svg xmlns="#" version="1.1" x="0" y="0" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" fill="#FFF">
      <circle class="lightbox-icon-bg" cx="50" cy="50" r="47.5"></circle>
      <polygon class="lightbox-icon-close" points="64.5,39.8 60.2,35.5 50,45.7 39.8,35.5 35.5,39.8 45.7,50 35.5,60.2 39.8,64.5 50,54.3 60.2,64.5 64.5,60.2 54.3,50"></polygon>
    </svg>
  </div>

        <div class="lightbox-contents js-contents"><div data-slide-id="11" class="js-slide offscreen"><div class="js-slide-content lightbox-content hidden">
    <picture>
  <source srcset="https://mir-s3-cdn-cf.behance.net/project_modules/disp/c516c143747087.57fb91069e6b5.jpg" media="(max-width: 633px)">
  <source srcset="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c516c143747087.57fb91069e6b5.jpg" media="(min-width: 634px) and (max-width: 1233px)">
  <img src="./style/img/c516c143747087.57fb91069e6b5.jpg">
</picture>  <div class="lightbox-caption lightbox-extra js-lightbox-caption">
        <div class="profile-list">
        <a class="normal-link profile-list-image-wrap js-mini-profile" href="https://www.behance.net/nickfrank" data-id="1185777"><img class="profile-list-image" src="./style/img/1185777.53b35fea8109b.jpg"></a>
        <div class="profile-list-info profile-list-info-row">
          <div class="profile-list-name"><a class="normal-link js-mini-profile" data-id="1185777" href="https://www.behance.net/nickfrank">Nick Frank</a></div>
          <div class="project-name">Canon G7 X II Promo</div>
        </div>
      </div>
</div>
</div></div><div data-slide-id="12" class="js-slide offscreen"><div class="js-slide-content lightbox-content hidden">
    <picture>
  <source srcset="https://mir-s3-cdn-cf.behance.net/project_modules/disp/9ed9d943747087.57fb91069ec6b.jpg" media="(max-width: 633px)">
  <source srcset="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9ed9d943747087.57fb91069ec6b.jpg" media="(min-width: 634px) and (max-width: 1233px)">
  <img src="./style/img/9ed9d943747087.57fb91069ec6b.jpg">
</picture>  <div class="lightbox-caption lightbox-extra js-lightbox-caption">
        <div class="profile-list">
        <a class="normal-link profile-list-image-wrap js-mini-profile" href="https://www.behance.net/nickfrank" data-id="1185777"><img class="profile-list-image" src="./style/img/1185777.53b35fea8109b.jpg"></a>
        <div class="profile-list-info profile-list-info-row">
          <div class="profile-list-name"><a class="normal-link js-mini-profile" data-id="1185777" href="https://www.behance.net/nickfrank">Nick Frank</a></div>
          <div class="project-name">Canon G7 X II Promo</div>
        </div>
      </div>
</div>
</div></div><div data-slide-id="13" class="js-slide offscreen"><div class="js-slide-content lightbox-content hidden">
    <picture>
  <source srcset="https://mir-s3-cdn-cf.behance.net/project_modules/disp/70c32743747087.57fb91069f31d.jpg" media="(max-width: 633px)">
  <source srcset="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/70c32743747087.57fb91069f31d.jpg" media="(min-width: 634px) and (max-width: 1233px)">
  <img src="./style/img/70c32743747087.57fb91069f31d.jpg">
</picture>  <div class="lightbox-caption lightbox-extra js-lightbox-caption">
        <div class="profile-list">
        <a class="normal-link profile-list-image-wrap js-mini-profile" href="https://www.behance.net/nickfrank" data-id="1185777"><img class="profile-list-image" src="./style/img/1185777.53b35fea8109b.jpg"></a>
        <div class="profile-list-info profile-list-info-row">
          <div class="profile-list-name"><a class="normal-link js-mini-profile" data-id="1185777" href="https://www.behance.net/nickfrank">Nick Frank</a></div>
          <div class="project-name">Canon G7 X II Promo</div>
        </div>
      </div>
</div>
</div></div><div data-slide-id="14" class="js-slide offscreen"><div class="js-slide-content lightbox-content hidden">
    <picture>
  <source srcset="https://mir-s3-cdn-cf.behance.net/project_modules/disp/dcb5d643747087.57fb9106a0cc5.jpg" media="(max-width: 633px)">
  <source srcset="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/dcb5d643747087.57fb9106a0cc5.jpg" media="(min-width: 634px) and (max-width: 1233px)">
  <img src="./style/img/dcb5d643747087.57fb9106a0cc5.jpg">
</picture>  <div class="lightbox-caption lightbox-extra js-lightbox-caption">
        <div class="profile-list">
        <a class="normal-link profile-list-image-wrap js-mini-profile" href="https://www.behance.net/nickfrank" data-id="1185777"><img class="profile-list-image" src="./style/img/1185777.53b35fea8109b.jpg"></a>
        <div class="profile-list-info profile-list-info-row">
          <div class="profile-list-name"><a class="normal-link js-mini-profile" data-id="1185777" href="https://www.behance.net/nickfrank">Nick Frank</a></div>
          <div class="project-name">Canon G7 X II Promo</div>
        </div>
      </div>
</div>
</div></div><div data-slide-id="15" class="js-slide offscreen"><div class="js-slide-content lightbox-content hidden">
    <picture>
  <source srcset="https://mir-s3-cdn-cf.behance.net/project_modules/disp/339fdb43747087.57fb9106a110d.jpg" media="(max-width: 633px)">
  <source srcset="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/339fdb43747087.57fb9106a110d.jpg" media="(min-width: 634px) and (max-width: 1233px)">
  <img src="./style/img/339fdb43747087.57fb9106a110d.jpg">
</picture>  <div class="lightbox-caption lightbox-extra js-lightbox-caption">
        <div class="profile-list">
        <a class="normal-link profile-list-image-wrap js-mini-profile" href="https://www.behance.net/nickfrank" data-id="1185777"><img class="profile-list-image" src="./style/img/1185777.53b35fea8109b.jpg"></a>
        <div class="profile-list-info profile-list-info-row">
          <div class="profile-list-name"><a class="normal-link js-mini-profile" data-id="1185777" href="https://www.behance.net/nickfrank">Nick Frank</a></div>
          <div class="project-name">Canon G7 X II Promo</div>
        </div>
      </div>
</div>
</div></div><div data-slide-id="16" class="js-slide offscreen"><div class="js-slide-content lightbox-content hidden">
    <picture>
  <source srcset="https://mir-s3-cdn-cf.behance.net/project_modules/disp/b136e343747087.57fb9106a1694.jpg" media="(max-width: 633px)">
  <source srcset="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b136e343747087.57fb9106a1694.jpg" media="(min-width: 634px) and (max-width: 1233px)">
  <img src="./style/img/b136e343747087.57fb9106a1694.jpg">
</picture>  <div class="lightbox-caption lightbox-extra js-lightbox-caption">
        <div class="profile-list">
        <a class="normal-link profile-list-image-wrap js-mini-profile" href="https://www.behance.net/nickfrank" data-id="1185777"><img class="profile-list-image" src="./style/img/1185777.53b35fea8109b.jpg"></a>
        <div class="profile-list-info profile-list-info-row">
          <div class="profile-list-name"><a class="normal-link js-mini-profile" data-id="1185777" href="https://www.behance.net/nickfrank">Nick Frank</a></div>
          <div class="project-name">Canon G7 X II Promo</div>
        </div>
      </div>
</div>
</div></div><div data-slide-id="17" class="js-slide offscreen"><div class="js-slide-content lightbox-content hidden">
    <picture>
  <source srcset="https://mir-s3-cdn-cf.behance.net/project_modules/disp/042f9243747087.57fb9106a1ad5.jpg" media="(max-width: 633px)">
  <source srcset="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/042f9243747087.57fb9106a1ad5.jpg" media="(min-width: 634px) and (max-width: 1233px)">
  <img src="./style/img/042f9243747087.57fb9106a1ad5.jpg">
</picture>  <div class="lightbox-caption lightbox-extra js-lightbox-caption">
        <div class="profile-list">
        <a class="normal-link profile-list-image-wrap js-mini-profile" href="https://www.behance.net/nickfrank" data-id="1185777"><img class="profile-list-image" src="./style/img/1185777.53b35fea8109b.jpg"></a>
        <div class="profile-list-info profile-list-info-row">
          <div class="profile-list-name"><a class="normal-link js-mini-profile" data-id="1185777" href="https://www.behance.net/nickfrank">Nick Frank</a></div>
          <div class="project-name">Canon G7 X II Promo</div>
        </div>
      </div>
</div>
</div></div><div data-slide-id="18" class="js-slide offscreen"><div class="js-slide-content lightbox-content hidden">
    <picture>
  <source srcset="https://mir-s3-cdn-cf.behance.net/project_modules/disp/0ef75743747087.57fb9106a211f.jpg" media="(max-width: 633px)">
  <source srcset="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0ef75743747087.57fb9106a211f.jpg" media="(min-width: 634px) and (max-width: 1233px)">
  <img src="./style/img/0ef75743747087.57fb9106a211f.jpg">
</picture>  <div class="lightbox-caption lightbox-extra js-lightbox-caption">
        <div class="profile-list">
        <a class="normal-link profile-list-image-wrap js-mini-profile" href="https://www.behance.net/nickfrank" data-id="1185777"><img class="profile-list-image" src="./style/img/1185777.53b35fea8109b.jpg"></a>
        <div class="profile-list-info profile-list-info-row">
          <div class="profile-list-name"><a class="normal-link js-mini-profile" data-id="1185777" href="https://www.behance.net/nickfrank">Nick Frank</a></div>
          <div class="project-name">Canon G7 X II Promo</div>
        </div>
      </div>
</div>
</div></div><div data-slide-id="19" class="js-slide offscreen"><div class="js-slide-content lightbox-content hidden">
    <picture>
  <source srcset="https://mir-s3-cdn-cf.behance.net/project_modules/disp/0fd1f943747087.57fb9106a26e7.jpg" media="(max-width: 633px)">
  <source srcset="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0fd1f943747087.57fb9106a26e7.jpg" media="(min-width: 634px) and (max-width: 1233px)">
  <img src="./style/img/0fd1f943747087.57fb9106a26e7.jpg">
</picture>  <div class="lightbox-caption lightbox-extra js-lightbox-caption">
        <div class="profile-list">
        <a class="normal-link profile-list-image-wrap js-mini-profile" href="https://www.behance.net/nickfrank" data-id="1185777"><img class="profile-list-image" src="./style/img/1185777.53b35fea8109b.jpg"></a>
        <div class="profile-list-info profile-list-info-row">
          <div class="profile-list-name"><a class="normal-link js-mini-profile" data-id="1185777" href="https://www.behance.net/nickfrank">Nick Frank</a></div>
          <div class="project-name">Canon G7 X II Promo</div>
        </div>
      </div>
</div>
</div></div><div data-slide-id="20" class="js-slide offscreen"><div class="js-slide-content lightbox-content hidden">
    <picture>
  <source srcset="https://mir-s3-cdn-cf.behance.net/project_modules/disp/ac416c43747087.57fb9106a2ba2.jpg" media="(max-width: 633px)">
  <source srcset="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ac416c43747087.57fb9106a2ba2.jpg" media="(min-width: 634px) and (max-width: 1233px)">
  <img src="./style/img/ac416c43747087.57fb9106a2ba2.jpg">
</picture>  <div class="lightbox-caption lightbox-extra js-lightbox-caption">
        <div class="profile-list">
        <a class="normal-link profile-list-image-wrap js-mini-profile" href="https://www.behance.net/nickfrank" data-id="1185777"><img class="profile-list-image" src="./style/img/1185777.53b35fea8109b.jpg"></a>
        <div class="profile-list-info profile-list-info-row">
          <div class="profile-list-name"><a class="normal-link js-mini-profile" data-id="1185777" href="https://www.behance.net/nickfrank">Nick Frank</a></div>
          <div class="project-name">Canon G7 X II Promo</div>
        </div>
      </div>
</div>
</div></div></div>
      </div>
    </div>
  </div></div>
  </div>
          </div>

      <div class="popup-buttons hide">
        
      </div>


  </div>
</div>

<div class="blocking-div js-blocking-div shown"></div></body></html>