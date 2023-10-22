import PropTypes from 'prop-types';
import React from 'react';

import Item from './Item';
import ItemForm from './EditItemForm';

export default class EditableItem extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    image: PropTypes.number,
    isPurchased: PropTypes.bool.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
    onRemovePress: PropTypes.func.isRequired,
    onPurchase: PropTypes.func.isRequired,
    onRemovePurchase: PropTypes.func.isRequired,
  };

  state = {
    editFormOpen: false,
  };

  handleEditPress = () => {
    this.openForm();
  };

  handleFormClose = () => {
    this.closeForm();
  };

  handleSubmit = item => {
    const { onFormSubmit } = this.props;

    onFormSubmit(item);
    this.closeForm();
  };

  closeForm = () => {
    this.setState({ editFormOpen: false });
  };

  openForm = () => {
    this.setState({ editFormOpen: true });
  };

  render() {
    const {
      id,
      item,
      quantity,
      image,
      isPurchased,
      onRemovePress,
      onPurchase,
      onRemovePurchase,
    } = this.props;
    const { editFormOpen } = this.state;

    if (editFormOpen) {
      return (
        <ItemForm
          id={id}
          item={item}
          quantity={quantity}
          image={image}
          isPurchased={isPurchased}
          onFormSubmit={this.handleSubmit}
          onFormClose={this.handleFormClose}
        />
      );
    }

    return (
      <Item
        id={id}
        item={item}
        quantity={quantity}
        image={image}
        isPurchased={isPurchased}
        onEditPress={this.handleEditPress}
        onRemovePress={onRemovePress}
        onPurchase={onPurchase}
        onRemovePurchase={onRemovePurchase}
      />
    );
  }
}
