import { Firestore } from '../services/firebase'
import Cache from '../services/cache'

const get = async () => {
  const CACHE_KEY = 'durusa_app_locations';
  const cachedData = await Cache.get(CACHE_KEY);
  if (cachedData) {
    return cachedData
  }

  const ref = Firestore.getCollectionRef('locations').orderBy('order', 'asc');
  const querySnapshot = await ref.get();
  const data = querySnapshot.docs.map((doc) => doc.data())

  if (data && data.length) {
    await Cache.set(CACHE_KEY, data, Cache.TTL_5D);
  }
  
  return data
}

export default {
  get
}
