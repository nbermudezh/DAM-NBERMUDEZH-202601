import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { styles } from './CountScreen.style';

const CountScreen = () => {

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(0);

  const n1 = Number(num1);
  const n2 = Number(num2);

  const add = () => setResult(n1 + n2);
  const sub = () => setResult(n1 - n2);
  const mul = () => setResult(n1 * n2);
  const div = () => setResult(n1 / n2);

  return (

    <View style={styles.container}>

      <TextInput
        placeholder="Número 1"
        keyboardType="numeric"
        style={styles.input}
        value={num1}
        onChangeText={setNum1}
      />

      <TextInput
        placeholder="Número 2"
        keyboardType="numeric"
        style={styles.input}
        value={num2}
        onChangeText={setNum2}
      />

      <View style={styles.buttonContainer}>

        <TouchableOpacity style={styles.button} onPress={add}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={sub}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={mul}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={div}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>

      </View>

      <Text style={styles.result}>
        Resultado: {result}
      </Text>

    </View>
  );
};

export default CountScreen;