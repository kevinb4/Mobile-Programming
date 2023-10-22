import { FlatList, StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import { getImageFromId } from '../utils/api';
import Card from './Card';

const keyExtractor = ({ id }) => id.toString();

export default class CardList extends React.Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        author: PropTypes.string.isRequired,
      }),
    ).isRequired,
    commentsForItem: PropTypes.objectOf(
      PropTypes.arrayOf(PropTypes.string),
    ).isRequired,
    onPressComments: PropTypes.func.isRequired,
  };

  renderItem = ({ item: { id, author } }) => {
    const { commentsForItem, onPressComments } = this.props;
    const comments = commentsForItem[id];

    return (
      <Card
        fullname={author}
        image={{
          uri: getImageFromId(id),
        }}
        linkText={`${comments ? comments.length : 0} Comments`}
        onPressLinkText={() => onPressComments(id)}
      />
    );
  };

  renderHeader = () => {
    return (
      <View>
        <Text style={styles.header}>Unsplash Photos</Text>
      </View>
    );
  };

  render() {
    const { items, commentsForItem } = this.props;

    return (
      <FlatList
        ListHeaderComponent={this.renderHeader}
        stickyHeaderIndices={[0]}
        data={items}
        extraData={commentsForItem}
        renderItem={this.renderItem}
        keyExtractor={keyExtractor}
      />
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#336699',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: 65,
    color: 'white',
    fontSize: 30,
    padding: 10,
    fontWeight: 'bold',
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 15,
    textShadowColor: '#000',
  },
});