"use strict";(self.webpackChunkcw_docs=self.webpackChunkcw_docs||[]).push([[1477],{10:t=>{t.exports=JSON.parse('{"blogPosts":[{"id":"Selectable options on each PSP contract","metadata":{"permalink":"/blog/Selectable options on each PSP contract","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-11-11-PSP_options/index.md","source":"@site/blog/2023-11-11-PSP_options/index.md","title":"Selectable options on each PSP contract","description":"PSP22","date":"2023-11-11T00:00:00.000Z","formattedDate":"November 11, 2023","tags":[{"label":"wasm","permalink":"/blog/tags/wasm"},{"label":"smart_contracts","permalink":"/blog/tags/smart-contracts"},{"label":"standards","permalink":"/blog/tags/standards"},{"label":"rust","permalink":"/blog/tags/rust"},{"label":"polkadot","permalink":"/blog/tags/polkadot"}],"readingTime":2.405,"hasTruncateMarker":false,"authors":[{"name":"Luca Auet","title":"Blockchain Engineer @ Protofire","url":"https://github.com/0xLucca","imageURL":"https://avatars.githubusercontent.com/u/95830307?v=4","key":"luca"},{"name":"Gabriel Gonzalez","title":"Blockchain Engineer @ Protofire","url":"https://github.com/GabrielCamba","imageURL":"https://avatars.githubusercontent.com/u/27218623?v=4","key":"gabo"}],"frontMatter":{"slug":"Selectable options on each PSP contract","title":"Selectable options on each PSP contract","authors":["luca","gabo"],"tags":["wasm","smart_contracts","standards","rust","polkadot"]},"nextItem":{"title":"Deeper into smart contracts on Polkadot","permalink":"/blog/Deeper into smart contracts on Polkadot"}},"content":"### PSP22\\n**File**: psp22.rs\\n\\n#### Functionalities:\\n- Metadata: Provides extra information about the token, such as its name and symbol.\\n- Mintable: Gives the capability to create new tokens, which increases the total supply.\\n- Burnable: Provides the ability to destroy tokens. This action reduces the total supply of the tokens in circulation.\\n- Wrapper: This is a wrapper to create a token that is backed by another equivalent token. It comes with methods to deposit and withdraw the underlying token.\\n- FlashMint: Allows for a flash loan on the token. In this process, the borrowed amount is minted and then burned after the loan is repaid, all within a single transaction.\\n- Pausable: Provides the ability to pause all token transfers. This can be useful in emergency situations or for maintenance.\\n- Capped: Allows setting a limit to the total supply when minting tokens. This ensures that the total number of tokens in circulation never exceeds a predefined amount.\\n\\n### PSP34\\n**File**: psp34.rs\\n\\n#### Functionalities:\\n- Metadata: Provides extra information about the token, such as its name and symbol. This helps in identifying and describing the NFT.\\n- Mintable: Gives the capability to create new tokens. Since these are NFTs, each minted token is distinct and unique.\\n- Burnable: Allows NFT holders to destroy their NFTs. This means removing the NFT from circulation permanently.\\n- Enumerable: Assigns a unique number to each NFT. This can be useful for tracking and listing NFTs in order.\\n\\n### PSP37\\n**File**: psp37.rs\\n\\n#### Functionalities: \\n- Batch: Allows you to transfer multiple tokens in a single operation. This can be efficient when you need to distribute tokens to multiple recipients at once.\\n- Metadata: Provides extra information about the token, such as its name and symbol. This helps in identifying and describing the token.\\n- Mintable: Gives the capability to create new tokens, which increases the total supply. Since this is a multi-token standard, you can mint multiple types of tokens under one contract.\\n- Burnable: Provides the ability to destroy tokens. This action reduces the total supply of the tokens in circulation.\\n- Enumerable: Assigns a unique number to each token. This can be useful for tracking and listing tokens in order.\\n\\n\\n#### Security:\\n\\nAll the 2 standards also have the security options:\\n\\n- None: No specific security mechanism is applied. All functions are public.\\n- Ownable: The contract has an owner, which is a single account. This account is authorized to perform all privileged actions.\\n- Access Control: This allows the implementation of role-based access control mechanisms. Different roles can be defined, and each role can be given specific permissions.\\n- Access Control Enumerable: This is an extension of the Access Control mechanism. It allows the implementation of role-based access control mechanisms where each role has a unique identifier. This can be useful for tracking and managing roles in a more granular manner."},{"id":"Deeper into smart contracts on Polkadot","metadata":{"permalink":"/blog/Deeper into smart contracts on Polkadot","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-11-10-Deeper_into_smart_contracts/index.md","source":"@site/blog/2023-11-10-Deeper_into_smart_contracts/index.md","title":"Deeper into smart contracts on Polkadot","description":"The world of blockchain technology is vast and ever-evolving. One of the key players in this space is Polkadot, which offers a unique approach to smart contracts. Let\'s dive into the intricacies of Polkadot\'s smart contract ecosystem.","date":"2023-11-10T00:00:00.000Z","formattedDate":"November 10, 2023","tags":[{"label":"wasm","permalink":"/blog/tags/wasm"},{"label":"smart_contracts","permalink":"/blog/tags/smart-contracts"},{"label":"substrate","permalink":"/blog/tags/substrate"},{"label":"pallets","permalink":"/blog/tags/pallets"},{"label":"polkadot","permalink":"/blog/tags/polkadot"}],"readingTime":2.49,"hasTruncateMarker":false,"authors":[{"name":"Luca Auet","title":"Blockchain Engineer @ Protofire","url":"https://github.com/0xLucca","imageURL":"https://avatars.githubusercontent.com/u/95830307?v=4","key":"luca"},{"name":"Gabriel Gonzalez","title":"Blockchain Engineer @ Protofire","url":"https://github.com/GabrielCamba","imageURL":"https://avatars.githubusercontent.com/u/27218623?v=4","key":"gabo"}],"frontMatter":{"slug":"Deeper into smart contracts on Polkadot","title":"Deeper into smart contracts on Polkadot","authors":["luca","gabo"],"tags":["wasm","smart_contracts","substrate","pallets","polkadot"]},"prevItem":{"title":"Selectable options on each PSP contract","permalink":"/blog/Selectable options on each PSP contract"},"nextItem":{"title":"Polkadot Standard Proposals - PSP","permalink":"/blog/Polkadot Standard Poposals - PSP"}},"content":"The world of blockchain technology is vast and ever-evolving. One of the key players in this space is Polkadot, which offers a unique approach to smart contracts. Let\'s dive into the intricacies of Polkadot\'s smart contract ecosystem.\\n\\n## What is a Pallet?\\n\\nIn the Polkadot ecosystem, a pallet is a kind of module or a plugin that provides specific functionalities to a blockchain. Think of it as an app on your smartphone. Just as you can add or remove apps to customize your phone, developers can add or remove pallets to customize their blockchain.\\n\\n## The Contract Pallet\\n\\nThe Contract Pallet is a specific pallet in the Polkadot ecosystem that allows for the creation and management of WebAssembly (Wasm) based smart contracts. It\'s like a specialized app store where developers can deploy and manage their smart contracts.\\n\\n## Advantages of Developing a Contract\\n\\n**Layer of Abstraction**: Smart contracts provide a set of instructions that associate with a specific chain address. This is in contrast to a runtime module on a parachain, which represents the entire logic of a chain\'s state transitions.\\n\\n**Upgradeability**: Smart contracts need to be designed with upgradeability in mind. \\n\\n**Permisionless**: In most of the parachains supporting the Contract Pallet you\'re able to deploy any contract you want.\\n\\n**Environment Control**: When you build a smart contract, it gets deployed to a target chain with its environment. \\n\\n## Advantages of Wasm Smart Contracts\\n\\n**Language Flexibility**: Wasm smart contracts can be written in any language that compiles to WebAssembly. Most important languages today are Ask! and Ink!, but we can build a smart contract framework using any language able to compile to Wasm. This provides developers with a wide range of choices.\\n\\n**Efficiency**: Wasm contracts are cached by default, meaning they only need to be deployed once and can be instantiated multiple times, reducing storage load.\\n\\n## What is ink! Language?\\n\\nink! is a domain-specific language designed for writing smart contracts in Rust, which then compiles to Wasm code. It lays the foundation for a new smart contract stack that is based on a Wasm virtual machine and is compatible with Substrate chains.\\n\\n### Parachains Supporting ink!/Wasm Smart Contracts\\n\\nSeveral parachains in the Polkadot ecosystem support ink!/Wasm smart contracts:\\n\\n- Astar Network: Supports dApps with EVM and WASM smart contracts, offering true interoperability.\\n- Shiden Network: Acts as a playground for developers, supporting both EVM and WASM environments.\\n- Acala: A decentralized finance consortium and infrastructure chain. Its canary network, Karura, is live and supports dApps and smart contracts.\\n- Phala: A privacy-preserving cloud compute platform that enables the use of confidential smart contracts on Polkadot.\\n- Darwinia: A cross-chain programmable network that is EVM-compatible.\\n\\n## Conclusion\\n\\nPolkadot\'s approach to smart contracts offers flexibility, efficiency, and a wide range of tools for developers. Whether you\'re a seasoned blockchain developer or just starting out, the Polkadot ecosystem provides a robust platform for building innovative dApps and smart contracts.\\n\\nMore inofrmation can be found on: [Smart Contracts \xb7 Polkadot Wiki](https://wiki.polkadot.network/docs/build-smart-contracts)"},{"id":"Polkadot Standard Poposals - PSP","metadata":{"permalink":"/blog/Polkadot Standard Poposals - PSP","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-11-10-Polkadot_Standard_Proposals/index.md","source":"@site/blog/2023-11-10-Polkadot_Standard_Proposals/index.md","title":"Polkadot Standard Proposals - PSP","description":"The Polkadot ecosystem is vast and ever-evolving, and to ensure its sustainable growth and interoperability, the introduction of standards becomes imperative. This is where Polkadot Standards Proposals (PSP) come into play. PSPs are a series of standards and protocols proposed for the Polkadot ecosystem to ensure a harmonized approach to development and integration.","date":"2023-11-10T00:00:00.000Z","formattedDate":"November 10, 2023","tags":[{"label":"wasm","permalink":"/blog/tags/wasm"},{"label":"smart_contracts","permalink":"/blog/tags/smart-contracts"},{"label":"standards","permalink":"/blog/tags/standards"},{"label":"rust","permalink":"/blog/tags/rust"},{"label":"polkadot","permalink":"/blog/tags/polkadot"}],"readingTime":1.565,"hasTruncateMarker":false,"authors":[{"name":"Luca Auet","title":"Blockchain Engineer @ Protofire","url":"https://github.com/0xLucca","imageURL":"https://avatars.githubusercontent.com/u/95830307?v=4","key":"luca"},{"name":"Gabriel Gonzalez","title":"Blockchain Engineer @ Protofire","url":"https://github.com/GabrielCamba","imageURL":"https://avatars.githubusercontent.com/u/27218623?v=4","key":"gabo"}],"frontMatter":{"slug":"Polkadot Standard Poposals - PSP","title":"Polkadot Standard Proposals - PSP","authors":["luca","gabo"],"tags":["wasm","smart_contracts","standards","rust","polkadot"]},"prevItem":{"title":"Deeper into smart contracts on Polkadot","permalink":"/blog/Deeper into smart contracts on Polkadot"},"nextItem":{"title":"The contract wizzard journey","permalink":"/blog/The contract wizzard journey"}},"content":"The Polkadot ecosystem is vast and ever-evolving, and to ensure its sustainable growth and interoperability, the introduction of standards becomes imperative. This is where Polkadot Standards Proposals (PSP) come into play. PSPs are a series of standards and protocols proposed for the Polkadot ecosystem to ensure a harmonized approach to development and integration.\\n\\n## What are PSPs?\\nPolkadot Standards Proposals (PSPs) are technical specifications and standards proposed for the Polkadot ecosystem. They are similar to Ethereum\'s ERCs (Ethereum Request for Comments) and serve as a blueprint for building interoperable and standardized applications, platforms, and tools within the Polkadot network.\\n\\n## The Importance of Standards\\nStandards play a crucial role in ensuring consistency, interoperability, and compatibility across different platforms and applications. By adhering to a set of predefined standards:\\n\\n**Interoperability**: Different applications and platforms can seamlessly interact with each other without any friction.\\n**Consistency**: Developers have a clear guideline to follow, ensuring uniformity in the applications they build.\\n**Efficiency**: Standards eliminate the need to reinvent the wheel, allowing developers to build upon existing protocols and specifications.\\n**Trust**: Users can have confidence in platforms and applications that adhere to recognized standards.\\n\\n### A Closer Look at Specific PSPs\\n\\n- PSP-22: This standard is akin to Ethereum\'s ERC-20, which is a standard for fungible tokens. PSP-22 provides a set of standard APIs for tokens within the Polkadot ecosystem. It defines methods to transfer tokens, retrieve balances of addresses, and other token-related functionalities.\\n\\n- PSP-34: PSP-34 is a standard for non-fungible tokens (NFTs) within the Polkadot ecosystem. Similar to Ethereum\'s ERC-721, it provides a standard interface for NFTs, allowing for the creation, transfer, and querying of NFTs.\\n\\n- PSP-37: This standard introduces a multi-token standard for the Polkadot ecosystem. It allows for the creation of multiple tokens with a single contract. This is particularly useful for platforms that require the issuance of multiple tokens with varying functionalities."},{"id":"The contract wizzard journey","metadata":{"permalink":"/blog/The contract wizzard journey","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-11-09-CW_Journey/index.md","source":"@site/blog/2023-11-09-CW_Journey/index.md","title":"The contract wizzard journey","description":"To open the app follow this link","date":"2023-11-09T00:00:00.000Z","formattedDate":"November 9, 2023","tags":[{"label":"wasm","permalink":"/blog/tags/wasm"},{"label":"smart_contracts","permalink":"/blog/tags/smart-contracts"},{"label":"substrate","permalink":"/blog/tags/substrate"},{"label":"pallets","permalink":"/blog/tags/pallets"},{"label":"polkadot","permalink":"/blog/tags/polkadot"}],"readingTime":2.67,"hasTruncateMarker":false,"authors":[{"name":"Luca Auet","title":"Blockchain Engineer @ Protofire","url":"https://github.com/0xLucca","imageURL":"https://avatars.githubusercontent.com/u/95830307?v=4","key":"luca"},{"name":"Gabriel Gonzalez","title":"Blockchain Engineer @ Protofire","url":"https://github.com/GabrielCamba","imageURL":"https://avatars.githubusercontent.com/u/27218623?v=4","key":"gabo"}],"frontMatter":{"slug":"The contract wizzard journey","title":"The contract wizzard journey","authors":["luca","gabo"],"tags":["wasm","smart_contracts","substrate","pallets","polkadot"]},"prevItem":{"title":"Polkadot Standard Proposals - PSP","permalink":"/blog/Polkadot Standard Poposals - PSP"}},"content":":::info\\n\\nTo open the app follow [this link](https://contractwizard.xyz)\\n\\n:::\\n\\n# The Journey of the Polkadot Contract Wizard Tool\\n\\nThe story of the Polkadot Contract Wizard Tool exemplifies how innovation and collaboration can result in the development of user-friendly tools that empower the next generation of web3 enthusiasts, enabling newcomers and enthusiasts to start building without requiring any prior coding knowledge.\\n\\n## The Spark at Polkadot Decoded\\n\\nIt all began in Buenos Aires, Argentina, during the \\"Polkadot Decoded\\" event in June 2022. A group of passionate individuals working in [Protofire](https://protofire.io/) came together with a shared vision: to build something on the Polkadot platform. However, they faced a challenge - they didn\'t know where to start.\\n\\n## The Hackathon Triumph\\n\\nFast forward to November 2022, the team participated in the [Polkadot Hackathon LATAM](https://polkadothackathonlatam.com/). Their goal was clear: to create a tool that would onboard the next generation into the world of web3. The result was a project that not only achieved this goal but also stood out among the rest. Their presentation, as showcased in the video, highlighted their commitment to making the Polkadot ecosystem more accessible to all. Their hard work paid off when they clinched the 1st prize with their project, as detailed on the [Polkadot Hackathon LATAM website](https://polkadothackathonlatam.com/proyecto-inner/LactobaciloGG/).\\n\\n## The Web3 Foundation Grant and the Birth of the Tool\\n\\nWith the momentum from their hackathon victory, the team applied for a [Web3 Foundation Grant](https://grants.web3.foundation/). Their [proposal](https://github.com/w3f/Grants-Program/blob/master/applications/polkadot-contract-wizard.md) was to create the Polkadot Contract Wizard, a tool designed to simplify the process of creating and deploying standard smart contracts on the Polkadot ecosystem.\\n\\nThe initial phase of the Polkadot Contract Wizard was a success. It made it significantly easier for users to engage with the Polkadot ecosystem. It only worked in Rococo testnet, but the team didn\'t stop there. They envisioned a tool that was not only functional but also versatile. They aimed to expand its capabilities by adding features like:\\n\\n- Interaction with deployed contracts through the wizard\'s UI.\\n- Custom smart contract interactions.\\n- Shareable contract interaction links.\\n- Support for multiple chains, including different parachains.\\n\\nThese enhancements were designed to cater to both developers and non-developers, making the Contract Wizard an essential tool for the Polkadot and Kusama community.\\n\\n## The Second Phase and Realizing the Vision\\n\\nWith the success of the initial phase, the team applied for a [second phase](https://github.com/w3f/Grants-Program/blob/master/applications/Contract_wizard.md) of the Web3 Foundation Grant. Their goal was to continue refining the user experience and expand the tool\'s capabilities.\\n\\nToday, a year after their journey began, the team at [Protofire](https://protofire.io) has successfully realized their vision. The Polkadot Contract Wizard Tool is now deployed and operational, thanks to the unwavering support of the Web3 Foundation Grants Program.\\n\\n## Polkadot Contract Wizard: A Journey \'To Be Continued\\n\\nThe story of the Polkadot Contract Wizard Tool is one of passion, perseverance, and the desire to make a difference. From its inception at a local event in Buenos Aires to its triumphant success at the Polkadot Hackathon LATAM and its eventual realization with the support of the Web3 Foundation, the tool stands as a beacon for all those who aspire to innovate and contribute to the world of web3.\\n\\n# Start using the wizard [here](https://contractwizard.xyz)"}]}')}}]);