import AsyncStorage from '@react-native-community/async-storage';
import EmailModal from '../../components/modals/email'

class EmailRequest {
  static async showModal(festivalDayIndex) {
    const alreadyShown = await AsyncStorage.getItem('shown_email_modal');
    
    if (alreadyShown) {
      return
    }

    if (festivalDayIndex === 2) {
      EmailModal.getRef().show();
      AsyncStorage.setItem('shown_email_modal', 'true');
    }
  }
}

export default EmailRequest
