var durum = "";
var vize = 40;
var final = 60;

var vizenot = Number(vize * 0.4);
var finalnot = Number(final * 0.6);

var ort = vizenot + finalnot;

if(ort <= 49){
   console.log("Kaldın ortalaman".concat(": ",ort));
}
else if(ort >= 50){
   console.log("geçtin ortalaman".concat(": ",ort));
}