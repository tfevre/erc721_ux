export const smartContract = { 
    "abi": [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name_",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "symbol_",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x60806040523480156200001157600080fd5b5060405162001942380380620019428339818101604052810190620000379190620001fa565b818181600390816200004a9190620004ca565b5080600490816200005c9190620004ca565b5050505050620005b1565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620000d08262000085565b810181811067ffffffffffffffff82111715620000f257620000f162000096565b5b80604052505050565b60006200010762000067565b9050620001158282620000c5565b919050565b600067ffffffffffffffff82111562000138576200013762000096565b5b620001438262000085565b9050602081019050919050565b60005b838110156200017057808201518184015260208101905062000153565b60008484015250505050565b6000620001936200018d846200011a565b620000fb565b905082815260208101848484011115620001b257620001b162000080565b5b620001bf84828562000150565b509392505050565b600082601f830112620001df57620001de6200007b565b5b8151620001f18482602086016200017c565b91505092915050565b6000806040838503121562000214576200021362000071565b5b600083015167ffffffffffffffff81111562000235576200023462000076565b5b6200024385828601620001c7565b925050602083015167ffffffffffffffff81111562000267576200026662000076565b5b6200027585828601620001c7565b9150509250929050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620002d257607f821691505b602082108103620002e857620002e76200028a565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620003527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000313565b6200035e868362000313565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620003ab620003a56200039f8462000376565b62000380565b62000376565b9050919050565b6000819050919050565b620003c7836200038a565b620003df620003d682620003b2565b84845462000320565b825550505050565b600090565b620003f6620003e7565b62000403818484620003bc565b505050565b5b818110156200042b576200041f600082620003ec565b60018101905062000409565b5050565b601f8211156200047a576200044481620002ee565b6200044f8462000303565b810160208510156200045f578190505b620004776200046e8562000303565b83018262000408565b50505b505050565b600082821c905092915050565b60006200049f600019846008026200047f565b1980831691505092915050565b6000620004ba83836200048c565b9150826002028217905092915050565b620004d5826200027f565b67ffffffffffffffff811115620004f157620004f062000096565b5b620004fd8254620002b9565b6200050a8282856200042f565b600060209050601f8311600181146200054257600084156200052d578287015190505b620005398582620004ac565b865550620005a9565b601f1984166200055286620002ee565b60005b828110156200057c5784890151825560018201915060208501945060208101905062000555565b868310156200059c578489015162000598601f8916826200048c565b8355505b6001600288020188555050505b505050505050565b61138180620005c16000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461016857806370a082311461019857806395d89b41146101c8578063a457c2d7146101e6578063a9059cbb14610216578063dd62ed3e14610246576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b6610276565b6040516100c39190610c38565b60405180910390f35b6100e660048036038101906100e19190610cf3565b610308565b6040516100f39190610d4e565b60405180910390f35b610104610326565b6040516101119190610d78565b60405180910390f35b610134600480360381019061012f9190610d93565b610330565b6040516101419190610d4e565b60405180910390f35b61015261044f565b60405161015f9190610e02565b60405180910390f35b610182600480360381019061017d9190610cf3565b610458565b60405161018f9190610d4e565b60405180910390f35b6101b260048036038101906101ad9190610e1d565b610504565b6040516101bf9190610d78565b60405180910390f35b6101d061054c565b6040516101dd9190610c38565b60405180910390f35b61020060048036038101906101fb9190610cf3565b6105de565b60405161020d9190610d4e565b60405180910390f35b610230600480360381019061022b9190610cf3565b6106c9565b60405161023d9190610d4e565b60405180910390f35b610260600480360381019061025b9190610e4a565b6106e7565b60405161026d9190610d78565b60405180910390f35b60606003805461028590610eb9565b80601f01602080910402602001604051908101604052809291908181526020018280546102b190610eb9565b80156102fe5780601f106102d3576101008083540402835291602001916102fe565b820191906000526020600020905b8154815290600101906020018083116102e157829003601f168201915b5050505050905090565b600061031c61031561076e565b8484610776565b6001905092915050565b6000600254905090565b600080600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600061037c61076e565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146104385782811015610423576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161041a90610f5c565b60405180910390fd5b6104378561042f61076e565b858403610776565b5b61044385858561093f565b60019150509392505050565b60006012905090565b60006104fa61046561076e565b84846001600061047361076e565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546104f59190610fab565b610776565b6001905092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606004805461055b90610eb9565b80601f016020809104026020016040519081016040528092919081815260200182805461058790610eb9565b80156105d45780601f106105a9576101008083540402835291602001916105d4565b820191906000526020600020905b8154815290600101906020018083116105b757829003601f168201915b5050505050905090565b600080600160006105ed61076e565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050828110156106aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106a190611051565b60405180910390fd5b6106be6106b561076e565b85858403610776565b600191505092915050565b60006106dd6106d661076e565b848461093f565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036107e5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107dc906110e3565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610854576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084b90611175565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516109329190610d78565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036109ae576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109a590611207565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a1d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a1490611299565b60405180910390fd5b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610aa3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9a9061132b565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610b369190610fab565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610b9a9190610d78565b60405180910390a350505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610be2578082015181840152602081019050610bc7565b60008484015250505050565b6000601f19601f8301169050919050565b6000610c0a82610ba8565b610c148185610bb3565b9350610c24818560208601610bc4565b610c2d81610bee565b840191505092915050565b60006020820190508181036000830152610c528184610bff565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610c8a82610c5f565b9050919050565b610c9a81610c7f565b8114610ca557600080fd5b50565b600081359050610cb781610c91565b92915050565b6000819050919050565b610cd081610cbd565b8114610cdb57600080fd5b50565b600081359050610ced81610cc7565b92915050565b60008060408385031215610d0a57610d09610c5a565b5b6000610d1885828601610ca8565b9250506020610d2985828601610cde565b9150509250929050565b60008115159050919050565b610d4881610d33565b82525050565b6000602082019050610d636000830184610d3f565b92915050565b610d7281610cbd565b82525050565b6000602082019050610d8d6000830184610d69565b92915050565b600080600060608486031215610dac57610dab610c5a565b5b6000610dba86828701610ca8565b9350506020610dcb86828701610ca8565b9250506040610ddc86828701610cde565b9150509250925092565b600060ff82169050919050565b610dfc81610de6565b82525050565b6000602082019050610e176000830184610df3565b92915050565b600060208284031215610e3357610e32610c5a565b5b6000610e4184828501610ca8565b91505092915050565b60008060408385031215610e6157610e60610c5a565b5b6000610e6f85828601610ca8565b9250506020610e8085828601610ca8565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610ed157607f821691505b602082108103610ee457610ee3610e8a565b5b50919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b6000610f46602883610bb3565b9150610f5182610eea565b604082019050919050565b60006020820190508181036000830152610f7581610f39565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610fb682610cbd565b9150610fc183610cbd565b9250828201905080821115610fd957610fd8610f7c565b5b92915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b600061103b602583610bb3565b915061104682610fdf565b604082019050919050565b6000602082019050818103600083015261106a8161102e565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006110cd602483610bb3565b91506110d882611071565b604082019050919050565b600060208201905081810360008301526110fc816110c0565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b600061115f602283610bb3565b915061116a82611103565b604082019050919050565b6000602082019050818103600083015261118e81611152565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b60006111f1602583610bb3565b91506111fc82611195565b604082019050919050565b60006020820190508181036000830152611220816111e4565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611283602383610bb3565b915061128e82611227565b604082019050919050565b600060208201905081810360008301526112b281611276565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000611315602683610bb3565b9150611320826112b9565b604082019050919050565b6000602082019050818103600083015261134481611308565b905091905056fea2646970667358221220e40d6d6b204a2216a023652b45e8f7b6425938b94b2248bdb3ae5bcdd1782c6764736f6c63430008110033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461016857806370a082311461019857806395d89b41146101c8578063a457c2d7146101e6578063a9059cbb14610216578063dd62ed3e14610246576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b6610276565b6040516100c39190610c38565b60405180910390f35b6100e660048036038101906100e19190610cf3565b610308565b6040516100f39190610d4e565b60405180910390f35b610104610326565b6040516101119190610d78565b60405180910390f35b610134600480360381019061012f9190610d93565b610330565b6040516101419190610d4e565b60405180910390f35b61015261044f565b60405161015f9190610e02565b60405180910390f35b610182600480360381019061017d9190610cf3565b610458565b60405161018f9190610d4e565b60405180910390f35b6101b260048036038101906101ad9190610e1d565b610504565b6040516101bf9190610d78565b60405180910390f35b6101d061054c565b6040516101dd9190610c38565b60405180910390f35b61020060048036038101906101fb9190610cf3565b6105de565b60405161020d9190610d4e565b60405180910390f35b610230600480360381019061022b9190610cf3565b6106c9565b60405161023d9190610d4e565b60405180910390f35b610260600480360381019061025b9190610e4a565b6106e7565b60405161026d9190610d78565b60405180910390f35b60606003805461028590610eb9565b80601f01602080910402602001604051908101604052809291908181526020018280546102b190610eb9565b80156102fe5780601f106102d3576101008083540402835291602001916102fe565b820191906000526020600020905b8154815290600101906020018083116102e157829003601f168201915b5050505050905090565b600061031c61031561076e565b8484610776565b6001905092915050565b6000600254905090565b600080600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600061037c61076e565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146104385782811015610423576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161041a90610f5c565b60405180910390fd5b6104378561042f61076e565b858403610776565b5b61044385858561093f565b60019150509392505050565b60006012905090565b60006104fa61046561076e565b84846001600061047361076e565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546104f59190610fab565b610776565b6001905092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606004805461055b90610eb9565b80601f016020809104026020016040519081016040528092919081815260200182805461058790610eb9565b80156105d45780601f106105a9576101008083540402835291602001916105d4565b820191906000526020600020905b8154815290600101906020018083116105b757829003601f168201915b5050505050905090565b600080600160006105ed61076e565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050828110156106aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106a190611051565b60405180910390fd5b6106be6106b561076e565b85858403610776565b600191505092915050565b60006106dd6106d661076e565b848461093f565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036107e5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107dc906110e3565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610854576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084b90611175565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516109329190610d78565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036109ae576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109a590611207565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a1d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a1490611299565b60405180910390fd5b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610aa3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9a9061132b565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610b369190610fab565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610b9a9190610d78565b60405180910390a350505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610be2578082015181840152602081019050610bc7565b60008484015250505050565b6000601f19601f8301169050919050565b6000610c0a82610ba8565b610c148185610bb3565b9350610c24818560208601610bc4565b610c2d81610bee565b840191505092915050565b60006020820190508181036000830152610c528184610bff565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610c8a82610c5f565b9050919050565b610c9a81610c7f565b8114610ca557600080fd5b50565b600081359050610cb781610c91565b92915050565b6000819050919050565b610cd081610cbd565b8114610cdb57600080fd5b50565b600081359050610ced81610cc7565b92915050565b60008060408385031215610d0a57610d09610c5a565b5b6000610d1885828601610ca8565b9250506020610d2985828601610cde565b9150509250929050565b60008115159050919050565b610d4881610d33565b82525050565b6000602082019050610d636000830184610d3f565b92915050565b610d7281610cbd565b82525050565b6000602082019050610d8d6000830184610d69565b92915050565b600080600060608486031215610dac57610dab610c5a565b5b6000610dba86828701610ca8565b9350506020610dcb86828701610ca8565b9250506040610ddc86828701610cde565b9150509250925092565b600060ff82169050919050565b610dfc81610de6565b82525050565b6000602082019050610e176000830184610df3565b92915050565b600060208284031215610e3357610e32610c5a565b5b6000610e4184828501610ca8565b91505092915050565b60008060408385031215610e6157610e60610c5a565b5b6000610e6f85828601610ca8565b9250506020610e8085828601610ca8565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610ed157607f821691505b602082108103610ee457610ee3610e8a565b5b50919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b6000610f46602883610bb3565b9150610f5182610eea565b604082019050919050565b60006020820190508181036000830152610f7581610f39565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610fb682610cbd565b9150610fc183610cbd565b9250828201905080821115610fd957610fd8610f7c565b5b92915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b600061103b602583610bb3565b915061104682610fdf565b604082019050919050565b6000602082019050818103600083015261106a8161102e565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006110cd602483610bb3565b91506110d882611071565b604082019050919050565b600060208201905081810360008301526110fc816110c0565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b600061115f602283610bb3565b915061116a82611103565b604082019050919050565b6000602082019050818103600083015261118e81611152565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b60006111f1602583610bb3565b91506111fc82611195565b604082019050919050565b60006020820190508181036000830152611220816111e4565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611283602383610bb3565b915061128e82611227565b604082019050919050565b600060208201905081810360008301526112b281611276565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000611315602683610bb3565b9150611320826112b9565b604082019050919050565b6000602082019050818103600083015261134481611308565b905091905056fea2646970667358221220e40d6d6b204a2216a023652b45e8f7b6425938b94b2248bdb3ae5bcdd1782c6764736f6c63430008110033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}