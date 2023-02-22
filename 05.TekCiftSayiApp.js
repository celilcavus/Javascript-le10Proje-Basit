function kontrol(nesne) {
  if (nesne % 2 == 0) {
    console.log(nesne + " sayısı çifttir");
  } else if (nesne % 2 == 1) {
   console.log(nesne + " sayısı tektir");
  } else {
   console.log(nesne + " sayısı değildir");
  }
}

kontrol(20);
