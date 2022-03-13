# Introducion

Run the following commands to start the project in the local:

- In the client folder:
    + yarn install
    + yarn dev

- In the smart_contract folder:
    + npx hardhat compile
    + npx hardhat run scripts/deploy.js --network ganache

- In the studio folder:
    + yarn install
    + sanity start
- You may want to install senity cli and vercel (global):
    + npm i -g @sanity/cli
    + npm i -g vercel

Don't forget to setup the network for ethereum development, considering ganade for the local or setup https://www.alchemy.com/ with rinkeby test network.

Get free test ethers for rinkeby network at https://faucets.chain.link/rinkeby