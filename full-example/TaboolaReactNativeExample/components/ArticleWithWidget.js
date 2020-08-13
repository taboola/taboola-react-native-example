import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Widget from './Widget';
import BackButton from './styles/BackButton';
import StyledText from './styles/StyledText';
import Header from './styles/Header';
import paragraphs from '../static/paragraphs';


const ArticleWithWidget = props => {
	return (
		<View >
			<BackButton onPress={e => props.back()} title="Back" />

				<Header>Here's a Taboola Widget</Header>
				<StyledText>{paragraphs[0]}</StyledText>
				<StyledText>{paragraphs[1]}</StyledText>
					<Widget />
			<StyledText>{paragraphs[0]}</StyledText>
		</View>
	);
};

ArticleWithWidget.propTypes = { back: PropTypes.func.isRequired };

export default ArticleWithWidget;
