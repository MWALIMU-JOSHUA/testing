document.addEventListener("DOMContentLoaded", function () {
	const menuCheckbox = document.getElementById("menu-checkbox");
	const menuIcon = document.querySelector(".menu-icon");

	menuIcon.addEventListener("click", function () {
		menuCheckbox.checked = !menuCheckbox.checked;
	});
});
