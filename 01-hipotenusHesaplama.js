let akenar = 5, // A kenar değeri
    bkenar = 4; // B kenar değeri
                    // A kenarın üssü     B kenarın üssü 
    var result = (Math.pow(akenar,2)) + (Math.pow(bkenar,2)); 
      //sonucun karekökünü alıyor
    var result1 = Math.sqrt(result);
      //ekrana sonucu yazdırma işlemi ToFixed(3) 'de sayının ondalıklı değerlerini verilen parametre kadarını alması için
    console.log(result1.toFixed(3));

    