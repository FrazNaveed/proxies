const { ethers, upgrades } = require("hardhat");

const PROXY = "0xEd62eF554044F7c79ee9CAa5B4B6ca7C17213392";
async function main() {
  const Box = await ethers.getContractFactory("BoxV2");
  await upgrades.upgradeProxy(PROXY, Box);
  console.log("upgraded");
}
main();
