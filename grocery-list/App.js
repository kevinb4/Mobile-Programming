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
import Avatar from './components/Avatar';
import getAvatarColor from './utils/getAvatarColor';
import getInitials from './utils/getInitials';
// import ToggleableItemForm from './components/ToggleableItemForm';

const backgroundImage = require('./assets/grocery.jpg');

export default class App extends React.Component {
  state = {
    items: [
      {
        item: 'Bread',
        quantity: 1,
        image: require('./assets/products/bread.jpg'),
        id: uuidv4(),
        isPurchased: false,
      },
      {
        item: 'Milk',
        quantity: 1,
        image: require('./assets/products/milk.png'),
        id: uuidv4(),
        isPurchased: false,
      },
      {
        item: 'Olive Oil',
        quantity: 1,
        image: require('./assets/products/oliveoil.jpg'),
        id: uuidv4(),
        isPurchased: false,
      },
      {
        item: 'Cereal',
        quantity: 1,
        image: require('./assets/products/cereal.jpg'),
        id: uuidv4(),
        isPurchased: false,
      },
      {
        item: 'Carrots',
        quantity: 1,
        image: require('./assets/products/carrots.jpg'),
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
    const fullname = "Kevin Baran";

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
          <Avatar
            size={35}
            initials={getInitials(fullname)}
            backgroundColor={getAvatarColor(fullname)}
          />
        </View>
        <KeyboardAvoidingView
          behavior="padding"
          style={styles.itemListContainer}
        >
          <ScrollView contentContainerStyle={styles.itemList}>
            {/* this is no longer in the main app according to the example images*/}
            {/* <ToggleableItemForm
              onFormSubmit={this.handleCreateFormSubmit}
            /> */}
            {items.map(
              ({ item, quantity, id, isPurchased, image }) => (
                <EditableItem
                  key={id}
                  id={id}
                  item={item}
                  quantity={quantity}
                  image={image}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  itemListContainer: {
    flex: 1,
  },
  itemList: {
    paddingBottom: 15,
  },
});
