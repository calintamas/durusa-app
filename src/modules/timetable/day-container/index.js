import React, { PureComponent } from 'react'
import { ScrollView, RefreshControl } from 'react-native'

import StageRow from '../stage-row'
import styles from './styles'

export default class DayContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      rowHeights: new Array(props.locations.length).fill(340)
    }
  }

  renderRefreshControl(props) {
    return (
      <RefreshControl
        refreshing={props.refreshing}
        onRefresh={props.onRefresh} />
    )
  }

  render() {
    const {
      data,
      locations,
      scrollViewRef,
      navigation,
      favorites
    } = this.props;

    const rowHeights = this.state.rowHeights;
    const snappyConfig = {
      decelerationRate: 'fast',
      snapToAlignment: 'start',
      snapToEnd: false,
      snapToOffsets: locations.map((_, index) => {
        const offset = index !== 0 ? 55 : 0;
        if (index === locations.length - 1) {
          return index * (rowHeights[index - 1] + offset)
        }
        return index * (rowHeights[index] + offset)
      })
    };

    return (
      <ScrollView
        {...snappyConfig}
        ref={scrollViewRef}
        contentContainerStyle={styles.base}
        refreshControl={this.renderRefreshControl(this.props)}>
        {
          locations.map((location, index) => {
            if (!data[location.id]) {
              return null
            }
            return (
              <StageRow
                key={index}
                title={location.name}
                data={data[location.id]}
                isVertical={location.id === 'location-order-3'}
                isLast={index === locations.length - 1}
                navigation={navigation}
                favorites={favorites} />
            )
          })
        }
      </ScrollView>
    )
  }
}
