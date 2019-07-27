import { Firestore } from '../services/firebase'

const get = async () => {
  const ref = Firestore.getCollectionRef('locations').orderBy('order', 'asc');
  const querySnapshot = await ref.get();
  return querySnapshot.docs.map((doc) => doc.data())
}

export default {
  get
}
