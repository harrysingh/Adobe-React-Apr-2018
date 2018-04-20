import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import appStore from './store';
import { Provider } from 'react-redux';
import Spinner from './spinner';
import BugTracker from './bugTracker';
import axios from 'axios';

window.axios = axios;

ReactDOM.render(
	<Provider store={appStore}>
		<div>
			<Spinner />
			<hr/>
			<BugTracker/>
		</div>
	</Provider>
, document.getElementById('root'));

