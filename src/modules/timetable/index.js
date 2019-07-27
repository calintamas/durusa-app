import React, { Component } from 'react'
import { ScrollView, RefreshControl } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { apiStateCreator } from 'reddeck'
import { TabView } from 'react-native-tab-view'

import StageRow from './stage-row'
import HeaderTabBar from '../../components/header-tab-bar'
import { Firestore } from '../../services/firebase'
import { setScrollViewRef } from '../../navigator/utils'
import { metrics } from '../../styles'
import styles from './styles'

export default class Timetable extends Component {
  static navigationOptions = {
    title: 'Timetable',
    header: null
  }

  constructor(props) {
    super(props);
    this.onCollectionUpdate = this.onCollectionUpdate.bind(this);
    this.onRefresh = this.onRefresh.bind(this);
    this.getData = this.getData.bind(this);
    this.setData = this.setData.bind(this);
    this.setScrollViewRef = this.setScrollViewRef.bind(this);
    this.renderScene = this.renderScene.bind(this);
    this.onIndexChange = this.onIndexChange.bind(this);
    this.renderTabBar = this.renderTabBar.bind(this);

    this.state = {
      data: [],
      api: apiStateCreator({ pending: true }),

      header: {
        index: 0,
        routes: [
          {
            key: 'day1',
            title: 'day 1',
            subtitle: '23.08'
          },
          {
            key: 'day2',
            title: 'day 2',
            subtitle: '24.08'
          },
          {
            key: 'day3',
            title: 'day 3',
            subtitle: '25.08'
          }
        ]
      }
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

  renderTimetable(day) {
    const events = this.state.data;
    const stages = Object.keys(this.state.data).sort((a, b) => events[a].location.order - events[b].location.order)

    return (
      <ScrollView
        contentContainerStyle={styles.rowsContainer}
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
    )
  }

  renderScene({ route, jumpTo }) {
    switch (route.key) {
      case 'day1':
        return this.renderTimetable(1)

      case 'day2':
        return this.renderTimetable(2)

      case 'day3':
        return this.renderTimetable(3)

      default:
        return null
    }
  }

  onIndexChange(index) {
    this.setState((state) => {
      return ({
        ...state,
        header: {
          ...state.header,
          index
        }
      })
    })
  }

  renderRefreshControl() {
    return (
      <RefreshControl
        refreshing={this.state.api.pending}
        onRefresh={this.onRefresh} />
    )
  }

  renderTabBar(selfProps) {
    return (
      <HeaderTabBar
        {...selfProps}
        onIndexChange={this.onIndexChange} />
    )
  }

  render() {
    return (
      <SafeAreaView style={styles.base}>
        <TabView
          lazy
          swipeEnabled
          navigationState={this.state.header}
          renderScene={this.renderScene}
          onIndexChange={this.onIndexChange}
          initialLayout={{ width: metrics.screenWidth, height: metrics.screenHeight }}
          renderTabBar={this.renderTabBar}
        />
      </SafeAreaView>
    )
  }
}
