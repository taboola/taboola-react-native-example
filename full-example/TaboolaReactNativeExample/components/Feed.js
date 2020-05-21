import React, { useState } from 'react';
import { Dimensions, Platform } from 'react-native';
import RNTaboolaView from '@taboola/react-native-taboola';
import PropTypes from 'prop-types';

const Feed = (props) => {
  // Set the publisher according to the OS. 
	// Taboola will provide a publisher id for android and one for ios.
	// Here we are just using the test account for both.
	const publisher = Platform.OS === 'ios' ? 'sdk-tester' : 'sdk-tester';

  // Get the dimensions of the screen and set the feed height to twice the screen height
  const feedHeight = Dimensions.get('window').height * 2;
  const [height, setHeight] = useState(feedHeight);

  return (
    <RNTaboolaView
      viewID={props.viewID}
      mode={props.mode}
      publisher={publisher}
      pageType={props.pageType}
      pageUrl={props.pageUrl}
      placement={props.placement}
      viewId={props.viewId}
      targetType={props.targetType}
      interceptScroll={true}
      style={{height, width: '100%'}}
      onDidLoad={event => {}}
      onDidFailToLoad={event => {
        // collapse the taboola view if content fails to load
        setHeight(0);
      }}
      onOrganicItemClick={event => {
				// implement logic for opening content in-app here
				console.warn('Organic item was clicked!');
				return true;
			}}
      onAdItemClick={event => {}}
    />
  );
};

Feed.defaultProps = {
  mode: 'thumbs-feed-01',
  pageType: 'article',
  pageUrl: 'https://blog.taboola.com',
  placement: 'Feed without video',
  targetType: 'mix',
};

Feed.propTypes = {
  mode: PropTypes.string.isRequired,
  pageType: PropTypes.string.isRequired,
  pageUrl: PropTypes.string.isRequired,
  placement: PropTypes.string.isRequired,
  targetType: PropTypes.string.isRequired,
  viewId: PropTypes.string,
};

export default Feed;
