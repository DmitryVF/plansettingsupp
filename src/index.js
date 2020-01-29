import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //to provide components with access to react-store
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import store from './store';


ReactDOM.render(
	<Provider store={store}>
				<Router>
					<App/>
				</Router>
	</Provider>,
	document.getElementById('root')
)

