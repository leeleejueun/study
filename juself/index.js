fetch('./ju.json')
    .then(function(res){return res.json()})
    .then(function(dramadata){
        let dramaData='';
        dramaData=dramadata.image;
        const elDrama =document.querySelector('.drama .dlist');

        console.log(dramaData);
        let a='';
        dramaData.forEach(function(b,key){
            a += `<figure>
                        <img src="${b.url}">
                    </figure>`;
            
        });
        elDrama.innerHTML = a;

        const elDlist = document.querySelectorAll('.drama .dlist figure'),
        elDetail = document.querySelector('.drama .detail article');

        elDlist.forEach(function(c,key){
            c.onclick=function(){
                elDetail.innerHTML = `<figure>
                                        <img src="${dramaData[key].url}">
                                        <figcaption>
                                            <h2>${dramaData[key].title}</h2>
                                            ${dramaData[key].detail}
                                        </figcaption>
                                    </figure>`;
            }
        })
    });