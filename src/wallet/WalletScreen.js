import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Platform, StyleSheet, Text, View } from 'react-native';
import get from 'lodash/get';
import { getWalletHoldingsStatisticDucks } from './ducks';

type Props = {
  walletStatistic?: Object,
  getWalletHoldingsStatisticDucksFetch: Function
};
class WalletScreen extends Component<Props> {
  componentDidMount() {
    const { getWalletHoldingsStatisticDucksFetch } = this.props;
    getWalletHoldingsStatisticDucksFetch();
  }

  render() {
    const { walletStatistic } = this.props;
    return (
      <View style={styles.container}>
        <Text>{get(walletStatistic, 'currentAmount')}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
});

const mapStateToProps = state => {
  return {
    walletStatistic: get(
      getWalletHoldingsStatisticDucks.selector(state),
      'payload.data'
    )
  };
};

const mapDispatchToProps = {
  getWalletHoldingsStatisticDucksFetch:
    getWalletHoldingsStatisticDucks.requestActions.fetch
};

WalletScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(WalletScreen);

export default WalletScreen;
