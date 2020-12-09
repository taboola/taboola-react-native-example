import React from 'react';
import { View,  FlatList, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import Widget from './Widget';
import WidgetDark from "./WidgetDark";
import Feed from "./Feed";
import WidgetNew from "./WidgetNew";
import BackButton from './styles/BackButton';
import StyledText from './styles/StyledText';
import Header from './styles/Header';
import paragraphs from '../static/paragraphs';

const ArticleWithWidgetInFlatList = props => {
	const p1 = <StyledText key="p1">{paragraphs[0]}</StyledText>;

	const p2 = <StyledText key="p2">{paragraphs[1]}</StyledText>;
	return (
		<View>
			<BackButton onPress={e => props.back()} title="Back" />

			<Header>Here's a Taboola Widget in FlatList</Header>
			<FlatList
				style={{ flex: 1 }}
				//removeClippedSubviews={true}
			data={[
					{ key: 'p1' },
					{ key: 'p3' },
					{ key: 'p4' },
					{ key: 'taboola' },
					{ key: 'p2' },
					{ key: 'taboolaDark' },
					{ key: 'p5' },
					{ key: 'p6' },
					{ key: 'taboolaWidgetNew' },
					{ key: 'p7' },
					{ key: 'p8' },
					{ key: 'feed' },
				]}
				renderItem={({ item }) => {
					switch (item.key) {
						case 'p1':
							return p1;
						case 'p2':
							return p2;
						case 'p3':
							return p1;
						case 'p4':
							return p2;
						case 'p5':
							return p1;
						case 'p6':
							return p2;
						case 'p7':
							return p1;
						case 'p8':
							return p2;
						case 'taboola':
							return <Widget />;
						case 'taboolaDark':
							return <WidgetDark />;
						case 'taboolaWidgetNew':
							return <WidgetNew />;
						case 'feed':
							// return <ScrollView><Feed /></ScrollView>;
							return <Feed />;
						default:
							return null;
					}
				}}
			/>

		</View>
	);
};

ArticleWithWidgetInFlatList.propTypes = { back: PropTypes.func.isRequired };

export default ArticleWithWidgetInFlatList;
