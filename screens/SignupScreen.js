import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
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
      <Button title="Signup" onPress={() => navigation.navigate('Main')} />
      <Button
        title="Already have an account? Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fdfcf9',
    padding: 20,
  },
  title: {
    fontSize: width * 0.07, // Adjust font size based on screen width
    marginBottom: 20,
    color: '#a1948c',
  },
  input: {
    height: 40,
    borderColor: '#a1948c',
    borderWidth: 1,
    marginBottom: 10,
    width: '80%',
    paddingLeft: 8,
    borderRadius: 8,
  },
});
