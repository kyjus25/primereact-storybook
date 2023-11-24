import{V as n}from"./virtualscroller.esm-ad3bf7d3.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./hooks.esm-c93f10ee.js";import"./api.esm-2e2d159c.js";import"./componentbase.esm-b0caea1e.js";import"./index.esm-a9455747.js";import"./iconbase.esm-439d6f79.js";const m={title:"Data/VirtualScroller",component:n,parameters:{layout:"centered"},argTypes:{appendOnly:{control:"boolean",description:"Used to append each loaded item to top without removing any items from the DOM. Using very large data may cause the browser to crash.",options:null},autoSize:{control:"boolean",description:"Whether to dynamically change the height or width of scrollable container.",options:null},children:{control:"text",description:"Used to get the child elements of the component.",options:null},className:{control:"text",description:"Style class of the component.",options:null},columns:{control:"object",description:"Columns of the virtual scroller for vertical option.",options:null},contentTemplate:{control:"text",description:"The template of item's wrapper element.",options:null},delay:{control:"number",description:"Delay in scroll before new data is loaded.",options:null},disabled:{control:"boolean",description:"If disabled, the VirtualScroller feature is eliminated and the content is displayed directly.",options:null},id:{control:"text",description:"Unique identifier of the element.",options:null},inline:{control:"boolean",description:"When enabled, positions the content as inline.",options:null},items:{control:"select",description:"An array of objects to display.",options:["null","any[]","any[][]"]},itemSize:{control:"select",description:"The height/width of item according to orientation.",options:["number","number[]"]},itemTemplate:{control:"text",description:"The template of item.",options:null},lazy:{control:"boolean",description:"Defines if data is loaded and interacted with in lazy manner.",options:null},loaderDisabled:{control:"boolean",description:"Used to implement a custom loader instead of using the loader feature in the VirtualScroller.",options:null},loaderIconTemplate:{control:"text",description:"The template of loader's icon.",options:null},loading:{control:"boolean",description:"Whether the data is loaded.",options:null},loadingIcon:{control:"select",description:"The icon to show while indicating data load is in progress.",options:["pi pi-angledoubledown","pi pi-angledoubleleft","pi pi-angledoubleright","pi pi-angledoubleup","pi pi-angledown","pi pi-angleleft","pi pi-angleright","pi pi-angleup","pi pi-arrowdown","pi pi-arrowup","pi pi-ban","pi pi-bars","pi pi-calendar","pi pi-check","pi pi-chevrondown","pi pi-chevronleft","pi pi-chevronright","pi pi-chevronup","pi pi-download","pi pi-exclamationtriangle","pi pi-eye","pi pi-eyeslash","pi pi-filter","pi pi-filterslash","pi pi-infocircle","pi pi-minus","pi pi-pencil","pi pi-plus","pi pi-refresh","pi pi-search","pi pi-searchminus","pi pi-searchplus","pi pi-sortalt","pi pi-sortamountdown","pi pi-sortamountupalt","pi pi-spinner","pi pi-star","pi pi-starfill","pi pi-thlarge","pi pi-times","pi pi-timescircle","pi pi-trash","pi pi-undo","pi pi-upload","pi pi-windowmaximize","pi pi-windowminimize"]},loadingTemplate:{control:"text",description:"The template of loader.",options:null},numToleratedItems:{control:"number",description:"Determines how many additional elements to add to the DOM outside of the view. According to the scrolls made up and down, extra items are added in a certain algorithm in the form of multiples of this number. Default value is half the number of items shown in the view.",options:null},orientation:{control:"select",description:"The orientation of scrollbar, valid values are 'vertical', 'horizontal' and 'both'.",options:["both","horizontal","vertical"]},pt:{control:"object",description:"Uses to pass attributes to DOM elements inside the component.",options:null},ptOptions:{control:"object",description:"Used to configure passthrough(pt) options of the component.",options:null},resizeDelay:{control:"number",description:"Delay after window's resize finishes.",options:null},scrollHeight:{control:"text",description:"Height of the scroll viewport.",options:null},scrollWidth:{control:"text",description:"Width of the scroll viewport.",options:null},showLoader:{control:"boolean",description:"Whether to show loader.",options:null},showSpacer:{control:"boolean",description:"Used to implement a custom spacer instead of using the spacer feature in the VirtualScroller.",options:null},step:{control:"number",description:"Used to specify how many items to load in each load method in lazy mode.",options:null},style:{control:"object",description:"Inline style of the component.",options:null},tabIndex:{control:"number",description:"Index of the element in tabbing order.",options:null}}},o={args:{}};var e,i,t;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {}
}`,...(t=(i=o.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};const u=["Default"];export{o as Default,u as __namedExportsOrder,m as default};
//# sourceMappingURL=VirtualScroller.stories-dfb06432.js.map
