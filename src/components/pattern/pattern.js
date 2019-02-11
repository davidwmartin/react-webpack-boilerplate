import React from 'react';

import styles from './pattern.css';

console.log(styles);

export default class Pattern extends React.Component {
	render() {
		return (
			<div className='somethingGlobal' styleName='pattern'>
				<span>A simple pattern</span>
			</div>
		)
	}
}