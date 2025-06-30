const botao = document.querySelector("#botao");
const mensagem = document.querySelector("#mensagem")

botao.addEventListener('click', function(){
    mensagem.textContent = "Você é o que estiver disposto a lutar para ser!"
});