const hre = require("hardhat");

async function main() {
  const Certificate = await hre.ethers.getContractFactory("CertificateStorage");
  const certificate = await Certificate.deploy();

  await certificate.waitForDeployment(); // Ethers v6

  console.log(`✅ Contract deployed to: ${certificate.target}`); // .target au lieu de .address
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
