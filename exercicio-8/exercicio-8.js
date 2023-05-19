
//<<<<<< exemplo em aula  >>>>>>>
// function alertFunction(){
//     alert('click para salvar o planeta ')
// }

// function displayTime(){
//     let date = new Date();
//     let time = date.toLocaleTimeString();
//     document.getElementById('resultado').textContent = time;
// }

// const createClock = setInterval(displayTime, 1000);




function displayTime() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    document.getElementById('clock').textContent = time;
  }
  
  let intervalId;
  
  function startInterval() {
    clearInterval(intervalId); // Limpar intervalo anterior, se existir
    displayTime(); // Exibir a hora imediatamente
    intervalId = setInterval(displayTime, 1000); // Exibir a hora a cada segundo
  }
  
  function stopInterval() {
    clearInterval(intervalId);
    document.getElementById('clock').textContent = "Relógio parado";
  }
  
  startInterval(); // Iniciar o relógio ao carregar a página
  