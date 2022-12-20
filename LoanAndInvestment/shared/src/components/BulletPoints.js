import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const BulletPoints = ({content}) => {
  return (
    <View style={styles.main}>
      <View style={styles.bullets} />
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

export default BulletPoints;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  bullets: {
    backgroundColor: '#43A2FF',
    borderRadius: 100,
    height: 6,
    width: 6,
    marginRight: 8,
    marginLeft: 16,
  },
  content: {
    fontWeight: '400',
    color: '#BCCFE7',
    fontSize: 14,
    lineHeight: 18,
  },
});
