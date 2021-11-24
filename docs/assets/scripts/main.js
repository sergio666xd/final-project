$(function () {
	$("nav").delegate("button", "click", function () {
		window.location.hash = $(this).attr("id");
		return false;
	});
	if("onhashchange" in window){
		console.log("soportado")
	 }
	 $(window).bind("hashchange", function () {
		var URLhash = window.location.hash;
		if (URLhash == "#aboutMe") {
			aboutMe()
			console.log("Página actual: Sobre mí");
		} else if (URLhash == "#habilities") {
			habilities()
			console.log("Página actual: Habilidades");
		} else if (URLhash == "#projects") {
			projects()
			console.log("Página actual: Proyectos");
		}
	});
});

let abMe = document.querySelector("#aboutMe");
let habs = document.querySelector("#habilities");
let proj = document.querySelector("#projects");
let main = document.querySelector(".main");
let cont = document.querySelector("#content");

function addWait() {
	main.classList.add("wait");
	cont.classList.add("waitc");
}
function removeWait() {
	main.classList.remove("wait");
	cont.classList.remove("waitc");
}

function aboutMe() {
	addWait();
	$('.main__content').load('./pages/about-me.html');
	setTimeout(function () {
		abMe.classList.add("header__button--active");
		habs.classList.remove("header__button--active");
		proj.classList.remove("header__button--active");
	}, 100);
	setTimeout(function () {
		removeWait();
	}, 500);
}
function habilities() {
	addWait();
	$('.main__content').load('./pages/habilities.html');
	setTimeout(function () {
		abMe.classList.remove("header__button--active");
		habs.classList.add("header__button--active");
		proj.classList.remove("header__button--active");
	}, 100);
	setTimeout(function () {
		removeWait();
	}, 500);
}
function projects() {
	addWait();
	$('.main__content').load('./pages/projects.html');
	setTimeout(function () {
		abMe.classList.remove("header__button--active");
		habs.classList.remove("header__button--active");
		proj.classList.add("header__button--active");
	}, 100);
	setTimeout(function () {
		removeWait();
	}, 500);
}