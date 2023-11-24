const player = document.getElementById('damageTakenPlayer')
const enemy = document.getElementById('damageTakenEnemy')

const turn = document.getElementById('warning')

const showDmgENEMY = document.getElementById('damageTakenEnemy')
const showDmgPLAYER = document.getElementById('damageTakenPlayer')

enHP = 100 
pHP = 100
enHPdmg = enHP
pHPdmg = pHP

function repeat(){
  restart = document.getElementById('identify')
  restart.classList.remove('hidden')
  restart.classList.add('restart')
}
function hideButton(){
  button1 = document.getElementById('button1')
  button2 = document.getElementById('button2')
  button3 = document.getElementById('button3')
  button1.classList.add('hiddenButton')
  button2.classList.add('hiddenButton')
  button3.classList.add('hiddenButton')
}
function showButton(){
  button1.classList.remove('hiddenButton')
  button2.classList.remove('hiddenButton')
  button3.classList.remove('hiddenButton')
}
function attack(){

    /*Dano do Jogador Calculado no Inimigo*/
    let attack = Math.floor(Math.random() * 50) + 10

    enemy.innerHTML = attack + ' de Dano'
    turn.innerHTML = 'Turno do Oponente'
    showDmgENEMY.classList.add('damageAnimation')

    /*Afetando a barra de vida do Inimigo*/
    let enemyHEALTH = document.getElementById("enemyHEALTH")
    
    /*Se o dano for maior que a porcentagem total, barra de vida cai para 0%*/
    if (enHPdmg <= attack) { 
        enemyHEALTH.style.width = '0%'
        turn.innerHTML = 'Você venceu!'
        hideButton()
        repeat()
        return 0;
    }
    else {
    enHPdmg -= attack
    enemyHEALTH.style.width = enHPdmg.toString() + '%'
    }

    /*Animação de Botão Sumindo e Desaparecendo*/

    hideButton()

    /*Intervalo de tempo entre sumiço de botões e causar dano*/
    if (enHPdmg > 0)
    {
      setTimeout(function() {
        showDmgENEMY.classList.remove('damageAnimation')
        enemy.innerHTML = ''
        turn.innerHTML = 'Oponente Atacou!'

        let attack = Math.floor(Math.random() * 50) + 10
        player.innerHTML = attack + ' de Dano'
        showDmgPLAYER.classList.add('damageAnimation')

        let playerHEALTH = document.getElementById('playerHEALTH')

        if (pHPdmg <= attack) { 
            playerHEALTH.style.width = '0%'
            turn.innerHTML = 'Você perdeu...'
            repeat()
            return 0;
        }
        else {
        pHPdmg -= attack
        playerHEALTH.style.width = pHPdmg.toString() + '%'
        turn.innerHTML = 'Seu Turno'
        showButton()
        }
      }, 3500);
    }
    showDmgPLAYER.classList.remove('damageAnimation')
    }
