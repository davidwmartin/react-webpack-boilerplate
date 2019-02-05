// console.log('My Minimal React Webpack Babel Setup');

import React from 'react';
import ReactDOM from 'react-dom';

const title = 'My minimal webpack react babel setup';

ReactDOM.render(
	<div>{title}</div>,
	document.getElementById('app')
);


module.hot.accept();