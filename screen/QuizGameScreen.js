import {StyleSheet, View, ScrollView, Modal} from 'react-native';
import {useAppContext} from '../store/app_context';
import {useState} from 'react';
import {ImagedBackground, ScreenLayour} from '../components/ui';
import {
  Next,
  Question,
  QuestionCounter,
  TopicBox,
} from '../components/TrueFalseComponents';
import QuizOptions from '../components/QuizComponents/QuizOptions';
import QuizModalResult from '../components/QuizComponents/QuizModalResult';

const QuizGameScreen = ({route}) => {
  const quizId = route.params.id;
  const {quiz} = useAppContext();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentOption, setCurrentOption] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [confirmAnswer, setConfirmAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [countCorrectAnswers, setCountCorrectAnswers] = useState(0);
  const [next, setNext] = useState(false);

  const gameData = quiz.find(item => item.id === quizId);
  const query = gameData.query;
  const question = query[currentIndex].question || '';
  const options = query[currentIndex].options || [];
  const answer = query[currentIndex].answer || '';

  const validationHandler = choosen => {
    setCurrentOption(choosen);
    setCorrectOption(answer);
    setIsDisabled(true);
    // setIsAnswerModal(true);
    if (choosen === answer) {
      setScore(score + 1);
      setCountCorrectAnswers(countCorrectAnswers + 1);
    }
    setNext(true);
    setConfirmAnswer(true);
  };
  const nextQuestionHanler = () => {
    if (currentIndex === query.length - 1) {
      setIsModal(true);
    } else {
      setCurrentIndex(currentIndex + 1);
      setCurrentOption(null);
      setCorrectOption(null);
      setIsDisabled(false);
      setNext(false);
      //   setIsAnswerModal(false);
    }
    setConfirmAnswer(false);
  };

  const playAgain = () => {
    setIsModal(false);
    setCurrentIndex(0);
    setCurrentOption(null);
    setCorrectOption(null);
    setIsDisabled(false);
    setScore(0);
    // setIsAnswerModal(false);
    // setCountCorrectAnswers(0);
    // setResetTimer(true);
    // setTimerFinish(false);
    // setTimeout(() => setResetTimer(false), 100);
  };

  return (
    <ImagedBackground>
      {/* <CustomLinearGradient> */}
      <ScreenLayour>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TopicBox topic={gameData.topic} />
          <QuestionCounter
            score={score}
            questionNum={currentIndex + 1}
            totalQuestions={query.length}
            correctAnswer={countCorrectAnswers}
            // complexity={complexity}
          />
          <View style={{marginVertical: 20}}>
            <Question question={question} />
          </View>
          <QuizOptions
            options={options}
            currentOption={currentOption}
            onPress={validationHandler}
            disable={isDisabled}
            correctOption={correctOption}
          />
          {next && <Next onPress={nextQuestionHanler} />}
          <Modal visible={isModal} animationType="slide" transparent={true}>
            <QuizModalResult
              restart={playAgain}
              id={quizId}
              score={score}
              countCorrectAnswers={countCorrectAnswers}
              topic={gameData.topic}
            />
          </Modal>
        </ScrollView>
      </ScreenLayour>
      {/* </CustomLinearGradient> */}
    </ImagedBackground>
  );
};

export default QuizGameScreen;

const styles = StyleSheet.create({});
