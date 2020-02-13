
import * as React from 'react';
import { Text, View, StatusBar } from 'react-native';
export default class App extends React.Component {
  state = {
    jsonData: '',
  };
  componentDidMount() {
    fetch('https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(json => {
        this.setState({
          jsonData: json.body,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
  render() {
    return (
      <View style={{ paddingTop: 30 }}>
        <Text>{this.state.jsonData}</Text>
      </View>
    );
  }
}