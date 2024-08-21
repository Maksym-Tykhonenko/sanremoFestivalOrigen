import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveDataByKey = async (data, key) => {

  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchDataByKey = async key => {
  try {
    const data = await AsyncStorage.getItem(key);
    return data !== null ? JSON.parse(data) : [];
  } catch (error) {
    console.error(error);
  }
};
