$(document).ready(function() {
    if($('.navigation-icon').length > 0){
        $('.navigation-icon').click(function() {
            $('header').toggleClass('toggle-navigation')
        });
    }
})