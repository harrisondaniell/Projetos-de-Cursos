let player1 = 'X';
let player2 = 'O';
const t1 = document.getElementById('t1').addEventListener('click', function(){
  // this.innerText = 'X'
})

const celulas = document.querySelectorAll('.célula');
celulas.forEach(function(celula){
  celula.addEventListener('click', function(){
    if(celula.textContent !== ''){
      return
    }

    celula.textContent = player1;

    let temp = player1
    player1 = player2
    player2 = temp
  })
})