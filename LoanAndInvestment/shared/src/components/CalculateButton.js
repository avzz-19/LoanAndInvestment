import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Button = ({onClick}) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onClick}>
        <Text style={styles.text}>Calculate</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#507BA0',
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 25,
  },
  text: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
    // fontFamily: 'Proxima Nova',
    paddingVertical: 7.5,
    paddingHorizontal: 44,
  },
});
