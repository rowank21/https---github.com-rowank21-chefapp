import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Food is a way of life</Text>
      <View style={styles.separator} />
      <Text style={styles.description}>
        At Christophell's Food App, we bring a wealth of culinary experience right to your fingertips! 
        With over a decade of experience in the kitchen, Christophell has honed his skills in various 
        cuisines around the world. From mastering traditional Italian pasta to perfecting the art of 
        French pastry, his journey began in a small family kitchen where he learned to cook with love 
        and passion.
      </Text>
      <Text style={styles.description}>
        Choosing Christophell as your chef means choosing quality, creativity, and a commitment to 
        using only the freshest ingredients. Each dish is crafted with care, ensuring an unforgettable 
        dining experience tailored just for you. Discover the difference that passion and expertise can make!
      </Text>
      <Text style={styles.description}>
        For inquiries or feedback, contact us at:
      </Text>
      <Text style={styles.description}>
        Phone: 082 875 9886
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFE5B4', // Peach color
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366', // Dark blue accent color
  },
  description: { 
    fontSize: 16,
    color: '#003366', // Dark blue accent color
    textAlign: 'center',
    marginTop: 20,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '80%',
    backgroundColor: '#003366', // Dark blue accent color
  },
});
