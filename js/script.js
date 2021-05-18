//Close image
let cross = document.querySelector(".cross");

cross.addEventListener("click", close);

function close() {
	document.querySelector(".expand").style.display = "none";
}

//Expand image

let img = document.querySelectorAll(".img");

for (let i = 0; i < img.length; i++) {
	img[i].addEventListener("click", expand);
}

function expand(j) {
	let image = j.target;
	let expandImg = document.querySelector(".expandImg");
	let imgText = document.querySelector(".imgText");
	expandImg.src = image.src;
	imgText.innerHTML = image.alt;
	document.querySelector(".expand").style.display = "block";
}