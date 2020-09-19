import React, {useState, useContext, useEffect} from 'react';
import {StyleSheet, Text, View, TextInput, FlatList} from 'react-native';

import Colors from '../../styles/Colors';
import {Checkbox} from 'react-native-paper';

import FabModal from './FabModal';
import NoteContext from '../../context/NoteCotext';

import api from '../../services/api';

const TodoNote = ({id, noteExist, itemNote}) => {
  const [checked, setChecked] = useState(false);
  const [titleNote, setTitleNote] = useState('');
  const [todoNote, setTodoNote] = useState();
  const {
    title,
    text,
    star,
    done,
    isTodo,
    todos,
    setTodosFc,
    setTitleFc,
    setTodoIdNoteFc,
  } = useContext(NoteContext);

  useEffect(() => {
    getTodos();
    setTodoIdNoteFc(id);
  }, [todoNote]);

  const getTodos = async () => {
    if (!noteExist) {
      await api.get(`todos?search=${id}`).then((response) => {
        const todo = response.data;

        setTodoNote(todo);
        setTodosFc(todo);
      });
    }
    if (noteExist) {
      await api.get(`todos?search=${itemNote.id}`).then((response) => {
        const todo = response.data;

        setTodoNote(todo);
        setTodosFc(todo);
      });
    }
  };

  const onComplete = (item) => {
    api
      .put(`todos/${item.id}`, {
        titleTodo: item.titleTodo,
        complete: !item.complete,
      })
      .then((response) => {});
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.title}
        placeholder="Title Here"
        placeholderTextColor={Colors.darkGrey}
        value={title}
        onChangeText={(text) => {
          setTitleFc(text);
        }}
      />
      <View style={styles.todo}>
        <FlatList
          data={todoNote}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Checkbox
                status={item.complete ? 'checked' : 'unchecked'}
                color={Colors.purple}
                uncheckedColor={Colors.lightGrey}
                onPress={() => onComplete(item)}
              />

              <Text style={styles.titleTodo}>{item.titleTodo}</Text>
            </View>
          )}
        />
      </View>
      <FabModal id={id} item={itemNote} noteExist={noteExist} />
    </View>
  );
};

export default TodoNote;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 15,
  },
  todo: {
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    color: Colors.white,
    marginBottom: 30,
  },
  titleTodo: {
    fontSize: 20,
    color: Colors.white,
    left: 20,
    textAlign: 'center',
  },
});
