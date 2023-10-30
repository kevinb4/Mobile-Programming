import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Button from './Button';
import ItemForm from './EditItemForm';

export default class ToggleableItemForm extends Component {
  static propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
  };

  state = {
    isOpen: false,
  };

  handleFormOpen = () => {
    this.setState({ isOpen: true });
  };

  handleFormClose = () => {
    this.setState({ isOpen: false });
  };

  handleFormSubmit = item => {
    const { onFormSubmit } = this.props;

    onFormSubmit(item);
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;

    return (
      <View
        style={[styles.container, !isOpen && styles.buttonPadding]}
      >
        {isOpen ? (
          <ItemForm
            onFormSubmit={this.handleFormSubmit}
            onFormClose={this.handleFormClose}
          />
        ) : (
          <View style={styles.addButton}><Button
            item="Add Item"
            color="white"
            onPress={this.handleFormOpen}
          /></View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addButton: {
    marginTop: 10,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  container: {
    paddingVertical: 10,
  },
  buttonPadding: {
    paddingHorizontal: 15,
  },
});
