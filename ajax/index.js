//index.js
fetch('./data.json')
    .then(function(res){return res.json()})
    .then(function(gallery){
        init(gallery.data)
    });

function init(data){
    const elGallery = document.querySelector('.gallery div');

    elGallery.innerHTML = `<img src=${data[0].url}>`
}