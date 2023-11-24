import{r as i}from"./index-76fb7be0.js";import{P as te,D as v,O as P,m as b,I as ne,c as S}from"./api.esm-2e2d159c.js";import{e as oe,d as re}from"./hooks.esm-c93f10ee.js";import{C as ie}from"./index.esm-5bc749e4.js";import{T as ce}from"./tooltip.esm-ca4db4c1.js";import{C as le,u as ae}from"./componentbase.esm-b0caea1e.js";import"./_commonjsHelpers-de833af9.js";import"./iconbase.esm-439d6f79.js";import"./portal.esm-c66f0cf3.js";import"./index-d3ea75b5.js";function y(){return y=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e])}return t},y.apply(this,arguments)}function g(t){"@babel/helpers - typeof";return g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},g(t)}function se(t,n){if(g(t)!=="object"||t===null)return t;var o=t[Symbol.toPrimitive];if(o!==void 0){var e=o.call(t,n||"default");if(g(e)!=="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function pe(t){var n=se(t,"string");return g(n)==="symbol"?n:String(n)}function ue(t,n,o){return n=pe(n),n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t}function de(t){if(Array.isArray(t))return t}function fe(t,n){var o=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(o!=null){var e,l,m,p,d=[],u=!0,a=!1;try{if(m=(o=o.call(t)).next,n===0){if(Object(o)!==o)return;u=!1}else for(;!(u=(e=m.call(o)).done)&&(d.push(e.value),d.length!==n);u=!0);}catch(h){a=!0,l=h}finally{try{if(!u&&o.return!=null&&(p=o.return(),Object(p)!==p))return}finally{if(a)throw l}}return d}}function R(t,n){(n==null||n>t.length)&&(n=t.length);for(var o=0,e=new Array(n);o<n;o++)e[o]=t[o];return e}function me(t,n){if(t){if(typeof t=="string")return R(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);if(o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set")return Array.from(t);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return R(t,n)}}function he(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function be(t,n){return de(t)||fe(t,n)||me(t,n)||he()}var ye={icon:"p-checkbox-icon p-c",input:function(n){var o=n.props,e=n.checked,l=n.focusedState;return S("p-checkbox-box",{"p-highlight":e,"p-disabled":o.disabled,"p-focus":l})},root:function(n){var o=n.props,e=n.checked,l=n.focusedState;return S("p-checkbox p-component",{"p-checkbox-checked":e,"p-checkbox-disabled":o.disabled,"p-checkbox-focused":l})}},ge=`
.p-checkbox {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    vertical-align: bottom;
    position: relative;
}

.p-checkbox.p-checkbox-disabled {
    cursor: auto;
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
}        
`,k=le.extend({defaultProps:{__TYPE:"Checkbox",autoFocus:!1,checked:!1,className:null,disabled:!1,falseValue:!1,icon:null,id:null,inputId:null,inputRef:null,name:null,onChange:null,onClick:null,onContextMenu:null,onMouseDown:null,readOnly:!1,required:!1,style:null,tabIndex:null,tooltip:null,tooltipOptions:null,trueValue:!0,value:null,children:void 0},css:{classes:ye,styles:ge}});function M(t,n){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable})),o.push.apply(o,e)}return o}function T(t){for(var n=1;n<arguments.length;n++){var o=arguments[n]!=null?arguments[n]:{};n%2?M(Object(o),!0).forEach(function(e){ue(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):M(Object(o)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}var F=i.memo(i.forwardRef(function(t,n){var o=i.useContext(te),e=k.getProps(t,o),l=i.useState(!1),m=be(l,2),p=m[0],d=m[1],u=k.setMetaData({props:e,state:{focused:p},context:{checked:e.checked===e.trueValue,disabled:e.disabled}}),a=u.ptm,h=u.cx,U=u.isUnstyled;ae(k.css.styles,U,{name:"checkbox",styled:!0});var O=i.useRef(null),s=i.useRef(e.inputRef),C=function(r){if(!(e.disabled||e.readOnly)&&(e.onChange||e.onClick)){var E=w(),G=r.target instanceof HTMLDivElement||r.target instanceof HTMLSpanElement||r.target instanceof Object,Q=r.target===s.current,Z=G&&r.target.checked!==E;if(Q||Z){var D=E?e.falseValue:e.trueValue,_={originalEvent:r,value:e.value,checked:D,stopPropagation:function(){r.stopPropagation()},preventDefault:function(){r.preventDefault()},target:{type:"checkbox",name:e.name,id:e.id,value:e.value,checked:D}};if(e.onClick&&e.onClick(_),r.defaultPrevented)return;e.onChange&&e.onChange(_)}v.focus(s.current),r.preventDefault()}},W=function(){d(!0)},B=function(){d(!1)},K=function(r){(r.code==="Space"||r.key===" ")&&C(r)},w=function(){return e.checked===e.trueValue};i.useImperativeHandle(n,function(){return{props:e,focus:function(){return v.focus(s.current)},getElement:function(){return O.current},getInput:function(){return s.current}}}),i.useEffect(function(){P.combinedRefs(s,e.inputRef)},[s,e.inputRef]),oe(function(){s.current.checked=w()},[e.checked,e.trueValue]),re(function(){e.autoFocus&&v.focus(s.current,e.autoFocus)});var f=w(),H=P.isNotEmpty(e.tooltip),j=k.getOtherProps(e),q=P.reduceKeys(j,v.ARIA_PROPS),I=b({className:h("icon")},a("icon")),$=f?e.icon||i.createElement(ie,I):null,L=ne.getJSXIcon($,T({},I),{props:e,checked:f}),z=b({id:e.id,className:S(e.className,h("root",{checked:f,focusedState:p})),style:e.style,onClick:function(r){return C(r)},onContextMenu:e.onContextMenu,onMouseDown:e.onMouseDown},j,a("root")),J=b({className:"p-hidden-accessible"},a("hiddenInputWrapper")),X=b(T({id:e.inputId,type:"checkbox",name:e.name,tabIndex:e.tabIndex,defaultChecked:f,onFocus:function(r){return W()},onBlur:function(r){return B()},onKeyDown:function(r){return K(r)},disabled:e.disabled,readOnly:e.readOnly,required:e.required},q),a("hiddenInput")),Y=b({className:h("input",{checked:f,focusedState:p}),"data-p-highlight":f,"data-p-disabled":e.disabled,"data-p-focus":p},a("input"));return i.createElement(i.Fragment,null,i.createElement("div",y({ref:O},z),i.createElement("div",J,i.createElement("input",y({ref:s},X))),i.createElement("div",Y,L)),H&&i.createElement(ce,y({target:O,content:e.tooltip},e.tooltipOptions,{pt:a("tooltip")})))}));F.displayName="Checkbox";const Ee={title:"Form/Checkbox",component:F,parameters:{layout:"centered"},argTypes:{autoFocus:{control:"boolean",description:"When present, it specifies that the component should automatically get focus on load.",options:null},checked:{control:"boolean",description:"Specifies whether a checkbox should be checked or not.",options:null},children:{control:"text",description:"Used to get the child elements of the component.",options:null},className:{control:"text",description:"Style class of the element.",options:null},disabled:{control:"boolean",description:"When present, it specifies that the element value cannot be altered.",options:null},falseValue:{control:"object",description:"Value in unchecked state.",options:null},icon:{control:"select",description:"Icon to display in checkbox.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},id:{control:"text",description:"Unique identifier of the element.",options:null},inputId:{control:"text",description:"Identifier of the input element.",options:null},inputRef:{control:"object",description:"Reference of the input element.",options:null},name:{control:"text",description:"Name of the checkbox element .",options:null},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},readOnly:{control:"boolean",description:"When present, it specifies that the value cannot be changed.",options:null},required:{control:"boolean",description:"When present, it specifies that an input field must be filled out before submitting the form.",options:null},style:{control:"object",description:"Inline style of the element.",options:null},tabIndex:{control:"number",description:"Index of the element in tabbing order.",options:null},tooltip:{control:"text",description:"Content of the tooltip.",options:null},tooltipOptions:{control:"object",description:"Configuration of the tooltip, refer to the tooltip documentation for more information.",options:null},trueValue:{control:"object",description:"Value in checked state.",options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null},value:{control:"object",description:"Value of the component.",options:null}}},x={args:{value:0,unstyled:!1}};var A,N,V;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    "value": 0,
    "unstyled": false
  }
}`,...(V=(N=x.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};const De=["Default"];export{x as Default,De as __namedExportsOrder,Ee as default};
//# sourceMappingURL=Checkbox.stories-ec95c173.js.map
