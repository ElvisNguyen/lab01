import React, { useState } from 'react';
import { View, Text, Switch, Button, StyleSheet} from 'react-native';
import { setStatus } from '../db/FirebaseHelper';

interface Props {
    id: string;
    title: string;
    status: boolean;
    deleteTask: (id: string) => void;
    toggleTaskStatus: (id: string) => void;
}

const TaskItem: React.FC<Props> = ({id, title, status, deleteTask, toggleTaskStatus}) => {
    const [complete, setComplete] = useState(status)


    const handleToggle = () => {
        setComplete(!complete)
        setStatus(id, !complete)
        toggleTaskStatus(id)
    }
return(
    <View style={styles.task}>
        <Text style={styles.title}>{status ? '[Complete]' : '[Not complete]'} {title}</Text>
        <View style={styles.buttonSwitchContainer}>
        <Switch
        value={complete}
        onValueChange={handleToggle}
        style={styles.switch}
        ></Switch>
        <View style={styles.button}>
        <Button title="Delete task"
        color="#3489eb"
        onPress={() => deleteTask(id)}/>
        </View>
        </View>
    </View>
)
}

const styles = StyleSheet.create( {
    task: {
        flex: 1,
        borderWidth: 2,
        borderRadius: 10,
        margin: 8,
        flexDirection: 'row',
        backgroundColor: '#d1bce0',
        alignItems: 'center',
    },
    title: {
        flex: 0.95,
        fontWeight: 'bold',
        fontSize: 16,
        padding: 10,
        paddingHorizontal: 20,
    },
    buttonSwitchContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    switch: {
        flex: 0.5,
        paddingRight: 0,
    },
    button: {
        flex: 0.5,
        padding: 10,
    }

})

export default TaskItem;