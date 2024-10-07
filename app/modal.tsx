import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TextInput, Button } from 'react-native';

import { Text, View } from '@/components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Menu Item</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      <TextInput 
        style={styles.input} 
        placeholder="Dish Name" 
        placeholderTextColor="#888"
      />
      <TextInput 
        style={styles.input} 
        placeholder="Description" 
        placeholderTextColor="#888" 
        multiline
      />
      <TextInput 
        style={styles.input} 
        placeholder="Price" 
        placeholderTextColor="#888" 
        keyboardType="numeric"
      />
      <TextInput 
        style={styles.input} 
        placeholder="Image URL" 
        placeholderTextColor="#888"
      />
      <Button title="Add to Menu" onPress={() => {}} />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: '100%',
    marginBottom: 15,
  },
});
