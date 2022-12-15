
// fetch("./data.xml")
//     .then(function(res){
//         return res.text();
//     })
//     .then(function(data){
//         console.log(data);
//     })


// $.ajax({
//     url : './data1234.xml',
//     beforeSend : function(){
//         console.log('준비')
//     },
//     complete : function(){
//         console.log('완료')
//     },
//     error : function(){
//         console.log('데이터 실패')
//     },
//     success : function(data){
//         console.log('데이터 성공')
//         //$(data).find('item').eq(0).find('detail').html()
//         // let url = $(data).find('url').eq(0).html();
//         // let title = $(data).find('title').eq(0).html();
//         // let detail = $(data).find('detail').eq(0).html();

//         // console.log(url, title, detail)
        
//         //console.log(
//             //$(data).find('item').eq(1).html()
//             //$(data).find('item').length)

//         //find,eq,text,html,each

//         $(data).find('item').each(function(key,value){
//             //console.log(key,value)
//             $('body').prepend(`<img src="${$(value).find('url').text()}">`);
//         });
//     }
// });

// $('선택자').method();

// $('.about:nth-of-type(2)')
// $('.about > button').onclick;

$.ajax({
    url : './data.xml',
    beforeSend : function(){
        console.log('준비')
    },
    complete : function(){
        console.log( '완료' )
    },
    error:function(){
        console.log( '데이터 실패' )
    },
    success : function(data){
        console.log( '데이터 성공' )
        // find,eq,text,html,each

        let tag='',url,title;

        $(data).find('item').each(function(key,value){
            url = $(value).find('url').text();
            title = $(value).find('title').text();

            tag += `<figure>
                        <img src="${url}">
                        <figcaption>${title} </figcaption>
                    </figure>`;
        });   
        $('.gallery > div').html(tag);

        $('.gallery figure').click(function(){
            let key=$(this).index();

            let detail = $(data).find('item').eq(key).find('detail').html()
            alert(detail);
        });
    }
});
