//json
fetch('../resource/data.json')
.then(function(res) {return res.json()})
.then(function(abc) {
  init(abc.data)
})

//로컬스트로지 값 받오는 변수
let countryKey = localStorage.getItem('num');

//구글 맵
let countryGps = [
  {
    "country": "brazil",
    "url" : { lat: -14.142426 ,lng: -53.104981 },
  },
  {
    "country": "canada",
    "url" : { lat: 56.00000 ,lng: -96.00000 },
  },
  {
    "country": "switzerland",
    "url" : { lat: 46.584747 ,lng: 8.132716 },
  },
  {
    "country": "italy",
    "url" : { lat: 41.173286 ,lng: 12.342500 },
  },
  {
    "country": "iceland",
    "url" : { lat: 64.950143 ,lng: -18.615519 },
  },
  {
    "country": "turkey",
    "url" : { lat: 38.572643 ,lng: 35.142667 },
  },
  {
    "country": " vietnam",
    "url" : { lat: 15.541102 ,lng: 105.482409 }
  }
]
function initMap() {
  var map = new google.maps.Map(
    document.querySelector('.maps'), {
      zoom: 5,
      center: countryGps[countryKey].url
    }
  );
}
//큰 제목
function init (a) {
  window.addEventListener('load',()=>{
    const h1El = document.querySelector('.text > h1');
    const elTextsub = document.querySelector('.text-sub');
    const placeImg = document.querySelectorAll('.place-first');

    h1El.innerHTML = `<h1>${a[countryKey].country_ko}</h1>`
    elTextsub.textContent = a[countryKey].country_en;

    for(i = 0; i < placeImg.length; i++) {
      placeImg[i].innerHTML = `<div class="img-container"><img src="${a[countryKey].place[i].url}"></div>
                              <div class="place-text">
                                <span>
                                  <h2>${a[countryKey].place[i].title}</h2>
                                </span>
                                <span>
                                  <p>${a[countryKey].place[i].detail}</p>
                                </span>
                                <span>
                                  <a href="#"><p>더보기</p></a>
                                </span>
                                </div>
                              </div>`
    }
  })
}

