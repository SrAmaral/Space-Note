import React from 'react';
import {StyleSheet} from 'react-native';
import HeaderHome from '../../components/home/Header';
import NoteList from '../../components/home/NoteList';
import FabButton from '../../components/home/FabGroup';

const Home: React.FC = ({navigation}) => {
  return (
    <>
      <HeaderHome />
      <NoteList navigation={navigation} />
      <FabButton navigation={navigation} />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
