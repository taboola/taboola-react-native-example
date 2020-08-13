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
					title="Widget"
				/>
				<NavButton
					onPress={e => this.props.setCurrentPage('WidgetDemoDark')}
					title="Widget Dark"
				/>
				<NavButton
					onPress={e => this.props.setCurrentPage('WidgetInFlatListDemo')}
					title="Widget In FlatList Demo"
				/>
				<NavButton
					onPress={e => this.props.setCurrentPage('FeedDemo')}
					title="Feed + Video"
				/>
				<NavButton
					onPress={e => this.props.setCurrentPage('FeedDark')}
					title="Feed Dark"
				/>
				<NavButton
					onPress={e => this.props.setCurrentPage('WidgetAndFeedDemo')}
					title="Widget and Feed "
				/>
				<NavButton
					onPress={e => this.props.setCurrentPage('WidgetAndFeedDemoDark')}
					title="Widget Dark and Feed  Dark"
				/>
				<NavButton
					onPress={e => this.props.setCurrentPage('ArticleOC')}
					title="Taboola Handle Organic Click"
				/>
				<NavButton
					onPress={e => this.props.setCurrentPage('TestWidget')}
					title="Test Widget Parameters"
				/>
				<NavButton
					onPress={e => this.props.setCurrentPage('TestFeed')}
					title="Test Feed Parameters + Extra Prop"
				/>
			</View>
		);
	}
}
