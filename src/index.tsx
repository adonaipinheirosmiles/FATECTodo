import React from 'react';
import { StatusBar } from 'react-native';

// Screens
import TodoList from './screens/TodoList';

export default function App() {
  return (
    <>
      <StatusBar 
        barStyle="light-content" 
        translucent 
        backgroundColor="transparent" 
      />
      <TodoList />
    </>
  )
}