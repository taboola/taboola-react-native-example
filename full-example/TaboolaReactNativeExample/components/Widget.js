import React, {useState} from 'react';
import { Platform } from 'react-native';
import PropTypes from 'prop-types';

import RNTaboolaView from '@taboola/react-native-taboola';

const Widget = props => {
    // Set the publisher according to the OS.
    // Taboola will provide a publisher id for android and one for ios.
    // Here we are just using the test account for both.
    const publisher = Platform.OS === 'ios' ? 'sdk-tester-demo' : 'sdk-tester-demo';

  const [height, setHeight] = useState(0);

  return (
    <RNTaboolaView
      mode={props.mode}
      publisher={publisher}
      pageType={props.pageType}
      pageUrl={props.pageUrl}
      placement={props.placement}
      targetType={props.targetType}
      viewID={props.viewID}
      style={{
        height,
        width: '100%',
        backgroundColor: props.setBackgroundColor,
      }}
      onDidLoad={event => {
          // This lets us implement other logic into this callback via props
          props.onDidLoad(event);
        // Set the height of the widget dynamically
        setHeight(parseInt(event.nativeEvent.height, 10));
      }}
      onDidFailToLoad={event => {
        setHeight(0);
      }}
      onItemClick={event => {}}
    />
  );
};

Widget.defaultProps = {
  mode: 'alternating-widget-without-video-1x4',
  pageType: 'article',
  pageUrl: 'https://blog.taboola.com',
  placement: 'Mid Article',
  targetType: 'mix',
  viewID: new Date().getTime().toString(),
  setBackgroundColor: '',
    onDidLoad: () => {},

};

Widget.propTypes = {
  mode: PropTypes.string.isRequired,
  pageType: PropTypes.string.isRequired,
  pageUrl: PropTypes.string.isRequired,
  placement: PropTypes.string.isRequired,
  targetType: PropTypes.string.isRequired,
  viewID: PropTypes.string,
    setBackgroundColor: PropTypes.string,

};

export default Widget;
