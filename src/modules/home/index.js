import React, { Component } from 'react'
import { View, Image, FlatList, ImageBackground, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { apiStateCreator } from 'reddeck'

import NewsCard from '../../components/news-card'
import Countdown from '../../components/countdown'
import { images } from '../../assets'
import { Firestore } from '../../services/firebase'
import { setScrollViewRef } from '../../navigator/utils'
import Time from '../../services/time'
import styles from './styles'

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
    header: null
  }

  constructor(props) {
    super(props);
    this.onCollectionUpdate = this.onCollectionUpdate.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
    this.onRefresh = this.onRefresh.bind(this);
    this.getData = this.getData.bind(this);
    this.setData = this.setData.bind(this);
    this.onCardPress = this.onCardPress.bind(this);
    this.setScrollViewRef = this.setScrollViewRef.bind(this);

    this.state = {
      data: [],
      api: apiStateCreator({ pending: true })
    }
  }

  componentDidMount() {
    this.firestoreRef = Firestore.getCollectionRef('news').orderBy('date', 'desc');
    this.unsubscribe = this.firestoreRef.onSnapshot(this.onCollectionUpdate)
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  keyExtractor(item, index) {
    return `${index}`
  }

  renderItem({ item, index }) {
    return (
      <NewsCard
        title={item.title}
        text={item.text}
        date={item.date}
        icon={item.icon}
        onPress={() => this.onCardPress(item)} />
    )
  }

  renderHeader() {
    return (
      <View style={styles.headerContainer}>
        <ImageBackground
          style={styles.bg}
          source={images.home_bg}>
          <Image
            style={styles.logo}
            source={images.logo}
            resizeMode='contain' />

          {
            Time.isBeforeFestival(this.props.days)
              ? <Countdown date={Time.getFirstDay(this.props.days)} />
              : null
          }
        </ImageBackground>
      </View>
    )
  }

  renderItemSeparator() {
    return (
      <View style={styles.separator} />
    )
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
      data,
      api: apiStateCreator({ success: true })
    })
  }

  onCardPress(item) {
    if (!item.text) {
      return
    }
    this.props.navigation.navigate('NewsItem', {
      data: item
    })
  }

  setScrollViewRef(ref) {
    setScrollViewRef.call(this, ref, { prefix: 'Home' })
  }

  render() {
    const data = this.state.data;

    return (
      <SafeAreaView style={styles.base}>
        <StatusBar barStyle='light-content' />
        <FlatList
          ref={this.setScrollViewRef}
          contentContainerStyle={styles.contentContainer}
          data={data}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          ListHeaderComponent={this.renderHeader}
          ItemSeparatorComponent={this.renderItemSeparator}
          refreshing={this.state.api.pending}
          onRefresh={this.onRefresh} />
      </SafeAreaView>
    )
  }
}
