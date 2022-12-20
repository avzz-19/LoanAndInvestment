import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Ribbon from './Ribbon';
import Button from './CalculateButton';

function getInLakhs(val) {
  if (val >= 10000000) {
    val = (val / 10000000).toFixed(2) + 'Cr';
  } else if (val >= 100000) {
    val = (val / 100000).toFixed(2) + 'L';
  }
  return val;
}
const CalculationBox = () => {
  const [expense, onChangeExpense] = useState(0);
  const [EMI, onChangeEMI] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const sum = Number(expense) + Number(EMI);

  return (
    <View style={styles.container}>
      <View style={{paddingTop: 16}} />
      <Ribbon />
      <View style={styles.innerContainer}>
        <View style={styles.row}>
          <View>
            <Text style={styles.text1}>Monthly Expenses</Text>
            <Text style={styles.text2}>All essential expenses</Text>
          </View>
          <TextInput
            style={styles.input}
            onChangeText={onChangeExpense}
            value={expense}
            placeholder="₹25,000"
            keyboardType="numeric"
            placeholderTextColor="#333"
          />
        </View>

        <View style={{paddingTop: 24}} />
        <View style={styles.row}>
          <View>
            <Text style={styles.text1}>Loan EMI</Text>
            <Text style={styles.text2}>Include EMI of all Loans</Text>
          </View>
          <TextInput
            style={styles.input}
            onChangeText={onChangeEMI}
            value={EMI}
            placeholder="₹14,500"
            keyboardType="numeric"
            placeholderTextColor="#333"
          />
        </View>
        <Button
          onClick={() => {
            setMin(getInLakhs(sum * 6));
            setMax(getInLakhs(sum * 9));
          }}
        />
        <View style={styles.line} />
        <Text style={styles.calculated}>
          You should have ₹{min} to ₹{max}
        </Text>
      </View>
    </View>
  );
};

export default CalculationBox;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'rgba(64, 115, 175, 0.7);',
  },
  innerContainer: {
    margin: 16,
    padding: 16,
    backgroundColor: '#E2E2E2',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
  },
  text1: {
    color: '#333333',
    // fontFamily: 'Proxima Nova',
    fontWeight: '600',
    fontSize: 14,
  },
  text2: {
    color: 'rgba(110, 121, 133, 0.9)',
    fontSize: 12,
    fontWeight: '400',
    // fontFamily: 'Proxima Nova',
    paddingTop: 4,
  },
  input: {
    height: 32,
    borderWidth: 1,
    padding: 5,
    borderColor: 'rgba(51, 51, 51, 0.3)',
    width: 148,
    borderRadius: 5,
    textAlign: 'right',
    color: 'black',
  },
  line: {
    height: 1,
    backgroundColor: 'rgba(36, 42, 52, 0.2)',
    marginTop: 24,
  },
  calculated: {
    paddingTop: 16,
    fontWeight: '700',
    // fontFamily: 'Proxima Nova',
    alignSelf: 'center',
    color: '#333333',
  },
});
