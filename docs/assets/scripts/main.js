$(function () {
    $("nav").delegate("button", "click", function() {
            window.location.hash = $(this).attr("id");
            return false;
    });
});
function aboutMe() {
    $('.main').removeClass('normal');
    $('#content').removeClass('normalc');
    $('.main').addClass('wait');
    $('#content').addClass('waitc');
    $('.main__content').load('./pages/about-me.html');
    setTimeout(function () {
        $('#aboutMe').addClass('active');
        $('#habilities').removeClass('active');
        $('#projects').removeClass('active');
    }, 100);
    setTimeout(function () {
        $('.main').removeClass('wait');
        $('.main').addClass('normal');
        $('#content').removeClass('waitc');
        $('#content').addClass('normalc');
    }, 500);
}
function habilities() {
    $('.main').removeClass('normal');
    $('#content').removeClass('normalc');
    $('.main').addClass('wait');
    $('#content').addClass('waitc');
    $('.main__content').load('./pages/habilities.html');
    setTimeout(function () {
        $('#aboutMe').removeClass('active');
        $('#habilities').addClass('active');
        $('#projects').removeClass('active');
    }, 100);
    setTimeout(function () {
        $('.main').removeClass('wait');
        $('.main').addClass('normal');
        $('#content').removeClass('waitc');
        $('#content').addClass('normalc');
    }, 500);
}
function projects() {
    $('.main').removeClass('normal');
    $('#content').removeClass('normalc');
    $('.main').addClass('wait');
    $('#content').addClass('waitc');
    $('.main__content').load('./pages/projects.html');
    setTimeout(function () {
        $('#aboutMe').removeClass('active');
        $('#habilities').removeClass('active');
        $('#projects').addClass('active');
    }, 100);
    setTimeout(function () {
        $('.main').removeClass('wait');
        $('.main').addClass('normal');
        $('#content').removeClass('waitc');
        $('#content').addClass('normalc');
    }, 500);
}