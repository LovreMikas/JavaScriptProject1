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

//DODAVANJE U KOSARU

window.sveukupno=0

const kosara = document.querySelectorAll(".ukosaru");
function u_kosaru(event){
  var koliko=1;
  const skuhaj = event.currentTarget;
  skuhaj.style.display="none";
  var kontejner =skuhaj.parentElement;
  console.log(skuhaj.parentElement);
  //MAKNI
  var k_botun = document.createElement('button');
  k_botun.classList.add("nadodaj");
  k_botun.type="button";
  k_botun.innerHTML="-";
  skuhaj.parentElement.insertBefore(k_botun, kontejner.lastChild);
  k_botun.addEventListener("click",makni);

  //KOLICINA
  var kolicina = document.createElement("span");
  kolicina.innerHTML=koliko;
  skuhaj.parentElement.insertBefore(kolicina, kontejner.lastChild);
  kolicina.classList.add("kolicina")


  //NADODAJ
  var k_botun2 = document.createElement('button');
  k_botun2.classList.add("nadodaj");
  k_botun2.type="button";
  k_botun2.innerHTML="+";
  skuhaj.parentElement.insertBefore(k_botun2, kontejner.lastChild);
  k_botun2.addEventListener("click",nadodaj);

  function nadodaj(){
    koliko++;
    kolicina.innerHTML=koliko;
    sveukupno++;

  }
  
  function makni(){
    koliko--;
    kolicina.innerHTML=koliko;
    sveukupno--;    
    if(koliko==0){
      skuhaj.style.display="inline-block";
      k_botun.style.display="none";
      k_botun2.style.display="none";
      kolicina.style.display="none";
    }
  }
  
}

kosara.forEach((kosaru) => kosaru.addEventListener("click",u_kosaru));


//DODAVANJE NOVIH
window.ogranicenje = 0;
function dodavanje(){
  if (ogranicenje <= 4 ){
      ogranicenje++;
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
                    window.i_img = document.createElement('input');//------------>
                    i_img.setAttribute("type", "text");
                    i_img.setAttribute("placeholder", "Url slike");
                    slika.append(i_img);
  
                //PREDNJI TEKST
                var tekst = document.createElement('div');
                tekst.classList.add('tekst');
                prednji.append(tekst);
                  /*-------------------------------------------------*/
                    //PREDNJI TEKST NAZIV
                    window.i_naziv = document.createElement('input');//--------->
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
                      window.i_vrime = document.createElement("input");//------>
                      i_vrime.setAttribute("type", "text");
                      i_vrime.setAttribute("placeholder", "Vrime kuhanja(min)");
                      opis.innerHTML = "<i class='far fa-clock'></i>";
                      var br = document.createElement("br");
                      opis.append(i_vrime);
                      opis.append(br);
  
                      window.i_vege = document.createElement("input");//------>
                      i_vege.setAttribute("type", "text");
                      i_vege.setAttribute("placeholder", "Vegetarijansko (da/ne)");
                      opis.innerHTML += "<i class='fas fa-seedling'></i>";
                      opis.append(i_vege);
                    
                      opis.append(br);

                      window.i_kalorije = document.createElement("input");//------>
                      i_kalorije.setAttribute("type", "text");
                      i_kalorije.setAttribute("placeholder", "Kalorije(kJ)");
                      opis.innerHTML += "<span><i class='fab fa-gripfire'></i></span>"
                      opis.append(i_kalorije);
                      opis.append(br);
                //PREDNJI BOTUN
                var i_div_botun = document.createElement('div');
                i_div_botun.classList.add('botun');
                prednji.append(i_div_botun);
              
                //IZBRISI
                var i_botun = document.createElement('button');
                i_botun.classList.add("potvrdi");
                i_botun.type="button";
                i_botun.innerHTML="Odbaci";
                i_div_botun.append(i_botun);
                this.izbrisi = this.izbrisi.bind(this);
                i_botun.addEventListener("click",this.izbrisi);
              
                //POTVRDI
                var i_botun2 = document.createElement('button');
                i_botun2.classList.add("potvrdi");
                i_botun2.type="button";
                i_botun2.innerHTML="Potvrdi";
                i_div_botun.append(i_botun2);
                this.potvrdi = this.potvrdi.bind(this);
                i_botun2.addEventListener("click",this.potvrdi);

                

            
        }
        izbrisi(event){
          var odabrani = event.currentTarget;
          odabrani.parentElement.parentElement.parentElement.parentElement.style.display="none";
          ogranicenje--;
        }
        potvrdi(event){
          //STVARANJE KARTICA
          console.log("ajboaj2");
          var v_naziv=i_naziv.value;
          var v_vrime=i_vrime.value;
          var v_vege=i_vege.value;
          var v_kalorije=i_kalorije.value;
          var v_img=i_img.value;
          class kartica{
            constructor (ime,vrime,veg,kalorije,foto){
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
                          img.setAttribute("src",foto);
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
                            if(veg=="da"){
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

                      var odabrani = event.currentTarget;
                      odabrani.parentElement.parentElement.parentElement.parentElement.parentElement.replaceChild(kartica,odabrani.parentElement.parentElement.parentElement.parentElement);
            }
          
          }
          var nadodan = new kartica(v_naziv,v_vrime,v_vege,v_kalorije,v_img);
          
        }

      }
    var input = new inputkartica();

  }
  else{
    window.alert("Ako hoćete spremiti više jela morate platiti 5 eura - EA")
  }
}