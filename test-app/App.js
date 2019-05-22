
//Example - 1

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';
import RNTaboolaView from '@taboola/react-native-taboola';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Start Taboola View!</Text>
        <FlatList
          style={{ flex:1 }}
          data={[{ key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }]}
          renderItem={({ item }) => (
            <RNTaboolaView
              mode='alternating-widget-without-video-1-on-1'
              publisher='sdk-tester'
              pageType='article'
              pageUrl='https://blog.taboola.com'
              placement='Mid Article'
              targetType='mix'
              scrollEnabled={false}
              style={{ height: 275, width: '100%' }}
              onDidLoad = {
                  (event) => {
                      console.warn('onDidLoad : ' + event.nativeEvent.placementName + '- height -: ' + event.nativeEvent.height);
                  }
              }
              onDidFailToLoad = {
                  (event) => {
                      console.warn('onRenderFail placementName: ' + event.nativeEvent.placementName);
                      console.warn('onRenderFail error: ' + event.nativeEvent.error);
                  }
              }
              onOrganicItemClick = {
                  (event) => {
                      console.warn('onOrganicItemClick ' + event.nativeEvent.itemId);
                      console.warn('url: ' + event.nativeEvent.clickUrl);
                      console.warn('name: ' + event.nativeEvent.placementName);
                  }
              }
              onAdItemClick = {
                  (event) => {
                      console.warn('onAdItemClick  ' + event.nativeEvent.itemId);
                      console.warn('url : ' + event.nativeEvent.clickUrl);
                      console.warn('name : ' + event.nativeEvent.placementName);
                  }
              }
            />
          )}
        />
        <Text style={styles.welcome}>End Taboola View!</Text>
        <View style={{ backgroundColor: '#ffffff' }}>
          <Text style={styles.welcome}>Welcom to React Native!</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
          <Text style={styles.instructions}>{instructions}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 35,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

//
// // Example - 2
//
// import React, { Component } from 'react';
// import { Platform, StyleSheet, Text, View} from 'react-native';
// import RNTaboolaView from '@taboola/react-native-taboola';
//
// const instructions = Platform.select({
//     ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//     android:
//         'Double tap R on your keyboard to reload,\n' +
//         'Shake or press menu button for dev menu',
// });
//
// type Props = {};
// export default class App extends Component<Props> {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text style={styles.welcome}>Start Taboola View!</Text>
//
//                 <RNTaboolaView
//                     mode='alternating-widget-without-video-1-on-1'
//                     publisher='sdk-tester'
//                     pageType='article'
//                     pageUrl='https://blog.taboola.com'
//                     placement='Mid Article'
//                     targetType='mix'
//                     scrollEnabled={false}
//                     style={{ height: 275, width: '100%' }}
//                     onDidLoad = {
//                         (event) => {
//                             console.warn('onDidLoad : ' + event.nativeEvent.placementName + '- height -: ' + event.nativeEvent.height);
//                         }
//                     }
//                     onDidFailToLoad = {
//                         (event) => {
//                             console.warn('onRenderFail placementName: ' + event.nativeEvent.placementName);
//                             console.warn('onRenderFail error: ' + event.nativeEvent.error);
//                         }
//                     }
//                     onOrganicItemClick = {
//                         (event) => {
//                             console.warn('onOrganicItemClick ' + event.nativeEvent.itemId);
//                             console.warn('url: ' + event.nativeEvent.clickUrl);
//                             console.warn('name: ' + event.nativeEvent.placementName);
//                         }
//                     }
//                     onAdItemClick = {
//                         (event) => {
//                             console.warn('onAdItemClick  ' + event.nativeEvent.itemId);
//                             console.warn('url : ' + event.nativeEvent.clickUrl);
//                             console.warn('name : ' + event.nativeEvent.placementName);
//                         }
//                     }
//                 />
//                 <Text style={styles.welcome}>End Taboola View!</Text>
//                 <View style={{ backgroundColor: '#ffffff' }}>
//                     <Text style={styles.welcome}>Welcom to React Native!</Text>
//                     <Text style={styles.instructions}>To get started, edit App.js</Text>
//                     <Text style={styles.instructions}>{instructions}</Text>
//                 </View>
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         //alignItems: 'center',
//         backgroundColor: '#F5FCFF',
//     },
//     welcome: {
//         fontSize: 20,
//         textAlign: 'center',
//         marginTop: 35,
//         marginBottom: 10
//     },
//     instructions: {
//         textAlign: 'center',
//         color: '#333333',
//         marginBottom: 5,
//     },
// });
