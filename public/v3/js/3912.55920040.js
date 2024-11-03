"use strict";(globalThis["webpackChunkfirefly_iii"]=globalThis["webpackChunkfirefly_iii"]||[]).push([[3912],{3912:(e,s,r)=>{r.r(s),r.d(s,{default:()=>F});var o=r(9835),t=r(6970);const l={class:"row q-mx-md"},a={class:"col-12"},i={class:"row q-mx-md q-mt-md"},n={class:"col-12"},d=(0,o._)("div",{class:"text-h6"},"Info for new currency",-1),u={class:"row"},m={class:"col-12 q-mb-xs"},c={class:"row"},b={class:"col-12 q-mb-xs"},h={class:"row"},p={class:"col-12 q-mb-xs"},f={class:"row q-mx-md"},g={class:"col-12"},w={class:"row"},y={class:"col-12 text-right"},_={class:"row"},v={class:"col-12 text-right"},E=(0,o._)("br",null,null,-1);function q(e,s,r,q,x,C){const V=(0,o.up)("q-btn"),k=(0,o.up)("q-banner"),S=(0,o.up)("q-card-section"),I=(0,o.up)("q-input"),W=(0,o.up)("q-card"),R=(0,o.up)("q-checkbox"),Z=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(Z,null,{default:(0,o.w5)((()=>[(0,o._)("div",l,[(0,o._)("div",a,[""!==x.errorMessage?((0,o.wg)(),(0,o.j4)(k,{key:0,class:"bg-orange text-white","inline-actions":"",rounded:""},{action:(0,o.w5)((()=>[(0,o.Wm)(V,{flat:"",label:"Dismiss",onClick:C.dismissBanner},null,8,["onClick"])])),default:(0,o.w5)((()=>[(0,o.Uk)((0,t.zw)(x.errorMessage)+" ",1)])),_:1})):(0,o.kq)("",!0)])]),(0,o._)("div",i,[(0,o._)("div",n,[(0,o.Wm)(W,{bordered:""},{default:(0,o.w5)((()=>[(0,o.Wm)(S,null,{default:(0,o.w5)((()=>[d])),_:1}),(0,o.Wm)(S,null,{default:(0,o.w5)((()=>[(0,o._)("div",u,[(0,o._)("div",m,[(0,o.Wm)(I,{modelValue:x.name,"onUpdate:modelValue":s[0]||(s[0]=e=>x.name=e),disable:C.disabledInput,error:x.hasSubmissionErrors.name,"error-message":x.submissionErrors.name,label:e.$t("form.name"),"bottom-slots":"",clearable:"",outlined:"",type:"text"},null,8,["modelValue","disable","error","error-message","label"])])]),(0,o._)("div",c,[(0,o._)("div",b,[(0,o.Wm)(I,{modelValue:x.code,"onUpdate:modelValue":s[1]||(s[1]=e=>x.code=e),disable:C.disabledInput,error:x.hasSubmissionErrors.code,"error-message":x.submissionErrors.code,label:e.$t("form.code"),"bottom-slots":"",clearable:"",outlined:"",type:"text"},null,8,["modelValue","disable","error","error-message","label"])])]),(0,o._)("div",h,[(0,o._)("div",p,[(0,o.Wm)(I,{modelValue:x.symbol,"onUpdate:modelValue":s[2]||(s[2]=e=>x.symbol=e),disable:C.disabledInput,error:x.hasSubmissionErrors.symbol,"error-message":x.submissionErrors.symbol,label:e.$t("form.symbol"),"bottom-slots":"",clearable:"",outlined:"",type:"text"},null,8,["modelValue","disable","error","error-message","label"])])])])),_:1})])),_:1})])]),(0,o._)("div",f,[(0,o._)("div",g,[(0,o.Wm)(W,{class:"q-mt-xs"},{default:(0,o.w5)((()=>[(0,o.Wm)(S,null,{default:(0,o.w5)((()=>[(0,o._)("div",w,[(0,o._)("div",y,[(0,o.Wm)(V,{disable:C.disabledInput,color:"primary",label:"Submit",onClick:C.submitCurrency},null,8,["disable","onClick"])])]),(0,o._)("div",_,[(0,o._)("div",v,[(0,o.Wm)(R,{modelValue:x.doReturnHere,"onUpdate:modelValue":s[3]||(s[3]=e=>x.doReturnHere=e),disable:C.disabledInput,label:"Return here to create another one","left-label":""},null,8,["modelValue","disable"]),E,(0,o.Wm)(R,{modelValue:x.doResetForm,"onUpdate:modelValue":s[4]||(s[4]=e=>x.doResetForm=e),disable:!x.doReturnHere||C.disabledInput,label:"Reset form after submission","left-label":""},null,8,["modelValue","disable"])])])])),_:1})])),_:1})])])])),_:1})}var x=r(2684),C=r(3555);const V={name:"Create",data(){return{submissionErrors:{},hasSubmissionErrors:{},submitting:!1,doReturnHere:!1,doResetForm:!1,errorMessage:"",type:"",name:"",code:"",symbol:"",store:null}},computed:{disabledInput:function(){return this.submitting}},created(){this.resetForm(),this.type=this.$route.params.type,this.store=(0,C.S)()},methods:{resetForm:function(){this.name="",this.code="",this.symbol="",this.resetErrors()},resetErrors:function(){this.submissionErrors={name:"",code:"",symbol:""},this.hasSubmissionErrors={name:!1,code:!1,symbol:!1}},submitCurrency:function(){this.submitting=!0,this.errorMessage="",this.resetErrors();const e=this.buildCurrency();let s=new x.Z;s.post(e).catch(this.processErrors).then(this.processSuccess)},buildCurrency:function(){return{name:this.name,code:this.code,symbol:this.symbol}},dismissBanner:function(){this.errorMessage=""},processSuccess:function(e){if(!e)return;this.store.refreshCacheKey(),this.submitting=!1;let s={level:"success",text:"I am new currency",show:!0,action:{show:!0,text:"Go to currency",link:{name:"currencies.show",params:{code:parseInt(e.data.data.attributes.code)}}}};this.$q.localStorage.set("flash",s),this.doReturnHere&&window.dispatchEvent(new CustomEvent("flash",{detail:{flash:this.$q.localStorage.getItem("flash")}})),this.doReturnHere||this.$router.go(-1)},processErrors:function(e){if(e.response){let s=e.response.data;this.errorMessage=s.message,console.log(s);for(let e in s.errors)s.errors.hasOwnProperty(e)&&(this.submissionErrors[e]=s.errors[e][0],this.hasSubmissionErrors[e]=!0)}this.submitting=!1}}};var k=r(1639),S=r(9885),I=r(7128),W=r(8879),R=r(4458),Z=r(3190),Q=r(6611),$=r(1221),H=r(9984),M=r.n(H);const U=(0,k.Z)(V,[["render",q]]),F=U;M()(V,"components",{QPage:S.Z,QBanner:I.Z,QBtn:W.Z,QCard:R.Z,QCardSection:Z.Z,QInput:Q.Z,QCheckbox:$.Z})}}]);