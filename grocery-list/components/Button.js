import {
  ColorPropType,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

export default function Button({
  color,
  item,
  small,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={[styles.button, { borderColor: color }]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.buttonText,
          small ? styles.small : styles.large,
          { color },
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  color: ColorPropType.isRequired,
  item: PropTypes.string.isRequired,
  small: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
};

Button.defaultProps = {
  small: false,
};

const styles = StyleSheet.create({
  button: {
    minWidth: 100,
  },
  small: {
    fontSize: 14,
    padding: 5,
  },
  large: {
    fontSize: 16,
    padding: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  item: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
