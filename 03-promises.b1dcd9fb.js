!function(){function e(e,o){return new Promise((function(t,n){setTimeout((function(){Math.random()>.3?t({position:e,delay:o,status:"resolved"}):n({position:e,delay:o,status:"rejected"})}),o)}))}document.querySelector(".form").addEventListener("submit",(function(o){o.preventDefault();for(var t=document.querySelector(".form"),n=t.querySelector('[name="delay"]'),r=t.querySelector('[name="step"]'),a=t.querySelector('[name="amount"]'),c=parseInt(n.value),l=parseInt(r.value),u=parseInt(a.value),s=[],i=1;i<=u;i++){var m=c+(i-1)*l;s.push(e(i,m))}Promise.allSettled(s).then((function(e){e.forEach((function(e){"fulfilled"===e.status?console.log("✅ Fulfilled promise ".concat(e.value.position," in ").concat(e.value.delay,"ms")):console.log("❌ Rejected promise ".concat(e.reason.position," in ").concat(e.reason.delay,"ms"))}))})).catch((function(e){console.error("Error:",e)}))}))}();
//# sourceMappingURL=03-promises.b1dcd9fb.js.map
