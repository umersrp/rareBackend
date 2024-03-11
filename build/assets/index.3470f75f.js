import{t as p,r as f,j as d,c as X,f as T,ao as C}from"./index.97b86580.js";function z(e,r,t,n){function i(o){return o instanceof t?o:new t(function(s){s(o)})}return new(t||(t=Promise))(function(o,s){function u(v){try{c(n.next(v))}catch(h){s(h)}}function m(v){try{c(n.throw(v))}catch(h){s(h)}}function c(v){v.done?o(v.value):i(v.value).then(u,m)}c((n=n.apply(e,r||[])).next())})}function N(e,r){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,s;return s={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(c){return function(v){return m([c,v])}}function m(c){if(n)throw new TypeError("Generator is already executing.");for(;s&&(s=0,c[0]&&(t=0)),t;)try{if(n=1,i&&(o=c[0]&2?i.return:c[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,c[1])).done)return o;switch(i=0,o&&(c=[c[0]&2,o.value]),c[0]){case 0:case 1:o=c;break;case 4:return t.label++,{value:c[1],done:!1};case 5:t.label++,i=c[1],c=[0];continue;case 7:c=t.ops.pop(),t.trys.pop();continue;default:if(o=t.trys,!(o=o.length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){t=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){t.label=c[1];break}if(c[0]===6&&t.label<o[1]){t.label=o[1],o=c;break}if(o&&t.label<o[2]){t.label=o[2],t.ops.push(c);break}o[2]&&t.ops.pop(),t.trys.pop();continue}c=r.call(e,t)}catch(v){c=[6,v],i=0}finally{n=o=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function Ke(e,r){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var n=t.call(e),i,o=[],s;try{for(;(r===void 0||r-- >0)&&!(i=n.next()).done;)o.push(i.value)}catch(u){s={error:u}}finally{try{i&&!i.done&&(t=n.return)&&t.call(n)}finally{if(s)throw s.error}}return o}function $e(e,r,t){if(t||arguments.length===2)for(var n=0,i=r.length,o;n<i;n++)(o||!(n in r))&&(o||(o=Array.prototype.slice.call(r,0,n)),o[n]=r[n]);return e.concat(o||Array.prototype.slice.call(r))}var gr=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function H(e,r){var t=vr(e);if(typeof t.path!="string"){var n=e.webkitRelativePath;Object.defineProperty(t,"path",{value:typeof r=="string"?r:typeof n=="string"&&n.length>0?n:e.name,writable:!1,configurable:!1,enumerable:!0})}return t}function vr(e){var r=e.name,t=r&&r.lastIndexOf(".")!==-1;if(t&&!e.type){var n=r.split(".").pop().toLowerCase(),i=gr.get(n);i&&Object.defineProperty(e,"type",{value:i,writable:!1,configurable:!1,enumerable:!0})}return e}var yr=[".DS_Store","Thumbs.db"];function hr(e){return z(this,void 0,void 0,function(){return N(this,function(r){return ee(e)&&br(e.dataTransfer)?[2,Fr(e.dataTransfer,e.type)]:xr(e)?[2,Dr(e)]:Array.isArray(e)&&e.every(function(t){return"getFile"in t&&typeof t.getFile=="function"})?[2,wr(e)]:[2,[]]})})}function br(e){return ee(e)}function xr(e){return ee(e)&&ee(e.target)}function ee(e){return typeof e=="object"&&e!==null}function Dr(e){return he(e.target.files).map(function(r){return H(r)})}function wr(e){return z(this,void 0,void 0,function(){var r;return N(this,function(t){switch(t.label){case 0:return[4,Promise.all(e.map(function(n){return n.getFile()}))];case 1:return r=t.sent(),[2,r.map(function(n){return H(n)})]}})})}function Fr(e,r){return z(this,void 0,void 0,function(){var t,n;return N(this,function(i){switch(i.label){case 0:return e.items?(t=he(e.items).filter(function(o){return o.kind==="file"}),r!=="drop"?[2,t]:[4,Promise.all(t.map(Ar))]):[3,2];case 1:return n=i.sent(),[2,We(Qe(n))];case 2:return[2,We(he(e.files).map(function(o){return H(o)}))]}})})}function We(e){return e.filter(function(r){return yr.indexOf(r.name)===-1})}function he(e){if(e===null)return[];for(var r=[],t=0;t<e.length;t++){var n=e[t];r.push(n)}return r}function Ar(e){if(typeof e.webkitGetAsEntry!="function")return Be(e);var r=e.webkitGetAsEntry();return r&&r.isDirectory?Xe(r):Be(e)}function Qe(e){return e.reduce(function(r,t){return $e($e([],Ke(r),!1),Ke(Array.isArray(t)?Qe(t):[t]),!1)},[])}function Be(e){var r=e.getAsFile();if(!r)return Promise.reject("".concat(e," is not a File"));var t=H(r);return Promise.resolve(t)}function Er(e){return z(this,void 0,void 0,function(){return N(this,function(r){return[2,e.isDirectory?Xe(e):Or(e)]})})}function Xe(e){var r=e.createReader();return new Promise(function(t,n){var i=[];function o(){var s=this;r.readEntries(function(u){return z(s,void 0,void 0,function(){var m,c,v;return N(this,function(h){switch(h.label){case 0:if(u.length)return[3,5];h.label=1;case 1:return h.trys.push([1,3,,4]),[4,Promise.all(i)];case 2:return m=h.sent(),t(m),[3,4];case 3:return c=h.sent(),n(c),[3,4];case 4:return[3,6];case 5:v=Promise.all(u.map(Er)),i.push(v),o(),h.label=6;case 6:return[2]}})})},function(u){n(u)})}o()})}function Or(e){return z(this,void 0,void 0,function(){return N(this,function(r){return[2,new Promise(function(t,n){e.file(function(i){var o=H(i,e.fullPath);t(o)},function(i){n(i)})})]})})}var jr=function(e,r){if(e&&r){var t=Array.isArray(r)?r:r.split(","),n=e.name||"",i=(e.type||"").toLowerCase(),o=i.replace(/\/.*$/,"");return t.some(function(s){var u=s.trim().toLowerCase();return u.charAt(0)==="."?n.toLowerCase().endsWith(u):u.endsWith("/*")?o===u.replace(/\/.*$/,""):i===u})}return!0};function He(e){return Sr(e)||Cr(e)||rr(e)||_r()}function _r(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Cr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Sr(e){if(Array.isArray(e))return be(e)}function Ue(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function Ge(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?Ue(Object(t),!0).forEach(function(n){er(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ue(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function er(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function B(e,r){return kr(e)||Tr(e,r)||rr(e,r)||Pr()}function Pr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rr(e,r){if(!!e){if(typeof e=="string")return be(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return be(e,r)}}function be(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Tr(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n=[],i=!0,o=!1,s,u;try{for(t=t.call(e);!(i=(s=t.next()).done)&&(n.push(s.value),!(r&&n.length===r));i=!0);}catch(m){o=!0,u=m}finally{try{!i&&t.return!=null&&t.return()}finally{if(o)throw u}}return n}}function kr(e){if(Array.isArray(e))return e}var Ir="file-invalid-type",Rr="file-too-large",Mr="file-too-small",Lr="too-many-files",zr=function(r){r=Array.isArray(r)&&r.length===1?r[0]:r;var t=Array.isArray(r)?"one of ".concat(r.join(", ")):r;return{code:Ir,message:"File type must be ".concat(t)}},Ye=function(r){return{code:Rr,message:"File is larger than ".concat(r," ").concat(r===1?"byte":"bytes")}},qe=function(r){return{code:Mr,message:"File is smaller than ".concat(r," ").concat(r===1?"byte":"bytes")}},Nr={code:Lr,message:"Too many files"};function tr(e,r){var t=e.type==="application/x-moz-file"||jr(e,r);return[t,t?null:zr(r)]}function nr(e,r,t){if(k(e.size))if(k(r)&&k(t)){if(e.size>t)return[!1,Ye(t)];if(e.size<r)return[!1,qe(r)]}else{if(k(r)&&e.size<r)return[!1,qe(r)];if(k(t)&&e.size>t)return[!1,Ye(t)]}return[!0,null]}function k(e){return e!=null}function Kr(e){var r=e.files,t=e.accept,n=e.minSize,i=e.maxSize,o=e.multiple,s=e.maxFiles,u=e.validator;return!o&&r.length>1||o&&s>=1&&r.length>s?!1:r.every(function(m){var c=tr(m,t),v=B(c,1),h=v[0],D=nr(m,n,i),O=B(D,1),j=O[0],_=u?u(m):null;return h&&j&&!_})}function re(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function Q(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(r){return r==="Files"||r==="application/x-moz-file"}):!!e.target&&!!e.target.files}function Je(e){e.preventDefault()}function $r(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function Wr(e){return e.indexOf("Edge/")!==-1}function Br(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return $r(e)||Wr(e)}function E(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(n){for(var i=arguments.length,o=new Array(i>1?i-1:0),s=1;s<i;s++)o[s-1]=arguments[s];return r.some(function(u){return!re(n)&&u&&u.apply(void 0,[n].concat(o)),re(n)})}}function Hr(){return"showOpenFilePicker"in window}function Ur(e){if(k(e)){var r=Object.entries(e).filter(function(t){var n=B(t,2),i=n[0],o=n[1],s=!0;return or(i)||(console.warn('Skipped "'.concat(i,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),s=!1),(!Array.isArray(o)||!o.every(ir))&&(console.warn('Skipped "'.concat(i,'" because an invalid file extension was provided.')),s=!1),s}).reduce(function(t,n){var i=B(n,2),o=i[0],s=i[1];return Ge(Ge({},t),{},er({},o,s))},{});return[{description:"Files",accept:r}]}return e}function Gr(e){if(k(e))return Object.entries(e).reduce(function(r,t){var n=B(t,2),i=n[0],o=n[1];return[].concat(He(r),[i],He(o))},[]).filter(function(r){return or(r)||ir(r)}).join(",")}function Yr(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function qr(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function or(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function ir(e){return/^.*\.[\w]+$/.test(e)}var Jr=["children"],Vr=["open"],Zr=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],Qr=["refKey","onChange","onClick"];function Xr(e){return tt(e)||rt(e)||ar(e)||et()}function et(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function tt(e){if(Array.isArray(e))return xe(e)}function ye(e,r){return it(e)||ot(e,r)||ar(e,r)||nt()}function nt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ar(e,r){if(!!e){if(typeof e=="string")return xe(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return xe(e,r)}}function xe(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function ot(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n=[],i=!0,o=!1,s,u;try{for(t=t.call(e);!(i=(s=t.next()).done)&&(n.push(s.value),!(r&&n.length===r));i=!0);}catch(m){o=!0,u=m}finally{try{!i&&t.return!=null&&t.return()}finally{if(o)throw u}}return n}}function it(e){if(Array.isArray(e))return e}function Ve(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function g(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?Ve(Object(t),!0).forEach(function(n){De(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ve(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function De(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function te(e,r){if(e==null)return{};var t=at(e,r),n,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(r.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,n)||(t[n]=e[n]))}return t}function at(e,r){if(e==null)return{};var t={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(r.indexOf(i)>=0)&&(t[i]=e[i]);return t}var Fe=f.exports.forwardRef(function(e,r){var t=e.children,n=te(e,Jr),i=lr(n),o=i.open,s=te(i,Vr);return f.exports.useImperativeHandle(r,function(){return{open:o}},[o]),d(f.exports.Fragment,{children:t(g(g({},s),{},{open:o}))})});Fe.displayName="Dropzone";var sr={disabled:!1,getFilesFromEvent:hr,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};Fe.defaultProps=sr;Fe.propTypes={children:p.exports.func,accept:p.exports.objectOf(p.exports.arrayOf(p.exports.string)),multiple:p.exports.bool,preventDropOnDocument:p.exports.bool,noClick:p.exports.bool,noKeyboard:p.exports.bool,noDrag:p.exports.bool,noDragEventsBubbling:p.exports.bool,minSize:p.exports.number,maxSize:p.exports.number,maxFiles:p.exports.number,disabled:p.exports.bool,getFilesFromEvent:p.exports.func,onFileDialogCancel:p.exports.func,onFileDialogOpen:p.exports.func,useFsAccessApi:p.exports.bool,autoFocus:p.exports.bool,onDragEnter:p.exports.func,onDragLeave:p.exports.func,onDragOver:p.exports.func,onDrop:p.exports.func,onDropAccepted:p.exports.func,onDropRejected:p.exports.func,onError:p.exports.func,validator:p.exports.func};var we={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function lr(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=g(g({},sr),e),t=r.accept,n=r.disabled,i=r.getFilesFromEvent,o=r.maxSize,s=r.minSize,u=r.multiple,m=r.maxFiles,c=r.onDragEnter,v=r.onDragLeave,h=r.onDragOver,D=r.onDrop,O=r.onDropAccepted,j=r.onDropRejected,_=r.onFileDialogCancel,ne=r.onFileDialogOpen,Ae=r.useFsAccessApi,Ee=r.autoFocus,oe=r.preventDropOnDocument,Oe=r.noClick,ie=r.noKeyboard,je=r.noDrag,S=r.noDragEventsBubbling,ae=r.onError,K=r.validator,$=f.exports.useMemo(function(){return Gr(t)},[t]),_e=f.exports.useMemo(function(){return Ur(t)},[t]),se=f.exports.useMemo(function(){return typeof ne=="function"?ne:Ze},[ne]),U=f.exports.useMemo(function(){return typeof _=="function"?_:Ze},[_]),x=f.exports.useRef(null),A=f.exports.useRef(null),cr=f.exports.useReducer(st,we),Ce=ye(cr,2),le=Ce[0],w=Ce[1],ur=le.isFocused,Se=le.isFileDialogActive,G=f.exports.useRef(typeof window<"u"&&window.isSecureContext&&Ae&&Hr()),Pe=function(){!G.current&&Se&&setTimeout(function(){if(A.current){var l=A.current.files;l.length||(w({type:"closeDialog"}),U())}},300)};f.exports.useEffect(function(){return window.addEventListener("focus",Pe,!1),function(){window.removeEventListener("focus",Pe,!1)}},[A,Se,U,G]);var I=f.exports.useRef([]),Te=function(l){x.current&&x.current.contains(l.target)||(l.preventDefault(),I.current=[])};f.exports.useEffect(function(){return oe&&(document.addEventListener("dragover",Je,!1),document.addEventListener("drop",Te,!1)),function(){oe&&(document.removeEventListener("dragover",Je),document.removeEventListener("drop",Te))}},[x,oe]),f.exports.useEffect(function(){return!n&&Ee&&x.current&&x.current.focus(),function(){}},[x,Ee,n]);var P=f.exports.useCallback(function(a){ae?ae(a):console.error(a)},[ae]),ke=f.exports.useCallback(function(a){a.preventDefault(),a.persist(),V(a),I.current=[].concat(Xr(I.current),[a.target]),Q(a)&&Promise.resolve(i(a)).then(function(l){if(!(re(a)&&!S)){var y=l.length,b=y>0&&Kr({files:l,accept:$,minSize:s,maxSize:o,multiple:u,maxFiles:m,validator:K}),F=y>0&&!b;w({isDragAccept:b,isDragReject:F,isDragActive:!0,type:"setDraggedFiles"}),c&&c(a)}}).catch(function(l){return P(l)})},[i,c,P,S,$,s,o,u,m,K]),Ie=f.exports.useCallback(function(a){a.preventDefault(),a.persist(),V(a);var l=Q(a);if(l&&a.dataTransfer)try{a.dataTransfer.dropEffect="copy"}catch{}return l&&h&&h(a),!1},[h,S]),Re=f.exports.useCallback(function(a){a.preventDefault(),a.persist(),V(a);var l=I.current.filter(function(b){return x.current&&x.current.contains(b)}),y=l.indexOf(a.target);y!==-1&&l.splice(y,1),I.current=l,!(l.length>0)&&(w({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),Q(a)&&v&&v(a))},[x,v,S]),Y=f.exports.useCallback(function(a,l){var y=[],b=[];a.forEach(function(F){var W=tr(F,$),L=ye(W,2),ue=L[0],fe=L[1],pe=nr(F,s,o),Z=ye(pe,2),de=Z[0],me=Z[1],ge=K?K(F):null;if(ue&&de&&!ge)y.push(F);else{var ve=[fe,me];ge&&(ve=ve.concat(ge)),b.push({file:F,errors:ve.filter(function(mr){return mr})})}}),(!u&&y.length>1||u&&m>=1&&y.length>m)&&(y.forEach(function(F){b.push({file:F,errors:[Nr]})}),y.splice(0)),w({acceptedFiles:y,fileRejections:b,type:"setFiles"}),D&&D(y,b,l),b.length>0&&j&&j(b,l),y.length>0&&O&&O(y,l)},[w,u,$,s,o,m,D,O,j,K]),q=f.exports.useCallback(function(a){a.preventDefault(),a.persist(),V(a),I.current=[],Q(a)&&Promise.resolve(i(a)).then(function(l){re(a)&&!S||Y(l,a)}).catch(function(l){return P(l)}),w({type:"reset"})},[i,Y,P,S]),R=f.exports.useCallback(function(){if(G.current){w({type:"openDialog"}),se();var a={multiple:u,types:_e};window.showOpenFilePicker(a).then(function(l){return i(l)}).then(function(l){Y(l,null),w({type:"closeDialog"})}).catch(function(l){Yr(l)?(U(l),w({type:"closeDialog"})):qr(l)?(G.current=!1,A.current?(A.current.value=null,A.current.click()):P(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):P(l)});return}A.current&&(w({type:"openDialog"}),se(),A.current.value=null,A.current.click())},[w,se,U,Ae,Y,P,_e,u]),Me=f.exports.useCallback(function(a){!x.current||!x.current.isEqualNode(a.target)||(a.key===" "||a.key==="Enter"||a.keyCode===32||a.keyCode===13)&&(a.preventDefault(),R())},[x,R]),Le=f.exports.useCallback(function(){w({type:"focus"})},[]),ze=f.exports.useCallback(function(){w({type:"blur"})},[]),Ne=f.exports.useCallback(function(){Oe||(Br()?setTimeout(R,0):R())},[Oe,R]),M=function(l){return n?null:l},ce=function(l){return ie?null:M(l)},J=function(l){return je?null:M(l)},V=function(l){S&&l.stopPropagation()},fr=f.exports.useMemo(function(){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=a.refKey,y=l===void 0?"ref":l,b=a.role,F=a.onKeyDown,W=a.onFocus,L=a.onBlur,ue=a.onClick,fe=a.onDragEnter,pe=a.onDragOver,Z=a.onDragLeave,de=a.onDrop,me=te(a,Zr);return g(g(De({onKeyDown:ce(E(F,Me)),onFocus:ce(E(W,Le)),onBlur:ce(E(L,ze)),onClick:M(E(ue,Ne)),onDragEnter:J(E(fe,ke)),onDragOver:J(E(pe,Ie)),onDragLeave:J(E(Z,Re)),onDrop:J(E(de,q)),role:typeof b=="string"&&b!==""?b:"presentation"},y,x),!n&&!ie?{tabIndex:0}:{}),me)}},[x,Me,Le,ze,Ne,ke,Ie,Re,q,ie,je,n]),pr=f.exports.useCallback(function(a){a.stopPropagation()},[]),dr=f.exports.useMemo(function(){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=a.refKey,y=l===void 0?"ref":l,b=a.onChange,F=a.onClick,W=te(a,Qr),L=De({accept:$,multiple:u,type:"file",style:{display:"none"},onChange:M(E(b,q)),onClick:M(E(F,pr)),tabIndex:-1},y,A);return g(g({},L),W)}},[A,t,u,q,n]);return g(g({},le),{},{isFocused:ur&&!n,getRootProps:fr,getInputProps:dr,rootRef:x,inputRef:A,open:M(R)})}function st(e,r){switch(r.type){case"focus":return g(g({},e),{},{isFocused:!0});case"blur":return g(g({},e),{},{isFocused:!1});case"openDialog":return g(g({},we),{},{isFileDialogActive:!0});case"closeDialog":return g(g({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return g(g({},e),{},{isDragActive:r.isDragActive,isDragAccept:r.isDragAccept,isDragReject:r.isDragReject});case"setFiles":return g(g({},e),{},{acceptedFiles:r.acceptedFiles,fileRejections:r.fileRejections});case"reset":return g({},we);default:return e}}function Ze(){}const lt="/assets/upload.7ea9ffeb.svg",ct=()=>{const[e,r]=f.exports.useState([]),{getRootProps:t,getInputProps:n,isDragAccept:i}=lr({accept:{"image/*":[]},onDrop:o=>{r(o.map(s=>Object.assign(s,{preview:URL.createObjectURL(s)})))}});return d("div",{children:X("div",{className:"w-full text-center border-dashed border border-secondary-500 rounded-md py-[52px] flex flex-col justify-center items-center",children:[e.length===0&&X("div",{...t({className:"dropzone"}),children:[d("input",{className:"hidden",...n()}),d("img",{src:lt,alt:"",className:"mx-auto mb-4"}),i?d("p",{className:"text-sm text-slate-500 dark:text-slate-300 ",children:"Drop the files here ..."}):d("p",{className:"text-sm text-slate-500 dark:text-slate-300 f",children:"Drop files here or click to upload."})]}),d("div",{className:"flex space-x-4",children:e.map((o,s)=>d("div",{className:"mb-4 flex-none",children:d("div",{className:"h-[300px] w-[300px] mx-auto mt-6 rounded-md",children:d("img",{src:o.preview,className:" object-contain h-full w-full block rounded-md",onLoad:()=>{URL.revokeObjectURL(o.preview)}})})},s))})]})})},ft=()=>{const[e,r]=f.exports.useState(null),[t,n]=f.exports.useState(null),[i,o]=f.exports.useState([]),[s,u]=f.exports.useState([]),m=D=>{r(D.target.files[0])};return X("div",{className:"grid xl:grid-cols-2 grid-cols-1 gap-5",children:[d(T,{title:"File Input Basic",children:d(C,{name:"basic",selectedFile:e,onChange:m})}),d(T,{title:"Multiple Files",children:d(C,{name:"basic",multiple:!0,selectedFiles:i,onChange:D=>{const O=D.target.files,j=Array.from(O).map(_=>_);o(j)}})}),d(T,{title:"File Input Basic With Preview",children:d(C,{name:"basic",selectedFile:t,onChange:D=>{n(D.target.files[0])},preview:!0})}),d(T,{title:"Multiple Files With Preview",children:d(C,{name:"basic",selectedFiles:s,onChange:D=>{const O=D.target.files,j=Array.from(O).map(_=>_);u(j)},multiple:!0,preview:!0})}),d("div",{className:"xl:col-span-2 col-span-1",children:d(T,{title:"File upload",children:d(ct,{})})}),d(T,{title:"Control sizing",children:X("div",{className:"space-y-3",children:[d(C,{placeholder:"Large",className:"h-[48px]",name:"large"}),d(C,{placeholder:"Default",name:"default"}),d(C,{placeholder:"Small",className:"h-[32px]",name:"small"})]})}),d(T,{title:"File Name Formatting",children:d(C,{name:"basic",badge:!0,selectedFile:e,onChange:m})})]})};export{ft as default};
