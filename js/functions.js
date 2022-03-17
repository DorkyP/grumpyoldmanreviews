// Here's some clunky code to make the date look better. Why isn't this something built in to JS or jQuery or something?!? ¯\_(ツ)_/¯
function prettyDate(uglyDate) {
	const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	let month = months[uglyDate.getMonth()];
	let day = uglyDate.getDate();
	let suffix = (day >= 4 &&  day <= 20) || (day >= 24 && day <= 30)
		? "th"
		: ["st", "nd", "rd"][day % 10 - 1];
	let year = uglyDate.getFullYear()
	return month + " " + day + suffix + ", " + year;
}