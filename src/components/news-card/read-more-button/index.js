import React from 'react'
import { View } from 'react-native'

import TextButton from '../../buttons/text'
import { icons } from '../../../assets'
import styles from './styles'

const ReadMoreButton = (props) => {
  return (
    <View style={styles.base}>
      <TextButton
        text='Read more'
        icon={icons.right_arrow_yellow}
        disabled />
    </View>
  )
};

export default ReadMoreButton
