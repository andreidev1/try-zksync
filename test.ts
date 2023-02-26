import * as zksync from "zksync-web3";
import { ethers } from "ethers";

const PRIVATE_KEY = "0xc8acb475bb76a4b8ee36ea4d0e516a755a17fad2e84427d5559b37b544d9ba5a";

const zkSyncProvider = new zksync.Provider("https://zksync2-testnet.zksync.dev");
const ethereumProvider = ethers.getDefaultProvider("goerli");
const wallet = new ethers.Wallet(PRIVATE_KEY, zkSyncProvider);

const USDC_L2_ADDRESS = "0x0faf6df7054946141266420b43783387a78d82a9";

// Getting balance in USDC

console.log(await wallet.getBalance(USDC_L2_ADDRESS));

// Getting balance in ETH
console.log(await wallet.getBalance());