import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TaboolaLogo from './TaboolaLogo';
import NavButton from './styles/NavButton';

export default class HomePage extends Component {
	render() {
		return (
			<View>
				<TaboolaLogo />
				<View
					style={{
						borderBottomColor: '#A2A2A2',
						borderBottomWidth: 1,
					}}
				/>
				<Text>Widget</Text>
				<NavButton
					onPress={e => this.props.setCurrentPage('WidgetDemo')}
					title="Widget Demo"
				/>
				<NavButton
					onPress={e => this.props.setCurrentPage('WidgetInFlatListDemo')}
					title="Widget In FlatList Demo"
				/>
				<View
					style={{
						borderBottomColor: '#A2A2A2',
						borderBottomWidth: 1,
					}}
				/>
				<Text>Feed</Text>
				<NavButton
					onPress={e => this.props.setCurrentPage('OnlyFeed')}
					title="Only Feed Demo"
				/>
				<NavButton
					onPress={e => this.props.setCurrentPage('OnlyFeedVideo')}
					title="Only Feed Demo with Video"
				/>
				<NavButton
					onPress={e => this.props.setCurrentPage('FeedDemo')}
					title="Feed Demo"
				/>
				<NavButton
					onPress={e => this.props.setCurrentPage('FeedDemoVideo')}
					title="Feed Demo with Video"
				/>
				<View
					style={{
						borderBottomColor: '#A2A2A2',
						borderBottomWidth: 1,
					}}
				/>
				<Text>Widget + Feed</Text>
				<NavButton
					onPress={e => this.props.setCurrentPage('WidgetAndFeedDemo')}
					title="Widget and Feed Demo"
				/>
				<NavButton
					onPress={e => this.props.setCurrentPage('WidgetAndFeedDemoVideo')}
					title="Widget and Feed Demo with Video"
				/>
				<View
					style={{
						borderBottomColor: '#A2A2A2',
						borderBottomWidth: 1,
					}}
				/>
				<Text>Manual test</Text>
				<NavButton
					onPress={e => this.props.setCurrentPage('TestWidget')}
					title="Test Your Widget Parameters"
				/>
				<NavButton
					onPress={e => this.props.setCurrentPage('TestFeed')}
					title="Test Your Feed Parameters"
				/>
				<View
					style={{
						borderBottomColor: '#A2A2A2',
						borderBottomWidth: 1,
					}}
				/>
			</View>
		);
	}
}
