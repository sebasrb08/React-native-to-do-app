import { View,StyleSheet } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Main } from "../components/Main";

export default function App() {
    const insets = useSafeAreaInsets();

  return (
        <View style={styles.container} >
            <Main/>
        </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fffaf2",
        alignItems:'center'
    }
})