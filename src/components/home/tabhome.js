2
import HomePage from './Home';
import setting from '../setting/setting';

import * as React from 'react';
import { View, useWindowDimensions ,Dimensions} from 'react-native';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';

import { useDispatch } from 'react-redux';

const renderScene = SceneMap({
  first: HomePage,
  second: setting,
});
function TabHome(props) {
  const dispatch =useDispatch()
  const layout = useWindowDimensions();
  
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

  return (
   
    <TabView
     onLayout={(event) => {
    
    var {x, y, width, height} = event.nativeEvent.layout;

    console.log(width,height)
    console.log(Dimensions.get('window').height - 110)
  }}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: 20,  }}
      render
      renderTabBar={props => <TabBar {...props} style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}/>}
    />
  );

}
export default TabHome;
