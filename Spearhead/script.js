var coll = document.getElementsByClassName("collapsible");

for (var i=0; i < coll.length; i++) {
	coll[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.maxHeight) {
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
		}
	});
}

var imgs = document.getElementsByName("img");
for (var i = 0; i < imgs.length; i++) {
	imgs[i].onclick = function() {
		window.open(imgs[i].getAttribute("src"));
	}
}

function showImg(e) {
	window.open(e.src, "_blank");
}