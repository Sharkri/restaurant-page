(()=>{"use strict";function e(){const e=document.createElement("div"),t=document.createElement("p");t.textContent="446 Cactus Ave. Maplewood, Maine";const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.setAttribute("viewBox","0 0 24 24");const d=document.createElementNS("http://www.w3.org/2000/svg","path");d.setAttribute("fill","#ef4444"),d.setAttribute("d","M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z");const o=document.createElement("p"),a=document.createElement("span"),c=document.createElement("span");c.textContent="8am-8:30pm",a.textContent="Wed-Sun: ",a.style.color="#ef4444",o.appendChild(a),o.appendChild(c);const s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.setAttribute("viewBox","0 0 24 24");const i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttribute("fill","#ef4444"),i.setAttribute("d","M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z");const l=document.createElement("div");l.classList.add("clock"),l.appendChild(s),l.appendChild(o),s.appendChild(i);const p=document.createElement("div");p.classList.add("location"),p.appendChild(n),p.appendChild(t),n.appendChild(d);const r=document.createElement("div");r.classList.add("info"),r.appendChild(p),r.appendChild(l);const m=document.createElement("h1");m.textContent="Bonjour Appetite";const h=document.createElement("p");h.classList.add("mainPara"),h.textContent="At Bonjour Appetite we strive to bring people\n  the best food prepared using the freshest\n  and best ingredients.";const u=document.createElement("div");return u.appendChild(m),u.appendChild(h),e.appendChild(u),e.appendChild(r),e.classList.add("home"),e}function t(e,t,n){const d=document.createElement("div"),o=document.createElement("h3");o.textContent=e,o.style.color="#ef4444";const a=document.createElement("p");a.textContent=t;const c=new Image;return c.src=n,d.appendChild(c),d.appendChild(o),d.appendChild(a),d}const n=document.querySelector("#content"),d=document.createElement("button"),o=document.createElement("button"),a=document.createElement("button");d.textContent="Home",o.textContent="Menu",a.textContent="Contact";const c=document.createElement("div");c.classList.add("buttons");const s=new Image;s.src="../images/food.png",c.appendChild(d),c.appendChild(o),c.appendChild(a);const i=document.createElement("div");i.classList.add("header");const l=document.createElement("h1");l.textContent="Bonjour Appetite",i.appendChild(l),i.appendChild(c);const p=document.createElement("div");function r(e){p.innerHTML="",p.appendChild(e)}p.classList.add("main"),n.appendChild(i),n.appendChild(p),n.appendChild(s),d.classList.toggle("active"),console.log(d),r(e()),c.childNodes.forEach((n=>{n.addEventListener("click",(()=>{c.childNodes.forEach((e=>{e.classList.length&&e.classList.toggle("active")})),0==n.classList.length&&n.classList.toggle("active"),"Home"==n.textContent&&r(e()),"Menu"==n.textContent&&r(function(){const e=document.createElement("div");e.classList.add("foods");const n=document.createElement("div"),d=document.createElement("h1");d.textContent="Menu";const o=t("Waffle - €6.50","Waffles sprinkled with powdered sugar and topped with fresh raspberries","../images/waffle.png"),a=t("Buttered croissant - €4","Authentic French croissants","../images/croissant.png"),c=t("French Toast - €4","Three slices of the best french toast you will ever eat, served with locally sourced maple syrup.","../images/toast.png"),s=t("French Fries - €2.50","Delicious french fries seasoned with garlic and herbs.","../images/fries.png"),i=t("Coffee - €2.75","Coffee made with vanilla extract topped with a pinch of sugar.","../images/coffee.png"),l=t("Chocolate Macaroons - €7.50","Deliciously tasty chocolate macaroons.","../images/macaroon.png");return e.appendChild(o),e.appendChild(a),e.appendChild(c),e.appendChild(s),e.appendChild(i),e.appendChild(l),n.appendChild(d),n.appendChild(e),n.classList.add("menu"),n}()),"Contact"==n.textContent&&r(function(){const e=document.createElement("div"),t=document.createElement("p"),n=document.createElement("div");return t.textContent="Bonjour Appetite™ has only the best foods",n.appendChild(t),e.appendChild(n),e.classList.add("contact"),e}())}))}))})();