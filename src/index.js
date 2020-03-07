import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes';

import {BrowserRouter} from 'react-router-dom'
	const routes = (
	    <BrowserRouter>
                <Routes />
	    </BrowserRouter>
	)
ReactDOM.render(routes, document.getElementById('root'));