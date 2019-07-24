import React from 'react'

import BackButton from '../components/buttons/back'
import CloseButton from '../components/buttons/close'
import { colors } from '../styles'

const HeaderLeft = (props) => {
  return (
    props.iconType === 'close'
      ? <CloseButton {...props} />
      : <BackButton {...props} />
  )
};

const getDefaultNavigationOptions = ({ navigation, headerLeftIconType = 'back', headerLeftOnPress = null }) => {
  const headerLeft = (
    <HeaderLeft
      onPress={() => {
        if (headerLeftOnPress) {
          headerLeftOnPress();
        }
        navigation.pop()
      }}
      iconType={headerLeftIconType} />
  );

  return ({
    cardStyle: {
      shadowColor: 'transparent',
    },
    headerStyle: {
      backgroundColor: colors.black,
      borderBottomWidth: 0,
      elevation: 0,
      shadowOpacity: 0,
      shadowColor: 'transparent'
    },
    headerTintColor: colors.yellow,
    headerLeft
  })
};

export {
  getDefaultNavigationOptions
}
