import React from 'react';
import {NativeModules, ScrollView, Text} from 'react-native';
import ArticleWithWidget from './components/ArticleWithWidget';
import ArticleWithWidgetInFlatList from './components/ArticleWithWidgetInFlatList';
import ArticleWithFeed from './components/ArticleWithFeed';
import ArticleWithWidgetAndFeed from './components/ArticleWithWidgetAndFeed';
import HomePage from './components/HomePage';
import WidgetForm from './components/WidgetForm';
import FeedForm from './components/FeedForm';
import Container from './components/styles/Container';
import ArticleWithFeedDark from "./components/ArticleWithFeedDark";
import ArticleWithWidgetDark from "./components/ArticleWithWidgetDark";
import ArticleWithWidgetAndFeedDark from "./components/ArticleWithWidgetAndFeedDark";
import ArticleOC from "./components/ArticleOC";

class App extends React.Component {
    state = {
        currentPage: 'home',
        defReset: false,
    };

    back() {
        this.setState({ currentPage: 'home'});

    }


    setCurrentPage(currentPage) {
        this.setState({ currentPage });
    }

    renderSwitch() {
        switch (this.state.currentPage) {
            case 'WidgetDemo':
                return <ArticleWithWidget back={() => this.back()} />;
            case 'WidgetDemoDark':
                return <ArticleWithWidgetDark back={() => this.back()} />;
            case 'WidgetInFlatListDemo':
                return <ArticleWithWidgetInFlatList back={() => this.back()} />;
            case 'FeedDemo':
                return <ArticleWithFeed back={() => this.back()} />;
            case 'FeedDark':
                return <ArticleWithFeedDark back={() => this.back()} />;
            case 'WidgetAndFeedDemo':
                return <ArticleWithWidgetAndFeed back={() => this.back()} />;
            case 'WidgetAndFeedDemoDark':
                return <ArticleWithWidgetAndFeedDark back={() => this.back()} />;
            case 'ArticleOC':
                return <ArticleOC back={() => this.back()}   />;
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
                    <Text style={{paddingTop:15, textAlign: 'center', fontSize: 10 }}>Taboola SDK-2.8.1 iOS / 2.8.1 Android;  </Text>
                    <Text style={{paddingTop:10, textAlign: 'center', fontSize: 10 }}> Taboola React Native Plugin  - 2.1.0; </Text>
                    <Text style={{paddingTop:10, textAlign: 'center', fontSize: 10 }}>React Native version 0.59.10; </Text>
                    {this.renderSwitch()}
                </ScrollView>

            </Container>
        );
    }
}

export default App;
