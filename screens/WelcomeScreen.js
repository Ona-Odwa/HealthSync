import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HealthSync</Text>

      {/* Email Input */}
      <TextInput
        placeholder="Enter your Email"
        style={styles.input}
        keyboardType="email-address"
      />

      {/* Password Input */}
      <Text style={styles.label}>Password</Text>
      <TextInput
        placeholder="Enter your Password"
        style={styles.input}
        secureTextEntry
      />

      {/* Remember Me and Forgot Password */}
      <View style={styles.flexRow}>
        <TouchableOpacity>
          <Text style={styles.checkbox}>Remember me</Text>
        </TouchableOpacity>
        <Text style={styles.span} onPress={() => navigation.navigate('ForgotPassword')}>
          Forgot password?
        </Text>
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Sign Up Option */}
      <Text style={styles.p}>
        Don't have an account? 
        <Text style={styles.span} onPress={() => navigation.navigate('Signup')}>
          Sign Up
        </Text>
      </Text>
      
      {/* Or With Section */}
      <Text style={styles.line}>Or With</Text>

      {/* Social Buttons */}
      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
          <Text style={styles.socialButtonText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, styles.appleButton]}>
          <Text style={styles.socialButtonText}>Apple</Text>
        </TouchableOpacity>
      </View>
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
    fontSize: width * 0.08,
    marginBottom: 20,
    color: '#5D3E8C',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#ecedec',
    borderRadius: 10,
    height: 50,
    width: '100%',
    marginBottom: 20,
    paddingLeft: 10,
    fontSize: 16,
  },
  label: {
    fontWeight: '600',
    color: '#151717',
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    fontSize: 14,
    color: '#151717',
  },
  span: {
    color: '#2d79f3',
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#151717',
    borderRadius: 10,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  p: {
    textAlign: 'center',
    color: 'black',
    fontSize: 14,
    margin: 5,
  },
  line: {
    textAlign: 'center',
    fontSize: 14,
    color: '#666',
    marginVertical: 10,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10,
  },
  socialButton: {
    width: '48%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  googleButton: {
    backgroundColor: '#4285F4',
  },
  appleButton: {
    backgroundColor: '#000',
  },
});


