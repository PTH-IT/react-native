import { View, StyleSheet ,Text} from 'react-native';
import React, { useEffect,useState } from 'react';
import Video from 'react-native-video';
import { Dimensions } from 'react-native';
import UserInfor from './userinfor'
import MenuVideo from './menuvideo'
function VideoHome(props) {
 
  const {videoUri ,description,isActive,Keyindex} = props
   return (
    <View style={styles.container}>
    <Video
     ref={(ref) => {
     this.player = ref
   }}  
    onBuffer={this.onBuffer}      
            source={{uri: videoUri}}
            style={styles.video}
            onError={(e) => console.log(e)}
            resizeMode={'cover'}
            repeat={true}
            paused={!isActive}
            ontim
          />
          <UserInfor description={description} Keyindex={Keyindex}/>
          <MenuVideo/>
    </View>
  )
}
export default VideoHome;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height - 110,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
