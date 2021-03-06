import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import Feed from './Feed';
import BackButton from './styles/BackButton';
import StyledText from './styles/StyledText';
import Header from './styles/Header';
import paragraphs from '../static/paragraphs';


const ArticleWithFeed = props => {

	return (
		<View style={{ flex: 1}}>
			<BackButton
				onPress={e => props.back()} title="Back" />
				<Header>Here's a Taboola Feed</Header>
				<StyledText style={{textAlign: 'justify'}}>{paragraphs[1]}</StyledText>
					<Feed />
		</View>
	);
};

ArticleWithFeed.propTypes = { back: PropTypes.func.isRequired };

export default ArticleWithFeed;
