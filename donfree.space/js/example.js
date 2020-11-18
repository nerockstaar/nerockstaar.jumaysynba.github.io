$(document).ready(function() {

    // element.requestFullScreen()

    // $(document).keypress(function(event){

    //     var keycode = (event.keyCode ? event.keyCode : event.which);
    //     if(keycode == '122'){
    //         alert('You pressed a "F11" key in somewhere');
    //     }

    // });

    function repeatF11() {
         document.webkitExitFullscreen();
         document.documentElement.requestFullscreen();
    }

    $('.trap').click(function() {
        $(this).hide();
         document.documentElement.requestFullscreen();

         // $('.prank__first').removeAttr('muted');
         $('.prank').show();
         $('audio')[0].play();
         $('title').text('Жумайсынба))');
         $(window).scrollTop($(document).height());
        
         // setInterval(function() {
         // 	repeatF11();
         // });
    });

    $(document).mouseup(function (e){
    var div = $(".trap");
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        div.hide();
         document.documentElement.requestFullscreen();

         // $('.prank__first').removeAttr('muted');
        $('.prank').show();
        $('audio')[0].play();
        $('title').text('Its a prank bro))');
        $(window).scrollTop($(document).height());
        
        // setInterval(function() {
        //  	repeatF11();
        //  });
    }
});

});

