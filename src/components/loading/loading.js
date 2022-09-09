import {View, ActivityIndicator, Dimensions} from 'react-native';
import React, {useEffect} from 'react';

function Loading(props) {
  let display = 'none'
  if (props.hasOwnProperty('display')){
    display = props.display
  }
  const windowWidth = Dimensions.get('window').width
  const windowHeight = Dimensions.get('window').height
  return (
    <View
      style={{
        zIndex: 1,
        justifyContent: 'center',
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: windowWidth,
        height: windowHeight,
        display: display,
      }}>
      <ActivityIndicator animating={true} size={70} />
    </View>
  );
}
export default Loading;
