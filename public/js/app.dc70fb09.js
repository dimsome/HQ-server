(function(e){function t(t){for(var c,n,j=t[0],b=t[1],d=t[2],o=0,u=[];o<j.length;o++)n=j[o],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&u.push(s[n][0]),s[n]=0;for(c in b)Object.prototype.hasOwnProperty.call(b,c)&&(e[c]=b[c]);l&&l(t);while(u.length)u.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],c=!0,j=1;j<a.length;j++){var b=a[j];0!==s[b]&&(c=!1)}c&&(r.splice(t--,1),e=n(n.s=a[0]))}return e}var c={},s={app:0},r=[];function n(t){if(c[t])return c[t].exports;var a=c[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=c,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(a,c,function(t){return e[t]}.bind(null,c));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var j=window["webpackJsonp"]=window["webpackJsonp"]||[],b=j.push.bind(j);j.push=t,j=j.slice();for(var d=0;d<j.length;d++)t(j[d]);var l=b;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"2aaa":function(e,t,a){},4678:function(e,t,a){var c={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=r(e);return a(t)}function r(e){if(!a.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}s.keys=function(){return Object.keys(c)},s.resolve=r,e.exports=s,s.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var c=a("7a23"),s=Object(c["d"])("h1",null,"mStable - Voting Participation",-1),r={key:0},n={key:1},j={key:0},b={key:1};function d(e,t,a,d,l,o){var u=Object(c["k"])("Table");return Object(c["g"])(),Object(c["c"])(c["a"],null,[s,d.error?(Object(c["g"])(),Object(c["c"])("div",r,Object(c["l"])(d.error),1)):(Object(c["g"])(),Object(c["c"])("div",n,[d.data.length?(Object(c["g"])(),Object(c["c"])("div",j,[Object(c["d"])(u,{data:d.data},null,8,["data"])])):(Object(c["g"])(),Object(c["c"])("div",b,"Loading"))]))],64)}var l=a("1da1"),o=(a("96cf"),a("d3b7"),{key:0}),u={key:1},f={class:"chart-container"},i={class:"table-container"},h=Object(c["d"])("thead",null,[Object(c["d"])("tr",null,[Object(c["d"])("th",null,"Title"),Object(c["d"])("th",null,"End"),Object(c["d"])("th",null,"Num Voters"),Object(c["d"])("th",null,"Total Holders"),Object(c["d"])("th",null,"Voter Percent"),Object(c["d"])("th",null,"vMTA voted"),Object(c["d"])("th",null,"vMTA total"),Object(c["d"])("th",null,"vMTA Percent")])],-1),p={class:"col-highlight"},O={class:"col-highlight"};function v(e,t,a,s,r,n){var j=Object(c["k"])("LineChart");return 0==s.tableData.length?(Object(c["g"])(),Object(c["c"])("div",o,"Table is empty")):(Object(c["g"])(),Object(c["c"])("div",u,[Object(c["d"])("div",f,[Object(c["d"])(j,{chartData:s.chartData,height:550},null,8,["chartData"])]),Object(c["d"])("div",i,[Object(c["d"])("table",null,[h,Object(c["d"])("tbody",null,[(Object(c["g"])(!0),Object(c["c"])(c["a"],null,Object(c["j"])(s.tableData,(function(e){return Object(c["g"])(),Object(c["c"])("tr",{key:e._id},[Object(c["d"])("td",null,Object(c["l"])(e.title),1),Object(c["d"])("td",null,Object(c["l"])(e.end),1),Object(c["d"])("td",null,Object(c["l"])(e.votersNum),1),Object(c["d"])("td",null,Object(c["l"])(e.votersTotal),1),Object(c["d"])("td",p,Object(c["l"])(e.percentNum)+"%",1),Object(c["d"])("td",null,Object(c["l"])(e.scoreNum),1),Object(c["d"])("td",null,Object(c["l"])(e.scoreTotal),1),Object(c["d"])("td",O,Object(c["l"])(e.percentScore)+"%",1)])})),128))])])])]))}a("159b"),a("b680");var m=a("a1e9"),g=a("5c40"),y=a("5530"),k=a("3c10"),z=Object(c["e"])({extends:k["a"],props:{chartData:{type:Object,required:!0},chartOptions:{type:Object,required:!1}},mounted:function(){var e=Object(y["a"])(Object(y["a"])({},this.chartOptions),{},{maintainAspectRatio:!1});this.renderChart(this.chartData,e)}}),w=z,T={name:"Table",props:["data"],components:{LineChart:w},setup:function(e){var t,a=Object(m["j"])([]),c=Object(m["j"])({labels:Array(t),datasets:[{label:"Percentage of vMTA holders voted",data:Array(t),color:"#0061E3",borderColor:"#0061E3"},{label:"Percentage of vMTA score voted",data:Array(t),borderColor:"#FAB41F"}]}),s=1;return Object(g["n"])((function(){t=e.data.length,e.data.forEach((function(e){var r=(e.votersNum/e.votersTotal*100).toFixed(2),n=(e.scoreNum/e.scoreTotal*100).toFixed(2);a.value.push({_id:e._id,title:e.title,end:e.end,votersNum:e.votersNum,votersTotal:e.votersTotal,percentNum:r,scoreNum:e.scoreNum.toFixed(2),scoreTotal:e.scoreTotal.toFixed(2),percentScore:n}),c.value.labels[t-s]=e.end,c.value.datasets[0].data[t-s]=r,c.value.datasets[1].data[t-s]=n,s++}))})),{tableData:a,chartData:c}}};a("fcab");T.render=v;var x=T,N={name:"App",components:{Table:x},setup:function(){var e=Object(c["i"])([]),t=Object(c["i"])(null),a=function(){var a=Object(l["a"])(regeneratorRuntime.mark((function a(){var c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch("https://herderhq-7utdk.ondigitalocean.app/api/proposals");case 3:if(c=a.sent,c.ok){a.next=6;break}throw Error("Data not fetched");case 6:return a.next=8,c.json();case 8:e.value=a.sent,a.next=14;break;case 11:a.prev=11,a.t0=a["catch"](0),t.value=a.t0.message;case 14:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(){return a.apply(this,arguments)}}();return a(),{data:e,error:t}}};a("fe77");N.render=d;var D=N;Object(c["b"])(D).mount("#app")},6889:function(e,t,a){},fcab:function(e,t,a){"use strict";a("2aaa")},fe77:function(e,t,a){"use strict";a("6889")}});
//# sourceMappingURL=app.dc70fb09.js.map