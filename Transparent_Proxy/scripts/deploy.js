const { ethers, upgrades } = require("hardhat");

async function main() {
  const Box = await ethers.getContractFactory("BoxV1");
  const box = await upgrades.deployProxy(Box, [42], {
    initializer: "initialize",
  });
  await box.deployed();
  console.log("V1 address", box.address);
}
main();
