"use strict";(self["webpackChunkcommon"]=self["webpackChunkcommon"]||[]).push([[535],{8535:function(e,r,t){t.r(r),t.d(r,{default:function(){return l}});var i=t(3396),n=t(9242),d=t(2268);function u(e,r,t,u,a,v){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",null,[(0,i._)("label",null,[(0,i.Uk)("Піб "),(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":r[0]||(r[0]=e=>a.driver.name=e),type:"text"},null,512),[[n.nr,a.driver.name]])]),(0,i._)("label",null,[(0,i.Uk)("Стаж "),(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":r[1]||(r[1]=e=>a.driver.experience=e),type:"number"},null,512),[[n.nr,a.driver.experience]])])]),(0,i._)("button",{onClick:r[2]||(r[2]=(...e)=>v.buttonAction&&v.buttonAction(...e))},(0,d.zw)(v.buttonTitle),1)],64)}t(560);var a=t(7139),v={name:"DriverEditor",data(){return{driver:{}}},computed:{...(0,a.Se)("drivers",["getDriverById"]),getDriverId(){return this.$route.params.driverId},buttonTitle(){return this.getDriverId?"Зберегти":"Створити"}},created(){this.getDriverId&&(this.driver={...this.getDriverById(this.getDriverId)})},methods:{...(0,a.nv)("drivers",["setNewDriver","updateDriverData"]),buttonAction(){this.checkDriverData()&&(this.getDriverId?this.updateDriverData(this.driver):this.setNewDriver({...this.driver,id:(new Date).getTime()}),this.$router.push({name:"drivers"}))},checkDriverData(){return this.driver.name&&this.driver.experience}}},s=t(89);const o=(0,s.Z)(v,[["render",u]]);var l=o}}]);
//# sourceMappingURL=535.77f3937f.js.map