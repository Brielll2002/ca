var numero1 = Number(window.document.getElementById('n1').value)
var numero2 = Number(window.document.getElementById('n2').value)
var res = window.document.getElementById('resultado')

function somar(){
    var numero1 = Number(window.document.getElementById('n1').value)
    var numero2 = Number(window.document.getElementById('n2').value)
    var res = window.document.getElementById('resultado')

    var s = numero1+numero2
    res.innerHTML=`A soma de ${numero1} mais ${numero2} é igual ${s}`
}

function subtrair(){
    var numero1 = Number(window.document.getElementById('n1').value)
    var numero2 = Number(window.document.getElementById('n2').value)
    var res = window.document.getElementById('resultado')

    var sb = numero1-numero2
    res.innerHTML=`A subtração de ${numero1} menos ${numero2} é igual ${sb}`
}

function multiplicar(){
    var numero1 = Number(window.document.getElementById('n1').value)
    var numero2 = Number(window.document.getElementById('n2').value)
    var res = window.document.getElementById('resultado')

    var m = numero1*numero2
    res.innerHTML=`A multiplicação de ${numero1} vezes ${numero2} é igual a ${m}`
}

function dividir(){
    var numero1 = Number(window.document.getElementById('n1').value)
    var numero2 = Number(window.document.getElementById('n2').value)
    var res = window.document.getElementById('resultado')

    var d = numero1/numero2
    res.innerHTML=`A divisão de ${numero1} dividido por ${numero2} é igual a ${d}`
}