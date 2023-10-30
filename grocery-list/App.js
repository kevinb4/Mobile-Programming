import React from 'react';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from "uuid";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AsyncStorage from '@react-native-async-storage/async-storage';

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
import ToggleableItemForm from './components/ToggleableItemForm';

const backgroundImage = require('./assets/grocery.jpg');

export default class App extends React.Component {
  state = {
    items: [],
    showModal: false,
  };

  async componentDidMount() {
    try {
      const itemsList = await AsyncStorage.getItem('itemsList');

      if (itemsList) {
        this.setState({
          items: JSON.parse(itemsList),
        });
      }
    } catch (e) {
      this.setState({
        items: {},
      });
      console.log(e);
    }
  }

  handleFormSubmit = async attrs => {
    const { items } = this.state;

    const itemsList = items.map(itemData => {
      if (itemData.id === attrs.id) {
        const { item, quantity, note } = attrs;

        return {
          ...itemData,
          item,
          quantity,
          note
        };
      }

      return itemData;
    });

    this.setState({
      items: itemsList,
    });

    try {
      await AsyncStorage.setItem('itemsList', JSON.stringify(itemsList));
    } catch (e) {
      console.log('Failed to save the note, ', e);
    }
  };

  handleRemovePress = itemId => {
    this.setState({
      items: this.state.items.filter(i => i.id !== itemId),
    }, () => {
      try {
        AsyncStorage.setItem('itemsList', JSON.stringify(this.state.items));
      } catch (e) {
        console.log('Failed to save, ', e);
      }
    });
  };

  handleCreateFormSubmit = item => {
    const { items } = this.state;

    item.id = uuidv4();

    this.setState({
      items: [item, ...items],
    }, () => {
      try {
        AsyncStorage.setItem('itemsList', JSON.stringify(this.state.items));
      } catch (e) {
        console.log('Failed to save the note, ', e);
      }
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
    }, () => {
      try {
        AsyncStorage.setItem('itemsList', JSON.stringify(this.state.items));
      } catch (e) {
        console.log('Failed to save the note, ', e);
      }
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
            <ToggleableItemForm
              onFormSubmit={this.handleCreateFormSubmit}
            />
            {items.map(
              ({ item, quantity, id, isPurchased, image, note }) => (
                <EditableItem
                  key={id}
                  id={id}
                  item={item}
                  quantity={quantity}
                  image={image}
                  note={note}
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
