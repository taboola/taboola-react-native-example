import React, { Component } from 'react';
import { View } from 'react-native';
import TaboolaLogo from './TaboolaLogo';
import NavButton from './styles/NavButton';

export default class HomePage extends Component {
	render() {
		return (
			<View>
				<TaboolaLogo />
				<NavButton
					onPress={e => this.props.setCurrentPage('WidgetDemo')}
					title="Widget Demo"
				/>
				<NavButton
					onPress={e => this.props.setCurrentPage('WidgetInFlatListDemo')}
					title="Widget In FlatList Demo"
				/>
				<NavButton
					onPress={e => this.props.setCurrentPage('FeedDemo')}
					title="Feed Demo"
				/>
				<NavButton
					onPress={e => this.props.setCurrentPage('WidgetAndFeedDemo')}
					title="Widget and Feed Demo"
				/>
				<NavButton
					onPress={e => this.props.setCurrentPage('TestWidget')}
					title="Test Your Widget Parameters"
				/>
				<NavButton
					onPress={e => this.props.setCurrentPage('TestFeed')}
					title="Test Your Feed Parameters"
				/>
			</View>
		);
	}
}
