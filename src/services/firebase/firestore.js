import firebase from 'react-native-firebase'
import { Alert } from 'react-native'

class Firestore {
  static getCollectionRef(collectionName = '') {
    return firebase.firestore().collection(collectionName);
  }

  static async saveDeviceToken({ token, os }) {
    const ref = this.getCollectionRef('users').doc(token);
    const doc = await ref.get();
    console.log('doc', doc);
    if (doc.exists) {
      return
    }
    Alert.alert('saved to firebase', token)
    ref.set({ token, os });
  }
}

export default Firestore
