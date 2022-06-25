window.addEventListener('DOMContentLoaded', () => {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			addLatestReviews(this);
		}
	};
	xhttp.open("GET", "/public/assets/reviews.xml", true);
	xhttp.send();
});
function addLatestReviews(xml) {
	var i;
	var xmlDoc = xml.responseXML;
	var table="";
	var x = xmlDoc.getElementsByTagName("review");
	for (i = x.length-1; i >= 0; i--) {
		var title = x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
		var tagline = x[i].getElementsByTagName("tagline")[0].childNodes[0].nodeValue;
		var publishedDate = new Date(x[i].getElementsByTagName("published")[0].childNodes[0].nodeValue);
		var prettyPublishedDate = prettyDate(publishedDate);
		var tags = x[i].getElementsByTagName("tags")[0].childNodes[0].nodeValue;
		var filename;

		var cleanTitle = 
			title
				.replaceAll(' ', '-')
				.replaceAll(':', '')
				.toLowerCase();

		switch(tags) {
			case "tv":
				// Is TV review
				filename = "tv-reviews/" + cleanTitle + "-" + x[i].getElementsByTagName("season")[0].childNodes[0].nodeValue;
				title += " Season " + x[i].getElementsByTagName("season")[0].childNodes[0].nodeValue;
				break;
			case "movie":
				// Is movie review
				filename = "movie-reviews/" + cleanTitle;
				break;
			case "theatre":
				// Is theatre review
				filename = "theatre-reviews/" + cleanTitle;
				break;
		}

		table += `<!-- Post preview-->
					<div class="post-preview">
						<a href="/public/` + filename + `/">
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