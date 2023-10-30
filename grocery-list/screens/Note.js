import { SafeAreaView, ViewPropTypes, Button, Text } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

export default function Note({
  style,
  note,
  onClose,
}) {
  return (
    <SafeAreaView style={style}>
    <Text>
      {note}
    </Text>
    <Button
      title="Close Note"
      onPress={onClose}
      color="blue"
    />
    </SafeAreaView>
  );
}

Note.propTypes = {
  style: ViewPropTypes.style,
  note: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

Note.defaultProps = {
  style: null,
};
