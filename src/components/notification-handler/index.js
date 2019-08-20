import React, { Component } from 'react'
import { View } from 'react-native'

import PushNotifications from '../../services/notifications'

class NotificationHandler extends Component {
  async componentDidMount() {
    PushNotifications.configure();
  }

  render() {
    // without this android doesn't mount the Component at all
    // eslint-disable-next-line
    const props = this.props;
    return <View />
  }
}

export default NotificationHandler
