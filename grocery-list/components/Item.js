import { StyleSheet, View, Text, Modal } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Button from './Button';
import Note from '../screens/Note';

export default class Item extends Component {
  state = {
    showModal: false,
  };

  static propTypes = {
    id: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    image: PropTypes.number,
    isPurchased: PropTypes.bool.isRequired,
    onEditPress: PropTypes.func.isRequired,
    onRemovePress: PropTypes.func.isRequired,
    onPurchase: PropTypes.func.isRequired,
    onRemovePurchase: PropTypes.func.isRequired,
  };

  handlePurchase = () => {
    const { id, onPurchase } = this.props;

    onPurchase(id);
  };

  handleRemovePurchase = () => {
    const { id, onRemovePurchase } = this.props;

    onRemovePurchase(id);
  };

  handleRemovePress = () => {
    const { id, onRemovePress } = this.props;

    onRemovePress(id);
  };

  openNoteScreen = id => {
    this.setState({
      showModal: true,
      selectedItemId: id,
    });
  };

  closeNoteScreen = () => {
    this.setState({
      showModal: false,
      selectedItemId: null,
    });
  };

  renderActionButton() {
    const { isPurchased } = this.props;

    if (isPurchased) {
      return (
        <View style={[ styles.button, {backgroundColor: '#DB2828' }]}><Button
          color="white"
          item="Remove Purchase"
          onPress={this.handleRemovePurchase}
        /></View>
      );
    } else {
      return (
        <View style={[ styles.button, {backgroundColor: '#21BA45' }]}><Button
          color="white"
          item="Purchase"
          onPress={this.handlePurchase}
        /></View>
      );
    }
  }

  render() {
    const { id, item, quantity, onEditPress, image, note } = this.props;
    const { showModal } = this.state;

    var source = image || require('../assets/products/placeholder.png');

    return (
      <View style={styles.itemContainer}>
        <View style={styles.row}>
          <Text style={styles.item}>{item}</Text>
          <Text style={styles.quantity}>Quantity: {quantity}</Text>
        </View>
        <View style={styles.imageBox}>
        <View style={[ styles.button, {backgroundColor: 'gray' }]}><Button
            color="white"
            small
            item="View Notes"
            onPress={this.openNoteScreen}
          /></View>
        </View>
        <View style={styles.buttonGroup}>
        <View style={[ styles.button, {backgroundColor: 'blue' }]}><Button
            color="white"
            small
            item="Edit"
            onPress={onEditPress}
          /></View>
          <View style={[ styles.button, {backgroundColor: 'blue' }]}><Button
            color="white"
            small
            item="Remove"
            onPress={this.handleRemovePress}
          /></View>
        </View>
        {this.renderActionButton()}

        <Modal
          visible={showModal}
          animationType="slide"
          onRequestClose={this.closeNoteScreen}
        >
          <Note
            id={this.state.selectedItemId}
            note={note}
            onClose={this.closeNoteScreen}
          />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: 'white',
    borderColor: '#d6d7da',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginBottom: 0,
  },
  item: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  imageBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5,
    margin: 'auto'
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quantity: {
    textAlign: 'right'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
