import React, { Component } from 'react'
import { View, FlatList, Text } from 'react-native'

import EventCard from '../../../components/event-card'
import ActivityEventCard from '../../../components/activity-event-card'
import styles from './styles'

export default class StageRow extends Component {
  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
  }

  keyExtractor(item, index) {
    return `${index}`
  }

  renderItem({ item }) {
    if (this.props.isVertical) {
      return (
        <ActivityEventCard
          data={item} />
      )
    }

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
    const { data, title, isVertical, isLast } = this.props;

    const baseStyle = [
      styles.base,
      isLast && styles.lastItem
    ];

    return (
      <View style={baseStyle}>
        <Text style={styles.title}>{title}</Text>

        <FlatList
          style={styles.list}
          contentContainerStyle={isVertical && styles.verticalContainer}
          horizontal={!isVertical}
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
