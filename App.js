import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const CustomTextField = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,  // If you need a password input
  keyboardType = 'default', // You can change this to other types like 'numeric', 'email-address', etc.
  style,
  ...props // This allows you to pass any other TextInput props
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, style]} // Allows for external styling
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#000',
  },
});

export default CustomTextField;
