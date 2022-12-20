import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Ribbon = () => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={styles.rectangle}>
        <Text style={styles.ribbonText}>Calculate Emergency Funds</Text>
      </View>
      <View>
        <View style={styles.triangleDown} />
        <View style={styles.triangleUp} />
      </View>
    </View>
  );
};

export default Ribbon;

const styles = StyleSheet.create({
  rectangle: {
    width: 200,
    height: 24,
    backgroundColor: '#F1D18A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  triangleDown: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 12,
    borderTopWidth: 12,
    borderRightColor: 'transparent',
    borderTopColor: '#F1D18A',
  },
  triangleUp: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 11.5,
    borderTopWidth: 12,
    borderRightColor: 'transparent',
    borderTopColor: '#F1D18A',
    transform: [{rotate: '270deg'}],
  },
  ribbonText: {
    color: '#032A33',
    fontWeight: '600',
    fontSize: 14,
    // fontFamily: 'Proxima Nova',
  },
});
