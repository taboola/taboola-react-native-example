import React from 'react';
import { Dimensions } from 'react-native';
import RNTaboolaView from '@taboola/react-native-taboola';
import PropTypes from 'prop-types';

const Feed = props => {
	const { height } = Dimensions.get('window');

	return (
		<RNTaboolaView
			viewID={props.viewID}
			mode={props.mode}
			publisher={props.publisher}
			pageType={props.pageType}
			pageUrl={props.pageUrl}
			placement={props.placement}
			targetType={props.targetType}
			scrollEnabled={true}
			interceptScroll={true}
			style={{ height: height * 2, width: '100%' }}
			onDidLoad={event => {}}
			onDidFailToLoad={event => {
				console.warn(
					'onRenderFail placementName: ' + event.nativeEvent.placementName
				);
				console.warn('onRenderFail error: ' + event.nativeEvent.error);
			}}
			onOrganicItemClick={event => {}}
			onAdItemClick={event => {}}
		/>
	);
};

Feed.defaultProps = {
	mode: 'alternating-widget-without-video-1-on-1',
	publisher: 'sdk-tester',
	pageType: 'article',
	pageUrl: 'https://blog.taboola.com',
	placement: 'Feed without video',
	targetType: 'mix',
};

Feed.propTypes = {
	mode: PropTypes.string.isRequired,
	publisher: PropTypes.string.isRequired,
	pageType: PropTypes.string.isRequired,
	pageUrl: PropTypes.string.isRequired,
	placement: PropTypes.string.isRequired,
	targetType: PropTypes.string.isRequired,
	viewID: PropTypes.string,
};

export default Feed;
