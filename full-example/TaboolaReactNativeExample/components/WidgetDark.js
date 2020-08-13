import React, {useState} from 'react';
import PropTypes from 'prop-types';

import RNTaboolaView from '@taboola/react-native-taboola';

const WidgetDark = props => {
  const [height, setHeight] = useState(0);

  return (
    <RNTaboolaView
      darkMode={true}
      mode={props.mode}
      publisher={props.publisher}
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

WidgetDark.defaultProps = {
  mode: 'alternating-widget-1x2',
  publisher: 'sdk-tester-demo',
  pageType: 'article',
  pageUrl: 'https://blog.taboola.com',
  placement: 'Mid Article',
  targetType: 'mix',
  //viewID: '12345',
  viewID: new Date().getTime().toString(),
  setBackgroundColor: '',
    onDidLoad: () => {},
};

WidgetDark.propTypes = {
  mode: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  pageType: PropTypes.string.isRequired,
  pageUrl: PropTypes.string.isRequired,
  placement: PropTypes.string.isRequired,
  targetType: PropTypes.string.isRequired,
  viewID: PropTypes.string,
    setBackgroundColor: PropTypes.string,
};

export default WidgetDark;
