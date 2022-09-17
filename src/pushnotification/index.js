import OneSignal from 'react-native-onesignal';
function pushNotification(){
  OneSignal.setLogLevel(6, 0)
  OneSignal.setAppId('ebe89988-f3e2-40b2-959c-8079eabc32b7');
  
  OneSignal.setNotificationOpenedHandler(notification => {
    console.log("OneSignal: notification opened:", notification);
  })
}
export default pushNotification