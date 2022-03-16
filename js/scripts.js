/*!
* Start Bootstrap - Clean Blog v6.0.7 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
});

window.addEventListener('DOMContentLoaded', () => {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    myFunction(this);
    }
  };
  xhttp.open("GET", "reviews.xml", true);
  xhttp.send();
});
function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="";
  var x = xmlDoc.getElementsByTagName("movie");
  for (i = x.length-1; i >= 0; i--) {
		table += `<!-- Post preview-->
					<div class="post-preview">
						<a href="movie-reviews/being-the-ricardos/being-the-ricardos.html">
							<h2 class="post-title">Being the Ricardos</h2>
							<h3 class="post-subtitle">Whatever happened to that game we used to play before television was invented? It was called 'conversation.'</h3>
						</a>
						<p class="post-meta">
							Posted on March 16th, 2022
						</p>
					</div>
					<!-- Divider-->
					<hr class="my-4" />`
    table += "<tr><td>" +
    x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("tagline")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("latest-reviews").innerHTML = table;
}
