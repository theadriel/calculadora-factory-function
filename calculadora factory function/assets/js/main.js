// Factory function
function criaCalculadora(){
    // retorna um objeto com métodos
    return {
        // atributo que acessa o input 
        display:document.querySelector('.display'),
     
        // função que executa duas funções que tem como this calculadora 
        inicia() {
            // executa as ações de click 
            this.cliqueBotoes();
            // realiza a conta com a tecla enter
            this.pressionaEnter();
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13) {
                    this.realizaConta();
                }
            })
        },
        // realiza as contas
        realizaConta(){
            // armazena o valor do input passando como referência o this que é calculadora
            let conta = this.display.value;

            try {
                // atualizo o valor de conta para uma função que interpreta o valor de conta
                // e executa as operações matemáticas
                conta = eval(conta);

                if(!conta){
                    alert('Conta inválida');
                    return;
                }
                // caso obtiver êxito exibo no input o resultado de conta
                this.display.value = conta
            } catch (e) {
                alert('Conta inválida');
                return;
            }
        },
        // limpa o imput
        clearDisplay(){
            this.display.value = '';
        },
        
        deleteOne(){
            // apaga uma letra de cada vez do input
            this.display.value =this.display.value.slice(0, -1);
        },

        // função que executa as ações de click dos botões
        cliqueBotoes(){
            // adiciono á document um evento de click que executa a ações  de
            // apagar tudo, apagar um número de cada vez,exibe os número clicados
            document.addEventListener('click', e => {
                // seleciono o elemento clicado
                const el = e.target;
                // verifico se a classe for btn-num exibo o número clicado
                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }
                // verifica o botão clicado contém a classe é btn-clear e limpa o input
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();  
                }
                // verifica o botão clicado contém a classe  btn-del e 
                // deleta um caractere de cada vez
                if(el.classList.contains('btn-del')){
                    this.deleteOne();
                }
                // verifica o botão clicado contém a classe btn-eq e 
                // realiza as contas
                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }
            });
        },
        btnParaDisplay(valor){
            this.display.value += valor
        }
    };
}
// recebe o objeto criado
const calculadora = criaCalculadora()
// executa o método que desencadeia as ações de click(funções da calculadora) 
calculadora.inicia();