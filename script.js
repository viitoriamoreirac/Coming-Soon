const countdown = () => {
    const finalDate = new Date("November 30, 2023 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = finalDate - now;
  
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  };
  
  setInterval(countdown, 1000);


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

function cadastrarEmail() {
  var emailInput = document.getElementById("email") 
  var email = emailInput.value;
    if (isNotEmpty(email)) {
      if (validarEmail(email)){
      alert("E-mail cadastrado!");
      emailInput.value = "";
      console.log("teste")
      } else{
        alert("Por favor, insira um e-mail válido.")
        emailInput.value = "";
      }
    }
  }
