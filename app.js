const products = [
  {"id": 1, "name": "Manchester United Home Jersey 2025/26", "team": "Manchester United", "league": "Premier League", "season": "2025/26", "category": "Premier League", "price": 35, "custom": true, "new": true, "image": "https://media.discordapp.net/attachments/1542718159881109508/1543823529072398356/7f1865a4cc390bf07c1c1fe705353a07.png?=&ex=6a964534&format=webp&height=384&hm=371b9cac82a9d970ba5b6ca87dbf704a33bf1bed61274e424836f49f049cb650&is=6a94f3b4&quality=lossless&width=384"},
  {"id": 2, "name": "Inter Milan Home Jersey 2025/26", "team": "Inter Milan", "league": "Serie A", "season": "2025/26", "category": "Serie A", "price": 35, "custom": true, "new": true, "image": "https://media.discordapp.net/attachments/1542718159881109508/1543823747759349831/4bd40bb18017aef7b061495eaeaefe8b.png?=&ex=6a964568&format=webp&height=384&hm=96ced024f56e8ffd1c97868ac94b54062927ed005cc2e294abf0af1f80468e6d&is=6a94f3e8&quality=lossless&width=384"},
  {"id": 3, "name": "Manchester City Away Jersey 2025/26", "team": "Manchester City", "league": "Premier League", "season": "2025/26", "category": "Premier League", "price": 35, "custom": true, "new": true, "image": "https://media.discordapp.net/attachments/1542718159881109508/1543823876415299665/532fcdec47d403d08f31a65593142c97.png?=&ex=6a964586&format=webp&height=384&hm=f115d73b7ccdc87eeb7f725b6aef3ff7610cac0a1e39693764a14de6d73586bc&is=6a94f406&quality=lossless&width=384"},
  {"id": 4, "name": "AC Milan Home Jersey 2025/26", "team": "AC Milan", "league": "Serie A", "season": "2025/26", "category": "Serie A", "price": 35, "custom": true, "new": true, "image": "https://media.discordapp.net/attachments/1542718159881109508/1543824038831591535/7b0609155658b8e41a9967edbaeb805a.png?=&ex=6a9645ad&format=webp&height=384&hm=150454e32beb26034c41d4c86ca62f2b04b976a358776c097c8612710d3c2070&is=6a94f42d&quality=lossless&width=384"},
  {"id": 5, "name": "Liverpool Home Jersey 2025/26", "team": "Liverpool", "league": "Premier League", "season": "2025/26", "category": "Premier League", "price": 35, "custom": true, "new": true, "image": "https://media.discordapp.net/attachments/1542718159881109508/1543824045944864818/a8d8dc59c9950bb3f381600b0177d61b.png?=&ex=6a9645af&format=webp&height=384&hm=e49a4add36f2133f52adf28d9ea0d29f46baec71e25782324abd784558c4cf65&is=6a94f42f&quality=lossless&width=384"},
  {"id": 6, "name": "Arsenal Home Jersey 2025/26", "team": "Arsenal", "league": "Premier League", "season": "2025/26", "category": "Premier League", "price": 35, "custom": true, "new": true, "image": "https://media.discordapp.net/attachments/1542718159881109508/1543824216468623500/b4a7892d94a88a9f1ff0a07e76f46f14.png?=&ex=6a9645d8&format=webp&height=384&hm=a14635bedd266e32843c319b07184544342231b9db7e76e74240b3b1cda92c55&is=6a94f458&quality=lossless&width=384"},
  {"id": 7, "name": "Juventus Home Jersey 2025/26", "team": "Juventus", "league": "Serie A", "season": "2025/26", "category": "Serie A", "price": 35, "custom": true, "new": true, "image": "https://media.discordapp.net/attachments/1542718159881109508/1543824591078694932/8e01aefad07ff54fc9faed18949edf5a.png?=&ex=6a964631&format=webp&height=384&hm=2169cda801c7204c2f08c3acebcc36a9ad5ab9ddb98c40d96012a4ca50419975&is=6a94f4b1&quality=lossless&width=384"},
  {"id": 8, "name": "Barcelona Home Jersey 2025/26", "team": "Barcelona", "league": "La Liga", "season": "2025/26", "category": "La Liga", "price": 35, "custom": true, "new": true, "image": "https://media.discordapp.net/attachments/1542718159881109508/1543824699526611015/59a36a898d71750c285bce1909348354.png?=&ex=6a96464b&format=webp&height=384&hm=b94f5f987e1507656294d30ff922f23634bfdb485e5cdea317d1225a34a5c98c&is=6a94f4cb&quality=lossless&width=384"},
  {"id": 9, "name": "PSG Home Jersey 2025/26", "team": "PSG", "league": "Ligue 1", "season": "2025/26", "category": "Ligue 1", "price": 35, "custom": true, "new": true, "image": "https://media.discordapp.net/attachments/1542718159881109508/1543824916976238734/18cd0ed5198f02ea8d844453ae434f35.png?=&ex=6a96467f&format=webp&height=384&hm=a32c38854565547411305a59697b06a1449b92b59a6ad336c1cf85713d269902&is=6a94f4ff&quality=lossless&width=384"},
  {"id": 10, "name": "Bayern Munich Home Jersey 2025/26", "team": "Bayern Munich", "league": "Bundesliga", "season": "2025/26", "category": "Bundesliga", "price": 35, "custom": true, "new": true, "image": "https://media.discordapp.net/attachments/1542718159881109508/1543825213115072602/a34c12740d585edd450d71b999c09980.png?=&ex=6a9646c5&format=webp&height=384&hm=68f8be285a06328225b825b9580e0f176157a1617adccaf007fd3ed80d77e096&is=6a94f545&quality=lossless&width=384"},
  {"id": 11, "name": "2018 Retro France Home Football Shirt", "team": "France", "league": "National Teams", "season": "2018", "category": "Retro", "price": 35, "custom": true, "new": false, "image": "https://media.discordapp.net/attachments/1542718159881109508/1543825463271755818/64f07c30413474ba6096ef1d77fb149d.png?=&ex=6a964701&format=webp&height=384&hm=2f73dd093f9b8ed4d4e377b431c5d13613888dbc9055bd94e46fc70066309253&is=6a94f581&quality=lossless&width=384"},
  {"id": 12, "name": "2007/2008 Retro Manchester United Goalkeeper Grey Football Shirt", "team": "Manchester United", "league": "Retro", "season": "2007/08", "category": "Retro", "price": 35, "custom": true, "new": false, "image": "https://media.discordapp.net/attachments/1542718159881109508/1543825549691060294/dbc551c7eed794a646c3fddc1a22e53c_420x.png?=&ex=6a964715&format=webp&height=384&hm=437c75e9c96a805396cde9a8e9f87d482fc982ac3c5b7dc75632079a899d0811&is=6a94f595&quality=lossless&width=384"},
  {"id": 13, "name": "2008/2009 Retro Barcelona Football Shirt Home Champions League", "team": "Barcelona", "league": "Retro", "season": "2008/09", "category": "Retro", "price": 35, "custom": true, "new": false, "image": "https://media.discordapp.net/attachments/1542718159881109508/1543825722961829898/e10121ed3f63f49e018f2aff1c0e8bc1.png?=&ex=6a96473f&format=webp&height=384&hm=ff3d79a66854bbce595ef0eaf7826a4f9a861795b3fb7b208e7ae1db1689f612&is=6a94f5bf&quality=lossless&width=334"},
  {"id": 14, "name": "2026 Argentina National Team Home Football Shirt", "team": "Argentina", "league": "National Teams", "season": "2026", "category": "National Teams", "price": 35, "custom": true, "new": true, "image": "https://media.discordapp.net/attachments/1542718159881109508/1543826009311416400/9de53ed4e98e37ecb767967a909ecb16.png?=&ex=6a964783&format=webp&height=384&hm=6d784a0f1c2775a424cd8616c1d2cb8b9957efa43ea6cf22c6d6b09f048f3ef1&is=6a94f603&quality=lossless&width=384"},
  {"id": 15, "name": "2014/2015 Retro Barcelona Football Shirt Home", "team": "Barcelona", "league": "Bundesliga", "season": "2014/15", "category": "Bundesliga", "price": 35, "custom": true, "new": false, "image": "https://media.discordapp.net/attachments/1542718159881109508/1543826146771214357/9c4413c10249a2f0ac491c56e881c649.png?=&ex=6a9647a4&format=webp&height=384&hm=0e58ddf4e95c1a60965d97b5d7ec0f531f4aba8200e295cc789eadbd733b94ac&is=6a94f624&quality=lossless&width=384"},
  {"id": 16, "name": "2026/2027 Player Version Real Madrid Away Football Shirt", "team": "Real Madrid", "league": "Bundesliga", "season": "2026/27", "category": "Bundesliga", "price": 35, "custom": true, "new": true, "image": "https://media.discordapp.net/attachments/1542718159881109508/1543826300102381568/3ef91be49df33c1b61ede064f88b7c27.png?=&ex=6a9647c8&format=webp&height=384&hm=9af2dd00a7b0df794ac5290156861595d2f87291d9824bd27cd4568280176aee&is=6a94f648&quality=lossless&width=384"},
  {"id": 17, "name": "2026 Morocco National Team Away Football Shirt", "team": "Morocco", "league": "National Teams", "season": "2026", "category": "National Teams", "price": 35, "custom": true, "new": true, "image": "https://media.discordapp.net/attachments/1542718159881109508/1543826349863477258/fd8680ed28c7273f842992f70b79b2c4.png?=&ex=6a9647d4&format=webp&height=384&hm=202a5f8d376d6bc8fb10195d4d82f165cecb377c08c8b722cdf383fa00056e38&is=6a94f654&quality=lossless&width=384"},
  {"id": 18, "name": "2026 United States National Team Home Football Shirt", "team": "United States", "league": "National Teams", "season": "2026", "category": "National Teams", "price": 35, "custom": true, "new": true, "image": "https://media.discordapp.net/attachments/1542718159881109508/1543826490289029211/172af911280749865b0e126b982b5e8a.png?=&ex=6a9647f6&format=webp&height=384&hm=afe2e39f0d316f7f7c89c28f1589fba86f799d31465176aba29cde6310437d3a&is=6a94f676&quality=lossless&width=384"},
  {"id": 19, "name": "2014/2015 Retro Bayern Munich Home Football Jersey", "team": "Bayern Munich", "league": "Ligue 1", "season": "2014/15", "category": "Ligue 1", "price": 35, "custom": true, "new": false, "image": "https://media.discordapp.net/attachments/1542718159881109508/1543826530336112650/b4d114bcc26f14bde4f715665ef03ade.png?=&ex=6a9647ff&format=webp&height=384&hm=85e77b2ec6858270a243125c8c4e4ec1aac3437540f3f206834a253597983fb4&is=6a94f67f&quality=lossless&width=384"},
  {"id": 20, "name": "2026/2027 Player Version Barcelona Home Football Shirt", "team": "Barcelona", "league": "Ligue 1", "season": "2026/27", "category": "Ligue 1", "price": 35, "custom": true, "new": true, "image": "https://media.discordapp.net/attachments/1542718159881109508/1543826861774340149/a7335cf2bb7b6041aa180a73b9b4b004.png?=&ex=6a96484e&format=webp&height=384&hm=2b4094198f1bb48b3fa209d7a5acd3ef75c74e886023cedf542875ced4ea0814&is=6a94f6ce&quality=lossless&width=384"},
  {"id": 21, "name": "2025/2026 Inter Miami Away Soccer Jersey", "team": "Inter Miami", "league": "MLS", "season": "2025/26", "category": "MLS", "price": 35, "custom": true, "new": true, "image": "https://media.discordapp.net/attachments/1542718159881109508/1543826986286321734/0dba1d6ca7170c56f5931e0e8445923d.png?=&ex=6a96486c&format=webp&height=384&hm=71382c69a19d3dd1d459ba40bd4ebabab729fad214c257e33a343fe8a5d3aad8&is=6a94f6ec&quality=lossless&width=384"},
  {"id": 22, "name": "2025/2026 Los Angeles Away Soccer Jersey", "team": "Los Angeles", "league": "MLS", "season": "2025/26", "category": "MLS", "price": 35, "custom": true, "new": true, "image": "https://media.discordapp.net/attachments/1542718159881109508/1543827314788270090/a304520e12e72c6a78fe82d700a2f669.png?=&ex=6a9648ba&format=webp&height=384&hm=b74a2d2ecf11a31a8b8396f96620b0924c7e9a357bc5a99b0569fd2209593bb7&is=6a94f73a&quality=lossless&width=384"},
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
      <div class="product-image"><img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='block'" /><div class="fake-shirt" style="display:none">NXTG</div></div>
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
      <div class="detail-image"><img src="${p.image}" alt="${p.name}" style="max-width:100%;max-height:420px;object-fit:contain" onerror="this.style.display='none';this.nextElementSibling.style.display='block'" /><div class="fake-shirt" style="display:none">NXTG</div></div>
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
