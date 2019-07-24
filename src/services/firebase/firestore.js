import firebase from 'react-native-firebase'

class Firestore {
  static getCollectionRef(collectionName = '') {
    return firebase.firestore().collection(collectionName);
  }
}

export default Firestore
