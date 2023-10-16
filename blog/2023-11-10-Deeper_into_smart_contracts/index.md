---
slug: Deeper into smart contracts on Polkadot
title: Deeper into smart contracts on Polkadot
authors: [luca, gabo]
tags: [wasm, smart_contracts, substrate, pallets, polkadot]
---

# Deeper into Smart Contracts on Polkadot

The world of blockchain technology is vast and ever-evolving. One of the key players in this space is Polkadot, which offers a unique approach to smart contracts. Let's dive into the intricacies of Polkadot's smart contract ecosystem.

## What is a Pallet?

In the Polkadot ecosystem, a pallet is a kind of module or a plugin that provides specific functionalities to a blockchain. Think of it as an app on your smartphone. Just as you can add or remove apps to customize your phone, developers can add or remove pallets to customize their blockchain.

## The Contract Pallet

The Contract Pallet is a specific pallet in the Polkadot ecosystem that allows for the creation and management of WebAssembly (Wasm) based smart contracts. It's like a specialized app store where developers can deploy and manage their smart contracts.

## Advantages of Developing a Contract

**Layer of Abstraction**: Smart contracts provide a set of instructions that associate with a specific chain address. This is in contrast to a runtime module on a parachain, which represents the entire logic of a chain's state transitions.

**Upgradeability**: Smart contracts need to be designed with upgradeability in mind. 

**Permisionless**: In most of the parachains supporting the Contract Pallet you're able to deploy any contract you want.

**Environment Control**: When you build a smart contract, it gets deployed to a target chain with its environment. 

## Advantages of Wasm Smart Contracts

**Language Flexibility**: Wasm smart contracts can be written in any language that compiles to WebAssembly. Most important languages today are Ask! and Ink!, but we can build a smart contract framework using any language able to compile to Wasm. This provides developers with a wide range of choices.

**Efficiency**: Wasm contracts are cached by default, meaning they only need to be deployed once and can be instantiated multiple times, reducing storage load.

## What is ink! Language?

ink! is a domain-specific language designed for writing smart contracts in Rust, which then compiles to Wasm code. It lays the foundation for a new smart contract stack that is based on a Wasm virtual machine and is compatible with Substrate chains.

### Parachains Supporting ink!/Wasm Smart Contracts

Several parachains in the Polkadot ecosystem support ink!/Wasm smart contracts:

- Astar Network: Supports dApps with EVM and WASM smart contracts, offering true interoperability.
- Shiden Network: Acts as a playground for developers, supporting both EVM and WASM environments.
- Acala: A decentralized finance consortium and infrastructure chain. Its canary network, Karura, is live and supports dApps and smart contracts.
- Phala: A privacy-preserving cloud compute platform that enables the use of confidential smart contracts on Polkadot.
- Darwinia: A cross-chain programmable network that is EVM-compatible.

## Conclusion

Polkadot's approach to smart contracts offers flexibility, efficiency, and a wide range of tools for developers. Whether you're a seasoned blockchain developer or just starting out, the Polkadot ecosystem provides a robust platform for building innovative dApps and smart contracts.

More inofrmation can be found on: [Smart Contracts · Polkadot Wiki](https://wiki.polkadot.network/docs/build-smart-contracts)