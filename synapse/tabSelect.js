function showTab(evt, tabName) {
	var tabcontent = document.getElementsByClassName("tabcontent");
	var tablinks = document.getElementsByClassName("tablinks");

	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].classList.toggle("active", false);
	}

	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.classList.toggle("active", true);
}