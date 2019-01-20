 const rootBox = document.getElementById('root');
 const dataContainer = (DATA.characters);
 const printData = (dataContainer) =>{
    // const savePrint = "";
    let result ="";
dataContainer.forEach( element => {
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
    
