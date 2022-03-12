require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    ganache: {
      url: 'http://127.0.0.1:7545',
      accounts: [
        '49972f1bb1e4c1f5e0a523177443e05667c656a0b846d2ecf8f7b7d9bd1629d3'
      ],
    },
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/VHB8qGkX91ylEhTivsaBUiQjxjhOPutB',
      accounts: [
        '23edb53ec5026e4fd64c5a30f9712af9688fdbb364ac18d4200125835ec7a4be'
      ],
    }
  }
};
