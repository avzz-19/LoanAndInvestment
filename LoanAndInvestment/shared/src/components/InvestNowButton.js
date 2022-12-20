import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const InvestNowButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>Invest Now</Text>
    </TouchableOpacity>
  );
};

export default InvestNowButton;

const styles = StyleSheet.create({
  text: {
    color: '#FAFAFA',
    // fontFamily: 'Proxima Nova',
    fontWeight: '600',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#43A2FF',
    width: '100%',
    height: 50,
    marginVertical: 60,
    justifyContent: 'center',
  },
});
