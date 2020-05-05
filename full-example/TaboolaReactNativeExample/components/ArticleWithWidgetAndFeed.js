import React from 'react';
import {View, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import Widget from './Widget';
import Feed from './Feed';
import BackButton from './styles/BackButton';
import StyledText from './styles/StyledText';
import Header from './styles/Header';
import paragraphs from '../static/paragraphs';

class ArticleWithWidgetAndFeed extends React.Component {
  state = {
    widgetLoaded: false,
    viewId: new Date().getTime().toString(),
  };

  setWidgetLoaded() {
    this.setState({widgetLoaded: true});
  }

  render() {
    return (
      <View>
        <BackButton onPress={e => this.props.back()} title="Back" />
        <ScrollView>
          <Header>Here's a Taboola Widget and Feed</Header>
          <StyledText>{paragraphs[0]}</StyledText>
          <StyledText>{paragraphs[1]}</StyledText>
          <StyledText>{paragraphs[2]}</StyledText>
          <Widget
            viewId={this.state.viewId}
            onDidLoad={e => {
              this.setWidgetLoaded()
            }}
          />
          <StyledText>{paragraphs[1]}</StyledText>
          {/* this tells the component to only render the Feed once the widget has been rendered.
					    Doing this and passing both the widget and feed the same viewId will prevent duplication of ads */}
          {this.state.widgetLoaded && <Feed viewId={this.state.viewId} />}
        </ScrollView>
      </View>
    );
  }
}

ArticleWithWidgetAndFeed.propTypes = {back: PropTypes.func.isRequired};

export default ArticleWithWidgetAndFeed;
