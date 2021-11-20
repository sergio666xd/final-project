let settings = document.querySelector("#settings");
let viewvar = document.querySelector("#cstt__settings");

$(function () {
	$("nav").delegate("button", "click", function() {
			window.location.hash = $(this).attr("id");
			return false;
	});
	settings.addEventListener("click",() => {
		viewvar.classList.toggle("cstt__settings--view");
	});
});

let abMe = document.querySelector("#aboutMe");
let habs = document.querySelector("#habilities");
let proj = document.querySelector("#projects");
let main = document.querySelector(".main");
let cont = document.querySelector("#content");

function aboutMe() {
	main.classList.add("wait");
	cont.classList.add("waitc");
	$('.main__content').load('./pages/about-me.html');
	setTimeout(function () {
		abMe.classList.add("header__button--active");
		habs.classList.remove("header__button--active");
		proj.classList.remove("header__button--active");
	}, 100);
	setTimeout(function () {
		main.classList.remove("wait");
		cont.classList.remove("waitc");
	}, 500);
}
function habilities() {
	main.classList.add("wait");
	cont.classList.add("waitc");
	$('.main__content').load('./pages/habilities.html');
	setTimeout(function () {
		abMe.classList.remove("header__button--active");
		habs.classList.add("header__button--active");
		proj.classList.remove("header__button--active");
	}, 100);
	setTimeout(function () {
		main.classList.remove("wait");
		cont.classList.remove("waitc");
	}, 500);
}
function projects() {
	main.classList.add("wait");
	cont.classList.add("waitc");
	$('.main__content').load('./pages/projects.html');
	setTimeout(function () {
		abMe.classList.remove("header__button--active");
		habs.classList.remove("header__button--active");
		proj.classList.add("header__button--active");
	}, 100);
	setTimeout(function () {
		main.classList.remove("wait");
		cont.classList.remove("waitc");
	}, 500);
} 