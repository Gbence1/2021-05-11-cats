// Code adapted from
// https://www.w3schools.com/howto/howto_js_tab_img_gallery.asp
// with modifications
let cross = document.querySelector(".cross");

cross.addEventListener("click", close);

function expand(img) {
	let expandImg = document.querySelector(".expandImg");
	let imgText = document.querySelector(".imgText");
	expandImg.src = img.src;
	imgText.innerHTML = img.alt;
	document.querySelector(".expand").style.display = "block";
}

function close() {
	document.querySelector(".expand").style.display = "none";
}