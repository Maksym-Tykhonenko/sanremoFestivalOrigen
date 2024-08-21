import {StyleSheet, Text, View} from 'react-native';
import {COLOR} from '../../constant/colors';

const TopicBox = ({topic}) => {
  return (
    // <View>
    <Text style={styles.text}>{topic.toUpperCase()}</Text>
    // </View>
  );
};

export default TopicBox;

const styles = StyleSheet.create({
  text: {
    color: COLOR.green,
    fontSize: 30,
    fontWeight: '500',
    letterSpacing: 2,
    marginVertical: 10,
    textAlign: 'center',
  },
});
