webpackJsonp([0xf5955e1b2f4c],{230:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(){return{id:v++,span:3,rowSpan:1,offset:0}}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d=n(2),f=r(d),c=n(4),p=n(5),m=n(231),g=r(m),h=n(234),b=r(h),v=1,_=function(e){function t(){var n,r,a;i(this,t);for(var l=arguments.length,d=Array(l),f=0;f<l;f++)d[f]=arguments[f];return n=r=o(this,e.call.apply(e,[this].concat(d))),r.state={gridItems:[u(),u(),u(),u()]},r.handleAddGridItem=function(){r.setState(function(e){var t=e.gridItems;return{gridItems:[].concat(t,[u()])}})},r.handleGridItemUpdate=function(e,t){var n=r.state.gridItems.findIndex(function(t){return t.id===e}),a=s({},r.state.gridItems[n],t);r.setState({gridItems:[].concat(r.state.gridItems.slice(0,n),[a],r.state.gridItems.slice(n+1))})},a=n,o(r,a)}return l(t,e),t.prototype.render=function(){var e=this;return f.default.createElement(c.Grid,{gutter:"md"},f.default.createElement(c.GridItem,{span:9},f.default.createElement(c.Grid,{gutter:"sm"},this.state.gridItems.map(function(e){var t=e.id,n=a(e,["id"]);return f.default.createElement(c.GridItem,s({key:t},n,{className:(0,p.css)(g.default.item)}),t)}))),f.default.createElement(c.GridItem,{span:3,className:(0,p.css)(g.default.controlPanel)},f.default.createElement(c.Button,{isBlock:!0,onClick:this.handleAddGridItem},"Add Item"),f.default.createElement("div",{className:(0,p.css)(g.default.controlList)},this.state.gridItems.map(function(t){return f.default.createElement(b.default,s({key:t.id,onUpdateItem:e.handleGridItemUpdate},t))}))))},t}(f.default.Component);_.title="Grid Playground",_.live=!1,t.default=_,_.__docgenInfo={description:"",displayName:"GridPlayground"},e.exports=t.default},231:function(e,t,n){"use strict";t.__esModule=!0;var r=n(5),a=n(7);t.default=r.StyleSheet.create({item:{minHeight:75,padding:a.global_spacer_xs.var,border:a.global_BorderWidth_md.var+" dashed "+a.global_BorderColor.var},controlPanel:{position:"relative",minHeight:400},controlList:{position:"absolute",top:40,left:0,right:0,bottom:0,overflowY:"auto"}}),e.exports=t.default},234:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(2),u=r(l),s=n(6),d=r(s),f=n(5),c=n(235),p=r(c),m=n(236),g=r(m),h=d.default.oneOfType([d.default.string,d.default.number]),b={id:d.default.number.isRequired,span:h.isRequired,offset:h.isRequired,rowSpan:h.isRequired,onUpdateItem:d.default.func.isRequired},v=function(e){function t(){var n,r,o;a(this,t);for(var l=arguments.length,u=Array(l),s=0;s<l;s++)u[s]=arguments[s];return n=r=i(this,e.call.apply(e,[this].concat(u))),r.handleSpanChange=function(e){var t=r.props,n=t.id,a=t.onUpdateItem;a(n,{span:e.currentTarget.value})},r.handleOffsetChange=function(e){var t=r.props,n=t.id,a=t.onUpdateItem;a(n,{offset:e.currentTarget.value})},r.handleRowSpanChange=function(e){var t=r.props,n=t.id,a=t.onUpdateItem;a(n,{rowSpan:e.currentTarget.value})},o=n,i(r,o)}return o(t,e),t.prototype.render=function(){var e=this.props,t=e.id,n=e.span,r=e.offset,a=e.rowSpan;return u.default.createElement("div",{className:(0,f.css)(p.default.itemControl)},u.default.createElement("div",null,t),u.default.createElement(g.default,{id:"grid-item-"+t+"-span",label:"Span",value:n,onChange:this.handleSpanChange}),u.default.createElement(g.default,{id:"grid-item-"+t+"-row-span",label:"Row Span",min:1,value:a,onChange:this.handleRowSpanChange}),u.default.createElement(g.default,{id:"grid-item-"+t+"-offset",label:"Offset",min:0,value:r,onChange:this.handleOffsetChange}))},t}(u.default.Component);v.propTypes=b,t.default=v,v.__docgenInfo={description:"",displayName:"ItemControl",props:{id:{type:{name:"number"},required:!0,description:""},span:{type:{name:"custom",raw:"StringOrNumber.isRequired"},required:!1,description:""},offset:{type:{name:"custom",raw:"StringOrNumber.isRequired"},required:!1,description:""},rowSpan:{type:{name:"custom",raw:"StringOrNumber.isRequired"},required:!1,description:""},onUpdateItem:{type:{name:"func"},required:!0,description:""}}},e.exports=t.default},235:function(e,t,n){"use strict";t.__esModule=!0;var r=n(5),a=n(7);t.default=r.StyleSheet.create({itemControl:{fontSize:a.global_FontSize_xs.var,padding:a.global_spacer_xs.var,border:a.global_BorderWidth_sm.var+" solid "+a.global_BorderColor.var,marginBottom:a.global_spacer_xs.var},label:{fontSize:a.global_FontSize_xs.var},value:{fontSize:a.global_FontSize_xs.var,textAlign:"center"},rangeInput:{width:"100%"}}),e.exports=t.default},236:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(2),i=r(a),o=n(6),l=r(o),u=n(5),s=n(237),d=r(s),f=n(4),c={id:l.default.string.isRequired,label:l.default.string.isRequired,value:l.default.oneOfType([l.default.number,l.default.string]).isRequired,onChange:l.default.func.isRequired,min:l.default.number},p={min:3},m=function(e){var t=e.label,n=e.id,r=e.onChange,a=e.min,o=e.value;return i.default.createElement(f.Grid,{className:(0,u.css)(d.default.spanSlider)},i.default.createElement(f.GridItem,{span:4,className:(0,u.css)(d.default.label)},i.default.createElement("label",{htmlFor:n},t)),i.default.createElement(f.GridItem,{span:7},i.default.createElement("input",{id:n,className:(0,u.css)(d.default.rangeInput),type:"range",min:a,max:12,value:o,onChange:r})),i.default.createElement(f.GridItem,{span:1,className:(0,u.css)(d.default.value)},o))};m.propTypes=c,m.defaultProps=p,t.default=m,m.__docgenInfo={description:"",props:{id:{type:{name:"string"},required:!0,description:""},label:{type:{name:"string"},required:!0,description:""},value:{type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!0,description:""},onChange:{type:{name:"func"},required:!0,description:""},min:{type:{name:"number"},required:!1,description:"",defaultValue:{value:"3",computed:!1}}}},e.exports=t.default},237:function(e,t,n){"use strict";t.__esModule=!0;var r=n(5),a=n(7);t.default=r.StyleSheet.create({spanSlider:{marginBottom:a.global_spacer_xs.var},label:{fontSize:a.global_FontSize_xs.var,lineHeight:a.global_LineHeight_sm.var},value:{fontSize:a.global_FontSize_xs.var,textAlign:"center"},rangeInput:{width:"100%"}}),e.exports=t.default}});
//# sourceMappingURL=component---react-core-src-layouts-grid-examples-grid-playground-js-29506e80f1f76cbc7ba7.js.map