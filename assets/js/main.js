// generación de numeros al azar
var randomNumber = Math.floor((Math.random() * 249) + 1);
console.log(randomNumber)

async function loadCountry(){
    var apiURL = await fetch('https://restcountries.com/v3.1/all')
    console.log(apiURL)
    var dataJson = await apiURL.json();
    console.log(dataJson)

    var countryFlag = dataJson[randomNumber].flags.png
    console.log(countryFlag)

    const countryFlagImg = `
    <img src="${countryFlag}">
    `

    document.getElementById("countryFlag").innerHTML = countryFlagImg
}

async function adivinarPais(){
    // https://restcountries.com/v3.1/lang/spanish solo toma 23 resultados
    var apiURL = await fetch('https://restcountries.com/v3.1/all')
    var dataJson = await apiURL.json();
    var countryName = dataJson[randomNumber].name.common

    var pais = document.getElementById("inputPais").value.toUpperCase();
    
    if(pais == `${countryName.toUpperCase()}`){
        alert("Adivinaste!")
        location.reload();
    }
    else if(pais == ""){
        alert("El campo no puede estar vacio")
    }
    else{
        alert(`Nope, perdiste era: ${countryName.toUpperCase()}`)
        location.reload();
    }

    inputPais.value ="";
}