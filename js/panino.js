function myFunction1(){
    var checkBox1 = document.getElementById("myCheck1");
    var checkBox2 = document.getElementById("myCheck2");
    var checkBox3 = document.getElementById("myCheck3");
    var checkBox4 = document.getElementById("myCheck4");
    if (checkBox1.checked == true){
        checkBox2.checked = false;
        checkBox3.checked = false;
        checkBox4.checked = false;
        return;
    }
}

function myFunction2(){
    var checkBox1 = document.getElementById("myCheck1");
    var checkBox2 = document.getElementById("myCheck2");
    var checkBox3 = document.getElementById("myCheck3");
    var checkBox4 = document.getElementById("myCheck4");
    if (checkBox2.checked == true){
        checkBox1.checked = false;
        checkBox3.checked = false;
        checkBox4.checked = false;
        return;
    }
}

function myFunction3(){
    var checkBox1 = document.getElementById("myCheck1");
    var checkBox2 = document.getElementById("myCheck2");
    var checkBox3 = document.getElementById("myCheck3");
    var checkBox4 = document.getElementById("myCheck4");
    if (checkBox3.checked == true){
        checkBox2.checked = false;
        checkBox1.checked = false;
        checkBox4.checked = false;
        return;
    }
}

function myFunction4(){
    var checkBox1 = document.getElementById("myCheck1");
    var checkBox2 = document.getElementById("myCheck2");
    var checkBox3 = document.getElementById("myCheck3");
    var checkBox4 = document.getElementById("myCheck4");
    if (checkBox4.checked == true) {
        checkBox2.checked = false;
        checkBox3.checked = false;
        checkBox1.checked = false;
        return;
    }
}

function validaEmail(){
    var email= $('#email').val();
    var filtro = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!filtro.test(email)) {
      return false;
    }
    else{ return true; }
  }

function validaNome(){
    var tmp=$('#nome').val();
    if(tmp==""){ return false;}
    else{ return true; }
    
}

function validaRistorante(){
    var tmp=$('#ristorante').val();
    if(tmp=="None"){ return false;}
    else{ return true; }
    
}

function myFunction_finale(){
    var btn = document.getElementById("componi_but");
    var final_check = document.getElementById("check_finale");
    if (final_check.checked == true) {
      btn.style.visibility = "visible";
    }
    else {
      btn.style.visibility = "hidden";
    }
  return;
}

function resoconto(){ 
    var pollo = document.getElementById("myCheck_pollo");
    var manzo = document.getElementById("myCheck_manzo");
    var maiale = document.getElementById("myCheck_maiale");
    var nome = document.getElementById("nome");
    var totale = 0;
    var carne="";
    var verdure="";
    var formaggi="";
    var insalate="";
    var extra="";
    var salse="";
    var checkBox1 = document.getElementById("myCheck1");
    var checkBox2 = document.getElementById("myCheck2");
    var checkBox3 = document.getElementById("myCheck3");
    var checkBox4 = document.getElementById("myCheck4");

    if(pollo.checked == false && manzo.checked == false && maiale.checked == false ){
        alert("Inserisci almeno una tipologia di carne");
        return;
    }
    ///Checked carne///
    if (pollo.checked == true && carne=="") {carne+="Pollo";}
    else if(pollo.checked == true && carne!=""){carne+=", Pollo";}

    if (manzo.checked == true && carne=="") {carne+="Manzo";}
    else if(manzo.checked == true && carne!=""){carne+=", Manzo";}

    if (maiale.checked == true && carne=="") {carne+="Maiale"}
    else if(maiale.checked == true && carne!=""){carne+=", Maiale";}

    if(checkBox1.checked == false && checkBox2.checked == false && checkBox3.checked == false && checkBox4.checked == false ){
        alert("Inserisci un peso per la carne");
        return;
    }

    if (checkBox1.checked == true) {
        totale += 6;
    }
    else if (checkBox2.checked == true) {
        totale += 8;
    }
    else if (checkBox3.checked == true) {
        totale += 10;
    }
    else if (checkBox4.checked == true) {
        totale += 14;
    } 

    ///Controllo verdure///
    for(i=1; i<6; i++){
        var elemento=document.getElementById("verdura"+i);
        if(verdure=="" && elemento.checked==true){
            verdure+=elemento.value;
        }
        else if(verdure!="" && elemento.checked==true){
            verdure+=", " + elemento.value;
        }
    }

    ///Controllo formaggi///
    for(i=1; i<6; i++){
        var elemento=document.getElementById("formaggio"+i);
        if(formaggi=="" && elemento.checked==true){
            formaggi+=elemento.value;
        }
        else if(formaggi!="" && elemento.checked==true){
            formaggi+=", " + elemento.value;
        }
    }

    ///Controllo insalate///
    for(i=1; i<6; i++){
        var elemento=document.getElementById("insalata"+i);
        if(insalate=="" && elemento.checked==true){
            insalate+=elemento.value;
        }
        else if(insalate!="" && elemento.checked==true){
            insalate+=", " + elemento.value;
        }
    }

    ///Controllo extra///
    for(i=1; i<6; i++){
        var elemento=document.getElementById("extra"+i);
        if(extra=="" && elemento.checked==true){
            extra+=elemento.value;
        }
        else if(extra!="" && elemento.checked==true){
            extra+=", " + elemento.value;
        }
    }

    ///Controllo salse///
    for(i=1; i<6; i++){
        var elemento=document.getElementById("salsa"+i);
        if(salse=="" && elemento.checked==true){
            salse+=elemento.value;
        }
        else if(salse!="" && elemento.checked==true){
            salse+=", " + elemento.value;
        }
    }

    if(!validaNome() && !validaEmail() && !validaRistorante()) {
        alert("Compilare il campo Nome, Ristorante ed inserire un indirizzo Email valido.");
        return;
    }

    if(!validaNome()){
        alert("Compilare il campo NOME.");
        return;
    }

    if(!validaEmail()){
        alert("Inserire un indirizzo Email valido.");
        return;
    }

    if (confirm("💰TOTALE:  " + totale + " €\n" + 
            "🥩CARNE:  "+ carne + "\n" +
            "🥦VERDURE:  "+ verdure + "\n" +
            "🧀FORMAGGI:  "+ formaggi + "\n" +
            "🥗INSALATE:  "+ insalate + "\n" +
            "➕EXTRA:  "+ extra + "\n" +
            "🥫SALSE:  "+ salse)) {

                var nomeDB = nome.value;
                var emailDB = email.value;
                var totaleDB = totale;
                var carneDB = carne;
                var verdureDB = verdure;
                var formaggiDB = formaggi;
                var insalateDB = insalate;
                var extraDB = extra;
                var salseDB = salse;
                
                var richiesta=$.ajax({
                    type:'POST',
                    url: 'http://localhost:8888/butcher-ltw/html/ordine.php',
                    dataType: 'json',
                    data: {
                        nome:nomeDB, email:emailDB, totale:totaleDB, carne:carneDB, verdure:verdureDB, formaggi:formaggiDB, insalate:insalateDB, extra:extraDB, salse:salseDB
                    }
                }); 
                richiesta.done(function(return_data){
                    if(return_data.status){
                    $(location).attr('href', 'finale.html');
                }
                else{
                    alert(return_data.errore);
                }
                });
                richiesta.fail(function(){alert("Errore nella richiesta al server!"); });  
        }
    else{
        return;
    }
}




