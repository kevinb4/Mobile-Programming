import React from 'react';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from "uuid";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import {
  ImageBackground,
  StyleSheet,
  View,
  ScrollView,
  Text,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';

import EditableItem from './components/EditableItem';
import ToggleableItemForm from './components/ToggleableItemForm';

const backgroundImage = require('./assets/grocery.jpg');

export default class App extends React.Component {
  state = {
    items: [
      {
        item: 'Cereal',
        quantity: 1,
        id: uuidv4(),
        isPurchased: true,
      },
      {
        item: 'Carrots',
        quantity: 1,
        id: uuidv4(),
        isPurchased: false,
      },
    ],
  };

  handleFormSubmit = attrs => {
    const { items } = this.state;

    this.setState({
      items: items.map(itemData => {
        if (itemData.id === attrs.id) {
          const { item, quantity } = attrs;

          return {
            ...itemData,
            item,
            quantity,
          };
        }

        return itemData;
      }),
    });
  };

  handleRemovePress = itemId => {
    this.setState({
      items: this.state.items.filter(t => t.id !== itemId),
    });
  };

  handleCreateFormSubmit = item => {
    const { items } = this.state;

    item.id = uuidv4();

    this.setState({
      items: [item, ...items],
    });
  };

  toggleItem = itemId => {
    this.setState(prevState => {
      const { items } = prevState;

      return {
        items: items.map(item => {
          const { id, isPurchased } = item;

          if (id === itemId) {
            return {
              ...item,
              isPurchased: !isPurchased,
            };
          }

          return item;
        }),
      };
    });
  };

  render() {
    const { items } = this.state;

    return (
      <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.imageContainer}>
      <StatusBar barStyle="light-content" />
      <KeyboardAwareScrollView
        extraScrollHeight={100}
        enableOnAndroid={true}
        keyboardShouldPersistTaps='handled'
        style={styles.itemListContainer}
      >
      <View style={styles.appContainer}>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>Grocery List</Text>
        </View>
        <KeyboardAvoidingView
          behavior="padding"
          style={styles.itemListContainer}
        >
          <ScrollView contentContainerStyle={styles.itemList}>
            <ToggleableItemForm
              onFormSubmit={this.handleCreateFormSubmit}
            />
            {items.map(
              ({ item, quantity, id, isPurchased }) => (
                <EditableItem
                  key={id}
                  id={id}
                  item={item}
                  quantity={quantity}
                  isPurchased={isPurchased}
                  onFormSubmit={this.handleFormSubmit}
                  onRemovePress={this.handleRemovePress}
                  onPurchase={this.toggleItem}
                  onRemovePurchase={this.toggleItem}
                />
              ),
            )}
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
      </KeyboardAwareScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    color: '#fff',
  },
  imageContainer: {
    flex: 1,
  },
  statusBar: {
    color: '#fff',
    backgroundColor: '#fff',
  },
  itemContainer: {
    paddingTop: 35,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#D6D7DA',
  },
  item: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff'
  },
  itemListContainer: {
    flex: 1,
  },
  itemList: {
    paddingBottom: 15,
  },
});
