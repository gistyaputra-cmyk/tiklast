let selectedProduct="";

function showSection(id){
document.getElementById("about").style.display="none";
document.getElementById("market").style.display="none";
document.getElementById(id).style.display="block";
}

function logout(){
window.location.href="index.html";
}

function goJual(){
window.location.href="jual.html";
}

let products=[
["SMART-",50000,"","https://i0.wp.com/anakstartup.id/wp-content/uploads/2024/09/10-Produk-Digital-yang-Berpotensi-Menghasilkan-Ratusan-Juta-Rupiah-Setiap-Bulannya.jpg?fit=1485%2C909&ssl=1","Belajar seru dalam satu genggaman!."],
["Template Website",100000,"https://blog.verihubs.com/storage/2022/08/produk-digital.jpg","Template siap pakai untuk berbagai kebutuhan."],
["Aplikasi Kasir",150000,"https://blog.verihubs.com/storage/2022/08/produk-digital.jpg","Aplikasi kasir modern untuk bisnis kecil."],
["Desain Logo",80000,"https://blog.verihubs.com/storage/2022/08/produk-digital.jpg","Desain logo profesional dan unik."],
["Preset Foto",60000,"https://blog.verihubs.com/storage/2022/08/produk-digital.jpg","Preset foto aesthetic siap pakai."],
["Script Bot",90000,"https://blog.verihubs.com/storage/2022/08/produk-digital.jpg","Script bot otomatis untuk berbagai kebutuhan."],
["UI Kit",120000,"https://blog.verihubs.com/storage/2022/08/produk-digital.jpg","UI kit lengkap dan modern."],
["Game Assets",110000,"https://blog.verihubs.com/storage/2022/08/produk-digital.jpg","Asset game berkualitas tinggi."],
["Font Premium",40000,"https://blog.verihubs.com/storage/2022/08/produk-digital.jpg","Font eksklusif untuk desain."],
["Ebook Bisnis",75000,"https://blog.verihubs.com/storage/2022/08/produk-digital.jpg","Panduan bisnis online dari nol."],
["Video Editing Pack",95000,"https://blog.verihubs.com/storage/2022/08/produk-digital.jpg","Asset editing video lengkap."],
["Music Pack",70000,"https://blog.verihubs.com/storage/2022/08/produk-digital.jpg","Musik bebas copyright."],
["Icon Set",30000,"https://blog.verihubs.com/storage/2022/08/produk-digital.jpg","Icon modern untuk UI."],
["Landing Page Kit",85000,"https://blog.verihubs.com/storage/2022/08/produk-digital.jpg","Template landing page profesional."],
["AI Tools Bundle",200000,"https://blog.verihubs.com/storage/2022/08/produk-digital.jpg","Tools AI untuk produktivitas."]
];

let list=document.getElementById("productList");

if(list){
products.forEach(p=>{
let div=document.createElement("div");
div.className="product";

div.innerHTML=`
<img src="${p[2]}">
<p>${p[0]}</p>
<small>Rp${p[1]}</small>
`;

div.onclick=function(){showProduct(p[0],p[1],p[2],p[3]);};
list.appendChild(div);
});
}

function showProduct(n,p,img,desc){
selectedProduct=n;

document.getElementById("popup").style.display="flex";
document.getElementById("productName").innerText=n;
document.getElementById("price").innerText="Rp"+p;
document.getElementById("desc").innerText=desc;
document.getElementById("productImage").src=img;
}

function closePopup(){
document.getElementById("popup").style.display="none";
}

function beli(){
window.open("https://wa.me/6285708829924?text=Saya ingin membeli "+selectedProduct);
}

