const MAKR = 0.11407955;
const GREAT_RIFT_DATE = new Date(40999, 12);
const CHECK_NUMBER = 0;
const DESIGNATOR = "TCM" // Terra Cicatrix Maledictum

let time_old_style = document.querySelector(".imperial-time.original");
let time_new_style = document.querySelector(".imperial-time.indomitus");

function ordinal_day(date) {
	()=>{}
}

function imperial_time_old_style(current_date) {
	let year = current_date.getFullYear();
	let day = ordinal_day(current_date);
	let hour = current_date.getHours();

	let determined_hour = day * 24 + hour;
	let imperial_fraction = determined_hour * MAKR;
	let year_fraction = Math.floor(imperial_fraction).toString();

	let millenium_year = year.toString().substr(-3);

	let millenium = year.toString().substr(0, -4);

	let imp_time = 
	`${CHECK_NUMBER}.${year_fraction}.${millenium_year}.M${millenium}`;
	return imp_time
}

function imperial_time_new_style(current_date) {
	let year = current_date.getFullYear();
	let year_delta = GREAT_RIFT_DATE.getFullYear() - year;
	let day_delta =
	ordinal_day(GREAT_RIFT_DATE.getDay()) - ordinal_day(current_date.getDay());

	let millenium = year.toString().substr(0, -4);

	let sign = (year_delta < 0) ? "-":"+";

	let imperial_time = Math.abs(year_delta).toString() +
	"." + Math.abs(day_delta).toString() + sign +
	" " + DESIGNATOR + ".M" + millenium;
	return imperial_time
}

function main() {
	let current_date = new Date();
	time_old_style.innerText = imperial_time_old_style(current_date);
	time_new_style.innerText = imperial_time_new_style(current_date);
}

// var interval = setInterval(main(), 1000)