/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  Image
} = React;

var FaceMash = React.createClass({
  getInitialState() {
    return {
      selectedTab: 'faceMash'
    }
  },
  changeTab(tabName) {
    this.setState({
      selectedTab: tabName
    })
  },
  render: function() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          title="FaceMash"
          icon={ require('image!facemash')}
          onPress={ () => this.changeTab('facemash') }
          selected={ this.state.selectedTab === 'facemash'} >
          <View style={styles.pageView}>
            <Text>FaceMash</Text>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Messages"
          icon={ require('image!messages')}
          onPress={ () => this.changeTab('messages') }
          selected={ this.state.selectedTab === 'messages'} >
          <View style={styles.pageView}>
            <Text>FaceMash</Text>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Settings"
          icon={ require('image!settings')}
          onPress={ () => this.changeTab('settings') }
          selected={ this.state.selectedTab === 'settings'} >
          <View style={styles.pageView}>
            <Text>FaceMash</Text>
          </View>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});

var styles = StyleSheet.create({
  pageView: {
    backgroundColor: '#fff',
    flex: 1
  }
});

AppRegistry.registerComponent('FaceMash', () => FaceMash);
