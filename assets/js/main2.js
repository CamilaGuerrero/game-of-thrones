const showData2 = (EPISODES.episodes);
const containerRoot2 = document.getElementById('root2');
const temps= document.getElementById("temps");
const showMeYourData =  (showData2) => {
let result2 = ''; 
showData2.forEach(element => {
    if(element.episodeDescription === ""){   
  result2 = containerRoot2.innerHTML +=`
  <div class="card2">
  <div class="card-content2">
  <h4><b>${element.episodeTitle}</b><br></h4>
  <p>Sin Descripción</p>
  </div>
  <div class="card-body2">
    <blockquote class="blockquote mb-0">
      <p><b>Temporada</b> ${element.seasonNum}</p>
       </blockquote>
  </div>
</div>`
    }else{
    result2 = containerRoot2.innerHTML += `
    <div class="card2">
    <div class="card-content2">
    <h4><b>${element.episodeTitle}</b><br></h4>
    </div>
    <div class="card-body2">
      <blockquote class="blockquote mb-0">
        <p>${element.episodeDescription}</p>
        <p><b>Temporada</b> ${element.seasonNum}</p>
         </blockquote>
    </div>
  </div>`
}
});
return result2;
}
window.onload = showMeYourData(showData2);
