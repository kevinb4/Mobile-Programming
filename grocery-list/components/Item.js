import { StyleSheet, View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Button from './Button';

export default class Item extends Component {
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
    const { item, quantity, onEditPress, image } = this.props;

    var source = image || require('../assets/products/placeholder.png');

    return (
      <View style={styles.itemContainer}>
        <View style={styles.row}>
          <Text style={styles.item}>{item}</Text>
          <Text style={styles.quantity}>Quantity: {quantity}</Text>
        </View>
        <View style={styles.imageBox}>
          <Image
              source={source}
              style={styles.image}
          />
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
