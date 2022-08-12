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
    name: 'Kameme FM',
    url : 'https://stream.zenolive.com/wxn43ghqtceuv',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm94RRqfLKLytrpVx0gn8DfwbhhQ7pVxah_OUwY-HQoQ&s'
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
];


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
        setTimeout(removePopupMessage(), 3000);
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


