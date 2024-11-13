import { useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { TaskContext } from "../context/TaskContext"
import DeleteTask from "./DeleteTask";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function GetTask() {
    const {listTask} = useContext(TaskContext)

  return (
    <View style={styles.task_container}>
        {
          listTask == null?"":
        (<FlatList
            data={listTask}
            renderItem={({item,index })=> 
            (
            <View key={index} style={styles.task}>
              <BouncyCheckbox fillColor= "#300c08"    />
              <Text style={{color:'#300c08'}}>{item}</Text>
              <DeleteTask index={index}/>
            </View>
            )}
        />
        )}
    </View>
  )
}

const styles=StyleSheet.create({
  task_container:{
      height:'80%',
      width:'90%'
  },
  task:{
      padding:15,
      flexDirection:'row',
      gap:10,
      justifyContent:'space-between',
      marginBottom:10,
      backgroundColor:'#e2e2e2',
      borderRadius:8
  }

})
