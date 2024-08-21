import MainContainerLayout from '../components/layout/MainContainerLayout';
import {IconUser, ImagedBackground, MainScreenBtn} from '../components/ui';

const MainScreen = () => {
  return (
    <ImagedBackground style={{justifyContent: 'center', alignItems: 'center'}}>
      <IconUser />
      <MainContainerLayout
        style={{justifyContent: 'center', alignItems: 'center'}}>
        <MainScreenBtn screen={'GameScreen'}>Game</MainScreenBtn>
        <MainScreenBtn screen={'AboutScreen'}>About</MainScreenBtn>
      </MainContainerLayout>
    </ImagedBackground>
  );
};

export default MainScreen;
