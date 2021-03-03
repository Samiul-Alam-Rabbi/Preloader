$(document).ready(function(){
    $(window).on('load', function() {
        if($('#preloader').length) {
            $('#preloader').delay(10000).fadeOut('slow', function() {
                $(this).remove();
            });
        }
    });
});
