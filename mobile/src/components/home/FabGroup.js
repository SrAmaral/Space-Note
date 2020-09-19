import React, {useContext} from 'react';
import {FAB} from 'react-native-paper';

import Colors from '../../styles/Colors';
import TextNote from '../note/TextNote';

import api from '../../services/api';
import NoteContext from '../../context/NoteCotext';

const MyComponent = ({navigation}) => {
  const [state, setState] = React.useState({open: false});

  const {
    title,
    text,
    star,
    done,
    isTodo,
    todos,
    setStarFc,
    setDoneFc,
    setIsTodoFc,
    setTitleFc,
    setTextFc,
    setContextToInitial,
  } = useContext(NoteContext);

  const onStateChange = ({open}) => setState({open});

  const {open} = state;

  const textNote = () => {
    navigation.navigate('Note', {text: true});
  };

  const todoNote = () => {
    api
      .post('notes', {
        title: '',
        text: '',
        star: false,
        done: false,
        isTodo: true,
      })
      .then((response) => {
        const note = response.data;
        navigation.navigate('Note', {text: false, id: note.note_Id});
      });

    // navigation.navigate('Note', {text: false});
  };

  return (
    <FAB.Group
      open={open}
      icon={open ? 'close' : 'plus'}
      color={Colors.white}
      fabStyle={{backgroundColor: Colors.purple}}
      actions={[
        {
          icon: 'format-list-checks',
          label: 'Todo Note',
          color: Colors.white,
          style: {backgroundColor: Colors.purple},
          onPress: todoNote,
        },
        {
          icon: 'text-box-outline',
          label: 'Text Note',
          color: Colors.white,
          style: {backgroundColor: Colors.purple},
          onPress: textNote,
        },
      ]}
      onStateChange={onStateChange}
      onPress={() => {
        if (open) {
          // do something if the speed dial is open
        }
      }}
    />
  );
};

export default MyComponent;
