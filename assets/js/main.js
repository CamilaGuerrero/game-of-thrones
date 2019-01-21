 //llamo al root :D
 const rootBox = document.getElementById('root');
 //creo una variable que va a contener la data  variable.objeto :)
 const dataContainer = (DATA.characters);
 //aca creo que la funcion que va a imprimir la información
 const printData = (dataContainer) =>{
    // const savePrint = "";
    let result ="";
    //que recoora la data y tome la info que quiero que muestre
dataContainer.forEach( element => {
    //character Name tiene el nombre xd, obvio
    if(Element.characterName !== ""){
         result = rootBox.innerHTML += `
        <div>
        <div class='card'>
        <div class='box'>
        <div class='img'>
        <img src='${element.characterImageFull}'>
        </div>
        <h2>${element.characterName}</h2>
        </div>
        </div>
        </div>`
    }  
});
 return result;
}
 window.onload = printData(dataContainer);
    
