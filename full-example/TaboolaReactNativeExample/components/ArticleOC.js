import React, {  useState  } from 'react';
import PropTypes from 'prop-types';
import {View, Text, Dimensions} from 'react-native';
import paragraphs from '../static/paragraphs';
import StyledText from "./styles/StyledText";
import BackButton from "./styles/BackButton";
import Header from "./styles/Header";

import RNTaboolaView from '@taboola/react-native-taboola';

const ArticleOC = props => {


    const feedHeight = Dimensions.get('window').height*2
    const [height, setHeight] = useState(feedHeight)
    const [defClick, setDefClick] = useState('')

    return (

        <View>
          <BackButton
              onPress={e =>  props.back()} title="Back"
          />

          <Header>Here's a Taboola OC</Header>

          <StyledText style={{textAlign: 'justify'}}>{paragraphs[1]}</StyledText>
            <View>
                <Text style={{backgroundColor:"green", padding: 25}}>You clicked on url - {defClick}</Text>
            </View>
      <RNTaboolaView
          mode="thumbnails-feed"
          publisher="sdk-tester"
          pageType="article"
          pageUrl="https://blog.taboola.com"
          placement="Feed without video"
          targetType="mix"
          interceptScroll={true}
          taboolaHandleOrganicClick = {false}
          viewId= "12345"
        style={{ height}}
          onDidLoad={event => {
          }}
          onDidFailToLoad={event => {
              setHeight(0);
          }}
          onItemClick={event => {
              setDefClick((event.nativeEvent.clickUrl));
              console.warn('Organic item was clicked!  - ' + event.nativeEvent.clickUrl );
          }}

      />

      </View>

    );

};
ArticleOC.propTypes = { back: PropTypes.func.isRequired };

export default ArticleOC;
