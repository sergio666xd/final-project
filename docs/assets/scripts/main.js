function aboutMe() {
    $('.main__content').load('./pages/about-me.html');
    $('#aboutMe').addClass('active');
    $('#habilities').removeClass('active');
    $('#projects').removeClass('active');
}

function habilities() {
    $('.main__content').load('./pages/habilities.html');
    $('#aboutMe').removeClass('active');
    $('#habilities').addClass('active');
    $('#projects').removeClass('active');
}
function projects() {
    $('.main__content').load('./pages/projects.html');
    $('#aboutMe').removeClass('active');
    $('#habilities').removeClass('active');
    $('#projects').addClass('active');
}

const a=100;

for (let i = 0; i < a.length; i++) {
    console.log('.pi' + (i+1) + '{');
    console.log(' ' + ' ' + ' ' + ' ' + 'width: ' + (i+1) + '%');
    console.log('}');  
}