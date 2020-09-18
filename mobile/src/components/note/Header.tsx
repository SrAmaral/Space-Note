import React, {useContext, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../styles/Colors';

import api from '../../services/api';
import NoteContext from '../../context/NoteCotext';

const HeaderNote: React.FC = ({isTodoParam, navigation, item, noteExist}) => {
  useEffect(() => {
    setIsTodoFc(isTodoParam);
    console.log(item);
  }, []);

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

  useEffect(() => {
    if (noteExist) {
      setStarFc(item.star);
      setDoneFc(item.done);
      setIsTodoFc(item.isTodo);
      setTitleFc(item.title);
      setTextFc(item.text);
    }
  }, []);

  const onStar = () => {
    setStarFc(!star);
  };

  const onDone = () => {
    setDoneFc(!done);
  };

  const onSave = () => {
    if (!noteExist) {
      if (title !== '' && text !== '') {
        api
          .post('notes', {
            title,
            text,
            star,
            done,
            isTodo,
            todos,
          })
          .then(() => {
            alert(`A nota ${title} foi criada`);
            navigation.navigate('Home');
            setContextToInitial();
          });
      } else {
        alert('Preencha todos os campos');
      }
    }
    if (noteExist) {
      if (title !== '' && text !== '') {
        api
          .put(`notes/${item.id}`, {
            title,
            text,
            star,
            done,
            isTodo,
            create_at: item.create_at,
          })
          .then(() => {
            alert(`A nota ${title} foi alterada`);
            navigation.goBack();
            setContextToInitial();
          });
      } else {
        alert('Preencha todos os campos');
      }
    }
  };

  const onDelete = () => {
    if (noteExist) {
      Alert.alert(
        'Atenção!!!',
        `Gostaria mesmo de deleta a nota ${item.title} `,
        [
          {
            text: 'OK',
            onPress: () => {
              api.delete(`notes/${item.id}`).then(() => {
                alert(`A nota ${title} foi deletada`);
                navigation.goBack();
                setContextToInitial();
              });
            },
          },

          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
        ],
        {cancelable: false},
      );
    } else {
      alert('Está nota não foi criada para ser excuida');
    }
  };

  const onCancel = () => {
    setTitleFc('');
    setTextFc('');
    setStarFc(false);
    setDoneFc(false);

    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <TouchableOpacity style={{flexDirection: 'row'}} onPress={onSave}>
          <MaterialIcons
            name="keyboard-arrow-left"
            color={Colors.purple}
            size={30}
          />
          <Text
            style={{fontSize: 16, color: Colors.purple, alignSelf: 'center'}}>
            Save
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity style={{paddingHorizontal: 10}} onPress={onDelete}>
          <Feather name="trash-2" color={Colors.purple} size={20} />
        </TouchableOpacity>
        {/* <TouchableOpacity style={{paddingHorizontal: 10}}>
          <Feather name="edit" color={Colors.purple} size={20} />
        </TouchableOpacity> */}
        <TouchableOpacity
          style={{paddingHorizontal: 10}}
          onPress={() => onStar()}>
          <MaterialIcons
            name={star ? 'star' : 'star-border'}
            color={Colors.purple}
            size={25}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDone()}>
          <Text
            style={{fontSize: 16, color: Colors.purple, alignSelf: 'center'}}>
            <MaterialIcons
              name="check"
              color={done ? Colors.purple : Colors.lightGrey}
              size={25}
            />
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 16,
              color: Colors.purple,
              alignSelf: 'flex-end',
            }}
            onPress={onCancel}>
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderNote;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 130,
    backgroundColor: Colors.background,
    paddingVertical: 60,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
