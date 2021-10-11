(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e6f43f5"],{"3d35":function(t,e,n){"use strict";var a=n("f2ae"),s=n.n(a);s.a},"7aac5":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return g}));var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"crypto-container"},[a("div",{staticClass:"domain-header"},[a("div",{staticClass:"items-container"},t._l(t.cart,(function(e){return a("h4",{key:e.label+"."+e.extension},[t._v(" "+t._s(e.label+"."+e.extension)+" - $"+t._s(e.price)+" ")])})),0),a("h4",{staticClass:"domain-price"},[a("span",{staticClass:"eth-text"},[t._v(t._s(t.convertedEthPrice)+" "+t._s(t.$t("common.currency.eth")))]),a("span",{staticClass:"price-text"},[t._v("($"+t._s(t.cartTotal)+")")])])]),a("div",{staticClass:"crypto-form-container"},[a("div",{staticClass:"crypto-form-header"},[a("h3",[t._v(t._s(t.$t("unstoppable.pay-with-crypto")))]),a("h5",{directives:[{name:"show",rawName:"v-show",value:!t.chargeId,expression:"!chargeId"}],staticClass:"pay-with-card",on:{click:t.handlePayWithCardClick}},[t._v(" "+t._s(t.$t("unstoppable.pay-with-credit-card"))+" ")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.paymentAddress||!t.paymentAmount,expression:"!paymentAddress || !paymentAmount"}]},[a("div",{staticClass:"eth-balance-container"},[a("span",{staticClass:"your-bal"},[t._v(t._s(t.$t("unstoppable.your-balance")))]),a("div",{staticClass:"right-container"},[a("img",{attrs:{src:n("9165"),alt:"eth"}}),a("div",{staticClass:"balance"},[a("span",[t._v(t._s(t.balance))]),a("span",{staticClass:"eth-text"},[t._v(t._s(t.$t("common.currency.eth")))])])])]),a("span",{directives:[{name:"show",rawName:"v-show",value:t.balance<t.convertedEthPrice,expression:"balance < convertedEthPrice"}],staticClass:"error-message"},[t._v(" "+t._s(t.$t("unstoppable.insufficient-balance"))+" ")]),a("div",{staticClass:"btn-container"},[a("button",{staticClass:"back-btn",on:{click:function(e){return t.goBack()}}},[a("span",[t._v(" "+t._s(t.$t("common.back"))+" ")])]),a("button",{class:[t.balance<t.convertedEthPrice?"disabled":"","large-round-button-green-filled clickable pay-button"],attrs:{disabled:t.loading||t.balance<t.convertedEthPrice},on:{click:t.submit}},[a("span",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}]},[t._v(" "+t._s(t.$t("unstoppable.continue"))+" ")]),a("i",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"fa fa-spinner fa-spin"})])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.paymentAddress&&t.paymentAmount,expression:"paymentAddress && paymentAmount"}]},[a("div",{staticClass:"crypto-payment-field-container"},[a("div",{staticClass:"crypto-field-container"},[a("div",{staticClass:"crypto-field"},[a("div",{staticClass:"right"},[a("img",{staticClass:"copy-button",attrs:{src:t.copyIcon,alt:""},on:{click:t.copyPaymentAddress}}),a("input",{ref:"payment-address",attrs:{type:"hidden"},domProps:{value:t.paymentAddress}}),a("div",{staticClass:"payment-addr"},[t._v(t._s(t.paymentAddress))])]),a("span",{staticClass:"crypto-field-label"},[t._v(" "+t._s(t.$t("unstoppable.address"))+" ")])])]),a("div",{class:["crypto-field-container margin-bottom"]},[a("div",{staticClass:"crypto-field-container"},[a("div",{staticClass:"crypto-field"},[a("div",{staticClass:"right"},[a("img",{staticClass:"eth-icon",attrs:{src:n("9165"),alt:"eth"}}),a("input",{ref:"payment-amount",attrs:{type:"hidden"},domProps:{value:t.paymentAmount}}),a("div",{staticClass:"amount-container"},[a("div",{staticClass:"amount-text"},[t._v(t._s(t.paymentAmount))]),a("span",{staticClass:"eth-text"},[t._v(t._s(t.$t("common.currency.eth")))])])]),a("span",{staticClass:"crypto-field-label"},[t._v(" "+t._s(t.$t("unstoppable.payment-amount"))+" ")])])])]),a("div",{class:["qr-code margin-bottom"]},[a("qrcode",{attrs:{value:t.paymentAddress,options:{size:160}}})],1),a("h6",{directives:[{name:"show",rawName:"v-show",value:t.pendingPayment&&t.confirmationsRequired,expression:"pendingPayment && confirmationsRequired"}],staticClass:"payment-pending"},[t._v(" "+t._s(t.$t("unstoppable.pending-crypto-payment",{confirmations:t.confirmations,confirmationsRequired:t.confirmationsRequired}))+" ")]),a("div",{staticClass:"btn-container"},[a("button",{staticClass:"back-btn",on:{click:function(e){return t.goBack()}}},[a("span",[t._v(" "+t._s(t.$t("common.back"))+" ")])]),a("button",{class:["large-round-button-green-filled clickable pay-button send-payment-button"],attrs:{disabled:t.loading||t.pendingPayment},on:{click:t.sendPayment}},[a("span",{directives:[{name:"show",rawName:"v-show",value:!t.loading&&!t.pendingPayment,expression:"!loading && !pendingPayment"}]},[t._v(" "+t._s(t.$t("unstoppable.send-payment"))+" ")]),a("i",{directives:[{name:"show",rawName:"v-show",value:t.loading||t.pendingPayment,expression:"loading || pendingPayment"}],staticClass:"fa fa-spinner fa-spin"})])])])])])])])},s=[],i=(n("99af"),n("d81d"),n("13d5"),n("b680"),n("d3b7"),n("25f0"),n("b85c")),r=n("53ca"),o=(n("96cf"),n("1da1")),c=n("5530"),d=n("901e"),l=n.n(d),p=n("fd74"),u=n.n(p),m=n("2f62"),h=n("ce96"),f={props:{cart:{type:Array,default:function(){return[]}},email:{type:String,default:""},account:{type:Object,default:function(){}},web3:{type:Object,default:function(){}},copiedToClipboard:{type:Function,default:function(){}},setOrderNumber:{type:Function,default:function(){}}},data:function(){return{complete:!1,cryptoOptions:{},loading:!1,pendingPayment:!1,paymentAddress:"",paymentAmount:0,chargeId:"",confirmations:0,confirmationsRequired:0,copyIcon:u.a,ethPrice:0}},computed:Object(c["a"])(Object(c["a"])({},Object(m["c"])("main",["online"])),{},{cartTotal:function(){return this.cart.reduce((function(t,e){return t+e.price}),0)},convertedEthPrice:function(){var t=0;return this.cartTotal>0&&(t=new l.a(this.cartTotal).dividedBy(this.ethPrice).toFixed(8)),t},balance:function(){return this.account&&this.account.balance?new l.a(this.web3.utils.fromWei(this.account.balance.toString())).toFixed(8):"0"}}),beforeMount:function(){var t=this;this.cart.length||this.$router.push({name:"unstoppableInitialState"}),this.interval=setInterval((function(){t.chargeId&&t.getCharge(t.chargeId)}),8e3)},mounted:function(){this.online&&this.getEthPrice()},beforeDestroy:function(){this.interval&&clearInterval(this.interval)},methods:{goBack:function(){this.$router.push("/interface/dapps/unstoppable")},getEthPrice:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://cryptorates.mewapi.io/ticker?filter=ETH").then((function(t){return t.json()})).catch((function(t){h["e"].responseHandler(t,h["e"].ERROR)}));case 2:n=e.sent,t.ethPrice="object"===Object(r["a"])(n)?n.data.ETH.quotes.USD.price:0;case 4:case"end":return e.stop()}}),e)})))()},copyPaymentAmount:function(){this.$refs["payment-amount"].setAttribute("type","text"),this.$refs["payment-amount"].select(),document.execCommand("copy"),this.$refs["payment-amount"].setAttribute("type","hidden"),this.copiedToClipboard()},copyPaymentAddress:function(){this.$refs["payment-address"].setAttribute("type","text"),this.$refs["payment-address"].select(),document.execCommand("copy"),this.$refs["payment-address"].setAttribute("type","hidden"),this.copiedToClipboard()},sendPayment:function(){var t=this;this.loading=!0,this.web3.eth.sendTransaction({from:this.account.address,to:this.paymentAddress,value:this.web3.utils.toWei(this.paymentAmount.toString())}).on("transactionHash",(function(){t.pendingPayment=!0,t.loading=!1})).on("error",(function(){t.loading=!1}))},getCharge:function(t){var e=this;return fetch("https://unstoppabledomains.com/api/v1/resellers/myetherwallet/users/".concat(this.email,"/orders/coinbase-charge/").concat(t)).then((function(t){if(200===t.status)return t.json();throw new Error("Failed to get charge info")})).then((function(t){var n=t.charge;e.paymentAddress&&e.paymentAmount||(e.paymentAddress=n.data.addresses.ethereum,e.paymentAmount=+n.data.pricing.ethereum.amount);var a,s=Object(i["a"])(n.data.payments);try{for(s.s();!(a=s.n()).done;){var r=a.value;"ethereum"===r.network&&("PENDING"===r.status&&(e.pendingPayment=!0),e.confirmations=r.block.confirmations,e.confirmationsRequired=r.block.confirmations_required,"CONFIRMED"===r.status&&e.$router.push({name:"claimPending"}))}}catch(o){s.e(o)}finally{s.f()}}))},handlePayWithCardClick:function(){this.$router.push({name:"payWithStripe"})},submit:function(){var t=this;this.account&&this.account.address&&(this.loading=!0,fetch("https://unstoppabledomains.com/api/v1/resellers/myetherwallet/users/".concat(this.email,"/orders"),{method:"POST",headers:{"content-type":"Application/JSON"},body:JSON.stringify({order:{domains:this.cart.map((function(e){return{name:e.label+"."+e.extension,owner:{address:t.account.address},resolution:{crypto:{ETH:{address:t.account.address}}}}})),payment:{type:"coinbase"}}})}).then((function(t){if(200===t.status)return t.json();throw new Error("Failed to create charge")})).then((function(e){var n=e.order;t.setOrderNumber(n.orderNumber),t.getCharge(n.payment.tokenId).then((function(){t.chargeId=n.payment.tokenId,t.loading=!1}))})))}}},y=f,v=(n("3d35"),n("2877")),b=Object(v["a"])(y,a,s,!1,null,"12f273c7",null),g=b.exports},f2ae:function(t,e,n){},fd74:function(t,e,n){t.exports=n.p+"img/copy.ec4723ca.svg"}}]);
//# sourceMappingURL=../sourcemaps/js/chunk-1e6f43f5.8be50a6f.js.map