/* =========================================================
   KITCHEN COUNTER — Campus Canteen
   Food photos go in the  images/  folder (see "img" names below)
   ========================================================= */

const CAT_COLORS = {
  "Breakfast":   {c:"#FF7B54", c1:"#FFB199", c2:"#FF7B54"},
  "Lunch":       {c:"#2E9E6B", c1:"#9BE3BF", c2:"#2E9E6B"},
  "Dinner":      {c:"#7B6EF6", c1:"#C1BBFF", c2:"#7B6EF6"},
  "Snacks":      {c:"#1FA6A0", c1:"#7EE8DD", c2:"#1FA6A0"},
  "Cool Drinks": {c:"#3B82F6", c1:"#A9CBFF", c2:"#3B82F6"},
  "Desserts":    {c:"#E1499E", c1:"#FFAEDB", c2:"#E1499E"}
};

// img = file name inside the images/ folder (all .jpg)
const DEFAULT_MENU = [
  // ---- Breakfast ----
  {id:1,  name:"Masala Dosa",          price:45, cat:"Breakfast",   veg:true,  desc:"Crisp rice crepe, potato filling, chutney",   emoji:"🫓", img:"masala-dosa"},
  {id:2,  name:"Idli Sambar",          price:35, cat:"Breakfast",   veg:true,  desc:"Steamed rice cakes, lentil sambar",           emoji:"🍥", img:"idli-sambar"},
  {id:3,  name:"Bread Omelette",       price:40, cat:"Breakfast",   veg:false, desc:"Double egg omelette, buttered bread",         emoji:"🍳", img:"bread-omelette"},
  {id:4,  name:"Pongal Vada",          price:40, cat:"Breakfast",   veg:true,  desc:"Ghee pongal with crispy medhu vada",          emoji:"🥣", img:"pongal-vada"},
  {id:5,  name:"Poori Masala",         price:45, cat:"Breakfast",   veg:true,  desc:"Puffed poori with potato masala",             emoji:"🫓", img:"poori-masala"},
  {id:6,  name:"Masala Chai",          price:12, cat:"Breakfast",   veg:true,  desc:"Spiced milk tea",                             emoji:"☕", img:"masala-chai"},
  {id:7,  name:"Filter Coffee",        price:15, cat:"Breakfast",   veg:true,  desc:"South Indian decoction coffee",               emoji:"☕", img:"filter-coffee"},
  // ---- Lunch ----
  {id:8,  name:"Veg Meals",            price:70, cat:"Lunch",       veg:true,  desc:"Rice, sambar, rasam, two poriyal, curd",      emoji:"🍱", img:"veg-meals"},
  {id:9,  name:"Veg Biryani",          price:75, cat:"Lunch",       veg:true,  desc:"Basmati rice, mixed vegetables, raita",       emoji:"🍛", img:"veg-biryani"},
  {id:10, name:"Chicken Biryani",      price:95, cat:"Lunch",       veg:false, desc:"Basmati rice, spiced chicken, raita",         emoji:"🍗", img:"chicken-biryani"},
  {id:11, name:"Curd Rice",            price:35, cat:"Lunch",       veg:true,  desc:"Cooling rice, curd, tempering",               emoji:"🍚", img:"curd-rice"},
  {id:12, name:"Sambar Rice",          price:50, cat:"Lunch",       veg:true,  desc:"Rice mixed with hot sambar and ghee",         emoji:"🍲", img:"sambar-rice"},
  // ---- Dinner ----
  {id:13, name:"Chapati Kurma",        price:50, cat:"Dinner",      veg:true,  desc:"Soft chapati (3 pc) with vegetable kurma",    emoji:"🫓", img:"chapati-kurma"},
  {id:14, name:"Parotta Salna",        price:55, cat:"Dinner",      veg:false, desc:"Layered parotta (2 pc) with spicy salna",     emoji:"🥘", img:"parotta-salna"},
  {id:15, name:"Paneer Butter Masala", price:80, cat:"Dinner",      veg:true,  desc:"Rich tomato gravy, cottage cheese, rice",     emoji:"🍲", img:"paneer-butter-masala"},
  {id:16, name:"Egg Fried Rice",       price:70, cat:"Dinner",      veg:false, desc:"Wok-tossed rice with egg and vegetables",     emoji:"🍳", img:"egg-fried-rice"},
  // ---- Snacks ----
  {id:17, name:"Veg Puff",             price:20, cat:"Snacks",      veg:true,  desc:"Flaky pastry, spiced vegetable filling",      emoji:"🥐", img:"veg-puff"},
  {id:18, name:"Chicken Roll",         price:60, cat:"Snacks",      veg:false, desc:"Grilled chicken, onions, mint sauce",         emoji:"🌯", img:"chicken-roll"},
  {id:19, name:"French Fries",         price:50, cat:"Snacks",      veg:true,  desc:"Salted, served with ketchup",                 emoji:"🍟", img:"french-fries"},
  {id:20, name:"Samosa (2 pc)",        price:25, cat:"Snacks",      veg:true,  desc:"Fried pastry, spiced potato filling",         emoji:"🥟", img:"samosa"},
  // ---- Cool Drinks ----
  {id:21, name:"Cold Coffee",          price:35, cat:"Cool Drinks", veg:true,  desc:"Chilled, blended with ice cream",             emoji:"🥤", img:"cold-coffee"},
  {id:22, name:"Fresh Lime Soda",      price:20, cat:"Cool Drinks", veg:true,  desc:"Lime, soda, sweet or salt",                   emoji:"🍋", img:"lime-soda"},
  {id:23, name:"Mango Juice",          price:40, cat:"Cool Drinks", veg:true,  desc:"Thick, chilled mango juice",                  emoji:"🥭", img:"mango-juice"},
  {id:24, name:"Rose Milk",            price:30, cat:"Cool Drinks", veg:true,  desc:"Cold milk with rose syrup",                   emoji:"🥛", img:"rose-milk"},
  {id:25, name:"Watermelon Juice",     price:30, cat:"Cool Drinks", veg:true,  desc:"Fresh watermelon, no added water",            emoji:"🍉", img:"watermelon-juice"},
  // ---- Desserts ----
  {id:26, name:"Gulab Jamun (2 pc)",   price:25, cat:"Desserts",    veg:true,  desc:"Milk dumplings in sugar syrup",               emoji:"🍡", img:"gulab-jamun"},
  {id:27, name:"Fruit Custard",        price:30, cat:"Desserts",    veg:true,  desc:"Seasonal fruit, chilled custard",             emoji:"🍮", img:"fruit-custard"},
];

// Menu is saved in the browser, so added items and edited prices stay after refresh.
function loadMenu() {
  try { const s = JSON.parse(localStorage.getItem("kc_menu")); if (Array.isArray(s)) return s; } catch (e) {}
  return DEFAULT_MENU.map(m => ({...m}));
}
function saveMenu() {
  try { localStorage.setItem("kc_menu", JSON.stringify(MENU.map(({src, ...m}) => m))); return true; }
  catch (e) { return false; }
}
const MENU = loadMenu();
const setSrc = m => m.src = m.photo || (m.img ? `images/${m.img}.jpg` : "");
MENU.forEach(setSrc);

let CATS = ["All"];
let activeCat = "All";
let cart = {};
let popupId = null;

/* ---------- helpers ---------- */
const $ = id => document.getElementById(id);
const byId = id => MENU.find(m => m.id === Number(id));
const catColor = cat => CAT_COLORS[cat] || {c:"#241C15", c1:"#ddd", c2:"#bbb"};
const rupee = n => "₹" + n;
const cartCount = () => Object.values(cart).reduce((s, q) => s + q, 0);
const cartTotal = () => Object.keys(cart).reduce((s, id) => s + byId(id).price * cart[id], 0);

// Food photo. If the image file is missing, the emoji shows instead.
function picHTML(m, cls = "", withVeg = false, style = "") {
  const col = catColor(m.cat);
  return `<div class="pic ${cls}" style="--c1:${col.c1};--c2:${col.c2};${style}">
    ${withVeg ? `<span class="veg-mark ${m.veg ? "" : "non"}"></span>` : ""}
    <span>${m.emoji}</span>
    ${m.src ? `<img src="${m.src}" alt="${m.name}" loading="lazy" onerror="this.remove()">` : ""}
  </div>`;
}

/* ---------- saved tokens (localStorage) ---------- */
let memOrders = [], memToken = 100;
function loadOrders() {
  try { return JSON.parse(localStorage.getItem("kc_orders")) || []; } catch (e) { return memOrders; }
}
function saveOrders(list) {
  memOrders = list;
  try { localStorage.setItem("kc_orders", JSON.stringify(list)); } catch (e) {}
}
function nextToken() {
  let n;
  try { n = (Number(localStorage.getItem("kc_token")) || 100) + 1; localStorage.setItem("kc_token", n); }
  catch (e) { n = ++memToken; }
  return n;
}

/* ---------- page navigation ---------- */
function showPage(id, anim) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active", "enter-right", "enter-left", "enter-zoom"));
  $(id).classList.add("active", anim);
  window.scrollTo(0, 0);
}

/* =========================================================
   PAGE 1 — MENU
   ========================================================= */
function renderTabs() {
  CATS = ["All", ...new Set(MENU.map(m => m.cat))];
  if (!CATS.includes(activeCat)) activeCat = "All";
  $("tabs").innerHTML = CATS.map(c => {
    const col = c === "All" ? "#241C15" : catColor(c).c;
    return `<button class="tab ${c === activeCat ? "active" : ""}" style="--cat:${col}" data-cat="${c}">${c}</button>`;
  }).join("");
}
$("tabs").onclick = e => {
  const t = e.target.closest(".tab");
  if (!t) return;
  activeCat = t.dataset.cat;
  renderTabs(); renderGrid();
};

function stepperHTML(m) {
  const qty = cart[m.id] || 0;
  const col = catColor(m.cat).c;
  if (qty > 0) {
    return `<div class="stepper" style="--cat:${col}">
      <button data-act="dec" data-id="${m.id}">−</button><span>${qty}</span>
      <button data-act="inc" data-id="${m.id}">+</button></div>`;
  }
  return `<button class="addbtn" style="--cat:${col}" data-act="inc" data-id="${m.id}">Add</button>`;
}

function renderGrid() {
  const items = MENU.filter(m => activeCat === "All" || m.cat === activeCat);
  $("grid").innerHTML = items.map((m, i) => `
    <div class="item" style="--i:${i}" data-open="${m.id}">
      ${picHTML(m, "", true)}
      <div class="item-body">
        <h3>${m.name}</h3>
        <p class="desc">${m.desc}</p>
      </div>
      <div class="item-bottom">
        <span class="price">${m.price}</span>
        <span data-stepwrap="${m.id}">${stepperHTML(m)}</span>
      </div>
    </div>`).join("");
}
$("grid").onclick = e => {
  const act = e.target.closest("[data-act]");
  if (act) { bump(act.dataset.id, act.dataset.act); return; }
  const card = e.target.closest(".item");
  if (card) openPopup(Number(card.dataset.open));
};

function bump(id, act) {
  id = Number(id);
  if (act === "inc") cart[id] = (cart[id] || 0) + 1;
  else { cart[id] = (cart[id] || 0) - 1; if (cart[id] <= 0) delete cart[id]; }
  onCartChange(id);
}

// one place that keeps every screen in sync
function onCartChange(id) {
  const m = byId(id);
  const w = document.querySelector(`[data-stepwrap="${id}"]`);
  if (w) { w.innerHTML = stepperHTML(m); const s = w.querySelector(".stepper"); if (s) s.classList.add("pop"); }
  if (popupId === id) { $("popStep").innerHTML = stepperHTML(m); }
  renderBar();
  if ($("pageOrder").classList.contains("active")) syncOrder(id);
}

function renderBar() {
  const n = cartCount();
  $("cbCount").textContent = `${n} item${n === 1 ? "" : "s"} added`;
  $("cbTotal").textContent = rupee(cartTotal());
  $("cartbar").classList.toggle("show", n > 0);
}

/* ---------- popup ---------- */
function openPopup(id) {
  const m = byId(id);
  popupId = id;
  $("popupCard").innerHTML = `
    <button class="close" id="popClose" aria-label="Close">✕</button>
    ${picHTML(m, "", true)}
    <div class="body">
      <h2 class="display">${m.name}</h2>
      <p class="desc">${m.desc}</p>
      <div class="row">
        <span class="price display">${m.price}</span>
        <span id="popStep">${stepperHTML(m)}</span>
      </div>
    </div>`;
  $("overlay").classList.add("open");
}
function closePopup() { $("overlay").classList.remove("open"); $("popupCard").classList.remove("form"); popupId = null; }
$("overlay").onclick = e => {
  if (e.target === $("overlay") || e.target.id === "popClose") { closePopup(); return; }
  const act = e.target.closest("[data-act]");
  if (act) bump(act.dataset.id, act.dataset.act);
};
document.addEventListener("keydown", e => { if (e.key === "Escape") closePopup(); });

/* =========================================================
   PAGE 2 — ORDER DETAILS
   ========================================================= */
function orderLineHTML(m, i) {
  const qty = cart[m.id];
  return `<div class="o-line" style="--i:${i}" data-line="${m.id}">
    ${picHTML(m, "o-thumb")}
    <div class="o-info">
      <h4>${m.name}</h4>
      <p class="unit mono">${rupee(m.price)} each</p>
      <span data-stepwrap="${m.id}">${stepperHTML(m)}</span>
    </div>
    <div class="o-right"><span class="o-amt mono">${rupee(m.price * qty)}</span></div>
  </div>`;
}

function renderOrder() {
  const ids = Object.keys(cart);
  if (ids.length === 0) {
    $("orderList").innerHTML = `<div class="empty"><span class="big-emoji">🍽️</span>
      <p>Your order is empty.<br>Pick something tasty from the menu.</p>
      <button class="place-btn" id="emptyBack">Browse menu</button></div>`;
  } else {
    $("orderList").innerHTML = ids.map((id, i) => orderLineHTML(byId(id), i)).join("");
  }
  updateOrderTotals();
}
function syncOrder(id) {
  const line = document.querySelector(`[data-line="${id}"]`);
  if (line) {
    if (!cart[id]) {
      line.classList.add("out");
      setTimeout(() => { line.remove(); if (!Object.keys(cart).length) renderOrder(); }, 280);
    } else {
      line.querySelector(".o-amt").textContent = rupee(byId(id).price * cart[id]);
    }
  }
  updateOrderTotals();
}
function updateOrderTotals() {
  const n = cartCount();
  $("orderMeta").textContent = `${n} item${n === 1 ? "" : "s"}`;
  $("orderTotal").textContent = rupee(cartTotal());
  $("placeBtn").disabled = n === 0;
}
$("orderList").onclick = e => {
  const act = e.target.closest("[data-act]");
  if (act) { bump(act.dataset.id, act.dataset.act); return; }
  if (e.target.id === "emptyBack") goMenu();
};

function goMenu() { renderTabs(); renderGrid(); renderBar(); showPage("pageMenu", "enter-left"); }

$("btnViewOrder").onclick = () => { renderOrder(); showPage("pageOrder", "enter-right"); };
$("orderBack").onclick = goMenu;

/* ---------- place order -> token ---------- */
$("placeBtn").onclick = () => {
  const ids = Object.keys(cart);
  if (!ids.length) return;
  const items = ids.map(id => {
    const m = byId(id);
    return {id: m.id, name: m.name, price: m.price, qty: cart[id]};
  });
  const order = {token: nextToken(), time: Date.now(), items, total: cartTotal()};
  const list = loadOrders();
  list.unshift(order);
  saveOrders(list); // every bill is kept

  cart = {};
  renderBar();
  renderTokenPage(order);
  showPage("pageToken", "enter-zoom");
  launchConfetti();
  if (autoPrintOn()) setTimeout(() => printReceipt(order), 900);
};

/* =========================================================
   PAGE 3 — TOKEN + SAVED TOKENS
   ========================================================= */
function renderTokenPage(order) {
  const card = $("tokenCard");
  if (!order) { card.style.display = "none"; renderHistory(); return; }
  card.style.display = "";
  // restart the tick / token animations
  card.replaceWith(card.cloneNode(true));
  $("btnNew").onclick = goMenu;
  currentOrder = order;
  $("btnPrint").onclick = () => printReceipt(currentOrder);
  $("autoPrint").checked = autoPrintOn();
  $("autoPrint").onchange = e => setAutoPrint(e.target.checked);

  $("tokNum").textContent = "#" + order.token;
  $("tokItems").innerHTML = order.items.map(it => {
    const m = byId(it.id);
    return `<div class="tok-line">
      ${m ? picHTML(m) : ""}
      <span class="n">${it.name}<br><span class="q mono">${it.qty} × ${rupee(it.price)}</span></span>
      <span class="mono">${rupee(it.qty * it.price)}</span>
    </div>`;
  }).join("");
  $("tokTotal").textContent = rupee(order.total);
  renderHistory();
}

/* ---------- print bill (thermal / normal printer) ---------- */
let currentOrder = null;
function autoPrintOn() { try { return localStorage.getItem("kc_autoprint") === "1"; } catch (e) { return false; } }
function setAutoPrint(v) { try { localStorage.setItem("kc_autoprint", v ? "1" : "0"); } catch (e) {} }

function printReceipt(o) {
  if (!o) return;
  const d = new Date(o.time);
  const date = d.toLocaleDateString("en-IN", {day: "2-digit", month: "short", year: "numeric"});
  const time = d.toLocaleTimeString("en-IN", {hour: "2-digit", minute: "2-digit", hour12: true});
  const qtyAll = o.items.reduce((s, i) => s + i.qty, 0);
  $("receipt").innerHTML = `
    <div class="r-c r-shop">KITCHEN COUNTER</div>
    <div class="r-c">Block C Canteen</div>
    <div class="r-hr"></div>
    <div class="r-row"><span>${date}</span><span>${time}</span></div>
    <div class="r-hr"></div>
    <div class="r-c r-tok-label">YOUR TOKEN NUMBER</div>
    <div class="r-c r-tok">#${o.token}</div>
    <div class="r-hr"></div>
    ${o.items.map(i => `
      <div class="r-item">
        <div>${i.name}</div>
        <div class="r-row r-sub"><span>${i.qty} x ${i.price}</span><span>${i.qty * i.price}</span></div>
      </div>`).join("")}
    <div class="r-hr"></div>
    <div class="r-row"><span>Items</span><span>${qtyAll}</span></div>
    <div class="r-row r-total"><span>TOTAL</span><span>Rs. ${o.total}</span></div>
    <div class="r-hr"></div>
    <div class="r-c">Collect your order at the counter<br>when your token is called.</div>
    <div class="r-c" style="margin-top:6px;">Thank you! Visit again.</div>`;
  window.print();
}

function fmtTime(ts) {
  return new Date(ts).toLocaleString("en-IN", {day: "numeric", month: "short", hour: "numeric", minute: "2-digit", hour12: true});
}
function renderHistory() {
  const list = loadOrders();
  $("histList").innerHTML = list.length
    ? list.map(o => `<div class="h-card">
        <div class="h-tok mono">#${o.token}</div>
        <div class="h-mid">
          <div class="h-items">${o.items.map(i => `${i.qty}× ${i.name}`).join(", ")}</div>
          <div class="h-time">${fmtTime(o.time)}</div>
        </div>
        <div class="h-amt mono">${rupee(o.total)}</div>
        <button class="h-print" data-print="${o.token}">Print</button>
      </div>`).join("")
    : `<div class="h-empty">No tokens saved yet.</div>`;
}
$("histList").onclick = e => {
  const b = e.target.closest("[data-print]");
  if (!b) return;
  const o = loadOrders().find(x => x.token === Number(b.dataset.print));
  if (o) printReceipt(o);
};
$("btnClear").onclick = () => {
  if (confirm("Delete ALL saved bills? This cannot be undone.")) { saveOrders([]); renderHistory(); }
};
$("btnHistBack").onclick = goMenu;
$("btnNew").onclick = goMenu;
$("btnTokens").onclick = () => { renderTokenPage(null); showPage("pageToken", "enter-right"); };

function launchConfetti() {
  const box = $("confetti");
  const colors = ["#FF7B54", "#FFC93C", "#2EC4B6", "#7B6EF6", "#E1499E", "#2E9E6B"];
  box.innerHTML = "";
  for (let i = 0; i < 46; i++) {
    const p = document.createElement("i");
    p.style.left = Math.random() * 100 + "%";
    p.style.background = colors[i % colors.length];
    p.style.animationDuration = (2.2 + Math.random() * 2) + "s";
    p.style.animationDelay = (Math.random() * 0.8) + "s";
    box.appendChild(p);
  }
  setTimeout(() => box.innerHTML = "", 5500);
}

/* ---------- moving background: floating food ---------- */
(function floaters() {
  const box = $("floaters");
  const list = [...new Set(MENU.map(m => m.emoji))];
  for (let i = 0; i < 16; i++) {
    const s = document.createElement("span");
    s.textContent = list[i % list.length];
    s.style.left = (Math.random() * 96) + "%";
    s.style.fontSize = (1.6 + Math.random() * 2.2) + "rem";
    s.style.animationDuration = (16 + Math.random() * 18) + "s";
    s.style.animationDelay = (-Math.random() * 30) + "s";
    box.appendChild(s);
  }
})();

/* =========================================================
   MANAGE MENU — add item, edit price / details, delete
   ========================================================= */
function renderManage() {
  $("manageMeta").textContent = `${MENU.length} item${MENU.length === 1 ? "" : "s"}`;
  $("manageList").innerHTML = MENU.length ? MENU.map((m, i) => `
    <div class="o-line" style="--i:${i}">
      ${picHTML(m, "o-thumb")}
      <div class="o-info">
        <h4>${m.name}</h4>
        <p class="unit mono">${m.cat}, ${m.veg ? "Veg" : "Non-veg"}</p>
        <label class="rate mono">₹ <input type="number" min="1" step="1" value="${m.price}" data-rate="${m.id}" aria-label="Price of ${m.name}"></label>
      </div>
      <div class="o-right">
        <button class="link-btn" data-edit="${m.id}">Edit</button>
        <button class="link-btn" data-del="${m.id}">Delete</button>
      </div>
    </div>`).join("") : `<div class="empty"><p>No items yet.<br>Tap "Add item" to create one.</p></div>`;
}
$("manageList").onchange = e => {
  const r = e.target.closest("[data-rate]");
  if (!r) return;
  const m = byId(r.dataset.rate), v = Math.round(Number(r.value));
  if (!(v >= 1)) { r.value = m.price; return; }
  m.price = r.value = v;
  if (!saveMenu()) alert("Could not save the new price. Browser storage is blocked.");
  r.classList.add("saved");
  setTimeout(() => r.classList.remove("saved"), 1200);
};
$("manageList").onclick = e => {
  const ed = e.target.closest("[data-edit]");
  if (ed) return openItemForm(byId(ed.dataset.edit));
  const d = e.target.closest("[data-del]");
  if (!d) return;
  const m = byId(d.dataset.del);
  if (!confirm(`Delete "${m.name}" from the menu? Saved bills are not affected.`)) return;
  MENU.splice(MENU.indexOf(m), 1);
  delete cart[m.id];
  saveMenu(); renderManage(); renderBar();
};
$("btnManage").onclick = () => { renderManage(); showPage("pageManage", "enter-right"); };
$("manageBack").onclick = goMenu;
$("btnAddItem").onclick = () => openItemForm();

// shrink a chosen photo so it fits in browser storage
const shrink = file => new Promise(res => {
  const img = new Image(), url = URL.createObjectURL(file);
  img.onload = () => {
    const k = Math.min(1, 480 / Math.max(img.width, img.height));
    const c = document.createElement("canvas");
    c.width = Math.round(img.width * k); c.height = Math.round(img.height * k);
    c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
    URL.revokeObjectURL(url);
    res(c.toDataURL("image/jpeg", 0.8));
  };
  img.onerror = () => res(null);
  img.src = url;
});

function openItemForm(m) {
  const v = m || {name: "", price: "", cat: "Snacks", veg: true, emoji: "", desc: ""};
  $("popupCard").classList.add("form");
  $("popupCard").innerHTML = `
    <button class="close" id="popClose" aria-label="Close">✕</button>
    <form class="body itemform" id="itemForm">
      <h2 class="display">${m ? "Edit item" : "Add new item"}</h2>
      <label>Name<input name="name" required maxlength="40" value="${v.name}"></label>
      <label>Price (₹)<input name="price" type="number" min="1" step="1" required value="${v.price}"></label>
      <label>Category<select name="cat">${Object.keys(CAT_COLORS).map(c => `<option${c === v.cat ? " selected" : ""}>${c}</option>`).join("")}</select></label>
      <label>Type<select name="veg"><option value="1"${v.veg ? " selected" : ""}>Veg</option><option value="0"${v.veg ? "" : " selected"}>Non-veg</option></select></label>
      <label>Emoji (shown when there is no photo)<input name="emoji" maxlength="4" placeholder="🍽️" value="${v.emoji}"></label>
      <label>Description<input name="desc" maxlength="70" value="${v.desc}"></label>
      <label>Photo (optional)<input name="photo" type="file" accept="image/*"></label>
      <button class="place-btn wide" type="submit">${m ? "Save changes" : "Add to menu"}</button>
    </form>`;
  $("overlay").classList.add("open");
  $("itemForm").onsubmit = async ev => {
    ev.preventDefault();
    const f = ev.target.elements, clean = t => t.replace(/[<>"]/g, "").trim();
    const name = clean(f.name.value), price = Math.round(Number(f.price.value));
    if (!name || !(price >= 1)) return;
    const d = {name, price, cat: f.cat.value, veg: f.veg.value === "1",
               emoji: f.emoji.value.trim() || "🍽️", desc: clean(f.desc.value)};
    if (f.photo.files[0]) { const p = await shrink(f.photo.files[0]); if (p) d.photo = p; }
    let item = m;
    if (m) Object.assign(m, d); else { item = {id: Date.now(), ...d}; MENU.push(item); }
    setSrc(item);
    if (!saveMenu()) alert("Could not save. Browser storage is full or blocked. Try a smaller photo.");
    closePopup(); renderManage();
  };
}

/* ---------- start ---------- */
renderTabs();
renderGrid();
renderBar();
