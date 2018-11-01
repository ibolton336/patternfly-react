webpackJsonp([7753377839486,0x6fdb33f702ab],{767:function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}o.__esModule=!0;var r=n(4),i=n(169),a=t(i);o.default={title:"LoginBox",components:{LoginBox:r.LoginBox,LoginBoxHeader:r.LoginBoxHeader,LoginBoxBody:r.LoginBoxBody,LoginBoxFooter:r.LoginBoxFooter},examples:[a.default]},e.exports=o.default},169:function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function r(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function i(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o}function a(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)}o.__esModule=!0;var l=n(2),f=t(l),u=n(4),p=function(e){function o(){return r(this,o),i(this,e.apply(this,arguments))}return a(o,e),o.prototype.render=function(){return f.default.createElement(u.LoginBox,null,f.default.createElement(u.LoginBoxHeader,null,"LoginBox Header"),f.default.createElement(u.LoginBoxBody,null,"LoginBox Body"),f.default.createElement(u.LoginBoxFooter,null,"LoginBox Footer"))},o}(f.default.Component);p.title="Simple LoginBox",o.default=p,p.__docgenInfo={description:"",displayName:"SimpleLoginBox"},e.exports=o.default},613:function(e,o){e.exports="import React from 'react';\nimport { LoginBox, LoginBoxHeader, LoginBoxBody, LoginBoxFooter } from '@patternfly/react-core';\n\nclass SimpleLoginBox extends React.Component {\n  static title = 'Simple LoginBox';\n\n  render() {\n    return (\n      <LoginBox>\n        <LoginBoxHeader>LoginBox Header</LoginBoxHeader>\n        <LoginBoxBody>LoginBox Body</LoginBoxBody>\n        <LoginBoxFooter>LoginBox Footer</LoginBoxFooter>\n      </LoginBox>\n    );\n  }\n}\n\nexport default SimpleLoginBox;\n"},878:function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}o.__esModule=!0;var r=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},i=n(2),a=t(i),l=n(767),f=t(l),u=n(15),p=t(u),c=[{name:"SimpleLoginBox",path:"../../react-core/src/components/LoginBox/examples/SimpleLoginBox.js",file:n(613)}],g=[{name:"pf_logo.svg",file:n(10)},{name:"pf_mini_logo_white.svg",file:n(11)},{name:"img_avatar.png",file:n(13)},{name:"pf_logo.svg",file:n(14)},{name:"img_avatar.png",file:n(8)},{name:"l_pf-reverse-164x11.png",file:n(9)},{name:"pfbg_992.jpg",file:n(12)}];o.default=function(){return a.default.createElement(p.default,r({rawExamples:c,images:g},f.default))},e.exports=o.default}});
//# sourceMappingURL=component---tmp-login-box-docs-js-51b7719d9143be60c349.js.map