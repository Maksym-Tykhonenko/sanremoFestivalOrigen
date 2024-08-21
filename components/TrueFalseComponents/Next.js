import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {COLOR} from '../../constant/colors';

const Next = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>NEXT</Text>
    </TouchableOpacity>
  );
};

export default Next;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: COLOR.darkOrange,
    borderRadius: 22,
    marginVertical: 15,
    width: '100%',
    marginTop: 60,
  },
  text: {
    color: COLOR.beige,
    fontSize: 26,
    letterSpacing: 3,
    fontWeight: '700',
  },
});
