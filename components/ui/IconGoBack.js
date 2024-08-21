import {View, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLOR} from '../../constant/colors';

const IconGoBack = () => {
  const navigation = useNavigation();
  return (
    <View
      style={
        {
          // position: 'absolute',
          // bottom: 60,
          // right: 70,
        }
      }>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require(`../../assets/img/icon/left-arrow.png`)}
          style={{width: 50, height: 50, tintColor: COLOR.gold}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default IconGoBack;
