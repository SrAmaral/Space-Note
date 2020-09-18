import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import {Dimensions} from 'react-native';

const ModalCenter = Dimensions.get('window').height / 2;

import Feather from 'react-native-vector-icons/Feather';
import Colors from '../../styles/Colors';

import NoteContext from '../../context/NoteCotext';

const FabModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [titleTodo, setTitleTodo] = useState('');

  const {todos, setTodosFc} = useContext(NoteContext);

  const onAddTodo = () => {
    setTodosFc([...todos, {titleTodo}]);
  };

  return (
    <View style={[styles.container]}>
      <Modal transparent={true} animationType="slide" visible={modalVisible}>
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
          <KeyboardAvoidingView
            style={styles.modal}
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
            <TextInput
              style={styles.input}
              placeholder="Title todo"
              placeholderTextColor={Colors.darkGrey}
              value={titleTodo}
              onChangeText={(text) => {
                setTitleTodo(text);
              }}
            />
            <KeyboardAvoidingView
              style={{flexDirection: 'row'}}
              behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
              <TouchableOpacity
                style={styles.buttonsModal}
                onPress={() => onAddTodo}>
                <Text style={styles.textButton}>Add</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.buttonsModal,
                  {backgroundColor: Colors.darkGrey},
                ]}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.textButton}>Close</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </KeyboardAvoidingView>
        </KeyboardAvoidingView>
      </Modal>

      <TouchableOpacity
        style={[styles.addButton]}
        onPress={() => setModalVisible(!modalVisible)}>
        <Feather name="plus" color={Colors.white} size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default FabModal;

const styles = StyleSheet.create({
  container: {},
  addButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.purple,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    bottom: 50,
    shadowColor: '#000',
    shadowRadius: 10,
    shadowOpacity: 0.6,
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  modal: {
    width: 300,
    height: 300,
    backgroundColor: Colors.background2,
    alignSelf: 'center',
    marginTop: ModalCenter - 150,
    borderRadius: 20,
    borderWidth: 0.3,
    borderColor: Colors.purple,
    shadowColor: '#000',
    shadowRadius: 10,
    shadowOpacity: 0.6,
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 250,
    height: 60,
    borderBottomWidth: 0.3,
    borderColor: Colors.purple,
    marginTop: 60,
    textAlign: 'center',
    fontSize: 16,
    color: Colors.white,
  },
  buttonsModal: {
    width: 100,
    height: 40,
    backgroundColor: Colors.purple,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 25,
    marginTop: 60,
    shadowColor: '#000',
    shadowRadius: 10,
    shadowOpacity: 0.6,
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  textButton: {
    fontSize: 16,
    color: Colors.white,
  },
});
