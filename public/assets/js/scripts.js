// This is to insert all the generic header/footer stuff
window.addEventListener('DOMContentLoaded', () => {
	const nav = document.createElement('template');
	nav.innerHTML = `
			<!-- Navigation-->
			<nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
				<div class="container px-4 px-lg-5">
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
					Menu
						<i class="fas fa-bars"></i>
					</button>
					<div class="collapse navbar-collapse" id="navbarResponsive">
						<ul class="navbar-nav ms-auto py-4 py-lg-0">
							<li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="/">Home</a></li>
							<li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="/public/about">About</a></li>
							<!-- <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="/public/contact">Contact</a></li> -->
						</ul>
					</div>
				</div>
			</nav>
	`;
	document.body.prepend(nav.content);

	const footer = document.createElement('template');
	footer.innerHTML = `
	<footer class="border-top">
	<div class="container px-4 px-lg-5">
		<div class="row gx-4 gx-lg-5 justify-content-center">
			<div class="col-md-10 col-lg-8 col-xl-7">
				<ul class="list-inline text-center">
					<li class="list-inline-item">
						<a href="#!">
							<span class="fa-stack fa-lg">
								<i class="fas fa-circle fa-stack-2x"></i>
								<i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
							</span>
						</a>
					</li>
					<li class="list-inline-item">
						<a href="#!">
							<span class="fa-stack fa-lg">
								<i class="fas fa-circle fa-stack-2x"></i>
								<i class="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
							</span>
						</a>
					</li>
					<li class="list-inline-item">
						<a href="#!">
							<span class="fa-stack fa-lg">
								<i class="fas fa-circle fa-stack-2x"></i>
								<i class="fab fa-github fa-stack-1x fa-inverse"></i>
							</span>
						</a>
					</li>
				</ul>
				<div class="small text-center text-muted fst-italic">
					Copyright &copy; Grumpy Old Man Reviews 2022
				</div>
			</div>
		</div>
	</div>
	</footer>
	`;
	document.body.append(footer.content);
});

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