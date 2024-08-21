import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  BlurContainer,
  IconGoBack,
  ImagedBackground,
  ScreenLayour,
} from '../components/ui';
import {COLOR} from '../constant/colors';

const About = () => {
  return (
    <ImagedBackground>
      <BlurContainer blurAmount={1}>
        <ScreenLayour style={{alignItems: 'center'}}>
          <View>
            <Text
              style={{
                marginVertical: 20,
                fontWeight: '700',
                fontSize: 30,
                color: COLOR.darkRed,
              }}>
              Sanremo: The Pearl of Liguria
            </Text>
          </View>
          <ScrollView
            style={{padding: 10, flex: 1}}
            showsVerticalScrollIndicator={false}>
            <Text style={styles.text}>
              San Remo is a charming town on the Ligurian coast, known for its
              mild climate, lush gardens and vibrant cultural life. Founded in
              Roman times, today it is famous not only for its picturesque
              landscapes, but also for music festivals, in particular the famous
              Festival of Italian Song.
            </Text>
            <Text style={styles.text}>
              Strolling through the narrow streets of the old town, you can
              enjoy architectural gems such as the Church of San Sirio and the
              Villa Nobili. The city is also known for its beautiful beaches and
              promenade, where you can spend time enjoying the sea breeze and
              delicious Italian cuisine.
            </Text>
            <Text style={styles.text}>
              San Remo is not only a place for recreation, but also a center of
              cultural events. Various festivals, exhibitions and concerts are
              held here every year, attracting tourists from all over the world.
            </Text>
            <Text style={styles.text}>
              We must not forget about local traditions: growing flowers, in
              particular roses, has become an integral part of the city's
              identity. Every year, an international flower exhibition is held
              here, which impresses with its beauty and diversity.
            </Text>
            <Text style={styles.text}>
              San Remo is an ideal destination for those who want to combine a
              holiday at sea with cultural discoveries and gastronomic delights.
              After visiting this city, you will definitely fall in love with
              its atmosphere and want to come back again.
            </Text>
          </ScrollView>
          <View
            style={{
              //   backgroundColor: COLOR.yellow,
              paddingHorizontal: 40,
              marginVertical: 40,
              alignItems: 'flex-end',
              width: '100%',
            }}>
            <IconGoBack />
          </View>
        </ScreenLayour>
      </BlurContainer>
    </ImagedBackground>
  );
};

export default About;

const styles = StyleSheet.create({
  text: {
    fontWeight: '500',
    marginTop: 30,
    fontSize: 26,
    textAlign: 'center',
    color: COLOR.softYello,
  },
});
