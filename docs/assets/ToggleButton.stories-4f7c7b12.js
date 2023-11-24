import{r as n}from"./index-76fb7be0.js";import{P as U,D as w,O as R,m,c as P,I as K}from"./api.esm-2e2d159c.js";import{d as z}from"./hooks.esm-c93f10ee.js";import{R as Y}from"./ripple.esm-cba91116.js";import{T as H}from"./tooltip.esm-ca4db4c1.js";import{C as M,u as J}from"./componentbase.esm-b0caea1e.js";import"./_commonjsHelpers-de833af9.js";import"./portal.esm-c66f0cf3.js";import"./index-d3ea75b5.js";function b(){return b=Object.assign?Object.assign.bind():function(o){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&(o[e]=i[e])}return o},b.apply(this,arguments)}function l(o){"@babel/helpers - typeof";return l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(o)}function W(o,t){if(l(o)!=="object"||o===null)return o;var i=o[Symbol.toPrimitive];if(i!==void 0){var e=i.call(o,t||"default");if(l(e)!=="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(o)}function X(o){var t=W(o,"string");return l(t)==="symbol"?t:String(t)}function $(o,t,i){return t=X(t),t in o?Object.defineProperty(o,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[t]=i,o}var q={label:"p-button-label",icon:function(t){var i=t.props,e=t.label;return P("p-button-icon p-c",{"p-button-icon-left":i.iconPos==="left"&&e,"p-button-icon-right":i.iconPos==="right"&&e})},root:function(t){var i=t.props,e=t.hasIcon,p=t.hasLabel;return P("p-button p-togglebutton p-component",{"p-button-icon-only":e&&!p,"p-highlight":i.checked,"p-disabled":i.disabled},i.className)}},c=M.extend({defaultProps:{__TYPE:"ToggleButton",id:null,onIcon:null,offIcon:null,onLabel:"Yes",offLabel:"No",iconPos:"left",style:null,className:null,checked:!1,tabIndex:0,tooltip:null,tooltipOptions:null,onChange:null,onFocus:null,onBlur:null,children:void 0},css:{classes:q}});function O(o,t){var i=Object.keys(o);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(o);t&&(e=e.filter(function(p){return Object.getOwnPropertyDescriptor(o,p).enumerable})),i.push.apply(i,e)}return i}function A(o){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?O(Object(i),!0).forEach(function(e){$(o,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):O(Object(i)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(i,e))})}return o}var j=n.memo(n.forwardRef(function(o,t){var i=n.useContext(U),e=c.getProps(o,i),p=n.useRef(null),f=c.setMetaData({props:e}),a=f.ptm,d=f.cx,E=f.isUnstyled;J(c.css.styles,E,{name:"togglebutton"});var g=e.onLabel&&e.onLabel.length>0&&e.offLabel&&e.offLabel.length>0,h=e.onIcon&&e.offIcon,y=g?e.checked?e.onLabel:e.offLabel:"&nbsp;",D=e.checked?e.onIcon:e.offIcon,v=function(r){!e.disabled&&e.onChange&&e.onChange({originalEvent:r,value:!e.checked,stopPropagation:function(){r.stopPropagation()},preventDefault:function(){r.preventDefault()},target:{name:e.name,id:e.id,value:!e.checked}})},S=function(r){r.keyCode===32&&(v(r),r.preventDefault())},B=function(){if(h){var r=m({className:d("icon",{label:y})},a("icon"));return K.getJSXIcon(D,A({},r),{props:e})}return null};n.useImperativeHandle(t,function(){return{props:e,focus:function(){return w.focusFirstElement(p.current)},getElement:function(){return p.current}}}),z(function(){e.autoFocus&&w.focusFirstElement(p.current)});var T=R.isNotEmpty(e.tooltip),N=e.disabled?-1:e.tabIndex,C=B(),_=m({className:d("label")},a("label")),k=m({ref:p,id:e.id,className:d("root",{hasIcon:h,hasLabel:g}),style:e.style,onClick:v,onFocus:e.onFocus,onBlur:e.onBlur,onKeyDown:S,tabIndex:N,role:"button","aria-pressed":e.checked},c.getOtherProps(e),a("root"));return n.createElement(n.Fragment,null,n.createElement("div",k,C,n.createElement("span",_,y),n.createElement(Y,null)),T&&n.createElement(H,b({target:p,content:e.tooltip},e.tooltipOptions,{pt:a("tooltip")})))}));j.displayName="ToggleButton";const pe={title:"Form/ToggleButton",component:j,parameters:{layout:"centered"},argTypes:{checked:{control:"boolean",description:"Specifies the on/off state of the button.",options:null},children:{control:"text",description:"Used to get the child elements of the component.",options:null},iconPos:{control:"select",description:'Position of the icon, valid values are "left" and "right".',options:["left","right"]},offIcon:{control:"select",description:"Icon for the off state.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},offLabel:{control:"text",description:"Label for the off state.",options:null},onIcon:{control:"select",description:"Icon for the on state.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},onLabel:{control:"text",description:"Label for the on state.",options:null},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},tooltip:{control:"text",description:"Content of the tooltip.",options:null},tooltipOptions:{control:"object",description:"Configuration of the tooltip, refer to the tooltip documentation for more information.",options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null}}},u={args:{onLabel:"Yes",offLabel:"No",unstyled:!1}};var I,x,L;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    "onLabel": "Yes",
    "offLabel": "No",
    "unstyled": false
  }
}`,...(L=(x=u.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};const re=["Default"];export{u as Default,re as __namedExportsOrder,pe as default};
//# sourceMappingURL=ToggleButton.stories-4f7c7b12.js.map
