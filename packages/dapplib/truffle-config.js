require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half climb frown skull traffic develop remember social heavy arch obscure ghost'; 
let testAccounts = [
"0xa3ed5086057eac139ce827bb219b47ec6a049f857ee2344b7aab4ea52fb6af92",
"0xd88634624d311e75457398499e7a9f010fd1c5d4edf26c7a0116f9cff10cc118",
"0xdcab2c676f9b9e1cce014e6d456c1b8d9527fe88ae8b59e5f1e28d11eda9f94c",
"0xe3368a012203bfa6688074d7c485d014788255ab1b3418c74057ebb4b4f38bcd",
"0x082e8d7e88af136df7bf54b30446b59aa99ebfbe623f03d6f8d75e27693a7d60",
"0x4f61c651944cc36fd2ba52736b52178dc61fece01858a3cc4345a7104ea24439",
"0x5c666493ea7813996b1cb0d2868b2186405032a6b8226a3cddecb90a315d3cdf",
"0xebab00a48c6785e7c0fe59a5e6067c814f8473cf0bdbe411bfe9c29cee6a79c2",
"0xbb7466a9d01197518bf55e4b0e17d10f3f914d89068de4e34f519c6085973468",
"0xaad3a120787f4120975043abd3153246276f8849aa51be157123833f07455f35"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


