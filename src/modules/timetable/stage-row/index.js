import React, { Component } from 'react'
import { View, FlatList, Text } from 'react-native'

import EventCard from '../../../components/event-card'
import styles from './styles'

export default class StageRow extends Component {
  keyExtractor(item, index) {
    return `${index}`
  }

  renderItem({ item }) {
    return (
      <EventCard
        data={item} />
    )
  }

  renderListFooterComponent() {
    // Render a right margin for the last item in the list
    return (
      <View style={styles.lastItemMargin} />
    )
  }

  renderItemSeparator() {
    return (
      <View style={styles.separator} />
    )
  }

  render() {
    const { data, title } = this.props;

    return (
      <View style={styles.base}>
        <Text style={styles.title}>{title}</Text>

        <FlatList
          style={styles.list}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={this.keyExtractor}
          data={data}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.renderItemSeparator}
          ListFooterComponent={this.renderListFooterComponent} />
      </View>
    );
  }
}
