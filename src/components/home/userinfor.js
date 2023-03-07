import { View, StyleSheet, Text,ScrollView } from 'react-native';
import { Dimensions } from 'react-native';
import ReadMore from 'react-native-read-more-text';


export default function UserInfor(props) {
    const { description,Keyindex } = props
    return (
        <View style={styles.information}>
        <ScrollView showsVerticalScrollIndicator={false}
  showsHorizontalScrollIndicator={false} style={styles.fotter}>
  <View >
        <Text style={{fontSize:22,color:"black",marginBottom:5}}>a dinh vlog</Text>
        </View>
            <ReadMore 
           key={Keyindex}
                numberOfLines={2}
                
                renderTruncatedFooter={(handlePress) => { return <Text onPress={handlePress} style={{ color: 'grey' }}>show more</Text> }}
                renderRevealedFooter={(handlePress) => { return <Text onPress={handlePress} style={{ color: 'grey' }}>show less</Text> }}
            >
                <Text style={styles.infortext}>{description}</Text>
            </ReadMore>
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
