import {StyleSheet, Text, View} from 'react-native';
import {COLOR} from '../../constant/colors';
import {IconCoins, IconCorrectAnswers, IconQuestion} from '../ui';

const QuestionCounter = ({
  questionNum,
  totalQuestions,
  score,
  correctAnswer,
}) => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.iconContainer}>
        <IconCorrectAnswers />
        <Text style={{color: COLOR.yellow, fontWeight: '700', fontSize: 28}}>
          {correctAnswer}
        </Text>
      </View>
      <View style={styles.iconContainer}>
        <IconQuestion />
        <Text
          style={{color: COLOR.darkOrange, fontWeight: '700', fontSize: 28}}>
          {questionNum}/{totalQuestions}
        </Text>
      </View>
      <View style={styles.iconContainer}>
        <IconCoins />
        <Text
          style={{color: COLOR.strongYello, fontWeight: '700', fontSize: 28}}>
          {score}
        </Text>
      </View>
    </View>
  );
};

export default QuestionCounter;

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    gap: 3,
    backgroundColor: COLOR.darkGreen,
    paddingVertical: 4,
    borderRadius: 10,
    paddingHorizontal: 6,
  },
  rootContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // width: '90%',
  },
});
