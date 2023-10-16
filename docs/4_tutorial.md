---
sidebar_position: 4 
---

# Step-by-Step Tutorial

Navigating the world of smart contracts can seem daunting, especially if you're new to the blockchain realm. This tutorial aims to guide you through the process of creating, customizing, and deploying smart contracts using the Polkadot Contract Wizard (PCW).

## Creating a New Contract

### 1. Choosing a Contract Type:

- Access PCW: Open the Polkadot Contract Wizard in your web browser.

- Select Contract Type: On the main screen, you'll be presented with various contract types, such as Standard Token, Multi-Token, and NFT. Click on your desired contract type to proceed.

TODO: Link a las explicaciones de qué es cada token en Appendix II

### 2. Configuring Contract Extensions:

- View Extensions: Based on your chosen contract type, you'll see a list of available extensions.

TODO: Explicación de las extensiones basado en el token elegido

- Customize: Select the extensions you wish to include in your contract. These extensions allow you to add specific functionalities to your contract.

- Proceed: Once you've made your selections, click on the "Next" button.

### 3. Compiling the Contract:

- Review: Before compiling, review your contract settings and chosen extensions to ensure everything is in order.

- Compile: Click on the "Compile" button. PCW will then process your contract. This might take a few moments.

TODO Link a la explicación de WASM en Appendix I

- Compilation Success: Once the compilation is successful, you'll receive a notification. If there are any issues, PCW will provide error messages to guide you on what needs fixing.

### 4. Deploying the Contract:

- Connect Wallet: Ensure your Polkadot-compatible wallet is connected and has the necessary funds for deployment.

- Deploy: Click on the "Deploy" button. PCW will guide you through the deployment process, including confirming the transaction in your wallet.

- Deployment Success: Once the contract is successfully deployed, you'll receive a confirmation along with details of your deployed contract.

## Interacting with Deployed Contracts

### 1. Access Your Contracts:

Navigate to the "Contracts" section in PCW to view a list of your deployed contracts.

### 2. Choose a Contract:

Click on the contract you wish to interact with.

### 3. Interact:

PCW provides a dynamic interface based on your contract's functionalities. Here, you can execute various actions, such as transferring tokens, minting new tokens, or any other functions your contract supports.

### 4. Review & Confirm:

Before executing any action, review the details and ensure everything is correct. Confirm the action in your connected wallet to finalize the transaction.


## Custom Contracts

If you have a custom contract not created through PCW, you can still interact with it:

### 1. Provide Contract Details:

Navigate to the "Custom Contracts" section and input the necessary details, such as metadata, network, and contract address.

TODO: Do it more step by step if required

### 2. Interact:

Once PCW generates the interaction layout, you can interact with your custom contract just like any other contract on the platform.