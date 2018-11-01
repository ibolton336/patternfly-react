webpackJsonp([0xd9c03023b7a5,0xd326c87e19d9],{727:function(e,a,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}a.__esModule=!0;var r=n(4),g=n(141),s=t(g);a.default={title:"Background Image",components:{BackgroundImage:r.BackgroundImage},enumValues:{"Object.values(BackgroundImageSrc)":Object.values(r.BackgroundImageSrc)},examples:[s.default],fullPageOnly:!0},e.exports=a.default},141:function(e,a,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function r(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function g(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}function s(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}a.__esModule=!0;var o,c=n(2),u=t(c),m=n(4),i=(o={},o[m.BackgroundImageSrc.lg]="/assets/images/pfbg_1200.jpg",o[m.BackgroundImageSrc.md]="/assets/images/pfbg_992.jpg",o[m.BackgroundImageSrc.md2x]="/assets/images/pfbg_992@2x.jpg",o[m.BackgroundImageSrc.sm]="/assets/images/pfbg_768.jpg",o[m.BackgroundImageSrc.sm2x]="/assets/images/pfbg_768@2x.jpg",o[m.BackgroundImageSrc.xl]="/assets/images/pfbg_2000.jpg",o[m.BackgroundImageSrc.xs]="/assets/images/pfbg_576.jpg",o[m.BackgroundImageSrc.xs2x]="/assets/images/pfbg_576@2x.jpg",o[m.BackgroundImageSrc.filter]="/assets/images/background-filter.svg#image_overlay",o),p=function(e){function a(){return r(this,a),g(this,e.apply(this,arguments))}return s(a,e),a.prototype.render=function(){return u.default.createElement(m.BackgroundImage,{src:i})},a}(u.default.Component);p.title="Simple Background Image",a.default=p,p.__docgenInfo={description:"",displayName:"SimpleBackgroundImage"},e.exports=a.default},587:function(e,a){e.exports="import React from 'react';\nimport { BackgroundImage, BackgroundImageSrc } from '@patternfly/react-core';\n\n/**\n * Note: When using background-filter.svg, you must also include #image_overlay as the fragment identifier\n */\nconst images = {\n  [BackgroundImageSrc.lg]: '/assets/images/pfbg_1200.jpg',\n  [BackgroundImageSrc.md]: '/assets/images/pfbg_992.jpg',\n  [BackgroundImageSrc.md2x]: '/assets/images/pfbg_992@2x.jpg',\n  [BackgroundImageSrc.sm]: '/assets/images/pfbg_768.jpg',\n  [BackgroundImageSrc.sm2x]: '/assets/images/pfbg_768@2x.jpg',\n  [BackgroundImageSrc.xl]: '/assets/images/pfbg_2000.jpg',\n  [BackgroundImageSrc.xs]: '/assets/images/pfbg_576.jpg',\n  [BackgroundImageSrc.xs2x]: '/assets/images/pfbg_576@2x.jpg',\n  [BackgroundImageSrc.filter]: '/assets/images/background-filter.svg#image_overlay'\n};\n\nclass SimpleBackgroundImage extends React.Component {\n  static title = 'Simple Background Image';\n\n  render() {\n    return <BackgroundImage src={images} />;\n  }\n};\n\nexport default SimpleBackgroundImage;\n"},863:function(e,a,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}a.__esModule=!0;var r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},g=n(2),s=t(g),o=n(727),c=t(o),u=n(15),m=t(u),i=[{name:"SimpleBackgroundImage",path:"../../react-core/src/components/BackgroundImage/examples/SimpleBackgroundImage.js",file:n(587)}],p=[{name:"pf_logo.svg",file:n(10)},{name:"pf_mini_logo_white.svg",file:n(11)},{name:"img_avatar.png",file:n(13)},{name:"pf_logo.svg",file:n(14)},{name:"img_avatar.png",file:n(8)},{name:"l_pf-reverse-164x11.png",file:n(9)},{name:"pfbg_992.jpg",file:n(12)}];a.default=function(){return s.default.createElement(m.default,r({rawExamples:i,images:p},c.default))},e.exports=a.default}});
//# sourceMappingURL=component---tmp-background-image-docs-js-e501f7df5aea8e06b9ed.js.map