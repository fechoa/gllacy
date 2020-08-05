const modal = document.querySelector(".modal");
const click = document.querySelector(".button-form");
const exit = document.querySelector(".exit-button");

click.addEventListener("click", function (evt) {
	evt.preventDefault();
	modal.classList.remove("visually-hidden");
});

exit.addEventListener("click", function (evt) {
	evt.preventDefault();
	modal.classList.add("visually-hidden");
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode ===27) {
		if (!modal.classList.contains("visually-hidden")) {
			evt.preventDefault();
			modal.classList.add("visually-hidden");
		}
	}
});
