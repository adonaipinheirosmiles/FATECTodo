import React, { useState } from 'react';
import { 
  View, 
  Text,
  TextInput, 
  TouchableOpacity, 
  FlatList, 
  Alert 
} from 'react-native';

// Components
import Header from '../../components/Header';

// Assets
import styles, {Icon} from './styles';

// Type
type TasksType = {
  description: string;
  isDone: boolean;
}

const TodoList = () => {
  const [tasks, setTasks] = useState<TasksType[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  const addItem = () => {
    if (newTask !== '') {
      const listItems = tasks;
      listItems.push({
        description: newTask,
        isDone: false
      });
      setTasks([...listItems]);
      setNewTask('');
    } else {
      Alert.alert('Poxa, parece que você não quer fazer nada :(');
    }
  }

  const checkItem = (id: number) => {
    const listItems = tasks;
    listItems[id].isDone = !listItems[id].isDone;
    setTasks([...listItems]);
  }

  const deleteItem = (id: number) => {
    Alert.alert('Atenção', 'Deseja mesmo remover este item?', [
      {
        text: 'Apagar',
        onPress: () => {
          const listItems = tasks;
          listItems.splice(id, 1);
          setTasks([...listItems]);
          Alert.alert('Item foi removido com sucesso');
        }
      },
      {
        text: 'Cancelar',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.addArea}>
        <TextInput 
          value={newTask}
          onChangeText={text=>setNewTask(text)}
          style={styles.addTextInput} 
          placeholder="Digite a tarefa" 
        />
        <TouchableOpacity activeOpacity={0.7} onPress={addItem} style={styles.addButton}>
          <Text style={styles.addButtonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
      <FlatList 
        data={tasks}
        contentContainerStyle={{
          paddingTop: 5, paddingBottom: 40
        }}
        renderItem={
          ({index, item})=>(
            <TouchableOpacity
              onPress={()=>checkItem(index)}
              onLongPress={()=>deleteItem(index)}
              style={styles.taskItemArea}
              activeOpacity={0.7}
            >
              <View style={styles.taskItemTextAndIconArea}>
                <Icon name="tasks" size={24} color="#0009" />
                <View style={styles.taskItemTextArea}>
                  <Text style={styles.taskItemDescription}>{item.description}</Text>
                </View>
              </View>
              <View style={styles.taskItemCheck}>
                {item.isDone && <Icon name="check" color="green" />}
              </View>
            </TouchableOpacity>
          )
        }
        keyExtractor={(_, index)=>String(index)}
      />
    </View>
  )
}

export default TodoList;