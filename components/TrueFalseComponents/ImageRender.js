import {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const ImageRender = ({image}) => {
  const [isError, setIsError] = useState(false);

  // console.log(image);
  return (
    <View style={styles.imageContainer} resizeMode='center'>
      <Image
        style={styles.image}
        source={
          isError || !image
            ? require('../../assets/img/bg/SanremoCity.jpg')
            : {uri: image}
        }
        resizeMode="cover"
      />
    </View>
  );
};

export default ImageRender;

const styles = StyleSheet.create({
  imageContainer: {
    // width: '90%',
    height: 300,
    borderRadius: 20,
    marginVertical: 20,
    overflow: 'hidden',
    // Тіні для iOS
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 6,
    // Тіні для Android
    elevation: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
});
