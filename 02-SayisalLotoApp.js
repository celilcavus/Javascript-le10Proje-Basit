let myNumber =  229329; // benim belirlemiş olduğum loto numarası
let gameNumber = 999999; // lotonun maksimum alabiliceği değer
                
// sayısal değerleri random bir şekilde üretmesini sağlıyan fonksiyon(metot)
function createRandomNumber(){
   var no =  Math.floor(Math.random() * gameNumber);
   return no;
}

/*
NumberControl 90 adet rastgele loto numarası oluşturur.
NumberControl fonksiyonu belirlemiş olduğunuz loto numranızı bu 90 adet rastgele
numara ile karşılaştırır ve eğer doğru tahmin bulursanız döngüyü kırar ve ikramiyeyi kazanırsınız
ben 10 defa denedim bana çıkmadı şans oyunu işte :)
*/
function NumberControl(number){
   let i = 1;
  
   while (i <= 89) {
      var value = createRandomNumber();
      if (value == number)  {
          console.log("Şanlsınız.. Büyük İkramiyeyi Kazandınız...");
          break;
      }
      i++;
      
    console.log(i + ". Numara : ".concat(" ",value));
   }
};

console.log(NumberControl(myNumber));