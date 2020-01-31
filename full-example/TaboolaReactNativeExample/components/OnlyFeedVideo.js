import React from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import FeedVideo from './FeedVideo';
import BackButton from './styles/BackButton';
import Header from './styles/Header';

const OnlyFeedVideo = props => {
	return (
		<View style={{ flex: 1 }}>
			<BackButton onPress={e => props.back()} title="Back" />
			<ScrollView>
				<Header>Here's only Taboola Feed + Video</Header>
				<FeedVideo />
			</ScrollView>
		</View>
	);
};

OnlyFeedVideo.propTypes = { back: PropTypes.func.isRequired };

export default OnlyFeedVideo;
