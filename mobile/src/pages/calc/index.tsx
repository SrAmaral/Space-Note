import React from 'react';
import {StyleSheet} from 'react-native';
import HeaderCalc from '../../components/calc/Header';
import Calc from '../../components/calc/Calc';

const PageCalc: React.FC = ({navigation}) => {
  return (
    <>
      <HeaderCalc navigation={navigation} />
      <Calc />
    </>
  );
};

export default PageCalc;

const styles = StyleSheet.create({});
