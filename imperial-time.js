const MAKR = 0.11407955;
const GREAT_RIFT_DATE = new Date(40999, 12);

let time_og = document.querySelector(".imperial-time .original");

function imperial_time(type) {
	let current_time = new Date();
	let year = current_time.getFullYear();
	let day = ordinal_day(current_time);
	let hour = current_time.getHours();

	let determined_hour = day * 24 + hour;
	let imperial_fraction = determined_hour * MAKR;
	let year_fraction = Math.floor(imperial_fraction).toString();

	let millenium_year = year.toString().substr(-3);

	let millenium = year.toString().substr(0, -4);

	let imp_time = `${check_number}.${year_fraction}.${millenium_year}.M${millenium}`;
	return imp_time
}

function imperial_time_new_style() {
	return imperial_time
}