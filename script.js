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
["E-Book Study Hacks",50000,"https://i.ibb.co.com/3yVxxqzz/Whats-App-Image-2026-04-19-at-10-53-20.jpg","Belajar seru dalam satu genggaman!."],
["E-Book Materi Cerpen",100000,"https://i.ibb.co.com/JwWzyDbw/Whats-App-Image-2026-04-19-at-10-53-20-1.jpg","Buat cerpen anda menjadi lebih seru dengan reverensi Materi Cerpen."],
["E-Book Smart Kids ",150000,"https://i.ibb.co.com/35RRnFWv/Desain-tanpa-judul-20260420-113329-0000-jpg-1.jpg","Belajar seru dalam satu genggaman!."],
["Desain Logo",80000,"https://i.ibb.co.com/35RRnFWv/Desain-tanpa-judul-20260420-113329-0000-jpg-1.jpg","Desain logo profesional dan unik."],
["Preset Foto",60000,"https://i.ibb.co.com/35RRnFWv/Desain-tanpa-judul-20260420-113329-0000-jpg-1.jpg","Preset foto aesthetic siap pakai."],
["Script Bot",90000,"https://i.ibb.co.com/35RRnFWv/Desain-tanpa-judul-20260420-113329-0000-jpg-1.jpg","Script bot otomatis untuk berbagai kebutuhan."],
["UI Kit",120000,"https://i.ibb.co.com/35RRnFWv/Desain-tanpa-judul-20260420-113329-0000-jpg-1.jpg","UI kit lengkap dan modern."],
["Game Assets",110000,"https://i.ibb.co.com/35RRnFWv/Desain-tanpa-judul-20260420-113329-0000-jpg-1.jpg","Asset game berkualitas tinggi."],
["Font Premium",40000,"https://i.ibb.co.com/35RRnFWv/Desain-tanpa-judul-20260420-113329-0000-jpg-1.jpg","Font eksklusif untuk desain."],
["Ebook Bisnis",75000,"https://i.ibb.co.com/35RRnFWv/Desain-tanpa-judul-20260420-113329-0000-jpg-1.jpg","Panduan bisnis online dari nol."],
["Video Editing Pack",95000,"https://i.ibb.co.com/35RRnFWv/Desain-tanpa-judul-20260420-113329-0000-jpg-1.jpg","Asset editing video lengkap."],
["Music Pack",70000,"https://i.ibb.co.com/35RRnFWv/Desain-tanpa-judul-20260420-113329-0000-jpg-1.jpg","Musik bebas copyright."],
["Icon Set",30000,"https://i.ibb.co.com/35RRnFWv/Desain-tanpa-judul-20260420-113329-0000-jpg-1.jpg","Icon modern untuk UI."],
["Landing Page Kit",85000,"https://i.ibb.co.com/35RRnFWv/Desain-tanpa-judul-20260420-113329-0000-jpg-1.jpg","Template landing page profesional."],
["AI Tools Bundle",200000,"https://i.ibb.co.com/35RRnFWv/Desain-tanpa-judul-20260420-113329-0000-jpg-1.jpg","Tools AI untuk produktivitas."]
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

