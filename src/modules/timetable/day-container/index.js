import React, { PureComponent } from 'react'
import { ScrollView, RefreshControl } from 'react-native'

import StageRow from '../stage-row'
import styles from './styles'

export default class DayContainer extends PureComponent {
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
      scrollViewRef
    } = this.props;

    const snappyConfig = {
      pagingEnabled: true,
      decelerationRate: 'fast',
      snapToAlignment: 'center',
      snapToOffsets: locations.map((_, index) => {
        const offset = index !== 0 ? 55 : 0;
        if (index === locations.length - 1) {
          return 0
        }
        return index * (340 + offset)
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
                isLast={index === locations.length - 1} />
            )
          })
        }
      </ScrollView>
    )
  }
}
