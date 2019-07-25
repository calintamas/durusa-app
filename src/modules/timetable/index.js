import React, { Component } from 'react'
import { View, ScrollView, RefreshControl } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { apiStateCreator } from 'reddeck'

import StageRow from './stage-row'
import { Firestore } from '../../services/firebase'
import { setScrollViewRef } from '../../navigator/utils'
import styles from './styles'

export default class Timetable extends Component {
  static navigationOptions = {
    title: 'Timetable',
    header: null
  }

  constructor(props) {
    super(props);
    this.onCollectionUpdate = this.onCollectionUpdate.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.onRefresh = this.onRefresh.bind(this);
    this.getData = this.getData.bind(this);
    this.setData = this.setData.bind(this);
    this.setScrollViewRef = this.setScrollViewRef.bind(this);

    this.state = {
      data: [],
      api: apiStateCreator({ pending: true })
    }
  }

  componentDidMount() {
    this.firestoreRef = Firestore.getCollectionRef('events');
    this.unsubscribe = this.firestoreRef.onSnapshot(this.onCollectionUpdate)
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  keyExtractor(item, index) {
    return `${index}`
  }

  onCollectionUpdate(querySnapshot) {
    this.setData(querySnapshot);
  }

  onRefresh() {
    this.getData();
  }

  async getData() {
    const querySnapshot = await this.firestoreRef.get();
    this.setData(querySnapshot);
  }

  setData(querySnapshot) {
    let data = [];
    querySnapshot.forEach((doc) => data.push(doc.data()));

    let groupedData = {};
    data.forEach((item) => {
      const locationID = item.location.id;
      if (groupedData[locationID]) {
        groupedData[locationID] = {
          ...groupedData[locationID],
          events: [...groupedData[locationID].events, item]
        }
      } else {
        groupedData[locationID] = {
          location: item.location,
          events: [item]
        }
      }
    })
    this.setState({
      data: groupedData,
      api: apiStateCreator({ success: true })
    })
  }

  setScrollViewRef(ref) {
    setScrollViewRef.call(this, ref, { prefix: 'Timetable' })
  }

  renderItem({ item, index }) {
    const stageItem = this.state.data[item];
    return (
      <StageRow
        stageName={stageItem.location.name}
        events={stageItem.events} />
    )
  }

  renderItemSeparator() {
    return (
      <View style={styles.separator} />
    )
  }

  renderRefreshControl() {
    return (
      <RefreshControl
        refreshing={this.state.api.pending}
        onRefresh={this.onRefresh} />
    )
  }

  render() {
    const events = this.state.data;
    const stages = Object.keys(this.state.data).sort((a, b) => events[a].location.order - events[b].location.order)

    return (
      <SafeAreaView style={styles.base}>
        <ScrollView
          style={styles.base}
          refreshControl={this.renderRefreshControl()}>
          {
            stages.map((key, index) => {
              const data = events[key];
              return (
                <StageRow
                  key={index}
                  title={data.location.name}
                  data={data.events} />
              )
            })
          }
        </ScrollView>
      </SafeAreaView>
    )
  }
}
