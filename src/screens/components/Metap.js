import React from 'react';
import { View, StyleSheet, Modal, Platform } from 'react-native';

// = ({ isModalVisible, children }) =>
export class Meta extends React.Component {
  render() {
    const { isModalVisible, children } = this.props;
    return (
        <Modal
          visible={isModalVisible}
          animationType="slide"
          transparent
          statusBarTranslucent={false}
          onRequestClose={() => null}
        >
        <View
          style={[
            styles.container,
            {
              ...Platform.select({
                android: {
                  // paddingTop: shouldMove ? 240 : null,
                },
              }),
            },
          ]}
        >
          <View style={styles.cardMain}>{children}</View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  cardMain: {
    position: 'absolute',
    top: 10,
    width: 327,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});