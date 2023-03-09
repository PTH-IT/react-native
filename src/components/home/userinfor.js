import { View, StyleSheet, Text,ScrollView } from 'react-native';
import { Dimensions } from 'react-native';
import ViewMoreText from 'react-native-view-more-text/index';


export default function UserInfor(props) {
    const { description,Keyindex } = props
  
    return (
        <View style={styles.information}  key={Keyindex}>
        <ScrollView showsVerticalScrollIndicator={false} removeClippedSubviews={false}
  showsHorizontalScrollIndicator={false} style={styles.fotter}>
  <View >
        <Text style={{fontSize:22,color:"black",marginBottom:5}}>a dinh vlog</Text>
        </View>
            <ViewMoreText 
          onReady={this._handleTextReady}
          numberOfLines={3}
                renderViewMore={(onPress)=>{
        return(
          <Text onPress={onPress}>View more</Text>
        )}}
          renderViewLess={(onPress)=>{
        return(
          <Text onPress={onPress}>View less</Text>
        )}}
            >
                <Text style={styles.infortext}>{description}</Text>
            </ViewMoreText>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({

    information: {
        zIndex: 10,
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: Dimensions.get('window').width - 30,
        paddingRight: 20,
        paddingLeft: 20,
        height: "100%",
        maxHeight: "100%",
        flexDirection: 'column',

    },
    infortext: {
        color: 'white',
        fontSize: 17,
        width: Dimensions.get('window').width - 30,
    },
    fotter:{

        zIndex:100,
        position: 'absolute', bottom: 20, left: 20, elevation: 100,
    }
    
});
