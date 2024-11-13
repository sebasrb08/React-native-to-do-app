import { View,Text ,StyleSheet } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AddTask from "./AddTask";

export function Main() {
    const insets = useSafeAreaInsets();

  return (
    <View style={{marginTop:insets.top, marginBottom:insets.bottom, paddingLeft:insets.left, paddingRight:insets.right, justifyContent:'center'}}>
        <View  style={{alignItems:'center',justifyContent:'center',marginTop:80}}>
          <Text style={styles.title}>To do</Text>
        </View>
        <View style={{marginTop:20}} >
          <AddTask/>
        </View>
    </View>
  )
}


const styles=StyleSheet.create({
    title:{
        fontSize:40,
        textAlign:'center',
        color:'#300c08'
    }
})