import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Back from '../LoanAndInvestment/shared/assets/Back.png';
import BulletPoints from './shared/src/components/BulletPoints';
import {rainyDaySavings} from './shared/src/content/RainyDaySavings';
import {moneyEstimate} from './shared/src/content/RainyDaySavings';
import CalculationBox from './shared/src/components/CalculationBox';
import InvestNowButton from './shared/src/components/InvestNowButton';

const App = () => {
  return (
    <ScrollView contentContainerStyle={{backgroundColor: '#0C121A'}}>
      <SafeAreaView>
        <View style={styles.container}>
          <Image source={Back} />
          <View style={styles.section1}>
            <Text style={styles.title}>What are Rainy Day Savings?</Text>
            {rainyDaySavings.map(data => {
              return <BulletPoints content={data} />;
            })}
            <Text style={styles.title}>How much money should I have?</Text>
            <Text style={styles.text}>Prefer to have an amount equal to -</Text>
            {moneyEstimate.map(data => {
              return <BulletPoints content={data} />;
            })}
          </View>
          <CalculationBox />
          <InvestNowButton />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  section1: {
    paddingLeft: 16,
    paddingRight: 32,
    paddingVertical: 16,
  },
  title: {
    color: '#FAFAFA',
    fontSize: 18,
    fontWeight: '600',
    // fontFamily: 'Proxima Nova',
    lineHeight: 22,
    paddingTop: 4,
  },
  text: {
    fontWeight: '400',
    color: '#BCCFE7',
    fontSize: 14,
    lineHeight: 18,
    paddingTop: 12,
  },
});
