import {SafeAreaView} from 'react-native';

const ScreenLayour = ({children, style}) => {
  return <SafeAreaView style={[{flex: 1}, style]}>{children}</SafeAreaView>;
};

export default ScreenLayour;
