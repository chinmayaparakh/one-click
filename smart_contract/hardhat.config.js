require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/WXp5ARnMJL7NOlmQa-E5-9q3RD_lPCjy',
      accounts: ['ec573127b961a3d7ed9686b5cab73a94be4b880de1205e4d2bc0bb9bf6aaf1a6'],
    },
  },
};