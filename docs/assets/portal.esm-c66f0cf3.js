import{r as s}from"./index-76fb7be0.js";import{R as P}from"./index-d3ea75b5.js";import{P as b,D as d,b as v,O as p}from"./api.esm-2e2d159c.js";import{d as g,e as h,f as _}from"./hooks.esm-c93f10ee.js";function A(e){if(Array.isArray(e))return e}function M(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,l,u,i,o=[],a=!0,c=!1;try{if(u=(r=r.call(e)).next,t===0){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=u.call(r)).done)&&(o.push(n.value),o.length!==t);a=!0);}catch(y){c=!0,l=y}finally{try{if(!a&&r.return!=null&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw l}}return o}}function m(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function S(e,t){if(e){if(typeof e=="string")return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}}function O(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(e,t){return A(e)||M(e,t)||S(e,t)||O()}var f={defaultProps:{__TYPE:"Portal",element:null,appendTo:null,visible:!1,onMounted:null,onUnmounted:null,children:void 0},getProps:function(t){return p.getMergedProps(t,f.defaultProps)},getOtherProps:function(t){return p.getDiffProps(t,f.defaultProps)}},R=s.memo(function(e){var t=f.getProps(e),r=s.useContext(b),n=s.useState(t.visible&&d.isClient()),l=T(n,2),u=l[0],i=l[1];g(function(){d.isClient()&&!u&&(i(!0),t.onMounted&&t.onMounted())}),h(function(){t.onMounted&&t.onMounted()},[u]),_(function(){t.onUnmounted&&t.onUnmounted()});var o=t.element||t.children;if(o&&u){var a=t.appendTo||r&&r.appendTo||v.appendTo||document.body;return a==="self"?o:P.createPortal(o,a)}return null});R.displayName="Portal";export{R as P};
//# sourceMappingURL=portal.esm-c66f0cf3.js.map