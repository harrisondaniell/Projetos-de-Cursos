// Selecionando elementos //

//Selecionando tag main
const main = document.querySelector("main")
// Selecionando elemento root do css
const root = document.querySelector(":root")
// Selecionando o elemento input
const input = document.getElementById("input")
// Selecionando o input do resultado 
const resultInput = document.getElementById("result")

// criando array com todas as teclas que podem ser digitadas
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

// 1- Selecionando a classe de todos os botões da tela
// 2- forEach para interagir com cada classe
// 3- Dentro do forEach adicionando um evento de click
// 4- A callback vai pegar o valor do data-value de através da data set
// 5- Somar esse valor com o valor do input(input.value)
document.querySelectorAll('.charKey').forEach(function(charKeyBtn){
  charKeyBtn.addEventListener('click', function(){
    const value = charKeyBtn.dataset.value
    input.value += value
  })
})

// Seleconando o o button clear e adicionando um evento de clique para esvaziar o input.value
document.getElementById('clear').addEventListener('click', function(){
  input.value = ''
// O método focus define foco em um elemento da página
  input.focus();
})

// Selecionando o button de calcular(=)
document.getElementById('equal').addEventListener('click', calculate)

// Adicionando evento ao input. Evento keydown
input.addEventListener("keydown", function (ev) {
// é um método que evita um evento padrão no HTML, como ao clique abrir um link em outra pag
// Nesse caso evitando que qualquer caractere seja digitado
  ev.preventDefault()
// includes é um método que verifica se um valor existe em um array ou string, retorna bolean
  if (allowedKeys.includes(ev.key)) {
// propriedade key retorna o valor da tecla, ou seja, a tecla em si
    input.value += ev.key
    return
  }
  if (ev.key === 'Backspace') {
// usando o método slice para excluir o último caractere
    input.value = input.value.slice(0, -1)  
  }
  if (ev.key === 'Enter'){
// chamando função para mostrar o resultado
    calculate()  
  }
})


// Função para calcular
function calculate (){
  resultInput.value = 'ERROR';
  resultInput.classList.add('error');
// o método eval() analise a string e executa. Cuidado ao usar, pois ela executa tudo
// inclusive códigos javascripts(que podem ser maliciosos)
  const result = eval(input.value)
  resultInput.value = result
  resultInput .classList.remove('error')
}

// Selecionando o botão de clipeboard
document.getElementById('copyToClipboard').addEventListener('click', function(ev){
  const button = ev.currentTarget // this
  if (button.innerText === 'Copy'){
    button.innerText = 'Copied'
//  Adicionando classe css
    button.classList.add('success')
// navegator é uma propriedade disponivel através do windows, ela possui a prop clipboard
// o método writeText escreve um texto
    window.navigator.clipboard.writeText(result.value)
  } else {
    button.innerText = 'Copy'
    button.classList.remove('success')
  }
})


// Selecionando o botao de tema e adicionando um evento de click
document.getElementById('themeSwitcher').addEventListener('click', function(){
// acessando a classe data
  if (main.dataset.theme === 'dark'){
// Acessando os estilos do elemento root
    root.style.setProperty('--bg-color', '#f1f5f9');
    root.style.setProperty('--border-color', '#aaa');
    root.style.setProperty('--font-color', '#212529');
    root.style.setProperty('--primary-color', '#26834a');
// mudando a classe data de dark para light
    main.dataset.theme = 'light';
  } else {
    root.style.setProperty('--bg-color', '#212529');
    root.style.setProperty('--border-color', '#666');
    root.style.setProperty('--font-color', '#f1f5f9');
    root.style.setProperty('--primary-color', '#4dff91');  
// mudando a classe data de dark para light
    main.dataset.theme = 'dark'; 
  }
})

