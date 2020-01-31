import React from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import FeedVideo from './FeedVideo';
import BackButton from './styles/BackButton';
import StyledText from './styles/StyledText';
import Header from './styles/Header';
import paragraphs from '../static/paragraphs';

const ArticleWithFeedVideo = props => {
	return (
		<View style={{ flex: 1 }}>
			<BackButton onPress={e => props.back()} title="Back" />
			<ScrollView>
				<Header>Here's a Taboola Feed with Video</Header>
				<StyledText>{paragraphs[0]}</StyledText>
				<StyledText>{paragraphs[1]}</StyledText>
				<StyledText>{paragraphs[2]}</StyledText>
				<FeedVideo />
			</ScrollView>
		</View>
	);
};

ArticleWithFeedVideo.propTypes = { back: PropTypes.func.isRequired };

export default ArticleWithFeedVideo;
