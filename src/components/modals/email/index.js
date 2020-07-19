import React, { Component } from 'react';
import { View, TextInput, Image, Text } from 'react-native';

import { icons } from '../../../assets';
import BaseModal from '../base';
import PrimaryButton from '../../buttons/primary';
import CloseButton from '../../buttons/close';
import { Firestore } from '../../../services/firebase';
import { colors } from '../../../styles';
import styles from './styles';

const validateEmail = (email = '') => {
  // eslint-disable-next-line
  const isEmail = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  return !!email.length && isEmail.test(email);
};

const initialState = {
  email: '',
  error: false
};

export default class EmailModal extends Component {
  static getRef() {
    return this.selfRef;
  }

  static setRef(ref) {
    this.selfRef = ref;
  }

  constructor(props) {
    super(props);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.submit = this.submit.bind(this);

    this.state = initialState;
  }

  show() {
    this.setState(initialState, () => {
      this.modalRef.show();
    });
  }

  hide() {
    this.setState(initialState, () => {
      this.modalRef.hide();
    });
  }

  onChangeText(text) {
    text = text.trim();
    this.setState({
      email: text,
      error: false
    });
  }

  submit() {
    const isValid = validateEmail(this.state.email);
    if (!isValid) {
      return this.setState({ error: true });
    }
    this.hide();
    Firestore.saveEmail(this.state.email);
  }

  render() {
    return (
      <BaseModal ref={(ref) => (this.modalRef = ref)}>
        <View style={styles.base}>
          <View style={styles.closeButtonContainer}>
            <CloseButton onPress={this.hide} />
          </View>

          <View style={styles.contentContainer}>
            <Image
              style={styles.icon}
              source={icons.email}
              resizeMode='contain'
            />

            <Text style={styles.title}>
              {'Get awesome content about Durușa and its friends'}
            </Text>
            <Text style={styles.subtitle}>
              {'Join the Summer Hills community!'}
            </Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, this.state.error && styles.errorInput]}
              value={this.state.email}
              onChangeText={this.onChangeText}
              placeholder='friend@durusa.com'
              placeholderTextColor={colors.white}
              autoFocus
              autoCapitalize='none'
              returnKeyType='done'
              onSubmitEditing={this.submit}
              underlineColorAndroid='transparent'
              autoCompleteType='email'
              keyboardType='email-address'
            />
          </View>

          <View style={styles.buttonContainer}>
            <PrimaryButton text='Subscribe' onPress={this.submit} />
          </View>
        </View>
      </BaseModal>
    );
  }
}
