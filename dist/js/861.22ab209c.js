"use strict";(self["webpackChunkcommon"]=self["webpackChunkcommon"]||[]).push([[861],{1861:function(e,t,i){i.r(t),i.d(t,{default:function(){return g}});var r=i(3396),l=i(9242),s=i(2268);const n=e=>((0,r.dD)("data-v-a271d1fe"),e=e(),(0,r.Cn)(),e),d={class:"drivers list"},a={class:"drivers-filter"},o={class:"drivers-filter__item"},_={class:"drivers-filter__exp"},u=n((()=>(0,r._)("div",null,"Стаж:",-1))),c={class:"drivers-filter__item"},v={class:"drivers-filter__item"},f=n((()=>(0,r._)("div",{class:"list__titles"},[(0,r._)("div",{class:"list__title"},"Піб"),(0,r._)("div",{class:"list__title"},"Стаж")],-1))),m={class:"list__actions"},b=["onClick"];function p(e,t,i,n,p,O){const j=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",d,[(0,r._)("div",a,[(0,r._)("label",o,[(0,r.Uk)(" Піб "),(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>p.filterObj.name=e),type:"text"},null,512),[[l.nr,p.filterObj.name]])]),(0,r._)("div",_,[u,(0,r._)("label",c,[(0,r.Uk)("від "),(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>p.filterObj.experienceFrom=e),type:"number"},null,512),[[l.nr,p.filterObj.experienceFrom]])]),(0,r._)("label",v,[(0,r.Uk)("до "),(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>p.filterObj.experienceTo=e),type:"number"},null,512),[[l.nr,p.filterObj.experienceTo]])])])]),f,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.filteredDrivers,(t=>((0,r.wg)(),(0,r.iD)("div",{class:"list__item",key:t.id},[(0,r._)("div",null,[(0,r._)("div",null,(0,s.zw)(t.name),1)]),(0,r._)("div",null,[(0,r._)("div",null,(0,s.zw)(t.experience),1)]),(0,r._)("div",m,[(0,r.Wm)(j,{to:{name:"driver-editor",params:{driverId:t.id}},class:"button"},{default:(0,r.w5)((()=>[(0,r.Uk)("edit")])),_:2},1032,["to"]),(0,r._)("button",{onClick:i=>e.deleteDriver(t.id),class:"button"},"delete",8,b)])])))),128)),(0,r.Wm)(j,{to:{name:"driver-editor"},class:"button"},{default:(0,r.w5)((()=>[(0,r.Uk)("Додати водія")])),_:1})])}var O=i(7139),j={name:"DriversVue",data(){return{filterObj:{}}},watch:{filterObj:{handler(e){sessionStorage.setItem("filterObj",JSON.stringify(e)),this.setFilter(e)},deep:!0}},computed:{...(0,O.Se)("drivers",["filteredDrivers"])},created(){sessionStorage.getItem("filterObj")||sessionStorage.setItem("filterObj",JSON.stringify({})),this.filterObj=JSON.parse(sessionStorage.getItem("filterObj"))},methods:{...(0,O.nv)("drivers",["setFilter","deleteDriver"])}},k=i(89);const w=(0,k.Z)(j,[["render",p],["__scopeId","data-v-a271d1fe"]]);var g=w}}]);
//# sourceMappingURL=861.22ab209c.js.map