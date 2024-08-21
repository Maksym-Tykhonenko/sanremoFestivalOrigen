import {Image, TouchableOpacity} from 'react-native';
import {COLOR} from '../../constant/colors';
import {useAppContext} from '../../store/app_context';

const IconResetGame = ({complexity}) => {
  const {resetTrueFalseGame} = useAppContext();
  function resetGameHandler() {
    resetTrueFalseGame(complexity);
  }
  return (
    <TouchableOpacity onPress={resetGameHandler}>
      <Image
        style={{width: 50, height: 50, tintColor: COLOR.gold}}
        source={require(`../../assets/img/icon/resetCircle.png`)}
      />
    </TouchableOpacity>
  );
};

export default IconResetGame;
