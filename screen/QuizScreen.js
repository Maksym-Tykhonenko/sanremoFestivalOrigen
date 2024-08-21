import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import {useAppContext} from '../store/app_context';
import {
  BlurContainer,
  IconGoBack,
  IconLock,
  ImagedBackground,
  ScreenLayour,
} from '../components/ui';
import {COLOR} from '../constant/colors';

const QuizScreen = ({navigation}) => {
  const {quiz} = useAppContext();

  function renderList({item}) {
    // console.log(item.id)
    const id = item.id;
    const disable = !item.active;

    return (
      <TouchableOpacity
        disabled={disable}
        style={[
          styles.renderListBtn,
          {
            backgroundColor: disable ? COLOR.lockedLevel + 90 : COLOR.gold,
          },
        ]}
        data={item}
        onPress={() => navigation.navigate('QuizGameScreen', {id})}>
        <Text style={styles.renderListText}>{item.topic}</Text>
        {disable && <IconLock />}
      </TouchableOpacity>
    );
  }

  return (
    <ImagedBackground style={{alignItems: 'center'}}>
      {/* <BlurContainer blurAmount={9}> */}
      <ScreenLayour>
        <View>
          <FlatList
            data={quiz}
            key={item => item.id}
            renderItem={renderList}
            contentContainerStyle={styles.flatListContentContainer}
          />
        </View>
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
      {/* </BlurContainer> */}
    </ImagedBackground>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  renderListBtn: {
    paddingHorizontal: 40,
    borderEndEndRadius: 40,
    borderStartStartRadius: 40,
    width: '100%',
    alignItems: 'center',
    // backgroundColor: COLOR.yellow + 90,
    marginVertical: 25,
    paddingVertical: 20,
  },
  renderListText: {
    fontWeight: '600',
    fontSize: 26,
    textAlign: 'center',
    color: COLOR.ocean,
    letterSpacing: 3,
  },
  flatListContentContainer: {
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  complexBox: {
    backgroundColor: COLOR.yellow + 90,
    borderRadius: 10,
    width: '20%',
    marginTop: 10,
  },
  complexText: {
    padding: 10,
    fontWeight: '400',
    fontSize: 18,
    letterSpacing: 2,
    textAlign: 'center',
  },
});
