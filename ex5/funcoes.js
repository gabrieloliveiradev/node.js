function soma (n1, n2){
    res = n1 + n2
    return res
}

function subtracao (n1, n2) {
    res = n1 - n2
    return res
}

function mult (n1,n2){
    return n1*n2
}

function divisao (n1,n2){
    return n1/n2
}

module.exports = {
    soma, subtracao, mult, divisao
}