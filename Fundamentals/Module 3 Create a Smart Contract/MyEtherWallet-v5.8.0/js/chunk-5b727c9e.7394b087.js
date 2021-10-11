(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b727c9e"],{"0d4a":function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return b}));var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"initial-state-unstoppable"},[n("form",{staticClass:"send-form"},[n("div",{staticClass:"title-container"},[n("div",{staticClass:"title"},[n("span",[t._v(" "+t._s(t.$t("unstoppable.search-domain-prompt"))+" ")])])]),n("div",{staticClass:"the-form"},[n("div",{staticClass:"domain-name"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.localSearch,expression:"localSearch"}],class:[t.searchErr?"errored":""],attrs:{placeholder:t.$t("unstoppable.ph.six-char"),type:"text",name:""},domProps:{value:t.localSearch},on:{input:function(e){e.target.composing||(t.localSearch=e.target.value)}}}),n("span",{class:""!==t.localSearch?"move-right":""},[t._v("."+t._s(t.tld))]),""!==t.localSearch?n("img",{staticClass:"close",attrs:{src:a("9c84")},on:{click:function(e){return t.clearInput()}}}):t._e()]),n("div",{staticClass:"submit-button-container"},[n("button",{class:[t.searchErr||""===t.localSearch?"disabled":"","submit-button large-round-button-green-filled clickable"],on:{click:function(e){return e.preventDefault(),t.checkDomain(e)}}},[n("span",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}]},[t._v(" "+t._s(t.$t("unstoppable.check-domain"))+" ")]),n("i",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"fa fa-spinner fa-spin"})])])]),n("div",{staticClass:"error-message-container"},[n("p",{directives:[{name:"show",rawName:"v-show",value:t.searchErr,expression:"searchErr"}],staticClass:"erroredMsg"},[t.isValidLength||""===t.localSearch?n("span",[t._v(" "+t._s(t.$t("unstoppable.warning.invalid-symbol"))+" ")]):n("span",[t._v(" "+t._s(t.$t("unstoppable.warning.not-enough-char"))+" ")])])])]),t.cart.length?n("div",{staticClass:"cart-container"},[n("span",{staticClass:"cart-left"},[n("div",[n("span",{staticClass:"bold"},[t._v(t._s(t.$t("unstoppable.cart"))+":")]),t._v(" "+t._s(t.cart.length)+" "+t._s(t.$t("unstoppable.items"))+" ")]),t._l(t.cart,(function(e){return n("div",{key:e.label+"."+e.extension,staticClass:"cart-items-container"},[n("div",{staticClass:"cart-item-row"},[n("span",[t._v(t._s(e.label)+"."+t._s(e.extension)+" - $"+t._s(e.price))]),n("img",{staticClass:"cart-close",attrs:{src:a("9c84")},on:{click:function(a){return t.removeFromCart(e)}}})])])})),n("div",{staticClass:"cart-total-container"},[n("span",{staticClass:"bold"},[t._v(t._s(t.$t("unstoppable.total"))+":")]),t._v(" $"+t._s(t.cart.reduce((function(t,e){return t+e.price}),0))+" ")])],2),n("button",{staticClass:"mid-round-button-green-filled buy-btn",on:{click:function(e){return t.checkout()}}},[t._v(" "+t._s(t.$t("unstoppable.checkout"))+" ")])]):t._e(),t._l(t.searchResults,(function(e){return n("div",{key:e.label,staticClass:"results-wrapper"},[n("div",{staticClass:"result-wrapper"},[e.first?n("div",{staticClass:"result-title"},[n("span",[t._v(t._s(t.$t("unstoppable.result")))])]):t._e(),n("div",{class:["result-container",e.available?"avail-container":"unavail-container"]},[n("div",{staticClass:"left-container"},[n("span",{staticClass:"domain-name"},[t._v(t._s(e.label)+"."+t._s(t.tld))]),e.available?n("span",[n("span",{staticClass:"eth-text"},[t._v("~ "+t._s(t.convertedEthPrice(e.price))+" "+t._s(t.$t("common.currency.eth")))]),n("span",{staticClass:"price-text"},[t._v("($"+t._s(e.price)+")")])]):t._e()]),n("div",{staticClass:"right-container"},[n("div",{class:["title",e.available?"avail-text":"unavail-text"]},[t._v(" "+t._s(e.available?t.$t("unstoppable.is-available"):t.$t("unstoppable.unavailable"))+" ")]),e.available&&!t.isItemInCart(e)?n("button",{staticClass:"mid-round-button-green-filled buy-btn",on:{click:function(a){return t.addToCart(e)}}},[t._v(" "+t._s(t.$t("unstoppable.add-to-cart"))+" ")]):t._e(),e.available&&t.isItemInCart(e)?n("button",{staticClass:"mid-round-button-green-filled buy-btn",on:{click:function(a){return t.removeFromCart(e)}}},[t._v(" "+t._s(t.$t("unstoppable.undo"))+" ")]):t._e()])])])])})),n("interface-bottom-text",{attrs:{"link-text":t.$t("common.help-center"),question:t.$t("common.have-issues"),link:"https://kb.myetherwallet.com"}})],2)},s=[],r=(a("caad"),a("d81d"),a("b680"),a("d3b7"),a("ac1f"),a("2532"),a("5319"),a("53ca")),i=(a("96cf"),a("1da1")),c=a("5530"),o=a("539d"),l=a("2f62"),u=a("ce96"),p=a("901e"),h=a.n(p),A={components:{"interface-bottom-text":o["a"]},props:{checkDomain:{type:Function,default:function(){}},addItemToCart:{type:Function,default:function(){}},removeItemFromCart:{type:Function,default:function(){}},searchResults:{type:Array,default:function(){return[]}},loading:{type:Boolean,default:!1},hostName:{type:String,default:""},tld:{type:String,default:"crypto"},cart:{type:Array,default:function(){return[]}},searchErr:{type:Boolean,default:!1}},data:function(){return{localSearch:this.hostName,ethPrice:0}},computed:Object(c["a"])(Object(c["a"])({},Object(l["c"])("main",["online"])),{},{isValidLength:function(){return this.localSearch.replace(".".concat(this.tld),"").length>=6}}),watch:{localSearch:function(t){this.$emit("searchChange",t)},search:function(t){this.localSearch=t}},mounted:function(){this.online&&this.getEthPrice()},methods:{checkout:function(){this.$router.push({name:"payWithCrypto"})},addToCart:function(t){this.addItemToCart(t)},removeFromCart:function(t){this.removeItemFromCart(t)},isItemInCart:function(t){return this.cart.map((function(t){return t.label})).includes(t.label)},convertedEthPrice:function(t){var e=0;return this.ethPrice?(t>0&&(e=new h.a(t).dividedBy(this.ethPrice).toFixed(8)),e):"Unknown"},clearInput:function(){this.localSearch=""},getEthPrice:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://cryptorates.mewapi.io/ticker?filter=ETH").then((function(t){return t.json()})).catch((function(t){u["e"].responseHandler(t,u["e"].ERROR)}));case 2:a=e.sent,t.ethPrice="object"===Object(r["a"])(a)?a.data.ETH.quotes.USD.price:0;case 4:case"end":return e.stop()}}),e)})))()}}},d=A,v=(a("7004"),a("2877")),m=Object(v["a"])(d,n,s,!1,null,"ae7e1998",null),b=m.exports},"344b":function(t,e,a){},7004:function(t,e,a){"use strict";var n=a("344b"),s=a.n(n);s.a},"9c84":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAOKADAAQAAAABAAAAOAAAAAANV2hTAAADj0lEQVRoBe2Y70sUQRjHZ249z7turzrTJKg3vdDMLDG1hCL0PD2hyBcSVoYRBP0H/Qn9AxUERSQVcS8KgyTTUzIzLaMUIghfRhAlpXY/vNubnmdtY086bXdnpGDmze7tzDzzfL7Pc7vPDCGySQWkAlIBqYBUQCogFZAKSAWkAlIBOwoodibhnP1tp8u37ay8XNVY0z87PZ22a2e1eQc7zwXLdlT0bS+vfvfxw8yn1cbm63Pl61jrOWPaVUbIibnPmUfh7u4Na4232o9w6YX4IGMspGnsktX5xnjbgC7Fc5IQ+p4Rdpg3pAmuhlL6yl/k6TQctnqlVieYx9e195RltWQMnu0ilIyqarB9JHpl0TzG6v0f4FpGHtz8ZtWOMd4RIBppONa1NZNiw3DrGFKHm48PQVbs+xU5R3Don2NANJILSZ+p6uaI1UjWd5wpzsbTg8tw5KW/qCjsJHLoFzYugGhIh1wiMcJYJaHWIFfCMTXQMhW99h3tOm3cANERMySlZMyvBtvWiiTCafGlIZi+lxI6yQJqmBcc+sQVEA02dnSXphKZYYwkQnoKfZGxvhsL2LeyiYbD9bgDolGEXEpkYvAN250PsvZo1xaSJkMgRDW4MUECaivPyKEf2IQAouEcSEKeezy+NiOS6wUnFBCNH4qcLUlkEzGoeKpASR0yyRIec+QKXK7wRP/teRwvogmLoOFsDiSl4wDrh7TcA7nzooAqrSLh0AfhgLiIGRJ/rxccLmW7FsXJ/0MTDmiOHpRf41AEzBBGDmSY9rghciogWiShgPgmTbDk8O+XTKG3lbhJE0BO65DZ7IBoSGGA+T4TUw/vfgHIZh2SsIYMQNZ2nt8oKpJCXjI5cHmqGfO3UESJZgjGPYIIh6WaUcVgPWp84I1F8YqRVLzuJrh9CzuIejq/ICSSXCNoLrb/dkchuh7lBmgHzojoyu0Sr70g2ueSojoc7ur1vSAeXVjb8E7ev/XVHfA1w3/xDWOkbjGZHDhyvGeTIYCTq2NAPJfhcWQxHr0+lwuZesID0lGKLh86peA8hlVA+TVaXOKODPT2/nCi+D9z6GSGg9R6GiwtaHcKZwhjhoTCdUr1ekJ2z2dsp2hWS93ByPGGQ0g9XVVfCLLiNaxRu5hMRQ14q1fbgJQqFyC/7/GMnNl5hPQqrhDUr4OKQi+a++S9VEAqIBWQCkgFpAJSAamAVEAqIBUQr8BPpaT7Jsw3b9QAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=../sourcemaps/js/chunk-5b727c9e.7394b087.js.map