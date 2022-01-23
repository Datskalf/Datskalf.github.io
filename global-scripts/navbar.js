function toggleNav() {
	currentWidth = document.getElementById("sidenav").clientWidth;
	if (currentWidth == "250") {
		document.getElementById("sidenav").style.width = "0";
		document.getElementById("main").style.marginLeft = "50px";
	}
	else {
		document.getElementById("sidenav").style.width = "250px";
		document.getElementById("main").style.marginLeft = "250px";
	}
}