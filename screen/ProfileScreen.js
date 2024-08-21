import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import {
  BlurContainer,
  IconGoBack,
  ImagedBackground,
  PickUserImage,
  ScreenLayour,
} from '../components/ui';
import {useState, useEffect} from 'react';
import {COLOR} from '../constant/colors';
import {fetchProfileAsync, saveProfileAsync} from '../store/useStorageUtils';
import AboutUser from '../components/ProfileComponents/AboutUser';
import UserAchieves from '../components/ProfileComponents/UserAchieves';

const ProfileScreen = () => {
  const [user, setUser] = useState(null);
  const [profileInputs, setPfofileInputs] = useState({name: '', image: ''});
  const genKey = () => Date.now().toString();

  useEffect(() => {
    const fetchUser = async () => {
      const data = await fetchProfileAsync();
      setUser(data);
    };
    fetchUser();
  }, []);

  const saveInputs = (identifier, newValue) => {
    setPfofileInputs(prev => ({...prev, [identifier]: newValue}));
  };
  const userImage = image => {
    saveInputs('image', image);
  };

  const submit = async () => {
    const {name, image} = profileInputs;
    if (!name.trim()) {
      Alert.alert('Problem', 'Name is invalid');
      return;
    }
    const dataToSubmit = {id: genKey(), name, image};
    try {
      await saveProfileAsync(dataToSubmit);
      const updatedData = await fetchProfileAsync();
      setUser(updatedData);
    } catch (error) {
      console.error('Failed to submit:', error);
    }
  };
  const ariseInput = () => {
    setPfofileInputs({name: ''});
  };

  return (
    <ImagedBackground>
      <BlurContainer blurAmount={0}>
        <ScreenLayour style={{width: '100%'}}>
          {user ? (
            <AboutUser data={user} />
          ) : (
            <View style={{width: '90%', alignItems: 'center', marginTop: 150}}>
              <Text style={styles.profileName}>Profile Name</Text>
              <TextInput
                value={profileInputs.name}
                onChangeText={value => saveInputs('name', value)}
                style={styles.input}
              />
              <View style={styles.pickerContainer}>
                <PickUserImage saveImage={image => userImage(image)}>
                  <Text style={styles.pickerText}>Choose the photo</Text>
                </PickUserImage>
              </View>
              <View style={{flexDirection: 'row', gap: 10, marginTop: 70}}>
                <TouchableOpacity onPress={submit} style={styles.btn}>
                  <Text style={styles.btnText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={ariseInput} style={styles.btn}>
                  <Text style={styles.btnText}>Arise</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          {user && <UserAchieves />}
        </ScreenLayour>
        <View
          style={{
            marginBottom: 40,
            alignSelf: 'flex-end',
            marginHorizontal: 30,
            marginTop: 15,
          }}>
          <IconGoBack />
        </View>
      </BlurContainer>
    </ImagedBackground>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  profileName: {fontSize: 24, color: COLOR.ocean, fontWeight: '600'},
  pickerContainer: {
    backgroundColor: COLOR.orange,
    padding: 15,
    borderRadius: 90,
    marginVertical: 35,
  },
  pickerText: {fontSize: 20, color: COLOR.darkOrange, fontWeight: '600'},
  input: {
    borderWidth: 1,
    backgroundColor: COLOR.gold + 90,
    paddingHorizontal: 15,
    marginVertical: 10,
    fontSize: 20,
    borderRadius: 10,
    paddingVertical: 10,
    minWidth: 150,
    maxWidth: 250,
    borderRadius: 90,
  },
  btn: {backgroundColor: COLOR.gold, flex: 1, borderRadius: 10},
  btnText: {
    textAlign: 'center',
    fontSize: 22,
    color: COLOR.ocean,
    padding: 5,
    fontWeight: '600',
  },
});
