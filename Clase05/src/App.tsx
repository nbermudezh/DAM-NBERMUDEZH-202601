import React from 'react';
import { SafeAreaView } from 'react-native';
import { styles } from './App.style';
import { CountScreen } from './index';

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <CountScreen />
    </SafeAreaView>
  );

};

export default App;