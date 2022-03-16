window.addEventListener('DOMContentLoaded', () => {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			addLatestMovieReviews(this);
		}
	};
	xhttp.open("GET", "reviews.xml", true);
	xhttp.send();
});
function addLatestMovieReviews(xml) {
	var i;
	var xmlDoc = xml.responseXML;
	var table="";
	var x = xmlDoc.getElementsByTagName("movie");
	for (i = x.length-1; i >= 0; i--) {
		var title = x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
		var tagline = x[i].getElementsByTagName("tagline")[0].childNodes[0].nodeValue;
		var published = x[i].getElementsByTagName("published")[0].childNodes[0].nodeValue;
		var filename = title.replaceAll(' ', '-')
		table += `<!-- Post preview-->
					<div class="post-preview">
						<a href="movie-reviews/` + filename + `/` + filename + `.html">
							<h2 class="post-title">` + title + `</h2>
							<h3 class="post-subtitle">` + tagline + `</h3>
						</a>
						<p class="post-meta">
							Posted on ` + published + `
						</p>
					</div>
					<!-- Divider-->
					<hr class="my-4" />`
	}
	document.getElementById("latest-reviews").innerHTML = table;
}