(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bf460a50"],{"24a1":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"multi-manager-container"},[n("div",{staticClass:"title-container"},[n("h3",[e._v(e._s(e.$t("ens.ens-manager.title")))]),n("p",[e._v(e._s(e.$t("ens.ens-manager.description")))])]),e.loading?n("div",[n("i",{attrs:{clas:"fa fa-spinner fa-spin"}}),e._v(" "+e._s(e.$t("ens.fetching"))+" ")]):0!==e.names.length||e.loading?n("div",{staticClass:"name-container"},e._l(e.names,(function(t){return n("div",{key:t["name"],staticClass:"information-container"},[n("p",{staticClass:"name-container"},[e._v(" "+e._s(t.name)+"."+e._s(e.network.type.ens.registrarTLD)+" ")]),n("p",[e._v(e._s(t.expiration))]),n("button",{directives:[{name:"show",rawName:"v-show",value:0!==t.name.indexOf("0x"),expression:"name.name.indexOf('0x') !== 0"}],class:["action-button",e.nameTextAndClassValue(t).class],on:{click:function(n){return e.methodCall(t.name+"."+e.network.type.ens.registrarTLD,t)}}},[e._v(" "+e._s(e.nameTextAndClassValue(t).text)+" ")])])})),0):n("div",{staticClass:"no-ens-container"},[e._v(" "+e._s(e.$t("ens.no-names-found",{address:e.account.address}))+" ")])])},i=[],s=(n("99af"),n("4160"),n("caad"),n("d81d"),n("fb6a"),n("b0c0"),n("d3b7"),n("ac1f"),n("1276"),n("159b"),n("5530")),r=n("b7d3"),c=n("2f62"),o=n("ce96"),u=n("2e13"),d="0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",l="0x78e21d038fcbb6d56f825dc1e8d8acd965744adb",f={props:{renewName:{type:Function,default:function(){}},checkDomain:{type:Function,default:function(){}}},data:function(){return{names:[],loading:!0}},computed:Object(s["a"])({},Object(c["c"])("main",["account","network","web3"])),mounted:function(){this.loading=!0;var e=fetch("https://nft2.mewapi.io/tokens?owner=".concat(this.account.address,"&chain=mainnet")).then((function(e){return e.json()}));e.then(this.setExpiry)},methods:{nameTextAndClassValue:function(e){var t=e.name.split(".").length>1;if(!t){if(e.gracePeriod&&!e.expired)return{text:this.$t("ens.renew"),class:"renew-class"};if(e.expired&&!e.gracePeriod)return{text:this.$t("ens.register"),class:"expired-class"}}return{text:this.$t("ens.manage"),class:""}},setExpiry:function(e){var t=this,n=e.hasOwnProperty(d)?e[d].tokens:[];if(n.length>0){var a=n.map((function(e){return e.id})),i=new this.web3.eth.Contract(u["a"],l),s=i.methods.getExpirationDates(d,a).call().then((function(e){return e})).catch((function(){o["e"].responseHandler(t.$t("ens.error.something-went-wrong"),o["e"].ERROR)}));s.then((function(e){if(e){e.forEach((function(e,t){var a=1e3*e,i=new Date(a);i.setDate(i.getDate()+90);var s=i>(new Date).getTime(),r=i.getTime()<(new Date).getTime(),c=new Date(a);n[t].gracePeriod=r?s:r,n[t].expired=r,n[t].expireDateValue=c,n[t].expiration="".concat(c.toLocaleDateString()," ").concat(c.toLocaleTimeString())}));var a=n.slice().sort((function(e,t){return e.expireDateValue-t.expireDateValue}));t.names=a,t.loading=!1}}))}else this.loading=!1},methodCall:function(e,t){t.gracePeriod&&!t.expired?this.checkDomain(e,!0):this.checkDomain(e,!1)},showBlockie:function(e){return!("controller"!==e&&"registrant"!==e&&"resolver"!==e)},shouldHide:function(e,t){var n=["name","id","description","image","expired"];return!n.includes(e)&&("controller"!==e||!t["expired"])},isAddress:r["a"]}},p=f,m=(n("feb9"),n("2877")),h=Object(m["a"])(p,a,i,!1,null,"8c955cba",null),g=h.exports},"2e13":function(e,t,n){"use strict";var a=[{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{constant:!0,inputs:[{internalType:"address",name:"ensAdd",type:"address"},{internalType:"uint256[]",name:"labelHases",type:"uint256[]"}],name:"getExpirationDates",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],payable:!1,stateMutability:"view",type:"function"}];t["a"]=a},8487:function(e,t,n){},feb9:function(e,t,n){"use strict";var a=n("8487"),i=n.n(a);i.a}}]);
//# sourceMappingURL=../sourcemaps/js/chunk-bf460a50.3370f643.js.map