const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CertificateStorage", function () {
  let certificate;
  let owner;
  let studentAddress = "0x0000000000000000000000000000000000000001";

  beforeEach(async function () {
    [owner] = await ethers.getSigners();
    const Certificate = await ethers.getContractFactory("CertificateStorage");
    certificate = await Certificate.deploy();
    await certificate.waitForDeployment();
  });

  it("Should allow owner to add and retrieve certificate", async function () {
    const ipfsHash = "QmTestHash";

    // Ajouter un certificat
    await certificate.addCertificate(studentAddress, ipfsHash);

    // Récupérer le certificat
    const storedHash = await certificate.getCertificate(studentAddress);

    expect(storedHash).to.equal(ipfsHash);
  });

  it("Should fail if non-owner tries to add certificate", async function () {
    const [, addr1] = await ethers.getSigners();
    const ipfsHash = "QmTestHash";

    await expect(
      certificate.connect(addr1).addCertificate(studentAddress, ipfsHash)
    ).to.be.revertedWith("Only admin can perform this action");
  });
});
