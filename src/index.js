// console.log('My Minimal React Webpack Babel Setup');

import React from 'react';
import ReactDOM from 'react-dom';

import Pattern from './components/pattern/pattern';

import 'normalize.css';
import styles from './test.css'; // note - if using multiple style imports with current package (https://github.com/gajus/babel-plugin-react-css-modules) - will need to use named reference

const title = 'Boilerplate';

class Layout extends React.Component {
	render() {
		return (
			<div styleName='styles.test'>
				<h1>{title}</h1>
				<div styleName='styles.inner'>
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
