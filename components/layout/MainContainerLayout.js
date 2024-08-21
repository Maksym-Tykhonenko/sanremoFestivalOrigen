import {SafeAreaView, StyleSheet} from 'react-native';

const MainContainerLayout = ({children, style}) => {
  return <SafeAreaView style={[style, {flex: 1}]}>{children}</SafeAreaView>;
};

export default MainContainerLayout;
