import{r as o}from"./index-76fb7be0.js";import{P as ge,O as W,m,c as g,Z as $,b as H,D as V,U as Oe,I as ie}from"./api.esm-2e2d159c.js";import{B as Z}from"./button.esm-8a5b9c29.js";import{C as we,u as Pe}from"./componentbase.esm-b0caea1e.js";import{h as Se,d as xe,f as Ee}from"./hooks.esm-c93f10ee.js";import{C as je}from"./index.esm-d9d340e5.js";import{O as Ie}from"./overlayservice.esm-07429284.js";import{T as Ne}from"./tooltip.esm-ca4db4c1.js";import{C as Ce}from"./csstransition.esm-653f5084.js";import{P as Be}from"./portal.esm-c66f0cf3.js";import"./_commonjsHelpers-de833af9.js";import"./index.esm-a9455747.js";import"./iconbase.esm-439d6f79.js";import"./ripple.esm-cba91116.js";import"./inheritsLoose-9eefaa95.js";import"./index-d3ea75b5.js";function S(){return S=Object.assign?Object.assign.bind():function(t){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])}return t},S.apply(this,arguments)}function N(t){"@babel/helpers - typeof";return N=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},N(t)}function Te(t,i){if(N(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var e=n.call(t,i||"default");if(N(e)!=="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(t)}function _e(t){var i=Te(t,"string");return N(i)==="symbol"?i:String(i)}function y(t,i,n){return i=_e(i),i in t?Object.defineProperty(t,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[i]=n,t}function ke(t){if(Array.isArray(t))return t}function De(t,i){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var e,l,d,s,b=[],u=!0,a=!1;try{if(d=(n=n.call(t)).next,i===0){if(Object(n)!==n)return;u=!1}else for(;!(u=(e=d.call(n)).done)&&(b.push(e.value),b.length!==i);u=!0);}catch(r){a=!0,l=r}finally{try{if(!u&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(a)throw l}}return b}}function q(t,i){(i==null||i>t.length)&&(i=t.length);for(var n=0,e=new Array(i);n<i;n++)e[n]=t[n];return e}function ze(t,i){if(t){if(typeof t=="string")return q(t,i);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return q(t,i)}}function Re(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function J(t,i){return ke(t)||De(t,i)||ze(t,i)||Re()}var Ue={icon:"p-button-icon p-c",root:function(i){var n=i.props,e=i.size;return g("p-splitbutton p-component",y(y(y(y(y(y({"p-disabled":n.disabled,"p-button-loading-label-only":n.loading&&!n.icon&&n.label},"p-button-".concat(n.severity),n.severity),"p-button-raised",n.raised),"p-button-rounded",n.rounded),"p-button-text",n.text),"p-button-outlined",n.outlined),"p-button-".concat(e),e))},button:"p-splitbutton-defaultbutton",menuButton:"p-splitbutton-menubutton",menu:function(i){var n=i.subProps;return g("p-menu p-menu-overlay p-component",n.menuClassName)},menuList:"p-menu-list p-reset",separator:"p-menu-separator",menuIcon:"p-menuitem-icon",menuLabel:"p-menuitem-text",anchor:function(i){var n=i._className,e=i.disabled;return g("p-menuitem-link",n,{"p-disabled":e})},menuItem:"p-menuitem",transition:"p-connected-overlay"},Le=`
@layer primereact {
    .p-splitbutton {
        display: inline-flex;
        position: relative;
    }

    .p-splitbutton .p-splitbutton-defaultbutton,
    .p-splitbutton.p-button-rounded > .p-splitbutton-defaultbutton.p-button,
    .p-splitbutton.p-button-outlined > .p-splitbutton-defaultbutton.p-button,
    .p-splitbutton.p-button-outlined > .p-splitbutton-defaultbutton.p-button-outlined.p-button:hover {
        flex: 1 1 auto;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-right: 0 none;
    }

    .p-splitbutton-menubutton,
    .p-splitbutton.p-button-rounded > .p-splitbutton-menubutton.p-button,
    .p-splitbutton.p-button-outlined > .p-splitbutton-menubutton.p-button {
        display: flex;
        align-items: center;
        justify-content: center;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    .p-splitbutton .p-menu {
        min-width: 100%;
    }

    .p-fluid .p-splitbutton  {
        display: flex;
    }
}
`,_=we.extend({defaultProps:{__TYPE:"SplitButton",id:null,label:null,icon:null,loading:!1,loadingIcon:null,model:null,disabled:null,style:null,className:null,buttonClassName:null,menuStyle:null,menuClassName:null,menuButtonClassName:null,buttonProps:null,menuButtonProps:null,tabIndex:null,severity:null,rounded:!1,raised:!1,outlined:!1,text:!1,size:null,appendTo:null,tooltip:null,tooltipOptions:null,buttonTemplate:null,transitionOptions:null,dropdownIcon:null,onClick:null,onShow:null,onHide:null,children:void 0},css:{classes:Ue,styles:Le}});function F(t,i){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);i&&(e=e.filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable})),n.push.apply(n,e)}return n}function Y(t){for(var i=1;i<arguments.length;i++){var n=arguments[i]!=null?arguments[i]:{};i%2?F(Object(n),!0).forEach(function(e){y(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var oe=o.memo(function(t){var i=t.ptm,n=t.cx,e=function(r,w){return i(r,Y({hostName:t.hostName},w))},l=function(r){t.menuitem.command&&t.menuitem.command({originalEvent:r,item:t.menuitem}),t.onItemClick&&t.onItemClick(r),r.preventDefault()},d=function(){var r=m({className:n("separator"),role:"separator"},e("separator"));return o.createElement("li",r)},s=function(){if(t.menuitem.visible===!1)return null;var r=t.menuitem,w=r.disabled,v=r.icon,P=r.label,c=r.template,x=r.url,E=r.target,f=r.className,h=g("p-menuitem-link",f,{"p-disabled":w}),D=g("p-menuitem-icon",v),z=m({className:n("menuIcon")},e("menuIcon")),C=ie.getJSXIcon(v,Y({},z),{props:t.splitButtonProps}),R=m({className:n("menuLabel")},e("menuLabel")),U=P&&o.createElement("span",R,P),L=m({href:x||"#",role:"menuitem",className:n("anchor"),target:E,onClick:l,"aria-label":P},e("anchor")),j=o.createElement("a",L,C,U);if(c){var M={onClick:l,className:h,labelClassName:"p-menuitem-text",iconClassName:D,element:j,props:t};j=W.getJSXElement(c,t.menuitem,M)}var B=m({className:n("menuItem"),role:"none"},e("menuItem"));return o.createElement("li",B,j)},b=function(){return t.menuitem.separator?d():s()},u=b();return u});oe.displayName="SplitButtonItem";function G(t,i){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);i&&(e=e.filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable})),n.push.apply(n,e)}return n}function Me(t){for(var i=1;i<arguments.length;i++){var n=arguments[i]!=null?arguments[i]:{};i%2?G(Object(n),!0).forEach(function(e){y(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var re=o.forwardRef(function(t,i){var n=t.ptm,e=t.cx,l=function(u,a){return n(u,Me({hostName:t.hostName},a))},d=function(){var u=m({ref:i,className:e("menu",{subProps:t}),style:t.menuStyle,onClick:t.onClick},l("menu")),a=m({id:t.menuId,className:e("menuList"),role:"menu"},l("menuList")),r=m({classNames:e("transition"),in:t.in,timeout:{enter:120,exit:100},options:t.transitionOptions,unmountOnExit:!0,onEnter:t.onEnter,onEntered:t.onEntered,onExit:t.onExit,onExited:t.onExited},l("transition"));return o.createElement(Ce,S({nodeRef:i},r),o.createElement("div",u,o.createElement("ul",a,t.children)))},s=d();return o.createElement(Be,{element:s,appendTo:t.appendTo})});re.displayName="SplitButtonPanel";function Q(t,i){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);i&&(e=e.filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable})),n.push.apply(n,e)}return n}function Ae(t){for(var i=1;i<arguments.length;i++){var n=arguments[i]!=null?arguments[i]:{};i%2?Q(Object(n),!0).forEach(function(e){y(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var le=o.memo(o.forwardRef(function(t,i){var n=o.useContext(ge),e=_.getProps(t,n),l=o.useState(e.id),d=J(l,2),s=d[0],b=d[1],u=o.useState(!1),a=J(u,2),r=a[0],w=a[1],v=o.useRef(null),P=o.useRef(null),c=o.useRef(null),x={props:e,state:{id:s,overlayVisible:r}},E=_.setMetaData(x),f=E.ptm,h=E.cx,D=E.isUnstyled;Pe(_.css.styles,D,{name:"splitbutton"});var z=Se({target:v,overlay:c,listener:function(O,I){var A=I.valid;A&&T()},when:r}),C=J(z,2),R=C[0],U=C[1],L=function(O){Ie.emit("overlay-click",{originalEvent:O,target:v.current})},j=function(){r?T():B()},M=function(){T()},B=function(){w(!0)},T=function(){w(!1)},ae=function(){$.set("overlay",c.current,n&&n.autoZIndex||H.autoZIndex,n&&n.zIndex.overlay||H.zIndex.overlay),V.addStyles(c.current,{position:"absolute",top:"0",left:"0"}),X()},pe=function(){R(),e.onShow&&e.onShow()},se=function(){U()},ue=function(){$.clear(c.current),e.onHide&&e.onHide()},X=function(){V.alignOverlay(c.current,P.current.parentElement,e.appendTo||n&&n.appendTo||H.appendTo)};xe(function(){s||b(Oe()),X()}),Ee(function(){$.clear(c.current)}),o.useImperativeHandle(i,function(){return{props:e,show:B,hide:T,getElement:function(){return v.current}}});var ce=function(){return e.model?e.model.map(function(O,I){return o.createElement(oe,{hostName:"SplitButton",splitButtonProps:e,menuitem:O,key:I,onItemClick:M,ptm:f,cx:h})}):null};if(e.visible===!1)return null;var me=W.isNotEmpty(e.tooltip),de={large:"lg",small:"sm"},be=de[e.size],fe=e.buttonTemplate?W.getJSXElement(e.buttonTemplate,e):null,ye=ce(),K=s+"_menu",ve=function(){var O=m({className:h("icon")},f("icon")),I=e.dropdownIcon||o.createElement(je,O),A=ie.getJSXIcon(I,Ae({},O),{props:e});return A},he=m({ref:v,id:s,className:g(e.className,h("root",{size:be})),style:e.style},_.getOtherProps(e),f("root"));return o.createElement(o.Fragment,null,o.createElement("div",he,o.createElement(Z,S({ref:P,type:"button",className:g(e.buttonClassName,h("button")),icon:e.icon,loading:e.loading,loadingIcon:e.loadingIcon,severity:e.severity,label:e.label,raised:e.raised,onClick:e.onClick,disabled:e.disabled,tabIndex:e.tabIndex,size:e.size,outlined:e.outlined,text:e.text},e.buttonProps,{pt:f("button"),__parentMetadata:{parent:x},unstyled:e.unstyled}),fe),o.createElement(Z,S({type:"button",className:g(e.menuButtonClassName,h("menuButton")),icon:ve,onClick:j,disabled:e.disabled,"aria-expanded":r,"aria-haspopup":"true","aria-controls":r?K:null},e.menuButtonProps,{size:e.size,severity:e.severity,outlined:e.outlined,text:e.text,raised:e.raised,pt:f("menuButton"),__parentMetadata:{parent:x},unstyled:e.unstyled})),o.createElement(re,{hostName:"SplitButton",ref:c,appendTo:e.appendTo,menuId:K,menuStyle:e.menuStyle,menuClassName:e.menuClassName,onClick:L,in:r,onEnter:ae,onEntered:pe,onExit:se,onExited:ue,transitionOptions:e.transitionOptions,ptm:f,cx:h},ye)),me&&o.createElement(Ne,S({target:v,content:e.tooltip},e.tooltipOptions,{pt:f("tooltip")})))}));le.displayName="SplitButton";const it={title:"Button/SplitButton",component:le,parameters:{layout:"centered"},argTypes:{appendTo:{control:"select",description:"DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The self value is used to render a component where it is located.",options:["null","HTMLElement","self"]},buttonClassName:{control:"text",description:"ClassName of the button.",options:null},buttonProps:{control:"object",description:"Props for the main button, any prop is passed implicity to the button element.",options:null},buttonTemplate:{control:"object",description:"Template of the default button.",options:null},children:{control:"text",description:"Used to get the child elements of the component.",options:null},disabled:{control:"boolean",description:"When present, it specifies that the component should be disabled.",options:null},dropdownIcon:{control:"select",description:"Name of the dropdown icon or JSX.Element for dropdown icon.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},icon:{control:"select",description:"Name of the icon.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},label:{control:"text",description:"Text of the button.",options:null},loading:{control:"boolean",description:"Display loading icon of the button",options:null},loadingIcon:{control:"select",description:"Name of the loading icon or JSX.Element for loading icon.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},menuButtonClassName:{control:"text",description:"ClassName of the menu dropdown button.",options:null},menuButtonProps:{control:"object",description:"Props for the dropdown button, any prop is passed implicity to the dropdown button element.",options:null},menuClassName:{control:"text",description:"ClassName class of the overlay menu.",options:null},menuStyle:{control:"object",description:"Inline style of the overlay menu.",options:null},model:{control:"object",description:"MenuModel instance to define the overlay items.",options:null},outlined:{control:"boolean",description:"Add a border class without a background initially.",options:null},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},raised:{control:"boolean",description:"Add a shadow to indicate elevation.",options:null},rounded:{control:"boolean",description:"Add a circular border radius to the button.",options:null},severity:{control:"select",description:'Defines the style of the button, valid values are "secondary", "success", "info", "warning", "danger".',options:["success","warning","secondary","info","danger"]},size:{control:"select",description:'Defines the size of the button, valid values are "small" and "large".',options:["small","large"]},text:{control:"boolean",description:"Add a textual class to the button without a background initially.",options:null},tooltip:{control:"text",description:"Content of the tooltip.",options:null},tooltipOptions:{control:"object",description:"Configuration of the tooltip, refer to the tooltip documentation for more information.",options:null},transitionOptions:{control:"object",description:'The properties of CSSTransition can be customized, except for "nodeRef" and "in" properties.',options:null},unstyled:{control:"boolean",description:"When enabled, it removes component related styles in the core.",options:null},visible:{control:"boolean",description:"When present, it specifies that the element should be visible.",options:null}}},k={args:{label:"SplitButton",unstyled:!1,model:[{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-times"},{label:"React Website",icon:"pi pi-external-link"},{label:"Upload",icon:"pi pi-upload"}]}};var ee,te,ne;k.parameters={...k.parameters,docs:{...(ee=k.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    "label": "SplitButton",
    "unstyled": false,
    "model": [{
      "label": "Update",
      "icon": "pi pi-refresh"
    }, {
      "label": "Delete",
      "icon": "pi pi-times"
    }, {
      "label": "React Website",
      "icon": "pi pi-external-link"
    }, {
      "label": "Upload",
      "icon": "pi pi-upload"
    }]
  }
}`,...(ne=(te=k.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};const ot=["Default"];export{k as Default,ot as __namedExportsOrder,it as default};
//# sourceMappingURL=SplitButton.stories-bddb1ab8.js.map