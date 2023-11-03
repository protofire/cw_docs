"use strict";(self.webpackChunkcw_docs=self.webpackChunkcw_docs||[]).push([[3541],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,d=p["".concat(s,".").concat(h)]||p[h]||m[h]||r;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9006:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={slug:"Selectable options on each PSP contract",title:"Selectable options on each PSP contract",authors:["luca","gabo"],tags:["wasm","smart_contracts","standards","rust","polkadot"]},o="Selectable options on each contract type",l={permalink:"/blog/Selectable options on each PSP contract",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-11-11-PSP_options/index.md",source:"@site/blog/2023-11-11-PSP_options/index.md",title:"Selectable options on each PSP contract",description:"PSP22",date:"2023-11-11T00:00:00.000Z",formattedDate:"November 11, 2023",tags:[{label:"wasm",permalink:"/blog/tags/wasm"},{label:"smart_contracts",permalink:"/blog/tags/smart-contracts"},{label:"standards",permalink:"/blog/tags/standards"},{label:"rust",permalink:"/blog/tags/rust"},{label:"polkadot",permalink:"/blog/tags/polkadot"}],readingTime:2.405,hasTruncateMarker:!1,authors:[{name:"Luca Auet",title:"Blockchain Engineer @ Protofire",url:"https://github.com/0xLucca",imageURL:"https://avatars.githubusercontent.com/u/95830307?v=4",key:"luca"},{name:"Gabriel Gonzalez",title:"Blockchain Engineer @ Protofire",url:"https://github.com/GabrielCamba",imageURL:"https://avatars.githubusercontent.com/u/27218623?v=4",key:"gabo"}],frontMatter:{slug:"Selectable options on each PSP contract",title:"Selectable options on each PSP contract",authors:["luca","gabo"],tags:["wasm","smart_contracts","standards","rust","polkadot"]},nextItem:{title:"Deeper into smart contracts on Polkadot",permalink:"/blog/Deeper into smart contracts on Polkadot"}},s={authorsImageUrls:[void 0,void 0]},c=[{value:"PSP22",id:"psp22",level:3},{value:"Functionalities:",id:"functionalities",level:4},{value:"PSP34",id:"psp34",level:3},{value:"Functionalities:",id:"functionalities-1",level:4},{value:"PSP37",id:"psp37",level:3},{value:"Functionalities:",id:"functionalities-2",level:4},{value:"Security:",id:"security",level:4}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"psp22"},"PSP22"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"File"),": psp22.rs"),(0,i.kt)("h4",{id:"functionalities"},"Functionalities:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Metadata: Provides extra information about the token, such as its name and symbol."),(0,i.kt)("li",{parentName:"ul"},"Mintable: Gives the capability to create new tokens, which increases the total supply."),(0,i.kt)("li",{parentName:"ul"},"Burnable: Provides the ability to destroy tokens. This action reduces the total supply of the tokens in circulation."),(0,i.kt)("li",{parentName:"ul"},"Wrapper: This is a wrapper to create a token that is backed by another equivalent token. It comes with methods to deposit and withdraw the underlying token."),(0,i.kt)("li",{parentName:"ul"},"FlashMint: Allows for a flash loan on the token. In this process, the borrowed amount is minted and then burned after the loan is repaid, all within a single transaction."),(0,i.kt)("li",{parentName:"ul"},"Pausable: Provides the ability to pause all token transfers. This can be useful in emergency situations or for maintenance."),(0,i.kt)("li",{parentName:"ul"},"Capped: Allows setting a limit to the total supply when minting tokens. This ensures that the total number of tokens in circulation never exceeds a predefined amount.")),(0,i.kt)("h3",{id:"psp34"},"PSP34"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"File"),": psp34.rs"),(0,i.kt)("h4",{id:"functionalities-1"},"Functionalities:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Metadata: Provides extra information about the token, such as its name and symbol. This helps in identifying and describing the NFT."),(0,i.kt)("li",{parentName:"ul"},"Mintable: Gives the capability to create new tokens. Since these are NFTs, each minted token is distinct and unique."),(0,i.kt)("li",{parentName:"ul"},"Burnable: Allows NFT holders to destroy their NFTs. This means removing the NFT from circulation permanently."),(0,i.kt)("li",{parentName:"ul"},"Enumerable: Assigns a unique number to each NFT. This can be useful for tracking and listing NFTs in order.")),(0,i.kt)("h3",{id:"psp37"},"PSP37"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"File"),": psp37.rs"),(0,i.kt)("h4",{id:"functionalities-2"},"Functionalities:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Batch: Allows you to transfer multiple tokens in a single operation. This can be efficient when you need to distribute tokens to multiple recipients at once."),(0,i.kt)("li",{parentName:"ul"},"Metadata: Provides extra information about the token, such as its name and symbol. This helps in identifying and describing the token."),(0,i.kt)("li",{parentName:"ul"},"Mintable: Gives the capability to create new tokens, which increases the total supply. Since this is a multi-token standard, you can mint multiple types of tokens under one contract."),(0,i.kt)("li",{parentName:"ul"},"Burnable: Provides the ability to destroy tokens. This action reduces the total supply of the tokens in circulation."),(0,i.kt)("li",{parentName:"ul"},"Enumerable: Assigns a unique number to each token. This can be useful for tracking and listing tokens in order.")),(0,i.kt)("h4",{id:"security"},"Security:"),(0,i.kt)("p",null,"All the 2 standards also have the security options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"None: No specific security mechanism is applied. All functions are public."),(0,i.kt)("li",{parentName:"ul"},"Ownable: The contract has an owner, which is a single account. This account is authorized to perform all privileged actions."),(0,i.kt)("li",{parentName:"ul"},"Access Control: This allows the implementation of role-based access control mechanisms. Different roles can be defined, and each role can be given specific permissions."),(0,i.kt)("li",{parentName:"ul"},"Access Control Enumerable: This is an extension of the Access Control mechanism. It allows the implementation of role-based access control mechanisms where each role has a unique identifier. This can be useful for tracking and managing roles in a more granular manner.")))}m.isMDXComponent=!0}}]);