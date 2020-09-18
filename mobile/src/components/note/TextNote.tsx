import React, {useState, useContext, useEffect} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

import Colors from '../../styles/Colors';
import NoteContext from '../../context/NoteCotext';

const TextNote = ({item, noteExist, resultCalc, calcImport}) => {
  const {title, text, setTitleFc, setTextFc} = useContext(NoteContext);

  useEffect(() => {
    if (noteExist) {
      setTitleFc(item.title);
      setTextFc(item.text);
    }
    if (calcImport) {
      setTitleFc(resultCalc);
      setTextFc(resultCalc);
    }
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.title}
        placeholder="Title Here"
        placeholderTextColor={Colors.darkGrey}
        multiline
        value={title}
        onChangeText={(text) => {
          setTitleFc(text);
        }}
      />
      <TextInput
        style={styles.note}
        placeholder="Note Here"
        placeholderTextColor={Colors.darkGrey}
        multiline
        value={text}
        onChangeText={(text) => {
          setTextFc(text);
        }}
      />
    </View>
  );
};

export default TextNote;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    padding: 15,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 18,
    color: Colors.white,
  },
  note: {
    flex: 1,
    fontSize: 16,
    color: Colors.darkGrey,
    textAlignVertical: 'top',
  },
});
