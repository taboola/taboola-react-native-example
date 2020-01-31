import React from 'react';
import {View, ScrollView, FlatList} from 'react-native';
import PropTypes from 'prop-types';
import Widget from './Widget';
import BackButton from './styles/BackButton';
import StyledText from './styles/StyledText';
import Header from './styles/Header';
import paragraphs from '../static/paragraphs';
import {YellowBox} from 'react-native';

const ArticleWithWidgetInFlatList = props => {
  YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested', // TODO: Remove when fixed
  ]);
  const p1 = <StyledText key="p1">{paragraphs[0]}</StyledText>;

  const p2 = <StyledText key="p2">{paragraphs[1]}</StyledText>;
  return (
    <View>
      <BackButton onPress={e => props.back()} title="Back" />
      <ScrollView>
        <Header>Here's a Taboola Widget</Header>
        <FlatList
          style={{flex: 1}}
          data={[{key: 'p1'}, {key: 'p2'}, {key: 'taboola'}]}
          renderItem={({item}) => {
            switch (item.key) {
              case 'p1':
                return p1;
              case 'p2':
                return p2;
              case 'taboola':
                return <Widget />;
              default:
                return null;
            }
          }}
        />
      </ScrollView>
    </View>
  );
};

ArticleWithWidgetInFlatList.propTypes = {back: PropTypes.func.isRequired};

export default ArticleWithWidgetInFlatList;
