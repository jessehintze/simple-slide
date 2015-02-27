var intervalReset;

$(document).ready(function(){
    intervalReset = window.setInterval("rotateImages()", 4000);
    clickRotate();
});
function clickRotate(){

    $('ul.control-nav-wrapper li').click(function() {

        var i = $('ul.control-nav-wrapper li').index(this);

        showImage(i);
    });
}
function rotateImages() {

    var oCurPhoto = $('#slideshow div.current');
    var oNxtPhoto = oCurPhoto.next();

    if (oNxtPhoto.length == 0)
        oNxtPhoto = $('#slideshow div:first');

    oCurPhoto.removeClass('current').addClass('previous');
    oNxtPhoto.css({opacity:0.0}).addClass('current').animate({opacity:1.0}, 200,
        function() {
            oCurPhoto.removeClass('previous');
        });
        //remove the active class from all of the nav bubbles
        $( "ul.control-nav-wrapper li" ).each(function(){
            $(this).removeClass("active");
        });
        //select the nav bubble that corresponds to the same index
        var i = $('#slideshow div.current').index() ;

        //add the active class to it
        $('ul.control-nav-wrapper li').eq(i - 1).addClass('active');

}

function showImage(index){

    //cancel the current rotation
    window.clearInterval(intervalReset);

    var oCurPhoto = $('#slideshow div.current');

    //+2 to account for the wrapper
    var oNxtPhoto = $('#slideshow div').eq(index);

    if(oNxtPhoto.hasClass('current')){
        return;
    }

    oCurPhoto.removeClass('current').addClass('previous');
    oNxtPhoto.css({opacity:0.0}).addClass('current').animate({opacity:1.0}, 200,
        function() {
            oCurPhoto.removeClass('previous');
        });

    //remove the active class from all of the nav bubbles
//    $('ul.control-nav-wrapper li').each().removeClass('active');
    $( "ul.control-nav-wrapper li" ).each(function(){
            $(this).removeClass("active");
        });
    //select the nav bubble that corresponds to the same index
    var i = index;

    //add the active class to it
    $('ul.control-nav-wrapper li').eq(i).addClass('active');

    //restart the timer
    intervalReset = window.setInterval("rotateImages()", 8000);
}
