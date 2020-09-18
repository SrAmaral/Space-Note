import React, {useContext} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../styles/Colors';

import NoteContext from '../../context/NoteCotext';

const HeaderCalc: React.FC = ({navigation}) => {
  const {resultCalc, setResultCalc} = useContext(NoteContext);

  const onCreate = () => {
    navigation.navigate('Note', {
      resultCalc: resultCalc.toString(),
      calcImport: true,
      text: true,
    });
    setResultCalc('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{flex: 1}} />
        <View>
          <TouchableOpacity style={{flexDirection: 'row'}} onPress={onCreate}>
            <Text
              style={{
                fontSize: 16,
                color: Colors.purple,
                alignSelf: 'center',
                marginRight: 5,
              }}>
              Criar nota
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HeaderCalc;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    maxHeight: 120,
  },
  header: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
