import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import {
  BlurContainer,
  IconGoBack,
  IconLock,
  ImagedBackground,
  ScreenLayour,
} from '../components/ui';
import {useAppContext} from '../store/app_context';
import {COLOR} from '../constant/colors';
import IconResetGame from '../components/ui/IconResetGame';

const {height, width} = Dimensions.get('window');

const WIDTH = width * 0.4;

const TrueFalseScreen = ({route, navigation}) => {
  const complexity = route.params;
  const {requiredLevel} = useAppContext();
  const data = requiredLevel(complexity);
  // console.log(data);
  console.log(data.map(item => item.score));

  function renderList({item}) {
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
        onPress={() => navigation.navigate('TrueFalseGame', {complexity, id})}>
        <Text style={styles.renderListText}>{item.topic} </Text>
        {disable && <IconLock />}
      </TouchableOpacity>
    );
  }

  return (
    // <CustomLinearGradient>
    <ImagedBackground style={{padding: 10}}>
      {/* <BlurContainer blurAmount={1}> */}
      <ScreenLayour>
        <View style={styles.complexBox}>
          <Text style={styles.complexText}>{complexity.toUpperCase()}</Text>
        </View>
        <View style={styles.flatListContainer}>
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={renderList}
            contentContainerStyle={styles.flatListContentContainer}
          />
        </View>
      </ScreenLayour>
      <View
        style={{
          position: 'absolute',
          bottom: 60,
          right: 70,
          flexDirection: 'row',
          gap: WIDTH,
        }}>
        <IconResetGame complexity={complexity} />
        <IconGoBack />
      </View>
      {/* </BlurContainer> */}
    </ImagedBackground>
    // </CustomLinearGradient>
  );
};

export default TrueFalseScreen;

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
  },
  flatListContentContainer: {
    justifyContent: 'center',
    height: '90%',
  },
  complexBox: {
    backgroundColor: COLOR.gold,
    borderRadius: 10,
    width: '25%',
    marginTop: 10,
  },
  complexText: {
    padding: 8,
    fontWeight: '400',
    fontSize: 16,
    letterSpacing: 2,
    textAlign: 'center',
  },
});
