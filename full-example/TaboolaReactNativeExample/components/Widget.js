import React from 'react';
import { View, Platform } from 'react-native';
import RNTaboolaView from '@taboola/react-native-taboola';
import PropTypes from 'prop-types';

class Widget extends React.Component {
	state = { height: 0 };
	render() {
		return (
			<RNTaboolaView
				mode={this.props.mode}
				publisher={this.props.publisher}
				pageType={this.props.pageType}
				pageUrl={this.props.pageUrl}
				placement={this.props.placement}
				targetType={this.props.targetType}
				scrollEnabled={false}
				style={{
					height: this.state.height,
					width: '100%',
				}}
				onDidLoad={event => {
					// Set the height of the widget dynamically
					this.setState({ height: event.nativeEvent.height });
					console.warn(
						'onDidLoad : ' +
							event.nativeEvent.placementName +
							'- height -: ' +
							event.nativeEvent.height
					);
				}}
				onDidFailToLoad={event => {
					console.warn(
						'onRenderFail placementName: ' + event.nativeEvent.placementName
					);
					console.warn('onRenderFail error: ' + event.nativeEvent.error);
				}}
				onOrganicItemClick={event => {
					console.warn('onOrganicItemClick ' + event.nativeEvent.itemId);
					console.warn('url: ' + event.nativeEvent.clickUrl);
					console.warn('name: ' + event.nativeEvent.placementName);
				}}
				onAdItemClick={event => {
					console.warn('onAdItemClick  ' + event.nativeEvent.itemId);
					console.warn('url : ' + event.nativeEvent.clickUrl);
					console.warn('name : ' + event.nativeEvent.placementName);
				}}
			/>
		);
	}
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
