import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const CustomLinearGradient = ({children, style}) => {
  return (
    <LinearGradient
      colors={['#F8EDED', '#90F9C4', '#6BEAB2', '#39F3BB']}
      style={[styles.linearGradient, style]}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 2}}>
      {children}
    </LinearGradient>
  );
};

export default CustomLinearGradient;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});
