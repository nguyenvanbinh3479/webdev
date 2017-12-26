console.log("Welcome to WebDev");

jQuery(document).ready(function($){
    $(".back").click(function(){
        $('body,html').animate({
            scrollTop:0
        },'700')
    })
});

// if ($('.back').length) {
//     var scrollTrigger = 100, // px
//         backToTop = function () {
//             var scrollTop = $(window).scrollTop();
//             if (scrollTop > scrollTrigger) {
//                 $('.back').addClass('show');
//             } else {
//                 $('.back').removeClass('show');
//             }
//         };
//     backToTop();
//     $(window).on('scroll', function () {
//         backToTop();
//     });
//     $('.back').on('click', function (e) {
//         e.preventDefault();
//         $('html,body').animate({
//             scrollTop: 0
//         }, 700);
//     });
// }

function opencalenda(evt, calendaName){
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for(i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for(i = 0; i < tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(calendaName).style.display = "block";
    evt.currentTarget.className += " active";
}

$(document).ready(function(){
    $(".click1").click(function(){
        $(".hind").slideToggle();
    });

    $(".cmn").click(function(){
        $(".hind").slideToggle("close");
    });

    $(".click").click(function(){
        $(".hind1").slideToggle();
    });

    $(".cmn1").click(function(){
        $(".hind1").slideToggle("close");
    });

});