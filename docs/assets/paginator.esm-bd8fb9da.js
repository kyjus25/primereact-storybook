import{r}from"./index-76fb7be0.js";import{P as N,O as x,m as y,c as w,I as R,a as S,l as de}from"./api.esm-2e2d159c.js";import{C as L,u as Pe}from"./componentbase.esm-b0caea1e.js";import{e as fe}from"./hooks.esm-c93f10ee.js";import{A as ve,a as be,b as ye}from"./index.esm-b24dc832.js";import{R as T}from"./ripple.esm-cba91116.js";import{I as he}from"./inputnumber.esm-7af79946.js";import{A as Oe}from"./index.esm-958628e1.js";import{D as ke}from"./dropdown.esm-56726606.js";function we(a){if(Array.isArray(a))return a}function Ce(a,n){var e=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(e!=null){var t,o,p,s,c=[],u=!0,f=!1;try{if(p=(e=e.call(a)).next,n===0){if(Object(e)!==e)return;u=!1}else for(;!(u=(t=p.call(e)).done)&&(c.push(t.value),c.length!==n);u=!0);}catch(d){f=!0,o=d}finally{try{if(!u&&e.return!=null&&(s=e.return(),Object(s)!==s))return}finally{if(f)throw o}}return c}}function M(a,n){(n==null||n>a.length)&&(n=a.length);for(var e=0,t=new Array(n);e<n;e++)t[e]=a[e];return t}function xe(a,n){if(a){if(typeof a=="string")return M(a,n);var e=Object.prototype.toString.call(a).slice(8,-1);if(e==="Object"&&a.constructor&&(e=a.constructor.name),e==="Map"||e==="Set")return Array.from(a);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return M(a,n)}}function je(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ne(a,n){return we(a)||Ce(a,n)||xe(a,n)||je()}function E(a){"@babel/helpers - typeof";return E=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},E(a)}function Le(a,n){if(E(a)!=="object"||a===null)return a;var e=a[Symbol.toPrimitive];if(e!==void 0){var t=e.call(a,n||"default");if(E(t)!=="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(a)}function Ee(a){var n=Le(a,"string");return E(n)==="symbol"?n:String(n)}function I(a,n,e){return n=Ee(n),n in a?Object.defineProperty(a,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[n]=e,a}var Ie={root:"p-paginator p-component",left:"p-paginator-left-content",end:"p-paginator-right-content",firstPageIcon:"p-paginator-icon",firstPageButton:function(n){var e=n.disabled;return w("p-paginator-first p-paginator-element p-link",{"p-disabled":e})},prevPageIcon:"p-paginator-icon",prevPageButton:function(n){var e=n.disabled;return w("p-paginator-prev p-paginator-element p-link",{"p-disabled":e})},nextPageIcon:"p-paginator-icon",nextPageButton:function(n){var e=n.disabled;return w("p-paginator-next p-paginator-element p-link",{"p-disabled":e})},lastPageIcon:"p-paginator-icon",lastPageButton:function(n){var e=n.disabled;return w("p-paginator-last p-paginator-element p-link",{"p-disabled":e})},pageButton:function(n){var e=n.pageLink,t=n.startPageInView,o=n.endPageInView,p=n.page;return w("p-paginator-page p-paginator-element p-link",{"p-paginator-page-start":e===t,"p-paginator-page-end":e===o,"p-highlight":e-1===p})},pages:"p-paginator-pages"},Se=`
@layer primereact {
    .p-paginator {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
    
    .p-paginator-left-content {
        margin-right: auto;
    }
    
    .p-paginator-right-content {
        margin-left: auto;
    }
    
    .p-paginator-page,
    .p-paginator-next,
    .p-paginator-last,
    .p-paginator-first,
    .p-paginator-prev,
    .p-paginator-current {
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        line-height: 1;
        user-select: none;
        overflow: hidden;
        position: relative;
    }
    
    .p-paginator-element:focus {
        z-index: 1;
        position: relative;
    }
}
`,D=L.extend({defaultProps:{__TYPE:"Paginator",__parentMetadata:null,totalRecords:0,rows:0,first:0,pageLinkSize:5,rowsPerPageOptions:null,alwaysShow:!0,style:null,className:null,template:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",onPageChange:null,leftContent:null,rightContent:null,dropdownAppendTo:null,currentPageReportTemplate:"({currentPage} of {totalPages})",children:void 0},css:{classes:Ie,styles:Se}}),Te=L.extend({defaultProps:{__TYPE:"CurrentPageReport",pageCount:null,page:null,first:null,rows:null,totalRecords:null,reportTemplate:"({currentPage} of {totalPages})",template:null,children:void 0}}),De=L.extend({defaultProps:{__TYPE:"FirstPageLink",disabled:!1,onClick:null,template:null,firstPageLinkIcon:null,children:void 0}}),Re=L.extend({defaultProps:{__TYPE:"JumpToPageInput",page:null,rows:null,pageCount:null,disabled:!1,template:null,onChange:null,children:void 0,metaData:null,ptm:null}}),_e=L.extend({defaultProps:{__TYPE:"LastPageLink",disabled:!1,onClick:null,template:null,lastPageLinkIcon:null,children:void 0}}),Be=L.extend({defaultProps:{__TYPE:"NextPageLink",disabled:!1,onClick:null,template:null,nextPageLinkIcon:null,children:void 0}}),Je=L.extend({defaultProps:{__TYPE:"PageLinks",value:null,page:null,rows:null,pageCount:null,links:null,template:null,children:void 0}}),Ae=L.extend({defaultProps:{__TYPE:"PrevPageLink",disabled:!1,onClick:null,template:null,prevPageLinkIcon:null,children:void 0}}),Me=L.extend({defaultProps:{__TYPE:"RowsPerPageDropdown",options:null,value:null,page:null,pageCount:null,totalRecords:0,appendTo:null,onChange:null,template:null,disabled:!1,children:void 0}});function X(a,n){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(a,o).enumerable})),e.push.apply(e,t)}return e}function $(a){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?X(Object(e),!0).forEach(function(t){I(a,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):X(Object(e)).forEach(function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))})}return a}var H=r.memo(function(a){var n=r.useContext(N),e=Te.getProps(a,n),t={currentPage:e.page+1,totalPages:e.pageCount,first:Math.min(e.first+1,e.totalRecords),last:Math.min(e.first+e.rows,e.totalRecords),rows:e.rows,totalRecords:e.totalRecords},o=e.reportTemplate.replace("{currentPage}",t.currentPage).replace("{totalPages}",t.totalPages).replace("{first}",t.first).replace("{last}",t.last).replace("{rows}",t.rows).replace("{totalRecords}",t.totalRecords),p=y({className:"p-paginator-current"},e.ptm("current",{hostName:e.hostName})),s=r.createElement("span",p,o);if(e.template){var c=$($({},t),{className:"p-paginator-current",element:s,props:e});return x.getJSXElement(e.template,c)}return s});H.displayName="CurrentPageReport";function F(a,n){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(a,o).enumerable})),e.push.apply(e,t)}return e}function Xe(a){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?F(Object(e),!0).forEach(function(t){I(a,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):F(Object(e)).forEach(function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))})}return a}var V=r.memo(function(a){var n=r.useContext(N),e=De.getProps(a,n),t=e.ptm,o=e.cx,p=function(O){return t(O,{hostName:e.hostName,context:{disabled:e.disabled}})},s=w("p-paginator-first p-paginator-element p-link",{"p-disabled":e.disabled}),c="p-paginator-icon",u=y({className:o("firstPageIcon")},p("firstPageIcon")),f=e.firstPageLinkIcon||r.createElement(ve,u),d=R.getJSXIcon(f,Xe({},u),{props:e}),i=y({type:"button",className:o("firstPageButton",{disabled:e.disabled}),onClick:e.onClick,disabled:e.disabled,"aria-label":S("firstPageLabel")},p("firstPageButton")),P=r.createElement("button",i,d,r.createElement(T,null));if(e.template){var v={onClick:e.onClick,className:s,iconClassName:c,disabled:e.disabled,element:P,props:e};return x.getJSXElement(e.template,v)}return P});V.displayName="FirstPageLink";var W=r.memo(function(a){var n=r.useContext(N),e=Re.getProps(a,n),t=function(u){e.onChange&&e.onChange(e.rows*(u.value-1),e.rows)},o=e.pageCount>0?e.page+1:0,p=r.createElement(he,{value:o,onChange:t,className:"p-paginator-page-input",disabled:e.disabled,pt:e.ptm("JTPInput"),unstyled:e.unstyled,__parentMetadata:{parent:e.metaData}});if(e.template){var s={value:o,onChange:t,disabled:e.disabled,className:"p-paginator-page-input",element:p,props:e};return x.getJSXElement(e.template,s)}return p});W.displayName="JumpToPageInput";function Y(a,n){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(a,o).enumerable})),e.push.apply(e,t)}return e}function $e(a){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?Y(Object(e),!0).forEach(function(t){I(a,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):Y(Object(e)).forEach(function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))})}return a}var q=r.memo(function(a){var n=r.useContext(N),e=_e.getProps(a,n),t=e.ptm,o=e.cx,p=function(O){return t(O,{hostName:e.hostName,context:{disabled:e.disabled}})},s=w("p-paginator-last p-paginator-element p-link",{"p-disabled":e.disabled}),c="p-paginator-icon",u=y({className:o("lastPageIcon")},p("lastPageIcon")),f=e.lastPageLinkIcon||r.createElement(be,u),d=R.getJSXIcon(f,$e({},u),{props:e}),i=y({type:"button",className:o("lastPageButton",{disabled:e.disabled}),onClick:e.onClick,disabled:e.disabled,"aria-label":S("lastPageLabel")},p("lastPageButton")),P=r.createElement("button",i,d,r.createElement(T,null));if(e.template){var v={onClick:e.onClick,className:s,iconClassName:c,disabled:e.disabled,element:P,props:e};return x.getJSXElement(e.template,v)}return P});q.displayName="LastPageLink";function K(a,n){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(a,o).enumerable})),e.push.apply(e,t)}return e}function Fe(a){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?K(Object(e),!0).forEach(function(t){I(a,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):K(Object(e)).forEach(function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))})}return a}var G=r.memo(function(a){var n=r.useContext(N),e=Be.getProps(a,n),t=e.ptm,o=e.cx,p=function(O){return t(O,{hostName:e.hostName,context:{disabled:e.disabled}})},s=w("p-paginator-next p-paginator-element p-link",{"p-disabled":e.disabled}),c="p-paginator-icon",u=y({className:o("nextPageIcon")},p("nextPageIcon")),f=e.nextPageLinkIcon||r.createElement(Oe,u),d=R.getJSXIcon(f,Fe({},u),{props:e}),i=y({type:"button",className:o("nextPageButton",{disabled:e.disabled}),onClick:e.onClick,disabled:e.disabled,"aria-label":S("nextPageLabel")},p("nextPageButton")),P=r.createElement("button",i,d,r.createElement(T,null));if(e.template){var v={onClick:e.onClick,className:s,iconClassName:c,disabled:e.disabled,element:P,nextPageLinkIcon:d,props:e};return x.getJSXElement(e.template,v)}return P});G.displayName="NextPageLink";var Q=r.memo(function(a){var n=r.useContext(N),e=Je.getProps(a,n),t=e.ptm,o=e.cx,p=function(P,v){return t(v,{hostName:e.hostName,context:{active:P-1===e.page}})},s=function(P,v){e.onClick&&e.onClick({originalEvent:P,value:v}),P.preventDefault()},c;if(e.value){var u=e.value[0],f=e.value[e.value.length-1];c=e.value.map(function(i){var P=w("p-paginator-page p-paginator-element p-link",{"p-paginator-page-start":i===u,"p-paginator-page-end":i===f,"p-highlight":i-1===e.page}),v=y({type:"button",onClick:function(h){return s(h,i)},className:o("pageButton",{pageLink:i,startPageInView:u,endPageInView:f,page:e.page}),disabled:e.disabled,"aria-label":S("pageLabel",{page:i})},p(i,"pageButton")),b=r.createElement("button",v,i,r.createElement(T,null));if(e.template){var O={onClick:function(h){return s(h,i)},className:P,view:{startPage:u-1,endPage:f-1},page:i-1,currentPage:e.page,totalPages:e.pageCount,element:b,props:e};b=x.getJSXElement(e.template,O)}return r.createElement(r.Fragment,{key:i},b)})}var d=y({className:o("pages")},t("pages",{hostName:e.hostName}));return r.createElement("span",d,c)});Q.displayName="PageLinks";function U(a,n){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(a,o).enumerable})),e.push.apply(e,t)}return e}function Ye(a){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?U(Object(e),!0).forEach(function(t){I(a,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):U(Object(e)).forEach(function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))})}return a}var Z=r.memo(function(a){var n=r.useContext(N),e=Ae.getProps(a,n),t=e.ptm,o=e.cx,p=function(O){return t(O,{hostName:e.hostName,context:{disabled:e.disabled}})},s=w("p-paginator-prev p-paginator-element p-link",{"p-disabled":e.disabled}),c="p-paginator-icon",u=y({className:o("prevPageIcon")},p("prevPageIcon")),f=e.prevPageLinkIcon||r.createElement(ye,u),d=R.getJSXIcon(f,Ye({},u),{props:e}),i=y({type:"button",className:o("prevPageButton",{disabled:e.disabled}),onClick:e.onClick,disabled:e.disabled,"aria-label":S("previousPageLabel")},p("prevPageButton")),P=r.createElement("button",i,d,r.createElement(T,null));if(e.template){var v={onClick:e.onClick,className:s,iconClassName:c,disabled:e.disabled,element:P,props:e};return x.getJSXElement(e.template,v)}return P});Z.displayName="PrevPageLink";var ee=r.memo(function(a){var n=r.useContext(N),e=Me.getProps(a,n),t=e.options&&e.options.length>0,o=t?e.options.map(function(u){return{label:String(u),value:u}}):[],p=de("choose"),s=t?r.createElement(ke,{value:e.value,options:o,onChange:e.onChange,appendTo:e.appendTo,disabled:e.disabled,placeholder:p,"aria-label":p,pt:e.ptm("RPPDropdown"),unstyled:e.unstyled,__parentMetadata:{parent:e.metaData}}):null;if(e.template){var c={value:e.value,options:o,onChange:e.onChange,appendTo:e.appendTo,currentPage:e.page,totalPages:e.pageCount,totalRecords:e.totalRecords,disabled:e.disabled,element:s,props:e};return x.getJSXElement(e.template,c)}return s});ee.displayName="RowsPerPageDropdown";function z(a,n){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(a,o).enumerable})),e.push.apply(e,t)}return e}function Ke(a){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?z(Object(e),!0).forEach(function(t){I(a,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):z(Object(e)).forEach(function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))})}return a}var Ue=r.memo(r.forwardRef(function(a,n){var e=r.useContext(N),t=D.getProps(a,e),o=Ke({props:t},t.__parentMetadata),p=D.setMetaData(o),s=p.ptm,c=p.cx,u=p.isUnstyled;Pe(D.css.styles,u,{name:"paginator"});var f=r.useRef(null),d=Math.floor(t.first/t.rows),i=Math.ceil(t.totalRecords/t.rows),P=d===0,v=d===i-1,b=i===0,O=function(){var l=i,m=Math.min(t.pageLinkSize,l),g=Math.max(0,Math.ceil(d-m/2)),C=Math.min(l-1,g+m-1),j=t.pageLinkSize-(C-g+1);return g=Math.max(0,g-j),[g,C]},_=function(){for(var l=[],m=O(),g=m[0],C=m[1],j=g;j<=C;j++)l.push(j+1);return l},h=function(l,m){var g=i,C=Math.floor(l/m);if(C>=0&&C<g){var j={first:l,rows:m,page:C,pageCount:g};t.onPageChange&&t.onPageChange(j)}},te=function(l){h(0,t.rows),l.preventDefault()},ae=function(l){h(t.first-t.rows,t.rows),l.preventDefault()},ne=function(l){h((l.value-1)*t.rows,t.rows)},re=function(l){h(t.first+t.rows,t.rows),l.preventDefault()},oe=function(l){h((i-1)*t.rows,t.rows),l.preventDefault()},le=function(l){var m=l.value;h(0,m)};r.useImperativeHandle(n,function(){return{props:t,getElement:function(){return f.current}}}),fe(function(){d>0&&t.first>=t.totalRecords&&h((i-1)*t.rows,t.rows)},[t.totalRecords]);var B=function(l,m){var g;switch(l){case"FirstPageLink":g=r.createElement(V,{hostName:"Paginator",key:l,onClick:te,disabled:P||b,template:m,firstPageLinkIcon:t.firstPageLinkIcon,ptm:s,cx:c});break;case"PrevPageLink":g=r.createElement(Z,{hostName:"Paginator",key:l,onClick:ae,disabled:P||b,template:m,prevPageLinkIcon:t.prevPageLinkIcon,ptm:s,cx:c});break;case"NextPageLink":g=r.createElement(G,{hostName:"Paginator",key:l,onClick:re,disabled:v||b,template:m,nextPageLinkIcon:t.nextPageLinkIcon,ptm:s,cx:c});break;case"LastPageLink":g=r.createElement(q,{hostName:"Paginator",key:l,onClick:oe,disabled:v||b,template:m,lastPageLinkIcon:t.lastPageLinkIcon,ptm:s,cx:c});break;case"PageLinks":g=r.createElement(Q,{hostName:"Paginator",key:l,value:_(),page:d,rows:t.rows,pageCount:i,onClick:ne,template:m,ptm:s,cx:c});break;case"RowsPerPageDropdown":g=r.createElement(ee,{hostName:"Paginator",key:l,value:t.rows,page:d,pageCount:i,totalRecords:t.totalRecords,options:t.rowsPerPageOptions,onChange:le,appendTo:t.dropdownAppendTo,template:m,disabled:b,unstyled:t.unstyled,ptm:s,cx:c,metaData:o});break;case"CurrentPageReport":g=r.createElement(H,{hostName:"Paginator",reportTemplate:t.currentPageReportTemplate,key:l,page:d,pageCount:i,first:t.first,rows:t.rows,totalRecords:t.totalRecords,template:m,ptm:s});break;case"JumpToPageInput":g=r.createElement(W,{hostName:"Paginator",key:l,rows:t.rows,page:d,pageCount:i,onChange:h,disabled:b,template:m,ptm:s,unstyled:t.unstyled,metaData:o});break;default:g=null;break}return g},se=function(){var l=t.template;return l?E(l)==="object"?l.layout?l.layout.split(" ").map(function(m){var g=m.trim();return B(g,l[g])}):Object.entries(l).map(function(m){var g=Ne(m,2),C=g[0],j=g[1];return B(C,j)}):l.split(" ").map(function(m){return B(m.trim())}):null};if(!t.alwaysShow&&i<=1)return null;var J=x.getJSXElement(t.leftContent,t),A=x.getJSXElement(t.rightContent,t),ie=se(),pe=y({className:c("left")},s("left")),ce=J&&r.createElement("div",pe,J),ue=y({className:c("end")},s("end")),ge=A&&r.createElement("div",ue,A),me=y({ref:f,className:w(t.className,c("root")),style:t.style},D.getOtherProps(t),s("root"));return r.createElement("div",me,ce,ie,ge)}));Ue.displayName="Paginator";export{Ue as P};
//# sourceMappingURL=paginator.esm-bd8fb9da.js.map
