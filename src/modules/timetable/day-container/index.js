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

    return (
      <ScrollView
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
                data={data[location.id]} />
            )
          })
        }
      </ScrollView>
    )
  }
}
