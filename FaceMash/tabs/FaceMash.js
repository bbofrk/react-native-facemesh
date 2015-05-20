'use strict';
var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  ActivityIndicatorIOS
} = React;

var facemashTab = React.createClass({
  getInitialState: function() {
    return {
      list: [],
      currentIndex: 0
    }
  },
  componentWillMount: function() {
    fetch('http://localhost:8882/rest/mash')
      .then(res => res.json())
      .then(res => this.setState({ list: res }));
  },
  render: function() {
    var contents;
    if (!this.state.list.length) {
      contents = (
        <View style={ styles.loading }>
          <Text styels = { styles.loadingText }>Loading</Text>
          <ActivityIndicatorIOS />
        </View>
      )
    }
    else {
      contents = (
        <View style={ styles.content }>
          <Text>Loaded</Text>
        </View>
      )
    };

    return (
      <View style={ styles.container } >
        <View style={ styles.header } >
          <Text style={ styles.headerText }>
            Face Mash
          </Text>
        </View>
        { contents }
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  loading: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingText: {
    fontSize: 14,
    marginBottom: 20
  },
  header: {
    height: 50,
    backgroundColor: '#760004',
    paddingTop: 20,
    alignItems: 'center'
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  }
});

module.exports = facemashTab;
