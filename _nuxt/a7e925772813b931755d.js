(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{274:function(t,e,n){"use strict";var o=n(20),c=n(275)(5),r=!0;"find"in[]&&Array(1).find((function(){r=!1})),o(o.P+o.F*r,"Array",{find:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}}),n(104)("find")},275:function(t,e,n){var o=n(42),c=n(103),r=n(43),l=n(36),d=n(276);t.exports=function(t,e){var n=1==t,v=2==t,m=3==t,k=4==t,f=6==t,w=5==t||f,h=e||d;return function(e,d,_){for(var x,A,y=r(e),$=c(y),T=o(d,_,3),S=l($.length),C=0,B=n?h(e,S):v?h(e,0):void 0;S>C;C++)if((w||C in $)&&(A=T(x=$[C],C,y),t))if(n)B[C]=A;else if(A)switch(t){case 3:return!0;case 5:return x;case 6:return C;case 2:B.push(x)}else if(k)return!1;return f?-1:m||k?k:B}}},276:function(t,e,n){var o=n(277);t.exports=function(t,e){return new(o(t))(e)}},277:function(t,e,n){var o=n(25),c=n(146),r=n(17)("species");t.exports=function(t){var e;return c(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!c(e.prototype)||(e=void 0),o(e)&&null===(e=e[r])&&(e=void 0)),void 0===e?Array:e}},304:function(t,e,n){var content=n(647);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(56).default)("a6a4c9c0",content,!0,{sourceMap:!1})},646:function(t,e,n){"use strict";var o=n(304);n.n(o).a},647:function(t,e,n){(e=n(55)(!1)).push([t.i,".cow[data-v-515d3867]{width:8rem}.avatar[data-v-515d3867]{font-size:5rem}.name[data-v-515d3867]{font-size:1.2rem}.desc[data-v-515d3867]{color:#666}.info[data-v-515d3867]{background-color:#eee;padding:1rem}.write-form[data-v-515d3867]{max-width:30rem}.connect[data-v-515d3867]{background-color:#e9ecef;padding:1rem;margin-bottom:1rem}.address[data-v-515d3867]{overflow:hidden;text-overflow:ellipsis}.balance[data-v-515d3867]{cursor:pointer}.toast-body[data-v-515d3867],.tx-hash[data-v-515d3867]{overflow:hidden;text-overflow:ellipsis}.tx-hash[data-v-515d3867]{margin-bottom:.5rem;margin-top:0}.tx-status[data-v-515d3867]{text-transform:capitalize}.tokenlogo[data-v-515d3867]{width:150px}",""]),t.exports=e},652:function(t,e,n){"use strict";n.r(e);n(35);var o=n(15),c=(n(37),n(38),n(23),n(274),n(105)),r=n(271),l=(n(219),n(225)),d=n(54),v={asyncData:function(t){var e=t.params;return{cow:d.default.cows.find((function(t){return t.id==e.id})),stakeAddress:"",txid:"",show:!0,submitDisabled:!1,titleStatus:"",txStatus:"null",stakeWalletBalance:"0",stakingBalance:"0",rewards:"0",isBalanceLoaded:!1,stakeAmount:"",unstakeAmount:"",allowed:!0,startTime:"",finishTime:"",txHash:"",claimDisabled:!1,exitDisabled:!1,initReward:"",stakeAllowance:Object(l.BigNumber)(0),btnApproving:!1,stakingTotal:"--"}},computed:{},methods:{toBigNumber:function(t){return t?Object(l.BigNumber)(t):Object(l.BigNumber)(0)},validationAmount:function(t){return t&&parseFloat(t)>0},etherscanAddress:function(t){return c.a.etherscanAddr(t)},etherscanTx:function(t){return c.a.etherscanTx(t)},cowLoaded:function(){return!!this.cowContract},onApprove:function(){var t=this;this.cowLoaded()&&(this.btnApproving=!0,this.stakeToken.approveMax(this.$store.state.connectedAccount,this.cow.address,(function(e,n){n&&(t.txHash=n,t.txStatus="pending",t.$bvToast.show("tx-toast"),t.btnApproving=!1)})).then((function(e){t.txStatus="mined",t.update(),t.$bvToast.hide("tx-toast"),t.btnApproving=!1})).catch((function(e){t.$bvModal.hide("stake-modal"),t.btnApproving=!1})))},onStake:function(){var t=this;if(this.cowLoaded()){var e=parseFloat(this.stakeAmount);e<=0||(this.txStatus="pending",this.cowContract.stake(this.$store.state.connectedAccount,e,(function(e,n){n&&(t.txHash=n,t.txStatus="pending",t.$bvToast.show("tx-toast")),t.$bvModal.hide("stake-modal")})).then((function(e,b){t.txStatus="mined",t.update(),t.$bvToast.hide("tx-toast")})).catch((function(e){t.txStatus="error"})))}},onUnstake:function(){var t=this;if(this.cowLoaded()){var e=parseFloat(this.unstakeAmount);e<=0||(this.txStatus="pending",this.cowContract.withdraw(this.$store.state.connectedAccount,e,(function(e,n){n&&(t.txHash=n,t.txStatus="pending",t.$bvToast.show("tx-toast")),t.$bvModal.hide("unstake-modal")})).then((function(e){t.txStatus="mined",t.update(),t.$bvToast.hide("tx-toast")})).catch((function(e){t.$bvModal.hide("unstake-modal"),t.txStatus="error"})))}},onExit:function(){var t=this;this.cowLoaded()&&confirm("Are you sure to exit?")&&(this.exitDisabled=!0,this.cowContract.exit(this.$store.state.connectedAccount,(function(e,n){n&&(t.txHash=n,t.txStatus="pending",t.$bvToast.show("tx-toast")),t.exitDisabled=!1})).then((function(e){t.txStatus="mined",t.exitDisabled=!1})).catch((function(e){t.update(),t.txStatus="error",t.exitDisabled=!1})))},onClaim:function(){var t=this;this.cowLoaded()&&(this.claimDisabled=!0,this.cowContract.getReward(this.$store.state.connectedAccount,(function(e,n){n&&(t.txHash=n,t.txStatus="pending",t.$bvToast.show("tx-toast"),t.claimDisabled=!1)})).then((function(e){t.txStatus="mined",t.claimDisabled=!1,t.update(),t.$bvToast.hide("tx-toast")})).catch((function(e){t.txStatus="error",t.claimDisabled=!1})))},fillStakeAmount:function(t){this.stakeAmount=t.toString()},update:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.stakeToken.balanceOf(t.$store.state.connectedAccount);case 2:return t.stakeWalletBalance=e.sent,e.next=5,t.cowContract.balanceOf(t.$store.state.connectedAccount);case 5:return t.stakingBalance=e.sent,e.next=8,t.cowContract.earned(t.$store.state.connectedAccount);case 8:return t.rewards=e.sent,e.next=11,t.stakeToken.allowance(t.$store.state.connectedAccount,t.cow.address);case 11:t.stakeAllowance=e.sent;case 12:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$onConnect();case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:if(n=new r.b(t.cow.address,t.cow.stakeToken,t.cow.yieldToken),o=new r.d(t.cow.stakeToken.address),c=new r.d(t.cow.yieldToken.address),!t.cow.initialized){e.next=28;break}if(!t.$store.state.connectedAccount){e.next=25;break}return e.next=14,o.balanceOf(t.$store.state.connectedAccount);case 14:return t.stakeWalletBalance=e.sent,e.next=17,n.balanceOf(t.$store.state.connectedAccount);case 17:return t.stakingBalance=e.sent,e.next=20,n.earned(t.$store.state.connectedAccount);case 20:return t.rewards=e.sent,e.next=23,o.allowance(t.$store.state.connectedAccount,t.cow.address);case 23:t.stakeAllowance=e.sent,setInterval(t.update,1e4);case 25:t.cowContract=n,t.stakeToken=o,t.yieldToken=c;case 28:return e.next=30,n.totalSupply();case 30:t.stakingTotal=e.sent;case 31:case"end":return e.stop()}}),e,null,[[0,5]])})))()}},m=(n(646),n(41)),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 text-center"},[n("img",{staticClass:"tokenlogo",attrs:{src:t.cow.image}}),t._v(" "),n("div",{staticClass:"name"},[t._v(t._s(t.cow.name))]),t._v(" "),n("div",{staticClass:"desc"},[t._v(t._s(t.cow.desc))]),t._v(" "),n("br"),t._v(" "),n("div",[t._v(t._s(t.$t("cow.total"))+" "),n("b",[t._v(t._s(t.stakingTotal))]),t._v(" "+t._s(t.cow.stakeToken.symbol)+" "+t._s(t.$t("cow.staking")))])])]),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-6"},[n("div",{staticClass:"card text-center"},[n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title"},[t._v(t._s(t.rewards))]),t._v(" "),n("p",{staticClass:"card-text"},[t._v(t._s(t.$t("cow.earned",{symbol:t.cow.yieldToken.symbol})))]),t._v(" "),n("b-button",{attrs:{block:"",variant:"success"},on:{click:t.onClaim}},[t._v("\n           "+t._s(t.$t("cow.harvest",{symbol:t.cow.yieldToken.symbol}))+"\n          ")])],1)])]),t._v(" "),n("div",{staticClass:"col-6"},[n("div",{staticClass:"card text-center"},[n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title"},[t._v(t._s(t.stakingBalance)+" ")]),t._v(" "),n("p",{staticClass:"card-text"},[t._v(t._s(t.$t("cow.symbol-staked",{symbol:t.cow.stakeToken.symbol})))]),t._v(" "),t.stakeAllowance.lte(t.toBigNumber(t.stakeAmount))?n("b-button",{attrs:{block:"",variant:"danger",disabled:t.btnApproving},on:{click:t.onApprove}},[t.btnApproving?n("b-spinner",{attrs:{small:"",label:"Loading..."}}):t._e(),t._v("\n            "+t._s(t.$t("cow.approve-symbol",{symbol:t.cow.stakeToken.symbol}))+"\n          ")],1):n("b-button",{attrs:{block:"",variant:"primary"},on:{click:function(e){return t.$bvModal.show("stake-modal")}}},[t._v("\n            "+t._s(t.$t("cow.stake",{symbol:t.cow.stakeToken.symbol}))+"\n          ")])],1)])])]),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 text-center"},[t.cow.unstakeable?n("b-button",{attrs:{variant:"primary"},on:{click:function(e){return t.$bvModal.show("unstake-modal")}}},[t._v("\n        "+t._s(t.$t("cow.unstake",{symbol:t.cow.stakeToken.symbol}))+"\n      ")]):t._e(),t._v(" "),t.cow.unstakeable?n("b-button",{attrs:{variant:"primary"},on:{click:t.onExit}},[t._v("\n        "+t._s(t.$t("cow.harvest-unstake",{symbol:t.cow.stakeToken.symbol,symbol2:t.cow.yieldToken.symbol}))+"\n      ")]):t._e()],1)]),t._v(" "),n("b-modal",{attrs:{id:"stake-modal","hide-footer":"",size:"md"},scopedSlots:t._u([{key:"modal-title",fn:function(e){e.close;return[n("b",[t._v(t._s(t.$t("cow.stake",{symbol:t.cow.stakeToken.symbol})))])]}}])},[t._v(" "),n("b-form",[n("div",[t._v(t._s(t.$t("cow.balance"))),n("b",{staticClass:"balance",on:{click:function(e){return t.fillStakeAmount(t.stakeWalletBalance)}}},[t._v(t._s(t.stakeWalletBalance))]),t._v(" "+t._s(t.cow.stakeToken.symbol))]),t._v(" "),n("b-form-group",{attrs:{id:"input-group-1",label:"","label-for":"input-1"}},[n("b-form-input",{attrs:{id:"input-1",type:"number",autocomplete:"off",required:""},model:{value:t.stakeAmount,callback:function(e){t.stakeAmount=e},expression:"stakeAmount"}}),t._v(" "),n("b-form-invalid-feedback",{attrs:{state:t.validationAmount(t.stakeAmount)}},[t._v("\n          "+t._s(t.$t("cow.greater-than"))+"\n        ")])],1),t._v(" "),t.stakeAllowance.gte(t.toBigNumber(t.stakeAmount))?n("b-button",{attrs:{block:"",variant:"success",disabled:!t.validationAmount(t.stakeAmount)||"pending"==t.txStatus||t.toBigNumber(t.stakeWalletBalance).lte(0)},on:{click:t.onStake}},[t._v(t._s(t.$t("cow.stake",{symbol:t.cow.stakeToken.symbol})))]):t._e()],1),t._v(" "),n("br"),t._v(" "),n("br")],1),t._v(" "),n("b-modal",{attrs:{id:"unstake-modal","hide-footer":"",size:"md"},scopedSlots:t._u([{key:"modal-title",fn:function(e){e.close;return[n("b",[t._v(t._s(t.$t("cow.unstake",{symbol:t.cow.stakeToken.symbol})))])]}}])},[t._v(" "),n("b-form",[n("div",[t._v(t._s(t.$t("cow.staking-balance"))),n("b",{staticClass:"balance",on:{click:function(e){return t.fillStakeAmount(t.stakingBalance)}}},[t._v(t._s(t.stakingBalance))]),t._v(" "+t._s(t.cow.stakeToken.symbol))]),t._v(" "),n("b-form-group",{attrs:{id:"input-group-1",label:"","label-for":"input-1"}},[n("b-form-input",{attrs:{id:"input-1",placeholder:"Amount to unstake",autocomplete:"off",required:""},model:{value:t.unstakeAmount,callback:function(e){t.unstakeAmount=e},expression:"unstakeAmount"}}),t._v(" "),n("b-form-invalid-feedback",{attrs:{state:t.validationAmount(t.unstakeAmount)}},[t._v("\n          "+t._s(t.$t("cow.amount-greater-than"))+"\n        ")])],1),t._v(" "),n("b-button",{attrs:{block:"",variant:"success",disabled:!t.validationAmount(t.unstakeAmount)||"pending"==t.txStatus},on:{click:t.onUnstake}},[t._v(t._s(t.$t("cow.unstake",{symbol:t.cow.stakeToken.symbol})))])],1),t._v(" "),n("br"),t._v(" "),n("br")],1),t._v(" "),n("b-toast",{attrs:{id:"tx-toast",solid:"","no-auto-hide":""},scopedSlots:t._u([{key:"toast-title",fn:function(){return[n("div",{staticClass:"tx-status"},["pending"==t.txStatus?n("b-spinner",{attrs:{small:"",label:"Loading..."}}):t._e(),t._v(" "),"mined"==t.txStatus?n("b-icon",{attrs:{icon:"check-circle"}}):t._e(),t._v(" "),"error"==t.txStatus?n("b-icon",{attrs:{icon:"x-circle",variant:"danger"}}):t._e(),t._v("\n        "+t._s(t.txStatus)+"\n      ")],1)]},proxy:!0}])},[t._v(" "),n("div",{staticClass:"tx-hash"},[n("div",[n("a",{attrs:{href:t.etherscanTx(t.txHash),target:"_blank"}},[t._v(t._s(t.txHash))])])])])],1)}),[],!1,null,"515d3867",null);e.default=component.exports}}]);