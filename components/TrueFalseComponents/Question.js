import {StyleSheet, Text, View} from 'react-native';
import {COLOR} from '../../constant/colors';

const Question = ({question}) => {
  return (
    <View style={{height: 100}}>
      <Text
        style={{
          fontWeight: '600',
          fontSize: 24,
          textAlign: 'center',
          color: COLOR.softYello,
        }}>
        {question}
      </Text>
    </View>
  );
};

export default Question;

const styles = StyleSheet.create({});
