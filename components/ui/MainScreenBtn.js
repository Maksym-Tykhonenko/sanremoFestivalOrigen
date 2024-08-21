import {Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import {COLOR} from '../../constant/colors';
import {useNavigation} from '@react-navigation/native';
import {fontGameScreen} from '../styles/generalStyles';

const {height} = Dimensions.get('window');

const MainScreenBtn = ({children, screen, complexity}) => {
  const navigation = useNavigation();
  function navigationHandler() {
    navigation.navigate(`${screen}`, complexity || null);
  }
  return (
    <TouchableOpacity onPress={navigationHandler} style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default MainScreenBtn;

const styles = StyleSheet.create({
  text: {
    fontWeight: '600',
    fontSize: fontGameScreen(),
    letterSpacing: 3,
    color: COLOR.ocean,
    textAlign: 'center',
  },
  container: {
    paddingHorizontal: 40,
    borderEndEndRadius: 40,
    borderStartStartRadius: 40,
    width: '100%',
    alignItems: 'center',
    backgroundColor: COLOR.gold,
    marginVertical: 25,
    paddingVertical: 20,
  },
});
