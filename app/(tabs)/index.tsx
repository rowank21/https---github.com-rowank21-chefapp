import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { RadioButton } from 'react-native-paper';


const dishes = [
  { 
    name: 'Eggs Benedict', 
    description: 'English muffin, cut in half, toasted, and topped with Canadian bacon, poached eggs, and classic French hollandaise sauce.', 
    price: 80.99,
    image: 'https://www.allrecipes.com/thmb/QVMaPhXnj1HQ70C7Ka9WYtuipHg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/17205-eggs-benedict-DDMFS-4x3-a0042d5ae1da485fac3f468654187db0.jpg' 
  },
  { 
    name: 'Breakfast bowl', 
    description: 'For those who are health consciense. The Healthy Choice.', 
    price: 40.00,
    image: 'data:image/jpeg;base64,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' 
  },
  { 
    name: 'American Style Pancakes', 
    description: 'Fluffy Pancakes with strawberries, blueberries and drizzeled with honey-served with ice cream upon request.', 
    price: 60.00,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGd6HnyqlRf4X-EhsMiwia0gGWRZLiNAv1g&s' 
  },
  { 
    name: 'Pizza!', 
    description: 'Pizza topped with bacon, sausages, pepper and my three cheese system.', 
    price: 89.99,
    image: 'https://www.thecookierookie.com/wp-content/uploads/2023/09/sausage-pizza-recipe-4.jpg' 
  },
  { 
    name: 'Loaded burger', 
    description: 'Burger with meat of choice, includes bacon, melted cheese,jaelepenos and 2 special sauces.', 
    price: 120.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjAMLedZRk2kc2Gg7NC0jRaHIjxa1-vf-b_A&s' 
  },
  { 
    name: 'Spicy Pasta', 
    description: 'For pasta lovers with a strong pallet.', 
    price: 180.00,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK_JPaCo2Fu7Cait_JuSH-hV2j1zvsbbAVeg&s'
  },
  { 
    name: 'lamb rogan josh', 
    description: 'Exceptional lamb curry', 
    price: 210.00,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9Af1I8mYpkOxhOxl9PJqfwUUXkN7ntu9qw&s' 
  },
  { 
    name: 'Oreo milkshake', 
    description: 'try this if you have a sweet tooth.', 
    price: 59.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI2uCr9JEoblI7xp13KCeAzkdCId1vD_o9Tw&s' 
  },
  { 
    name: 'Homemade OJ', 
    description: 'Made with fresh oranges.', 
    price: 29.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkWsRDmZ4jshiOHo7X_3pUzETZ6ahfbZDDXw&s' 
  },
];

const App = () => {
  const [selectedDish, setSelectedDish] = useState(dishes[0].name);
  const [quantities, setQuantities] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("Breakfast"); 

  const handleQuantityChange = (dishName, quantity) => {
    const numQuantity = Math.max(0, parseInt(quantity) || 0);
    setQuantities(prevQuantities => {
      return {
        ...prevQuantities,
        [dishName]: numQuantity,
      };
    });
  };

  const totalCost = Object.keys(quantities).reduce((sum, dishName) => {
    const dishInfo = dishes.find(dish => dish.name === dishName);
    return sum + (dishInfo ? dishInfo.price * quantities[dishName] : 0);
  }, 0);

  const filteredDishes = () => {
    switch (selectedCategory) {
      case "Breakfast":
        return dishes.slice(0, 3); 
      case "Lunch and Dinner":
        return dishes.slice(3, 6); 
      case "Drinks":
        return dishes.slice(6, 9); 
      default:
        return dishes;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Picker
        selectedValue={selectedCategory}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedCategory(itemValue)}
      >
        <Picker.Item label="Breakfast" value="Breakfast" />
        <Picker.Item label="Lunch and Dinner" value="Lunch and Dinner" />
        <Picker.Item label="speciality+Drinks" value="Drinks" />
      </Picker>

      <RadioButton.Group onValueChange={value => setSelectedDish(value)} value={selectedDish}>
        {filteredDishes().map((dish) => (
          <View key={dish.name} style={styles.radioContainer}>
            <View style={styles.radioButtonRow}>
              <RadioButton value={dish.name} color="#f5c74c" />
              <Text style={styles.dishName}>{dish.name}</Text>
            </View>
            <View style={styles.dishDetails}>
              <Image
                source={{ uri: dish.image }} 
                style={styles.dishImage}
              />
              <Text style={styles.dishDescription}>{dish.description}</Text>
              <Text style={styles.dishPrice}>Price: R{dish.price.toFixed(2)}</Text>
              <TextInput
                style={styles.quantityInput}
                placeholder="Quantity"
                keyboardType="numeric"
                value={quantities[dish.name]?.toString() || ''}
                onChangeText={text => handleQuantityChange(dish.name, text)}
              />
            </View>
          </View>
        ))}
      </RadioButton.Group>
      <Text style={styles.selected}>Selected Dish: {selectedDish}</Text>
      <Text style={styles.selected}>Quantity: {quantities[selectedDish] || 0}</Text>
      <Text style={styles.totalCost}>Total Price: R{totalCost.toFixed(2)}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFDAB9', // Peach background
  },
  selected: {
    marginTop: 20,
    color: '#000000', // Black text for visibility
    fontSize: 20,
  },
  totalCost: {
    marginTop: 10,
    fontSize: 18, 
    color: '#FF4500',  // Orange-red for total cost
    fontWeight: 'bold', 
  },
  radioContainer: {
    marginBottom: 20, 
  },
  radioButtonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5DEB3', 
    padding: 10,
  },
  dishName: {
    color: '#000000', 
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 10, 
    flex: 1, 
  },
  dishDetails: {
    backgroundColor: '#F5DEB3',
    padding: 10,
  },
  dishDescription: {
    color: '#000000',
    fontSize: 14,
    marginBottom: 5,
  },
  dishPrice: {
    color: '#000000',
    fontSize: 14,
    marginBottom: 5,
  },
  quantityInput: {
    height: 40,
    borderColor: '#FF4500', 
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff', 
    color: '#000000', 
  },
  dishImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 8, 
  },
  picker: {
    height: 50,
    width: 200,
    color: '#000000', 
    backgroundColor: '#FFDAB9', 
    marginBottom: 20, 
  },
});

export default App;
