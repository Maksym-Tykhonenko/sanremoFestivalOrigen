import {Text, Animated, StyleSheet} from 'react-native';
import {useEffect, useRef} from 'react';
import {ImagedBackground} from '../components/ui';
import MainContainerLayout from '../components/layout/MainContainerLayout';
import {COLOR} from '../constant/colors';

const WelcomeScreen = ({navigation}) => {
  const animation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => navigation.replace('MainScreen'));
  }, [animation]);
  return (
    <ImagedBackground>
      <MainContainerLayout>
        <Text style={styles.text}>
          Enjoy Jorney to the Sanremo Festival Quiz
        </Text>
      </MainContainerLayout>
    </ImagedBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    padding: 10,
    color: COLOR.ocean,
    fontWeight:'700'
  },
});
