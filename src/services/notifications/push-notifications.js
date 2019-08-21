import PN from 'react-native-push-notification'

import config from '../../config'
import deviceActions from '../../redux/device/actions'
import store from '../../redux/store'

class PushNotifications {
  static configure() {
    PN.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: async function(token) {
        store.dispatch(deviceActions.setToken({
          token: token.token,
          os: token.os
        }));
      },

      // (required) Called when a remote or local notification is opened or received
      onNotification: function(notification) {
        // required on iOS only (see fetchCompletionHandler docs: https://github.com/react-native-community/react-native-push-notification-ios)
        notification.finish('backgroundFetchResultNoData');
      },

      // ANDROID ONLY: GCM or FCM Sender ID (product_number) (optional - not required for local notifications, but is need to receive remote push notifications)
      senderID: config.firebase_sender_id,

      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: true,
        sound: true
      },

      // Should the initial notification be popped automatically
      // default: true
      popInitialNotification: true,

      /**
       * (optional) default: true
       * - Specified if permissions (ios) and token (android and ios) will requested or not,
       * - if not, you must call PushNotificationsHandler.requestPermissions() later
       */
      requestPermissions: true
    })
  }

  static scheduleNotification(payload = {}) {
    return PN.localNotificationSchedule({
      id: payload.id,
      userInfo: { id: payload.id },
      title: payload.title,
      message: payload.message,
      date: payload.date
    });
  }

  static cancelNotification(notificaitonID = '') {
    return PN.cancelLocalNotifications({
      id: `${notificaitonID}`
    });
  }
}

/*
  iOS remote PN payload:
  {
    "aps": {
      "alert": {
        "title": "Hellow",
        "body": "Hello sunshine, here is it!"
      },
  		"sound": "default"
  	}
  }
*/

export default PushNotifications
