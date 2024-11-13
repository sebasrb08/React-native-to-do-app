import { useState } from "react"
import { TextInput, StyleSheet,Text, Pressable,View } from "react-native"
import GetTask from "./GetTask"
import { TaskContext } from "../context/TaskContext"
import { PlusIcon } from "./Icons"

export default function AddTask() {
    
    const [task,setTask] = useState("")
    const [listTask,setListTask] =useState([])
    

    const handleOnPress=()=>{
        setListTask(prevList => [...prevList, task])
    }

  return (
    <TaskContext.Provider value={{listTask,setListTask}}>
        <View style={{flexDirection:"row" ,justifyContent:'center', alignItems:'center'}}>
            <TextInput
                onChangeText={setTask}
                value={task}
                placeholder="Task"
                style={styles.input}
            />
            <Pressable style={styles.boton} onPress={handleOnPress}>
                <PlusIcon/>
            </Pressable>
        </View>
        <View style={{justifyContent:'center', alignItems:'center'}}>

            <GetTask/>
        </View>


    </TaskContext.Provider>    
  )
}


const styles=StyleSheet.create({
    input:{
        width:'70%',
        height: 45,
        margin: 12,
        borderWidth: 1,
        borderColor:'#300c08',
        padding: 10,
        borderRadius:8
    },
    boton:{
        height: 45,
        width:'13%',
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#000',
        borderWidth:1,
        borderRadius:8, 
        padding:5,
        backgroundColor:'#300c08'
    }
})