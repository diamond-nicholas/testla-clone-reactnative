import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import CarItem from './components/CarItem/Index';

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
