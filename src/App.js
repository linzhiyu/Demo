import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AsyncStorage, View, StyleSheet } from 'react-native';
import { persistStore } from 'redux-persist';
import configureStore from './configureStore';
import WalletScreen from './wallet/WalletScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  }
});
type Props = {
  rootSiblings: Array<any>
};

export const store = configureStore();

class App extends Component<Props> {
  constructor() {
    super();
    this.state = { rehydrated: false };
  }
  componentWillMount() {
    persistStore(
      store,
      {
        storage: AsyncStorage,
        whitelist: ['migration']
      },
      () => {
        this.setState({ rehydrated: true });
      }
    );
  }
  render() {
    const { rootSiblings } = this.props;
    if (!this.state.rehydrated) {
      return null;
    }
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <WalletScreen />
          {rootSiblings}
        </View>
      </Provider>
    );
  }
}

export default App;
