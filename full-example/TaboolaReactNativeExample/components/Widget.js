import React, { useState } from 'react';
import RNTaboolaView from '@taboola/react-native-taboola';
import PropTypes from 'prop-types';

const Widget = props => {
	const [height, setHeight] = useState(0);

	return (
		<RNTaboolaView
			mode={props.mode}
			publisher={props.publisher}
			pageType={props.pageType}
			pageUrl={props.pageUrl}
			placement={props.placement}
			targetType={props.targetType}
			scrollEnabled={false}
			style={{
				height,
				width: '100%',
			}}
			onDidLoad={event => {
				// Set the height of the widget dynamically
				setHeight(parseInt(event.nativeEvent.height, 10));
			}}
			onDidFailToLoad={event => {}}
			onOrganicItemClick={event => {}}
			onAdItemClick={event => {}}
		/>
	);
}

Widget.defaultProps = {
	mode: 'alternating-widget-without-video-1-on-1',
	publisher: 'sdk-tester',
	pageType: 'article',
	pageUrl: 'https://blog.taboola.com',
	placement: 'Mid Article',
	targetType: 'mix',
};

Widget.propTypes = {
	mode: PropTypes.string.isRequired,
	publisher: PropTypes.string.isRequired,
	pageType: PropTypes.string.isRequired,
	pageUrl: PropTypes.string.isRequired,
	placement: PropTypes.string.isRequired,
	targetType: PropTypes.string.isRequired,
};

export default Widget;
