// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=function(){try{return t({},"x",{}),!0}catch(t){return!1}},r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,a=n.__lookupGetter__,c=n.__lookupSetter__,f=r,l=function(t,e,r){var f,l,p,y;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((l="value"in r)&&(a.call(t,e)||c.call(t,e)?(f=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=f):t[e]=r.value),p="get"in r,y="set"in r,l&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,e,r.get),y&&u&&u.call(t,e,r.set),t},p=e()?f:l,y=p,s=function(t,e,r){y(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})},m=function(t){return"number"==typeof t},b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),h=function(){return b&&"symbol"==typeof Symbol.toStringTag},v=Object.prototype.toString,d=v,_=function(t){return d.call(t)},w=Object.prototype.hasOwnProperty,E=function(t,e){return null!=t&&w.call(t,e)},g="function"==typeof Symbol?Symbol.toStringTag:"",T=E,S=g,j=v,A=_,P=function(t){var e,r,n;if(null==t)return j.call(t);r=t[S],e=T(t,S);try{t[S]=void 0}catch(e){return j.call(t)}return n=j.call(t),e?t[S]=r:delete t[S],n},O=h()?P:A,N=Number,x=N.prototype.toString,F=O,B=N,C=function(t){try{return x.call(t),!0}catch(t){return!1}},R=h(),V=function(t){return"object"==typeof t&&(t instanceof B||(R?C(t):"[object Number]"===F(t)))},I=m,L=V,M=s,k=function(t){return I(t)||L(t)},Y=V;M(k,"isPrimitive",m),M(k,"isObject",Y);var G=k,J=G.isPrimitive,X=p,q=s,z=function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"},D=function(){var t={type:"Complex128"};return t.re=this.re,t.im=this.im,t};function H(t,e){if(!(this instanceof H))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!J(t))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+t+"`.");if(!J(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return X(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:t}),X(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}q(H,"BYTES_PER_ELEMENT",8),q(H.prototype,"BYTES_PER_ELEMENT",8),q(H.prototype,"byteLength",16),q(H.prototype,"toString",z),q(H.prototype,"toJSON",D);var K=H,Q="function"==typeof Math.fround?Math.fround:null,U=O,W="function"==typeof Float32Array,Z=function(t){return W&&t instanceof Float32Array||"[object Float32Array]"===U(t)},$=Number.POSITIVE_INFINITY,tt="function"==typeof Float32Array?Float32Array:null,et=Z,rt=$,nt=tt,ot="function"==typeof Float32Array?Float32Array:void 0,it=function(){throw new Error("not implemented")},ut=new(function(){var t,e;if("function"!=typeof nt)return!1;try{e=new nt([1,3.14,-3.14,5e40]),t=et(e)&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===rt}catch(e){t=!1}return t}()?ot:it)(1),at=Q;"function"!=typeof at&&(at=function(t){return ut[0]=t,ut[0]});var ct=G.isPrimitive,ft=p,lt=s,pt=at,yt=function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"},st=function(){var t={type:"Complex64"};return t.re=this.re,t.im=this.im,t};function mt(t,e){if(!(this instanceof mt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!ct(t))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+t+"`.");if(!ct(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return ft(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:pt(t)}),ft(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:pt(e)}),this}lt(mt,"BYTES_PER_ELEMENT",4),lt(mt.prototype,"BYTES_PER_ELEMENT",4),lt(mt.prototype,"byteLength",8),lt(mt.prototype,"toString",yt),lt(mt.prototype,"toJSON",st);var bt=mt,ht=function(){return/^\s*function\s*([^(]*)/i},vt=ht;s(vt,"REGEXP",/^\s*function\s*([^(]*)/i);var dt=vt,_t=O,wt=Array.isArray?Array.isArray:function(t){return"[object Array]"===_t(t)},Et=function(t){return null!==t&&"object"==typeof t};s(Et,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!wt(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(Et));var gt=Et,Tt=O,St=dt.REGEXP,jt=function(t){return gt(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))},At=function(t){var e,r,n;if(("Object"===(r=Tt(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=St.exec(n.toString()))return e[1]}return jt(t)?"Buffer":r},Pt=At;return function(t){var e;return t instanceof K||t instanceof bt||"Complex64"===(e=Pt(t))||"Complex128"===e}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isComplex=e();
//# sourceMappingURL=index.js.map
