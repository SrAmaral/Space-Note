import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../styles/Colors';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

import NoteContext from '../../context/NoteCotext';

const Calc: React.FC = () => {
  const buttonsLabels = [
    {id: 1, label: 'C', color: Colors.darkGrey, operator: false},
    {id: 2, label: 'backspace', color: Colors.darkGrey, operator: false},
    {id: 4, label: '%', color: Colors.darkGrey, operator: false},
    {id: 5, label: '/', color: Colors.purple, operator: true},
    {id: 6, label: '7', color: Colors.background2, operator: false},
    {id: 7, label: '8', color: Colors.background2, operator: false},
    {id: 8, label: '9', color: Colors.background2, operator: false},
    {id: 9, label: '*', color: Colors.purple, operator: true},
    {id: 10, label: '4', color: Colors.background2, operator: false},
    {id: 11, label: '5', color: Colors.background2, operator: false},
    {id: 12, label: '6', color: Colors.background2, operator: false},
    {id: 13, label: '-', color: Colors.purple, operator: true},
    {id: 14, label: '1', color: Colors.background2, operator: false},
    {id: 15, label: '2', color: Colors.background2, operator: false},
    {id: 16, label: '3', color: Colors.background2, operator: false},
    {id: 17, label: '+', color: Colors.purple, operator: true},
    {id: 18, label: '+/-', color: Colors.background2, operator: false},
    {id: 19, label: '0', color: Colors.background2, operator: false},
    {id: 20, label: '.', color: Colors.background2, operator: false},
    {id: 21, label: '=', color: Colors.purple, operator: false},
  ];
  const {resultCalc, setResultCalc} = useContext(NoteContext);
  const [labelResult, setLabelResult] = useState(resultCalc);

  useEffect(() => {
    setLabelResult(resultCalc);
  }, [resultCalc]);

  const calculateResult = () => {
    const text = labelResult;
    const splice = text.split('%');
    console.log(splice);
    let result = '';
    for (let i = 0; i < splice.length; i++) {
      if (i === 0) {
        result = eval(`${splice[i]}`);
        console.log(`Primeiro ${result}`);
      } else {
        result = eval(`${result} / 100 * ${splice[i]}`);
        console.log(`Segundo ${result}`);
      }
    }
    console.log(`Resultado ${result}`);
    //let result = eval(text);
    setLabelResult(result);
    setResultCalc(result);
  };

  const clear = () => {
    const text = labelResult.toString().split('');
    text.splice(0, text.length);
    setLabelResult(text);
  };

  const clearLastKey = () => {
    let text = labelResult.toString().split('');
    text.pop();
    setLabelResult(text.join(''));
  };

  const switchNumber = () => {
    if (labelResult !== '0') {
      let result = eval(`${labelResult}*-1`);
      setLabelResult(result);
    }
    if (labelResult !== '0') {
      let result = eval(`${labelResult}*-1`);
      setLabelResult(result);
    }
  };
  const calcFunction = (item) => {
    if (item.label === '=') {
      return calculateResult();
    }

    switch (item.label) {
      case 'backspace':
        clearLastKey();
        break;

      case 'C':
        clear();
        break;

      case '%':
        setLabelResult(`${labelResult}%`);
        break;

      case '+/-':
        switchNumber();
        break;
    }
    if (
      item.label !== 'backspace' &&
      item.label !== 'C' &&
      item.label !== '+/-' &&
      item.label !== '%'
    ) {
      var lastChar;
      if (labelResult.length > 0) {
        lastChar = labelResult.split('').pop();
      }
      if (
        (labelResult.length === 0 && item.operator) ||
        (labelResult.length === 0 && item.label === '0')
      ) {
        return;
      } else if (item.operator) {
        if (
          lastChar === '+' ||
          lastChar === '-' ||
          lastChar === '/' ||
          lastChar === '*'
        ) {
          return;
        } else {
          setLabelResult(labelResult + item.label);
          setResultCalc(labelResult + item.label);
        }
      } else {
        setLabelResult(labelResult + item.label);
        setResultCalc(labelResult + item.label);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.textArea}>
        <Text style={styles.text} ellipsizeMode="head" numberOfLines={1}>
          {labelResult}
        </Text>
      </View>
      <View style={styles.areaButton}>
        <FlatList
          data={buttonsLabels}
          keyExtractor={(item) => item.label}
          numColumns={4}
          extraData={buttonsLabels}
          renderItem={({item}) => (
            <TouchableWithoutFeedback
              onPress={() => calcFunction(item)}
              style={[styles.button, {backgroundColor: item.color}]}>
              {item.label !== 'backspace' && (
                <Text style={styles.textButton}>{item.label}</Text>
              )}
              {item.label === 'backspace' && (
                <MaterialIcons
                  name="keyboard-backspace"
                  size={30}
                  color={Colors.white}
                />
              )}
            </TouchableWithoutFeedback>
          )}
        />
      </View>
    </View>
  );
};

export default Calc;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 15,
  },
  textArea: {
    flex: 1,
    maxHeight: 100,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: 15,
  },
  text: {
    color: Colors.white,
    fontSize: 50,
  },

  areaButton: {
    flex: 1,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 75,
    height: 75,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 7,
  },
  textButton: {
    fontSize: 30,
    color: Colors.white,
    textAlign: 'center',
  },
});
