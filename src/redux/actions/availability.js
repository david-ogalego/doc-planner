import * as types from './actionTypes';
// import mockAvailability from './mockAvailability';

const requestAvailability = date => ({
	type: types.REQUEST_AVAILABILITY,
	date,
});

const receivedAvailability = availableSlots => ({
	type: types.RECEIVED_AVAILABILITY,
	availableSlots,
});

const fetchAvailability = date => (dispatch) => {
	dispatch(requestAvailability(date));
	// const headers = new Headers({
	// 	// apikey: 'NzSvsHgWN80FXBUJ',
	// 	// Accept: 'text/plain',
	// 	'Content-Type': 'text/plain; charset=utf-8',
	// });
	document.cookie = 'ARRAffinity=203dd101cabc7e3f68f70d0455c8c0460ee1e5f36c0e1a65b21e77e48916f074';
	fetch(`https://draliatest.azurewebsites.net/api/availability/GetWeeklySlots/${date}`, {
		method: 'GET',
		credentials: 'include',
		mode: 'cors',
	}).then((json) => {
		if (json.code === 200) {
			return dispatch(receivedAvailability(json));
		}
		throw json.status;
	}).catch((error) => {
		console.log(`There has been a problem with your fetch operation: ${error}`);
		// dispatch(errorRequestComic(error));
	});
	// .then(() => setTimeout(() => dispatch(receivedAvailability(mockAvailability)), 2000));
	// .then((json) => {
	// 	if (json.code === 200) {
	// 		return dispatch(receivedAvailability(json));
	// 	}
	// 	throw json.status;
	// });
	// .catch((error) => {
	// 	console.log(`There has been a problem with your fetch operation: ${error}`);
	// 	dispatch(errorRequestComic(error));
	// });
};

export {
	requestAvailability,
	receivedAvailability,
	fetchAvailability,
};
