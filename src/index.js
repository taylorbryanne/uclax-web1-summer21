/*---------------------------
| IE 11 Support
---------------------------*/
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

/*---------------------------
| React and 3rd Party Libraries
---------------------------*/
import React from 'react';
import ReactDOM from 'react-dom';

/*---------------------------
| Components
---------------------------*/
import Main from './React/Main.jsx';

/*---------------------------
| Global Styles
---------------------------*/
import './css/normalize.css';
import './css/global.scss';

/*---------------------------
| Render to DOM
---------------------------*/
ReactDOM.render(<Main />, document.getElementById('root'));