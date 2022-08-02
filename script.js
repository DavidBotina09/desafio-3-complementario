
let valorBoleta = 5000
let clientes = 0
let edad = 0
const funcion = {pelicula:"", hora:""}
const comida = {bebida:"",palomitas:"",comida:""}
const reservacion = [funcion]
console.log(funcion)

function cartelera(pelis){
    switch(pelis){
        case "thor":
            funcion.pelicula = "Thor"
            break
        case "telefono negro":
            funcion.pelicula = "Telefono Negro"
            break
        case "minions":
            funcion.pelicula = "Los Minions"
            break
        default:
            alert("no ingreses peliculas que no estan en cartelera")
            funcion.pelicula = 1
    }
}



do{
    do{
        funcion.pelicula = prompt("estan estas tres peliculas en cartelera 1. Thor 2. telefono negro 3. minions").toLowerCase()
        cartelera(funcion.pelicula)
        console.log(funcion.pelicula)
        funcion.hora = prompt("Hola cliente tenemos estos horarios de peliculas para usted, 6:30, 7:30, 9:30")
        switch(funcion.hora){
            case "6:30":
                funcion.hora = "6:30"
                break
            case "7:30":
                funcion.hora = "7:30"
                break
            case "9:30":
                funcion.hora = "9:30"
                break
            default:
                alert("ingresa horarios validos")
                funcion.hora = 1
        }
    }while((funcion.pelicula > 0 )||(funcion.hora >= 0))

    console.log(funcion)

    do{
        clientes = parseInt(prompt("cuantos clientes van a ver la pelicula"))
        if(isNaN(clientes)){
            alert("ingresa caracteres validos")
        }
        if(clientes > 5){
            alert("el maximo de clientes por grupo es de 5 personas")
        }
        console.log(clientes)
    }while((isNaN(clientes)) || (clientes > 5))


    do{
        for(let i = 0;i < clientes; i ++ ){
            edad = parseInt(prompt("edad de cada cliente"))
        if(isNaN(edad)){
            alert("vuelve a ingresar un caracter validos")
            break
        }
        if(edad < 17){
            alert("la edad estimada para ver las peliculas es de 17 años en adelante")
            break
        }
        console.log(edad)
    }
    }while((edad < 17) || (isNaN(edad)))
    
}while((edad < 17) || (isNaN(edad)))

alert(`su funcion de ${funcion.pelicula} a las ${funcion.hora} ha sido reservada, el total a pagar es ${valorBoleta * clientes}`)


let desicion = prompt("deseas agregar comida a tu reserva").toLowerCase
switch(desicion){
    case "si":
        comida.bebida = prompt("que bebida desea").toLowerCase()
        comida.palomitas = prompt("deseas palomitas de sal o de dulce").toLowerCase()
        comida.comida = prompt("deseas alguna comida de sal como hamburguesa, perro caliente, empanada").toLowerCase()
        break
    case "no":
        alert("gracias por verificar tu compra")
        break
}

console.log(comida)




