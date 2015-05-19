'use strict';
var React = require('react-native');
var {
  StyleSheet,
  Text,
  View
} = React;

var facemashTab = React.createClass({
  render: function() {
    return (
      <View style={ styles.container } >
        <Text>
          FaceMash Tab!
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

module.exports = facemashTab;
