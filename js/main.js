$(document).ready(function () {
    $(".loading").hide();
    getAchives();
    gethitokoto();
});

$('.menu a').click(function () {
    target = $(this).attr('goto');
    switchTo(target);
});

function switchTo(target) {
    $('.right section').each(function () {
        $(this).removeClass('active');
    });
    $(target).addClass('active');
}
 var str = '<br><br><br>"<b>一个从前未有的菜鸡，一个普通的高中生"</b><br><br> Nothing is hard in this world if you dare to scale the heights <br><a href="https://imrt.top/about-me" target="_blank">...</a>';
   var i = 0;
   function typing(){
    var divTyping = document.getElementById('divTyping');
    if (i <= str.length) {
     divTyping.innerHTML = str.slice(0, i++) + '_';
     setTimeout('typing()', 40);
    }
    else{
     divTyping.innerHTML = str;
    }
   }
   typing();
