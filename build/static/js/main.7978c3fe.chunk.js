(this.webpackJsonphashlips_minting_card=this.webpackJsonphashlips_minting_card||[]).push([[0],{26:function(t){t.exports=JSON.parse('{"name":"Test Contract","symbol":"TCT","total_supply":1000,"chain":"Klaytn","chain_id":1001,"chain_symbol":"KLAY","address":"0xB6a0BF394Bd5332D5D9BB60C48429ea15B6586f5","abi":[{"constant":true,"inputs":[{"name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x01ffc9a7"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x06fdde03"},{"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x081812fc"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x095ea7b3"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x18160ddd"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x23b872dd"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x2f745c59"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x3f4ba83a"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x42842e0e"},{"constant":false,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x42966c68"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"isPauser","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x46fbf68e"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x4f6ccce7"},{"constant":true,"inputs":[],"name":"maximum","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x52342f13"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x5c975abb"},{"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x6352211e"},{"constant":true,"inputs":[],"name":"baseURI","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x6c0360eb"},{"constant":false,"inputs":[],"name":"renouncePauser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x6ef8d66d"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x70a08231"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"addPauser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x82dc1ec4"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x8456cb59"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x8da5cb5b"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x8f32d59b"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x95d89b41"},{"constant":true,"inputs":[],"name":"price","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xa035b1fe"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xa22cb465"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xb88d4fde"},{"constant":true,"inputs":[],"name":"baseExtension","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xc6682862"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xe985e9c5"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"},{"anonymous":false,"inputs":[{"indexed":false,"name":"account","type":"address"}],"name":"Paused","type":"event","signature":"0x62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258"},{"anonymous":false,"inputs":[{"indexed":false,"name":"account","type":"address"}],"name":"Unpaused","type":"event","signature":"0x5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"PauserAdded","type":"event","signature":"0x6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f8"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"PauserRemoved","type":"event","signature":"0xcd265ebaf09df2871cc7bd4133404a235ba12eff2041bb89d9c714a2621c7c7e"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":true,"name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event","signature":"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"approved","type":"address"},{"indexed":true,"name":"tokenId","type":"uint256"}],"name":"Approval","type":"event","signature":"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"operator","type":"address"},{"indexed":false,"name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event","signature":"0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event","signature":"0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"},{"constant":false,"inputs":[{"name":"_magicword","type":"string"}],"name":"setInternalMessage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xcc4fa76f"},{"constant":true,"inputs":[],"name":"getInternalMessage","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x82656206"},{"constant":false,"inputs":[{"name":"_price","type":"uint256"}],"name":"setPrice","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x91b7f5ed"},{"constant":true,"inputs":[],"name":"getPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x98d5fdca"},{"constant":false,"inputs":[{"name":"newMax","type":"uint256"}],"name":"setMaximum","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x25386183"},{"constant":true,"inputs":[],"name":"getMaximum","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x9ee68fd5"},{"constant":false,"inputs":[{"name":"_baseUri","type":"string"}],"name":"setBaseUri","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xa0bcfc7f"},{"constant":true,"inputs":[],"name":"getBaseUri","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x0cac36b2"},{"constant":false,"inputs":[{"name":"newExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xda3ef23f"},{"constant":true,"inputs":[],"name":"getBaseExtension","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x02250307"},{"constant":true,"inputs":[],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x12065fe0"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":true,"stateMutability":"payable","type":"function","signature":"0x3ccfd60b"},{"constant":false,"inputs":[{"name":"ids","type":"uint256[]"}],"name":"burnBatch","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xe4623c1b"},{"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xc87b56dd"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"_mintAmount","type":"uint256"},{"name":"_magicword","type":"string"}],"name":"mintBatch","outputs":[],"payable":true,"stateMutability":"payable","type":"function","signature":"0x31e4737b"},{"constant":true,"inputs":[{"name":"start","type":"uint256"},{"name":"end","type":"uint256"}],"name":"setTokenURI","outputs":[],"payable":false,"stateMutability":"view","type":"function","signature":"0xd7823360"},{"constant":false,"inputs":[{"name":"tos","type":"address[]"},{"name":"ids","type":"uint256[]"}],"name":"transferBatch","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x3b3e672f"},{"constant":false,"inputs":[],"name":"doNotUseThis","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x19b572aa"}]}')},270:function(t,e,n){var a={"./caver-abi/src/index.js":78,"./caver-account/src/index.js":41,"./caver-contract/src/index.js":55,"./caver-core-helpers/src/index.js":19,"./caver-core-method/src/index.js":38,"./caver-core-requestmanager/caver-providers-http/src/index.js":206,"./caver-core-requestmanager/caver-providers-ipc/src/index.js":216,"./caver-core-requestmanager/caver-providers-ws/src/index.js":204,"./caver-core-requestmanager/src/index.js":201,"./caver-core-subscriptions/src/index.js":74,"./caver-core/src/index.js":28,"./caver-ipfs/src/index.js":235,"./caver-kct/src/index.js":247,"./caver-klay/caver-klay-accounts/src/index.js":250,"./caver-klay/caver-klay-personal/src/index.js":253,"./caver-klay/src/index.js":254,"./caver-middleware/src/index.js":124,"./caver-net/src/index.js":142,"./caver-rpc/src/index.js":255,"./caver-rtm/src/index.js":76,"./caver-transaction/src/index.js":256,"./caver-utils/iban/src/index.js":197,"./caver-utils/promievent/src/index.js":196,"./caver-utils/src/index.js":0,"./caver-validator/src/index.js":143,"./caver-wallet/src/index.js":136};function s(t){var e=i(t);return n(e)}function i(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}s.keys=function(){return Object.keys(a)},s.resolve=i,t.exports=s,s.id=270},273:function(t,e){},279:function(t,e){},281:function(t,e){},292:function(t,e){},294:function(t,e){},320:function(t,e){},326:function(t,e){},328:function(t,e){},346:function(t,e){},389:function(t,e){},391:function(t,e){},496:function(t,e,n){},497:function(t,e,n){"use strict";n.r(e);var a=n(35),s=n.n(a),i=n(259),u=n.n(i),c=n(2),r=n.n(c),o=n(13),p=n(57),l=n(77),d=n(260),b=n.n(d),y=n(26),f=n.p+"static/media/ggnz.14415925.gif",m=n(12);var x=function(t){t.mintInfo;var e=t.info,n=t.connectToContract;return Object(m.jsxs)("div",{className:"card_footer",children:[Object(m.jsx)("button",{className:"button",style:{backgroundColor:e.connected?"var(--success)":"var(--warning)"},onClick:function(){return n(y)},children:e.account?"Connected":"Connect Wallet"}),e.connected?Object(m.jsx)("span",{className:"accountText",children:String(e.account).substring(0,6)+"..."+String(e.account).substring(38)}):null]})},v={connected:!1,status:null,account:null,caver:null,contract:null,address:null,contractJSON:null,keyring:null},j={loading:!1,status:"Mint your ".concat(y.name),amount:null,supply:"0",cost:"0"};var g=function(){var t=Object(a.useState)(v),e=Object(l.a)(t,2),n=e[0],s=e[1],i=Object(a.useState)(j),u=Object(l.a)(i,2),c=u[0],d=u[1],g=Object(a.useState)(!0),w=Object(l.a)(g,2),O=w[0],h=w[1],k=Object(a.useState)(!1),M=Object(l.a)(k,2),_=M[0],N=M[1],T=function(){var t=Object(p.a)(r.a.mark((function t(e,n){var a,i,u;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.klaytn.isKaikas){t.next=16;break}return t.prev=1,t.next=4,window.klaytn.enable();case 4:return a=t.sent,t.next=7,window.klaytn.networkVersion;case 7:t.sent==n.chain_id&&(i=new b.a(window.klaytn),u=new i.klay.Contract(n.abi,n.address),s((function(t){return Object(o.a)(Object(o.a)({},t),{},{connected:!0,status:null,account:a[0],caver:i,contract:u,contractJSON:n})})),F(u,a[0])),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),s((function(){return Object(o.a)({},v)}));case 14:t.next=17;break;case 16:s((function(){return Object(o.a)(Object(o.a)({},v),{},{status:"Please install Kaikas."})}));case 17:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n){return t.apply(this,arguments)}}(),C=function(){var t=Object(p.a)(r.a.mark((function t(){var e;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.contract.call("totalSupply");case 3:e=t.sent,d((function(t){return Object(o.a)(Object(o.a)({},t),{},{supply:n.caver.utils.hexToNumberString(e)})})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),d((function(t){return Object(o.a)(Object(o.a)({},t),{},{supply:0})}));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),I=function(){var t=Object(p.a)(r.a.mark((function t(){var e;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.contract.call("getPrice");case 3:e=t.sent,d((function(t){return Object(o.a)(Object(o.a)({},t),{},{cost:n.caver.utils.hexToNumberString(n.caver.utils.convertFromPeb(e,"KLAY"))})})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),d((function(t){return Object(o.a)(Object(o.a)({},t),{},{cost:y.total_supply})}));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),B=function(){var t=Object(p.a)(r.a.mark((function t(){var e;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,d((function(t){return Object(o.a)(Object(o.a)({},t),{},{loading:!0,status:"Minting ".concat(c.amount,"...")})})),t.next=4,n.caver.abi.encodeFunctionCall({name:"mintBatch",type:"function",inputs:[{name:"to",type:"address"},{name:"_mintAmount",type:"uint256"},{name:"_magicword",type:"string"}]},[n.account,c.amount,"Jini"]);case 4:return e=t.sent,t.next=7,n.caver.klay.sendTransaction({type:"SMART_CONTRACT_EXECUTION",from:n.account,to:n.contractJSON.address,input:e,gas:"2500000",value:String(n.caver.utils.toPeb(Number(c.cost)*c.amount))});case 7:d((function(t){return Object(o.a)(Object(o.a)({},t),{},{loading:!1,status:"Minting Complete!"})})),C(),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),d((function(t){return Object(o.a)(Object(o.a)({},t),{},{loading:!1,status:"NFT minting Failed T.T"})}));case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}(),S=function(){var t=Object(p.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,d((function(t){return Object(o.a)(Object(o.a)({},t),{},{loading:!0,status:"Withdrawing..."})})),t.next=4,n.contract.methods.withdraw().send({from:n.account,gas:"2500000"});case 4:d((function(t){return Object(o.a)(Object(o.a)({},t),{},{status:"Withdrawing completed"})})),s((function(t){return Object(o.a)(Object(o.a)({},t),{},{state:"Withdraw Complete!"})})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),d((function(t){return Object(o.a)(Object(o.a)({},t),{},{status:"Withdraw Failed T.T"})}));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),A=function(t){T("klay_getAccount",t)},F=function(){var t=Object(p.a)(r.a.mark((function t(e,n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.methods.owner().call({from:n});case 3:a=t.sent,n===a.toLowerCase()?N(!0):N(!1),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),N(!1);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,n){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){A(y),window.klaytn&&(window.klaytn.on("accountsChanged",(function(){window.location.reload()})),window.klaytn.on("networkChanged",(function(){window.location.reload()})))}),[]),Object(a.useEffect)((function(){n.connected&&(C(),I())}),[n.connected]),Object(m.jsx)("div",{className:"page",children:Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("div",{className:"card_header",children:Object(m.jsx)("img",{className:"card_header_image ns",alt:"banner",src:f})}),Object(m.jsxs)("div",{className:"contents",children:[c.supply<y.total_supply?Object(m.jsxs)("div",{className:"card_body",children:[Object(m.jsxs)("div",{className:"title__and__remaining",children:[Object(m.jsxs)("div",{className:"title",children:[y.name," "]}),n.connected?Object(m.jsx)("div",{className:"remaining__and__price",children:Object(m.jsxs)("div",{className:"remaining",children:["Remaing:"," ",y.total_supply-c.supply]})}):null]}),Object(m.jsxs)("div",{className:"minting",children:[Object(m.jsx)("div",{className:"minting_box",children:Object(m.jsxs)("form",{onSubmit:function(t){t.preventDefault(),d((function(t){return Object(o.a)(Object(o.a)({},t),{},{amount:""})}))},children:[Object(m.jsx)("input",{className:"minting_amount",type:"text",placeholder:"mint amount",value:c.amount,onChange:function(t){var e,n;e=t.target.value,d(e<=40&&e>=1?function(t){return Object(o.a)(Object(o.a)({},t),{},{amount:e})}:function(t){return Object(o.a)(Object(o.a)({},t),{},{amount:void 0})}),n=t.target.value,h(!(n<=40&&n>=1))}}),n.connected?Object(m.jsxs)("div",{className:"minting_total",children:["(",void 0===c.amount?0:c.cost*c.amount," ",y.chain_symbol,")"]}):null,Object(m.jsx)("input",{type:"submit",className:"minting_button",onClick:function(){return B()},disabled:O,value:"Mint"})]})}),c.status?Object(m.jsx)("p",{className:"statusText",children:c.status}):null,n.status?Object(m.jsx)("p",{className:"statusText",children:n.status}):null]}),_?Object(m.jsx)("button",{className:"withdraw",onClick:S,children:"Withdraw"}):""]}):Object(m.jsxs)("div",{className:"card_body",children:[Object(m.jsxs)("div",{className:"statusText",children:["We've sold out! .You can still buy and trade the"," ",y.name," on marketplaces such as Opensea."]}),_?Object(m.jsx)("button",{className:"withdraw",onClick:S,children:"Withdraw"}):""]}),Object(m.jsx)(x,{mintInfo:c,info:n,connectToContract:A})]}),Object(m.jsx)("a",{style:{position:"absolute",bottom:55,left:-75},className:"_90 contract_url",target:"_blank",href:8217===y.chain_id?"https://scope.klaytn.com/account/".concat(y.address):"https://baobab.scope.klaytn.com/account/".concat(y.address),children:"View Contract"})]})})};n(496);u.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(g,{})}),document.getElementById("root"))}},[[497,1,2]]]);
//# sourceMappingURL=main.7978c3fe.chunk.js.map