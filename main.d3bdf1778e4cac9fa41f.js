(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(n,t,e){},QfWi:function(n,t,e){"use strict";e.r(t);e("L1EO"),e("JBxO"),e("FdtR");var o=function(n){return new Promise((function(t,e){setTimeout((function(){t(n)}),n)}))},a=function(n){return console.log("Resolved after "+n+"ms")};o(2e3).then(a),o(1e3).then(a),o(1500).then(a);e("lmye"),e("D/wG"),e("wCa+");var i=[{name:"Mango",active:!0},{name:"Poly",active:!1},{name:"Ajax",active:!0},{name:"Lux",active:!1}],c=function(n,t){return new Promise((function(e,o){e(n.map((function(n){return n.name===t?Object.assign({},n,{active:!n.active}):n})))}))},r=function(n){return console.table(n)};c(i,"Mango").then(r),c(i,"Lux").then(r);var u=function(n){var t,e,o=(t=200,e=500,Math.floor(Math.random()*(e-t+1)+t));return new Promise((function(t,e){setTimeout((function(){Math.random()>.3?t(n.id,o):e(n.id)}),o)}))},s=function(n){var t=n.id,e=n.time;console.log("Transaction "+t+" processed in "+e+"ms")},m=function(n){console.warn("Error processing transaction "+n+". Please try again later.")};u({id:70,amount:150}).then(s).catch(m),u({id:71,amount:230}).then(s).catch(m),u({id:72,amount:75}).then(s).catch(m),u({id:73,amount:100}).then(s).catch(m)}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.d3bdf1778e4cac9fa41f.js.map