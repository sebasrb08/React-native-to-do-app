import { useContext } from 'react'
import {View,Pressable, Text } from 'react-native'
import { TaskContext } from "../context/TaskContext"
import { DeleteIcon } from './Icons'

export default function DeleteTask({index}) {

    const {setListTask} = useContext(TaskContext)

    const handleOnPress=()=>{
        setListTask((prevTasks) => prevTasks.filter((_, i) => i !== index));
    }

  return (
    <View>
        <Pressable
        onPress={handleOnPress}
        >
            <DeleteIcon/>
        </Pressable>
    </View>
  )
}
