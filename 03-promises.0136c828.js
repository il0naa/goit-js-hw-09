!function(){var n=document.querySelector(".form");function o(n,o){return new Promise((function(t,e){var c=Math.random()>.3,i={position:n,delay:o};setTimeout((function(){c?t(i):e(i)}),o)}))}n.addEventListener("submit",(function(t){t.preventDefault();var e={};new FormData(n).forEach((function(n,o){e[o]=n})),function(n){for(var t=0;t<n.amount;t++){o(t+1,Number(n.delay)+Number(n.step)*t).then((function(n){var o=n.position,t=n.delay;console.log("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;console.log("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))}))}}(e)}))}();
//# sourceMappingURL=03-promises.0136c828.js.map