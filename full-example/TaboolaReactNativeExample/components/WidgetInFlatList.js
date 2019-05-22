import React from 'react';
import { View, Platform, FlatList } from 'react-native';
import RNTaboolaView from '@taboola/react-native-taboola';
import PropTypes from 'prop-types';

const Widget = props => {
	const {
		mode,
		publisher,
		pageType,
		pageUrl,
		placement,
		targetType,
		height,
	} = props;

	return (
		<View style={{ flex: 1, justifyContent: 'center' }}>
			<FlatList
				style={{ flex: 1 }}
				data={[{ key: 'a' }]}
				renderItem={({ item }) => (
					<RNTaboolaView
						mode={mode}
						publisher={publisher}
						pageType={pageType}
						pageUrl={pageUrl}
						placement={placement}
						targetType={targetType}
						scrollEnabled={false}
						style={{
							height: height,
							width: '100%',
						}}
						onDidLoad={event => {
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
				)}
			/>
		</View>
	);
};

Widget.defaultProps = {
	mode: 'alternating-widget-without-video-1-on-1',
	publisher: 'sdk-tester',
	pageType: 'article',
	pageUrl: 'https://blog.taboola.com',
	placement: 'Mid Article',
	targetType: 'mix',
	height: Platform.OS === 'ios' ? 260 : 270,
};

Widget.propTypes = {
	mode: PropTypes.string.isRequired,
	publisher: PropTypes.string.isRequired,
	pageType: PropTypes.string.isRequired,
	pageUrl: PropTypes.string.isRequired,
	placement: PropTypes.string.isRequired,
	targetType: PropTypes.string.isRequired,
	height: PropTypes.number.isRequired,
};

export default Widget;
