import favoritesAC from './action-creators'
import favoritesSelectors from './selectors'
import PushNotifications from '../../services/notifications'
import Time from '../../services/time'

const add = (eventData = {}) => async (dispatch, getState) => {
  const scheduleDate = Time.getScheduleDate(eventData.start_date);

  if (scheduleDate) {
    PushNotifications.scheduleNotification({
      id: `${eventData.id}`,
      title: `${eventData.name}`,
      message: `${eventData.name} is coming up in 30 mins @ ${eventData.location}`,
      date: new Date(scheduleDate)
    })
  }

  dispatch(favoritesAC.add({
    eventID: eventData.id
  }))
}

const remove = (eventData = {}) => async (dispatch, getState) => {
  PushNotifications.cancelNotification(eventData.id)
  dispatch(favoritesAC.remove({
    eventID: eventData.id
  }))
}

const toggle = (eventData = {}) => async (dispatch, getState) => {
  const isFavorited = !!favoritesSelectors.getByID(eventData.id)(getState());
  if (isFavorited) {
    return dispatch(remove(eventData));
  }
  return dispatch(add(eventData));
}

export default {
  toggle
}
