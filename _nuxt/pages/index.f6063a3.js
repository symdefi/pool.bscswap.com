(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{298:function(e,t,r){var content=r(669);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(40).default)("4e16d1fc",content,!0,{sourceMap:!1})},668:function(e,t,r){"use strict";var c=r(298);r.n(c).a},669:function(e,t,r){(t=r(39)(!1)).push([e.i,".intro[data-v-3f9aed39]{background-color:#eee;padding:1rem}.cover[data-v-3f9aed39]{text-align:center}.title[data-v-3f9aed39]{margin-bottom:.1rem!important}.desc[data-v-3f9aed39]{font-size:.9rem;color:#999}@media (max-width:767px){.col-md-4.cow[data-v-3f9aed39]{width:100%}.cow.card img.tokenlogo[data-v-3f9aed39]{max-width:100px}}.cow.card img.tokenlogo[data-v-3f9aed39]{display:block;margin:0 auto;max-width:150px}.cover img[data-v-3f9aed39]{display:inline-block;width:50px;text-align:center}.cow[data-v-3f9aed39]{margin-bottom:1rem}.cow img[data-v-3f9aed39]{width:100%;padding:1rem;display:inline-block}.avatar[data-v-3f9aed39],.cow img[data-v-3f9aed39]{text-align:center}.avatar[data-v-3f9aed39]{font-size:5rem}.milk[data-v-3f9aed39]{width:3rem}.apy[data-v-3f9aed39]{font-size:.9rem;color:#007bff}",""]),e.exports=t},671:function(e,t,r){"use strict";r.r(t);r(29),r(10),r(41),r(20);var c=r(3),B=r(38),d=r(261),n=r(217),o={data:function(){return{cows:B.default.cows,priceBSWAPUSDT:null,priceLFIBAI:null,apy:{1:"--",2:"--",3:"--",4:"--",5:"--",6:"--",7:"--",8:"--",9:"--",10:"--",11:"--",12:"--",13:"--",14:"--",15:"--",16:"--",17:"--",18:"--",19:"--",20:"--",21:"--",22:"--",23:"--",24:"--",25:"--",26:"--",27:"--",28:"--",29:"--",30:"--"}}},methods:{},mounted:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var r,B,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new d.f,B=[r.getPriceOfBNBBUSD(),r.getPriceOfDEGENBNB(),r.getPriceOfBHCBNB(),r.getPriceOfEARTHBNB(),r.getPriceOfBUSDBNB(),r.getPriceOfMOONUSDT(),r.getPriceOfRABBITUSDT(),r.getPriceOfBSWAPUSDT(),r.getPriceOfCAKEBNB(),r.getPriceOfBURGERBNB(),r.getPriceOfTHUGSBNB(),r.getPriceOfDRUGSBNB(),r.getPriceOfLFIBNB()],t.next=4,Promise.all(B);case 4:o=t.sent,e.priceDEGENBUSD=Object(n.BigNumber)(o[0]).times(Object(n.BigNumber)(o[1])),e.priceDEGENBNB=Object(n.BigNumber)(o[1]),e.priceBHCBUSD=Object(n.BigNumber)(o[0]).times(Object(n.BigNumber)(o[2])),e.priceBHCBNB=Object(n.BigNumber)(o[2]),e.priceEARTHBUSD=Object(n.BigNumber)(o[0]).times(Object(n.BigNumber)(o[3])),e.priceEARTHBNB=Object(n.BigNumber)(o[3]),e.priceMOONUSDT=Object(n.BigNumber)(o[5]),e.priceRABBITUSDT=Object(n.BigNumber)(o[6]),e.priceBSWAPUSDT=Object(n.BigNumber)(o[7]),e.priceBUSDBNB=Object(n.BigNumber)(o[4]),e.priceBNBBUSD=Object(n.BigNumber)(o[0]),e.priceBSWAPBNB=Object(n.BigNumber)(o[7]).div(o[0]),e.priceCAKEBNB=Object(n.BigNumber)(o[8]),e.priceBURGERBNB=Object(n.BigNumber)(o[9]),e.priceTHUGSBNB=Object(n.BigNumber)(o[10]),e.priceDRUGSBNB=Object(n.BigNumber)(o[11]),e.priceLFIBNB=Object(n.BigNumber)(o[12]),e.priceLFIBAI=Object(n.BigNumber)(o[12]).div(o[0]),e.cows.map(function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(r){var c,B,o,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.initialized){t.next=11;break}return new d.e(r.stakeToken.address,r.stakeToken.symbol,r.stakeToken.decimals),c=new d.c(r.address,r.stakeToken,r.yieldToken),t.next=5,c.rewardRate();case 5:return B=t.sent,t.next=8,c.totalSupply();case 8:o=t.sent,m=B.times(31536e3).div(o),1==r.id?e.apy[1]=m.times(e.priceLFIBNB).times(100).toFixed(2):2==r.id?e.apy[2]=m.times(e.priceLFIBAI).times(100).toFixed(2):3==r.id?e.apy[3]=m.times(e.priceLFIBNB).div(e.priceCAKEBNB.plus(1)).times(100).toFixed(2):4==r.id?e.apy[4]=m.times(e.priceBSWAPBNB).times(100).toFixed(2):5==r.id?e.apy[5]=m.times(e.priceBSWAPUSDT).times(100).toFixed(2):6==r.id?e.apy[6]=m.times(e.priceBSWAPBNB).div(e.priceCAKEBNB.plus(1)).times(100).toFixed(2):7==r.id?e.apy[7]=m.times(e.priceBSWAPBNB).div(e.priceBURGERBNB.plus(1)).times(100).toFixed(2):8==r.id?e.apy[8]=m.times(e.priceBSWAPBNB).div(e.priceTHUGSBNB.plus(1)).times(100).toFixed(2):9==r.id?e.apy[9]=m.times(e.priceBSWAPBNB).div(e.priceDRUGSBNB.plus(1)).times(100).toFixed(2):10==r.id?e.apy[10]=new n.BigNumber(0):11==r.id?e.apy[11]=new n.BigNumber(0):12==r.id?e.apy[12]=new n.BigNumber(0):13==r.id?e.apy[13]=new n.BigNumber(0):14==r.id?e.apy[14]=new n.BigNumber(0):15==r.id?e.apy[15]=new n.BigNumber(0):16==r.id?e.apy[16]=new n.BigNumber(0):17==r.id?e.apy[17]=new n.BigNumber(0):18==r.id?e.apy[18]=new n.BigNumber(0):19==r.id?e.apy[19]=new n.BigNumber(0):20==r.id?e.apy[20]=m.times(e.priceMOONUSDT).times(100).toFixed(2):21==r.id?e.apy[21]=m.times(e.priceEARTHBUSD).times(100).toFixed(2):22==r.id?e.apy[22]=m.times(e.priceMOONUSDT).div(e.priceMOONUSDT.plus(1)).times(100).toFixed(2):23==r.id?e.apy[23]=m.times(e.priceMOONUSDT).div(e.priceEARTHBUSD.plus(1)).times(100).toFixed(2):24==r.id?e.apy[24]=m.times(e.priceMOONUSDT).div(e.priceBNBBUSD.plus(1)).times(100).toFixed(2):25==r.id?e.apy[25]=m.times(e.priceBHCBNB).div(e.priceDEGENBNB.plus(1)).times(100).toFixed(2):26==r.id?e.apy[26]=m.times(e.priceBHCBNB).div(e.priceBHCBNB.plus(1)).times(100).toFixed(2):27==r.id?e.apy[27]=m.times(e.priceBHCBNB).div(e.priceEARTHBNB.plus(1)).times(100).toFixed(2):28==r.id?e.apy[28]=m.times(e.priceBHCBNB).div(e.priceBUSDBNB.plus(1)).times(100).toFixed(2):29==r.id?e.apy[29]=new n.BigNumber(0):30==r.id&&(e.apy[30]=m.times(e.priceDEGENBNB).div(e.priceDEGENBNB.plus(1)).times(100).toFixed(2));case 11:return t.abrupt("return",r);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 24:case"end":return t.stop()}}),t)})))()}},m=(r(668),r(28)),component=Object(m.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",[r("div",{staticClass:"intro"},[r("h3",[e._v("\n        "+e._s(e.$t("home.protocol-name"))+"\n      ")]),e._v(" "),r("p",[e._v("\n        "+e._s(e.$t("home.protocol-desc"))+"\n      ")]),e._v(" "),r("p")])]),e._v(" "),r("br"),e._v(" "),r("div",{staticClass:"price alert alert-success"},[e._v("\n    1 $BSWAP = "+e._s(e.priceBSWAPUSDT?e.priceBSWAPUSDT.toFixed(4):"--")+" $BAI /\n    1 $LFI = "+e._s(e.priceLFIBAI?e.priceLFIBAI.toFixed(4):"--")+" $BUSD\n  ")]),e._v(" "),r("br"),e._v(" "),r("div",{staticClass:"row"},e._l(e.cows,(function(t,i){return r("div",{key:i,staticClass:"col-md-4 cow"},[r("div",{staticClass:"card mb-4 text-white bg-dark cow"},[r("div",{staticClass:"card-body"},[r("img",{staticClass:"tokenlogo",attrs:{src:t.image}}),e._v(" "),r("h8",{staticClass:"card-title title"},[e._v(e._s(t.name))]),e._v(" "),r("div",{staticClass:"desc"},[e._v(e._s(e.$t("home.card-desc",{symbol:t.stakeToken.symbol})))]),e._v(" "),r("p",{staticClass:"card-text apy"},[e._v(" APY: "+e._s(e.apy[t.id])+"% ")]),e._v(" "),t.initialized?r("a",{staticClass:"btn btn-block btn-warning",attrs:{href:"/pool/"+t.id}},[e._v("\n            "+e._s(e.$t("home.select"))+"\n          ")]):r("a",{staticClass:"btn btn-secondary btn-block",attrs:{href:"#"}},[e._v(e._s(e.$t("home.coming-soon")))])],1)])])})),0),e._v(" "),r("br")])}),[],!1,null,"3f9aed39",null);t.default=component.exports}}]);