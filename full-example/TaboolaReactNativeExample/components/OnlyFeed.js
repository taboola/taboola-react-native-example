import React from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import Feed from './Feed';
import BackButton from './styles/BackButton';
import Header from './styles/Header';

const OnlyFeed = props => {
	return (
		<View style={{ flex: 1 }}>
			<BackButton onPress={e => props.back()} title="Back" />
			<ScrollView>
				<Header>Here's only Taboola Feed</Header>
				<Feed />
			</ScrollView>
		</View>
	);
};

OnlyFeed.propTypes = { back: PropTypes.func.isRequired };

export default OnlyFeed;
