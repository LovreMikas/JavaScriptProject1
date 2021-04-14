//STICKY NAV BAR
window.onscroll = function() {zalipi()};

var nav = document.getElementsByClassName("nav")[0];
var sticky = nav.offsetTop;

function zalipi() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky")
  } else {
    nav.classList.remove("sticky");
  }
}

//FLIPANJE KARTICA

const linkflip = document.querySelectorAll(".linkflip");

function flip() {
  this.parentElement.parentElement.parentElement.classList.toggle("flip");
  
}
linkflip.forEach((link) => link.addEventListener("click", flip));

const linkflip2 = document.querySelectorAll(".linkflip2");

function flip2() {
  this.parentElement.parentElement.classList.toggle("flip");
  
  
}
linkflip2.forEach((link2) => link2.addEventListener("click", flip2));

//STVARANJE KARTICA

class kartica{
  constructor (ime,vrime,veg,kalorije,slika){
      var kartica = document.createElement('div');
      kartica.classList.add('kartica');
      document.getElementsByClassName("sredina")[0].insertBefore(kartica, document.getElementById("dodaj"));
        //PREDNJA KARTICA
        var prednji = document.createElement('div');
        prednji.classList.add('prednji');
        kartica.append(prednji);
          /*----------------------------------------------*/
            //PREDNJA SLIKA DIV
            var slika = document.createElement('div');
            slika.classList.add('slika');
            prednji.append(slika);
    	        /*----------------------------------------------*/
                //SLIKA
                var img = document.createElement('img');
                img.setAttribute("src","burgers/512-5121429_fried-chicken-png-cnh-g-rn-gin-clipart.png");
                slika.append(img);

            //PREDNJI TEKST
            var tekst = document.createElement('div');
            tekst.classList.add('tekst');
            prednji.append(tekst);
              /*-------------------------------------------------*/
                //PREDNJI TEKST NAZIV
                var naziv = document.createElement('h3');
                naziv.classList.add('naziv');
                naziv.append(ime);
                tekst.append(naziv);
                //DIV IKONE
                var ikone = document.createElement('div');
                ikone.classList.add('ikone');
                tekst.append(ikone);
                /*--------------------------------------*/
                  //P ZA IKONE
                  var opis = document.createElement('p');
                  opis.classList.add('opis');
                  ikone.append(opis);
                  //IKONE
                  opis.innerHTML = "<i class='far fa-clock'></i>"
                  var vrimetxt = vrime + "min";
                  opis.append(vrimetxt);
                  var br = document.createElement("br");
                  opis.append(br);

                  opis.innerHTML += "<i class='fas fa-seedling'></i>"
                  var vege;
                  if(veg){
                    vege = "Vegetartian"
                  }
                  else{
                    vege = "Non Vegetarian"
                  };
                  opis.append(vege);
                  opis.append(br);

                  opis.innerHTML += "<i class='fab fa-gripfire'></i>"
                  opis.append(kalorije+"kJ");
                  opis.append(br);
            //PREDNJI BOTUN
            var div_botun = document.createElement('div');
            div_botun.classList.add('botun');
            prednji.append(div_botun);
            
            var botun = document.createElement('button');
            botun.type="submit";
            botun.innerHTML="U kosaru";
            div_botun.append(botun);
          
  }
}

var drugi = new kartica("Wagyu steak","10-15",true,1500);
var treci = new kartica("Wagyu steak","10-15",true,1500);