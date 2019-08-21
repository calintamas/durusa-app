import React, { Component } from 'react'
import { View, Modal } from 'react-native'

import styles from './styles'

export default class BaseModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false
    };

    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  show() {
    this.setState({ isVisible: true });
  }

  hide() {
    this.setState({ isVisible: false });
  }

  render() {
    return (
      <Modal
        presentationStyle='overFullScreen'
        animationType='fade'
        transparent
        visible={this.state.isVisible}
        onShow={this.props.onShow}
        onRequestClose={this.closeModal}>
        <View style={styles.base}>
          {this.props.children}
        </View>
      </Modal>
    );
  }
}
