---
slug: Selectable options on each PSP contract
title: Selectable options on each PSP contract
authors: [luca, gabo]
tags: [wasm, smart_contracts, standards, rust, polkadot]
---

# Selectable options on each contract type

### PSP22
**File**: psp22.rs

#### Functionalities:
- Metadata: Provides extra information about the token, such as its name and symbol.
- Mintable: Gives the capability to create new tokens, which increases the total supply.
- Burnable: Provides the ability to destroy tokens. This action reduces the total supply of the tokens in circulation.
- Wrapper: This is a wrapper to create a token that is backed by another equivalent token. It comes with methods to deposit and withdraw the underlying token.
- FlashMint: Allows for a flash loan on the token. In this process, the borrowed amount is minted and then burned after the loan is repaid, all within a single transaction.
- Pausable: Provides the ability to pause all token transfers. This can be useful in emergency situations or for maintenance.
- Capped: Allows setting a limit to the total supply when minting tokens. This ensures that the total number of tokens in circulation never exceeds a predefined amount.

### PSP34
**File**: psp34.rs

#### Functionalities:
- Metadata: Provides extra information about the token, such as its name and symbol. This helps in identifying and describing the NFT.
- Mintable: Gives the capability to create new tokens. Since these are NFTs, each minted token is distinct and unique.
- Burnable: Allows NFT holders to destroy their NFTs. This means removing the NFT from circulation permanently.
- Enumerable: Assigns a unique number to each NFT. This can be useful for tracking and listing NFTs in order.

### PSP37
**File**: psp37.rs

#### Functionalities: 
- Batch: Allows you to transfer multiple tokens in a single operation. This can be efficient when you need to distribute tokens to multiple recipients at once.
- Metadata: Provides extra information about the token, such as its name and symbol. This helps in identifying and describing the token.
- Mintable: Gives the capability to create new tokens, which increases the total supply. Since this is a multi-token standard, you can mint multiple types of tokens under one contract.
- Burnable: Provides the ability to destroy tokens. This action reduces the total supply of the tokens in circulation.
- Enumerable: Assigns a unique number to each token. This can be useful for tracking and listing tokens in order.


#### Security:

All the 2 standards also have the security options:

- None: No specific security mechanism is applied. All functions are public.
- Ownable: The contract has an owner, which is a single account. This account is authorized to perform all privileged actions.
- Access Control: This allows the implementation of role-based access control mechanisms. Different roles can be defined, and each role can be given specific permissions.
- Access Control Enumerable: This is an extension of the Access Control mechanism. It allows the implementation of role-based access control mechanisms where each role has a unique identifier. This can be useful for tracking and managing roles in a more granular manner.

