import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useAppContext} from '../../store/app_context';
import {COLOR} from '../../constant/colors';

const UserAchieves = () => {
  const {easyTrueFalse, hardTrueFalse, quiz} = useAppContext();

  return (
    <View style={{flex: 1}}>
      <Text style={styles.headerText}>EASY </Text>
      {
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}>
          {easyTrueFalse.map((item, i) => {
            return (
              <View
                style={{flexDirection: 'row', gap: 10, marginVertical: 4}}
                key={i}>
                <View style={styles.levelTextContainer}>
                  <Text style={styles.levelText}>{item.topic}</Text>
                </View>
                <View style={styles.levelScoreContainer}>
                  <Text style={styles.levelScore}>{item.score}</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      }
      <Text style={styles.headerText}>HARD</Text>
      {
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}>
          {hardTrueFalse.map((item, i) => {
            return (
              <View
                style={{flexDirection: 'row', gap: 10, marginVertical: 4}}
                key={i}>
                <View style={styles.levelTextContainer}>
                  <Text style={styles.levelText}>{item.topic}</Text>
                </View>
                <View style={styles.levelScoreContainer}>
                  <Text style={styles.levelScore}>{item.score}</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      }
    </View>
  );
};

export default UserAchieves;

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: COLOR.darkBlue + 90,
    marginHorizontal: 60,
    borderRadius: 8,
    paddingVertical: 6,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 20,
    color: COLOR.ocean,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 10,
  },
  scrollContainer: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    // gap: 5,
    // height:'60%'
    // flexGrow:1
    // flex: 1,
    height: 330,
  },
  levelContainer: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10,
    alignItems: 'center',
  },
  levelTextContainer: {
    backgroundColor: COLOR.gold + 90,
    padding: 5,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  levelText: {
    fontSize: 20,
    color: COLOR.softYello,
    fontWeight: '700',
    textAlign: 'center',
  },
  levelScoreContainer: {
    backgroundColor: COLOR.gold + 90,
    borderRadius: 8,
    paddingVertical: 15,
    width: '10%',
    alignItems: 'center',
    paddin: 5,
  },
  levelScore: {
    fontWeight: '700',
    color: COLOR.softYello,
    fontSize: 20,
  },
});
