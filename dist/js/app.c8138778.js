(function(){"use strict";var e={4992:function(e,t,n){var r=n(9242),i=n(3396);function s(e,t,n,r,s,o){const a=(0,i.up)("router-link"),u=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("nav",null,[(0,i.Wm)(a,{to:"/"},{default:(0,i.w5)((()=>[(0,i.Uk)("Головна")])),_:1}),(0,i.Uk)(" | "),(0,i.Wm)(a,{to:{name:"drivers"}},{default:(0,i.w5)((()=>[(0,i.Uk)("Водії")])),_:1}),(0,i.Uk)(" | "),(0,i.Wm)(a,{to:{name:"buses"}},{default:(0,i.w5)((()=>[(0,i.Uk)("Автобуси")])),_:1}),(0,i.Uk)(" | "),(0,i.Wm)(a,{to:{name:"apointment"}},{default:(0,i.w5)((()=>[(0,i.Uk)("Призначення")])),_:1}),(0,i.Uk)(" | "),(0,i.Wm)(a,{to:{name:"contacts"}},{default:(0,i.w5)((()=>[(0,i.Uk)("Контакти")])),_:1})]),(0,i.Wm)(u)],64)}var o=n(7139),a={methods:{...(0,o.nv)(["setData"])},created(){this.setData()}},u=n(89);const d=(0,u.Z)(a,[["render",s]]);var c=d,m=n(2483);const l={class:"home"};function f(e,t,n,r,s,o){return(0,i.wg)(),(0,i.iD)("h1",l,"Вітаємо вас на сторінці автопарку")}var p={name:"HomeView",components:{},methods:{...(0,o.nv)(["setData"])},created(){this.setData()}};const v=(0,u.Z)(p,[["render",f]]);var b=v;const h=[{path:"/",name:"home",component:b},{path:"/drivers",name:"drivers",component:()=>n.e(861).then(n.bind(n,1861))},{path:"/contacts",name:"contacts",component:()=>n.e(89).then(n.bind(n,9089))},{path:"/buses",name:"buses",component:()=>n.e(15).then(n.bind(n,7015))},{path:"/bus-editor/:busId?",name:"bus-editor",component:()=>n.e(183).then(n.bind(n,8183))},{path:"/driver-editor/:driverId?",name:"driver-editor",component:()=>n.e(535).then(n.bind(n,8535))},{path:"/apointment",name:"apointment",component:()=>n.e(871).then(n.bind(n,7871))}],g=(0,m.p7)({history:(0,m.PO)("/"),routes:h});var L=g;const y=[{id:1,licensePlate:"AA5374KJ",seatsNumber:30},{id:2,licensePlate:"BC1234YZ",seatsNumber:25},{id:3,licensePlate:"DE5678WX",seatsNumber:35}],w=[{id:1,name:"Іванов І.І",experience:7},{id:2,name:"Петров П.П",experience:5},{id:3,name:"Сидоров С.С",experience:8},{id:4,name:"Коваленко К.К",experience:6}];n(560);var D={namespaced:!0,state:{busesList:[]},getters:{busesList:e=>e.busesList,busesListForSelect:(e,t,n)=>{let r=Object.values(n.apointments.apointmentsList);return e.busesList.filter((e=>!r.includes(e.id)))},getBusById:({busesList:e})=>t=>e.find((e=>e.id==t))},mutations:{setBuses(e,t){e.busesList=t},deleteBus(e,t){e.busesList=e.busesList.filter((e=>e.id!==t))},updateBus(e,t){const n=e.busesList.findIndex((e=>e.id===t.id));e.busesList[n]=t},setNewBus(e,t){e.busesList.push(t)}},actions:{setBuses({commit:e},t){e("setBuses",t)},deleteBus({commit:e,dispatch:t},n){e("deleteBus",n),t("apointments/deleteApointmentbyId",n,{root:!0})},updateBus({commit:e},t){e("updateBus",t)},setNewBus({commit:e},t){e("setNewBus",t)}}},B={namespaced:!0,state:{driversList:[],filterObj:{}},getters:{filteredDrivers:({driversList:e,filterObj:t})=>e.filter((e=>{const n=!t.name||e.name.toLowerCase().includes(t.name.toLowerCase()),r=!t.experienceFrom||t.experienceFrom<=e.experience,i=!t.experienceTo||t.experienceTo>=e.experience;let s=r&&i&&n;return s})),getDriversForSelect:(e,t,n)=>t.filteredDrivers.filter((e=>!n.apointments.apointmentsList[e.id])),getDriverById:({driversList:e})=>t=>e.find((e=>e.id==t))},mutations:{setDrivers(e,t){e.driversList=t},setFilter(e,t){e.filterObj=t},deleteDriver(e,t){e.driversList=e.driversList.filter((e=>e.id!==t))},updateDriverData(e,t){let n=e.driversList.findIndex((e=>e.id===t.id));e.driversList[n]=t},setNewDriver(e,t){e.driversList.push(t)}},actions:{setDrivers({commit:e},t){e("setDrivers",t)},setFilter({commit:e},t){e("setFilter",t)},deleteDriver({commit:e,dispatch:t},n){e("deleteDriver",n),t("apointments/deleteApointment",n,{root:!0})},updateDriverData({commit:e},t){e("updateDriverData",t)},setNewDriver({commit:e},t){e("setNewDriver",t)}}},k={namespaced:!0,state:{apointmentsList:{1:2}},getters:{getDriverById:(e,t,n)=>e=>n.drivers.driversList.find((t=>t.id==e)),getBusById:(e,t,n)=>e=>n.buses.busesList.find((t=>t.id==e)),getApointmentsList:({apointmentsList:e})=>e},mutations:{deleteApointment(e,t){delete e.apointmentsList[t]},addNewApointment(e,{selctedDriverId:t,selectedBusId:n}){t&&n&&(e.apointmentsList[t]=n)},deleteApointmentbyId(e,t){for(const n in e.apointmentsList)e.apointmentsList[n]==t&&delete e.apointmentsList[n]}},actions:{deleteApointment({commit:e},t){e("deleteApointment",t)},addNewApointment({commit:e},{selctedDriverId:t,selectedBusId:n}){e("addNewApointment",{selctedDriverId:t,selectedBusId:n})},deleteApointmentbyId({commit:e},t){e("deleteApointmentbyId",t)}}},A=(0,o.MT)({state:{},getters:{},mutations:{},actions:{setData({dispatch:e}){e("buses/setBuses",y,{root:!0}),e("drivers/setDrivers",w,{root:!0})}},modules:{drivers:B,buses:D,apointments:k}});(0,r.ri)(c).use(A).use(L).mount("#app")}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var s=t[r]={exports:{}};return e[r].call(s.exports,s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,r,i,s){if(!r){var o=1/0;for(c=0;c<e.length;c++){r=e[c][0],i=e[c][1],s=e[c][2];for(var a=!0,u=0;u<r.length;u++)(!1&s||o>=s)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(a=!1,s<o&&(o=s));if(a){e.splice(c--,1);var d=i();void 0!==d&&(t=d)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[r,i,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{15:"30ec2274",89:"fe8dd8c4",183:"696de37f",535:"77f3937f",861:"22ab209c",871:"3224d374"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{861:"a30debcd",871:"e7f39946"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="common:";n.l=function(r,i,s,o){if(e[r])e[r].push(i);else{var a,u;if(void 0!==s)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var m=d[c];if(m.getAttribute("src")==r||m.getAttribute("data-webpack")==t+s){a=m;break}}a||(u=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+s),a.src=r),e[r]=[i];var l=function(t,n){a.onerror=a.onload=null,clearTimeout(f);var i=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),u&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,i){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var o=function(n){if(s.onerror=s.onload=null,"load"===n.type)r();else{var o=n&&n.type,a=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+a+")");u.name="ChunkLoadError",u.code="CSS_CHUNK_LOAD_FAILED",u.type=o,u.request=a,s.parentNode&&s.parentNode.removeChild(s),i(u)}};return s.onerror=s.onload=o,s.href=t,n?n.parentNode.insertBefore(s,n.nextSibling):document.head.appendChild(s),s},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var i=n[r],s=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(s===e||s===t))return i}var o=document.getElementsByTagName("style");for(r=0;r<o.length;r++){i=o[r],s=i.getAttribute("data-href");if(s===e||s===t)return i}},r=function(r){return new Promise((function(i,s){var o=n.miniCssF(r),a=n.p+o;if(t(o,a))return i();e(r,a,null,i,s)}))},i={143:0};n.f.miniCss=function(e,t){var n={861:1,871:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=r(e).then((function(){i[e]=0}),(function(t){throw delete i[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else{var s=new Promise((function(n,r){i=e[t]=[n,r]}));r.push(i[2]=s);var o=n.p+n.u(t),a=new Error,u=function(r){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var s=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+s+": "+o+")",a.name="ChunkLoadError",a.type=s,a.request=o,i[1](a)}};n.l(o,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,s,o=r[0],a=r[1],u=r[2],d=0;if(o.some((function(t){return 0!==e[t]}))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(u)var c=u(n)}for(t&&t(r);d<o.length;d++)s=o[d],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(c)},r=self["webpackChunkcommon"]=self["webpackChunkcommon"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(4992)}));r=n.O(r)})();
//# sourceMappingURL=app.c8138778.js.map