import AsyncStorage from '@react-native-async-storage/async-storage';
export const saveProfileAsync = async userData => {
  try {
    await AsyncStorage.setItem('profile', JSON.stringify(userData));
  } catch (error) {
    console.error('pfofile save failed:', error);
  }
};

export const fetchProfileAsync = async () => {
  try {
    const user = await AsyncStorage.getItem('profile');
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error('profile get failed:', error);
  }
};
export const updateProfileAsync = async (key, value) => {
  try {
    const user = await fetchProfileAsync();
    if (user) {
      user[key] = value;
      await AsyncStorage.setItem('profile', JSON.stringify(user));
    }
  } catch (error) {
    console.error(`profile update failed ${key}:`, error);
  }
};
