const products = [
  {id:1,name:"Manchester United Home Jersey 2025/26",team:"Manchester United",league:"Premier League",season:"2025/26",category:"Premier League",price:35,custom:true,new:true},
  {id:2,name:"Arsenal Home Jersey 2025/26",team:"Arsenal",league:"Premier League",season:"2025/26",category:"Premier League",price:35,custom:true,new:true},
  {id:3,name:"Liverpool Home Jersey 2025/26",team:"Liverpool",league:"Premier League",season:"2025/26",category:"Premier League",price:35,custom:true},
  {id:4,name:"Manchester City Away Jersey 2025/26",team:"Manchester City",league:"Premier League",season:"2025/26",category:"Premier League",price:35,custom:true},
  {id:5,name:"Real Madrid Home Jersey 2025/26",team:"Real Madrid",league:"La Liga",season:"2025/26",category:"La Liga",price:35,custom:true,new:true},
  {id:6,name:"Barcelona Home Jersey 2025/26",team:"Barcelona",league:"La Liga",season:"2025/26",category:"La Liga",price:35,custom:true},
  {id:7,name:"Bayern Munich Home Jersey 2025/26",team:"Bayern Munich",league:"Bundesliga",season:"2025/26",category:"Bundesliga",price:35,custom:true},
  {id:8,name:"Borussia Dortmund Home Jersey 2025/26",team:"Borussia Dortmund",league:"Bundesliga",season:"2025/26",category:"Bundesliga",price:35,custom:true},
  {id:9,name:"PSG Home Jersey 2025/26",team:"PSG",league:"Ligue 1",season:"2025/26",category:"Ligue 1",price:35,custom:true},
  {id:10,name:"Juventus Home Jersey 2025/26",team:"Juventus",league:"Serie A",season:"2025/26",category:"Serie A",price:35,custom:true},
  {id:11,name:"AC Milan Home Jersey 2025/26",team:"AC Milan",league:"Serie A",season:"2025/26",category:"Serie A",price:35,custom:true},
  {id:12,name:"Inter Milan Home Jersey 2025/26",team:"Inter Milan",league:"Serie A",season:"2025/26",category:"Serie A",price:35,custom:true},
  {id:13,name:"Brazil National Team Jersey",team:"Brazil",league:"National Teams",season:"2025",category:"National Teams",price:35,custom:true},
  {id:14,name:"Argentina National Team Jersey",team:"Argentina",league:"National Teams",season:"2025",category:"National Teams",price:35,custom:true},
  {id:15,name:"Manchester United Retro Jersey",team:"Manchester United",league:"Retro",season:"Classic",category:"Retro",price:35,custom:false},
  {id:16,name:"Barcelona Retro Jersey",team:"Barcelona",league:"Retro",season:"Classic",category:"Retro",price:35,custom:false}
];

let cart = JSON.parse(localStorage.getItem("nxtgCart") || "[]");

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

function money(n){ return "$" + n.toFixed(2); }

function renderProducts(){
  let list = [...products];
  const q = $("#searchInput").value.trim().toLowerCase();
  const cat = $("#categoryFilter").value;
  const team = $("#teamFilter").value.trim().toLowerCase();
  const player = $("#playerFilter").value.trim().toLowerCase();
  const season = $("#seasonFilter").value.trim().toLowerCase();
  const size = $("#sizeFilter").value;
  const max = parseFloat($("#priceFilter").value);

  if(q) list = list.filter(p => JSON.stringify(p).toLowerCase().includes(q));
  if(cat) list = list.filter(p => p.category === cat || p.league === cat);
  if(team) list = list.filter(p => p.team.toLowerCase().includes(team));
  if(player) list = list.filter(p => p.name.toLowerCase().includes(player));
  if(season) list = list.filter(p => p.season.toLowerCase().includes(season));
  if(max) list = list.filter(p => p.price <= max);
  // Demo catalog uses common sizes; size filter is retained for database integration.
  if(size) list = list.filter(() => true);

  const sort = $("#sortSelect").value;
  if(sort === "low") list.sort((a,b)=>a.price-b.price);
  if(sort === "high") list.sort((a,b)=>b.price-a.price);
  if(sort === "az") list.sort((a,b)=>a.name.localeCompare(b.name));
  if(sort === "newest") list.sort((a,b)=>(b.new?1:0)-(a.new?1:0));

  $("#productCount").textContent = `${list.length} shown • database-ready for 8,000+ products`;
  $("#products").innerHTML = list.map(p => `
    <article class="product-card" onclick="openProduct(${p.id})">
      ${p.new ? '<span class="badge">NEW</span>' : ''}
      <div class="product-image"><div class="fake-shirt">NXTG</div></div>
      <div class="product-info">
        <h3>${p.name}</h3>
        <div class="product-meta">${p.team} • ${p.league}</div>
        <div class="price">${money(p.price)}</div>
        <button class="add-small" onclick="event.stopPropagation();quickAdd(${p.id})">Add to Cart</button>
      </div>
    </article>
  `).join("") || `<div class="mini-note" style="grid-column:1/-1">No jerseys found. Try another search or clear your filters.</div>`;
}

function quickAdd(id){
  const p = products.find(x=>x.id===id);
  cart.push({id:p.id,name:p.name,price:p.price,size:"M",customName:"",customNumber:""});
  saveCart();
  openCart();
}

function openProduct(id){
  const p = products.find(x=>x.id===id);
  $("#productModalContent").innerHTML = `
    <div class="detail-grid">
      <div class="detail-image"><div class="fake-shirt">NXTG</div></div>
      <div class="detail">
        <p class="eyebrow">${p.team} • ${p.league}</p>
        <h1>${p.name}</h1>
        <div class="detail-price">${money(p.price)}</div>
        <p style="color:#666;line-height:1.6">Product details, authorized images, sizes, availability, shipping and return information can be loaded from the production catalog database.</p>
        <label>Size
          <select id="detailSize"><option>S</option><option selected>M</option><option>L</option><option>XL</option><option>2XL</option></select>
        </label>
        ${p.custom ? `
          <label>Name
            <input id="detailName" maxlength="15" placeholder="Optional custom name">
          </label>
          <label>Number
            <input id="detailNumber" inputmode="numeric" maxlength="2" placeholder="Optional number">
          </label>` : ""}
        <button class="btn primary full" onclick="addDetail(${p.id})">Add to Cart</button>
      </div>
    </div>`;
  $("#productModal").classList.add("open");
}

function addDetail(id){
  const p = products.find(x=>x.id===id);
  cart.push({
    id:p.id,name:p.name,price:p.price,
    size:$("#detailSize").value,
    customName:$("#detailName")?.value || "",
    customNumber:$("#detailNumber")?.value || ""
  });
  saveCart();
  $("#productModal").classList.remove("open");
  openCart();
}

function saveCart(){
  localStorage.setItem("nxtgCart",JSON.stringify(cart));
  $("#cartCount").textContent = cart.length;
  renderCart();
}

function renderCart(){
  $("#cartItems").innerHTML = cart.length ? cart.map((x,i)=>`
    <div class="cart-item">
      <div class="cart-thumb">NXTG</div>
      <div>
        <h4>${x.name}</h4>
        <p>Size: ${x.size}${x.customName ? ` • Name: ${x.customName}` : ""}${x.customNumber ? ` • #${x.customNumber}` : ""}</p>
        <strong>${money(x.price)}</strong><br>
        <button class="remove" onclick="removeCart(${i})">Remove</button>
      </div>
    </div>`).join("") : `<p style="color:#777">Your cart is empty.</p>`;
  $("#cartTotal").textContent = money(cart.reduce((s,x)=>s+x.price,0));
}
function removeCart(i){cart.splice(i,1);saveCart();}
function openCart(){$("#cartDrawer").classList.add("open");$("#drawerOverlay").classList.add("open")}
function closeCart(){$("#cartDrawer").classList.remove("open");$("#drawerOverlay").classList.remove("open")}

function clearFilters(){
  ["#searchInput","#teamFilter","#playerFilter","#seasonFilter","#priceFilter"].forEach(s=>$(s).value="");
  $("#categoryFilter").value="";$("#sizeFilter").value="";$("#sortSelect").value="featured";renderProducts();
}

$$("[data-filter]").forEach(btn=>btn.addEventListener("click",()=>{
  $("#categoryFilter").value = ["Premier League","La Liga","Serie A","Bundesliga","Ligue 1","MLS","National Teams","Retro"].includes(btn.dataset.filter) ? btn.dataset.filter : "";
  $("#searchInput").value = btn.dataset.filter;
  if(!["Premier League","La Liga","Serie A","Bundesliga","Ligue 1","MLS","National Teams","Retro"].includes(btn.dataset.filter)) $("#searchInput").value="";
  $("#shop").scrollIntoView({behavior:"smooth"});
  if(!$("#categoryFilter").value) $("#teamFilter").value=btn.dataset.filter;
  renderProducts();
}));

["#searchInput","#teamFilter","#playerFilter","#seasonFilter","#priceFilter","#categoryFilter","#sizeFilter","#sortSelect"].forEach(s=>$(s).addEventListener("input",renderProducts));
$("#clearFilters").addEventListener("click",clearFilters);
$("#openCart").addEventListener("click",openCart);
$("#closeCart").addEventListener("click",closeCart);
$("#drawerOverlay").addEventListener("click",closeCart);
$("#menuBtn").addEventListener("click",()=>$("#mobileMenu").classList.toggle("open"));

$("#openSearch").addEventListener("click",()=>{$("#searchModal").classList.add("open");$("#modalSearch").focus()});
$("#modalSearchGo").addEventListener("click",()=>{
  $("#searchInput").value=$("#modalSearch").value;
  $("#searchModal").classList.remove("open");
  $("#shop").scrollIntoView({behavior:"smooth"});
  renderProducts();
});
$$("[data-close]").forEach(b=>b.addEventListener("click",()=>$("#"+b.dataset.close).classList.remove("open")));
$$(".modal").forEach(m=>m.addEventListener("click",e=>{if(e.target===m)m.classList.remove("open")}));

$("#checkoutBtn").addEventListener("click",()=>{
  alert("Checkout placeholder: connect Stripe Checkout/Payment Element and server-side order creation here. Guest checkout is intentionally supported.");
});

$("#cartCount").textContent=cart.length;
renderProducts();
renderCart();
