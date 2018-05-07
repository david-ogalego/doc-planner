import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';
import Availability from './containers/Availability/Availability';
import './index.css';

const store = configureStore();

ReactDOM.render(
	<Provider store={store} >
		<div>
			<Availability />
		</div>
		{/* <Router
				history={browserHistory}
				// routes={routes(store)}
			/> */}
	</Provider>,
	document.getElementById('root'),
);
