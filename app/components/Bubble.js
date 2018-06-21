import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  containter: {
    borderRadius: 30,
    position: "absolute",
    bottom: 16,
    left: 48,
    right: 48,
    paddingVertical: 16,
    minHeight: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  }
});

class Bubble extends React.PureComponent {
  static propTypes = {
    onPress: PropTypes.func,
    children: PropTypes.object.isRequired
  };

  render() {
    let innerChildView = this.props.children;

    if (this.props.onPress) {
      innerChildView = (
        <TouchableOpacity onPress={this.props.onPress}>
          {this.props.children}
        </TouchableOpacity>
      );
    }

    return <View style={styles.containter}>{innerChildView}</View>;
  }
}

export default Bubble;
