import React from 'react';
import { View  } from 'react-native';
import PropTypes from 'prop-types';
import BackButton from './styles/BackButton';
import StyledText from './styles/StyledText';
import Header from './styles/Header';
import paragraphs from '../static/paragraphs';
import WidgetDark from "./WidgetDark";

const ArticleWithWidgetDark = props => {

	return (
		<View >
			<BackButton onPress={e => props.back()} title="Back" />

				<Header>Here's a Taboola Widget Dark</Header>
				<StyledText>{paragraphs[0]}</StyledText>
				<StyledText>{paragraphs[1]}</StyledText>
					<WidgetDark />
			<StyledText>{paragraphs[0]}</StyledText>
		</View>
	);
};

ArticleWithWidgetDark.propTypes = { back: PropTypes.func.isRequired };

export default ArticleWithWidgetDark;
