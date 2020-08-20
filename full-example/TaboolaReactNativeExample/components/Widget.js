import React, {useState} from 'react';
import { Platform } from 'react-native';
import PropTypes from 'prop-types';

import RNTaboolaView from '@taboola/react-native-taboola';

const Widget = props => {
	const [height, setHeight] = useState(0)
	
	// Set the publisher according to the OS.
	// Taboola will provide a publisher id for android and one for ios.
	// Here we are just using the test account for both.
	const publisher = Platform.OS === 'ios' ? 'sdk-tester' : 'sdk-tester';

	return (
		<RNTaboolaView
			extraProperties={props.extraProperties}
			mode={props.mode}
			publisher={publisher}
			pageType={props.pageType}
			pageUrl={props.pageUrl}
			placement={props.placement}
			targetType={props.targetType}
			scrollEnabled={false}
			viewId={props.viewId}
			style={{
				height,
				width: '100%',
			}}
			onDidLoad={event => {
				// This lets us implement other logic into this callback via props
				props.onDidLoad(event);
				// Set the height of the widget dynamically
				setHeight(Number(event.nativeEvent.height));
			}}
			onDidFailToLoad={event => {
				props.onDidFailToLoad();
			}}
			onOrganicItemClick={event => {
				// implement logic for opening content in-app here
				console.warn('Organic item was clicked!');
				return true;
			}}
			onAdItemClick={event => {}}
		/>
	);
}

Widget.defaultProps = {
	extraProperties: {},
	mode: 'alternating-widget-without-video-1-on-1',
	pageType: 'article',
	pageUrl: 'https://blog.taboola.com',
	placement: 'Mid Article',
	targetType: 'mix',
	onDidLoad: () => {},
};

Widget.propTypes = {
	extraProperties: PropTypes.shape({
		cex: PropTypes.string,
	}).isRequired,
	mode: PropTypes.string.isRequired,
	onDidFailToLoad: PropTypes.func.isRequired,
	pageType: PropTypes.string.isRequired,
	pageUrl: PropTypes.string.isRequired,
	placement: PropTypes.string.isRequired,
	targetType: PropTypes.string.isRequired,
	viewId: PropTypes.string,
};

export default Widget;
