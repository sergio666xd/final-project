function aboutMe() {
    $('.main__content').load('./about-me.html');
    $('#aboutMe').addClass('active');
    $('#hola').removeClass('active');
    //$('.about-me').removeClass('active');
}

function hola() {
    $('.main__content').load('./habilities.html');
    $('#aboutMe').removeClass('active');
    $('#hola').addClass('active');
    //$('.about-me').removeClass('active');
}