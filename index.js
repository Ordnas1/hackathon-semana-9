// Reto 1

const caesarShift = function(char, shift, low, high) {
    let charCode = char.charCodeAt();
    if (shift >= 0) {
        for (let i = 0; i < shift; i++) {
            charCode + 1 > high ? charCode = low : charCode += 1;
        }
    } else {
        for (let i = 0 - shift; i > 0; i--) {
            charCode - 1 < low ? charCode = high : charCode -= 1;
        }
    }

    return String.fromCharCode(charCode)
}

const caesarencode = function(cypherNumber, cypherText) {
    const ASCII_UPPER_A = 65;
    const ASCII_UPPER_Z = 90;
    const ASCII_LOWER_A = 97;
    const ASCII_LOWER_Z = 122

    let resultStr = ""

    for (let i = 0; i < cypherText.length; i++) {
        if (cypherText.charCodeAt(i) >= ASCII_UPPER_A && cypherText.charCodeAt(i) <= ASCII_UPPER_Z) {
            resultStr += caesarShift(cypherText.charAt(i), cypherNumber, ASCII_UPPER_A, ASCII_UPPER_Z);
        } else if (cypherText.charCodeAt(i) >= ASCII_LOWER_A && cypherText.charCodeAt(i) <= ASCII_LOWER_Z) {
            resultStr += caesarShift(cypherText.charAt(i), cypherNumber, ASCII_LOWER_A, ASCII_LOWER_Z);
        } else {
            resultStr += cypherText.charAt(i)
        }
    }

    return resultStr
}

const caesardecode = function(cypherNumber,textDecode) {
    return caesarencode(-cypherNumber, textDecode)
}

// Reto 2

//Vars 


//Funciones
function tirarDado() {
    return Math.floor(Math.random() * 6) + 1
}

function play() {
    let apuestaRonda, dadoJugador, dadoCPU;
    let dinero = 5;
    while (dinero > 0 && dinero < 200) {
        alert(`Usted tiene ${dinero} soles`)

        do {
            apuestaRonda = Number(prompt("Favor de indicar cuanto va a apostar"))

            if (apuestaRonda > dinero || apuestaRonda == 0) {
                alert("Cantidad no válida")
            }
        } while (apuestaRonda > dinero || apuestaRonda == 0)

        do {
            dadoJugador = Number(prompt("Ingrese el número que quiere apostar"))
            
            if(dadoJugador < 1 || dadoJugador > 6) {
                alert("Apuesta no valida")
            }
        } while (dadoJugador < 1 || dadoJugador > 6) 
        dadoCPU = tirarDado()
        alert(`Resultado
        Usted ha tirado ${dadoJugador}
        El CPU ha tirado ${dadoCPU}`)

        if (dadoJugador == dadoCPU) {
            alert(`Ha ganado. Recibe ${apuestaRonda * 2} Soles`)
            dinero += apuestaRonda
        } else {
            alert(`Ha perdido ${apuestaRonda} soles`)
            dinero -= apuestaRonda

        }

        if (dinero == 0) {
            alert("Ha perdido. Mejor suerte la próxima")
        }
    }
}
    