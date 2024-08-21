import {StyleSheet, Text, View, Image} from 'react-native';
import {COLOR} from '../../constant/colors';
import React from 'react';

const IconCorrectAnswers = () => {
  return (
    <Image
      style={{width: 30, height: 30, tintColor: COLOR.yellow}}
      source={require(`../../assets/img/icon/correct.png`)}
    />
  );
};

export default IconCorrectAnswers;

const styles = StyleSheet.create({});
