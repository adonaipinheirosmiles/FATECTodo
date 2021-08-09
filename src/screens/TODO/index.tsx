import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  Platform, 
  TouchableOpacity, 
  FlatList, 
  Alert, 
  TextInput, 
  Dimensions, 
  StatusBar
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import GradientView from 'react-native-linear-gradient';

// Icon
import Icon from 'react-native-vector-icons/FontAwesome5';

// Image
import { logo } from '../../assets/images';

// Type
type ItemsType = {
  description: string;
  isDone: boolean;
}

export function TODO() {
  const [newTask, setTask] = useState<string>('');
  const [items, setItems] = useState<ItemsType[]>([]);

  const addItem = () => {
    if (newTask !== '') {
      const listItems = items;
      items.push({
        description: newTask,
        isDone: false
      })
      setItems([...listItems]);
      setTask('');
    } else {
      Alert.alert('Poxa, parece que você não quer fazer nada :(')
    }
  }

  const checkItem = (id: number) => {
    const listItems = items;
    listItems[id].isDone = !listItems[id].isDone;
    setItems([...listItems]);
  }

  const deleteItem = (id: number) => {
    Alert.alert('Atenção', 'Deseja mesmo remover este item?', [
      {
        text: "Apagar",
        onPress: () => {
          const listItems = items;
          listItems.splice(id, 1);
          setItems([...listItems]);
          Alert.alert("Item removido com sucesso!");
        },
        style: "destructive",
      },
      {
        text: "Cancelar",
        style: "cancel",
      },
    ],)
  }

  const Item = ({description, isDone, id}: ItemsType & {id: number}) => {
    return (
      <TouchableOpacity 
        onLongPress={()=>deleteItem(id)} 
        onPress={()=>checkItem(id)} 
        activeOpacity={0.7} 
        style={styles.todoItemArea}
      >
        <View style={styles.todoItemTextAndIconArea}>
          <Icon name="tasks" size={24} />
          <View style={styles.todoItemTextArea}>
            <Text style={styles.todoItemDetail}>{description}</Text>
          </View>
        </View>
        <View style={styles.todoItemCheck}>
          {isDone && <Icon name="check" />}
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <GradientView colors={['#cd1e18', '#941611']} style={styles.header}>
        <Image resizeMode="contain" style={styles.headerImg} source={logo} />
        <Text style={styles.headerText}>Lista de Tarefas</Text>
      </GradientView>
      <View style={styles.addArea}>
        <TextInput
          style={styles.addTextInput}
          placeholder="Digite a tarefa"
          value={newTask}
          onChangeText={text => setTask(text)}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={addItem}
        >
          <Text style={styles.addButtonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
      <FlatList 
        data={items}
        contentContainerStyle={{paddingTop: 5, paddingBottom: 40}}
        renderItem={({index, item}) => <Item {...item} id={index} />}
        keyExtractor={(_, index) => String(index)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc6'
  },
  header: {
    paddingTop: getStatusBarHeight(Platform.OS !== 'android'),
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImg: {
    height: 40
  },
  headerText: {
    marginTop: 5,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  todoItemArea: {
    backgroundColor: '#fff',
    marginHorizontal: 5,
    marginBottom: 5,
    padding: 10,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  todoItemTextArea: {
    marginLeft: 10,
  },
  todoItemTextAndIconArea: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  todoItemDetail: {
    fontSize: 16,
    maxWidth: Dimensions.get('screen').width - 80
  },
  todoItemCheck: {
    borderColor: '#941611',
    borderWidth: 2,
    padding: 2.5,
    borderRadius: 4,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addArea: {
    backgroundColor: '#72110d',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  addTextInput: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 4,
    marginRight: 10
  },
  addButton: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 14,
  }
})