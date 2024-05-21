import React, { useState } from 'react';
import { SafeAreaView, TextInput, TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Signin({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Sign In</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={()=>navigation.navigate('Details')} style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f7fafc', // equivalent to bg-gray-100
    padding: 20, // equivalent to p-5
  },
  innerContainer: {
    width: '100%',
    maxWidth: 320, // approximate max-width for max-w-xs
    alignSelf: 'center', // equivalent to mx-auto
  },
  title: {
    fontSize: 24, // equivalent to text-2xl
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24, // equivalent to mb-6
  },
  input: {
    backgroundColor: 'white', // equivalent to bg-white
    padding: 16, // equivalent to p-4
    borderRadius: 8, // equivalent to rounded-lg
    marginBottom: 12, // equivalent to mb-3 for first input and mb-6 for second input
    borderColor: '#e2e8f0', // equivalent to border-gray-300
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#3b82f6', // equivalent to bg-blue-500
    padding: 16, // equivalent to p-4
    borderRadius: 8, // equivalent to rounded-lg
  },
  buttonText: {
    color: 'white', // equivalent to text-white
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
