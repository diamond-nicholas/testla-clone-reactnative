import { View, Text, Pressable } from 'react-native';
import React from 'react';
import styles from './styles';

const StyledButton = (props) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => {
          console.warn('hey there');
        }}
      >
        <Text style={styles.text}>Custom Order</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
