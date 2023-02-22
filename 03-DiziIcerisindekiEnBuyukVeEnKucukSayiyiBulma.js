var sayilar=new Array(20);//[43,4,3,44,32,56,89,43,23,1,43,5,778,6,43,2];
var min,mak;
    /*diziye rasgele sayı aktarma.*/
for(var i=0;i<sayilar.length;i++){
    sayilar[i]=Math.floor(Math.random()*100);
}
/*dizideki en büyük ve en küçük sayının ilk index içinde olduğunu varsayıyoruz.*/
min = sayilar[0];
mak = sayilar[0];   

    
/*dizideki en küçük ve enbüyük sayıyı bulmak min, ve mak değerlerini karşılaştırarak en büyük ve en küçük değelerini aratıyoruz.*/
for(var i=0;i<sayilar.length;i++)
{
    /*min dizideki değerden büyükse mini dizideki ile değiştiriyoruz.*/
    if (min > sayilar[i])
    {
         min = sayilar[i];
    }
    /*mak dizideki değerden küçükse makı dizideki değer ile değiştiriyoruz.*/
    if (mak < sayilar[i])  
    {
        mak = sayilar[i]; 
    }
}
    
/*ekran çıktısı*/    
console.log("=====================================");
for(var i=0;i<sayilar.length;i++)
{
   console.log(sayilar[i]);
}
console.log("======================================");
console.log("Dizi içindeki en büyük sayı: > > > " + mak);
console.log("Dizi içindeki en büyük sayı: > > > " + min);