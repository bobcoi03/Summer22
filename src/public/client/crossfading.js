function normalImg(image_id, text_id) {
	document.getElementById(image_id).style.display = 'none';
	document.getElementById(text_id).style.display = 'block';
}

function chgImg(image_id, text_id) {
	document.getElementById(image_id).style.display = 'block';
	document.getElementById(text_id).style.display = 'none';
}