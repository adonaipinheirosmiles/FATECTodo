import React from 'react';
import { Image, Text, View } from 'react-native';
import GradientView from 'react-native-linear-gradient';

import { logo } from '../../assets/images';

import styles from './styles';

const Header = () => {
  return (
    <GradientView colors={['#cd1e18', '#941611']} style={styles.header}>
      <Image resizeMode="contain" style={styles.headerImg} source={logo} />
      <Text style={styles.headerText}>Lista de Tarefas</Text>
    </GradientView>
  )
}

export default Header;