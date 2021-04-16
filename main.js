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
                img.setAttribute("src",slika);
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


//DODAVANJE NOVIH
var brojac = 0;
function dodavanje(){
  if (brojac <= 4 ){
      brojac++;
      class inputkartica{
        constructor (){
          var kartica = document.createElement('div');
          kartica.classList.add('kartica');
          document.getElementsByClassName("sredina")[0].insertBefore(kartica, document.getElementById("dodaj"));
            //PREDNJA KARTICA
            var forma = document.createElement("form");
            kartica.append(forma);
            var prednji = document.createElement('div');
            prednji.classList.add('prednji');
            forma.append(prednji);
              /*----------------------------------------------*/
                //PREDNJA SLIKA DIV
                var slika = document.createElement('div');
                slika.classList.add('slika');
                prednji.append(slika);
                  /*----------------------------------------------*/
                    //SLIKA
                    var i_img = document.createElement('input');//------------>
                    i_img.setAttribute("type", "text");
                    i_img.setAttribute("placeholder", "Url slike");
                    slika.append(i_img);
  
                //PREDNJI TEKST
                var tekst = document.createElement('div');
                tekst.classList.add('tekst');
                prednji.append(tekst);
                  /*-------------------------------------------------*/
                    //PREDNJI TEKST NAZIV
                    var i_naziv = document.createElement('input');//--------->
                    i_naziv.setAttribute("type", "text");
                    i_naziv.setAttribute("placeholder", "Naziv jela");
                    tekst.append(i_naziv);
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
                      var i_vrime = document.createElement("input");//------>
                      i_vrime.setAttribute("type", "text");
                      i_vrime.setAttribute("placeholder", "Vrime kuhanja(min)");
                      opis.innerHTML = "<i class='far fa-clock'></i>";
                      var br = document.createElement("br");
                      opis.append(i_vrime);
                      opis.append(br);
  
                      var i_vege = document.createElement("input");//------>
                      i_vege.setAttribute("type", "text");
                      i_vege.setAttribute("placeholder", "Vegetarijansko (da/ne)");
                      opis.innerHTML += "<i class='fas fa-seedling'></i>";
                      opis.append(i_vege);
                    
                      opis.append(br);

                      var i_kalorije = document.createElement("input");//------>
                      i_kalorije.setAttribute("type", "text");
                      i_kalorije.setAttribute("placeholder", "Kalorije(kJ)");
                      opis.innerHTML += "<span><i class='fab fa-gripfire'></i></span>"
                      opis.append(i_kalorije);
                      opis.append(br);
                //PREDNJI BOTUN
                var i_div_botun = document.createElement('div');
                i_div_botun.classList.add('botun');
                prednji.append(i_div_botun);
              
                var i_botun = document.createElement('button');
                i_botun.classList.add("potvrdi");
                i_botun.type="submit";
                i_botun.innerHTML="-";
                i_div_botun.append(i_botun);
              
                var i_botun2 = document.createElement('button');
                i_botun2.classList.add("potvrdi");
                i_botun2.type="submit";
                i_botun2.innerHTML="+";
                i_div_botun.append(i_botun2);
            
        }
      }
  var input = new inputkartica;

  }
  else{
    window.alert("Ako hoćete spremiti više jela morate platiti 5 eura - EA")
  }
}