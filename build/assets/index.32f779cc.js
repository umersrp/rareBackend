var u={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(s){(function(){var i={}.hasOwnProperty;function e(){for(var t="",n=0;n<arguments.length;n++){var r=arguments[n];r&&(t=o(t,f(r)))}return t}function f(t){if(typeof t=="string"||typeof t=="number")return t;if(typeof t!="object")return"";if(Array.isArray(t))return e.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var n="";for(var r in t)i.call(t,r)&&t[r]&&(n=o(n,r));return n}function o(t,n){return n?t?t+" "+n:t+n:t}s.exports?(e.default=e,s.exports=e):window.classNames=e})()})(u);export{u as c};
