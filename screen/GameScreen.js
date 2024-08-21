import {View} from 'react-native';
import {IconGoBack, ImagedBackground, MainScreenBtn} from '../components/ui';
import MainContainerLayout from '../components/layout/MainContainerLayout';

const GameScreen = () => {
  return (
    <ImagedBackground style={{padding: 5}}>
      <MainContainerLayout
        style={{justifyContent: 'center', alignItems: 'center'}}>
        <MainScreenBtn screen={'TrueFalseScreen'} complexity={'easy'}>
          True False (easy)
        </MainScreenBtn>
        <MainScreenBtn screen={'TrueFalseScreen'} complexity={'hard'}>
          True False (hard)
        </MainScreenBtn>
        <MainScreenBtn screen={'QuizScreen'}>Quiz</MainScreenBtn>
      </MainContainerLayout>

      <View
        style={{
          position: 'absolute',
          bottom: 60,
          right: 70,
        }}>
        <IconGoBack />
      </View>
    </ImagedBackground>
  );
};

export default GameScreen;
