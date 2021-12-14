const os = document.querySelector("#openSettings");
const cs = document.querySelector("#closeSettings");
const menu = document.querySelector("#settings__menu");
let menuState = false;

const btnSwitch1 = document.querySelector("#settings__menu-switch1");
const granddiv = document.querySelector(".granddiv");
const header = document.querySelector(".header");
const footer = document.querySelector(".footer");
const btna = document.querySelector("#aboutMe");
const btnh = document.querySelector("#habilities");
const btnp = document.querySelector("#projects");
let light = false;

const btnSwitch2 = document.querySelector("#settings__menu-switch2");

function openMenu() {
	menu.classList.add("show-settings-menu");
	menuState = true;
}
function closeMenu() {
	menu.classList.remove("show-settings-menu");
	menuState = false;
}

os.addEventListener("click", () => {
	openMenu()
});
cs.addEventListener("click", () => {
	closeMenu();
});

function progresbar() {
	if (light == true) {
		$(".progresbar").addClass("light-progress");
	} else {
		$(".progresbar").removeClass("light-progress");
	}
}

btnSwitch1.addEventListener("click", () => {
	btnSwitch1.classList.toggle("settings__menu-switch--enabled");
	document.body.classList.toggle("light-body");
	granddiv.classList.toggle("light");
	header.classList.toggle("light-header");
	footer.classList.toggle("light-footer");
	btna.classList.toggle("light-button");
	btnh.classList.toggle("light-button");
	btnp.classList.toggle("light-button");
	menu.classList.toggle("light-menu");
	if (btnSwitch2.classList.contains("settings__menu-switch--enabled")) {
		if (btnSwitch1.classList.contains("settings__menu-switch--enabled") == false) {
			granddiv.classList.add("dark-text");
		}
		menu.classList.remove("dark-text");
	}
	light = btnSwitch1.classList.contains("settings__menu-switch--enabled");
	progresbar()
});
btnSwitch2.addEventListener("click", () => {
	btnSwitch2.classList.toggle("settings__menu-switch--enabled");
	if (btnSwitch2.classList.contains("settings__menu-switch--enabled")) {
		header.classList.add("dark-text");
		if (light==false) {
			menu.classList.add("dark-text");
			granddiv.classList.add("dark-text");
		} else {
			menu.classList.remove("dark-text");
			granddiv.classList.remove("dark-text");
		}
		footer.classList.add("dark-text");
	} else {
		header.classList.remove("dark-text");
		menu.classList.remove("dark-text");
		granddiv.classList.remove("dark-text");
		footer.classList.remove("dark-text");
	}
});

granddiv.addEventListener("click", () => {
	if (menuState == true) {
		closeMenu()
	}
});
