$(document).ready(function(){
    function validaControlli() {
      var ristorante=$('#ristorante').val();
      if(ristorante=="None"){
          return false;
       }
      var orario=$('#orario').val();
      if(orario=="niente"){
          return false;
      }
      var persone=$('#persone').val();
      if(persone=="0"){
          return false;
      }
      var data=$('#data').val();
      if(data=="GG/MM/AAAA"){
        return false
      }
      return true;
    }
    /////////////
    function validaEmail(){
      var email= $('#email').val();
      var filtro = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if (!filtro.test(email)) {
        return false;
      }
      else{ return true; }
    }
    ////////////
    function validaTelefono(){
      var v=parseInt($('#telefono').val());
      if (isNaN(v)) {
        return false;
      }
      else{ return true; }
    }
  
    $("#formPren").submit(function(event){
      event.preventDefault();
      //PRENDERE I VARI VALORI INSERITI

      var nome = $('#nome').val();
      var cognome = $('#cognome').val();
      var telefono = parseInt($('#telefono').val());
      var email =$('#email').val();
      var data = $('#data').val();
      var ristorante = $('#ristorante').val();
      var orario = $('#orario').val();
      var n_persone = parseInt($('#persone').val());

      if(!validaControlli()){
        alert("Completare TUTTI i campi.");
      }
      
      else if(!validaTelefono()){
        alert("Inserire un numero di telefono valido.");
      }
      
      else if(!validaEmail()){
        alert("Inserire un indirizzo Email valido.");

      }
      
      else{
        var richiesta=$.ajax({/*richiesta al server*/
        type:'POST',
        url: 'http://localhost:8888/butcher-ltw/html/tavolo.php',
        dataType: 'json',
        data: {
          nome:nome, cognome:cognome, email:email, telefono:telefono, data:data, ristorante:ristorante, orario:orario, n_persone:n_persone
        }
        }); 
        
        richiesta.done(function(return_data){
          if(return_data.status){
            alert("Prenotazione effettuata correttamente!");
            $(location).attr('href', 'index.html');
          }
          else{
            alert(return_data.errore);
          }
        });

        richiesta.fail(function(){alert("Errore nella richiesta al server!"); });
      }    
   });
});
      


      
      
      

    