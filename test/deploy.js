const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bycode } = require('./compile');

const provider = new HDWalletProvider(
    'armed shaft biology square fog pond uncover drop decade upgrade negative gasp',
    'https://rinkeby.infura.io/v3/7c9773b0fc3f4486a21cb7840ac685ea'
);
cosnt web3 = new Web3(provider);

