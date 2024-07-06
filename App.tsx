import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, FlatList } from 'react-native';
import Title from './components/Title'
import AddToList, {Task} from './components/AddToList';
import TaskItem from './components/TaskItem'
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './db/FirebaseConfig';
import { deleteTaskDB, setStatus } from './db/FirebaseHelper';

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  
  const deleteTask = (id: string) => {
    //setTasks(tasks.filter(task => task.id !== id))
    deleteTaskDB(id)
  }

  const toggleTaskStatus = (id: string) => {
    const updatedTasks = tasks.map(task => 
      task.id === id ? {...task, status: !task.status} : task
      
      )
      setTasks(updatedTasks)
  }

  useEffect( () => {
    const listRef = collection(db, 'todo-list')

    const subscriber = onSnapshot(listRef, {
      next: (snapshot) => 
        {
          console.log("Fetching data from fs")
        const localTodoList: Task[] = []
        snapshot.docs.forEach( (listItem) => 
          {
            localTodoList.push(
            {
              id:listItem.id,
              title: listItem.data()?.title,
              status: listItem.data()?.status
            })
          })
          setTasks(localTodoList)
      }
    })
    return () => subscriber()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Title/>
      <StatusBar style="auto" />
      
      <View style={styles.listContainer}>
      <FlatList data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
      <TaskItem id={item.id} title={item.title} status={item.status} deleteTask={deleteTask} toggleTaskStatus={toggleTaskStatus}></TaskItem>)}
      contentContainerStyle={styles.list}>
      </FlatList>
      </View>

      <AddToList tasks={tasks} setTasks={setTasks}></AddToList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start'
  },
  listContainer: {
    flex: 0.8,
  },
  list:{
    flexGrow: 1,
  }
});
