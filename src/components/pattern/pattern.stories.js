import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import Pattern from './pattern';

storiesOf('Pattern', module)
	.add('sample pattern', () => (
		<Pattern />
	))