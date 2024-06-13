/*
 * @description: hardhat 配置文件
 * @author: Jack Chen @懒人码农
 * @Date: 2024-04-23 22:15:23
 * @LastEditors: Jack Chen
 * @LastEditTime: 2024-04-24 00:25:13
 */
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  paths: {
    artifacts: "../src/artifacts",
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    ganache: {
      url: "http://127.0.0.1:8545",
      accounts: [
        "0xba63461fde9443e654ce3447e3dc875e05763568a1434829deb0d578df810a89",
      ],
    },
  },
};

export default config;
