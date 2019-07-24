import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { apiStateCreator } from 'reddeck'

import { Firestore } from '../../services/firebase'
import styles from './styles'

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
    header: null
  }

  constructor(props) {
    super(props);
    this.onCollectionUpdate = this.onCollectionUpdate.bind(this);

    this.state = {
      data: [],
      api: apiStateCreator({ pending: true })
    }
  }

  componentDidMount() {
    this.firestoreRef = Firestore.getCollectionRef('news');
    this.unsubscribe = this.firestoreRef.onSnapshot(this.onCollectionUpdate)
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onCollectionUpdate(querySnapshot) {
    let data = [];
    querySnapshot.forEach((doc) => data.push(doc.data()));
    this.setState({
      data,
      api: apiStateCreator({ success: true })
    })
  }

  render() {
    const data = this.state.data;

    console.log('this.state', this.state);

    return (
      <View style={styles.base}>
        {
          data.map((item, index) => {
            return (
              <Text key={index}>{item.title}</Text>
            )
          })
        }
      </View>
    );
  }
}
