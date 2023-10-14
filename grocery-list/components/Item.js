import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Button from './Button';

export default class Item extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
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
        <Button
          color="#DB2828"
          item="Remove Purchase"
          onPress={this.handleRemovePurchase}
        />
      );
    } else {
      return (
        <Button
          color="#21BA45"
          item="Purchase"
          onPress={this.handlePurchase}
        />
      );
    }

    
  }

  render() {
    const { item, quantity, onEditPress } = this.props;

    return (
      <View style={styles.itemContainer}>
        <Text>Quantity Needed: {quantity}</Text>
        <Text style={styles.elapsedTime}>{item}</Text>
        <View style={styles.buttonGroup}>
          <Button
            color="blue"
            small
            item="Edit"
            onPress={onEditPress}
          />
          <Button
            color="blue"
            small
            item="Remove"
            onPress={this.handleRemovePress}
          />
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
  elapsedTime: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 15,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
