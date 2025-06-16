# Blockchain Certificate Verification DApp

This is a fully decentralized certificate verification system built using:

- Solidity (Smart contract)
- Hardhat (Development framework)
- IPFS (Dockerized local node)
- React (Frontend)
- Ethers.js (Blockchain interaction)
- MetaMask (Wallet connection)

---

## Features

- Admin can upload a PDF certificate, store it on IPFS, and register its hash on the blockchain.
- Anyone can verify a certificate using student address and IPFS hash.
- Files are stored on your local IPFS node.
- No centralized server.

---

## Project Structure

```
certification-dapp/
  |- smart-contract/         # Hardhat smart contract project
  |- frontend/         # React frontend app
  |- ipfs/             # Dockerized IPFS node
```

---

# Setup Instructions

## 1. Clone the repository

```bash
git clone https://github.com/medaminerizki/blockchain_certificate_dApp.git
```

---

## 2. Start IPFS Node (Local)

You need Docker installed.

```bash
cd ipfs
docker-compose up -d
```

- Access IPFS UI: [http://127.0.0.1:5001/webui](http://127.0.0.1:5001/webui)

> Make sure IPFS is accessible at `localhost:5001`.

---

## 3. Deploy Smart Contract

### Install dependencies

```bash
cd contract
npm install
```

### Compile smart contract

```bash
npx hardhat compile
```

### Run local blockchain (optional if you're not using testnet)

```bash
npx hardhat node
```

### Deploy contract

```bash
npx hardhat run scripts/deploy.js --network localhost
```

> Copy the deployed contract address and replace it inside `frontend/src/utils/contractConfig.js`.

---

## 4. Launch Frontend

### Install frontend dependencies

```bash
cd ../frontend
npm install
```

### Start React frontend

```bash
npm run dev
```

> Open [http://localhost:3000](http://localhost:3000)

---

## 5. Usage

- Connect your MetaMask wallet.
- Go to "Add Certificate".
- Upload PDF, enter student wallet address, and click Add.
- The certificate will be stored on local IPFS and hash will be stored on blockchain.
- Use "View Certificate" and "Verify Certificate" to fetch or verify certificates.

---

# Important Notes

- IPFS runs only locally unless you expose it externally or pin data permanently.
- Use test networks if you want to simulate full decentralized deployment.
- Modify contract address in frontend after deploying smart contract.

---

## Bonus: Stop IPFS container

```bash
cd ipfs
docker-compose down
```

---

## Authors

- Developed by **Mohamed Amine RIZKI**
- Date: June 2025

---

Happy Coding ✨

