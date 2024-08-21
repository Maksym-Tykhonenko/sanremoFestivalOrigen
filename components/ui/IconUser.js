import {Image, TouchableOpacity, View} from 'react-native';
import {COLOR} from '../../constant/colors';
import {useNavigation} from '@react-navigation/native';

const IconUser = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProfileScreen')}
      style={{position: 'absolute', top: 80, right: 0, zIndex: 1}}>
      <Image
        style={{width: 60, height: 60, tintColor: COLOR.gold}}
        source={require(`../../assets/img/icon/user.png`)}
      />
    </TouchableOpacity>
  );
};

export default IconUser;
