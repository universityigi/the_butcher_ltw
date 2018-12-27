$(document).ready(function(){
    function validaEmail(){
        var email= $('#email').val();
        var filtro = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(email == "") return false;
        else if (!filtro.test(email)) {
          return false;
        }
        else{ return true; }
      }

      $("#but").click(function(){
        if(!validaEmail()){
          alert("Inserire un indirizzo Email valido.");
          return;
        } 

        $('#modal_body').html("");

        var email = $('#email').val();

        var richiesta=$.ajax({
          type:'POST',
          url: 'http://localhost:8888/butcher-ltw/html/riepilogo.php',
          dataType: 'json',
          data: {
              email: email
          }
        }); 

        richiesta.done(function(return_data){
          
          if(return_data.length == 0) alert("Attenzione non ci sono ordini legati a questa email");
          else{
            for(var i=0; i<return_data.length; i++){
              var nome = return_data[i]['nome'];
              var totale = return_data[i]['totale'];
              var carne = return_data[i]['carne'];
              var verdure = return_data[i]['verdure'];
              var formaggi = return_data[i]['formaggi']; 
              var insalate = return_data[i]['insalate'];
              var extra = return_data[i]['extra'];
              var salse = return_data[i]['salse']; 
              
              var daInserire = "<p>" + "ORDINE n." + (i+1) + "<br>" + "💬Nome: " + nome + "<br>" + "🥩CARNE: " + carne + "<br>" +"🥦VERDURE: " + verdure + "<br>" +"🧀FORMAGGI: " + formaggi + "<br>" +"🥗INSALATE: " + insalate + "<br>" +"➕EXTRA: " + extra + "<br>" + "🥫SALSE: " + salse + "<br>" + "💰TOTALE: " + totale + "€" + "<br>" + "</p>";
              var testoPrecedente = $('#modal_body').html();
              $('#modal_body').html(testoPrecedente + daInserire);
              $('#my_modal').modal('show');
            }
          }
        });

        richiesta.fail(function(){alert("Errore nella richiesta al server!"); });  
    });
});


