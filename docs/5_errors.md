---
sidebar_position: 5 
---

# Handling Errors

While the Polkadot Contract Wizard (PCW) is designed to be user-friendly and intuitive, you might encounter errors or issues during your journey. This section aims to guide you through common error messages, their meanings, and troubleshooting steps to resolve them.

## Compilation Errors

### Error Message:
"Compilation Failed: Invalid Token Parameters."

### Meaning:
This error indicates that there's an issue with the parameters you've set for your token during the compilation process.

### Troubleshooting:
- Ensure that the token name, symbol, and total supply fields are correctly filled.
- Check for any invalid characters or spaces in the token name or symbol.
- If using extensions, ensure that their parameters are set correctly.

## Deployment Errors
### Error Message:
"Deployment Failed: Insufficient Funds."

### Meaning:
This error suggests that your connected wallet doesn't have enough funds to cover the deployment costs.

### Troubleshooting:
- Check your wallet balance to ensure you have enough native tokens (e.g., ROC or SHIB) for deployment.
- If you're on a test network, ensure you've obtained tokens from the respective faucet.
- Ensure that your wallet is correctly connected to PCW.

## Contract Interaction Errors
### Error Message:
"Transaction Failed: Function Not Allowed."

### Meaning:
This error indicates that you're trying to execute a function that's not permitted by the contract.

### Troubleshooting:
- Review the contract's functionalities and ensure you're interacting with it correctly.
- If the contract has extensions like "Pausable," ensure that the contract isn't paused when trying to execute transactions.

##  Custom Contract Errors
### Error Message:
"Invalid Metadata Provided."

### Meaning:
This error suggests that there's an issue with the metadata you've provided for your custom contract.

### Troubleshooting:
- Ensure that the metadata format is correct and compatible with PCW.
- Double-check the contract address and network details to ensure they match the provided metadata.