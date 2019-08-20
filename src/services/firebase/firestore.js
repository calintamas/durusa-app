import firebase from 'react-native-firebase'

class Firestore {
  static getCollectionRef(collectionName = '') {
    return firebase.firestore().collection(collectionName);
  }

  static async saveDeviceToken({ token, os }) {
    const ref = this.getCollectionRef('users').doc(token);
    const doc = await ref.get();

    if (doc.exists) {
      return
    }

    ref.set({ token, os });
  }
}

export default Firestore
