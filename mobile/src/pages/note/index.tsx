import React from 'react';
import {StyleSheet} from 'react-native';

import HeaderNote from '../../components/note/Header';
import TextNote from '../../components/note/TextNote';
import TodoNote from '../../components/note/TodoNote';

const Note: React.FC = ({route, navigation}) => {
  const {text, item, noteExist, resultCalc, calcImport} = route.params;
  return (
    <>
      <HeaderNote
        isTodoParam={!text}
        navigation={navigation}
        item={item}
        noteExist={noteExist}
      />
      {text && (
        <TextNote
          item={item}
          noteExist={noteExist}
          resultCalc={resultCalc}
          calcImport={calcImport}
        />
      )}
      {!text && <TodoNote item={item} noteExist={noteExist} />}
    </>
  );
};

export default Note;

const styles = StyleSheet.create({});
