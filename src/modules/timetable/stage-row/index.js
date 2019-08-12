import React, { Component } from 'react'
import { View, FlatList, Text } from 'react-native'

import EventCard from '../../../components/event-card'
import ActivityEventCard from '../../../components/activity-event-card'
import styles from './styles'

export default class StageRow extends Component {
  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
    this.goToEventItem = this.goToEventItem.bind(this);
  }

  keyExtractor(item, index) {
    return `${index}`
  }

  goToEventItem(data) {
    this.props.navigation.navigate('EventItem', { data });
  }

  renderItem({ item }) {
    const EventCardComponent = this.props.isVertical ? ActivityEventCard : EventCard;
    const isFavorited = this.props.favorites.indexOf(item.id) >= 0;
    return (
      <EventCardComponent
        data={item}
        isFavorited={isFavorited}
        onPress={() => this.goToEventItem({ ...item, location: this.props.title })} />
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
    const { data, title, isVertical, isLast, favorites } = this.props;

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
          extraData={favorites}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.renderItemSeparator}
          ListFooterComponent={this.renderListFooterComponent} />
      </View>
    );
  }
}
