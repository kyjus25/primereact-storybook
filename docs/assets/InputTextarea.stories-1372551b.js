import{r as l}from"./index-76fb7be0.js";import{P as N,O as p,m as C,c as k,D as b}from"./api.esm-2e2d159c.js";import{C as M,u as V}from"./componentbase.esm-b0caea1e.js";import{K as v}from"./keyfilter.esm-d0e9408b.js";import{T as W}from"./tooltip.esm-ca4db4c1.js";import"./_commonjsHelpers-de833af9.js";import"./hooks.esm-c93f10ee.js";import"./portal.esm-c66f0cf3.js";import"./index-d3ea75b5.js";function h(){return h=Object.assign?Object.assign.bind():function(o){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(o[e]=n[e])}return o},h.apply(this,arguments)}function c(o){"@babel/helpers - typeof";return c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(o)}function Y(o,t){if(c(o)!=="object"||o===null)return o;var n=o[Symbol.toPrimitive];if(n!==void 0){var e=n.call(o,t||"default");if(c(e)!=="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(o)}function $(o){var t=Y(o,"string");return c(t)==="symbol"?t:String(t)}function q(o,t,n){return t=$(t),t in o?Object.defineProperty(o,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):o[t]=n,o}var A={root:function(t){var n=t.props,e=t.isFilled;return k("p-inputtextarea p-inputtext p-component",{"p-disabled":n.disabled,"p-filled":e,"p-inputtextarea-resizable":n.autoResize},n.className)}},G=`
@layer primereact {
    .p-inputtextarea-resizable {
        overflow: hidden;
        resize: none;
    }
    
    .p-fluid .p-inputtextarea {
        width: 100%;
    }
}
`,m=M.extend({defaultProps:{__TYPE:"InputTextarea",__parentMetadata:null,autoResize:!1,keyfilter:null,onBlur:null,onFocus:null,onBeforeInput:null,onInput:null,onKeyDown:null,onKeyUp:null,onPaste:null,tooltip:null,tooltipOptions:null,validateOnly:!1,children:void 0},css:{classes:A,styles:G}});function O(o,t){var n=Object.keys(o);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(o);t&&(e=e.filter(function(s){return Object.getOwnPropertyDescriptor(o,s).enumerable})),n.push.apply(n,e)}return n}function x(o){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?O(Object(n),!0).forEach(function(e){q(o,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(n,e))})}return o}var I=l.memo(l.forwardRef(function(o,t){var n=l.useContext(N),e=m.getProps(o,n),s=l.useRef(t),f=l.useRef(0),d=m.setMetaData(x(x({props:e},e.__parentMetadata),{},{context:{disabled:e.disabled}})),g=d.ptm,E=d.cx,K=d.isUnstyled;V(m.css.styles,K,{name:"inputtextarea"});var B=function(i){e.autoResize&&u(),e.onFocus&&e.onFocus(i)},D=function(i){e.autoResize&&u(),e.onBlur&&e.onBlur(i)},F=function(i){e.autoResize&&u(),e.onKeyUp&&e.onKeyUp(i)},R=function(i){e.onKeyDown&&e.onKeyDown(i),e.keyfilter&&v.onKeyPress(i,e.keyfilter,e.validateOnly)},_=function(i){e.onBeforeInput&&e.onBeforeInput(i),e.keyfilter&&v.onBeforeInput(i,e.keyfilter,e.validateOnly)},z=function(i){e.onPaste&&e.onPaste(i),e.keyfilter&&v.onPaste(i,e.keyfilter,e.validateOnly)},S=function(i){var r=i.target;e.autoResize&&u(p.isEmpty(r.value)),e.onInput&&e.onInput(i),p.isNotEmpty(r.value)?b.addClass(r,"p-filled"):b.removeClass(r,"p-filled")},u=function(i){var r=s.current;r&&b.isVisible(r)&&(f.current||(f.current=r.scrollHeight,r.style.overflow="hidden"),(f.current!==r.scrollHeight||i)&&(r.style.height="",r.style.height=r.scrollHeight+"px",parseFloat(r.style.height)>=parseFloat(r.style.maxHeight)?(r.style.overflowY="scroll",r.style.height=r.style.maxHeight):r.style.overflow="hidden",f.current=r.scrollHeight))};l.useEffect(function(){p.combinedRefs(s,t)},[s,t]),l.useEffect(function(){e.autoResize&&u(!0)},[e.autoResize]);var T=l.useMemo(function(){return p.isNotEmpty(e.value)||p.isNotEmpty(e.defaultValue)},[e.value,e.defaultValue]),U=p.isNotEmpty(e.tooltip),H=C({ref:s,className:E("root",{isFilled:T}),onFocus:B,onBlur:D,onKeyUp:F,onKeyDown:R,onBeforeInput:_,onInput:S,onPaste:z},m.getOtherProps(e),g("root"));return l.createElement(l.Fragment,null,l.createElement("textarea",H),U&&l.createElement(W,h({target:s,content:e.tooltip},e.tooltipOptions,{pt:g("tooltip")})))}));I.displayName="InputTextarea";const re={title:"Form/InputTextarea",component:I,parameters:{layout:"centered"},argTypes:{autoResize:{control:"boolean",description:"When present, height of textarea changes as being typed.",options:null},children:{control:"text",description:"Used to get the child elements of the component.",options:null},keyfilter:{control:"object",description:"Format definition of the keys to block.",options:null},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},tooltip:{control:"text",description:"Content of the tooltip.",options:null},tooltipOptions:{control:"object",description:"Configuration of the tooltip, refer to the tooltip documentation for more information.",options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null},value:{control:"text",description:"The value of component",options:null}}},y={args:{value:0,unstyled:!1}};var P,w,j;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    "value": 0,
    "unstyled": false
  }
}`,...(j=(w=y.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};const ie=["Default"];export{y as Default,ie as __namedExportsOrder,re as default};
//# sourceMappingURL=InputTextarea.stories-1372551b.js.map
