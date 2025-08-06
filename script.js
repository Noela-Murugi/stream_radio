//constants
const stationsList = document.querySelector('.stations');
const player = document.querySelector('.audio-player');
const controlButton = document.querySelector('.playBtn');
const currentChannel = document.querySelector('.current-channel');
const popupMessage = document.querySelector('.popup');

const stationsData = [
  {
    id: 1,
    name: 'Home Boys Radio',
    url : 'http://homeboyzradio-atunwadigital.streamguys1.com/homeboyzradio',
    logo: 'https://cdn.webrad.io/images/logos/radio-or-ke/hbr.png'
  },

  {
    id: 2,
    name: 'Kiss 100',
    url : 'http://kiss100fm-atunwadigital.streamguys1.com/kiss100fm',
    logo: 'https://www.kenyans.co.ke/files/styles/article_style/public/images/media/Kiss%20fm.jpg'
  },

  {
    id: 3,
    name: 'Classic 105',
    url : 'http://classic105-atunwadigital.streamguys1.com/classic105',
    logo: 'https://cdn.webrad.io/images/logos/radio-or-ke/classic-105.png'
  },

  {
    id: 4,
    name: 'Hot 96',
    url : 'https://hot96-atunwadigital.streamguys1.com/hot96',
    logo: 'https://cdn.webrad.io/images/logos/radio-or-ke/hot96.png'
  },

  {
    id: 5,
    name: 'NRG Radio',
    url : 'http://streamingv2.shoutcast.com/nrg-radio-ke',
    logo: 'https://cdn.onlineradiobox.com/img/l/9/77349.v5.png'
  },

  {
      id: 6,
      name: 'Ghetto FM',
      url : 'https://node-18.zeno.fm/t2wky7h647zuv?rj-ttl=5&rj-tok=AAABeukC3m4ArY80_tysT_zfAg',
      logo: 'https://cdn.webrad.io/images/logos/radio-or-ke/ghetto.png'
  },

  {
  id: 7,
  name: 'Radio Jambo',
  url: 'http://radiojambo-atunwadigital.streamguys1.com/radiojambo',
  logo: 'https://cdn.webrad.io/images/logos/radio-or-ke/jambo.png'
},

  {
  id: 8,
  name: 'Capital FM',
  url: 'http://capitalfm-atunwadigital.streamguys1.com/capitalfm',
  logo: 'https://cdn.webrad.io/images/logos/radio-or-ke/capital.png'
},

{
  id: 9,
  name: 'Kameme FM',
  url: 'http://kamemefm-atunwadigital.streamguys1.com/kamemefm',
  logo: 'https://cdn.webrad.io/images/logos/radio-or-ke/kameme.png'
},

{
  id: 10,
  name: 'Ramogi FM',
  url: 'http://ramogifm-atunwadigital.streamguys1.com/ramogifm',
  logo: 'https://cdn.webrad.io/images/logos/radio-or-ke/ramogi.png'
},

{
  id: 11,
  name: 'Musya FM',
  url: 'http://musyifm-atunwadigital.streamguys1.com/musyifm',
  logo: 'https://cdn.webrad.io/images/logos/radio-or-ke/musyi.png'
},

{
  id: 12,
  name: 'Mulembe FM',
  url: 'http://mulembefm-atunwadigital.streamguys1.com/mulembefm',
  logo: 'https://cdn.webrad.io/images/logos/radio-or-ke/mulembe.png'
},

{
  id: 13,
  name: 'Sulwe FM',
  url: 'http://sulwefm-atunwadigital.streamguys1.com/sulwefm',
  logo: 'https://cdn.webrad.io/images/logos/radio-or-ke/sulwe.png'
},

{
  id: 14,
  name: 'Meru FM',
  url: 'http://merufm-atunwadigital.streamguys1.com/merufm',
  logo: 'https://cdn.webrad.io/images/logos/radio-or-ke/meru-fm.png'
},

{
  id: 15,
  name: 'Nation FM',
  url: 'http://nationfm-atunwadigital.streamguys1.com/nationfm',
  logo: 'https://cdn.webrad.io/images/logos/radio-or-ke/nation.png'
}

];


//Event Listeners

  document.addEventListener('DOMContentLoaded', ()=>{
    let listHTML = '';

    // stationsData.forEach(listItem =>{
    //   listHTML += `
    //   <div class="station-item" id="${listItem.id}">
    //     <img src="${listItem.logo}">
    //     <label>${listItem.name}</label>
    //     <i class="station-play fa fa-play" data-id="${listItem.id}"></i>
    //   </div>
    //   `;
    // });


    stationsData.forEach(listItem => {
  listHTML += `
    <div class="station-item" id="${listItem.id}">
      <div class="station-thumb">
        <img src="${listItem.logo}" alt="${listItem.name}" class="station-logo" data-id="${listItem.id}">
        <i class="station-play fa fa-play" data-id="${listItem.id}"></i>
      </div>
      <label>${listItem.name}</label>
    </div>
  `;
});


    stationsList.innerHTML = listHTML;

    console.log(controlButton);

  });




//check offline status
  window.addEventListener('offline', event => {
    setTimeout(displayPopupMessage, 3000, 'It appears you lost connection');
      });

//check Online status
    window.addEventListener('online', e => {
      setTimeout(removePopupMessage, 3000);
    });

//list of stations event Listner
    stationsList.addEventListener('click',e=>{
      stationListItemCLicked(e);
    });


    //station list for phones
  stationsList.addEventListener('touchstart',e=>{
    stationListItemCLicked(e);
  });

  //Control Button EventListener
  controlButton.addEventListener('click', e =>{
    controlBtnCLicked(e);
  });
  //control button for phones
  controlButton.addEventListener('touchstart', e =>{
    controlBtnCLicked(e);
  });

    //additional eventlistener

//   stationsList.addEventListener('click', e => {
//   const clickedIcon = e.target.closest('.station-play');
//   if (!clickedIcon) return;

//   const id = parseInt(clickedIcon.dataset.id) - 1;
//   const station = stationsData[id];

//   if (station) {
//     player.src = station.url;
//     currentChannel.textContent = station.name;
//     player.setAttribute('autoplay', 'true');
//     playStream();
//   }
// });

// stationsList.addEventListener('click', e => {
//   const clicked = e.target;

//   // Check if play icon or image was clicked
//   if (clicked.classList.contains('station-play') || clicked.classList.contains('station-logo')) {
//     const id = parseInt(clicked.dataset.id) - 1;
//     const station = stationsData[id];

//     if (station) {
//       player.src = station.url;
//       currentChannel.textContent = station.name;
//       player.setAttribute('autoplay', 'true');
//       playStream();
//     }
//   }
// });












stationsList.addEventListener('click', e => {
  const playIcon = e.target.closest('.station-play');
  const logo = e.target.closest('.station-logo');
  const stationItem = e.target.closest('.station-item');

  let id = null;

  if (playIcon || logo) {
    id = parseInt((playIcon || logo).dataset.id);
  } else if (stationItem) {
    id = parseInt(stationItem.id);
  }

  if (id !== null) {
    const station = stationsData.find(st => st.id === id);
    if (station) {
      player.src = station.url;
      currentChannel.textContent = station.name;
      player.setAttribute('autoplay', 'true');
      playStream();
    }
  }
});





  //Function to initiate playing of the radio stream)

  function stationListItemCLicked(e){
    if(e.target.classList.contains('station-item')){
      const id = e.target.id-1;
      player.setAttribute('autoplay', 'true');
      player.src = stationsData[id].url;
      setCurrentChannelLabel(id);
      playStream();
    }
  }

//   function stationListItemCLicked(e) {
//   const stationItem = e.target.closest('.station-item');
//   if (!stationItem) return;

//   const id = parseInt(stationItem.id) - 1;
//   player.setAttribute('autoplay', 'true');
//   player.src = stationsData[id].url;
//   setCurrentChannelLabel(id);
//   playStream();
// }


  //change player channel name
  function setCurrentChannelLabel(id){
    currentChannel.textContent = stationsData[id].name;
  }

  function displayPopupMessage(msg){
    popupMessage.innerHTML = msg;
    if(!popupMessage.classList.contains('popup-show')){
      popupMessage.classList.add('popup-show');
    }

  }

  function removePopupMessage(){
    popupMessage.classList.remove('popup-show');
  }




  //Initiate Pause or play
  function controlBtnCLicked(e){
    if(e.target.classList.contains('fa-play')){
      playStream();
    } else if(e.target.classList.contains('fa-pause')) {
      pauseStream();
    }
    e.preventDefault();
  }

  //play stream
  function playStream(){
    player.play()
      .catch(error=>{
        displayPopupMessage('Sorry, an error occured in playing the audio');
        // setTimeout(removePopupMessage(), 3000);
        setTimeout(removePopupMessage, 3000);
        console.log(error);
      });
    controlButton.classList.remove('fa-play');
    controlButton.classList.add('fa-pause');
  }

  //pause stream
  function pauseStream(){
    player.pause();
    controlButton.classList.add('fa-play');
    controlButton.classList.remove('fa-pause');
  }

