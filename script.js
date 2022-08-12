//constants
const stationsList = document.querySelector('.stations');
const player = document.querySelector('.audio-player');
const controlButton = document.querySelector('.playBtn');
const currentChannel = document.querySelector('.current-channel');
const popupMessage = document.querySelector('.popup');


//Event Listeners
  document.addEventListener('DOMContentLoaded', ()=>{
    let listHTML = '';

    stationsData.forEach(listItem =>{
      listHTML += `
      <div class="station-item" id="${listItem.id}">
        <img src="${listItem.logo}">
        <label>${listItem.name}</label>
      </div>
      `;
    });

    stationsList.innerHTML = listHTML;

    console.log(controlButton);

  });
