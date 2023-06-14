//* Definindo contagem inicial
let count = 0;

//* Seleção de valores e botões
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

//* Deixa de ser uma NodeList e passa a ser tags button no parametro (btn)
btns.forEach(function(btn) {
    //* Especifica exatamente o botão que eu cliquei
    btn.addEventListener('click', function(e) {
        //* Toda vez que eu clicar no meu botao vou salvar na minha variavel o elemento que possui
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase')) {
            count++;
        }
        else {
            count = 0;
        }

        if(count > 0) {
            value.style.color = "green";
        }
        else if (count < 0) {
            value.style.color = "red";
        }
        else {
            value.style.color = "#222";
        }
        value.textContent = count;
    })
})