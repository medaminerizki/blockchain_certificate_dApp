// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract CertificateStorage {
    address public admin;

    struct Certificate {
        string ipfsHash;
        bool exists;
    }

    mapping(address => Certificate) private certificates;

    constructor() {
        admin = msg.sender;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    function addCertificate(address student, string memory ipfsHash) public onlyAdmin {
        require(!certificates[student].exists, "Certificate already exists for this student");

        certificates[student] = Certificate({
            ipfsHash: ipfsHash,
            exists: true
        });
    }

    function getCertificate(address student) public view returns (string memory) {
        require(certificates[student].exists, "No certificate found for this student");
        return certificates[student].ipfsHash;
    }

    function verifyCertificate(address student, string memory ipfsHash) public view returns (bool) {
        return certificates[student].exists && keccak256(bytes(certificates[student].ipfsHash)) == keccak256(bytes(ipfsHash));
    }
}
