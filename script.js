const countdownTimer = () => {
    const targetDate = new Date("July 31, 2023 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;
  
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  };
  
  setInterval(countdownTimer, 1000);

  
function cadastrarEmail() {
    var email = document.getElementById("email").value;
    if (email !== "") {
      alert("E-mail cadastrado!");
      console.log("teste")
    }
  }