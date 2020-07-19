import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

class Firestore {
  static async signInAnonymously() {
    try {
      const data = await auth().signInAnonymously();
      return data.user;
    } catch (err) {
      return {};
    }
  }

  static getCollectionRef(collectionName = '') {
    return firestore().collection(collectionName);
  }

  static async saveDeviceToken({ token, os }) {
    const ref = this.getCollectionRef('users').doc(token);
    const doc = await ref.get();

    if (doc.exists) {
      return;
    }

    ref.set({ token, os });
  }

  static saveEmail(email) {
    const ref = this.getCollectionRef('emails').doc(email);
    ref.set({ email });
  }
}

export default Firestore;
