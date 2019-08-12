import React, { Component } from 'react'
import { SafeAreaView } from 'react-navigation'
import { apiStateCreator } from 'reddeck'
import { TabView } from 'react-native-tab-view'

import DayContainer from './day-container'
import HeaderTabBar from '../../components/header-tab-bar'
import { Firestore } from '../../services/firebase'
import { setScrollViewRef } from '../../navigator/utils'
import { metrics } from '../../styles'
import { groupData } from './utils'
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
    this.renderScene = this.renderScene.bind(this);
    this.onIndexChange = this.onIndexChange.bind(this);
    this.renderTabBar = this.renderTabBar.bind(this);

    this.state = {
      data: {
        day1: [],
        day2: [],
        day3: []
      },
      api: apiStateCreator({ pending: true })
    }
  }

  componentDidMount() {
    this.firestoreRef = Firestore.getCollectionRef('events').orderBy('start_date', 'asc');
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

    this.setState({
      data: groupData(data),
      api: apiStateCreator({ success: true })
    })
  }

  setScrollViewRef = (pagerIndex = '') => (ref) => {
    setScrollViewRef.call(this, ref, { prefix: `Timetable_${pagerIndex}`, pagerIndex })
  }

  renderScene({ route, jumpTo }) {
    const props = this.props;
    const data = this.state.data;
    const locations = props.locations.data

    const defaultProps = {
      refreshing: this.state.api.pending,
      onRefresh: this.onRefresh,
      navigation: props.navigation,
      favorites: props.favorites
    }

    switch (route.key) {
      case 'day1':
        return (
          <DayContainer
            scrollViewRef={this.setScrollViewRef(0)}
            data={data['day1']}
            locations={locations}
            {...defaultProps} />
        )

      case 'day2':
        return (
          <DayContainer
            scrollViewRef={this.setScrollViewRef(1)}
            data={data['day2']}
            locations={locations}
            {...defaultProps} />
        )

      case 'day3':
        return (
          <DayContainer
            scrollViewRef={this.setScrollViewRef(2)}
            data={data['day3']}
            locations={locations}
            {...defaultProps} />
        )

      default:
        return null
    }
  }

  onIndexChange(index) {
    this.props.setHeaderTab(index);
  }

  renderTabBar(selfProps) {
    return (
      <HeaderTabBar
        {...selfProps}
        onIndexChange={this.onIndexChange} />
    )
  }

  render() {
    const props = this.props;

    return (
      <SafeAreaView style={styles.base}>
        <TabView
          lazy
          swipeEnabled
          navigationState={props.header}
          renderScene={this.renderScene}
          onIndexChange={this.onIndexChange}
          initialLayout={{ width: metrics.screenWidth, height: metrics.screenHeight }}
          renderTabBar={this.renderTabBar} />
      </SafeAreaView>
    )
  }
}
