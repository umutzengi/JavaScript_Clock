// ilk baştan sonradan oluşturulacak iki DOM nesnesiyle de querySelector kullanarak bağlantı sağlıyoruz.
let myName = document.querySelector("#myName");
let myClock = document.querySelector("#myClock");

isim = prompt("Adınızı Yazınız :"); //isim kısmını kullanıcıdan alacağımız için prompt kullandık.

  myName.innerHTML = isim; //innerHTML kullanarak kullanıcıdan alınan ismin html kısmında ilişkili olduğu id bölümüne yazılması sağlandı.


function showTime() { //Saat ve tarih için fonksiyon tanımlandı.
  let d = new Date(); // Date constructor ile bundan sonra gelen kısmın tarih olacağı belirtildi.
  let h = d.getHours(); // getHours ile güncel yerel saat bilgisi alındı. (number)
  let m = d.getMinutes(); // getMinutes ile güncel yerel dakika bilgisi alındı. (number)
  let s = d.getSeconds(); // getSeconds ile güncel yerel saniye bilgisi alındı. (number)
  let day = d.getDay(); // getDay ile haftanın hangi günü olduğu bilgisi number olarak alındı.

  /*getDay ile alınan haftanın hangi günü olduğu bilgisi number veri tipinde 
  olduğundan bunu string veriye dönüştürebilmek için if-else kullanıldı. Her bir gün bir sayıya eşitlendi. */
  if (day === 1) { 
    day = "Pazartesi";
  } else if (day === 2) {
    day = "Salı";
  } else if (day === 3) {
    day = "Çarşamba";
  } else if (day === 4) {
    day = "Perşembe";
  } else if (day === 5) {
    day = "Cuma";
  } else if (day === 6) {
    day = "Cumartesi";
  } else if (day === 7) {
    day = "Pazar";
  }
  setTimeout(showTime, 1000); //fonksiyonun saniyede 1 yenilenmesi sağlanarak saniye akışı sağlanmış oldu. 1000 milisaniye = 1 saniye

  /*En sonunda da saatin düzgün 0 lı formatta gözükebilmesi için innerHTML e yazdırırken saat dakika ve saniyenin başına sıfır koyuldu.
  Fakat sadece sıfır koyulmasıyla 2 haneli sayılarında başına sıfır koyulacağı ve saat 3 haneli hale geleceğinden substring 
  komutu ile bulunduğu yerden itibaren geriye doğru sadece 2 karakterin alınması sağlandı. Böylece saat bildiğimiz 24 saat formatında 
  gösterilebildi.*/
  myClock.innerHTML = `${("0"+h).substr(-2)}:${("0"+m).substr(-2)}:${("0"+s).substr(-2)} ${day}`; 
}

showTime();