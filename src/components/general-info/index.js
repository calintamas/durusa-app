import React from 'react';
import { ScrollView, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import Header from '../header';
import Separator from '../separator';
import TextBlock from '../text-block';
import { images } from '../../assets';
import styles from './styles';

const GeneralInfo = (props) => {
  return (
    <SafeAreaView style={styles.base}>
      <ImageBackground
        imageStyle={styles.bgImg}
        style={styles.bg}
        source={images.home_bg}
        resizeMode='cover'>
        <Header
          title={props.headerTitle}
          onPressLeft={() => props.navigation.goBack()}
        />
        <ScrollView>
          <Separator />
          <TextBlock text={props.text} />
          <Separator />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default GeneralInfo;
