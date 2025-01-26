require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
const { ALCHEMY_API_KEY, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.24",
  defaultNetwork: "skale",
  networks: {
    hardhat: {},
    skale: {
      // url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      url: `https://testnet.skalenodes.com/v1/lanky-ill-funny-testnet`,
      accounts: [`0x${PRIVATE_KEY}`], // Ensure the private key is prefixed with '0x'
      chainId: 37084624,
    }
  }
};