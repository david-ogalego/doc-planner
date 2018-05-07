import moment from 'moment';

export function getCurrentDateWithFormat() {
	return moment().startOf('isoWeek').format('YYYYMMDD');
}

export function getWeekDays() {
	moment.locale('es');
	return moment.weekdays(true);
}

export function getWeekDayFromDate(date) {
	return moment(date).format('dddd');
}

export function getTimeFromDate(date) {
	return moment(date).format('hh:mm');
}

export function getMondayNextWeek(date) {
	return moment(date).add(1, 'weeks').format('YYYYMMDD');
}

export function getMondayPreviousWeek(date) {
	return moment(date).subtract(1, 'weeks').format('YYYYMMDD');
}
