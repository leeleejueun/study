// let css = `
// <style>
//     main{
//         opacity:0;
//         transition:1s;
//     }
//     .active{
//         opacity:1;
//     }
// </style>`;
// $('body').append(css)


function pageLoad(pageUrl,i){

    $('main').removeClass('active');
    
    setTimeout(function(){
        $('main').load(pageUrl,function(){
            $(this).addClass('active');
        })
    },500)
//addClass(), removeClass(), toggleClass(), hasClass()==contains

    // $('header a')
    // .css('color','blue')
    // .eq(i)
    // .css('color','red');
    $('header a')
    .removeClass('on')
    .eq(i)
    .addClass('on');
}


$('header a').on('click',function(e){
    e.preventDefault();
    let url = $(this).attr('href');
    //let url = this.getAttribute('href');  ->바닐라?
    let idx = $(this).index();
    window.history.pushState({'page':idx,'url':url},'test');    
    pageLoad(url,idx);
});

$('header a:first').trigger('click');
//pageLoad('main.html',0);
//window.history.pushState({'page':0,'url':'main.html'},'test');

$(window).on('popstate',function(){
    let idx = history.state.page;
    let url = history.state.url;

    console.log(idx);
    pageLoad(url,idx);
})

/*
[비동기 방식]
Ajax(load, fetch.$.ajax)
웹서버에 페이지를 요청(request)-> 웹서버에서 페이지 받는다(response)

click, setTimeout, setInterval

[동기]
브라우저가 문서의 순서에 따라서 실행하는 방식
*/

setTimeout(()=>{console.log('a')});

console.log('b')
console.log('c')