import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLOR} from '../../constant/colors';
import {optionsContainerHeight} from '../styles/generalStyles';

const QuizOptions = ({
  options,
  onPress,
  disable,
  correctOption,
  currentOption,
}) => {
  return (
    <View style={{alignItems: 'center'}}>
      {options?.map((option, index) => (
        <TouchableOpacity
          onPress={() => onPress(option)}
          disabled={disable}
          key={index}
          style={[
            styles.container,
            {
              backgroundColor:
                option == correctOption
                  ? COLOR.true
                  : option == currentOption
                  ? COLOR.red
                  : COLOR.beige,
              borderColor:
                option == correctOption
                  ? COLOR.darkGreen
                  : option == currentOption
                  ? COLOR.darkRed
                  : COLOR.green,
              borderWidth:
                option == correctOption ? 6 : option == currentOption ? 6 : 4,
            },
          ]}>
          <Text
            style={[
              styles.text,
              {
                color:
                  option == correctOption
                    ? COLOR.white
                    : option == currentOption
                    ? COLOR.white
                    : COLOR.softYello,
              },
            ]}>
            {option}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default QuizOptions;

const styles = StyleSheet.create({
  container: {
    marginVertical: 13,
    // backgroundColor: COLORS.warm,
    borderRadius: 32,
    padding: 5,
    height: optionsContainerHeight(),
    justifyContent: 'center',
    width: '90%',
  },
  text: {
    textAlign: 'center',
    fontWeight: '800',
    // color: COLORS.darkBlue,
    fontSize: 20,
  },
});
