const os = document.querySelector("#openSettings");
const cs = document.querySelector("#closeSettings");
const menu = document.querySelector("#settings__menu");

const btnSwitch1 = document.querySelector("#settings__menu-switch1");
const granddiv = document.querySelector(".granddiv");
const header = document.querySelector(".header");
const footer = document.querySelector(".footer");
const btna = document.querySelector("#aboutMe");
const btnh = document.querySelector("#habilities");
const btnp = document.querySelector("#projects");
let light = false;

const btnSwitch2 = document.querySelector("#settings__menu-switch2");

os.addEventListener("click", () => {
	menu.classList.add("show-settings-menu");
});
cs.addEventListener("click", () => {
	menu.classList.remove("show-settings-menu");
});

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
	light = btnSwitch1.classList.contains("settings__menu-switch--enabled");
});
btnSwitch2.addEventListener("click", () => {
	btnSwitch2.classList.toggle("settings__menu-switch--enabled");
	header.classList.toggle("dark-text");
	if (light==false) {
		main.classList.toggle("dark-text");
	}
	footer.classList.toggle("dark-text");
});
