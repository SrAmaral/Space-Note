import React, {useEffect, useState, useContext} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import Colors from '../../styles/Colors';

import NoteContext from '../../context/NoteCotext';

export interface itemNote {
  id: number;
  title: string;
  text: string;
  star: boolean;
  done: boolean;
  isTodo: boolean;
}

const NotesList: React.FC = ({navigation}) => {
  const {sortNotes} = useContext(NoteContext);

  const [notes, setNotes] = useState();

  useEffect(() => {
    
      api.get('notes').then((response) => {
        const note = response.data;

        setNotes(note);
      })
    
  }, [notes]);

  const openNote = (item: itemNote) => {
    var text;
    if (item.isTodo) {
      text = false;
    } else {
      text = true;
    }
    navigation.navigate('Note', {text: text, item: item, noteExist: true});
  };

 
  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        numColumns={2}
        extraData={notes}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.cardNote}
            onPress={() => openNote(item)}>
            <View style={{flex: 1}}>
              <MaterialIcons
                name={item.star ? 'star' : 'star-border'}
                color={item.star ? Colors.purple : Colors.lightGrey}
                size={30}
              />
            </View>

            <View style={{flex: 1}}>
              <Text style={styles.titleNote} numberOfLines={1}>
                {item.title}
              </Text>
            </View>

            <View
              style={
                item.isTodo
                  ? {flexDirection: 'row', justifyContent: 'space-between'}
                  : {alignSelf: 'flex-end'}
              }>
              {item.isTodo === 1 && (
                <Feather name="list" color={Colors.purple} size={20} />
              )}

              <Feather
                name="check"
                color={item.done ? Colors.purple : Colors.background2}
                size={25}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default NotesList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardNote: {
    width: 160,
    height: 160,
    backgroundColor: Colors.background2,
    margin: 15,
    padding: 15,

    borderRadius: 20,
  },

  titleNote: {
    fontSize: 18,
    color: Colors.white,
    textAlign: 'center',
  },
  addNote: {
    position: 'absolute',
    width: 60,
    height: 60,
    backgroundColor: Colors.purple,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 100,
  },
});
