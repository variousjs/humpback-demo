define("global",["react","react-router-dom","antd"],(function(e,t,n){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},function(t,n){t.exports=e},function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.r(t),n.d(t,"default",(function(){return r}))},function(e,t,n){"use strict";function r(e,t,n,r,o,a,i){try{var u=e[a](i),l=u.value}catch(e){return void n(e)}u.done?t(l):Promise.resolve(l).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var i=e.apply(t,n);function u(e){r(i,o,a,u,l,"next",e)}function l(e){r(i,o,a,u,l,"throw",e)}u(void 0)}))}}n.r(t),n.d(t,"default",(function(){return o}))},function(e,t,n){var r=n(18);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(20)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){"use strict";var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(6)),a=r(n(22)),i=r(n(23)),u=r(n(24)),l=r(n(25)),f={error:i.default,loading:a.default,store:u.default,dispatcher:l.default,container:o.default};t.default=f},function(e,t,n){"use strict";var r=n(7),o=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(3)),i=o(n(9)),u=o(n(10)),l=o(n(2)),f=o(n(26)),c=o(n(11)),s=o(n(27)),d=o(n(12)),p=r(n(1)),m=n(13),A=n(14),h=o(n(15)),v=o(n(4));function y(e){return function(){var t,n=(0,c.default)(e);if(g()){var r=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return(0,f.default)(this,t)}}function g(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var b=function(e){(0,s.default)(n,e);var t=y(n);function n(){var e;(0,i.default)(this,n);for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return e=t.call.apply(t,[this].concat(o)),(0,d.default)((0,l.default)(e),"state",{collapsed:!1,loading:!1}),(0,d.default)((0,l.default)(e),"onCollapse",(function(){var t=e.state.collapsed;e.setState({collapsed:!t})})),(0,d.default)((0,l.default)(e),"onClick",(0,a.default)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=["Lorem","YIpsum","Acciuy","Sahyame"],e.setState({loading:!0}),t.prev=2,t.next=5,e.props.dispatch("card","setName",n[Date.now()%4]);case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(2),A.message.error(t.t0);case 10:e.setState({loading:!1});case 11:case"end":return t.stop()}}),t,null,[[2,7]])})))),e}return(0,u.default)(n,[{key:"render",value:function(){var e=this.state,t=e.collapsed,n=e.loading,r=this.props,o=r.children,a=r.routes,i=r.store;return p.default.createElement(A.Layout,{style:{height:"100vh"}},p.default.createElement(A.Layout.Sider,{trigger:null,collapsible:!0,width:220,collapsed:t},p.default.createElement("div",{className:v.default.logo},t?"":"Humpback"),p.default.createElement(A.Menu,{mode:"inline",theme:"dark",defaultSelectedKeys:["/"]},a.map((function(e){var t=e.name,n=e.path,r=e.icon;return p.default.createElement(A.Menu.Item,null,p.default.createElement(m.Link,{to:"form"===t?"/form/5":n},p.default.createElement("span",{style:{display:"flex",alignItems:"center"}},p.default.createElement(A.Icon,{type:r}),p.default.createElement("span",null,t))))})))),p.default.createElement(A.Layout,null,p.default.createElement(A.Layout.Header,{className:v.default.header},p.default.createElement("div",null,p.default.createElement(A.Icon,{className:"trigger",style:{fontSize:30},type:t?"menu-unfold":"menu-fold",onClick:this.onCollapse}),p.default.createElement(A.Button,{loading:n,style:{marginLeft:10},icon:"edit",onClick:this.onClick},"name")),p.default.createElement("div",null,i.paths.length?"Shortcut:":"",i.paths.map((function(e){return p.default.createElement(m.Link,{key:e,to:e},p.default.createElement(A.Button,{type:"link"},e))}))),p.default.createElement(A.Badge,{count:i.count},p.default.createElement(A.Icon,{type:"bell"}))),p.default.createElement(A.Layout.Content,null,o)))}}]),n}(p.Component),x=function(e){(0,s.default)(n,e);var t=y(n);function n(){return(0,i.default)(this,n),t.apply(this,arguments)}return(0,u.default)(n,[{key:"componentDidMount",value:function(){document.documentElement.classList.remove("loading")}},{key:"render",value:function(){var e=this.props,t=e.Routes,n=e.dispatch,r=e.componentCreator,o=e.CONFIG,a=e.store,i=o.routes.map((function(e){var t=e.path,n=e.components;return p.default.createElement(m.Route,{key:t,exact:!0,path:t,component:function(){var e=n.type,t=n.left,o=n.right;if("index"===e)return p.default.createElement("div",{className:v.default.index},p.default.createElement("div",{className:v.default.left},t.map((function(e){var t=r(e);return p.default.createElement("div",{className:v.default.component},p.default.createElement(t,null))}))),p.default.createElement("div",{className:v.default.right},p.default.createElement(A.Collapse,{bordered:!1,defaultActiveKey:[0]},o.map((function(e,t){var n=r(e);return p.default.createElement(A.Collapse.Panel,{header:e,key:t},p.default.createElement(n,null))})))));if("user"===e){var a=r(t);return p.default.createElement("div",{className:v.default.user},p.default.createElement("div",{className:v.default.left},p.default.createElement(a,null)),p.default.createElement("div",{className:v.default.right},p.default.createElement(A.Tabs,null,o.map((function(e,t){var n=r(e);return p.default.createElement(A.Tabs.TabPane,{tab:e,key:t},p.default.createElement(n,null))})))))}return p.default.createElement("div",{className:v.default.index},n.map((function(e){var t=r(e);return p.default.createElement("div",{style:{width:"100%"},className:v.default.component},p.default.createElement(t,null))})))}})}));return p.default.createElement(b,{routes:o.routes,store:a,dispatch:n},p.default.createElement(t,{components:i}))}}]),n}(p.Component);t.default=x,(0,d.default)(x,"propTypes",{Routes:h.default.element.isRequired,componentCreator:h.default.func.isRequired,CONFIG:h.default.object.isRequired})},function(e,t,n){var r=n(8);function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var u=a?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(n,i,u):n[i]=e[i]}return n.default=e,t&&t.set(e,n),n}},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.r(t),n.d(t,"default",(function(){return r}))},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.r(t),n.d(t,"default",(function(){return o}))},function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.r(t),n.d(t,"default",(function(){return r}))},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),n.d(t,"default",(function(){return r}))},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t,n){e.exports=n(16)()},function(e,t,n){"use strict";var r=n(17);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){(t=e.exports=n(19)(!0)).push([e.i,".logo_2mP2C {\n  color: #fff;\n  font-weight: 600;\n  font-size: 20px;\n  margin: 10px 0 10px 30px;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n.logo_2mP2C::before {\n  content: '#';\n  font-size: 30px;\n  margin-right: 5px;\n}\nsvg {\n  width: 16px;\n  height: 16px;\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 5px;\n}\n.header_KGr7I {\n  background: #fff;\n  padding: 0 30px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.index_3qpV_,\n.user_303xF {\n  display: flex;\n  padding: 20px;\n  align-items: stretch;\n  height: 100%;\n}\n.left_6Lcns,\n.right_3jcd1 {\n  overflow: auto;\n}\n.left_6Lcns {\n  margin-right: 20px;\n}\n.user_303xF .right_3jcd1,\n.index_3qpV_ .left_6Lcns {\n  flex: 1;\n}\n.index_3qpV_ .right_3jcd1,\n.user_303xF .left_6Lcns {\n  width: 400px;\n}\n.index_3qpV_ .left_6Lcns > div {\n  margin-bottom: 20px;\n}\n.component_1562O {\n  margin-bottom: 20px;\n  background: #fff;\n  border-radius: 3px;\n}\n.user_303xF > div {\n  background: #fff;\n}\n","",{version:3,sources:["/Users/am0200/Documents/github/humpback-demo/components/global/global/index.module.less","index.module.less"],names:[],mappings:"AAAA;EACE,WAAA;EACA,gBAAA;EACA,eAAA;EACA,wBAAA;EACA,gDAAA;ACCF;ADCE;EACE,YAAA;EACA,eAAA;EACA,iBAAA;ACCJ;ADEA;EACE,WAAA;EACA,YAAA;EACA,qBAAA;EACA,sBAAA;EACA,iBAAA;ACAF;ADEA;EACE,gBAAA;EACA,eAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;ACAF;ADEA;;EACE,aAAA;EACA,aAAA;EACA,oBAAA;EACA,YAAA;ACCF;ADCA;;EACE,cAAA;ACEF;ADAA;EACE,kBAAA;ACEF;ADAA;;EAEE,OAAA;ACEF;ADAA;;EAEE,YAAA;ACEF;ADAA;EACE,mBAAA;ACEF;ADAA;EACE,mBAAA;EACA,gBAAA;EACA,kBAAA;ACEF;ADAA;EACE,gBAAA;ACEF",file:"index.module.less",sourcesContent:[".logo {\n  color: #fff;\n  font-weight: 600;\n  font-size: 20px;\n  margin: 10px 0 10px 30px;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n\n  &::before {\n    content: '#';\n    font-size: 30px;\n    margin-right: 5px;\n  }\n}\nsvg {\n  width: 16px;\n  height: 16px;\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 5px;\n}\n.header {\n  background: #fff;\n  padding: 0 30px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.index, .user {\n  display: flex;\n  padding: 20px;\n  align-items: stretch;\n  height: 100%;\n}\n.left, .right {\n  overflow: auto;\n}\n.left {\n  margin-right: 20px;\n}\n.user .right,\n.index .left {\n  flex: 1;\n}\n.index .right,\n.user .left {\n  width: 400px;\n}\n.index .left > div {\n  margin-bottom: 20px;\n}\n.component {\n  margin-bottom: 20px;\n  background: #fff;\n  border-radius: 3px;\n}\n.user > div {\n  background: #fff;\n}\n",".logo {\n  color: #fff;\n  font-weight: 600;\n  font-size: 20px;\n  margin: 10px 0 10px 30px;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n.logo::before {\n  content: '#';\n  font-size: 30px;\n  margin-right: 5px;\n}\nsvg {\n  width: 16px;\n  height: 16px;\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 5px;\n}\n.header {\n  background: #fff;\n  padding: 0 30px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.index,\n.user {\n  display: flex;\n  padding: 20px;\n  align-items: stretch;\n  height: 100%;\n}\n.left,\n.right {\n  overflow: auto;\n}\n.left {\n  margin-right: 20px;\n}\n.user .right,\n.index .left {\n  flex: 1;\n}\n.index .right,\n.user .left {\n  width: 400px;\n}\n.index .left > div {\n  margin-bottom: 20px;\n}\n.component {\n  margin-bottom: 20px;\n  background: #fff;\n  border-radius: 3px;\n}\n.user > div {\n  background: #fff;\n}\n"]}]),t.locals={logo:"logo_2mP2C",header:"header_KGr7I",index:"index_3qpV_",user:"user_303xF",left:"left_6Lcns",right:"right_3jcd1",component:"component_1562O"}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),a=r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}));return[n].concat(a).concat([o]).join("\n")}var i;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(o=0;o<e.length;o++){var i=e[o];null!=i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){var r,o,a={},i=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),u=function(e,t){return t?t.querySelector(e):document.querySelector(e)},l=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=u.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),f=null,c=0,s=[],d=n(21);function p(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=a[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(g(r.parts[i],t))}else{var u=[];for(i=0;i<r.parts.length;i++)u.push(g(r.parts[i],t));a[r.id]={id:r.id,refs:1,parts:u}}}}function m(e,t){for(var n=[],r={},o=0;o<e.length;o++){var a=e[o],i=t.base?a[0]+t.base:a[0],u={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(u):n.push(r[i]={id:i,parts:[u]})}return n}function A(e,t){var n=l(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=s[s.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),s.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=l(e.insertAt.before,n);n.insertBefore(t,o)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=s.indexOf(e);t>=0&&s.splice(t,1)}function v(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return y(t,e.attrs),A(e,t),t}function y(e,t){Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])}))}function g(e,t){var n,r,o,a;if(t.transform&&e.css){if(!(a="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=a}if(t.singleton){var i=c++;n=f||(f=v(t)),r=E.bind(null,n,i,!1),o=E.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",y(t,e.attrs),A(e,t),t}(t),r=_.bind(null,n,t),o=function(){h(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(t),r=C.bind(null,n),o=function(){h(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=m(e,t);return p(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var i=n[o];(u=a[i.id]).refs--,r.push(u)}e&&p(m(e,t),t);for(o=0;o<r.length;o++){var u;if(0===(u=r[o]).refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete a[u.id]}}}};var b,x=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function E(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function C(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function _(e,t,n){var r=n.css,o=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||a)&&(r=d(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([r],{type:"text/css"}),u=e.href;e.href=URL.createObjectURL(i),u&&URL.revokeObjectURL(u)}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var o,a=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(o=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}},function(e,t,n){"use strict";var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(1));t.default=function(){return o.default.createElement("div",{style:{display:"flex",alignItems:"center",color:"#666",fontSize:16,height:"100%",justifyContent:"center"}},"Loading")}},function(e,t,n){"use strict";var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.error,n=e.reload;return o.default.createElement("div",{className:a.default.error},o.default.createElement("p",null,t),o.default.createElement("button",{type:"button",onClick:n},"Reload"))};var o=r(n(1)),a=r(n(4))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={count:17,paths:[]}},function(e,t,n){"use strict";var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=r(n(3)),i={setCount:(o=(0,a.default)(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.dispatch,e.next=3,new Promise((function(e){return setTimeout(e,300)}));case 3:r({count:Number(n)});case 4:case"end":return e.stop()}}),e)}))),function(e,t){return o.apply(this,arguments)}),savePath:function(e,t){var n=e.dispatch,r=(0,e.getStore)().paths;r.includes(t)||r.push(t),n({paths:r})}};t.default=i},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.r(t),n.d(t,"default",(function(){return a}));var o=n(2);function a(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?Object(o.default)(e):t}},function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.r(t),n.d(t,"default",(function(){return o}))}]).default}));
//# sourceMappingURL=index.js.map