let res = document.getElementById("resultado")
let rodada = 1

function jogar() {
    proximaRodada();
}

function recomecar(){
    rodada = 1
    jogar()
}

function proximaRodada(){
        if(rodada >= 4){ 
            res.innerHTML = "Você venceu!! Parabensss!!"
            let reiniciar = document.createElement("input")
            reiniciar.type = "button"
            reiniciar.value = "Reiniciar"
            res.appendChild(reiniciar)
            reiniciar.onclick = function(){
                recomecar()
            }
            return
        }; 


        res.innerHTML = `Nível ${rodada}, escolha um vidro(1, 2 ou 3):`

        let firstInput = document.createElement("input")
        firstInput.type = "number"

        let ok = document.createElement("input")
        ok.type = "button"
        ok.value = "Ok"

        res.appendChild(firstInput)
        res.appendChild(ok)
        firstInput.focus()

        let resultado = document.createElement("p")
        res.appendChild(resultado)
        
        ok.onclick = function(){
            let valor = Number(firstInput.value)
        let pisoQuebrado = Math.floor(Math.random() * 3) + 1
        
        if(valor <1 || valor > 3 || isNaN(valor)){
            window.alert("[ERRO] Número não digitado ou valor inválido")
            return;
        }if( valor == pisoQuebrado){
            resultado.innerHTML = "Vidro quebrou! Acabou o jogo pra você"
            let reiniciar = document.createElement("input")
            reiniciar.type = "button"
            reiniciar.value = "Reiniciar"
            res.appendChild(reiniciar)
            reiniciar.onclick = function(){
                recomecar()
            }
        }
        else{
            resultado.innerHTML = `Você passou! O piso quebrado estava na ponte ${pisoQuebrado}`
            rodada += 1

            setTimeout(proximaRodada, 1000)
        }
    
    ok.disabled = true;
    }
}