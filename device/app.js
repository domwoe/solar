


var Web3 = require('web3');

if(typeof web3 !== 'undefined')
  web3 = new Web3(web3.currentProvider);
else
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));




var abiArray = []; // What's in there?

var contractAddress = '';

var MyContract = web3.eth.contract(abiArray);

var myContractInstance = MyContract.at(contractAddress);