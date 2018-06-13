/*!
 * PhotoClip - 一款手势驱动的裁图插件
 * @version v3.3.6
 * @author baijunjie
 * @license MIT
 * 
 * git - https://github.com/baijunjie/PhotoClip.git
 */
!function(t,i){"object"==typeof exports&&"object"==typeof module?module.exports=i(require("lrz"),require("hammerjs"),require("iscroll/build/iscroll-zoom")):"function"==typeof define&&define.amd?define(["lrz","hammerjs","iscroll"],i):"object"==typeof exports?exports.PhotoClip=i(require("lrz"),require("hammerjs"),require("iscroll/build/iscroll-zoom")):t.PhotoClip=i(t.lrz,t.Hammer,t.IScroll)}(this,function(t,i,e){return function(t){function i(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,i),r.l=!0,r.exports}var e={};return i.m=t,i.c=e,i.i=function(t){return t},i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},i.p="",i(i.s=4)}([function(t,i,e){var o,r,n;!function(e,a){r=[i],o=a,void 0!==(n="function"==typeof o?o.apply(i,r):o)&&(t.exports=n)}(0,function(t){"use strict";function i(t,i,e,o){var r=t/e,n=i/o;return r>n?r:n}function e(t,i){var e=o(i),r=Math.sin(e),n=Math.cos(e);return{x:n*t.x-r*t.y,y:n*t.y+r*t.x}}function o(t){return t/180*Math.PI}function r(t,i,e,o){e=e||0,o=o||0;var r=void 0,n=void 0;return h([t,i],function(){r=t.getBoundingClientRect(),n=i.getBoundingClientRect()}),{x:n.left-r.left+e,y:n.top-r.top+o}}function n(t,i,e){i=i||0,e=e||0;var o=void 0;return h(t,function(){o=t.getBoundingClientRect()}),{x:i-o.left,y:e-o.top}}function a(){var t=void 0,i=void 0,e=void 0,o=void 0,r=void 0,n=arguments[0]||{},s=void 0===n?"undefined":v(n),h=Object.prototype.toString,l=1,c=arguments.length,u=!1;for("boolean"===s&&(u=n,n=arguments[l]||{},s=void 0===n?"undefined":v(n),l++),"object"!==s&&"function"!==s&&(n={}),l===c&&(n=this,l--);l<c;l++)if(null!=(t=arguments[l]))for(i in t)e=n[i],o=t[i],n!==o&&(u&&o&&((r="[object Array]"===h.call(o))||"[object Object]"===h.call(o))?(r?(r=!1,e=e&&"[object Array]"===h.call(e)?e:[]):e=e&&"[object Object]"===h.call(e)?e:{},n[i]=a(u,e,o)):void 0!==o&&(n[i]=o));return n}function s(t,i){if("string"==typeof i){var e=t[i];i=t,t=e}if("function"==typeof t){var o=Array.prototype.slice,r=o.call(arguments,2),n=function(){return t.apply(i||this,r.concat(o.call(arguments)))};return n.guid=t.guid=t.guid||L++,n}}function h(t,i,e){"object"!==(void 0===t?"undefined":v(t))&&(t=[]),void 0===t.length&&(t=[t]);for(var o,r=[],n=[],a=0;o=t[a++];)for(;o instanceof HTMLElement;){var s=o.nodeName;if(!o.getClientRects().length){r.push(o),n.push(o.style.display);var h=b[s];if(!h){var l=document.createElement(s);document.body.appendChild(l),h=window.getComputedStyle(l).display,l.parentNode.removeChild(l),"none"===h&&(h="block"),b[s]=h}o.style.display=h}if("BODY"===s)break;o=o.parentNode}"function"==typeof i&&i.call(e||this);for(var c=r.length;c--;)r.pop().style.display=n.pop()}function l(t){return/%$/.test(t+"")}function c(t){return"number"==typeof t}function u(t){return"[object Array]"===Object.prototype.toString.call(t)}function _(t){return Array.prototype.map.call(t,function(t){return t})}function p(t,i,e,o){var r=document.createElement("DIV");if("object"===(void 0===i?"undefined":v(i))&&(o=i,i=null),"object"===(void 0===e?"undefined":v(e))&&(o=e,e=null),"object"===(void 0===o?"undefined":v(o)))for(var n in o)r.style[n]=o[n];return i&&(r.className=i),e&&(r.id=e),t.appendChild(r),r}function d(t){t.parentNode&&t.parentNode.removeChild(t)}function f(t,i){return t instanceof HTMLElement?[t]:"object"===(void 0===t?"undefined":v(t))&&t.length?_(t):t&&"string"==typeof t?("string"==typeof i&&(i=document.querySelector(i)),i instanceof HTMLElement||(i=document),_(i.querySelectorAll(t))):[]}function y(t,i,e){if("object"===(void 0===i?"undefined":v(i))){for(var o in i)t[o]=i[o];return t}return void 0===e?t[i]:(t[i]=e,t)}function m(t,i,e){if("object"===(void 0===i?"undefined":v(i))){for(var o in i)e=i[o],c(e)&&(e+="px"),t.style[o]=e;return t}return void 0===e?window.getComputedStyle(t)[i]:(c(e)&&(e+="px"),t.style[i]=e,t)}function g(t){var i=document.documentElement;if(t in i.style)return"";for(var e,o=t.charAt(0).toUpperCase()+t.substr(1),r=["Webkit","Moz","ms","O"],n=0;e=r[n++];)if(e+o in i.style)return"-"+e.toLowerCase()+"-"}Object.defineProperty(t,"__esModule",{value:!0}),t.getScale=i,t.pointRotate=e,t.angleToRadian=o,t.loaclToLoacl=r,t.globalToLoacl=n,t.extend=a,t.proxy=s,t.hideAction=h,t.isPercent=l,t.isNumber=c,t.isArray=u,t.toArray=_,t.createElement=p,t.removeElement=d,t.$=f,t.attr=y,t.css=m,t.support=g;var v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L=0,b={}})},function(i,e){i.exports=t},function(t,e){t.exports=i},function(t,i){t.exports=e},function(t,i,e){var o,r,n;!function(a,s){r=[t,i,e(2),e(3),e(1),e(0)],o=s,void 0!==(n="function"==typeof o?o.apply(i,r):o)&&(t.exports=n)}(0,function(t,i,e,o,r,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function s(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function h(t,i,e){i=(i||0).toFixed(2),e=(e||0).toFixed(2),d.css(t,L+"transform-origin",i+"px "+e+"px")}function l(t,i,e,o){i=i.toFixed(2),e=e.toFixed(2),o=o.toFixed(2),d.css(t,L+"transform","translateZ(0) translate("+i+"px,"+e+"px) rotate("+o+"deg)")}function c(t,i,e,o,r,n){d.css(t,L+"transform"),d.css(t,L+"transition",L+"transform "+r+"ms cubic-bezier(0.1, 0.57, 0.1, 1)"),l(t,i,e,o),setTimeout(function(){d.css(t,L+"transition",""),n()},r)}Object.defineProperty(i,"__esModule",{value:!0});var u=a(e),_=a(o),p=a(r),d=function(t){if(t&&t.__esModule)return t;var i={};if(null!=t)for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(i[e]=t[e]);return i.default=t,i}(n),f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y=function(){function t(t,i){for(var e=0;e<i.length;e++){var o=i[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(i,e,o){return e&&t(i.prototype,e),o&&t(i,o),i}}(),m=!!navigator.userAgent.match(/mobile/i),g=!!navigator.userAgent.match(/android/i),v=d.support("transition"),L=d.support("transform"),b=function(){},$={size:[100,100],adaptive:"",outputSize:[0,0],outputType:"jpg",outputQuality:.8,maxZoom:1,rotateFree:!g,view:"",file:"",ok:"",img:"",loadStart:b,loadComplete:b,loadError:b,done:b,fail:b,lrzOption:{width:g?1e3:void 0,height:g?1e3:void 0,quality:.7},style:{maskColor:"rgba(0,0,0,.5)",maskBorder:"2px dashed #ddd",jpgFillColor:"#fff"},errorMsg:{noSupport:"您的浏览器版本过于陈旧，无法支持裁图功能，请更换新的浏览器！",imgError:"不支持该图片格式，请选择常规格式的图片文件！",imgHandleError:"图片处理失败！请更换其它图片尝试。",imgLoadError:"图片读取失败！请更换其它图片尝试。",noImg:"没有可裁剪的图片！",clipError:"截图失败！当前图片源文件可能存在跨域问题，请确保图片与应用同源。如果您是在本地环境下执行本程序，请更换至服务器环境。"}},z=function(){function t(i,e){s(this,t),(i=d.$(i))&&i.length&&(this._$container=i[0],this._options=d.extend(!0,{},$,e),void 0===L&&this._options.errorMsg.noSupport&&alert(this._options.errorMsg.noSupport),this._init())}return y(t,[{key:"_init",value:function(){var t=this,i=this._options;d.isNumber(i.size)?i.size=[i.size,i.size]:d.isArray(i.size)?((!d.isNumber(i.size[0])||i.size[0]<=0)&&(i.size[0]=$.size[0]),(!d.isNumber(i.size[1])||i.size[1]<=0)&&(i.size[1]=$.size[1])):i.size=d.extend({},$.size),d.isNumber(i.outputSize)?i.outputSize=[i.outputSize,0]:d.isArray(i.outputSize)?((!d.isNumber(i.outputSize[0])||i.outputSize[0]<0)&&(i.outputSize[0]=$.outputSize[0]),(!d.isNumber(i.outputSize[1])||i.outputSize[1]<0)&&(i.outputSize[1]=$.outputSize[1])):i.outputSize=d.extend({},$.outputSize),"jpg"===i.outputType?i.outputType="image/jpeg":i.outputType="image/png",d.isArray(i.adaptive)&&(this._widthIsPercent=!(!i.adaptive[0]||!d.isPercent(i.adaptive[0]))&&i.adaptive[0],this._heightIsPercent=!(!i.adaptive[1]||!d.isPercent(i.adaptive[1]))&&i.adaptive[1]),this._outputWidth=i.outputSize[0],this._outputHeight=i.outputSize[1],this._canvas=document.createElement("canvas"),this._iScroll=null,this._hammerManager=null,this._clipWidth=0,this._clipHeight=0,this._clipSizeRatio=1,this._$img=null,this._imgLoading=!1,this._imgLoaded=!1,this._containerWidth=0,this._containerHeight=0,this._$clipLayer=null,this._$moveLayer=null,this._$rotationLayer=null,this._viewList=null,this._fileList=null,this._okList=null,this._$mask=null,this._$mask_left=null,this._$mask_right=null,this._$mask_right=null,this._$mask_bottom=null,this._$clip_frame=null,this._atRotation=!1,this._rotationLayerWidth=0,this._rotationLayerHeight=0,this._rotationLayerX=0,this._rotationLayerY=0,this._rotationLayerOriginX=0,this._rotationLayerOriginY=0,this._curAngle=0,this._initProxy(),this._initElements(),this._initScroll(),this._initRotationEvent(),this._initFile(),this._resize(),window.addEventListener("resize",this._resize),(this._okList=d.$(i.ok))&&this._okList.forEach(function(i){i.addEventListener("click",t._clipImg)}),this._options.img&&this._lrzHandle(this._options.img)}},{key:"_initElements",value:function(){var t=this._$container,i=t.style,e={};e["user-select"]=i["user-select"],e.overflow=i.overflow,e.position=i.position,this._containerOriginStyle=e,d.css(t,{"user-select":"none",overflow:"hidden"}),"static"===d.css(t,"position")&&d.css(t,"position","relative"),this._$clipLayer=d.createElement(t,"photo-clip-layer",{position:"absolute",left:"50%",top:"50%"}),this._$moveLayer=d.createElement(this._$clipLayer,"photo-clip-move-layer"),this._$rotationLayer=d.createElement(this._$moveLayer,"photo-clip-rotation-layer");var o=this._$mask=d.createElement(t,"photo-clip-mask",{position:"absolute",left:0,top:0,width:"100%",height:"100%","pointer-events":"none"}),r=this._options,n=r.style.maskColor,a=r.style.maskBorder;if(this._$mask_left=d.createElement(o,"photo-clip-mask-left",{position:"absolute",left:0,right:"50%",top:"50%",bottom:"50%",width:"auto","background-color":n}),this._$mask_right=d.createElement(o,"photo-clip-mask-right",{position:"absolute",left:"50%",right:0,top:"50%",bottom:"50%","background-color":n}),this._$mask_top=d.createElement(o,"photo-clip-mask-top",{position:"absolute",left:0,right:0,top:0,bottom:"50%","background-color":n}),this._$mask_bottom=d.createElement(o,"photo-clip-mask-bottom",{position:"absolute",left:0,right:0,top:"50%",bottom:0,"background-color":n}),this._$clip_frame=d.createElement(o,"photo-clip-area",{border:a,position:"absolute",left:"50%",top:"50%"}),this._viewList=d.$(r.view),this._viewList){var s=[];this._viewList.forEach(function(t,i){var e=t.style,o={};o["background-repeat"]=e["background-repeat"],o["background-position"]=e["background-position"],o["background-size"]=e["background-size"],s[i]=o,d.css(t,{"background-repeat":"no-repeat","background-position":"center","background-size":"contain"})}),this._viewOriginStyleList=s}}},{key:"_initScroll",value:function(){this._iScroll=new _.default(this._$clipLayer,{zoom:!0,scrollX:!0,scrollY:!0,freeScroll:!0,mouseWheel:!0,disablePointer:!0,disableTouch:!1,disableMouse:!1,wheelAction:"zoom",bounceTime:300})}},{key:"_refreshScroll",value:function(t){t=t||0;var i=this._iScroll.options,e=this._options.maxZoom,o=this._rotationLayerWidth,r=this._rotationLayerHeight;o&&r?(i.zoomMin=d.getScale(this._clipWidth,this._clipHeight,o,r),i.zoomMax=Math.max(e,i.zoomMin),i.startZoom=Math.min(i.zoomMax,d.getScale(this._containerWidth,this._containerHeight,o,r))):(i.zoomMin=1,i.zoomMax=e,i.startZoom=1),d.css(this._$moveLayer,{width:o,height:r}),this._$clipLayer.appendChild(this._$moveLayer),this._iScroll.refresh(t)}},{key:"_resetScroll",value:function(t,i){t=t||0,i=i||0,this._rotationLayerWidth=t,this._rotationLayerHeight=i,this._rotationLayerX=0,this._rotationLayerY=0,this._curAngle=0,l(this._$rotationLayer,this._rotationLayerX,this._rotationLayerY,this._curAngle),d.css(this._$rotationLayer,{width:t,height:i}),this._refreshScroll();var e=this._iScroll,o=e.scale,r=.5*(this._clipWidth-t*o),n=.5*(this._clipHeight-i*o);e.scrollTo(r,n),e.zoom(e.options.startZoom,void 0,void 0,0)}},{key:"_initRotationEvent",value:function(){if(m){this._hammerManager=new u.default.Manager(this._$moveLayer),this._hammerManager.add(new u.default.Rotate);var t,i,e,o=this,r=this._options.rotateFree,n=this._iScroll.options.bounceTime;this._hammerManager.on("rotatestart",function(e){o._atRotation||(t=!0,r?(i=(e.rotation-o._curAngle)%360,o._rotationLayerRotateReady(e.center)):i=e.rotation)}),this._hammerManager.on("rotatemove",function(n){t&&(e=n.rotation-i,r&&o._rotationLayerRotate(e))}),this._hammerManager.on("rotateend rotatecancel",function(i){if(t){if(t=!1,!r)return e%=360,e>180?e-=360:e<-180&&(e+=360),void(e>30?o._rotateBy(90,n,i.center):e<-30&&o._rotateBy(-90,n,i.center));var a=e%360;a<0&&(a+=360),a<10?e+=-a:a>80&&a<100?e+=90-a:a>170&&a<190?e+=180-a:a>260&&a<280?e+=270-a:a>350&&(e+=360-a),o._rotationLayerRotateFinish(e,n)}})}else this._$moveLayer.addEventListener("dblclick",this._rotateCW90)}},{key:"_rotateCW90",value:function(t){this._rotateBy(90,this._iScroll.options.bounceTime,{x:t.clientX,y:t.clientY})}},{key:"_rotateBy",value:function(t,i,e){this._rotateTo(this._curAngle+t,i,e)}},{key:"_rotateTo",value:function(t,i,e){this._atRotation||(this._rotationLayerRotateReady(e),this._rotationLayerRotateFinish(t,i))}},{key:"_rotationLayerRotateReady",value:function(t){var i,e=this._iScroll.scale;i=t?d.globalToLoacl(this._$rotationLayer,t.x,t.y):d.loaclToLoacl(this._$rotationLayer,this._$clipLayer,.5*this._clipWidth,.5*this._clipHeight),i.x/=e,i.y/=e;var o={x:i.x-this._rotationLayerX,y:i.y-this._rotationLayerY},r=d.pointRotate(o,-this._curAngle);this._rotationLayerOriginX=r.x,this._rotationLayerOriginY=r.y;var n=this._$rotationLayer.getBoundingClientRect();h(this._$rotationLayer,this._rotationLayerOriginX,this._rotationLayerOriginY);var a=this._$rotationLayer.getBoundingClientRect();this._rotationLayerX+=(n.left-a.left)/e,this._rotationLayerY+=(n.top-a.top)/e,l(this._$rotationLayer,this._rotationLayerX,this._rotationLayerY,this._curAngle)}},{key:"_rotationLayerRotate",value:function(t){l(this._$rotationLayer,this._rotationLayerX,this._rotationLayerY,t),this._curAngle=t}},{key:"_rotationLayerRotateFinish",value:function(t,i){l(this._$rotationLayer,this._rotationLayerX,this._rotationLayerY,t);var e=this._$rotationLayer.getBoundingClientRect();h(this._$rotationLayer,0,0);var o=this._$rotationLayer.getBoundingClientRect();l(this._$rotationLayer,this._rotationLayerX,this._rotationLayerY,0);var r=this._$rotationLayer.getBoundingClientRect(),n=this._$moveLayer.getBoundingClientRect(),a={x:e.left-n.left,y:e.top-n.top},s=this._iScroll,u=s.scale;this._rotationLayerWidth=e.width/u,this._rotationLayerHeight=e.height/u,this._rotationLayerX=(r.left-o.left)/u,this._rotationLayerY=(r.top-o.top)/u,s.scrollTo(s.x+a.x,s.y+a.y),this._refreshScroll(s.options.bounceTime);var _=Math.max(s.options.zoomMin,Math.min(s.options.zoomMax,u));if(_!==u&&(a.x=a.x/u*_,a.y=a.y/u*_),s.startX+=a.x,s.startY+=a.y,t!==this._curAngle&&i&&d.isNumber(i)&&void 0!==v){a={x:(o.left-e.left)/u,y:(o.top-e.top)/u},h(this._$rotationLayer,this._rotationLayerOriginX,this._rotationLayerOriginY),l(this._$rotationLayer,this._rotationLayerX+a.x,this._rotationLayerY+a.y,this._curAngle);var p=this;this._atRotation=!0,c(this._$rotationLayer,this._rotationLayerX+a.x,this._rotationLayerY+a.y,t,i,function(){p._atRotation=!1,p._rotateFinishUpdataElem(t)})}else this._rotateFinishUpdataElem(t)}},{key:"_rotateFinishUpdataElem",value:function(t){h(this._$rotationLayer,this._rotationLayerOriginX=0,this._rotationLayerOriginY=0),l(this._$rotationLayer,this._rotationLayerX,this._rotationLayerY,this._curAngle=t%360)}},{key:"_initFile",value:function(){var t=this,i=this._options;(this._fileList=d.$(i.file))&&this._fileList.forEach(function(i){m||d.attr(i,"accept","image/jpeg, image/x-png, image/png, image/gif"),i.addEventListener("change",t._fileOnChangeHandle)})}},{key:"_fileOnChangeHandle",value:function(t){var i=t.target.files;i.length&&this._lrzHandle(i[0])}},{key:"_lrzHandle",value:function(t){var i=this,e=this._options,o=e.errorMsg;if("object"===(void 0===t?"undefined":f(t))&&t.type&&!/image\/\w+/.test(t.type))return e.loadError.call(this,o.imgError),!1;this._imgLoaded=!1,this._imgLoading=!0,e.loadStart.call(this,t);try{(0,p.default)(t,e.lrzOption).then(function(t){i._clearImg(),i._createImg(t.base64)}).catch(function(t){e.loadError.call(i,o.imgHandleError,t),i._imgLoading=!1})}catch(t){throw t}}},{key:"_clearImg",value:function(){this._$img&&(this._$img.onload=null,this._$img.onerror=null,d.removeElement(this._$img),this._$img=null)}},{key:"_createImg",value:function(t){var i=this,e=this._options,o=e.errorMsg;this._$img=new Image,d.css(this._$img,{"user-select":"none","pointer-events":"none"}),this._$img.onload=function(){i._imgLoaded=!0,i._imgLoading=!1,e.loadComplete.call(i,this),i._$rotationLayer.appendChild(this),d.hideAction([this,i._$moveLayer],function(){i._resetScroll(this.naturalWidth,this.naturalHeight)},this)},this._$img.onerror=function(t){e.loadError.call(i,o.imgLoadError,t),i._imgLoading=!1},d.attr(this._$img,"src",t)}},{key:"_clipImg",value:function(){var t=this._options,i=t.errorMsg;if(!this._imgLoaded)return void t.fail.call(this,i.noImg);var e=d.loaclToLoacl(this._$rotationLayer,this._$clipLayer),o=this._iScroll.scale,r=1,n=1,a=this._canvas.getContext("2d");this._outputWidth||this._outputHeight?(this._canvas.width=this._outputWidth,this._canvas.height=this._outputHeight,r=this._outputWidth/this._clipWidth*o,n=this._outputHeight/this._clipHeight*o):(this._canvas.width=this._clipWidth/o,this._canvas.height=this._clipHeight/o),a.clearRect(0,0,this._canvas.width,this._canvas.height),a.fillStyle=t.style.jpgFillColor,a.fillRect(0,0,this._canvas.width,this._canvas.height),a.save(),a.scale(r,n),a.translate(this._rotationLayerX-e.x/o,this._rotationLayerY-e.y/o),a.rotate(this._curAngle*Math.PI/180),a.drawImage(this._$img,0,0),a.restore();try{var s=this._canvas.toDataURL(t.outputType,t.outputQuality);this._viewList&&this._viewList.forEach(function(t,i){d.css(t,"background-image","url("+s+")")});try{t.done.call(this,s)}catch(t){throw t}return s}catch(t){throw t}}},{key:"_resize",value:function(t,i){d.hideAction(this._$container,function(){this._containerWidth=this._$container.offsetWidth,this._containerHeight=this._$container.offsetHeight},this);var e=this._options.size,o=this._clipWidth,r=this._clipHeight;if(d.isNumber(t)&&(e[0]=t),d.isNumber(i)&&(e[1]=i),this._widthIsPercent||this._heightIsPercent){var n=e[0]/e[1];this._widthIsPercent&&(this._clipWidth=this._containerWidth/100*parseFloat(this._widthIsPercent),this._heightIsPercent||(this._clipHeight=this._clipWidth/n)),this._heightIsPercent&&(this._clipHeight=this._containerHeight/100*parseFloat(this._heightIsPercent),this._widthIsPercent||(this._clipWidth=this._clipHeight*n))}else this._clipWidth=e[0],this._clipHeight=e[1];var a=this._clipWidth,s=this._clipHeight;if(this._clipSizeRatio=a/s,this._outputWidth&&!this._outputHeight&&(this._outputHeight=this._outputWidth/this._clipSizeRatio),this._outputHeight&&!this._outputWidth&&(this._outputWidth=this._outputHeight*this._clipSizeRatio),d.css(this._$clipLayer,{width:a,height:s,"margin-left":-a/2,"margin-top":-s/2}),d.css(this._$mask_left,{"margin-right":a/2,"margin-top":-s/2,"margin-bottom":-s/2}),d.css(this._$mask_right,{"margin-left":a/2,"margin-top":-s/2,"margin-bottom":-s/2}),d.css(this._$mask_top,{"margin-bottom":s/2}),d.css(this._$mask_bottom,{"margin-top":s/2}),d.css(this._$clip_frame,{width:a,height:s}),d.css(this._$clip_frame,L+"transform","translate(-50%, -50%)"),a!==o||s!==r){this._refreshScroll();var h=this._iScroll,l=h.scale,c=.5*(a-o)*l,u=.5*(s-r)*l;h.scrollBy(c,u);var _=Math.max(h.options.zoomMin,Math.min(h.options.zoomMax,l));_!==l&&h.zoom(_,void 0,void 0,0)}}},{key:"_initProxy",value:function(){this._fileOnChangeHandle=d.proxy(this,"_fileOnChangeHandle"),this._rotateCW90=d.proxy(this,"_rotateCW90"),this._resize=d.proxy(this,"_resize"),this._clipImg=d.proxy(this,"_clipImg"),this.size=d.proxy(this,"size"),this.load=d.proxy(this,"load"),this.rotateBy=d.proxy(this,"rotateBy"),this.rotateTo=d.proxy(this,"rotateTo"),this.clip=d.proxy(this,"clip"),this.destroy=d.proxy(this,"destroy")}},{key:"size",value:function(t,i){return this._resize(t,i),this}},{key:"load",value:function(t){return this._lrzHandle(t),this}},{key:"clear",value:function(){return this._clearImg(),this._resetScroll(),this._fileList&&this._fileList.forEach(function(t){t.value=""}),this}},{key:"rotate",value:function(t,i){return void 0===t?this._curAngle:(this._rotateTo(t,i),this)}},{key:"scale",value:function(t,i){return void 0===t?this._iScroll.scale:(this._iScroll.zoom(t,void 0,void 0,i),this)}},{key:"clip",value:function(){return this._clipImg()}},{key:"destroy",value:function(){var t=this;window.removeEventListener("resize",this._resize),this._$container.removeChild(this._$clipLayer),this._$container.removeChild(this._$mask),d.css(this._$container,this._containerOriginStyle),this._iScroll&&this._iScroll.destroy(),this._hammerManager?(this._hammerManager.off("rotatemove"),this._hammerManager.off("rotateend"),this._hammerManager.destroy()):this._$moveLayer.removeEventListener("dblclick",this._rotateCW90),this._$img&&(this._$img.onload=null,this._$img.onerror=null),this._viewList&&this._viewList.forEach(function(i,e){d.css(i,t._viewOriginStyleList[e])}),this._fileList&&this._fileList.forEach(function(i){i.removeEventListener("change",t._fileOnChangeHandle)}),this._okList&&this._okList.forEach(function(i){i.removeEventListener("click",t._clipImg)});for(var i in this)delete this[i];this.__proto__=Object.prototype}}]),t}();i.default=z,t.exports=i.default})}])});