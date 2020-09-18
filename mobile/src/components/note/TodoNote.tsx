import React, {useState, useContext, useEffect} from 'react';
import {StyleSheet, Text, View, TextInput, FlatList} from 'react-native';

import Colors from '../../styles/Colors';
import {Checkbox} from 'react-native-paper';

import FabModal from './FabModal';
import NoteContext from '../../context/NoteCotext';

const TodoNote = () => {
  const [checked, setChecked] = useState(false);
  const [titleNote, setTitleNote] = useState('');
  const [todoNote, setTodoNote] = useState();
  const {id, title, text, star, done, isTodo, todos} = useContext(NoteContext);
  useEffect(() => {
    setTodoNote(todos);
    console.log(todoNote);
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.title}
        placeholder="Title Here"
        placeholderTextColor={Colors.darkGrey}
        value={titleNote}
        onChangeText={(text) => {
          setTitleNote(text);
        }}
      />
      <View style={styles.todo}>
        <FlatList
          data={todoNote}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Checkbox
                status={item.check ? 'checked' : 'unchecked'}
                color={Colors.purple}
                uncheckedColor={Colors.lightGrey}
                onPress={() => {}}
              />

              <Text style={styles.titleTodo}>{item.title}</Text>
            </View>
          )}
        />
      </View>
      <FabModal />
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
