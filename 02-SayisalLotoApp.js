let myNumber =  229329;
let gameNumber = 999999;
                

function createRandomNumber(){
   var no =  Math.floor(Math.random() * gameNumber) + 1;
   return no;
}


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