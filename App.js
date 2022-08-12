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
      <CarItem
        name={'Model S'}
        tagline={'starting from $40000'}
        taglineCTA={'Touchless Delivery'}
        bgimage={require('./assets/images/ModelS.jpeg')}
      />
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
