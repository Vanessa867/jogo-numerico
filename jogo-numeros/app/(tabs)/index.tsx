import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function App() {
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');
  const [generatedNumber, setGeneratedNumber] = useState<number | null>(null);

  const generateRandomNumber = () => {
    const min = parseInt(minValue, 10);
    const max = parseInt(maxValue, 10);
    if (min < max) {
      setGeneratedNumber(Math.floor(Math.random() * (max - min + 1)) + min);
    }
  };

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbu5sjnhDrRmyKLvizk8TxYLH-EHZnGx47pg&s' }} 
        style={styles.image} 
      />
      
      <Text style={styles.title}>Gerador de Números</Text>

      <TextInput
        style={styles.input}
        placeholder="Mínimo"
        keyboardType="numeric"
        value={minValue}
        onChangeText={setMinValue}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Máximo"
        keyboardType="numeric"
        value={maxValue}
        onChangeText={setMaxValue}
      />

      <TouchableOpacity onPress={generateRandomNumber} style={styles.button}>
        <Text style={styles.buttonText}>Gerar</Text>
      </TouchableOpacity>

      {generatedNumber !== null && (
        <Text style={styles.result}>Número: {generatedNumber}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7D1D1', // Fundo suave
    padding: 20,
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderColor: '#FFB6C1', // Borda mais suave
    borderWidth: 5,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF69B4', // Rosa quente
    marginBottom: 25,
  },
  input: {
    width: '80%',
    height: 45,
    borderColor: '#FFB6C1', 
    borderWidth: 1.5,
    borderRadius: 10,
    marginBottom: 20,
    paddingLeft: 12,
    fontSize: 16,
    backgroundColor: '#FFF',
  },
  button: {
    width: '80%',
    paddingVertical: 12,
    backgroundColor: '#FF69B4', // Cor de rosa quente
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  result: {
    fontSize: 22,
    color: '#FF1493', // Rosa intenso
    fontWeight: '600',
    marginTop: 15,
  },
});
