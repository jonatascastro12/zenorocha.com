var m="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function p(){p=function(){},m.Symbol||(m.Symbol=t)}var u=0;function t(t){return"jscomp_symbol_"+(t||"")+u++}!function(t){function i(n){if(e[n])return e[n].G;var o=e[n]={ga:n,ba:!1,G:{}};return t[n].call(o.G,o,o.G,i),o.ba=!0,o.G}var e={};i.o=t,i.f=e,i.a=function(t,e,n){i.b(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){p(),p(),"undefined"!=typeof Symbol&&Symbol.toStringTag&&(p(),Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})),Object.defineProperty(t,"__esModule",{value:!0})},i.m=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.Z)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.a(n,o,function(i){return t[i]}.bind(null,o));return n},i.g=function(t){var e=t&&t.Z?function(){return t.default}:function(){return t};return i.a(e,"a",e),e},i.b=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},i.h="",i(i.s=0)}([function(t,i,e){function n(t,i,e){i=void 0===i?{}:i,e=void 0===e?{}:e,this.g={M:void 0===i.M||i.M},this.a=t,this.b=e,this.b.i=this,this.b.j=this.g.M,this.h()}function o(t,i){if(i=void 0===i?{}:i,this.l=this.l.bind(this),this.open=this.open.bind(this),this.close=this.close.bind(this),this.f=this.f.bind(this),this.h=!1,this.g=t,!h(this.g))throw new TypeError("`new Luminous` requires a DOM element as its first argument.");this.a={w:i.namespace||null,u:i.sourceAttribute||"href",caption:i.caption||null,W:i.openTrigger||"click",U:i.closeTrigger||"click",V:i.closeWithEscape||!0,T:i.closeOnScroll||!1,$:i.appendToSelector||"body",ea:i.onOpen||null,da:i.onClose||null,v:i.includeImgixJSClass||!1,aa:i.injectBaseStyles||!0,i:i._gallery||null,j:i._arrowNavigation||null},this.a.aa&&!document.querySelector(".lum-base-styles")&&((t=document.createElement("style")).type="text/css",t.classList.add("lum-base-styles"),t.appendChild(document.createTextNode("@keyframes lum-noop{0%{zoom:1}}.lum-lightbox{position:fixed;display:none;top:0;right:0;bottom:0;left:0}.lum-lightbox.lum-open{display:block}.lum-lightbox.lum-closing,.lum-lightbox.lum-opening{animation:lum-noop 1ms}.lum-lightbox-inner{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden}.lum-lightbox-loader{display:none}.lum-lightbox-inner img{max-width:100%;max-height:100%}.lum-lightbox-image-wrapper{vertical-align:middle;display:table-cell;text-align:center}")),(i=document.head).insertBefore(t,i.firstChild)),this.s(),this.o()}function s(t){t=void 0===t?{}:t,this.g=this.g.bind(this),this.D=this.D.bind(this),this.F=this.F.bind(this),this.A=this.A.bind(this),this.s=this.s.bind(this),this.H=this.H.bind(this);var i=void 0===t.w?null:t.w,e=void 0===t.B?l():t.B,n=void 0===t.C?l():t.C,o=void 0===t.u?l():t.u;if(this.a={w:i,B:e,C:n,u:o,caption:void 0===t.caption?null:t.caption,v:void 0!==t.v&&t.v,i:void 0===t.i?null:t.i,j:void 0===t.j?null:t.j},!h(this.a.B))throw new TypeError("`new Lightbox` requires a DOM element passed as `parentEl`.");this.h=this.a.C,this.L=this.b("open"),this.S=this.b("opening"),this.P=this.b("closing"),this.N=this.R=!1}function h(t){return p?t instanceof HTMLElement:t&&"object"==typeof t&&null!==t&&1===t.nodeType&&"string"==typeof t.nodeName}function r(t,i){i.forEach(function(i){t.classList.add(i)})}function a(t,i){i.forEach(function(i){t.classList.remove(i)})}function l(){throw Error("Missing parameter")}e.r(i);var p="object"==typeof HTMLElement,c="undefined"!=typeof document&&"animation"in document.createElement("div").style;s.prototype.b=function(t){var i=["lum-"+t],e=this.a.w;return e&&i.push(e+"-"+t),i},s.prototype.X=function(){this.c=document.createElement("div"),r(this.c,this.b("lightbox")),this.f=document.createElement("div"),r(this.f,this.b("lightbox-inner")),this.c.appendChild(this.f);var t=document.createElement("div");r(t,this.b("lightbox-loader")),this.f.appendChild(t),this.K=document.createElement("div"),r(this.K,this.b("lightbox-image-wrapper")),this.f.appendChild(this.K),r(t=document.createElement("span"),this.b("lightbox-position-helper")),this.K.appendChild(t),this.o=document.createElement("img"),r(this.o,this.b("img")),t.appendChild(this.o),this.m=document.createElement("p"),r(this.m,this.b("lightbox-caption")),t.appendChild(this.m),this.a.i&&this.Y(),this.a.B.appendChild(this.c),this.J(),this.I(),this.a.v&&this.o.classList.add("imgix-fluid")},s.prototype.Y=function(){this.O("previous",this.F),this.O("next",this.D)},s.prototype.O=function(t,i){var e=document.createElement("button");this[t+"Button"]=e,e.innerText=t,r(e,this.b(t+"-button")),r(e,this.b("gallery-button")),this.f.appendChild(e),e.addEventListener("click",function(t){t.stopPropagation(),i()},!1)},s.prototype.g=function(){var t=this.K.style;t.width=this.f.clientWidth+"px",t.maxWidth=this.f.clientWidth+"px",t.height=this.f.clientHeight-this.m.clientHeight+"px",t.maxHeight=this.f.clientHeight-this.m.clientHeight+"px"},s.prototype.I=function(){var t=typeof this.a.caption,i="";"string"===t?i=this.a.caption:"function"===t&&(i=this.a.caption(this.h)),this.m.innerHTML=i},s.prototype.J=function(){var t=this,i=this.h.getAttribute(this.a.u);if(!i)throw Error("No image URL was found in the "+this.a.u+" attribute of the trigger.");var e=this.b("loading");this.R||r(this.c,e),this.o.onload=function(){a(t.c,e),t.R=!0},this.o.setAttribute("src",i)},s.prototype.H=function(t){37==t.keyCode?this.F():39==t.keyCode&&this.D()},s.prototype.D=function(){this.a.i&&(this.h=this.a.i.ca(this.h),this.J(),this.I(),this.g())},s.prototype.F=function(){this.a.i&&(this.h=this.a.i.fa(this.h),this.J(),this.I(),this.g())},s.prototype.open=function(){this.N||(this.X(),this.N=!0),this.h=this.a.C,this.J(),this.I(),r(this.c,this.L),this.g(),window.addEventListener("resize",this.g,!1),this.a.j&&window.addEventListener("keydown",this.H,!1),c&&(this.c.addEventListener("animationend",this.A,!1),r(this.c,this.S))},s.prototype.close=function(){window.removeEventListener("resize",this.g,!1),this.a.j&&window.removeEventListener("keydown",this.H,!1),c?(this.c.addEventListener("animationend",this.s,!1),r(this.c,this.P)):a(this.c,this.L)},s.prototype.A=function(){this.c.removeEventListener("animationend",this.A,!1),a(this.c,this.S)},s.prototype.s=function(){this.c.removeEventListener("animationend",this.s,!1),a(this.c,this.L),a(this.c,this.P)},s.prototype.l=function(){this.c&&this.a.B.removeChild(this.c)},o.prototype.open=function(t){t&&"function"==typeof t.preventDefault&&t.preventDefault(),t=this.b.N,this.b.open(),t||this.m(),this.a.T&&window.addEventListener("scroll",this.close,!1),(t=this.a.ea)&&"function"==typeof t&&t(),this.h=!0},o.prototype.close=function(t){t&&"function"==typeof t.preventDefault&&t.preventDefault(),this.a.T&&window.removeEventListener("scroll",this.close,!1),this.b.close(),(t=this.a.da)&&"function"==typeof t&&t(),this.h=!1},o.prototype.s=function(){this.b=new s({w:this.a.w,B:document.querySelector(this.a.$),C:this.g,u:this.a.u,caption:this.a.caption,v:this.a.v,i:this.a.i,j:this.a.j})},o.prototype.o=function(){this.g.addEventListener(this.a.W,this.open,!1),this.a.V&&window.addEventListener("keyup",this.f,!1)},o.prototype.m=function(){this.b.c.addEventListener(this.a.U,this.close,!1)},o.prototype.A=function(){this.g.removeEventListener(this.a.W,this.open,!1),this.b.c&&this.b.c.removeEventListener(this.a.U,this.close,!1),this.a.V&&window.removeEventListener("keyup",this.f,!1)},o.prototype.f=function(t){this.h&&27===t.keyCode&&this.close()},o.prototype.l=function(){this.A(),this.b.l()},o.prototype.open=o.prototype.open,o.prototype.close=o.prototype.close,o.prototype.destroy=o.prototype.l,n.prototype.h=function(){this.f=[];for(var t=this.a.length,i=0;i<t;i++){var e=new o(this.a[i],this.b);this.f.push(e)}},n.prototype.ca=function(t){return(t=Array.prototype.indexOf.call(this.a,t)+1)>=this.a.length?this.a[0]:this.a[t]},n.prototype.fa=function(t){return 0>(t=Array.prototype.indexOf.call(this.a,t)-1)?this.a[this.a.length-1]:this.a[t]},n.prototype.l=function(){this.f.forEach(function(t){return t.l()})},n.prototype.destroy=n.prototype.l,window.LuminousGallery=n,window.Luminous=o}]);
//# sourceMappingURL=luminous.min.js.map