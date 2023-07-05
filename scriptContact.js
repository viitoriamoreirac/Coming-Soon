function isNotEmpty(string){
    if (string !== ""){
      return true
    } else {
      return false
    }
  }
  function validarEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true
    } else {
      return false
    }
  }

function redirect() {
    window.location.href="index.html"
}

function enviarForm() {
    var nameInputContact = document.getElementById("nameContact")
    var nameContact = nameInputContact.value;
  
    var emailInputContact = document.getElementById("emailContact") 
    var emailContact = emailInputContact.value;
  
    var textInput = document.getElementById("opinion")
    var textContact = textInput.value;
  
      if (isNotEmpty(nameContact)) {
        if (isNotEmpty(textContact)){
          if (isNotEmpty(emailContact)){
            if (validarEmail(emailContact)){
              alert("Agradecemos por sua sugestão, " + nameContact);
              emailInputContact = "";
              textInput = "";
              nameInputContact = "";
              console.log("teste")
            } else{
                alert("Por favor, insira um e-mail válido.")
                emailInputContact.value = "";
            }
          }
        } else {
          alert("Ops! Você esqueceu de deixar sua sugestão.")
        }
      } else {
        alert("Por favor, preencha com seu nome!")
      }
      
    }