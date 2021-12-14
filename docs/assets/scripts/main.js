if ("onhashchange" in window) {
	console.log("hashchange soportado. Podrás acceder a una página a través de un enlace. (Ejemplo: " + window.location +")")
}

$(document).ready(function () {
	var year = (new Date).getFullYear();
	$("#year").text(year);
	var URLhash = window.location.hash;
	if (URLhash == "#aboutMe" || URLhash == "") {
		aboutMe()
	} else if (URLhash == "#habilities") {
		habilities()
	} else if (URLhash == "#projects") {
		projects()
	}
	const progress = document.querySelector(".progresbar");
});

$(function () {
	$("nav").delegate("button", "click", function () {
		var URLhash = $(this).attr("id");;
		if (URLhash == "#aboutMe" || URLhash == "") {
			aboutMe()
		} else if (URLhash == "#habilities") {
			habilities()
		} else if (URLhash == "#projects") {
			projects()
		}
		setTimeout(() => {
			window.location.hash = $(this).attr("id");
		}, 100);
	});

	$(window).bind("hashchange", function () {
		var URLhash = window.location.hash;
		if (URLhash == "#aboutMe") {
			aboutMe()
		} else if (URLhash == "#habilities") {
			habilities()
		} else if (URLhash == "#projects") {
			projects()
		} else {
			error404()
		}
	});
});

let abMe = document.querySelector("#aboutMe");
let habs = document.querySelector("#habilities");
let proj = document.querySelector("#projects");
let main = document.querySelector(".main");
let cont = document.querySelector("#content");

function page() {
	setTimeout(() => {
		let title = $("#title").text();
		console.log("Página actual: " + title);
	}, 500);
}

function buttons() {
	var URLhash = window.location.hash;
	if (URLhash == "#aboutMe" || URLhash == "") {
		abMe.classList.add("header__button--active");
		habs.classList.remove("header__button--active");
		proj.classList.remove("header__button--active");
	} else if (URLhash == "#habilities") {
		abMe.classList.remove("header__button--active");
		habs.classList.add("header__button--active");
		proj.classList.remove("header__button--active");
	} else if (URLhash == "#projects") {
		abMe.classList.remove("header__button--active");
		habs.classList.remove("header__button--active");
		proj.classList.add("header__button--active");
	} else {
		abMe.classList.remove("header__button--active");
		habs.classList.remove("header__button--active");
		proj.classList.remove("header__button--active");
	}
	page()
}

function addWait() {
	main.classList.add("wait");
	cont.classList.add("waitc");
}
function removeWait() {
	main.classList.remove("wait");
	cont.classList.remove("waitc");
	setTimeout(() => {
		progresbar()
	}, 500);
}

function error404() {
	addWait();
	$('.main__content').load('./pages/error404.html');
	setTimeout(function () {
		buttons()
	}, 100);
	setTimeout(function () {
		removeWait();
	}, 500);
}

function aboutMe() {
	addWait();
	$('.main__content').load('./pages/about-me.html');
	setTimeout(function () {
		buttons()
	}, 100);
	setTimeout(function () {
		removeWait();
	}, 500);
}
function habilities() {
	addWait();
	$('.main__content').load('./pages/habilities.html');
	setTimeout(function () {
		buttons()
	}, 100);
	setTimeout(function () {
		removeWait();
	}, 500);
}
function projects() {
	addWait();
	$('.main__content').load('./pages/projects.html');
	setTimeout(function () {
		buttons()
	}, 100);
	setTimeout(function () {
		removeWait();
	}, 500);
}