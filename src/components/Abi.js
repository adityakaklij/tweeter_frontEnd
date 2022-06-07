export const contractAddress = "0x2f84f71c5Ce8a6341fD469069E4a1545200C6D84";

export const Abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_tweetData",
        type: "string",
      },
    ],
    name: "displayTweetEvent",
    type: "event",
  },
  {
    inputs: [],
    name: "UserCounter",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "checkUser",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "_textTweet", type: "string" }],
    name: "createTweet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "_name", type: "string" }],
    name: "createUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deleteTweet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_userAdress", type: "address" }],
    name: "reteriveTweet",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "stringMap",
    outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "userMap",
    outputs: [
      { internalType: "string", name: "name", type: "string" },
      { internalType: "uint256", name: "id", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
];
