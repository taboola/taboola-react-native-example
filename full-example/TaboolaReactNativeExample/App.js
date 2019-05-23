import React from 'react';
import { ScrollView } from 'react-native';
import ArticleWithWidget from './components/ArticleWithWidget';
import ArticleWithWidgetInFlatList from './components/ArticleWithWidgetInFlatList';
import ArticleWithFeed from './components/ArticleWithFeed';
import ArticleWithWidgetAndFeed from './components/ArticleWithWidgetAndFeed';
import HomePage from './components/HomePage';
import WidgetForm from './components/WidgetForm';
import FeedForm from './components/FeedForm';
import Container from './components/styles/Container';

class App extends React.Component {
  state = {
    currentPage: 'home',
  };

  back() {
    this.setState({ currentPage: 'home' });
  }

  setCurrentPage(currentPage) {
    this.setState({ currentPage });
  }

  renderSwitch() {
    switch (this.state.currentPage) {
      case 'WidgetDemo':
        return <ArticleWithWidget back={() => this.back()} />;
      case 'WidgetInFlatListDemo':
        return <ArticleWithWidgetInFlatList back={() => this.back()} />;
      case 'FeedDemo':
        return <ArticleWithFeed back={() => this.back()} />;
      case 'WidgetAndFeedDemo':
        return <ArticleWithWidgetAndFeed back={() => this.back()} />;
      case 'TestWidget':
        return <WidgetForm back={() => this.back()} />;
      case 'TestFeed':
        return <FeedForm back={() => this.back()} />;
      default:
        return <HomePage setCurrentPage={page => this.setCurrentPage(page)} />;
    }
  }

  render() {
    return (
      <Container>
        <ScrollView>{this.renderSwitch()}</ScrollView>
      </Container>
    );
  }
}

export default App;
