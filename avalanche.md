# Getting Started with Avalanche
## 10-Minute Technical Session

> **Session Overview:** This hands-on tutorial covers creating an Avalanche wallet, acquiring testnet tokens, deploying a smart contract via Remix, and verifying the transaction.

---

## Part 1: Setting Up Core Wallet *(2 minutes)*

### Step 1: Install Core Wallet
- Visit [core.app](https://core.app)
- Click **"Download"** and select your platform (Browser Extension recommended)
- Install the extension and click **"Create New Wallet"**

### Step 2: Secure Your Wallet
- Write down your **24-word recovery phrase** (CRITICAL — never share this!)
- Create a strong password
- Complete wallet setup

### Step 3: Connect to Fuji Testnet
- Click the network dropdown (top right)
- Select **"Fuji Testnet"** (Avalanche's C-Chain testnet)
- Your wallet address appears at the top — copy it for later

---

## Part 2: Getting Testnet Tokens *(1.5 minutes)*

### Step 4: Use the Avalanche Faucet
- Visit the official faucet: [test.core.app/tools/testnet-faucet](https://test.core.app/tools/testnet-faucet)
- Paste your wallet address
- Complete the CAPTCHA
- Click **"Request AVAX"**
- Wait 10–30 seconds for tokens to arrive

### Step 5: Verify Balance
- Return to Core Wallet
- Check that you received testnet AVAX (usually **2 AVAX**)
- You're now ready to deploy!

---

## Part 3: Writing a Smart Contract in Remix *(2.5 minutes)*

### Step 6: Open Remix IDE
- Navigate to [remix.ethereum.org](https://remix.ethereum.org)
- Click the **"File Explorer"** icon (left sidebar)
- Create a new file: `HelloAvalanche.sol`

### Step 7: Write the Contract

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloAvalanche {
    string public message;

    constructor() {
        message = "Hello from Avalanche!";
    }

    function setMessage(string memory _newMessage) public {
        message = _newMessage;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }
}
```

### Step 8: Compile the Contract
- Click the **"Solidity Compiler"** icon (left sidebar)
- Select compiler version `0.8.x`
- Click **"Compile HelloAvalanche.sol"**
- Ensure no errors appear

---

## Part 4: Deploying to Avalanche *(2.5 minutes)*

### Step 9: Configure Remix for Avalanche
- Click the **"Deploy & Run Transactions"** icon
- Change Environment to **"Injected Provider - MetaMask"**
- Core Wallet popup appears — click **"Connect"**
- Confirm connection in Core Wallet
- Verify network shows **"Fuji (43113)"**

### Step 10: Deploy the Contract
- Ensure `HelloAvalanche` is selected in the contract dropdown
- Click the orange **"Deploy"** button
- Core Wallet popup appears with gas fee estimate
- Review details and click **"Confirm"**
- Wait for transaction confirmation (5–10 seconds)

### Step 11: Interact with the Deployed Contract
- Expand the deployed contract in Remix (under **"Deployed Contracts"**)
- Click the **"message"** button to read the current message
- Should display: `"Hello from Avalanche!"`

---

## Part 5: Verifying the Transaction *(1.5 minutes)*

### Step 12: Find the Transaction Hash
- In Remix, look at the console (bottom panel)
- Find the deployment transaction
- Copy the transaction hash (starts with `0x...`)

### Step 13: View on Block Explorer
- Visit [testnet.snowtrace.io](https://testnet.snowtrace.io)
- Paste the transaction hash in the search bar
- Press Enter

### Step 14: Review Transaction Details
| Field | Description |
|-------|-------------|
| **Status** | Should show "Success" with green checkmark |
| **Block** | Confirmation number |
| **From** | Your wallet address |
| **To** | Contract creation (shows new contract address) |
| **Gas Used** | Amount of AVAX spent |

- Click the contract address to view full contract details

---

## ✅ Key Takeaways

You've successfully:
1. Created and configured an Avalanche Core Wallet
2. Obtained testnet AVAX tokens
3. Written and compiled a Solidity smart contract
4. Deployed to Avalanche Fuji Testnet via Remix
5. Verified the transaction on Snowtrace explorer

---

## Next Steps

- Experiment with modifying the contract
- Explore Avalanche's other chains (X-Chain, P-Chain)
- Build more complex dApps using Avalanche's high throughput and low fees

---

## Important Links

| Resource | URL |
|----------|-----|
| Core Wallet | https://core.app |
| Testnet Faucet | https://test.core.app/tools/testnet-faucet |
| Remix IDE | https://remix.ethereum.org |
| Fuji Explorer | https://testnet.snowtrace.io |
| Avalanche Docs | https://docs.avax.network |

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Wallet not connecting | Refresh Remix and try "Injected Provider" again |
| No testnet tokens | Wait 24 hours between faucet requests |
| Transaction failing | Ensure you're on Fuji Testnet and have enough AVAX for gas |
| Network issues | Add Fuji manually: RPC URL `https://api.avax-test.network/ext/bc/C/rpc`, Chain ID `43113` |
