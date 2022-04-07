require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/za7jOpTaBfDrZE_mNF9bl0V0Qaqfs48N',
      accounts: [
        '08af2a993674032584ee6a3dcee1fcc4cb576fc0f290ca1ea022984296d6a620',
      ],
    },
  },
}
