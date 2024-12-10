
function soma(x='') {
    var l = x.lastIndexOf('+')
    var v1 = x.slice(0, l)
    var v2 = x.slice(l + 1, x.length)
    if (v1.indexOf('+') != -1) {v1 = soma(v1)}
    if (v2.indexOf('+') != -1) {v2 = soma(v2)}
    return Number(v1) + Number(v2)
}
soma('5+1')



function dividir(x='') {
    var l = x.indexOf('/')
    var v1 = x.slice(0, l)
    var v2 = x.slice(l + 1, x.length)
    if (v1.indexOf('/') != -1) {v1 = dividir(v1)}
    if (v2.indexOf('/') != -1) {v2 = dividir(v2)}
    return v1 / v2
}
dividir('15/3')



function multiplicar(x='') {
    var l = x.indexOf('*')
    var v1 = x.slice(0, l)
    var v2 = x.slice(l + 1, x.length)
    if (v1.indexOf('*') != -1) {v1 = multiplicar(v1)}
    if (v2.indexOf('*') != -1) {v2 = multiplicar(v2)}
    return v1 * v2
}
multiplicar('5*2')



function subtracão(x='') {
    var l = x.lastIndexOf('-')
    var v1 = x.slice(0, l)
    var v2 = x.slice(l + 1, x.length)
    if (v1.indexOf('-') != -1) {v1 = subtracão(v1)}
    if (v2.indexOf('-') != -1) {v2 = subtracão(v2)}
    return Number(v1) - Number(v2)
}
subtracão('7-5')



function potencia(x='') {
    if (x.indexOf('*') != -1) {
        var l = x.indexOf('*')
        var v1 = Number(x.slice(0, l))
        var v2 = Number(x.slice(l + 2, x.length))
    } else {
        var l = x.indexOf('^')
        var v1 = Number(x.slice(0, l))
        var v2 = Number(x.slice(l + 1, x.length))
    }
    
    return v1 ** v2
}
potencia('5^2')


function porce(x='') {
    if (x.indexOf('+') != -1) {
        var l = x.indexOf('+')
        var v1 = Number(x.slice(0, l))
        var v2 = Number(x.slice(l + 1, x.length - 1))
        var rp = (v2 / 100) * v1
        return v1 + rp
    } else if (x.indexOf('-') != -1) {
        var l = x.indexOf('-')
        var v1 = Number(x.slice(0, l))
        var v2 = Number(x.slice(l + 1, x.length - 1))
        var rp = (v2 / 100) * v1
        return v1 - rp
    } else if(x.indexOf('*') != -1) {
        var l = x.indexOf('*')
        var v1 = Number(x.slice(0, l))
        var v2 = Number(x.slice(l + 1, x.length - 1))
        var rp = (v2 / 100) * v1
        return rp
    } else if (x.indexOf('/') != -1) {
        var l = x.indexOf('/')
        var v1 = Number(x.slice(0, l))
        var v2 = Number(x.slice(l + 1, x.length - 1))
        var rp = (v2 / 100) * v1
        return v1 / rp
    }
}

porce('5-5%')


var re2
function calcSimple(v='') {
    
    if (v.indexOf('+') != -1) {
        re2 = soma(v)
    } else if (v.indexOf('-') != -1) {
        re2 = subtracão(v)
    } else if (v.indexOf('*') != -1) {
        re2 = multiplicar(v)
    } else if (v.indexOf('/') != -1) {
        re2 = dividir(v)
    } else if (v.indexOf('^') != -1) {
        re2 = potencia(v) }

    return re2
}


function tiraParen(t='') {
    if (t.indexOf('(') == -1) {
        return t
    } else {
        var L = t.indexOf('(')
        var L2 = t.indexOf(')')
        var v = t.slice(L + 1, L2)
        var re

        re = calculator(v)

        if (L == 0 || t[L-1] == '+' || t[L-1] == '-' || t[L-1] == '/' || t[L-1] == '*') {
            var r = t.replace(t.slice(L, L2 + 1), `${re}`)
        } else {
            var r = t.replace(t.slice(L, L2 + 1), `*${re}`)
        }

        return tiraParen(r)
    }
    
}


function calc2(x='') {

    

    if (x.length == 2 || x.indexOf('/') == -1 && x.indexOf('*') == -1 && x.indexOf('+') == -1 && x.indexOf('-') == -1 && x.indexOf('^') == -1) {
        return x

    } else {

        var re

        let temdivi = x.indexOf('/')
        let temmult = x.indexOf('*')
        let temmais = x.indexOf('+')
        let temmenos = x.indexOf('-')
        let tempote = x.indexOf('^')

        var t = x.split("")
        var tf2 = []

        function separaIndex(elemento, index) {
            if (elemento == '*' || elemento == '+' || elemento == '/' || elemento == '-' || elemento == '^') {
            tf2.push(index)
            }
          }
          t.forEach(separaIndex);

          if (tempote != -1){

            var c = 0
            while (Number(tf2[c]) <= tempote) {
                var pospo = c 
                c++
            } 
        
            var v1, v2, v3

            if (tf2.length == 1) {
                v3 = potencia(x)
                re = v3

            } else if (pospo == 0) {
                v1 = x.slice(0, tempote)
                v2 = x.slice(tempote+1, tf2[1])
                v3 = v1 ** v2
                re = x.replace(x.slice(0 , tf2[1]), v3)

            } else if (pospo > 0 && pospo <= tf2.length - 2) {
                v1 = x.slice(parseInt(tf2[pospo - 1]) + 1, tempote)
                v2 = x.slice(tempote+1, tf2[pospo + 1])
                v3 = v1 ** v2
                re = x.replace(x.slice(parseInt(tf2[pospo - 1]) + 1 , tf2[pospo + 1]), v3)

            } else if (pospo == tf2.length - 1){
                v1 = x.slice(parseInt(tf2[pospo - 1]) + 1 , tempote)
                v2 = x.slice(tempote+1, x.length + 1)
                if (v1.indexOf('/') != -1) {v1 = potencia(v1)}
                v3 = v1 ** v2
                re = x.replace(x.slice(parseInt(tf2[pospo - 1]) + 1 , x.length + 1), v3)
            }


        } else if (temdivi != -1){

            var c = 0
            while (Number(tf2[c]) <= temdivi) {
                var posd = c 
                c++
            } 
        
            var v1, v2, v3

            if (tf2.length == 1) {
                v3 = dividir(x)
                re = v3

            } else if (posd == 0) {
                v1 = x.slice(0, temdivi)
                v2 = x.slice(temdivi+1, tf2[1])
                v3 = v1 / v2
                re = x.replace(x.slice(0 , tf2[1]), v3)

            } else if (posd > 0 && posd <= tf2.length - 2) {
                v1 = x.slice(parseInt(tf2[posd - 1]) + 1, temdivi)
                v2 = x.slice(temdivi+1, tf2[posd + 1])
                v3 = v1 / v2
                re = x.replace(x.slice(parseInt(tf2[posd - 1]) + 1 , tf2[posd + 1]), v3)

            } else if (posd == tf2.length - 1){
                v1 = x.slice(parseInt(tf2[posd - 1]) + 1 , temdivi)
                v2 = x.slice(temdivi+1, x.length + 1)
                if (v1.indexOf('/') != -1) {v1 = dividir(v1)}
                v3 = v1 / v2
                re = x.replace(x.slice(parseInt(tf2[posd - 1]) + 1 , x.length + 1), v3)
            }


        } else if (temmult != -1){

            var c = 0
            do {
                var posm = c
                c++
            } while (Number(tf2[c]) == temmult)

            var v1, v2, v3

            if (tf2.length == 1) {
                v3 = multiplicar(x)
                re = v3

            } else if (posm == 0) {
                v1 = x.slice(0, temmult)
                v2 = x.slice(temmult+1, tf2[1])
                v3 = v1 * v2
                re = x.replace(x.slice(0 , tf2[1]), v3)

            } else if (posm > 0 && posm <= tf2.length - 2) {
                v1 = x.slice(parseInt(tf2[posm - 1])+1, temmult)
                v2 = x.slice(temmult+1, tf2[posm + 1])
                v3 = multiplicar(x.slice(parseInt(tf2[posm - 1])+1, tf2[posm + 1]))
                re = x.replace(x.slice(parseInt(tf2[posm - 1])+1 , tf2[posm + 1]), v3)

            } else if (posm == tf2.length - 1){
                v1 = x.slice(parseInt(tf2[posm - 1]) + 1 , temmult)
                v2 = x.slice(temmult+1, x.length + 1)
                if (v1.indexOf('*') != -1) {v1 = multiplicar(v1)}
                v3 = v1 * v2
                re = x.replace(x.slice(parseInt(tf2[posm - 1]) + 1 , x.length + 1), v3)

            }


        } else if (temmais != -1){

            var c = 0
            do {
                var posma = c
                c++
            } while (Number(tf2[c]) == temmais)
            var v1, v2, v3


            if (tf2.length == 1) {
                v3 = soma(x)
                re = v3

            } else if (posma == 0) {
                v1 = x.slice(0, temmais)
                v2 = x.slice(temmais+1, tf2[1])
                v3 = soma(x.slice(0, tf2[1]))
                re = x.replace(x.slice(0 , tf2[1]), v3)

            } else if (posma > 0 && posm < tf2.length - 2) {
                v1 = x.slice(tf2[posma - 1], temmais)
                v2 = x.slice(temmais+1, tf2[posma + 1])
                v3 = soma(tf2[posma - 1] , tf2[posma + 1])
                re = x.replace(x.slice(tf2[posma - 1] , tf2[posma + 1]), v3)

            } else if (posma == tf2.length - 1){
                v1 = x.slice(parseInt(tf2[posma - 1]) + 1 , temmais)
                v2 = x.slice(temmais+1, x.length + 1)
                v3 = soma(x.slice(parseInt(tf2[posma - 1]) + 1 , x.length + 1))
                re = x.replace(x.slice(parseInt(tf2[posma - 1]) + 1 , x.length + 1), v3)

            }


            
        } else if (temmenos != -1){

            var c = 0
    
            do {
                var posme = c
                c++
            } while (Number(tf2[c]) <= temmenos)
            var v1, v2, v3


            if (tf2.length == 1) {
                v3 = subtracão(x)
                re = v3

            } else if (posme == 0) {
                v1 = x.slice(0, temmenos)
                v2 = x.slice(temmenos+1, tf2[1])
                v3 = subtracão(x.slice(0, tf2[1]))
                re = x.replace(x.slice(0 , tf2[1]), v3)

            } else if (posme > 0 && posme <= tf2.length - 2) {
                v1 = x.slice(tf2[posme - 1], temmenos)
                v2 = x.slice(temmenos+1, tf2[posme + 1])
                v3 = subtracão(tf2[posme - 1] , tf2[posme + 1])
                re = x.replace(x.slice(tf2[posme - 1] , tf2[posme + 1]), v3)

            } else if (posme == tf2.length - 1){
                v1 = x.slice(parseInt(tf2[posme - 1]) + 1 , temmenos)
                v2 = x.slice(temmenos+1, x.length + 1)
                v3 = subtracão(x.slice(parseInt(tf2[posme - 1]) + 1 , x.length + 1))
                re = x.replace(x.slice(parseInt(tf2[posme - 1]) + 1 , x.length + 1), v3)
                

            }

        } 
        re = `${re}`
        
        
        return calc2(re)
        
    }


}


function calculator(x='') {
    
    var r = tiraParen(x)
    
    var final = calc2(r)
    return Number(final)
}



module.exports = {
    calculator: calculator,
    calc2: calc2,
    tiraParen: tiraParen,
    dividir: dividir,
    soma: soma,
    subtracão: subtracão,
    multiplicar: multiplicar,
    potencia: potencia,
    porce: porce
}




