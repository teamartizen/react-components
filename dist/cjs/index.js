"use strict";var e=require("react");const t=t=>{const n=e.useRef(null),{value:a,dataType:r,onChange:l}=t;let o="",s=0,i=!1;switch(e.useEffect((()=>{n.current.focus()}),[]),r){case"string":return o=a,e.createElement("input",{ref:n,className:"active_cell__input",value:o,onChange:l});case"number":return s=a,s=isNaN(s)?0:s,e.createElement("input",{ref:n,type:"number",className:"active_cell__input",value:s,onChange:l});case"boolean":return i=!!a,e.createElement("input",{ref:n,type:"checkbox",className:"active_cell__input",checked:i,onChange:l});default:return e.createElement(e.Fragment,null)}};!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&a.firstChild?a.insertBefore(r,a.firstChild):a.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}('.SheetTable {\n\tbackground-color: white;\n\tdisplay: inline-block;\n}\n.SheetTable .SheetTable__table {\n\tborder-collapse: collapse;\n\tcursor: default;\n}\n.SheetTable .SheetTable__table tr {\n\theight: 25px;\n}\n.SheetTable .SheetTable__table td {\n\tpadding: 4px;\n\tborder: 1px solid #e8e8e8;\n\tfont-size: 14px;\n\tfont-family: "Open Sans", sans-serif;\n}\n.SheetTable .SheetTable__table .sl_no_column {\n\twidth: 84px;\n}\n.SheetTable .SheetTable__table .header_column {\n\tbackground-color: rgba(0, 0, 0, 0.04);\n\ttext-align: center;\n\tcolor: rgba(0, 0, 0, 0.4);\n}\n.SheetTable .SheetTable__table .editable_cell {\n\tcursor: cell;\n\ttransition: background-color 0.2s;\n}\n.SheetTable .SheetTable__table .editable_cell:hover {\n\tbackground-color: #31ac7136;\n}\n.SheetTable .SheetTable__table .active_cell {\n\tborder: 3px solid #31ac71;\n\tposition: relative;\n}\n.SheetTable .SheetTable__table .active_cell .active_cell__input {\n\twidth: 100%;\n\tmargin: 0;\n\tpadding: 0;\n\tborder: none;\n\tbackground-color: white;\n\toutline: none;\n\tfont-size: 14px;\n\tfont-family: "Open Sans", sans-serif;\n}\n.SheetTable\n\t.SheetTable__table\n\t.active_cell\n\tinput[type="number"]::-webkit-inner-spin-button,\n.SheetTable\n\t.SheetTable__table\n\t.active_cell\n\tinput[type="number"]::-webkit-outer-spin-button {\n\t-webkit-appearance: none;\n\tappearance: none;\n}\n.SheetTable .SheetTable__table .active_cell::after {\n\tcontent: "";\n\tposition: absolute;\n\tbottom: -7px;\n\tright: -7px;\n\twidth: 8px;\n\theight: 8px;\n\tbackground: #31ac71;\n\tborder: 1px solid #31ac71;\n\tborder-radius: 50%;\n}\n');exports.Artizen=t=>{const{type:n,size:a=250}=t;return"square"===n?e.createElement("svg",{width:a,height:a,viewBox:"0 0 3840 3840",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{d:"M600 3300H1470L2340 1230H1470L600 3300Z",fill:"url(#paint0_linear_16_13)",stroke:"url(#paint1_linear_16_13)",strokeWidth:"1.71409",strokeLinejoin:"round"}),e.createElement("path",{d:"M390 570L678.679 1234.44H1573.59L2439.62 3300H3305.66L2439.62 1234.44H3450C3274.71 830.976 2876.95 570 2437.31 570H390Z",fill:"url(#paint2_radial_16_13)",stroke:"url(#paint3_linear_16_13)",strokeWidth:"1.71409",strokeLinecap:"round",strokeLinejoin:"round"}),e.createElement("defs",null,e.createElement("linearGradient",{id:"paint0_linear_16_13",x1:"-531.646",y1:"2344.58",x2:"2574.65",y2:"969.446",gradientUnits:"userSpaceOnUse"},e.createElement("stop",{offset:"0.530547",stopColor:"#116A7B"}),e.createElement("stop",{offset:"1",stopColor:"#062227"})),e.createElement("linearGradient",{id:"paint1_linear_16_13",x1:"-531.646",y1:"2344.58",x2:"2574.65",y2:"969.446",gradientUnits:"userSpaceOnUse"},e.createElement("stop",{offset:"0.495177",stopColor:"#116A7B"}),e.createElement("stop",{offset:"1",stopColor:"#0A4650"})),e.createElement("radialGradient",{id:"paint2_radial_16_13",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(410.922 560.61) rotate(89.8282) scale(7512.02 6681.97)"},e.createElement("stop",{stopColor:"#C2DEDC"}),e.createElement("stop",{offset:"0.572347",stopColor:"#7AB7B3"})),e.createElement("linearGradient",{id:"paint3_linear_16_13",x1:"367.985",y1:"1935",x2:"3472.02",y2:"1935",gradientUnits:"userSpaceOnUse"},e.createElement("stop",{stopColor:"#C2DEDC"}),e.createElement("stop",{offset:"0.578778",stopColor:"#7AB7B3"})))):"square-with-name"===n?e.createElement("svg",{width:a,height:a,viewBox:"0 0 3840 3840",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{d:"M600 2940H1470L2340 870H1470L600 2940Z",fill:"url(#paint0_linear_16_37)",stroke:"url(#paint1_linear_16_37)",strokeWidth:"1.71409",strokeLinejoin:"round"}),e.createElement("path",{d:"M390 210L678.679 874.444H1573.59L2439.62 2940H3305.66L2439.62 874.444H3450C3274.71 470.976 2876.95 210 2437.31 210H390Z",fill:"url(#paint2_radial_16_37)",stroke:"url(#paint3_linear_16_37)",strokeWidth:"1.71409",strokeLinecap:"round",strokeLinejoin:"round"}),e.createElement("path",{d:"M511.992 3652H416.367L629.766 3149.27H729.961L947.93 3652H847.734L790.43 3514.89H623.438L655.43 3434.03H756.68L677.578 3245.24L511.992 3652ZM1009.45 3651.3V3149.27H1237.97C1340.62 3149.27 1391.95 3194.15 1391.95 3283.91C1391.95 3344.62 1351.99 3394.89 1272.07 3434.73L1431.33 3652H1313.91L1160.98 3432.98V3390.44C1250.04 3375.2 1294.57 3340.63 1294.57 3286.73C1294.57 3249.7 1273.71 3231.18 1231.99 3231.18H1104.38V3651.3H1009.45ZM1804.34 3149.27V3230.12H1660.2V3652H1567.03V3230.12H1422.89V3149.27H1804.34ZM1950.59 3149.27V3652H1857.42V3149.27H1950.59ZM2420.27 3149.27V3230.12L2152.73 3571.14H2420.27V3652H2047.62V3571.14L2326.76 3230.12H2054.65V3149.27H2420.27ZM2840.04 3149.27V3229.42H2588.32V3355.98H2828.09V3439.3H2587.27V3571.14H2844.96V3652H2495.86V3149.27H2840.04ZM2931.09 3652V3149.27H3024.26L3289.69 3515.59V3149.27H3379.34V3652H3286.17L3020.74 3277.94V3652H2931.09Z",fill:"url(#paint4_linear_16_37)"}),e.createElement("defs",null,e.createElement("linearGradient",{id:"paint0_linear_16_37",x1:"-531.646",y1:"1984.58",x2:"2574.65",y2:"609.446",gradientUnits:"userSpaceOnUse"},e.createElement("stop",{offset:"0.530547",stopColor:"#116A7B"}),e.createElement("stop",{offset:"1",stopColor:"#062227"})),e.createElement("linearGradient",{id:"paint1_linear_16_37",x1:"-531.646",y1:"1984.58",x2:"2574.65",y2:"609.446",gradientUnits:"userSpaceOnUse"},e.createElement("stop",{offset:"0.495177",stopColor:"#116A7B"}),e.createElement("stop",{offset:"1",stopColor:"#0A4650"})),e.createElement("radialGradient",{id:"paint2_radial_16_37",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(410.922 200.61) rotate(89.8282) scale(7512.02 6681.97)"},e.createElement("stop",{stopColor:"#C2DEDC"}),e.createElement("stop",{offset:"0.572347",stopColor:"#7AB7B3"})),e.createElement("linearGradient",{id:"paint3_linear_16_37",x1:"367.985",y1:"1575",x2:"3472.02",y2:"1575",gradientUnits:"userSpaceOnUse"},e.createElement("stop",{stopColor:"#C2DEDC"}),e.createElement("stop",{offset:"0.578778",stopColor:"#7AB7B3"})),e.createElement("linearGradient",{id:"paint4_linear_16_37",x1:"4065",y1:"3270",x2:"630",y2:"3270",gradientUnits:"userSpaceOnUse"},e.createElement("stop",{stopColor:"#C2DEDC"}),e.createElement("stop",{offset:"1",stopColor:"#0A4650"}),e.createElement("stop",{offset:"1",stopColor:"#0A4650"})))):"horizontal"===n?e.createElement("svg",{width:a,height:1584*a/3840,viewBox:"0 0 3840 1584",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{d:"M991.875 1067.25V531.75H1235.62C1345.12 531.75 1399.88 579.625 1399.88 675.375C1399.88 740.125 1357.25 793.75 1272 836.25L1441.88 1068H1316.62L1153.5 834.375V789C1248.5 772.75 1296 735.875 1296 678.375C1296 638.875 1273.75 619.125 1229.25 619.125H1093.12V1067.25H991.875ZM1839.75 531.75V618H1686V1068H1586.62V618H1432.88V531.75H1839.75ZM1995.75 531.75V1068H1896.38V531.75H1995.75ZM2496.75 531.75V618L2211.38 981.75H2496.75V1068H2099.25V981.75L2397 618H2106.75V531.75H2496.75ZM2944.5 531.75V617.25H2676V752.25H2931.75V841.125H2674.88V981.75H2949.75V1068H2577.38V531.75H2944.5ZM3041.62 1068V531.75H3141L3424.12 922.5V531.75H3519.75V1068H3420.38L3137.25 669V1068H3041.62Z",fill:"url(#paint0_linear_15_2)"}),e.createElement("path",{d:"M360 1056H534L708 648H534L360 1056Z",fill:"url(#paint1_linear_15_2)",stroke:"url(#paint2_linear_15_2)",strokeWidth:"1.71409",strokeLinejoin:"round"}),e.createElement("path",{d:"M324 516L380.604 647.429H556.076L725.887 1056H895.698L725.887 647.429H924C889.629 567.622 811.636 516 725.434 516H324Z",fill:"url(#paint3_radial_15_2)",stroke:"url(#paint4_linear_15_2)",strokeWidth:"1.71409",strokeLinecap:"round",strokeLinejoin:"round"}),e.createElement("defs",null,e.createElement("linearGradient",{id:"paint0_linear_15_2",x1:"4157.06",y1:"809.999",x2:"1112.71",y2:"809.999",gradientUnits:"userSpaceOnUse"},e.createElement("stop",{stopColor:"#C2DEDC"}),e.createElement("stop",{offset:"1",stopColor:"#0A4650"}),e.createElement("stop",{offset:"1",stopColor:"#0A4650"})),e.createElement("linearGradient",{id:"paint1_linear_15_2",x1:"133.671",y1:"867.686",x2:"751.929",y2:"589.962",gradientUnits:"userSpaceOnUse"},e.createElement("stop",{offset:"0.530547",stopColor:"#116A7B"}),e.createElement("stop",{offset:"1",stopColor:"#062227"})),e.createElement("linearGradient",{id:"paint2_linear_15_2",x1:"133.671",y1:"867.686",x2:"751.929",y2:"589.962",gradientUnits:"userSpaceOnUse"},e.createElement("stop",{offset:"0.495177",stopColor:"#116A7B"}),e.createElement("stop",{offset:"1",stopColor:"#0A4650"})),e.createElement("radialGradient",{id:"paint3_radial_15_2",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(328.102 514.143) rotate(89.8297) scale(1485.89 1310.19)"},e.createElement("stop",{stopColor:"#C2DEDC"}),e.createElement("stop",{offset:"0.572347",stopColor:"#7AB7B3"})),e.createElement("linearGradient",{id:"paint4_linear_15_2",x1:"319.683",y1:"786",x2:"928.317",y2:"786",gradientUnits:"userSpaceOnUse"},e.createElement("stop",{stopColor:"#C2DEDC"}),e.createElement("stop",{offset:"0.578778",stopColor:"#7AB7B3"})))):null},exports.SheetTable=n=>{const{data:a,onChangeData:r,headers:l,editingMode:o=!0,showSlNo:s=!0}=n,[i,c]=e.useState({row:-1,col:-1}),p=a.map((e=>l.map((t=>({value:e[t.dataKey],dataType:t.dataType,style:t.valueStyle||{},editable:!!t.editable}))))),d=e=>{if(i.row<0||i.col<0)return;switch(e.key){case"Escape":e.preventDefault(),c({row:-1,col:-1});break;case"ArrowRight":e.preventDefault(),(()=>{const{row:e,col:t}=i,n=l.map((e=>!!e.editable));let a=t;for(;a=(a+1)%l.length,!n[a]&&a!==t;);c({row:e,col:a})})();break;case"ArrowLeft":e.preventDefault(),(()=>{const{row:e,col:t}=i,n=l.map((e=>!!e.editable));let a=t;for(;a=(a-1+l.length)%l.length,!n[a]&&a!==t;);c({row:e,col:a})})();break;case"ArrowUp":e.preventDefault(),c((e=>{const{row:t,col:n}=e;return{row:(t-1+p.length)%p.length,col:n}}));break;case"ArrowDown":e.preventDefault(),c((e=>{const{row:t,col:n}=e;return{row:(t+1)%p.length,col:n}}));break;case"Enter":e.preventDefault(),(()=>{const e=l.map((e=>!!e.editable)).findIndex((e=>e));c((t=>{const{row:n}=t;return{row:(n+1)%p.length,col:e}}))})();break;case"Tab":e.preventDefault(),(()=>{const{row:e,col:t}=i,n=l.map((e=>!!e.editable));let a=t;for(;a<l.length;)if(a+=1,n[a])return void c({row:e,col:a});const r=n.findIndex((e=>e));c({row:(e+1)%p.length,col:r})})();break;default:return}};return e.useEffect((()=>(document.addEventListener("keydown",d),()=>{document.removeEventListener("keydown",d)})),[i]),e.createElement("div",{className:"SheetTable"},e.createElement("table",{className:"SheetTable__table"},e.createElement("thead",{className:"SheetTable__table__thead"},e.createElement("tr",null,s&&e.createElement("td",{className:"sl_no_column header_column"}),l.map(((t,n)=>e.createElement("td",{key:n,className:"header_column",style:t.headerStyle},t.label))))),e.createElement("tbody",{className:"SheetTable__table__tbody"},p.map(((n,p)=>e.createElement("tr",{key:p},s&&e.createElement("td",{className:"sl_no_column header_column"},p+1),n.map(((n,s)=>{const d=[],_=i.row===p&&i.col===s;return n.editable&&o&&d.push("editable_cell"),_&&d.push("active_cell"),e.createElement("td",{key:s,style:n.style,className:d.join(" "),onClick:()=>{n.editable&&c({row:p,col:s})}},_?e.createElement(t,{dataType:n.dataType,value:n.value,onChange:e=>{(e=>{const{row:t,col:n}=i,o=[...a],s=l[n].dataKey;o[t][s]=e,r(o)})(e.target.value)}}):n.value)}))))))))};
