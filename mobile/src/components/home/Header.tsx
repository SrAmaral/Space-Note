import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../styles/Colors';

const HeaderHome: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <TouchableOpacity>
          <MaterialIcons name="sort" size={30} color={Colors.white} />
        </TouchableOpacity>
      </View>

      <View style={{flex: 1}}>
        <Text style={styles.titleApp}>MyNote</Text>
      </View>

      <View style={styles.headerGroup}>
        <TouchableOpacity>
          <Feather
            style={{marginRight: 10}}
            name="search"
            size={30}
            color={Colors.white}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="more-vertical" size={30} color={Colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 80,
    backgroundColor: Colors.background,
    flexDirection: 'row',
    paddingTop: 30,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleApp: {
    fontSize: 24,
    color: Colors.white,
    textAlign: 'center',
  },
  headerGroup: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
