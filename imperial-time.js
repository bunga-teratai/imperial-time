const MAKR = 0.11407955;
const GREAT_RIFT_DATE = new Date(40999, 12);

let time_old = document.querySelector(".imperial-time .original");

function ordinal_day(date) {
	()=>{}
}

function imperial_time_old_style() {
	let current_time = new Date();
	let year = current_time.getFullYear();
	let day = ordinal_day(current_time);
	let hour = current_time.getHours();

	let determined_hour = day * 24 + hour;
	let imperial_fraction = determined_hour * MAKR;
	let year_fraction = Math.floor(imperial_fraction).toString();

	let millenium_year = year.toString().substr(-3);

	let millenium = year.toString().substr(0, -4);

	let imp_time = 
	`${check_number}.${year_fraction}.${millenium_year}.M${millenium}`;
	return imp_time
}

function imperial_time_new_style(current_date) {
	let year_delta = GREAT_RIFT_DATE.getFullYear() - current_date.getFullYear();
	let day_delta =
	ordinal_day(GREAT_RIFT_DATE.getDay()) - ordinal_day(current_date.getDay());

	let sign;
	if (year_delta < 0) {
		sign = "-";
	}
	else {
		sign = "+";
	}

	let imperial_time = Math.abs(year_delta).toString() +
	"." + Math.abs(day_delta).toString() + sign +
	" " + designator + ".M" + millenium;
	return imperial_time
}