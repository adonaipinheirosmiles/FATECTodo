import {Dimensions, StyleSheet} from 'react-native';

// Icon
import Icon from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc6'
  },
  addArea: {
    backgroundColor: '#72110d',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
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
    alignItems: 'center'
  },
  addButtonText: {
    color:'#fff',
    fontSize: 14
  },
  taskItemArea: {
    backgroundColor: '#fff',
    marginHorizontal: 5,
    marginBottom: 5,
    padding: 10,
    borderColor: '#0006',
    borderWidth: 1,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  taskItemTextAndIconArea: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskItemTextArea: {
    marginLeft: 10
  },
  taskItemDescription: {
    fontSize: 16,
    maxWidth: Dimensions.get('screen').width - 80
  },
  taskItemCheck: {
    borderColor: '#0009',
    borderWidth: 2,
    padding: 2.5,
    borderRadius: 4,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default styles;

export {
  Icon
}