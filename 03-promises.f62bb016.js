!function(){"use strict";var e=document.querySelector(".form"),n=document.querySelector("[name='delay']"),t=document.querySelector("[name='step']"),o=document.querySelector("[name='amount']");e.addEventListener("submit",(function(e){e.preventDefault();var c=parseInt(o.value),r=0,a=setInterval((function(){var e,t,o;r>=c?clearInterval(a):((e=r+1,t=n.value,o=Math.random()>.3,new Promise((function(n,c){o?n("✅ Fulfilled promise ".concat(e," in ").concat(t,"ms")):c("❌ Rejected promise ".concat(e," in ").concat(t,"ms"))}))).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),r++)}),t.value)}))}();
//# sourceMappingURL=03-promises.f62bb016.js.map
