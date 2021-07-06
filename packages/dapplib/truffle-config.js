require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe frown ski stone remember mad solid ice light army gas'; 
let testAccounts = [
"0xe8d4671dbcf77cf9998d6ca2fdc1cbb046493d01dd3f746f6de197f4311e05ad",
"0xa157987b6cc72e057c959dc0559602363524bc35c0a4f52fd8e7d393aa25721c",
"0x6cdc9753251f940acf5f2b2700c1096037e83583a9c0e364ae9e7a5d695313b4",
"0xcbbbcdb6bab43e1abbc0218704d6e031f72964cd8ca629cf03d09e6efa8ccb1b",
"0xbdf67a5e95bce7f17618030166223d519dc71a01875761b7aa5cc4822dd70583",
"0x017e296e70f16aee7a05b38aa68807e29356d39f0ad31804e1e5ba993af46867",
"0x27f938ff8820c98faf26ad34cf1f154a3e9fe600fd3566dc191e098368cceb15",
"0x785e5e865611bfc0a432b017138ac5e1bfc611e7bed0be98930c956df94fa41c",
"0x0bdadfa868f3330574fefc15ce46f86a905067ba092040d72d631879d3866757",
"0xe527d80ca4161227c397bfec04c16a5182171627f6389e9e5d125738ab22705e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

