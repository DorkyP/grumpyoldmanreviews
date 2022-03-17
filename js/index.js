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
		var publishedDate = new Date(x[i].getElementsByTagName("published")[0].childNodes[0].nodeValue);

		// Here's some clunky code to make the date look better. Why isn't this something built in to JS or jQuery or something?!? ¯\_(ツ)_/¯
		const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
		let month = months[publishedDate.getMonth()];
		let day = publishedDate.getDate();
		let suffix = (day >= 4 &&  day <= 20) || (day >= 24 && day <= 30)
			? "th"
			: ["st", "nd", "rd"][day % 10 - 1];
		let year = publishedDate.getFullYear()
		prettyPublishedDate = month + " " + day + suffix + ", " + year;

		var filename = title.replaceAll(' ', '-')
		table += `<!-- Post preview-->
					<div class="post-preview">
						<a href="movie-reviews/` + filename + `/` + filename + `.html">
							<h2 class="post-title">` + title + `</h2>
							<h3 class="post-subtitle">` + tagline + `</h3>
						</a>
						<p class="post-meta">
							Posted on ` + prettyPublishedDate + `
						</p>
					</div>
					<!-- Divider-->
					<hr class="my-4" />`
	}
	document.getElementById("latest-reviews").innerHTML = table;
}