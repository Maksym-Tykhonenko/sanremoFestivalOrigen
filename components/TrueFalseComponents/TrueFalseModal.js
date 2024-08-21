import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {BlurContainer, ScreenLayour} from '../ui';
import {COLOR} from '../../constant/colors';
import {useAppContext} from '../../store/app_context';
import {useNavigation} from '@react-navigation/native';

const TrueFalseModal = ({
  restart,
  id,
  complexity,
  score,
  correctAnswer,
  countCorrectAnswers,
}) => {
  const navigation = useNavigation();
  const {openNextLvlAddScore} = useAppContext();

  const openNextLevelFn = () => {
    // console.log(id, score, complexity);
    openNextLvlAddScore(id, score, complexity);
    navigation.navigate('TrueFalseScreen', complexity);
  };
  function navigateToMenu() {
    navigation.navigate('TrueFalseScreen', complexity);
  }
  return (
    <BlurContainer blurAmount={9}>
      <ScreenLayour style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: COLOR.ocean, fontSize: 20}}>
          Current Level Complexity{' '}
          <Text style={{color: COLOR.red}}>({complexity})</Text>
        </Text>
        <View>
          <Text style={styles.text}>Correct answers {countCorrectAnswers}</Text>
        </View>
        <View>
          <Text style={styles.text}>You achieved {score} points</Text>
        </View>
        <View>
          {countCorrectAnswers < 8 ? (
            <Text style={styles.text}>
              To pass this level you need more then {8} correct answers
            </Text>
          ) : (
            ''
          )}
        </View>
        <View style={{flexDirection: 'row', gap: 10, marginVertical: 20}}>
          <TouchableOpacity onPress={restart} style={styles.btn}>
            <Text style={styles.btnText}>restart</Text>
          </TouchableOpacity>
          {countCorrectAnswers > 8 ? (
            <TouchableOpacity onPress={openNextLevelFn} style={styles.btn}>
              <Text style={styles.btnText}>save score</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.btn} onPress={navigateToMenu}>
              <Text style={styles.btnText}>menu</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScreenLayour>
    </BlurContainer>
  );
};

export default TrueFalseModal;

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: COLOR.ocean,
    fontWeight: '600',
    fontSize: 26,
    marginVertical: 10,
  },
  btn: {backgroundColor: COLOR.gold, flex: 1, borderRadius: 10},
  btnText: {textAlign: 'center', fontSize: 22, color: COLOR.ocean, padding: 5},
});
