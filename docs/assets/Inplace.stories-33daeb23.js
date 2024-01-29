import{r as a}from"./index-76fb7be0.js";import{a as H,c as w,O as T,I as K,l as E}from"./api.esm-4644ee78.js";import{B as Y}from"./button.esm-7eb5ceb6.js";import{C as x,u as z}from"./componentbase.esm-1c796d7e.js";import{d as V,b as J}from"./hooks.esm-d069ba29.js";import{T as X}from"./index.esm-9702a90e.js";import"./_commonjsHelpers-de833af9.js";import"./index.esm-91c9b7b7.js";import"./iconbase.esm-60e86362.js";import"./ripple.esm-1f3221bd.js";import"./tooltip.esm-2acddad6.js";import"./portal.esm-16954874.js";import"./index-d3ea75b5.js";function q(t){if(Array.isArray(t))return t}function F(t,i){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var r,n,f,c,u=[],p=!0,d=!1;try{if(f=(e=e.call(t)).next,i===0){if(Object(e)!==e)return;p=!1}else for(;!(p=(r=f.call(e)).done)&&(u.push(r.value),u.length!==i);p=!0);}catch(m){d=!0,n=m}finally{try{if(!p&&e.return!=null&&(c=e.return(),Object(c)!==c))return}finally{if(d)throw n}}return u}}function O(t,i){(i==null||i>t.length)&&(i=t.length);for(var e=0,r=new Array(i);e<i;e++)r[e]=t[e];return r}function G(t,i){if(t){if(typeof t=="string")return O(t,i);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return O(t,i)}}function Q(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Z(t,i){return q(t)||F(t,i)||G(t,i)||Q()}var ee={display:function(i){var e=i.props;return w("p-inplace-display",{"p-disabled":e.disabled})},root:function(i){var e=i.props;return w("p-inplace p-component",{"p-inplace-closable":e.closable})},closeButton:"p-inplace-content-close",content:"p-inplace-content"},te=`
@layer primereact {
    .p-inplace .p-inplace-display {
        display: inline;
        cursor: pointer;
    }
    
    .p-inplace .p-inplace-content {
        display: inline;
    }
    
    .p-fluid .p-inplace.p-inplace-closable .p-inplace-content {
        display: flex;
    }
    
    .p-fluid .p-inplace.p-inplace-closable .p-inplace-content > .p-inputtext {
        flex: 1 1 auto;
        width: 1%;
    }
    
    .p-inplace-content-close {
        margin-left: .25rem;
    }
}
`;x.extend({defaultProps:{__TYPE:"InplaceDisplay",children:void 0}});x.extend({defaultProps:{__TYPE:"InplaceContent",children:void 0}});var v=x.extend({defaultProps:{__TYPE:"Inplace",style:null,className:null,active:!1,closable:!1,closeIcon:null,disabled:!1,tabIndex:0,ariaLabel:null,onOpen:null,onClose:null,onToggle:null,children:void 0},css:{classes:ee,styles:te}}),B=a.forwardRef(function(t,i){var e=V(),r=a.useContext(H),n=v.getProps(t,r),f=a.useState(n.active),c=Z(f,2),u=c[0],p=c[1],d=a.useRef(null),m=n.onToggle?n.active:u,_={props:n,state:{active:u}},g=v.setMetaData(_),y=g.ptm,b=g.cx,U=g.isUnstyled;z(v.css.styles,U,{name:"inplace"});var I=function(o){n.disabled||(n.onOpen&&n.onOpen(o),n.onToggle?n.onToggle({originalEvent:o,value:!0}):p(!0))},D=function(o){n.disabled||(n.onClose&&n.onClose(o),n.onToggle?n.onToggle({originalEvent:o,value:!1}):p(!1))},j=function(o){(o.code==="Enter"||o.code==="Space")&&(I(o),o.preventDefault())},N=function(o){var l=e({onClick:I,className:b("display"),onKeyDown:j,tabIndex:n.tabIndex||"0",role:"button","aria-label":n.ariaLabel},y("display"));return a.createElement("div",l,o)},M=function(){var o=n.closeIcon||a.createElement(X,null),l=K.getJSXIcon(o,void 0,{props:n}),C=E("aria")?E("aria").close:void 0;if(n.closable){var $=e({className:b("closeButton"),icon:l,type:"button",onClick:D,"aria-label":C,pt:y("closeButton"),__parentMetadata:{parent:_}});return a.createElement(Y,$)}return null},R=function(o){var l=M(),C=e({className:b("content")},y("content"));return a.createElement("div",C,o,l)},k=function(){var o=["InplaceContent","InplaceDisplay"];return a.Children.map(n.children,function(l){if(m&&T.isValidChild(l,"InplaceContent",o))return R(l);if(!m&&T.isValidChild(l,"InplaceDisplay",o))return N(l)})};a.useImperativeHandle(i,function(){return{props:n,getElement:function(){return d.current}}}),J(function(){n.active?I(null):D(null)},[n.active]);var L=k(),W=e({ref:d,className:w(n.className,b("root")),"aria-live":"polite"},v.getOtherProps(n),y("root"));return a.createElement("div",W,L)});B.displayName="Inplace";const ye={title:"Misc/Inplace",component:B,parameters:{layout:"centered"},argTypes:{active:{control:"boolean",description:"Whether the content is displayed or not.",options:null},ariaLabel:{control:"text",description:"Used to define a string that labels the component.",options:null},children:{control:"text",description:"Used to get the child elements of the component.",options:null},closable:{control:"boolean",description:"Displays a button to switch back to display mode.",options:null},closeIcon:{control:"select",description:"Icon of the close button.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},disabled:{control:"boolean",description:"When present, it specifies that the element should be disabled.",options:null},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null}}},h={args:{unstyled:!1}};var P,S,A;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    "unstyled": false
  }
}`,...(A=(S=h.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};const be=["Default"];export{h as Default,be as __namedExportsOrder,ye as default};