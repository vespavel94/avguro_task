$(document).ready(function(){
    $('a[href^="#"]').on('click', function(event) { //smooth anchor scroll
        event.preventDefault();
        
        var sc = $(this).attr("href").slice(1);
        var dn = ($('[name='+ sc+ ']')).offset().top;
        
        $('html, body').animate({scrollTop: dn}, 1000);
      });
})