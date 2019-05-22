/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

it('renders correctly', () => {
	renderer.create(<App />);
});
