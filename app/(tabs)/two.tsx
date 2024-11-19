import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

// Interface for the menu item
interface MenuItem {
  name: string;
  description: string;
  price: string;
  course: string;
}

const TwoScreen = () => {
  // State for menu items
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  // State for input fields
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [course, setCourse] = useState('Starters');
  // State for filtering
  const [filter, setFilter] = useState('All');

  // Function to add a menu item
  const addMenuItem = () => {
    if (name && description && price) {
      const newItem: MenuItem = { name, description, price, course };
      setMenuItems([...menuItems, newItem]);
      // Clear input fields after adding
      setName('');
      setDescription('');
      setPrice('');
      setCourse('Starters');
    }
  };

  // Function to filter menu items
  const filteredMenuItems = menuItems.filter(item => filter === 'All' || item.course === filter);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Menu Item</Text>

      {/* Input fields for menu item */}
      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <Picker
        selectedValue={course}
        style={styles.input}
        onValueChange={(itemValue) => setCourse(itemValue)}>
        <Picker.Item label="Drinks" value="Drinks" />
        <Picker.Item label="Mains" value="Mains" />
        <Picker.Item label="Desserts" value="Desserts" />
      </Picker>

      <Button title="Add Menu Item" onPress={addMenuItem} />

      {/* Filter Section */}
      <Text style={styles.title}>Filter Menu Items</Text>
      <Picker
        selectedValue={filter}
        style={styles.input}
        onValueChange={(itemValue) => setFilter(itemValue)}>
        <Picker.Item label="All" value="All" />
        <Picker.Item label="Drinks" value="Drinks" />
        <Picker.Item label="Mains" value="Mains" />
        <Picker.Item label="Desserts" value="Desserts" />
      </Picker>

      {/* Display the menu items */}
      <FlatList
        data={filteredMenuItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text style={styles.itemText}>Name: {item.name}</Text>
            <Text style={styles.itemText}>Description: {item.description}</Text>
            <Text style={styles.itemText}>Price: {item.price}</Text>
            <Text style={styles.itemText}>Course: {item.course}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  menuItem: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
  },
  itemText: {
    fontSize: 16,
  },
});

export default TwoScreen;
