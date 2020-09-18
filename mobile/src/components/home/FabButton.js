import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import Colors from '../../styles/Colors';

export default class FabButton extends Component {
  animation = new Animated.Value(0);
  toggleMenu = () => {
    const toValue = this.open ? 0 : 1;

    Animated.spring(this.animation, {
      toValue,
      friction: 6,
      useNativeDriver: true,
    }).start();

    this.open = !this.open;
  };
  newTextNote = () => {
    this.props.navigation.navigate('Note', {
      text: true,
    });
    this.toggleMenu();
  };
  newTodoNote = () => {
    // this.props.navigation.navigate('Note', {
    //   text: false,
    // });
    this.toggleMenu();
    alert('Desculpe, a criação de todo list ainda não esta disponivel');
  };
  render() {
    const textNote = {
      transform: [
        {scale: this.animation},
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -70],
          }),
        },
      ],
    };

    const todoNote = {
      transform: [
        {scale: this.animation},
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -140],
          }),
        },
      ],
    };

    const rotation = {
      transform: [
        {
          rotate: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '45deg'],
          }),
        },
      ],
    };
    return (
      <View style={[styles.container, this.props.style]}>
        <TouchableWithoutFeedback onPress={this.newTextNote}>
          <Animated.View style={[styles.addButton, styles.subMenu, textNote]}>
            <Feather name="file-text" color={Colors.white} size={25} />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={this.newTodoNote}>
          <Animated.View style={[styles.addButton, styles.subMenu, todoNote]}>
            <Feather name="list" color={Colors.white} size={25} />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={this.toggleMenu}>
          <Animated.View style={[styles.addButton, styles.menu, rotation]}>
            <Feather name="plus" color={Colors.white} size={30} />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
  },
  addButton: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 10,
    },
  },
  menu: {
    backgroundColor: Colors.purple,
  },
  subMenu: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    backgroundColor: Colors.purple,
    flexDirection: 'row',
  },
});
