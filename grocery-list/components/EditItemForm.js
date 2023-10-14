import { StyleSheet, View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import ItemButton from './Button';

export default class EditItemForm extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    item: PropTypes.string,
    quantity: PropTypes.number,
    isPurchased: PropTypes.bool,
    onFormSubmit: PropTypes.func.isRequired,
    onFormClose: PropTypes.func.isRequired,
  };

  static defaultProps = {
    id: null,
    item: '',
    quantity: 0,
    isPurchased: false,
  };

  constructor(props) {
    super(props);

    const { id, item, quantity, isPurchased } = props;

    this.state = {
      item: id ? item : '',
      quantity: id ? quantity : 0,
      isPurchased: id ? isPurchased : false,
    };
  }

  handleItemChange = item => {
    this.setState({ item });
  };

  handleQuantityChange = quantity => {
    quantity = parseInt(quantity)
    if (isNaN(quantity))
    {
      quantity = 1;
    }

    this.setState({ quantity });
  };

  handleSubmit = () => {
    const { onFormSubmit, id, isPurchased } = this.props;
    const { item, quantity } = this.state;

    onFormSubmit({
      id,
      item,
      quantity,
      isPurchased,
    });
  };

  render() {
    const { id, onFormClose, isPurchased } = this.props;
    const { item, quantity } = this.state;

    const submitText = id ? 'Update' : 'Create';
    const purchaseStatus = isPurchased ? 'This item has been purchased' : 'This item has not yet been purchased';

    return (
      <View style={styles.formContainer}>
        <View style={styles.attributeContainer}>
          <Text style={styles.textInputitem}>Item</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid="transparent"
              onChangeText={this.handleItemChange}
              value={item}
            />
          </View>
        </View>
        <View style={styles.attributeContainer}>
          <Text style={styles.textInputitem}>Quantity</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              keyboardType="numeric"
              style={styles.textInput}
              underlineColorAndroid="transparent"
              onChangeText={this.handleQuantityChange}
              value={quantity.toString()}
            />
          </View>
        </View>
        <View style={styles.attributeContainer}>
          <Text style={styles.purchaseStatus}>{purchaseStatus}</Text>
        </View>
        <View style={styles.buttonGroup}>
          <ItemButton
            small
            color="#21BA45"
            item={submitText}
            onPress={this.handleSubmit}
          />
          <ItemButton
            small
            color="#DB2828"
            item="Cancel"
            onPress={onFormClose}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: 'white',
    borderColor: '#D6D7DA',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginBottom: 0,
  },
  attributeContainer: {
    marginVertical: 8,
  },
  textInputContainer: {
    borderColor: '#D6D7DA',
    borderRadius: 2,
    borderWidth: 1,
    marginBottom: 5,
  },
  textInput: {
    height: 30,
    padding: 5,
    fontSize: 12,
  },
  textInputitem: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  purchaseStatus: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
