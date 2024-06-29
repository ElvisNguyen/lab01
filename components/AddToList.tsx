import React, {useState} from 'react';
import { Keyboard, View, TextInput , StyleSheet, Button} from 'react-native';
import uuid from 'react-native-uuid'

export interface Task {
    id: string;
    title: string;
    status: boolean;
}

interface Props {
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    tasks: Task[];
}

const AddToList: React.FC<Props> = ({tasks, setTasks}) => {
    const [task, setTask] = useState<string>('')

    const addTask = () => {
        if(!task) {

        }
        else {
            setTasks([...tasks, {
                id: uuid.v4().toString(),
                title: task,
                status: false
            }])
            setTask('')
            Keyboard.dismiss()
        }
    };

return(
    <View style={styles.container}>
        <TextInput 
        style ={styles.inputBox} 
        placeholder='Enter task here' 
        value={task}
        onChangeText={(text) => setTask(text)}>

        </TextInput>
        <View style={styles.addButton}>
            <Button title="Add to list" onPress={addTask} color="#551A8B"/>
        </View>
        
    </View>)
}

const styles = StyleSheet.create( {
    container: {
        flex: 0.07,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButton: {
        flex: 0.5,
        paddingHorizontal: 10,
        backgroundColor: "FFF"
    },
    inputBox: {
        flex: 0.5,
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        paddingHorizontal: '20%',
        marginHorizontal: 5,
    }
})

export default AddToList;