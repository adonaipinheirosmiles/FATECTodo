import {Platform, StyleSheet} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

// Logo
import {logo} from '../../assets/images';

const styles = StyleSheet.create({
  header: {
    paddingTop: getStatusBarHeight(Platform.OS !== "android"),
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
  }
})

export default styles;

export {
  logo
}