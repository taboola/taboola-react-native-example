import React from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import Widget from './Widget';
import Feed from './Feed';
import BackButton from './styles/BackButton';
import StyledText from './styles/StyledText';
import Header from './styles/Header';

class ArticleWithWidgetAndFeed extends React.Component {
	state = {
		widgetLoaded: false,
		viewID: new Date().getTime().toString(),
	};

	setWidgetLoaded() {
		this.setState({ widgetLoaded: true });
	}

	render() {
		return (
			<View>
				<BackButton onPress={e => this.props.back()} title="Back" />
				<ScrollView>
					<Header>Here's a Taboola Widget</Header>

					<Widget
						viewID={this.state.viewID}
						onDidLoad={e => this.setWidgetLoaded()}
					/>
					<StyledText>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
						quae ab illo inventore veritatis et quasi architecto beatae vitae
						dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
						aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
						eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
						qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
						sed quia non numquam eius modi tempora incidunt ut labore et dolore
						magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
						nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
						aliquid ex ea commodi consequatur? Quis autem vel eum iure
						reprehenderit qui in ea voluptate velit esse quam nihil molestiae
						consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
						pariatur?
					</StyledText>
					{/* this tells the component to only render the Feed once the widget has been rendered.
					    Doing this and passing both the widget and feed the same viewID will prevent duplication of ads */}
					{this.state.widgetLoaded && <Feed viewID={this.state.viewID} />}
				</ScrollView>
			</View>
		);
	}
}

ArticleWithWidgetAndFeed.propTypes = { back: PropTypes.func.isRequired };

export default ArticleWithWidgetAndFeed;
