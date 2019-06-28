import React from 'react';
import RNTaboolaView from '@taboola/react-native-taboola';
import PropTypes from 'prop-types';

class Widget extends React.Component {
	state = { height: 0 };
	render() {
		return (
			<RNTaboolaView
				viewID={this.props.viewID}
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
					// alert the parent that the widget has loaded and feed can now be loaded
					this.props.onDidLoad && this.props.onDidLoad();
					
					// Set the height of the widget dynamically
					this.setState({ height: parseInt(event.nativeEvent.height, 10) });
					
				}}
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
	viewID: PropTypes.string
};

export default Widget;
