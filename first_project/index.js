let activeLink = document.location.href;

const links = Array.from(document.querySelectorAll(".desktop__nav-link"));

links.forEach((link) => {
	link.addEventListener("click", (e) => {
		console.log(link);
	});
});
