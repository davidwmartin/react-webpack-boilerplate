// console.log('My Minimal React Webpack Babel Setup');

import React from 'react';
import ReactDOM from 'react-dom';

import Pattern from './pattern/pattern';

import styles from './test.css';


const title = 'Boilerplate';

class Layout extends React.Component {
	render() {
		return (
			<div className='test'>
				<h1>{title}</h1>
				<div className='inner'>
					<span>Inner</span>
				</div>
				<Pattern />
			</div>
		)
	}
}

ReactDOM.render(
	<Layout />,
	document.getElementById('app')
);


module.hot.accept();