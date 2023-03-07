import { View ,StyleSheet } from "react-native";
import { Dimensions } from 'react-native';
import  Ionicons   from  'react-native-vector-icons/Ionicons';

export default function MenuVideo(){

    return(
        <View style={styles.container}>
            <View style={styles.item}>
                <Ionicons name='ios-home-outline' size={30} color={"white"} />
            </View>
            <View style={styles.item}>
                <Ionicons name='heart-sharp' size={30} color={"white"} />
            </View>
            <View style={styles.item}>
                <Ionicons name='chatbubble-ellipses-outline' size={30} color={"white"} />
            </View>
            <View style={styles.item}>
                <Ionicons name='share-social' size={30} color={"white"} />
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
container:{
flex:1,
width:200,
flexDirection:"column",
zIndex:10,
position: 'absolute',
left: Dimensions.get('window').width-50,  
top: Dimensions.get('window').height/2-100, 
height:Dimensions.get('window').height/2,
},
item:{
    flex:1,
}
})