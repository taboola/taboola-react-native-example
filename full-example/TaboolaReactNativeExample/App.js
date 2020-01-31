import React from 'react';
import { ScrollView,  Text } from 'react-native';
import ArticleWithWidget from './components/ArticleWithWidget';
import ArticleWithWidgetInFlatList from './components/ArticleWithWidgetInFlatList';
import ArticleWithFeed from './components/ArticleWithFeed';
import ArticleWithFeedVideo from './components/ArticleWithFeedVideo';
import ArticleWithWidgetAndFeed from './components/ArticleWithWidgetAndFeed';
import ArticleWithWidgetAndFeedVideo from './components/ArticleWithWidgetAndFeedVideo';
import HomePage from './components/HomePage';
import WidgetForm from './components/WidgetForm';
import FeedForm from './components/FeedForm';
import Container from './components/styles/Container';
import OnlyFeed from './components/OnlyFeed';
import OnlyFeedVideo from './components/OnlyFeedVideo';

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
            case 'OnlyFeed':
                return <OnlyFeed back={() => this.back()} />;
            case 'OnlyFeedVideo':
                return <OnlyFeedVideo back={() => this.back()} />;
            case 'FeedDemo':
                return <ArticleWithFeed back={() => this.back()} />;
            case 'FeedDemoVideo':
                return <ArticleWithFeedVideo back={() => this.back()} />;
            case 'WidgetAndFeedDemo':
                return <ArticleWithWidgetAndFeed back={() => this.back()} />;
            case 'WidgetAndFeedDemoVideo':
                return <ArticleWithWidgetAndFeedVideo back={() => this.back()} />;
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
                <ScrollView>
                    <Text style={{paddingTop:15, textAlign: 'center', fontSize: 10 }}>Taboola SDK-2.3.8 iOS / 2.3.7 Android;  </Text>
                    <Text style={{paddingTop:10, textAlign: 'center', fontSize: 10 }}> Taboola React Native Plugin  - 1.2.2; </Text>
                    <Text style={{paddingTop:10, textAlign: 'center', fontSize: 10 }}>React Native version 0.59.10; </Text>
                    {this.renderSwitch()}
                </ScrollView>

            </Container>
        );
    }
}

export default App;
