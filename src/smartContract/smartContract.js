export const FakeBAYCABI = { 
  "abi": [
    {
      "inputs": [],
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
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
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
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
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
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
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
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
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
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "baseURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
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
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
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
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
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
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "tokenCounter",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
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
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "claimAToken",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.6.2+commit.bacdbe57\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"baseURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"claimAToken\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"tokenCounter\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenOfOwnerByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{\"approve(address,uint256)\":{\"details\":\"See {IERC721-approve}.\"},\"balanceOf(address)\":{\"details\":\"See {IERC721-balanceOf}.\"},\"baseURI()\":{\"details\":\"Returns the base URI set via {_setBaseURI}. This will be automatically added as a prefix in {tokenURI} to each token's URI, or to the token ID if no specific URI is set for that token ID.\"},\"getApproved(uint256)\":{\"details\":\"See {IERC721-getApproved}.\"},\"isApprovedForAll(address,address)\":{\"details\":\"See {IERC721-isApprovedForAll}.\"},\"name()\":{\"details\":\"See {IERC721Metadata-name}.\"},\"ownerOf(uint256)\":{\"details\":\"See {IERC721-ownerOf}.\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"See {IERC721-setApprovalForAll}.\"},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.     * Time complexity O(1), guaranteed to always use less than 30 000 gas.\"},\"symbol()\":{\"details\":\"See {IERC721Metadata-symbol}.\"},\"tokenByIndex(uint256)\":{\"details\":\"See {IERC721Enumerable-tokenByIndex}.\"},\"tokenOfOwnerByIndex(address,uint256)\":{\"details\":\"See {IERC721Enumerable-tokenOfOwnerByIndex}.\"},\"tokenURI(uint256)\":{\"details\":\"See {IERC721Metadata-tokenURI}.\"},\"totalSupply()\":{\"details\":\"See {IERC721Enumerable-totalSupply}.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-transferFrom}.\"}}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"project:/contracts/FakeBAYC.sol\":\"FakeBAYC\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/introspection/ERC165.sol\":{\"keccak256\":\"0x24141d2f6b98d4cb77a8936eae8cbaad2e261d9062bdc08036096f4550092501\",\"urls\":[\"bzz-raw://b710eb003944777135f027500a5a57b479fe857849f5f467c1ef9687401e3c95\",\"dweb:/ipfs/QmcELzi6KRzAs3DXwxdsoKWRJ13KSeipKQsJgD3unctdZM\"]},\"@openzeppelin/contracts/introspection/IERC165.sol\":{\"keccak256\":\"0xf70bc25d981e4ec9673a995ad2995d5d493ea188d3d8f388bba9c227ce09fb82\",\"urls\":[\"bzz-raw://bd970f51e3a77790c2f02b5b1759827c3b897c3d98c407b3631e8af32e3dc93c\",\"dweb:/ipfs/QmPF85Amgbqjk3SNZKsPCsqCw8JfwYEPMnnhvMJUyX58je\"]},\"@openzeppelin/contracts/math/SafeMath.sol\":{\"keccak256\":\"0xcc78a17dd88fa5a2edc60c8489e2f405c0913b377216a5b26b35656b2d0dab52\",\"urls\":[\"bzz-raw://526dc85e1f9b9b45830e202568d267d93dde7a4fcccf4ad7798dadcd92304d3c\",\"dweb:/ipfs/QmaoXMB972J3cSDLtBq3xBo4jLwqD2uzXTwujtSPqkYVhR\"]},\"@openzeppelin/contracts/token/ERC721/ERC721.sol\":{\"keccak256\":\"0x118ed7540f56b21ff92e21ebaa73584048e98d2ac04ca67571329bb8dbd9032f\",\"urls\":[\"bzz-raw://da2918b7aff73dd51d41bfcfa548f81eb50531b8353500fdbdacf297076db070\",\"dweb:/ipfs/Qmb8ixAs1vBjZRowQNuNg6bRf2NZmgZ1JTBxmQS14PHpcL\"]},\"@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0x2d99a0deb6648c34fbc66d6ac4a2d64798d7a5321b45624f6736fadc63da1962\",\"urls\":[\"bzz-raw://2dcdce5ede1e5e650d174ec0b35be7d47b6a50f30bc895ef0d9e59fb75052e45\",\"dweb:/ipfs/QmQ2XFsDLTYqfEdw7pYzHiGtFRY11yQm4b6ynYgKqDxeB8\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Enumerable.sol\":{\"keccak256\":\"0xe6bd1b1218338b6f9fe17776f48623b4ac3d8a40405f74a44bc23c00abe2ca13\",\"urls\":[\"bzz-raw://0c354c3f6e9c487759aa7869be4fba68e0b2efc777b514d289c4cbd3ff8f7e1a\",\"dweb:/ipfs/QmdF9LcSYVmiUCL7JxLEYmSLrjga6zJsujfi6sgEJD4M1z\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol\":{\"keccak256\":\"0xccb917776f826ac6b68bd5a15a5f711e3967848a52ba11e6104d9a4f593314a7\",\"urls\":[\"bzz-raw://430255ad2229ced6d880e61a67bdc6e48dbbaed8354a7c1fe918cd8b8714a886\",\"dweb:/ipfs/QmTHY56odzqEpEC6v6tafaWMYY7vmULw25q5XHJLCCAeox\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0x52146049d6709c870e8ddcd988b5155cb6c5d640cfcd8978aee52bc1ba2ec4eb\",\"urls\":[\"bzz-raw://ada84513617b7c1b2f890b44503735abaec73a1acd030112a17aac7e6c66a4a1\",\"dweb:/ipfs/QmaiFwdio67iJrfjAdkMac24eJ5sS1qD7CZW6PhUU6KjiK\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0x28911e614500ae7c607a432a709d35da25f3bc5ddc8bd12b278b66358070c0ea\",\"urls\":[\"bzz-raw://256c8c8af5eb072bc473226ab2b2187149b8fc04f5f4a4820db22527f5ce8e3c\",\"dweb:/ipfs/QmRvi5BhnL7Rxf85KrJhwM6RRhukm4tzoctRdgQEheNyiN\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0x8d3cb350f04ff49cfb10aef08d87f19dcbaecc8027b0bed12f3275cd12f38cf0\",\"urls\":[\"bzz-raw://ded47ec7c96750f9bd04bbbc84f659992d4ba901cb7b532a52cd468272cf378f\",\"dweb:/ipfs/QmfBrGtQP7rZEqEg6Wz6jh2N2Kukpj1z5v3CGWmAqrzm96\"]},\"@openzeppelin/contracts/utils/EnumerableMap.sol\":{\"keccak256\":\"0x4b087f06b6670a131a5a14e53b1d2a5ef19c034cc5ec42eeebcf9554325744ad\",\"urls\":[\"bzz-raw://f6a6af5d848334e40db419773f6360601e311ffc21c2e274f730b8c542da99fd\",\"dweb:/ipfs/QmfA24cxQ2g41ZWUuDF295dxDJ4xF1bSDYtC3EaLd7CzW8\"]},\"@openzeppelin/contracts/utils/EnumerableSet.sol\":{\"keccak256\":\"0x1562cd9922fbf739edfb979f506809e2743789cbde3177515542161c3d04b164\",\"urls\":[\"bzz-raw://4580d57781513d98870d9738c7d39094336e0a70cdb90d68dad549c6ced466ec\",\"dweb:/ipfs/Qmf9YZzzRFuvMnav9dgmeRUpdYMMECiZX8w25sHWVbA18V\"]},\"@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0xa1e12f97981f1d0964b1c048978606a57127c56c438bab61cdfe269cad859a74\",\"urls\":[\"bzz-raw://5eefac1760f524971e14aa3f3d79515a3d54fd28c1d3bdca0b36127da349b830\",\"dweb:/ipfs/QmUMzkyH3ytJX5gVPizQruNLhkKmuJb3nFqBDad4LPdg5U\"]},\"project:/contracts/FakeBAYC.sol\":{\"keccak256\":\"0x3d07343575ba493ecb3b4314a0fe84c666469ca04493d4fcb45c241388ac198f\",\"urls\":[\"bzz-raw://2d00d9c8e0290cee6e5feb6309aba2d7d3bb6259614e4926474334b234fd5509\",\"dweb:/ipfs/QmPpYJg4W1nZegSaT71EXviLSNzTtEzppzUfEPhToKFMTF\"]}},\"version\":1}",
  "bytecode": "0x60806040523480156200001157600080fd5b506040518060400160405280601981526020017f46616b6520426f7265642041706520596163687420436c7562000000000000008152506040518060400160405280600581526020017f4642415943000000000000000000000000000000000000000000000000000000815250620000966301ffc9a760e01b6200015260201b60201c565b8160069080519060200190620000ae929190620006fc565b508060079080519060200190620000c7929190620006fc565b50620000e06380ac58cd60e01b6200015260201b60201c565b620000f8635b5e139f60e01b6200015260201b60201c565b6200011063780e9d6360e01b6200015260201b60201c565b5050620001226200025b60201b60201c565b6200014c60405180608001604052806051815260200162003182605191396200028360201b60201c565b620007ab565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415620001ef576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433136353a20696e76616c696420696e746572666163652069640000000081525060200191505060405180910390fd5b6001600080837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b6200026f33600a546200029f60201b60201c565b600a60008154809291906001019190505550565b80600990805190602001906200029b929190620006fc565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000343576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433732313a206d696e7420746f20746865207a65726f206164647265737381525060200191505060405180910390fd5b6200035481620004b360201b60201c565b15620003c8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000081525060200191505060405180910390fd5b620003dc60008383620004d760201b60201c565b6200043481600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020620004dc60201b62001d731790919060201c565b506200045281836002620004fe60201b62001d8d179092919060201c565b50808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b6000620004d08260026200053b60201b62001d291790919060201c565b9050919050565b505050565b6000620004f6836000018360001b6200055d60201b60201c565b905092915050565b600062000532846000018460001b8473ffffffffffffffffffffffffffffffffffffffff1660001b620005d760201b60201c565b90509392505050565b600062000555836000018360001b620006b660201b60201c565b905092915050565b6000620005718383620006d960201b60201c565b620005cc578260000182908060018154018082558091505060019003906000526020600020016000909190919091505582600001805490508360010160008481526020019081526020016000208190555060019050620005d1565b600090505b92915050565b60008084600101600085815260200190815260200160002054905060008114156200068057846000016040518060400160405280868152602001858152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550508460000180549050856001016000868152602001908152602001600020819055506001915050620006af565b828560000160018303815481106200069457fe5b90600052602060002090600202016001018190555060009150505b9392505050565b600080836001016000848152602001908152602001600020541415905092915050565b600080836001016000848152602001908152602001600020541415905092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200073f57805160ff191683800117855562000770565b8280016001018555821562000770579182015b828111156200076f57825182559160200191906001019062000752565b5b5090506200077f919062000783565b5090565b620007a891905b80821115620007a45760008160009055506001016200078a565b5090565b90565b6129c780620007bb6000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c80636352211e116100ad578063b88d4fde11610071578063b88d4fde14610684578063ba1bcc3414610789578063c87b56dd14610793578063d082e3811461083a578063e985e9c51461085857610121565b80636352211e146104685780636c0360eb146104d657806370a082311461055957806395d89b41146105b1578063a22cb4651461063457610121565b806318160ddd116100f457806318160ddd146102ca57806323b872dd146102e85780632f745c591461035657806342842e0e146103b85780634f6ccce71461042657610121565b806301ffc9a71461012657806306fdde031461018b578063081812fc1461020e578063095ea7b31461027c575b600080fd5b6101716004803603602081101561013c57600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506108d4565b604051808215151515815260200191505060405180910390f35b61019361093b565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101d35780820151818401526020810190506101b8565b50505050905090810190601f1680156102005780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61023a6004803603602081101561022457600080fd5b81019080803590602001909291905050506109dd565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102c86004803603604081101561029257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a78565b005b6102d2610bbc565b6040518082815260200191505060405180910390f35b610354600480360360608110156102fe57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610bcd565b005b6103a26004803603604081101561036c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c43565b6040518082815260200191505060405180910390f35b610424600480360360608110156103ce57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c9e565b005b6104526004803603602081101561043c57600080fd5b8101908080359060200190929190505050610cbe565b6040518082815260200191505060405180910390f35b6104946004803603602081101561047e57600080fd5b8101908080359060200190929190505050610ce1565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6104de610d18565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561051e578082015181840152602081019050610503565b50505050905090810190601f16801561054b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61059b6004803603602081101561056f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610dba565b6040518082815260200191505060405180910390f35b6105b9610e8f565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156105f95780820151818401526020810190506105de565b50505050905090810190601f1680156106265780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6106826004803603604081101561064a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050610f31565b005b6107876004803603608081101561069a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561070157600080fd5b82018360208201111561071357600080fd5b8035906020019184600183028401116401000000008311171561073557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506110e9565b005b610791611161565b005b6107bf600480360360208110156107a957600080fd5b8101908080359060200190929190505050611181565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156107ff5780820151818401526020810190506107e4565b50505050905090810190601f16801561082c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610842611452565b6040518082815260200191505060405180910390f35b6108ba6004803603604081101561086e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611458565b604051808215151515815260200191505060405180910390f35b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b606060068054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109d35780601f106109a8576101008083540402835291602001916109d3565b820191906000526020600020905b8154815290600101906020018083116109b657829003601f168201915b5050505050905090565b60006109e8826114ec565b610a3d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806128bc602c913960400191505060405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610a8382610ce1565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610b0a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806129406021913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610b29611509565b73ffffffffffffffffffffffffffffffffffffffff161480610b585750610b5781610b52611509565b611458565b5b610bad576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603881526020018061280f6038913960400191505060405180910390fd5b610bb78383611511565b505050565b6000610bc860026115ca565b905090565b610bde610bd8611509565b826115df565b610c33576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260318152602001806129616031913960400191505060405180910390fd5b610c3e8383836116d3565b505050565b6000610c9682600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061191690919063ffffffff16565b905092915050565b610cb9838383604051806020016040528060008152506110e9565b505050565b600080610cd583600261193090919063ffffffff16565b50905080915050919050565b6000610d118260405180606001604052806029815260200161287160299139600261195f9092919063ffffffff16565b9050919050565b606060098054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610db05780601f10610d8557610100808354040283529160200191610db0565b820191906000526020600020905b815481529060010190602001808311610d9357829003601f168201915b5050505050905090565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610e41576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180612847602a913960400191505060405180910390fd5b610e88600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061197e565b9050919050565b606060078054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610f275780601f10610efc57610100808354040283529160200191610f27565b820191906000526020600020905b815481529060010190602001808311610f0a57829003601f168201915b5050505050905090565b610f39611509565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610fda576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f4552433732313a20617070726f766520746f2063616c6c65720000000000000081525060200191505060405180910390fd5b8060056000610fe7611509565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16611094611509565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b6110fa6110f4611509565b836115df565b61114f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260318152602001806129616031913960400191505060405180910390fd5b61115b84848484611993565b50505050565b61116d33600a54611a05565b600a60008154809291906001019190505550565b606061118c826114ec565b6111e1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180612911602f913960400191505060405180910390fd5b6060600860008481526020019081526020016000208054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561128a5780601f1061125f5761010080835404028352916020019161128a565b820191906000526020600020905b81548152906001019060200180831161126d57829003601f168201915b50505050509050606061129b610d18565b90506000815114156112b157819250505061144d565b6000825111156113825780826040516020018083805190602001908083835b602083106112f357805182526020820191506020810190506020830392506112d0565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b602083106113445780518252602082019150602081019050602083039250611321565b6001836020036101000a038019825116818451168082178552505050505050905001925050506040516020818303038152906040529250505061144d565b8061138c85611bf9565b6040516020018083805190602001908083835b602083106113c2578051825260208201915060208101905060208303925061139f565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b6020831061141357805182526020820191506020810190506020830392506113f0565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052925050505b919050565b600a5481565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000611502826002611d2990919063ffffffff16565b9050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff1661158483610ce1565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60006115d882600001611d43565b9050919050565b60006115ea826114ec565b61163f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806127e3602c913960400191505060405180910390fd5b600061164a83610ce1565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806116b957508373ffffffffffffffffffffffffffffffffffffffff166116a1846109dd565b73ffffffffffffffffffffffffffffffffffffffff16145b806116ca57506116c98185611458565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff166116f382610ce1565b73ffffffffffffffffffffffffffffffffffffffff161461175f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806128e86029913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156117e5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806127996024913960400191505060405180910390fd5b6117f0838383611d54565b6117fb600082611511565b61184c81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611d5990919063ffffffff16565b5061189e81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611d7390919063ffffffff16565b506118b581836002611d8d9092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b60006119258360000183611dc2565b60001c905092915050565b6000806000806119438660000186611e45565b915091508160001c8160001c8090509350935050509250929050565b6000611972846000018460001b84611ede565b60001c90509392505050565b600061198c82600001611fd4565b9050919050565b61199e8484846116d3565b6119aa84848484611fe5565b6119ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260328152602001806127676032913960400191505060405180910390fd5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611aa8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433732313a206d696e7420746f20746865207a65726f206164647265737381525060200191505060405180910390fd5b611ab1816114ec565b15611b24576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000081525060200191505060405180910390fd5b611b3060008383611d54565b611b8181600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611d7390919063ffffffff16565b50611b9881836002611d8d9092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b60606000821415611c41576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611d24565b600082905060005b60008214611c6b578080600101915050600a8281611c6357fe5b049150611c49565b6060816040519080825280601f01601f191660200182016040528015611ca05781602001600182028038833980820191505090505b50905060006001830390508593505b60008414611d1c57600a8481611cc157fe5b0660300160f81b82828060019003935081518110611cdb57fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8481611d1457fe5b049350611caf565b819450505050505b919050565b6000611d3b836000018360001b61222a565b905092915050565b600081600001805490509050919050565b505050565b6000611d6b836000018360001b61224d565b905092915050565b6000611d85836000018360001b612335565b905092915050565b6000611db9846000018460001b8473ffffffffffffffffffffffffffffffffffffffff1660001b6123a5565b90509392505050565b600081836000018054905011611e23576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806127456022913960400191505060405180910390fd5b826000018281548110611e3257fe5b9060005260206000200154905092915050565b60008082846000018054905011611ea7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018061289a6022913960400191505060405180910390fd5b6000846000018481548110611eb857fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b60008084600101600085815260200190815260200160002054905060008114158390611fa5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611f6a578082015181840152602081019050611f4f565b50505050905090810190601f168015611f975780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50846000016001820381548110611fb857fe5b9060005260206000209060020201600101549150509392505050565b600081600001805490509050919050565b60006120068473ffffffffffffffffffffffffffffffffffffffff16612481565b6120135760019050612222565b60606121a963150b7a0260e01b612028611509565b888787604051602401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156120d85780820151818401526020810190506120bd565b50505050905090810190601f1680156121055780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051806060016040528060328152602001612767603291398773ffffffffffffffffffffffffffffffffffffffff166124949092919063ffffffff16565b905060008180602001905160208110156121c257600080fd5b8101908080519060200190929190505050905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614925050505b949350505050565b600080836001016000848152602001908152602001600020541415905092915050565b60008083600101600084815260200190815260200160002054905060008114612329576000600182039050600060018660000180549050039050600086600001828154811061229857fe5b90600052602060002001549050808760000184815481106122b557fe5b90600052602060002001819055506001830187600101600083815260200190815260200160002081905550866000018054806122ed57fe5b6001900381819060005260206000200160009055905586600101600087815260200190815260200160002060009055600194505050505061232f565b60009150505b92915050565b600061234183836124ac565b61239a57826000018290806001815401808255809150506001900390600052602060002001600090919091909150558260000180549050836001016000848152602001908152602001600020819055506001905061239f565b600090505b92915050565b600080846001016000858152602001908152602001600020549050600081141561244c5784600001604051806040016040528086815260200185815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050846000018054905085600101600086815260200190815260200160002081905550600191505061247a565b8285600001600183038154811061245f57fe5b90600052602060002090600202016001018190555060009150505b9392505050565b600080823b905060008111915050919050565b60606124a384846000856124cf565b90509392505050565b600080836001016000848152602001908152602001600020541415905092915050565b60608247101561252a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806127bd6026913960400191505060405180910390fd5b61253385612481565b6125a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000081525060200191505060405180910390fd5b600060608673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b602083106125f557805182526020820191506020810190506020830392506125d2565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114612657576040519150601f19603f3d011682016040523d82523d6000602084013e61265c565b606091505b509150915061266c828286612678565b92505050949350505050565b606083156126885782905061273d565b60008351111561269b5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156127025780820151818401526020810190506126e7565b50505050905090810190601f16801561272f5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b939250505056fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732313a207472616e7366657220746f20746865207a65726f2061646472657373416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c4552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e64734552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564a2646970667358221220a79cadf98578b34c25f2fa3aaf60bb76ea199e53a4242acf8a972ee0dd8775d064736f6c6343000602003368747470733a2f2f676174657761792e70696e6174612e636c6f75642f697066732f516d65536a53696e4870506e6d586d73704d6a776958794e367a533445397a63636172694752336a7863615774712f",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106101215760003560e01c80636352211e116100ad578063b88d4fde11610071578063b88d4fde14610684578063ba1bcc3414610789578063c87b56dd14610793578063d082e3811461083a578063e985e9c51461085857610121565b80636352211e146104685780636c0360eb146104d657806370a082311461055957806395d89b41146105b1578063a22cb4651461063457610121565b806318160ddd116100f457806318160ddd146102ca57806323b872dd146102e85780632f745c591461035657806342842e0e146103b85780634f6ccce71461042657610121565b806301ffc9a71461012657806306fdde031461018b578063081812fc1461020e578063095ea7b31461027c575b600080fd5b6101716004803603602081101561013c57600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506108d4565b604051808215151515815260200191505060405180910390f35b61019361093b565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101d35780820151818401526020810190506101b8565b50505050905090810190601f1680156102005780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61023a6004803603602081101561022457600080fd5b81019080803590602001909291905050506109dd565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102c86004803603604081101561029257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a78565b005b6102d2610bbc565b6040518082815260200191505060405180910390f35b610354600480360360608110156102fe57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610bcd565b005b6103a26004803603604081101561036c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c43565b6040518082815260200191505060405180910390f35b610424600480360360608110156103ce57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c9e565b005b6104526004803603602081101561043c57600080fd5b8101908080359060200190929190505050610cbe565b6040518082815260200191505060405180910390f35b6104946004803603602081101561047e57600080fd5b8101908080359060200190929190505050610ce1565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6104de610d18565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561051e578082015181840152602081019050610503565b50505050905090810190601f16801561054b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61059b6004803603602081101561056f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610dba565b6040518082815260200191505060405180910390f35b6105b9610e8f565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156105f95780820151818401526020810190506105de565b50505050905090810190601f1680156106265780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6106826004803603604081101561064a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050610f31565b005b6107876004803603608081101561069a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561070157600080fd5b82018360208201111561071357600080fd5b8035906020019184600183028401116401000000008311171561073557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506110e9565b005b610791611161565b005b6107bf600480360360208110156107a957600080fd5b8101908080359060200190929190505050611181565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156107ff5780820151818401526020810190506107e4565b50505050905090810190601f16801561082c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610842611452565b6040518082815260200191505060405180910390f35b6108ba6004803603604081101561086e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611458565b604051808215151515815260200191505060405180910390f35b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b606060068054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109d35780601f106109a8576101008083540402835291602001916109d3565b820191906000526020600020905b8154815290600101906020018083116109b657829003601f168201915b5050505050905090565b60006109e8826114ec565b610a3d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806128bc602c913960400191505060405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610a8382610ce1565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610b0a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806129406021913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610b29611509565b73ffffffffffffffffffffffffffffffffffffffff161480610b585750610b5781610b52611509565b611458565b5b610bad576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603881526020018061280f6038913960400191505060405180910390fd5b610bb78383611511565b505050565b6000610bc860026115ca565b905090565b610bde610bd8611509565b826115df565b610c33576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260318152602001806129616031913960400191505060405180910390fd5b610c3e8383836116d3565b505050565b6000610c9682600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061191690919063ffffffff16565b905092915050565b610cb9838383604051806020016040528060008152506110e9565b505050565b600080610cd583600261193090919063ffffffff16565b50905080915050919050565b6000610d118260405180606001604052806029815260200161287160299139600261195f9092919063ffffffff16565b9050919050565b606060098054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610db05780601f10610d8557610100808354040283529160200191610db0565b820191906000526020600020905b815481529060010190602001808311610d9357829003601f168201915b5050505050905090565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610e41576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180612847602a913960400191505060405180910390fd5b610e88600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061197e565b9050919050565b606060078054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610f275780601f10610efc57610100808354040283529160200191610f27565b820191906000526020600020905b815481529060010190602001808311610f0a57829003601f168201915b5050505050905090565b610f39611509565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610fda576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f4552433732313a20617070726f766520746f2063616c6c65720000000000000081525060200191505060405180910390fd5b8060056000610fe7611509565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16611094611509565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b6110fa6110f4611509565b836115df565b61114f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260318152602001806129616031913960400191505060405180910390fd5b61115b84848484611993565b50505050565b61116d33600a54611a05565b600a60008154809291906001019190505550565b606061118c826114ec565b6111e1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180612911602f913960400191505060405180910390fd5b6060600860008481526020019081526020016000208054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561128a5780601f1061125f5761010080835404028352916020019161128a565b820191906000526020600020905b81548152906001019060200180831161126d57829003601f168201915b50505050509050606061129b610d18565b90506000815114156112b157819250505061144d565b6000825111156113825780826040516020018083805190602001908083835b602083106112f357805182526020820191506020810190506020830392506112d0565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b602083106113445780518252602082019150602081019050602083039250611321565b6001836020036101000a038019825116818451168082178552505050505050905001925050506040516020818303038152906040529250505061144d565b8061138c85611bf9565b6040516020018083805190602001908083835b602083106113c2578051825260208201915060208101905060208303925061139f565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b6020831061141357805182526020820191506020810190506020830392506113f0565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052925050505b919050565b600a5481565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000611502826002611d2990919063ffffffff16565b9050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff1661158483610ce1565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60006115d882600001611d43565b9050919050565b60006115ea826114ec565b61163f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806127e3602c913960400191505060405180910390fd5b600061164a83610ce1565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806116b957508373ffffffffffffffffffffffffffffffffffffffff166116a1846109dd565b73ffffffffffffffffffffffffffffffffffffffff16145b806116ca57506116c98185611458565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff166116f382610ce1565b73ffffffffffffffffffffffffffffffffffffffff161461175f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806128e86029913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156117e5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806127996024913960400191505060405180910390fd5b6117f0838383611d54565b6117fb600082611511565b61184c81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611d5990919063ffffffff16565b5061189e81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611d7390919063ffffffff16565b506118b581836002611d8d9092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b60006119258360000183611dc2565b60001c905092915050565b6000806000806119438660000186611e45565b915091508160001c8160001c8090509350935050509250929050565b6000611972846000018460001b84611ede565b60001c90509392505050565b600061198c82600001611fd4565b9050919050565b61199e8484846116d3565b6119aa84848484611fe5565b6119ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260328152602001806127676032913960400191505060405180910390fd5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611aa8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433732313a206d696e7420746f20746865207a65726f206164647265737381525060200191505060405180910390fd5b611ab1816114ec565b15611b24576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000081525060200191505060405180910390fd5b611b3060008383611d54565b611b8181600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611d7390919063ffffffff16565b50611b9881836002611d8d9092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b60606000821415611c41576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611d24565b600082905060005b60008214611c6b578080600101915050600a8281611c6357fe5b049150611c49565b6060816040519080825280601f01601f191660200182016040528015611ca05781602001600182028038833980820191505090505b50905060006001830390508593505b60008414611d1c57600a8481611cc157fe5b0660300160f81b82828060019003935081518110611cdb57fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8481611d1457fe5b049350611caf565b819450505050505b919050565b6000611d3b836000018360001b61222a565b905092915050565b600081600001805490509050919050565b505050565b6000611d6b836000018360001b61224d565b905092915050565b6000611d85836000018360001b612335565b905092915050565b6000611db9846000018460001b8473ffffffffffffffffffffffffffffffffffffffff1660001b6123a5565b90509392505050565b600081836000018054905011611e23576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806127456022913960400191505060405180910390fd5b826000018281548110611e3257fe5b9060005260206000200154905092915050565b60008082846000018054905011611ea7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018061289a6022913960400191505060405180910390fd5b6000846000018481548110611eb857fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b60008084600101600085815260200190815260200160002054905060008114158390611fa5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611f6a578082015181840152602081019050611f4f565b50505050905090810190601f168015611f975780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50846000016001820381548110611fb857fe5b9060005260206000209060020201600101549150509392505050565b600081600001805490509050919050565b60006120068473ffffffffffffffffffffffffffffffffffffffff16612481565b6120135760019050612222565b60606121a963150b7a0260e01b612028611509565b888787604051602401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156120d85780820151818401526020810190506120bd565b50505050905090810190601f1680156121055780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051806060016040528060328152602001612767603291398773ffffffffffffffffffffffffffffffffffffffff166124949092919063ffffffff16565b905060008180602001905160208110156121c257600080fd5b8101908080519060200190929190505050905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614925050505b949350505050565b600080836001016000848152602001908152602001600020541415905092915050565b60008083600101600084815260200190815260200160002054905060008114612329576000600182039050600060018660000180549050039050600086600001828154811061229857fe5b90600052602060002001549050808760000184815481106122b557fe5b90600052602060002001819055506001830187600101600083815260200190815260200160002081905550866000018054806122ed57fe5b6001900381819060005260206000200160009055905586600101600087815260200190815260200160002060009055600194505050505061232f565b60009150505b92915050565b600061234183836124ac565b61239a57826000018290806001815401808255809150506001900390600052602060002001600090919091909150558260000180549050836001016000848152602001908152602001600020819055506001905061239f565b600090505b92915050565b600080846001016000858152602001908152602001600020549050600081141561244c5784600001604051806040016040528086815260200185815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050846000018054905085600101600086815260200190815260200160002081905550600191505061247a565b8285600001600183038154811061245f57fe5b90600052602060002090600202016001018190555060009150505b9392505050565b600080823b905060008111915050919050565b60606124a384846000856124cf565b90509392505050565b600080836001016000848152602001908152602001600020541415905092915050565b60608247101561252a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806127bd6026913960400191505060405180910390fd5b61253385612481565b6125a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000081525060200191505060405180910390fd5b600060608673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b602083106125f557805182526020820191506020810190506020830392506125d2565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114612657576040519150601f19603f3d011682016040523d82523d6000602084013e61265c565b606091505b509150915061266c828286612678565b92505050949350505050565b606083156126885782905061273d565b60008351111561269b5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156127025780820151818401526020810190506126e7565b50505050905090810190601f16801561272f5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b939250505056fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732313a207472616e7366657220746f20746865207a65726f2061646472657373416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c4552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e64734552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564a2646970667358221220a79cadf98578b34c25f2fa3aaf60bb76ea199e53a4242acf8a972ee0dd8775d064736f6c63430006020033",
  "sourceMap": "183:419:13:-:0;;;268:224;8:9:-1;5:2;;;30:1;27;20:12;5:2;268:224:13;3577:369:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;768:40:0;435:10;787:20;;768:18;;;:40;;:::i;:::-;3659:5:3;3651;:13;;;;;;;;;;;;:::i;:::-;;3684:7;3674;:17;;;;;;;;;;;;:::i;:::-;;3779:40;2742:10;3798:20;;3779:18;;;:40;;:::i;:::-;3829:49;3074:10;3848:29;;3829:18;;;:49;;:::i;:::-;3888:51;3447:10;3907:31;;3888:18;;;:51;;:::i;:::-;3577:369;;344:13:13::1;:11;;;:13;;:::i;:::-;367:118;;;;;;;;;;;;;;;;;;:11;;;:118;;:::i;:::-;183:419:::0;;1507:198:0;1605:10;1590:25;;:11;:25;;;;;1582:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1694:4;1658:20;:33;1679:11;1658:33;;;;;;;;;;;;;;;;;;:40;;;;;;;;;;;;;;;;;;1507:198;:::o;498:102:13:-;538:31;544:10;556:12;;538:5;;;:31;;:::i;:::-;579:12;;:14;;;;;;;;;;;;;498:102::o;14873:98:3:-;14956:8;14945;:19;;;;;;;;;;;;:::i;:::-;;14873:98;:::o;12246:393::-;12339:1;12325:16;;:2;:16;;;;12317:61;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12397:16;12405:7;12397;;;:16;;:::i;:::-;12396:17;12388:58;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12457:45;12486:1;12490:2;12494:7;12457:20;;;:45;;:::i;:::-;12513:30;12535:7;12513:13;:17;12527:2;12513:17;;;;;;;;;;;;;;;:21;;;;;;:30;;;;:::i;:::-;;12554:29;12571:7;12580:2;12554:12;:16;;;;;;:29;;;;;:::i;:::-;;12624:7;12620:2;12599:33;;12616:1;12599:33;;;;;;;;;;;;12246:393;;:::o;10383:125::-;10448:4;10471:30;10493:7;10471:12;:21;;;;;;:30;;;;:::i;:::-;10464:37;;10383:125;;;:::o;17010:93::-;;;;:::o;8068:129:11:-;8135:4;8158:32;8163:3;:10;;8183:5;8175:14;;8158:4;;;:32;;:::i;:::-;8151:39;;8068:129;;;;:::o;7027:183:10:-;7116:4;7139:64;7144:3;:10;;7164:3;7156:12;;7194:5;7178:23;;7170:32;;7139:4;;;:64;;:::i;:::-;7132:71;;7027:183;;;;;:::o;7588:149::-;7672:4;7695:35;7705:3;:10;;7725:3;7717:12;;7695:9;;;:35;;:::i;:::-;7688:42;;7588:149;;;;:::o;1640:404:11:-;1703:4;1724:21;1734:3;1739:5;1724:9;;;:21;;:::i;:::-;1719:319;;1761:3;:11;;1778:5;1761:23;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;1761:23:11;;;;;;;;;;;;;;;;;;;1941:3;:11;;:18;;;;1919:3;:12;;:19;1932:5;1919:19;;;;;;;;;;;:40;;;;1980:4;1973:11;;;;1719:319;2022:5;2015:12;;1640:404;;;;;:::o;1836:678:10:-;1912:4;2026:16;2045:3;:12;;:17;2058:3;2045:17;;;;;;;;;;;;2026:36;;2089:1;2077:8;:13;2073:435;;;2143:3;:12;;2161:38;;;;;;;;2178:3;2161:38;;;;2191:5;2161:38;;;2143:57;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;2143:57:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2355:3;:12;;:19;;;;2335:3;:12;;:17;2348:3;2335:17;;;;;;;;;;;:39;;;;2395:4;2388:11;;;;;2073:435;2466:5;2430:3;:12;;2454:1;2443:8;:12;2430:26;;;;;;;;;;;;;;;;;;:33;;:41;;;;2492:5;2485:12;;;1836:678;;;;;;:::o;4278:123::-;4349:4;4393:1;4372:3;:12;;:17;4385:3;4372:17;;;;;;;;;;;;:22;;4365:29;;4278:123;;;;:::o;3805:127:11:-;3878:4;3924:1;3901:3;:12;;:19;3914:5;3901:19;;;;;;;;;;;;:24;;3894:31;;3805:127;;;;:::o;183:419:13:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "183:419:13:-:0;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;183:419:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;965:148:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;965:148:0;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;4517:98:3;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;4517:98:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7222:217;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7222:217:3;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;6766:395;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;6766:395:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;6260:208;;;:::i;:::-;;;;;;;;;;;;;;;;;;;8086:300;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;8086:300:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;6029:160;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;6029:160:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;8452:149;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;8452:149:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;6540:169;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;6540:169:3;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;4280:175;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4280:175:3;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;5855:95;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;5855:95:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4005:218;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4005:218:3;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;4679:102;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;4679:102:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7506:290;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7506:290:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;8667:282;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;8667:282:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;8667:282:3;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;8667:282:3;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;8667:282:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;8667:282:3;;;;;;;;;;;;;;;:::i;:::-;;498:102:13;;;:::i;:::-;;4847:776:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4847:776:3;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;4847:776:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;234:27:13;;;:::i;:::-;;;;;;;;;;;;;;;;;;;7862:162:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7862:162:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;965:148:0;1050:4;1073:20;:33;1094:11;1073:33;;;;;;;;;;;;;;;;;;;;;;;;;;;1066:40;;965:148;;;:::o;4517:98:3:-;4571:13;4603:5;4596:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4517:98;:::o;7222:217::-;7298:7;7325:16;7333:7;7325;:16::i;:::-;7317:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7408:15;:24;7424:7;7408:24;;;;;;;;;;;;;;;;;;;;;7401:31;;7222:217;;;:::o;6766:395::-;6846:13;6862:23;6877:7;6862:14;:23::i;:::-;6846:39;;6909:5;6903:11;;:2;:11;;;;6895:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6987:5;6971:21;;:12;:10;:12::i;:::-;:21;;;:69;;;;6996:44;7020:5;7027:12;:10;:12::i;:::-;6996:23;:44::i;:::-;6971:69;6963:159;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7133:21;7142:2;7146:7;7133:8;:21::i;:::-;6766:395;;;:::o;6260:208::-;6321:7;6440:21;:12;:19;:21::i;:::-;6433:28;;6260:208;:::o;8086:300::-;8245:41;8264:12;:10;:12::i;:::-;8278:7;8245:18;:41::i;:::-;8237:103;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8351:28;8361:4;8367:2;8371:7;8351:9;:28::i;:::-;8086:300;;;:::o;6029:160::-;6126:7;6152:30;6176:5;6152:13;:20;6166:5;6152:20;;;;;;;;;;;;;;;:23;;:30;;;;:::i;:::-;6145:37;;6029:160;;;;:::o;8452:149::-;8555:39;8572:4;8578:2;8582:7;8555:39;;;;;;;;;;;;:16;:39::i;:::-;8452:149;;;:::o;6540:169::-;6615:7;6635:15;6656:22;6672:5;6656:12;:15;;:22;;;;:::i;:::-;6634:44;;;6695:7;6688:14;;;6540:169;;;:::o;4280:175::-;4352:7;4378:70;4395:7;4378:70;;;;;;;;;;;;;;;;;:12;:16;;:70;;;;;:::i;:::-;4371:77;;4280:175;;;:::o;5855:95::-;5903:13;5935:8;5928:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5855:95;:::o;4005:218::-;4077:7;4121:1;4104:19;;:5;:19;;;;4096:74;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4187:29;:13;:20;4201:5;4187:20;;;;;;;;;;;;;;;:27;:29::i;:::-;4180:36;;4005:218;;;:::o;4679:102::-;4735:13;4767:7;4760:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4679:102;:::o;7506:290::-;7620:12;:10;:12::i;:::-;7608:24;;:8;:24;;;;7600:62;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7718:8;7673:18;:32;7692:12;:10;:12::i;:::-;7673:32;;;;;;;;;;;;;;;:42;7706:8;7673:42;;;;;;;;;;;;;;;;:53;;;;;;;;;;;;;;;;;;7770:8;7741:48;;7756:12;:10;:12::i;:::-;7741:48;;;7780:8;7741:48;;;;;;;;;;;;;;;;;;;;;;7506:290;;:::o;8667:282::-;8798:41;8817:12;:10;:12::i;:::-;8831:7;8798:18;:41::i;:::-;8790:103;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8903:39;8917:4;8923:2;8927:7;8936:5;8903:13;:39::i;:::-;8667:282;;;;:::o;498:102:13:-;538:31;544:10;556:12;;538:5;:31::i;:::-;579:12;;:14;;;;;;;;;;;;;498:102::o;4847:776:3:-;4920:13;4953:16;4961:7;4953;:16::i;:::-;4945:76;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5032:23;5058:10;:19;5069:7;5058:19;;;;;;;;;;;5032:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5087:18;5108:9;:7;:9::i;:::-;5087:30;;5212:1;5196:4;5190:18;:23;5186:70;;;5236:9;5229:16;;;;;;5186:70;5384:1;5364:9;5358:23;:27;5354:106;;;5432:4;5438:9;5415:33;;;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;5415:33:3;;;;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;5415:33:3;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;5415:33:3;;;5401:48;;;;;;5354:106;5590:4;5596:18;:7;:16;:18::i;:::-;5573:42;;;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;5573:42:3;;;;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;5573:42:3;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;5573:42:3;;;5559:57;;;;4847:776;;;;:::o;234:27:13:-;;;;:::o;7862:162:3:-;7959:4;7982:18;:25;8001:5;7982:25;;;;;;;;;;;;;;;:35;8008:8;7982:35;;;;;;;;;;;;;;;;;;;;;;;;;7975:42;;7862:162;;;;:::o;10383:125::-;10448:4;10471:30;10493:7;10471:12;:21;;:30;;;;:::i;:::-;10464:37;;10383:125;;;:::o;598:104:9:-;651:15;685:10;678:17;;598:104;:::o;16225:189:3:-;16326:2;16299:15;:24;16315:7;16299:24;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;16381:7;16377:2;16343:46;;16352:23;16367:7;16352:14;:23::i;:::-;16343:46;;;;;;;;;;;;16225:189;;:::o;7820:121:10:-;7889:7;7915:19;7923:3;:10;;7915:7;:19::i;:::-;7908:26;;7820:121;;;:::o;10666:351:3:-;10759:4;10783:16;10791:7;10783;:16::i;:::-;10775:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10858:13;10874:23;10889:7;10874:14;:23::i;:::-;10858:39;;10926:5;10915:16;;:7;:16;;;:51;;;;10959:7;10935:31;;:20;10947:7;10935:11;:20::i;:::-;:31;;;10915:51;:94;;;;10970:39;10994:5;11001:7;10970:23;:39::i;:::-;10915:94;10907:103;;;10666:351;;;;:::o;13707:584::-;13831:4;13804:31;;:23;13819:7;13804:14;:23::i;:::-;:31;;;13796:85;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13931:1;13917:16;;:2;:16;;;;13909:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13985:39;14006:4;14012:2;14016:7;13985:20;:39::i;:::-;14086:29;14103:1;14107:7;14086:8;:29::i;:::-;14126:35;14153:7;14126:13;:19;14140:4;14126:19;;;;;;;;;;;;;;;:26;;:35;;;;:::i;:::-;;14171:30;14193:7;14171:13;:17;14185:2;14171:17;;;;;;;;;;;;;;;:21;;:30;;;;:::i;:::-;;14212:29;14229:7;14238:2;14212:12;:16;;:29;;;;;:::i;:::-;;14276:7;14272:2;14257:27;;14266:4;14257:27;;;;;;;;;;;;13707:584;;;:::o;9250:135:11:-;9321:7;9355:22;9359:3;:10;;9371:5;9355:3;:22::i;:::-;9347:31;;9340:38;;9250:135;;;;:::o;8269:233:10:-;8349:7;8358;8378:11;8391:13;8408:22;8412:3;:10;;8424:5;8408:3;:22::i;:::-;8377:53;;;;8456:3;8448:12;;8486:5;8478:14;;8440:55;;;;;;;;;8269:233;;;;;:::o;9522:211::-;9629:7;9679:44;9684:3;:10;;9704:3;9696:12;;9710;9679:4;:44::i;:::-;9671:53;;9648:78;;9522:211;;;;;:::o;8806:112:11:-;8866:7;8892:19;8900:3;:10;;8892:7;:19::i;:::-;8885:26;;8806:112;;;:::o;9811:269:3:-;9924:28;9934:4;9940:2;9944:7;9924:9;:28::i;:::-;9970:48;9993:4;9999:2;10003:7;10012:5;9970:22;:48::i;:::-;9962:111;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9811:269;;;;:::o;12246:393::-;12339:1;12325:16;;:2;:16;;;;12317:61;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12397:16;12405:7;12397;:16::i;:::-;12396:17;12388:58;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12457:45;12486:1;12490:2;12494:7;12457:20;:45::i;:::-;12513:30;12535:7;12513:13;:17;12527:2;12513:17;;;;;;;;;;;;;;;:21;;:30;;;;:::i;:::-;;12554:29;12571:7;12580:2;12554:12;:16;;:29;;;;;:::i;:::-;;12624:7;12620:2;12599:33;;12616:1;12599:33;;;;;;;;;;;;12246:393;;:::o;210:725:12:-;266:13;492:1;483:5;:10;479:51;;;509:10;;;;;;;;;;;;;;;;;;;;;479:51;539:12;554:5;539:20;;569:14;593:75;608:1;600:4;:9;593:75;;625:8;;;;;;;655:2;647:10;;;;;;;;;593:75;;;677:19;709:6;699:17;;;;;;;;;;;;;;;;;;;;;;;;;29:1:-1;21:6;17:14;116:4;104:10;96:6;87:34;147:4;139:6;135:17;125:27;;0:156;699:17:12;;;;677:39;;726:13;751:1;742:6;:10;726:26;;769:5;762:12;;784:114;799:1;791:4;:9;784:114;;859:2;852:4;:9;;;;;;847:2;:14;834:29;;816:6;823:7;;;;;;;816:15;;;;;;;;;;;:47;;;;;;;;;;;885:2;877:10;;;;;;;;;784:114;;;921:6;907:21;;;;;;210:725;;;;:::o;7588:149:10:-;7672:4;7695:35;7705:3;:10;;7725:3;7717:12;;7695:9;:35::i;:::-;7688:42;;7588:149;;;;:::o;4491:108::-;4547:7;4573:3;:12;;:19;;;;4566:26;;4491:108;;;:::o;17010:93:3:-;;;;:::o;8365:135:11:-;8435:4;8458:35;8466:3;:10;;8486:5;8478:14;;8458:7;:35::i;:::-;8451:42;;8365:135;;;;:::o;8068:129::-;8135:4;8158:32;8163:3;:10;;8183:5;8175:14;;8158:4;:32::i;:::-;8151:39;;8068:129;;;;:::o;7027:183:10:-;7116:4;7139:64;7144:3;:10;;7164:3;7156:12;;7194:5;7178:23;;7170:32;;7139:4;:64::i;:::-;7132:71;;7027:183;;;;;:::o;4452:201:11:-;4519:7;4567:5;4546:3;:11;;:18;;;;:26;4538:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4628:3;:11;;4640:5;4628:18;;;;;;;;;;;;;;;;4621:25;;4452:201;;;;:::o;4942:274:10:-;5009:7;5018;5067:5;5045:3;:12;;:19;;;;:27;5037:74;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5122:22;5147:3;:12;;5160:5;5147:19;;;;;;;;;;;;;;;;;;5122:44;;5184:5;:10;;;5196:5;:12;;;5176:33;;;;;4942:274;;;;;:::o;6403:315::-;6497:7;6516:16;6535:3;:12;;:17;6548:3;6535:17;;;;;;;;;;;;6516:36;;6582:1;6570:8;:13;;6585:12;6562:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;6562:36:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6651:3;:12;;6675:1;6664:8;:12;6651:26;;;;;;;;;;;;;;;;;;:33;;;6644:40;;;6403:315;;;;;:::o;4013:107:11:-;4069:7;4095:3;:11;;:18;;;;4088:25;;4013:107;;;:::o;15524:589:3:-;15644:4;15669:15;:2;:13;;;:15::i;:::-;15664:58;;15707:4;15700:11;;;;15664:58;15731:23;15757:246;15809:45;;;15868:12;:10;:12::i;:::-;15894:4;15912:7;15933:5;15773:175;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;15773:175:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;15773:175:3;;;;;;;38:4:-1;29:7;25:18;67:10;61:17;96:58;199:8;192:4;186;182:15;179:29;167:10;160:49;0:215;;;15773:175:3;15757:246;;;;;;;;;;;;;;;;;:2;:15;;;;:246;;;;;:::i;:::-;15731:272;;16013:13;16040:10;16029:32;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;16029:32:3;;;;;;;;;;;;;;;;16013:48;;1078:10;16089:16;;16079:26;;;:6;:26;;;;16071:35;;;;15524:589;;;;;;;:::o;4278:123:10:-;4349:4;4393:1;4372:3;:12;;:17;4385:3;4372:17;;;;;;;;;;;;:22;;4365:29;;4278:123;;;;:::o;2212:1512:11:-;2278:4;2394:18;2415:3;:12;;:19;2428:5;2415:19;;;;;;;;;;;;2394:40;;2463:1;2449:10;:15;2445:1273;;2806:21;2843:1;2830:10;:14;2806:38;;2858:17;2899:1;2878:3;:11;;:18;;;;:22;2858:42;;3140:17;3160:3;:11;;3172:9;3160:22;;;;;;;;;;;;;;;;3140:42;;3303:9;3274:3;:11;;3286:13;3274:26;;;;;;;;;;;;;;;:38;;;;3420:1;3404:13;:17;3378:3;:12;;:23;3391:9;3378:23;;;;;;;;;;;:43;;;;3527:3;:11;;:17;;;;;;;;;;;;;;;;;;;;;;;;3619:3;:12;;:19;3632:5;3619:19;;;;;;;;;;;3612:26;;;3660:4;3653:11;;;;;;;;2445:1273;3702:5;3695:12;;;2212:1512;;;;;:::o;1640:404::-;1703:4;1724:21;1734:3;1739:5;1724:9;:21::i;:::-;1719:319;;1761:3;:11;;1778:5;1761:23;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;1761:23:11;;;;;;;;;;;;;;;;;;;1941:3;:11;;:18;;;;1919:3;:12;;:19;1932:5;1919:19;;;;;;;;;;;:40;;;;1980:4;1973:11;;;;1719:319;2022:5;2015:12;;1640:404;;;;;:::o;1836:678:10:-;1912:4;2026:16;2045:3;:12;;:17;2058:3;2045:17;;;;;;;;;;;;2026:36;;2089:1;2077:8;:13;2073:435;;;2143:3;:12;;2161:38;;;;;;;;2178:3;2161:38;;;;2191:5;2161:38;;;2143:57;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;2143:57:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2355:3;:12;;:19;;;;2335:3;:12;;:17;2348:3;2335:17;;;;;;;;;;;:39;;;;2395:4;2388:11;;;;;2073:435;2466:5;2430:3;:12;;2454:1;2443:8;:12;2430:26;;;;;;;;;;;;;;;;;;:33;;:41;;;;2492:5;2485:12;;;1836:678;;;;;;:::o;726:413:8:-;786:4;989:12;1098:7;1086:20;1078:28;;1131:1;1124:4;:8;1117:15;;;726:413;;;:::o;3581:193::-;3684:12;3715:52;3737:6;3745:4;3751:1;3754:12;3715:21;:52::i;:::-;3708:59;;3581:193;;;;;:::o;3805:127:11:-;3878:4;3924:1;3901:3;:12;;:19;3914:5;3901:19;;;;;;;;;;;;:24;;3894:31;;3805:127;;;;:::o;4608:523:8:-;4735:12;4792:5;4767:21;:30;;4759:81;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4858:18;4869:6;4858:10;:18::i;:::-;4850:60;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4981:12;4995:23;5022:6;:11;;5042:5;5050:4;5022:33;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;5022:33:8;;;;;;;;;;;;;;;;;;;;;;;;;12:1:-1;19;14:27;;;;67:4;61:11;56:16;;134:4;130:9;123:4;105:16;101:27;97:43;94:1;90:51;84:4;77:65;157:16;154:1;147:27;211:16;208:1;201:4;198:1;194:12;179:49;5:228;;14:27;32:4;27:9;;5:228;;4980:75:8;;;;5072:52;5090:7;5099:10;5111:12;5072:17;:52::i;:::-;5065:59;;;;4608:523;;;;;;:::o;7091:725::-;7206:12;7234:7;7230:580;;;7264:10;7257:17;;;;7230:580;7395:1;7375:10;:17;:21;7371:429;;;7633:10;7627:17;7693:15;7680:10;7676:2;7672:19;7665:44;7582:145;7772:12;7765:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;7765:20:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7091:725;;;;;;:::o",
  "source": "// SPDX-License-Identifier: MIT\npragma solidity ^0.6.2;\n\nimport \"@openzeppelin/contracts/token/ERC721/ERC721.sol\";\nimport \"@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol\";\n\ncontract FakeBAYC is IERC721Metadata, ERC721 {\n    uint256 public tokenCounter;\n\n    constructor() public ERC721(\"Fake Bored Ape Yacht Club\", \"FBAYC\") {\n        claimAToken();\n        _setBaseURI(\n            \"https://gateway.pinata.cloud/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/\"\n        );\n    }\n\n    function claimAToken() public {\n        _mint(msg.sender, tokenCounter);\n        tokenCounter++;\n    }\n}\n",
  "sourcePath": "/home/aymeric/Desktop/erc721-ux/contracts/FakeBAYC.sol",
  "ast": {
    "absolutePath": "project:/contracts/FakeBAYC.sol",
    "exportedSymbols": {
      "FakeBAYC": [
        2931
      ]
    },
    "id": 2932,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2894,
        "literals": [
          "solidity",
          "^",
          "0.6",
          ".2"
        ],
        "nodeType": "PragmaDirective",
        "src": "32:23:13"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        "file": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        "id": 2895,
        "nodeType": "ImportDirective",
        "scope": 2932,
        "sourceUnit": 1317,
        "src": "57:57:13",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol",
        "file": "@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol",
        "id": 2896,
        "nodeType": "ImportDirective",
        "scope": 2932,
        "sourceUnit": 1470,
        "src": "115:66:13",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 2897,
              "name": "IERC721Metadata",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1469,
              "src": "204:15:13",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC721Metadata_$1469",
                "typeString": "contract IERC721Metadata"
              }
            },
            "id": 2898,
            "nodeType": "InheritanceSpecifier",
            "src": "204:15:13"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 2899,
              "name": "ERC721",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1316,
              "src": "221:6:13",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721_$1316",
                "typeString": "contract ERC721"
              }
            },
            "id": 2900,
            "nodeType": "InheritanceSpecifier",
            "src": "221:6:13"
          }
        ],
        "contractDependencies": [
          52,
          62,
          1316,
          1419,
          1446,
          1469,
          1793
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 2931,
        "linearizedBaseContracts": [
          2931,
          1316,
          1446,
          1469,
          1419,
          52,
          62,
          1793
        ],
        "name": "FakeBAYC",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "functionSelector": "d082e381",
            "id": 2902,
            "name": "tokenCounter",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 2931,
            "src": "234:27:13",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 2901,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "234:7:13",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2916,
              "nodeType": "Block",
              "src": "334:158:13",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 2909,
                      "name": "claimAToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2930,
                      "src": "344:11:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 2910,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "344:13:13",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2911,
                  "nodeType": "ExpressionStatement",
                  "src": "344:13:13"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "68747470733a2f2f676174657761792e70696e6174612e636c6f75642f697066732f516d65536a53696e4870506e6d586d73704d6a776958794e367a533445397a63636172694752336a7863615774712f",
                        "id": 2913,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "392:83:13",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_a6779c02b709a61351412d1b10b5a3d3d47e42f44d0da0fe897363a74836b32f",
                          "typeString": "literal_string \"https://gateway.pinata.cloud/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/\""
                        },
                        "value": "https://gateway.pinata.cloud/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_a6779c02b709a61351412d1b10b5a3d3d47e42f44d0da0fe897363a74836b32f",
                          "typeString": "literal_string \"https://gateway.pinata.cloud/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/\""
                        }
                      ],
                      "id": 2912,
                      "name": "_setBaseURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1225,
                      "src": "367:11:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory)"
                      }
                    },
                    "id": 2914,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "367:118:13",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2915,
                  "nodeType": "ExpressionStatement",
                  "src": "367:118:13"
                }
              ]
            },
            "documentation": null,
            "id": 2917,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "hexValue": "46616b6520426f7265642041706520596163687420436c7562",
                    "id": 2905,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "296:27:13",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_977d025a74ed4fc788c5627f670cd58bea79910e225a544b5f8ac1719ba91819",
                      "typeString": "literal_string \"Fake Bored Ape Yacht Club\""
                    },
                    "value": "Fake Bored Ape Yacht Club"
                  },
                  {
                    "argumentTypes": null,
                    "hexValue": "4642415943",
                    "id": 2906,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "325:7:13",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_b2d7bcca17bdf908cf58183c8e7400f18025af5fe17c039afd81e706f0c167bc",
                      "typeString": "literal_string \"FBAYC\""
                    },
                    "value": "FBAYC"
                  }
                ],
                "id": 2907,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2904,
                  "name": "ERC721",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1316,
                  "src": "289:6:13",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC721_$1316_$",
                    "typeString": "type(contract ERC721)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "289:44:13"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 2903,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "279:2:13"
            },
            "returnParameters": {
              "id": 2908,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "334:0:13"
            },
            "scope": 2931,
            "src": "268:224:13",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2929,
              "nodeType": "Block",
              "src": "528:72:13",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 2921,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "544:3:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 2922,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "544:10:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 2923,
                        "name": "tokenCounter",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2902,
                        "src": "556:12:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 2920,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1055,
                      "src": "538:5:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 2924,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "538:31:13",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2925,
                  "nodeType": "ExpressionStatement",
                  "src": "538:31:13"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2927,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "579:14:13",
                    "subExpression": {
                      "argumentTypes": null,
                      "id": 2926,
                      "name": "tokenCounter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2902,
                      "src": "579:12:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 2928,
                  "nodeType": "ExpressionStatement",
                  "src": "579:14:13"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "ba1bcc34",
            "id": 2930,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "claimAToken",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 2918,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "518:2:13"
            },
            "returnParameters": {
              "id": 2919,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "528:0:13"
            },
            "scope": 2931,
            "src": "498:102:13",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 2932,
        "src": "183:419:13"
      }
    ],
    "src": "32:571:13"
  },
  "legacyAST": {
    "attributes": {
      "absolutePath": "project:/contracts/FakeBAYC.sol",
      "exportedSymbols": {
        "FakeBAYC": [
          2931
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "^",
            "0.6",
            ".2"
          ]
        },
        "id": 2894,
        "name": "PragmaDirective",
        "src": "32:23:13"
      },
      {
        "attributes": {
          "SourceUnit": 1317,
          "absolutePath": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
          "file": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
          "scope": 2932,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2895,
        "name": "ImportDirective",
        "src": "57:57:13"
      },
      {
        "attributes": {
          "SourceUnit": 1470,
          "absolutePath": "@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol",
          "file": "@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol",
          "scope": 2932,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2896,
        "name": "ImportDirective",
        "src": "115:66:13"
      },
      {
        "attributes": {
          "abstract": false,
          "contractDependencies": [
            52,
            62,
            1316,
            1419,
            1446,
            1469,
            1793
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            2931,
            1316,
            1446,
            1469,
            1419,
            52,
            62,
            1793
          ],
          "name": "FakeBAYC",
          "scope": 2932
        },
        "children": [
          {
            "attributes": {
              "arguments": null
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "IERC721Metadata",
                  "referencedDeclaration": 1469,
                  "type": "contract IERC721Metadata"
                },
                "id": 2897,
                "name": "UserDefinedTypeName",
                "src": "204:15:13"
              }
            ],
            "id": 2898,
            "name": "InheritanceSpecifier",
            "src": "204:15:13"
          },
          {
            "attributes": {
              "arguments": null
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "ERC721",
                  "referencedDeclaration": 1316,
                  "type": "contract ERC721"
                },
                "id": 2899,
                "name": "UserDefinedTypeName",
                "src": "221:6:13"
              }
            ],
            "id": 2900,
            "name": "InheritanceSpecifier",
            "src": "221:6:13"
          },
          {
            "attributes": {
              "constant": false,
              "functionSelector": "d082e381",
              "name": "tokenCounter",
              "overrides": null,
              "scope": 2931,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint256",
                  "type": "uint256"
                },
                "id": 2901,
                "name": "ElementaryTypeName",
                "src": "234:7:13"
              }
            ],
            "id": 2902,
            "name": "VariableDeclaration",
            "src": "234:27:13"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": true,
              "kind": "constructor",
              "name": "",
              "overrides": null,
              "scope": 2931,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2903,
                "name": "ParameterList",
                "src": "279:2:13"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2908,
                "name": "ParameterList",
                "src": "334:0:13"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 1316,
                      "type": "type(contract ERC721)",
                      "value": "ERC721"
                    },
                    "id": 2904,
                    "name": "Identifier",
                    "src": "289:6:13"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "hexvalue": "46616b6520426f7265642041706520596163687420436c7562",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "subdenomination": null,
                      "token": "string",
                      "type": "literal_string \"Fake Bored Ape Yacht Club\"",
                      "value": "Fake Bored Ape Yacht Club"
                    },
                    "id": 2905,
                    "name": "Literal",
                    "src": "296:27:13"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "hexvalue": "4642415943",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "subdenomination": null,
                      "token": "string",
                      "type": "literal_string \"FBAYC\"",
                      "value": "FBAYC"
                    },
                    "id": 2906,
                    "name": "Literal",
                    "src": "325:7:13"
                  }
                ],
                "id": 2907,
                "name": "ModifierInvocation",
                "src": "289:44:13"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "arguments": [
                            null
                          ],
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                null
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2930,
                              "type": "function ()",
                              "value": "claimAToken"
                            },
                            "id": 2909,
                            "name": "Identifier",
                            "src": "344:11:13"
                          }
                        ],
                        "id": 2910,
                        "name": "FunctionCall",
                        "src": "344:13:13"
                      }
                    ],
                    "id": 2911,
                    "name": "ExpressionStatement",
                    "src": "344:13:13"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_a6779c02b709a61351412d1b10b5a3d3d47e42f44d0da0fe897363a74836b32f",
                                  "typeString": "literal_string \"https://gateway.pinata.cloud/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/\""
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1225,
                              "type": "function (string memory)",
                              "value": "_setBaseURI"
                            },
                            "id": 2912,
                            "name": "Identifier",
                            "src": "367:11:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "68747470733a2f2f676174657761792e70696e6174612e636c6f75642f697066732f516d65536a53696e4870506e6d586d73704d6a776958794e367a533445397a63636172694752336a7863615774712f",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "string",
                              "type": "literal_string \"https://gateway.pinata.cloud/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/\"",
                              "value": "https://gateway.pinata.cloud/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/"
                            },
                            "id": 2913,
                            "name": "Literal",
                            "src": "392:83:13"
                          }
                        ],
                        "id": 2914,
                        "name": "FunctionCall",
                        "src": "367:118:13"
                      }
                    ],
                    "id": 2915,
                    "name": "ExpressionStatement",
                    "src": "367:118:13"
                  }
                ],
                "id": 2916,
                "name": "Block",
                "src": "334:158:13"
              }
            ],
            "id": 2917,
            "name": "FunctionDefinition",
            "src": "268:224:13"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "ba1bcc34",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "claimAToken",
              "overrides": null,
              "scope": 2931,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2918,
                "name": "ParameterList",
                "src": "518:2:13"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2919,
                "name": "ParameterList",
                "src": "528:0:13"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1055,
                              "type": "function (address,uint256)",
                              "value": "_mint"
                            },
                            "id": 2920,
                            "name": "Identifier",
                            "src": "538:5:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address payable"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": -15,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 2921,
                                "name": "Identifier",
                                "src": "544:3:13"
                              }
                            ],
                            "id": 2922,
                            "name": "MemberAccess",
                            "src": "544:10:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2902,
                              "type": "uint256",
                              "value": "tokenCounter"
                            },
                            "id": 2923,
                            "name": "Identifier",
                            "src": "556:12:13"
                          }
                        ],
                        "id": 2924,
                        "name": "FunctionCall",
                        "src": "538:31:13"
                      }
                    ],
                    "id": 2925,
                    "name": "ExpressionStatement",
                    "src": "538:31:13"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "++",
                          "prefix": false,
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2902,
                              "type": "uint256",
                              "value": "tokenCounter"
                            },
                            "id": 2926,
                            "name": "Identifier",
                            "src": "579:12:13"
                          }
                        ],
                        "id": 2927,
                        "name": "UnaryOperation",
                        "src": "579:14:13"
                      }
                    ],
                    "id": 2928,
                    "name": "ExpressionStatement",
                    "src": "579:14:13"
                  }
                ],
                "id": 2929,
                "name": "Block",
                "src": "528:72:13"
              }
            ],
            "id": 2930,
            "name": "FunctionDefinition",
            "src": "498:102:13"
          }
        ],
        "id": 2931,
        "name": "ContractDefinition",
        "src": "183:419:13"
      }
    ],
    "id": 2932,
    "name": "SourceUnit",
    "src": "32:571:13"
  },
  "compiler": {
    "name": "solc",
    "version": "0.6.2+commit.bacdbe57.Emscripten.clang"
  },
  "networks": {
    "11155111": {
      "address": "0x1dA89342716B14602664626CD3482b47D5C2005E"
    }
  },
  "schemaVersion": "3.4.11",
  "updatedAt": "2022-11-25T08:10:38.368Z",
  "networkType": "ethereum",
  "devdoc": {
    "methods": {
      "approve(address,uint256)": {
        "details": "See {IERC721-approve}."
      },
      "balanceOf(address)": {
        "details": "See {IERC721-balanceOf}."
      },
      "baseURI()": {
        "details": "Returns the base URI set via {_setBaseURI}. This will be automatically added as a prefix in {tokenURI} to each token's URI, or to the token ID if no specific URI is set for that token ID."
      },
      "getApproved(uint256)": {
        "details": "See {IERC721-getApproved}."
      },
      "isApprovedForAll(address,address)": {
        "details": "See {IERC721-isApprovedForAll}."
      },
      "name()": {
        "details": "See {IERC721Metadata-name}."
      },
      "ownerOf(uint256)": {
        "details": "See {IERC721-ownerOf}."
      },
      "safeTransferFrom(address,address,uint256)": {
        "details": "See {IERC721-safeTransferFrom}."
      },
      "safeTransferFrom(address,address,uint256,bytes)": {
        "details": "See {IERC721-safeTransferFrom}."
      },
      "setApprovalForAll(address,bool)": {
        "details": "See {IERC721-setApprovalForAll}."
      },
      "supportsInterface(bytes4)": {
        "details": "See {IERC165-supportsInterface}.     * Time complexity O(1), guaranteed to always use less than 30 000 gas."
      },
      "symbol()": {
        "details": "See {IERC721Metadata-symbol}."
      },
      "tokenByIndex(uint256)": {
        "details": "See {IERC721Enumerable-tokenByIndex}."
      },
      "tokenOfOwnerByIndex(address,uint256)": {
        "details": "See {IERC721Enumerable-tokenOfOwnerByIndex}."
      },
      "tokenURI(uint256)": {
        "details": "See {IERC721Metadata-tokenURI}."
      },
      "totalSupply()": {
        "details": "See {IERC721Enumerable-totalSupply}."
      },
      "transferFrom(address,address,uint256)": {
        "details": "See {IERC721-transferFrom}."
      }
    }
  },
  "userdoc": {
    "methods": {}
  }
}

export const FakeNefturiansABI = {
  "abi": [
    {
      "inputs": [],
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
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
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
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
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
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
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
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
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
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "baseURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
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
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
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
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
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
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "tokenCounter",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "tokenPrice",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
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
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "buyAToken",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.6.2+commit.bacdbe57\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"baseURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"buyAToken\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"tokenCounter\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenOfOwnerByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"tokenPrice\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{\"approve(address,uint256)\":{\"details\":\"See {IERC721-approve}.\"},\"balanceOf(address)\":{\"details\":\"See {IERC721-balanceOf}.\"},\"baseURI()\":{\"details\":\"Returns the base URI set via {_setBaseURI}. This will be automatically added as a prefix in {tokenURI} to each token's URI, or to the token ID if no specific URI is set for that token ID.\"},\"getApproved(uint256)\":{\"details\":\"See {IERC721-getApproved}.\"},\"isApprovedForAll(address,address)\":{\"details\":\"See {IERC721-isApprovedForAll}.\"},\"name()\":{\"details\":\"See {IERC721Metadata-name}.\"},\"ownerOf(uint256)\":{\"details\":\"See {IERC721-ownerOf}.\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"See {IERC721-setApprovalForAll}.\"},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.     * Time complexity O(1), guaranteed to always use less than 30 000 gas.\"},\"symbol()\":{\"details\":\"See {IERC721Metadata-symbol}.\"},\"tokenByIndex(uint256)\":{\"details\":\"See {IERC721Enumerable-tokenByIndex}.\"},\"tokenOfOwnerByIndex(address,uint256)\":{\"details\":\"See {IERC721Enumerable-tokenOfOwnerByIndex}.\"},\"tokenURI(uint256)\":{\"details\":\"See {IERC721Metadata-tokenURI}.\"},\"totalSupply()\":{\"details\":\"See {IERC721Enumerable-totalSupply}.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-transferFrom}.\"}}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"project:/contracts/FakeNefturians.sol\":\"FakeNefturians\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/introspection/ERC165.sol\":{\"keccak256\":\"0x24141d2f6b98d4cb77a8936eae8cbaad2e261d9062bdc08036096f4550092501\",\"urls\":[\"bzz-raw://b710eb003944777135f027500a5a57b479fe857849f5f467c1ef9687401e3c95\",\"dweb:/ipfs/QmcELzi6KRzAs3DXwxdsoKWRJ13KSeipKQsJgD3unctdZM\"]},\"@openzeppelin/contracts/introspection/IERC165.sol\":{\"keccak256\":\"0xf70bc25d981e4ec9673a995ad2995d5d493ea188d3d8f388bba9c227ce09fb82\",\"urls\":[\"bzz-raw://bd970f51e3a77790c2f02b5b1759827c3b897c3d98c407b3631e8af32e3dc93c\",\"dweb:/ipfs/QmPF85Amgbqjk3SNZKsPCsqCw8JfwYEPMnnhvMJUyX58je\"]},\"@openzeppelin/contracts/math/SafeMath.sol\":{\"keccak256\":\"0xcc78a17dd88fa5a2edc60c8489e2f405c0913b377216a5b26b35656b2d0dab52\",\"urls\":[\"bzz-raw://526dc85e1f9b9b45830e202568d267d93dde7a4fcccf4ad7798dadcd92304d3c\",\"dweb:/ipfs/QmaoXMB972J3cSDLtBq3xBo4jLwqD2uzXTwujtSPqkYVhR\"]},\"@openzeppelin/contracts/token/ERC721/ERC721.sol\":{\"keccak256\":\"0x118ed7540f56b21ff92e21ebaa73584048e98d2ac04ca67571329bb8dbd9032f\",\"urls\":[\"bzz-raw://da2918b7aff73dd51d41bfcfa548f81eb50531b8353500fdbdacf297076db070\",\"dweb:/ipfs/Qmb8ixAs1vBjZRowQNuNg6bRf2NZmgZ1JTBxmQS14PHpcL\"]},\"@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0x2d99a0deb6648c34fbc66d6ac4a2d64798d7a5321b45624f6736fadc63da1962\",\"urls\":[\"bzz-raw://2dcdce5ede1e5e650d174ec0b35be7d47b6a50f30bc895ef0d9e59fb75052e45\",\"dweb:/ipfs/QmQ2XFsDLTYqfEdw7pYzHiGtFRY11yQm4b6ynYgKqDxeB8\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Enumerable.sol\":{\"keccak256\":\"0xe6bd1b1218338b6f9fe17776f48623b4ac3d8a40405f74a44bc23c00abe2ca13\",\"urls\":[\"bzz-raw://0c354c3f6e9c487759aa7869be4fba68e0b2efc777b514d289c4cbd3ff8f7e1a\",\"dweb:/ipfs/QmdF9LcSYVmiUCL7JxLEYmSLrjga6zJsujfi6sgEJD4M1z\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol\":{\"keccak256\":\"0xccb917776f826ac6b68bd5a15a5f711e3967848a52ba11e6104d9a4f593314a7\",\"urls\":[\"bzz-raw://430255ad2229ced6d880e61a67bdc6e48dbbaed8354a7c1fe918cd8b8714a886\",\"dweb:/ipfs/QmTHY56odzqEpEC6v6tafaWMYY7vmULw25q5XHJLCCAeox\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0x52146049d6709c870e8ddcd988b5155cb6c5d640cfcd8978aee52bc1ba2ec4eb\",\"urls\":[\"bzz-raw://ada84513617b7c1b2f890b44503735abaec73a1acd030112a17aac7e6c66a4a1\",\"dweb:/ipfs/QmaiFwdio67iJrfjAdkMac24eJ5sS1qD7CZW6PhUU6KjiK\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0x28911e614500ae7c607a432a709d35da25f3bc5ddc8bd12b278b66358070c0ea\",\"urls\":[\"bzz-raw://256c8c8af5eb072bc473226ab2b2187149b8fc04f5f4a4820db22527f5ce8e3c\",\"dweb:/ipfs/QmRvi5BhnL7Rxf85KrJhwM6RRhukm4tzoctRdgQEheNyiN\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0x8d3cb350f04ff49cfb10aef08d87f19dcbaecc8027b0bed12f3275cd12f38cf0\",\"urls\":[\"bzz-raw://ded47ec7c96750f9bd04bbbc84f659992d4ba901cb7b532a52cd468272cf378f\",\"dweb:/ipfs/QmfBrGtQP7rZEqEg6Wz6jh2N2Kukpj1z5v3CGWmAqrzm96\"]},\"@openzeppelin/contracts/utils/EnumerableMap.sol\":{\"keccak256\":\"0x4b087f06b6670a131a5a14e53b1d2a5ef19c034cc5ec42eeebcf9554325744ad\",\"urls\":[\"bzz-raw://f6a6af5d848334e40db419773f6360601e311ffc21c2e274f730b8c542da99fd\",\"dweb:/ipfs/QmfA24cxQ2g41ZWUuDF295dxDJ4xF1bSDYtC3EaLd7CzW8\"]},\"@openzeppelin/contracts/utils/EnumerableSet.sol\":{\"keccak256\":\"0x1562cd9922fbf739edfb979f506809e2743789cbde3177515542161c3d04b164\",\"urls\":[\"bzz-raw://4580d57781513d98870d9738c7d39094336e0a70cdb90d68dad549c6ced466ec\",\"dweb:/ipfs/Qmf9YZzzRFuvMnav9dgmeRUpdYMMECiZX8w25sHWVbA18V\"]},\"@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0xa1e12f97981f1d0964b1c048978606a57127c56c438bab61cdfe269cad859a74\",\"urls\":[\"bzz-raw://5eefac1760f524971e14aa3f3d79515a3d54fd28c1d3bdca0b36127da349b830\",\"dweb:/ipfs/QmUMzkyH3ytJX5gVPizQruNLhkKmuJb3nFqBDad4LPdg5U\"]},\"project:/contracts/FakeNefturians.sol\":{\"keccak256\":\"0xfba706bdd4f19b8fe0dfb99756439db068a456ac52f305de34ec6b7e4963f0e5\",\"urls\":[\"bzz-raw://a7096ef40c0edc97cfb9364f0b200a0119017d7f18fa0b819864a9a6b47a69f4\",\"dweb:/ipfs/QmWn9G5XayJpmMSwxYVHPHR5apYZqs9bczDf8rYpdhYeWo\"]}},\"version\":1}",
  "bytecode": "0x608060405267016345785d8a0000600b553480156200001d57600080fd5b506040518060400160405280600f81526020017f46616b65204e656674757269616e7300000000000000000000000000000000008152506040518060400160405280600481526020017f4e46545200000000000000000000000000000000000000000000000000000000815250620000a26301ffc9a760e01b6200017460201b60201c565b8160069080519060200190620000ba929190620006f6565b508060079080519060200190620000d3929190620006f6565b50620000ec6380ac58cd60e01b6200017460201b60201c565b62000104635b5e139f60e01b6200017460201b60201c565b6200011c63780e9d6360e01b6200017460201b60201c565b50506200013233600a546200027d60201b60201c565b600a600081548092919060010191905055506200016e604051806060016040528060238152602001620032a3602391396200049160201b60201c565b620007a5565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141562000211576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433136353a20696e76616c696420696e746572666163652069640000000081525060200191505060405180910390fd5b6001600080837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000321576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433732313a206d696e7420746f20746865207a65726f206164647265737381525060200191505060405180910390fd5b6200033281620004ad60201b60201c565b15620003a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000081525060200191505060405180910390fd5b620003ba60008383620004d160201b60201c565b6200041281600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020620004d660201b62001e9a1790919060201c565b506200043081836002620004f860201b62001eb4179092919060201c565b50808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b8060099080519060200190620004a9929190620006f6565b5050565b6000620004ca8260026200053560201b62001e501790919060201c565b9050919050565b505050565b6000620004f0836000018360001b6200055760201b60201c565b905092915050565b60006200052c846000018460001b8473ffffffffffffffffffffffffffffffffffffffff1660001b620005d160201b60201c565b90509392505050565b60006200054f836000018360001b620006b060201b60201c565b905092915050565b60006200056b8383620006d360201b60201c565b620005c6578260000182908060018154018082558091505060019003906000526020600020016000909190919091505582600001805490508360010160008481526020019081526020016000208190555060019050620005cb565b600090505b92915050565b60008084600101600085815260200190815260200160002054905060008114156200067a57846000016040518060400160405280868152602001858152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550508460000180549050856001016000868152602001908152602001600020819055506001915050620006a9565b828560000160018303815481106200068e57fe5b90600052602060002090600202016001018190555060009150505b9392505050565b600080836001016000848152602001908152602001600020541415905092915050565b600080836001016000848152602001908152602001600020541415905092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200073957805160ff19168380011785556200076a565b828001600101855582156200076a579182015b82811115620007695782518255916020019190600101906200074c565b5b5090506200077991906200077d565b5090565b620007a291905b808211156200079e57600081600090555060010162000784565b5090565b90565b612aee80620007b56000396000f3fe60806040526004361061011f5760003560e01c80636c0360eb116100a0578063a22cb46511610064578063a22cb46514610710578063b88d4fde1461076d578063c87b56dd1461087f578063d082e38114610933578063e985e9c51461095e5761011f565b80636c0360eb1461055657806370a08231146105e65780637ff9b5961461064b57806383d0bfa51461067657806395d89b41146106805761011f565b806323b872dd116100e757806323b872dd146103275780632f745c59146103a257806342842e0e146104115780634f6ccce71461048c5780636352211e146104db5761011f565b806301ffc9a71461012457806306fdde0314610196578063081812fc14610226578063095ea7b3146102a157806318160ddd146102fc575b600080fd5b34801561013057600080fd5b5061017c6004803603602081101561014757600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506109e7565b604051808215151515815260200191505060405180910390f35b3480156101a257600080fd5b506101ab610a4e565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101eb5780820151818401526020810190506101d0565b50505050905090810190601f1680156102185780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561023257600080fd5b5061025f6004803603602081101561024957600080fd5b8101908080359060200190929190505050610af0565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102ad57600080fd5b506102fa600480360360408110156102c457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b8b565b005b34801561030857600080fd5b50610311610ccf565b6040518082815260200191505060405180910390f35b34801561033357600080fd5b506103a06004803603606081101561034a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610ce0565b005b3480156103ae57600080fd5b506103fb600480360360408110156103c557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d56565b6040518082815260200191505060405180910390f35b34801561041d57600080fd5b5061048a6004803603606081101561043457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610db1565b005b34801561049857600080fd5b506104c5600480360360208110156104af57600080fd5b8101908080359060200190929190505050610dd1565b6040518082815260200191505060405180910390f35b3480156104e757600080fd5b50610514600480360360208110156104fe57600080fd5b8101908080359060200190929190505050610df4565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561056257600080fd5b5061056b610e2b565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156105ab578082015181840152602081019050610590565b50505050905090810190601f1680156105d85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156105f257600080fd5b506106356004803603602081101561060957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ecd565b6040518082815260200191505060405180910390f35b34801561065757600080fd5b50610660610fa2565b6040518082815260200191505060405180910390f35b61067e610fa8565b005b34801561068c57600080fd5b50610695610fd6565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156106d55780820151818401526020810190506106ba565b50505050905090810190601f1680156107025780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561071c57600080fd5b5061076b6004803603604081101561073357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050611078565b005b34801561077957600080fd5b5061087d6004803603608081101561079057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156107f757600080fd5b82018360208201111561080957600080fd5b8035906020019184600183028401116401000000008311171561082b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611230565b005b34801561088b57600080fd5b506108b8600480360360208110156108a257600080fd5b81019080803590602001909291905050506112a8565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156108f85780820151818401526020810190506108dd565b50505050905090810190601f1680156109255780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561093f57600080fd5b50610948611579565b6040518082815260200191505060405180910390f35b34801561096a57600080fd5b506109cd6004803603604081101561098157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061157f565b604051808215151515815260200191505060405180910390f35b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b606060068054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ae65780601f10610abb57610100808354040283529160200191610ae6565b820191906000526020600020905b815481529060010190602001808311610ac957829003601f168201915b5050505050905090565b6000610afb82611613565b610b50576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806129e3602c913960400191505060405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610b9682610df4565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610c1d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180612a676021913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610c3c611630565b73ffffffffffffffffffffffffffffffffffffffff161480610c6b5750610c6a81610c65611630565b61157f565b5b610cc0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260388152602001806129366038913960400191505060405180910390fd5b610cca8383611638565b505050565b6000610cdb60026116f1565b905090565b610cf1610ceb611630565b82611706565b610d46576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526031815260200180612a886031913960400191505060405180910390fd5b610d518383836117fa565b505050565b6000610da982600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611a3d90919063ffffffff16565b905092915050565b610dcc83838360405180602001604052806000815250611230565b505050565b600080610de8836002611a5790919063ffffffff16565b50905080915050919050565b6000610e2482604051806060016040528060298152602001612998602991396002611a869092919063ffffffff16565b9050919050565b606060098054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ec35780601f10610e9857610100808354040283529160200191610ec3565b820191906000526020600020905b815481529060010190602001808311610ea657829003601f168201915b5050505050905090565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610f54576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a81526020018061296e602a913960400191505060405180910390fd5b610f9b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611aa5565b9050919050565b600b5481565b600b543411610fb657600080fd5b610fc233600a54611aba565b600a60008154809291906001019190505550565b606060078054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561106e5780601f106110435761010080835404028352916020019161106e565b820191906000526020600020905b81548152906001019060200180831161105157829003601f168201915b5050505050905090565b611080611630565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611121576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f4552433732313a20617070726f766520746f2063616c6c65720000000000000081525060200191505060405180910390fd5b806005600061112e611630565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff166111db611630565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b61124161123b611630565b83611706565b611296576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526031815260200180612a886031913960400191505060405180910390fd5b6112a284848484611cae565b50505050565b60606112b382611613565b611308576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180612a38602f913960400191505060405180910390fd5b6060600860008481526020019081526020016000208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156113b15780601f10611386576101008083540402835291602001916113b1565b820191906000526020600020905b81548152906001019060200180831161139457829003601f168201915b5050505050905060606113c2610e2b565b90506000815114156113d8578192505050611574565b6000825111156114a95780826040516020018083805190602001908083835b6020831061141a57805182526020820191506020810190506020830392506113f7565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b6020831061146b5780518252602082019150602081019050602083039250611448565b6001836020036101000a0380198251168184511680821785525050505050509050019250505060405160208183030381529060405292505050611574565b806114b385611d20565b6040516020018083805190602001908083835b602083106114e957805182526020820191506020810190506020830392506114c6565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b6020831061153a5780518252602082019150602081019050602083039250611517565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052925050505b919050565b600a5481565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000611629826002611e5090919063ffffffff16565b9050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff166116ab83610df4565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60006116ff82600001611e6a565b9050919050565b600061171182611613565b611766576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c81526020018061290a602c913960400191505060405180910390fd5b600061177183610df4565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806117e057508373ffffffffffffffffffffffffffffffffffffffff166117c884610af0565b73ffffffffffffffffffffffffffffffffffffffff16145b806117f157506117f0818561157f565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff1661181a82610df4565b73ffffffffffffffffffffffffffffffffffffffff1614611886576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526029815260200180612a0f6029913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561190c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806128c06024913960400191505060405180910390fd5b611917838383611e7b565b611922600082611638565b61197381600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611e8090919063ffffffff16565b506119c581600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611e9a90919063ffffffff16565b506119dc81836002611eb49092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6000611a4c8360000183611ee9565b60001c905092915050565b600080600080611a6a8660000186611f6c565b915091508160001c8160001c8090509350935050509250929050565b6000611a99846000018460001b84612005565b60001c90509392505050565b6000611ab3826000016120fb565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611b5d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433732313a206d696e7420746f20746865207a65726f206164647265737381525060200191505060405180910390fd5b611b6681611613565b15611bd9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000081525060200191505060405180910390fd5b611be560008383611e7b565b611c3681600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611e9a90919063ffffffff16565b50611c4d81836002611eb49092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b611cb98484846117fa565b611cc58484848461210c565b611d1a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603281526020018061288e6032913960400191505060405180910390fd5b50505050565b60606000821415611d68576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611e4b565b600082905060005b60008214611d92578080600101915050600a8281611d8a57fe5b049150611d70565b6060816040519080825280601f01601f191660200182016040528015611dc75781602001600182028038833980820191505090505b50905060006001830390508593505b60008414611e4357600a8481611de857fe5b0660300160f81b82828060019003935081518110611e0257fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8481611e3b57fe5b049350611dd6565b819450505050505b919050565b6000611e62836000018360001b612351565b905092915050565b600081600001805490509050919050565b505050565b6000611e92836000018360001b612374565b905092915050565b6000611eac836000018360001b61245c565b905092915050565b6000611ee0846000018460001b8473ffffffffffffffffffffffffffffffffffffffff1660001b6124cc565b90509392505050565b600081836000018054905011611f4a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018061286c6022913960400191505060405180910390fd5b826000018281548110611f5957fe5b9060005260206000200154905092915050565b60008082846000018054905011611fce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806129c16022913960400191505060405180910390fd5b6000846000018481548110611fdf57fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b600080846001016000858152602001908152602001600020549050600081141583906120cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612091578082015181840152602081019050612076565b50505050905090810190601f1680156120be5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b508460000160018203815481106120df57fe5b9060005260206000209060020201600101549150509392505050565b600081600001805490509050919050565b600061212d8473ffffffffffffffffffffffffffffffffffffffff166125a8565b61213a5760019050612349565b60606122d063150b7a0260e01b61214f611630565b888787604051602401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156121ff5780820151818401526020810190506121e4565b50505050905090810190601f16801561222c5780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505060405180606001604052806032815260200161288e603291398773ffffffffffffffffffffffffffffffffffffffff166125bb9092919063ffffffff16565b905060008180602001905160208110156122e957600080fd5b8101908080519060200190929190505050905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614925050505b949350505050565b600080836001016000848152602001908152602001600020541415905092915050565b6000808360010160008481526020019081526020016000205490506000811461245057600060018203905060006001866000018054905003905060008660000182815481106123bf57fe5b90600052602060002001549050808760000184815481106123dc57fe5b906000526020600020018190555060018301876001016000838152602001908152602001600020819055508660000180548061241457fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050612456565b60009150505b92915050565b600061246883836125d3565b6124c15782600001829080600181540180825580915050600190039060005260206000200160009091909190915055826000018054905083600101600084815260200190815260200160002081905550600190506124c6565b600090505b92915050565b6000808460010160008581526020019081526020016000205490506000811415612573578460000160405180604001604052808681526020018581525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505084600001805490508560010160008681526020019081526020016000208190555060019150506125a1565b8285600001600183038154811061258657fe5b90600052602060002090600202016001018190555060009150505b9392505050565b600080823b905060008111915050919050565b60606125ca84846000856125f6565b90509392505050565b600080836001016000848152602001908152602001600020541415905092915050565b606082471015612651576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806128e46026913960400191505060405180910390fd5b61265a856125a8565b6126cc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000081525060200191505060405180910390fd5b600060608673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b6020831061271c57805182526020820191506020810190506020830392506126f9565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d806000811461277e576040519150601f19603f3d011682016040523d82523d6000602084013e612783565b606091505b509150915061279382828661279f565b92505050949350505050565b606083156127af57829050612864565b6000835111156127c25782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561282957808201518184015260208101905061280e565b50505050905090810190601f1680156128565780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b939250505056fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732313a207472616e7366657220746f20746865207a65726f2061646472657373416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c4552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e64734552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564a2646970667358221220ffdaf2b008928984c394dd84be5740aeee564c2f2c7a33e66d69ae54f669d5c464736f6c6343000602003368747470733a2f2f6170692e6e656674757269616e732e696f2f6d657461646174612f",
  "deployedBytecode": "0x60806040526004361061011f5760003560e01c80636c0360eb116100a0578063a22cb46511610064578063a22cb46514610710578063b88d4fde1461076d578063c87b56dd1461087f578063d082e38114610933578063e985e9c51461095e5761011f565b80636c0360eb1461055657806370a08231146105e65780637ff9b5961461064b57806383d0bfa51461067657806395d89b41146106805761011f565b806323b872dd116100e757806323b872dd146103275780632f745c59146103a257806342842e0e146104115780634f6ccce71461048c5780636352211e146104db5761011f565b806301ffc9a71461012457806306fdde0314610196578063081812fc14610226578063095ea7b3146102a157806318160ddd146102fc575b600080fd5b34801561013057600080fd5b5061017c6004803603602081101561014757600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506109e7565b604051808215151515815260200191505060405180910390f35b3480156101a257600080fd5b506101ab610a4e565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101eb5780820151818401526020810190506101d0565b50505050905090810190601f1680156102185780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561023257600080fd5b5061025f6004803603602081101561024957600080fd5b8101908080359060200190929190505050610af0565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102ad57600080fd5b506102fa600480360360408110156102c457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b8b565b005b34801561030857600080fd5b50610311610ccf565b6040518082815260200191505060405180910390f35b34801561033357600080fd5b506103a06004803603606081101561034a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610ce0565b005b3480156103ae57600080fd5b506103fb600480360360408110156103c557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d56565b6040518082815260200191505060405180910390f35b34801561041d57600080fd5b5061048a6004803603606081101561043457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610db1565b005b34801561049857600080fd5b506104c5600480360360208110156104af57600080fd5b8101908080359060200190929190505050610dd1565b6040518082815260200191505060405180910390f35b3480156104e757600080fd5b50610514600480360360208110156104fe57600080fd5b8101908080359060200190929190505050610df4565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561056257600080fd5b5061056b610e2b565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156105ab578082015181840152602081019050610590565b50505050905090810190601f1680156105d85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156105f257600080fd5b506106356004803603602081101561060957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ecd565b6040518082815260200191505060405180910390f35b34801561065757600080fd5b50610660610fa2565b6040518082815260200191505060405180910390f35b61067e610fa8565b005b34801561068c57600080fd5b50610695610fd6565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156106d55780820151818401526020810190506106ba565b50505050905090810190601f1680156107025780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561071c57600080fd5b5061076b6004803603604081101561073357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050611078565b005b34801561077957600080fd5b5061087d6004803603608081101561079057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156107f757600080fd5b82018360208201111561080957600080fd5b8035906020019184600183028401116401000000008311171561082b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611230565b005b34801561088b57600080fd5b506108b8600480360360208110156108a257600080fd5b81019080803590602001909291905050506112a8565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156108f85780820151818401526020810190506108dd565b50505050905090810190601f1680156109255780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561093f57600080fd5b50610948611579565b6040518082815260200191505060405180910390f35b34801561096a57600080fd5b506109cd6004803603604081101561098157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061157f565b604051808215151515815260200191505060405180910390f35b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b606060068054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ae65780601f10610abb57610100808354040283529160200191610ae6565b820191906000526020600020905b815481529060010190602001808311610ac957829003601f168201915b5050505050905090565b6000610afb82611613565b610b50576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806129e3602c913960400191505060405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610b9682610df4565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610c1d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180612a676021913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610c3c611630565b73ffffffffffffffffffffffffffffffffffffffff161480610c6b5750610c6a81610c65611630565b61157f565b5b610cc0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260388152602001806129366038913960400191505060405180910390fd5b610cca8383611638565b505050565b6000610cdb60026116f1565b905090565b610cf1610ceb611630565b82611706565b610d46576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526031815260200180612a886031913960400191505060405180910390fd5b610d518383836117fa565b505050565b6000610da982600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611a3d90919063ffffffff16565b905092915050565b610dcc83838360405180602001604052806000815250611230565b505050565b600080610de8836002611a5790919063ffffffff16565b50905080915050919050565b6000610e2482604051806060016040528060298152602001612998602991396002611a869092919063ffffffff16565b9050919050565b606060098054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ec35780601f10610e9857610100808354040283529160200191610ec3565b820191906000526020600020905b815481529060010190602001808311610ea657829003601f168201915b5050505050905090565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610f54576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a81526020018061296e602a913960400191505060405180910390fd5b610f9b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611aa5565b9050919050565b600b5481565b600b543411610fb657600080fd5b610fc233600a54611aba565b600a60008154809291906001019190505550565b606060078054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561106e5780601f106110435761010080835404028352916020019161106e565b820191906000526020600020905b81548152906001019060200180831161105157829003601f168201915b5050505050905090565b611080611630565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611121576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f4552433732313a20617070726f766520746f2063616c6c65720000000000000081525060200191505060405180910390fd5b806005600061112e611630565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff166111db611630565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b61124161123b611630565b83611706565b611296576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526031815260200180612a886031913960400191505060405180910390fd5b6112a284848484611cae565b50505050565b60606112b382611613565b611308576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180612a38602f913960400191505060405180910390fd5b6060600860008481526020019081526020016000208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156113b15780601f10611386576101008083540402835291602001916113b1565b820191906000526020600020905b81548152906001019060200180831161139457829003601f168201915b5050505050905060606113c2610e2b565b90506000815114156113d8578192505050611574565b6000825111156114a95780826040516020018083805190602001908083835b6020831061141a57805182526020820191506020810190506020830392506113f7565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b6020831061146b5780518252602082019150602081019050602083039250611448565b6001836020036101000a0380198251168184511680821785525050505050509050019250505060405160208183030381529060405292505050611574565b806114b385611d20565b6040516020018083805190602001908083835b602083106114e957805182526020820191506020810190506020830392506114c6565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b6020831061153a5780518252602082019150602081019050602083039250611517565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052925050505b919050565b600a5481565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000611629826002611e5090919063ffffffff16565b9050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff166116ab83610df4565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60006116ff82600001611e6a565b9050919050565b600061171182611613565b611766576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c81526020018061290a602c913960400191505060405180910390fd5b600061177183610df4565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806117e057508373ffffffffffffffffffffffffffffffffffffffff166117c884610af0565b73ffffffffffffffffffffffffffffffffffffffff16145b806117f157506117f0818561157f565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff1661181a82610df4565b73ffffffffffffffffffffffffffffffffffffffff1614611886576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526029815260200180612a0f6029913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561190c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806128c06024913960400191505060405180910390fd5b611917838383611e7b565b611922600082611638565b61197381600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611e8090919063ffffffff16565b506119c581600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611e9a90919063ffffffff16565b506119dc81836002611eb49092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6000611a4c8360000183611ee9565b60001c905092915050565b600080600080611a6a8660000186611f6c565b915091508160001c8160001c8090509350935050509250929050565b6000611a99846000018460001b84612005565b60001c90509392505050565b6000611ab3826000016120fb565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611b5d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433732313a206d696e7420746f20746865207a65726f206164647265737381525060200191505060405180910390fd5b611b6681611613565b15611bd9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000081525060200191505060405180910390fd5b611be560008383611e7b565b611c3681600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611e9a90919063ffffffff16565b50611c4d81836002611eb49092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b611cb98484846117fa565b611cc58484848461210c565b611d1a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603281526020018061288e6032913960400191505060405180910390fd5b50505050565b60606000821415611d68576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611e4b565b600082905060005b60008214611d92578080600101915050600a8281611d8a57fe5b049150611d70565b6060816040519080825280601f01601f191660200182016040528015611dc75781602001600182028038833980820191505090505b50905060006001830390508593505b60008414611e4357600a8481611de857fe5b0660300160f81b82828060019003935081518110611e0257fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8481611e3b57fe5b049350611dd6565b819450505050505b919050565b6000611e62836000018360001b612351565b905092915050565b600081600001805490509050919050565b505050565b6000611e92836000018360001b612374565b905092915050565b6000611eac836000018360001b61245c565b905092915050565b6000611ee0846000018460001b8473ffffffffffffffffffffffffffffffffffffffff1660001b6124cc565b90509392505050565b600081836000018054905011611f4a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018061286c6022913960400191505060405180910390fd5b826000018281548110611f5957fe5b9060005260206000200154905092915050565b60008082846000018054905011611fce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806129c16022913960400191505060405180910390fd5b6000846000018481548110611fdf57fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b600080846001016000858152602001908152602001600020549050600081141583906120cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612091578082015181840152602081019050612076565b50505050905090810190601f1680156120be5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b508460000160018203815481106120df57fe5b9060005260206000209060020201600101549150509392505050565b600081600001805490509050919050565b600061212d8473ffffffffffffffffffffffffffffffffffffffff166125a8565b61213a5760019050612349565b60606122d063150b7a0260e01b61214f611630565b888787604051602401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156121ff5780820151818401526020810190506121e4565b50505050905090810190601f16801561222c5780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505060405180606001604052806032815260200161288e603291398773ffffffffffffffffffffffffffffffffffffffff166125bb9092919063ffffffff16565b905060008180602001905160208110156122e957600080fd5b8101908080519060200190929190505050905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614925050505b949350505050565b600080836001016000848152602001908152602001600020541415905092915050565b6000808360010160008481526020019081526020016000205490506000811461245057600060018203905060006001866000018054905003905060008660000182815481106123bf57fe5b90600052602060002001549050808760000184815481106123dc57fe5b906000526020600020018190555060018301876001016000838152602001908152602001600020819055508660000180548061241457fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050612456565b60009150505b92915050565b600061246883836125d3565b6124c15782600001829080600181540180825580915050600190039060005260206000200160009091909190915055826000018054905083600101600084815260200190815260200160002081905550600190506124c6565b600090505b92915050565b6000808460010160008581526020019081526020016000205490506000811415612573578460000160405180604001604052808681526020018581525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505084600001805490508560010160008681526020019081526020016000208190555060019150506125a1565b8285600001600183038154811061258657fe5b90600052602060002090600202016001018190555060009150505b9392505050565b600080823b905060008111915050919050565b60606125ca84846000856125f6565b90509392505050565b600080836001016000848152602001908152602001600020541415905092915050565b606082471015612651576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806128e46026913960400191505060405180910390fd5b61265a856125a8565b6126cc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000081525060200191505060405180910390fd5b600060608673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b6020831061271c57805182526020820191506020810190506020830392506126f9565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d806000811461277e576040519150601f19603f3d011682016040523d82523d6000602084013e612783565b606091505b509150915061279382828661279f565b92505050949350505050565b606083156127af57829050612864565b6000835111156127c25782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561282957808201518184015260208101905061280e565b50505050905090810190601f1680156128565780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b939250505056fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732313a207472616e7366657220746f20746865207a65726f2061646472657373416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c4552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e64734552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564a2646970667358221220ffdaf2b008928984c394dd84be5740aeee564c2f2c7a33e66d69ae54f669d5c464736f6c63430006020033",
  "sourceMap": "183:487:16:-:0;;;301:18;273:46;;326:187;8:9:-1;5:2;;;30:1;27;20:12;5:2;326:187:16;3577:369:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;768:40:0;435:10;787:20;;768:18;;;:40;;:::i;:::-;3659:5:3;3651;:13;;;;;;;;;;;;:::i;:::-;;3684:7;3674;:17;;;;;;;;;;;;:::i;:::-;;3779:40;2742:10;3798:20;;3779:18;;;:40;;:::i;:::-;3829:49;3074:10;3848:29;;3829:18;;;:49;;:::i;:::-;3888:51;3447:10;3907:31;;3888:18;;;:51;;:::i;:::-;3577:369;;391:31:16::1;397:10;409:12;;391:5;;;:31;;:::i;:::-;432:12;;:14;;;;;;;;;;;;;456:50;;;;;;;;;;;;;;;;;;:11;;;:50;;:::i;:::-;183:487:::0;;1507:198:0;1605:10;1590:25;;:11;:25;;;;;1582:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1694:4;1658:20;:33;1679:11;1658:33;;;;;;;;;;;;;;;;;;:40;;;;;;;;;;;;;;;;;;1507:198;:::o;12246:393:3:-;12339:1;12325:16;;:2;:16;;;;12317:61;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12397:16;12405:7;12397;;;:16;;:::i;:::-;12396:17;12388:58;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12457:45;12486:1;12490:2;12494:7;12457:20;;;:45;;:::i;:::-;12513:30;12535:7;12513:13;:17;12527:2;12513:17;;;;;;;;;;;;;;;:21;;;;;;:30;;;;:::i;:::-;;12554:29;12571:7;12580:2;12554:12;:16;;;;;;:29;;;;;:::i;:::-;;12624:7;12620:2;12599:33;;12616:1;12599:33;;;;;;;;;;;;12246:393;;:::o;14873:98::-;14956:8;14945;:19;;;;;;;;;;;;:::i;:::-;;14873:98;:::o;10383:125::-;10448:4;10471:30;10493:7;10471:12;:21;;;;;;:30;;;;:::i;:::-;10464:37;;10383:125;;;:::o;17010:93::-;;;;:::o;8068:129:11:-;8135:4;8158:32;8163:3;:10;;8183:5;8175:14;;8158:4;;;:32;;:::i;:::-;8151:39;;8068:129;;;;:::o;7027:183:10:-;7116:4;7139:64;7144:3;:10;;7164:3;7156:12;;7194:5;7178:23;;7170:32;;7139:4;;;:64;;:::i;:::-;7132:71;;7027:183;;;;;:::o;7588:149::-;7672:4;7695:35;7705:3;:10;;7725:3;7717:12;;7695:9;;;:35;;:::i;:::-;7688:42;;7588:149;;;;:::o;1640:404:11:-;1703:4;1724:21;1734:3;1739:5;1724:9;;;:21;;:::i;:::-;1719:319;;1761:3;:11;;1778:5;1761:23;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;1761:23:11;;;;;;;;;;;;;;;;;;;1941:3;:11;;:18;;;;1919:3;:12;;:19;1932:5;1919:19;;;;;;;;;;;:40;;;;1980:4;1973:11;;;;1719:319;2022:5;2015:12;;1640:404;;;;;:::o;1836:678:10:-;1912:4;2026:16;2045:3;:12;;:17;2058:3;2045:17;;;;;;;;;;;;2026:36;;2089:1;2077:8;:13;2073:435;;;2143:3;:12;;2161:38;;;;;;;;2178:3;2161:38;;;;2191:5;2161:38;;;2143:57;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;2143:57:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2355:3;:12;;:19;;;;2335:3;:12;;:17;2348:3;2335:17;;;;;;;;;;;:39;;;;2395:4;2388:11;;;;;2073:435;2466:5;2430:3;:12;;2454:1;2443:8;:12;2430:26;;;;;;;;;;;;;;;;;;:33;;:41;;;;2492:5;2485:12;;;1836:678;;;;;;:::o;4278:123::-;4349:4;4393:1;4372:3;:12;;:17;4385:3;4372:17;;;;;;;;;;;;:22;;4365:29;;4278:123;;;;:::o;3805:127:11:-;3878:4;3924:1;3901:3;:12;;:19;3914:5;3901:19;;;;;;;;;;;;:24;;3894:31;;3805:127;;;;:::o;183:487:16:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "183:487:16:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;965:148:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;965:148:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;965:148:0;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;4517:98:3;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4517:98:3;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;4517:98:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7222:217;;8:9:-1;5:2;;;30:1;27;20:12;5:2;7222:217:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7222:217:3;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;6766:395;;8:9:-1;5:2;;;30:1;27;20:12;5:2;6766:395:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;6766:395:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;6260:208;;8:9:-1;5:2;;;30:1;27;20:12;5:2;6260:208:3;;;:::i;:::-;;;;;;;;;;;;;;;;;;;8086:300;;8:9:-1;5:2;;;30:1;27;20:12;5:2;8086:300:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;8086:300:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;6029:160;;8:9:-1;5:2;;;30:1;27;20:12;5:2;6029:160:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;6029:160:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;8452:149;;8:9:-1;5:2;;;30:1;27;20:12;5:2;8452:149:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;8452:149:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;6540:169;;8:9:-1;5:2;;;30:1;27;20:12;5:2;6540:169:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;6540:169:3;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;4280:175;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4280:175:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4280:175:3;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;5855:95;;8:9:-1;5:2;;;30:1;27;20:12;5:2;5855:95:3;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;5855:95:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4005:218;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4005:218:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4005:218:3;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;273:46:16;;8:9:-1;5:2;;;30:1;27;20:12;5:2;273:46:16;;;:::i;:::-;;;;;;;;;;;;;;;;;;;519:149;;;:::i;:::-;;4679:102:3;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4679:102:3;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;4679:102:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7506:290;;8:9:-1;5:2;;;30:1;27;20:12;5:2;7506:290:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7506:290:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;8667:282;;8:9:-1;5:2;;;30:1;27;20:12;5:2;8667:282:3;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;8667:282:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;8667:282:3;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;8667:282:3;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;8667:282:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;8667:282:3;;;;;;;;;;;;;;;:::i;:::-;;4847:776;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4847:776:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4847:776:3;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;4847:776:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;240:27:16;;8:9:-1;5:2;;;30:1;27;20:12;5:2;240:27:16;;;:::i;:::-;;;;;;;;;;;;;;;;;;;7862:162:3;;8:9:-1;5:2;;;30:1;27;20:12;5:2;7862:162:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7862:162:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;965:148:0;1050:4;1073:20;:33;1094:11;1073:33;;;;;;;;;;;;;;;;;;;;;;;;;;;1066:40;;965:148;;;:::o;4517:98:3:-;4571:13;4603:5;4596:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4517:98;:::o;7222:217::-;7298:7;7325:16;7333:7;7325;:16::i;:::-;7317:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7408:15;:24;7424:7;7408:24;;;;;;;;;;;;;;;;;;;;;7401:31;;7222:217;;;:::o;6766:395::-;6846:13;6862:23;6877:7;6862:14;:23::i;:::-;6846:39;;6909:5;6903:11;;:2;:11;;;;6895:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6987:5;6971:21;;:12;:10;:12::i;:::-;:21;;;:69;;;;6996:44;7020:5;7027:12;:10;:12::i;:::-;6996:23;:44::i;:::-;6971:69;6963:159;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7133:21;7142:2;7146:7;7133:8;:21::i;:::-;6766:395;;;:::o;6260:208::-;6321:7;6440:21;:12;:19;:21::i;:::-;6433:28;;6260:208;:::o;8086:300::-;8245:41;8264:12;:10;:12::i;:::-;8278:7;8245:18;:41::i;:::-;8237:103;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8351:28;8361:4;8367:2;8371:7;8351:9;:28::i;:::-;8086:300;;;:::o;6029:160::-;6126:7;6152:30;6176:5;6152:13;:20;6166:5;6152:20;;;;;;;;;;;;;;;:23;;:30;;;;:::i;:::-;6145:37;;6029:160;;;;:::o;8452:149::-;8555:39;8572:4;8578:2;8582:7;8555:39;;;;;;;;;;;;:16;:39::i;:::-;8452:149;;;:::o;6540:169::-;6615:7;6635:15;6656:22;6672:5;6656:12;:15;;:22;;;;:::i;:::-;6634:44;;;6695:7;6688:14;;;6540:169;;;:::o;4280:175::-;4352:7;4378:70;4395:7;4378:70;;;;;;;;;;;;;;;;;:12;:16;;:70;;;;;:::i;:::-;4371:77;;4280:175;;;:::o;5855:95::-;5903:13;5935:8;5928:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5855:95;:::o;4005:218::-;4077:7;4121:1;4104:19;;:5;:19;;;;4096:74;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4187:29;:13;:20;4201:5;4187:20;;;;;;;;;;;;;;;:27;:29::i;:::-;4180:36;;4005:218;;;:::o;273:46:16:-;;;;:::o;519:149::-;585:10;;573:9;:22;565:31;;;;;;606;612:10;624:12;;606:5;:31::i;:::-;647:12;;:14;;;;;;;;;;;;;519:149::o;4679:102:3:-;4735:13;4767:7;4760:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4679:102;:::o;7506:290::-;7620:12;:10;:12::i;:::-;7608:24;;:8;:24;;;;7600:62;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7718:8;7673:18;:32;7692:12;:10;:12::i;:::-;7673:32;;;;;;;;;;;;;;;:42;7706:8;7673:42;;;;;;;;;;;;;;;;:53;;;;;;;;;;;;;;;;;;7770:8;7741:48;;7756:12;:10;:12::i;:::-;7741:48;;;7780:8;7741:48;;;;;;;;;;;;;;;;;;;;;;7506:290;;:::o;8667:282::-;8798:41;8817:12;:10;:12::i;:::-;8831:7;8798:18;:41::i;:::-;8790:103;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8903:39;8917:4;8923:2;8927:7;8936:5;8903:13;:39::i;:::-;8667:282;;;;:::o;4847:776::-;4920:13;4953:16;4961:7;4953;:16::i;:::-;4945:76;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5032:23;5058:10;:19;5069:7;5058:19;;;;;;;;;;;5032:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5087:18;5108:9;:7;:9::i;:::-;5087:30;;5212:1;5196:4;5190:18;:23;5186:70;;;5236:9;5229:16;;;;;;5186:70;5384:1;5364:9;5358:23;:27;5354:106;;;5432:4;5438:9;5415:33;;;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;5415:33:3;;;;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;5415:33:3;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;5415:33:3;;;5401:48;;;;;;5354:106;5590:4;5596:18;:7;:16;:18::i;:::-;5573:42;;;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;5573:42:3;;;;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;5573:42:3;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;5573:42:3;;;5559:57;;;;4847:776;;;;:::o;240:27:16:-;;;;:::o;7862:162:3:-;7959:4;7982:18;:25;8001:5;7982:25;;;;;;;;;;;;;;;:35;8008:8;7982:35;;;;;;;;;;;;;;;;;;;;;;;;;7975:42;;7862:162;;;;:::o;10383:125::-;10448:4;10471:30;10493:7;10471:12;:21;;:30;;;;:::i;:::-;10464:37;;10383:125;;;:::o;598:104:9:-;651:15;685:10;678:17;;598:104;:::o;16225:189:3:-;16326:2;16299:15;:24;16315:7;16299:24;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;16381:7;16377:2;16343:46;;16352:23;16367:7;16352:14;:23::i;:::-;16343:46;;;;;;;;;;;;16225:189;;:::o;7820:121:10:-;7889:7;7915:19;7923:3;:10;;7915:7;:19::i;:::-;7908:26;;7820:121;;;:::o;10666:351:3:-;10759:4;10783:16;10791:7;10783;:16::i;:::-;10775:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10858:13;10874:23;10889:7;10874:14;:23::i;:::-;10858:39;;10926:5;10915:16;;:7;:16;;;:51;;;;10959:7;10935:31;;:20;10947:7;10935:11;:20::i;:::-;:31;;;10915:51;:94;;;;10970:39;10994:5;11001:7;10970:23;:39::i;:::-;10915:94;10907:103;;;10666:351;;;;:::o;13707:584::-;13831:4;13804:31;;:23;13819:7;13804:14;:23::i;:::-;:31;;;13796:85;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13931:1;13917:16;;:2;:16;;;;13909:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13985:39;14006:4;14012:2;14016:7;13985:20;:39::i;:::-;14086:29;14103:1;14107:7;14086:8;:29::i;:::-;14126:35;14153:7;14126:13;:19;14140:4;14126:19;;;;;;;;;;;;;;;:26;;:35;;;;:::i;:::-;;14171:30;14193:7;14171:13;:17;14185:2;14171:17;;;;;;;;;;;;;;;:21;;:30;;;;:::i;:::-;;14212:29;14229:7;14238:2;14212:12;:16;;:29;;;;;:::i;:::-;;14276:7;14272:2;14257:27;;14266:4;14257:27;;;;;;;;;;;;13707:584;;;:::o;9250:135:11:-;9321:7;9355:22;9359:3;:10;;9371:5;9355:3;:22::i;:::-;9347:31;;9340:38;;9250:135;;;;:::o;8269:233:10:-;8349:7;8358;8378:11;8391:13;8408:22;8412:3;:10;;8424:5;8408:3;:22::i;:::-;8377:53;;;;8456:3;8448:12;;8486:5;8478:14;;8440:55;;;;;;;;;8269:233;;;;;:::o;9522:211::-;9629:7;9679:44;9684:3;:10;;9704:3;9696:12;;9710;9679:4;:44::i;:::-;9671:53;;9648:78;;9522:211;;;;;:::o;8806:112:11:-;8866:7;8892:19;8900:3;:10;;8892:7;:19::i;:::-;8885:26;;8806:112;;;:::o;12246:393:3:-;12339:1;12325:16;;:2;:16;;;;12317:61;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12397:16;12405:7;12397;:16::i;:::-;12396:17;12388:58;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12457:45;12486:1;12490:2;12494:7;12457:20;:45::i;:::-;12513:30;12535:7;12513:13;:17;12527:2;12513:17;;;;;;;;;;;;;;;:21;;:30;;;;:::i;:::-;;12554:29;12571:7;12580:2;12554:12;:16;;:29;;;;;:::i;:::-;;12624:7;12620:2;12599:33;;12616:1;12599:33;;;;;;;;;;;;12246:393;;:::o;9811:269::-;9924:28;9934:4;9940:2;9944:7;9924:9;:28::i;:::-;9970:48;9993:4;9999:2;10003:7;10012:5;9970:22;:48::i;:::-;9962:111;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9811:269;;;;:::o;210:725:12:-;266:13;492:1;483:5;:10;479:51;;;509:10;;;;;;;;;;;;;;;;;;;;;479:51;539:12;554:5;539:20;;569:14;593:75;608:1;600:4;:9;593:75;;625:8;;;;;;;655:2;647:10;;;;;;;;;593:75;;;677:19;709:6;699:17;;;;;;;;;;;;;;;;;;;;;;;;;29:1:-1;21:6;17:14;116:4;104:10;96:6;87:34;147:4;139:6;135:17;125:27;;0:156;699:17:12;;;;677:39;;726:13;751:1;742:6;:10;726:26;;769:5;762:12;;784:114;799:1;791:4;:9;784:114;;859:2;852:4;:9;;;;;;847:2;:14;834:29;;816:6;823:7;;;;;;;816:15;;;;;;;;;;;:47;;;;;;;;;;;885:2;877:10;;;;;;;;;784:114;;;921:6;907:21;;;;;;210:725;;;;:::o;7588:149:10:-;7672:4;7695:35;7705:3;:10;;7725:3;7717:12;;7695:9;:35::i;:::-;7688:42;;7588:149;;;;:::o;4491:108::-;4547:7;4573:3;:12;;:19;;;;4566:26;;4491:108;;;:::o;17010:93:3:-;;;;:::o;8365:135:11:-;8435:4;8458:35;8466:3;:10;;8486:5;8478:14;;8458:7;:35::i;:::-;8451:42;;8365:135;;;;:::o;8068:129::-;8135:4;8158:32;8163:3;:10;;8183:5;8175:14;;8158:4;:32::i;:::-;8151:39;;8068:129;;;;:::o;7027:183:10:-;7116:4;7139:64;7144:3;:10;;7164:3;7156:12;;7194:5;7178:23;;7170:32;;7139:4;:64::i;:::-;7132:71;;7027:183;;;;;:::o;4452:201:11:-;4519:7;4567:5;4546:3;:11;;:18;;;;:26;4538:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4628:3;:11;;4640:5;4628:18;;;;;;;;;;;;;;;;4621:25;;4452:201;;;;:::o;4942:274:10:-;5009:7;5018;5067:5;5045:3;:12;;:19;;;;:27;5037:74;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5122:22;5147:3;:12;;5160:5;5147:19;;;;;;;;;;;;;;;;;;5122:44;;5184:5;:10;;;5196:5;:12;;;5176:33;;;;;4942:274;;;;;:::o;6403:315::-;6497:7;6516:16;6535:3;:12;;:17;6548:3;6535:17;;;;;;;;;;;;6516:36;;6582:1;6570:8;:13;;6585:12;6562:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;6562:36:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6651:3;:12;;6675:1;6664:8;:12;6651:26;;;;;;;;;;;;;;;;;;:33;;;6644:40;;;6403:315;;;;;:::o;4013:107:11:-;4069:7;4095:3;:11;;:18;;;;4088:25;;4013:107;;;:::o;15524:589:3:-;15644:4;15669:15;:2;:13;;;:15::i;:::-;15664:58;;15707:4;15700:11;;;;15664:58;15731:23;15757:246;15809:45;;;15868:12;:10;:12::i;:::-;15894:4;15912:7;15933:5;15773:175;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;15773:175:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;15773:175:3;;;;;;;38:4:-1;29:7;25:18;67:10;61:17;96:58;199:8;192:4;186;182:15;179:29;167:10;160:49;0:215;;;15773:175:3;15757:246;;;;;;;;;;;;;;;;;:2;:15;;;;:246;;;;;:::i;:::-;15731:272;;16013:13;16040:10;16029:32;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;16029:32:3;;;;;;;;;;;;;;;;16013:48;;1078:10;16089:16;;16079:26;;;:6;:26;;;;16071:35;;;;15524:589;;;;;;;:::o;4278:123:10:-;4349:4;4393:1;4372:3;:12;;:17;4385:3;4372:17;;;;;;;;;;;;:22;;4365:29;;4278:123;;;;:::o;2212:1512:11:-;2278:4;2394:18;2415:3;:12;;:19;2428:5;2415:19;;;;;;;;;;;;2394:40;;2463:1;2449:10;:15;2445:1273;;2806:21;2843:1;2830:10;:14;2806:38;;2858:17;2899:1;2878:3;:11;;:18;;;;:22;2858:42;;3140:17;3160:3;:11;;3172:9;3160:22;;;;;;;;;;;;;;;;3140:42;;3303:9;3274:3;:11;;3286:13;3274:26;;;;;;;;;;;;;;;:38;;;;3420:1;3404:13;:17;3378:3;:12;;:23;3391:9;3378:23;;;;;;;;;;;:43;;;;3527:3;:11;;:17;;;;;;;;;;;;;;;;;;;;;;;;3619:3;:12;;:19;3632:5;3619:19;;;;;;;;;;;3612:26;;;3660:4;3653:11;;;;;;;;2445:1273;3702:5;3695:12;;;2212:1512;;;;;:::o;1640:404::-;1703:4;1724:21;1734:3;1739:5;1724:9;:21::i;:::-;1719:319;;1761:3;:11;;1778:5;1761:23;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;1761:23:11;;;;;;;;;;;;;;;;;;;1941:3;:11;;:18;;;;1919:3;:12;;:19;1932:5;1919:19;;;;;;;;;;;:40;;;;1980:4;1973:11;;;;1719:319;2022:5;2015:12;;1640:404;;;;;:::o;1836:678:10:-;1912:4;2026:16;2045:3;:12;;:17;2058:3;2045:17;;;;;;;;;;;;2026:36;;2089:1;2077:8;:13;2073:435;;;2143:3;:12;;2161:38;;;;;;;;2178:3;2161:38;;;;2191:5;2161:38;;;2143:57;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;2143:57:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2355:3;:12;;:19;;;;2335:3;:12;;:17;2348:3;2335:17;;;;;;;;;;;:39;;;;2395:4;2388:11;;;;;2073:435;2466:5;2430:3;:12;;2454:1;2443:8;:12;2430:26;;;;;;;;;;;;;;;;;;:33;;:41;;;;2492:5;2485:12;;;1836:678;;;;;;:::o;726:413:8:-;786:4;989:12;1098:7;1086:20;1078:28;;1131:1;1124:4;:8;1117:15;;;726:413;;;:::o;3581:193::-;3684:12;3715:52;3737:6;3745:4;3751:1;3754:12;3715:21;:52::i;:::-;3708:59;;3581:193;;;;;:::o;3805:127:11:-;3878:4;3924:1;3901:3;:12;;:19;3914:5;3901:19;;;;;;;;;;;;:24;;3894:31;;3805:127;;;;:::o;4608:523:8:-;4735:12;4792:5;4767:21;:30;;4759:81;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4858:18;4869:6;4858:10;:18::i;:::-;4850:60;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4981:12;4995:23;5022:6;:11;;5042:5;5050:4;5022:33;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;5022:33:8;;;;;;;;;;;;;;;;;;;;;;;;;12:1:-1;19;14:27;;;;67:4;61:11;56:16;;134:4;130:9;123:4;105:16;101:27;97:43;94:1;90:51;84:4;77:65;157:16;154:1;147:27;211:16;208:1;201:4;198:1;194:12;179:49;5:228;;14:27;32:4;27:9;;5:228;;4980:75:8;;;;5072:52;5090:7;5099:10;5111:12;5072:17;:52::i;:::-;5065:59;;;;4608:523;;;;;;:::o;7091:725::-;7206:12;7234:7;7230:580;;;7264:10;7257:17;;;;7230:580;7395:1;7375:10;:17;:21;7371:429;;;7633:10;7627:17;7693:15;7680:10;7676:2;7672:19;7665:44;7582:145;7772:12;7765:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;7765:20:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7091:725;;;;;;:::o",
  "source": "// SPDX-License-Identifier: MIT\npragma solidity ^0.6.2;\n\nimport \"@openzeppelin/contracts/token/ERC721/ERC721.sol\";\nimport \"@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol\";\n\ncontract FakeNefturians is IERC721Metadata, ERC721 {\n    uint256 public tokenCounter;\n    uint256 public tokenPrice = 100000000000000000;\n\n    constructor() public ERC721(\"Fake Nefturians\", \"NFTR\") {\n        _mint(msg.sender, tokenCounter);\n        tokenCounter++;\n        _setBaseURI(\"https://api.nefturians.io/metadata/\");\n    }\n\n    function buyAToken() public payable {\n        require(msg.value > tokenPrice);\n        _mint(msg.sender, tokenCounter);\n        tokenCounter++;\n    }\n}\n",
  "sourcePath": "/home/aymeric/Desktop/erc721-ux/contracts/FakeNefturians.sol",
  "ast": {
    "absolutePath": "project:/contracts/FakeNefturians.sol",
    "exportedSymbols": {
      "FakeNefturians": [
        3353
      ]
    },
    "id": 3354,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 3300,
        "literals": [
          "solidity",
          "^",
          "0.6",
          ".2"
        ],
        "nodeType": "PragmaDirective",
        "src": "32:23:16"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        "file": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        "id": 3301,
        "nodeType": "ImportDirective",
        "scope": 3354,
        "sourceUnit": 1317,
        "src": "57:57:16",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol",
        "file": "@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol",
        "id": 3302,
        "nodeType": "ImportDirective",
        "scope": 3354,
        "sourceUnit": 1470,
        "src": "115:66:16",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 3303,
              "name": "IERC721Metadata",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1469,
              "src": "210:15:16",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC721Metadata_$1469",
                "typeString": "contract IERC721Metadata"
              }
            },
            "id": 3304,
            "nodeType": "InheritanceSpecifier",
            "src": "210:15:16"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 3305,
              "name": "ERC721",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1316,
              "src": "227:6:16",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721_$1316",
                "typeString": "contract ERC721"
              }
            },
            "id": 3306,
            "nodeType": "InheritanceSpecifier",
            "src": "227:6:16"
          }
        ],
        "contractDependencies": [
          52,
          62,
          1316,
          1419,
          1446,
          1469,
          1793
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 3353,
        "linearizedBaseContracts": [
          3353,
          1316,
          1446,
          1469,
          1419,
          52,
          62,
          1793
        ],
        "name": "FakeNefturians",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "functionSelector": "d082e381",
            "id": 3308,
            "name": "tokenCounter",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 3353,
            "src": "240:27:16",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 3307,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "240:7:16",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "7ff9b596",
            "id": 3311,
            "name": "tokenPrice",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 3353,
            "src": "273:46:16",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 3309,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "273:7:16",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "313030303030303030303030303030303030",
              "id": 3310,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "301:18:16",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_100000000000000000_by_1",
                "typeString": "int_const 100000000000000000"
              },
              "value": "100000000000000000"
            },
            "visibility": "public"
          },
          {
            "body": {
              "id": 3331,
              "nodeType": "Block",
              "src": "381:132:16",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 3319,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "397:3:16",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 3320,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "397:10:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3321,
                        "name": "tokenCounter",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3308,
                        "src": "409:12:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 3318,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1055,
                      "src": "391:5:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 3322,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "391:31:16",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3323,
                  "nodeType": "ExpressionStatement",
                  "src": "391:31:16"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3325,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "432:14:16",
                    "subExpression": {
                      "argumentTypes": null,
                      "id": 3324,
                      "name": "tokenCounter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3308,
                      "src": "432:12:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 3326,
                  "nodeType": "ExpressionStatement",
                  "src": "432:14:16"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "68747470733a2f2f6170692e6e656674757269616e732e696f2f6d657461646174612f",
                        "id": 3328,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "468:37:16",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_02b02e9674aa175290e3d27c73085ccd60057241bc577f81661fd56ae5cff832",
                          "typeString": "literal_string \"https://api.nefturians.io/metadata/\""
                        },
                        "value": "https://api.nefturians.io/metadata/"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_02b02e9674aa175290e3d27c73085ccd60057241bc577f81661fd56ae5cff832",
                          "typeString": "literal_string \"https://api.nefturians.io/metadata/\""
                        }
                      ],
                      "id": 3327,
                      "name": "_setBaseURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1225,
                      "src": "456:11:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory)"
                      }
                    },
                    "id": 3329,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "456:50:16",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3330,
                  "nodeType": "ExpressionStatement",
                  "src": "456:50:16"
                }
              ]
            },
            "documentation": null,
            "id": 3332,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "hexValue": "46616b65204e656674757269616e73",
                    "id": 3314,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "354:17:16",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_326fabbb4dc152f855a5a039e89e0a91db113b95185ed5b99b063e72ecf514da",
                      "typeString": "literal_string \"Fake Nefturians\""
                    },
                    "value": "Fake Nefturians"
                  },
                  {
                    "argumentTypes": null,
                    "hexValue": "4e465452",
                    "id": 3315,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "373:6:16",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_2f29bcfeef818b8da7473bbb6223914bf04be9ace0094e2aba30b49987907af3",
                      "typeString": "literal_string \"NFTR\""
                    },
                    "value": "NFTR"
                  }
                ],
                "id": 3316,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 3313,
                  "name": "ERC721",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1316,
                  "src": "347:6:16",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC721_$1316_$",
                    "typeString": "type(contract ERC721)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "347:33:16"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 3312,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "337:2:16"
            },
            "returnParameters": {
              "id": 3317,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "381:0:16"
            },
            "scope": 3353,
            "src": "326:187:16",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3351,
              "nodeType": "Block",
              "src": "555:113:16",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 3339,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 3336,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "573:3:16",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 3337,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "573:9:16",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 3338,
                          "name": "tokenPrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3311,
                          "src": "585:10:16",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "573:22:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 3335,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "565:7:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3340,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "565:31:16",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3341,
                  "nodeType": "ExpressionStatement",
                  "src": "565:31:16"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 3343,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "612:3:16",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 3344,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "612:10:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3345,
                        "name": "tokenCounter",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3308,
                        "src": "624:12:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 3342,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1055,
                      "src": "606:5:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 3346,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "606:31:16",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3347,
                  "nodeType": "ExpressionStatement",
                  "src": "606:31:16"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3349,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "647:14:16",
                    "subExpression": {
                      "argumentTypes": null,
                      "id": 3348,
                      "name": "tokenCounter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3308,
                      "src": "647:12:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 3350,
                  "nodeType": "ExpressionStatement",
                  "src": "647:14:16"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "83d0bfa5",
            "id": 3352,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "buyAToken",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 3333,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "537:2:16"
            },
            "returnParameters": {
              "id": 3334,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "555:0:16"
            },
            "scope": 3353,
            "src": "519:149:16",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 3354,
        "src": "183:487:16"
      }
    ],
    "src": "32:639:16"
  },
  "legacyAST": {
    "attributes": {
      "absolutePath": "project:/contracts/FakeNefturians.sol",
      "exportedSymbols": {
        "FakeNefturians": [
          3353
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "^",
            "0.6",
            ".2"
          ]
        },
        "id": 3300,
        "name": "PragmaDirective",
        "src": "32:23:16"
      },
      {
        "attributes": {
          "SourceUnit": 1317,
          "absolutePath": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
          "file": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
          "scope": 3354,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 3301,
        "name": "ImportDirective",
        "src": "57:57:16"
      },
      {
        "attributes": {
          "SourceUnit": 1470,
          "absolutePath": "@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol",
          "file": "@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol",
          "scope": 3354,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 3302,
        "name": "ImportDirective",
        "src": "115:66:16"
      },
      {
        "attributes": {
          "abstract": false,
          "contractDependencies": [
            52,
            62,
            1316,
            1419,
            1446,
            1469,
            1793
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            3353,
            1316,
            1446,
            1469,
            1419,
            52,
            62,
            1793
          ],
          "name": "FakeNefturians",
          "scope": 3354
        },
        "children": [
          {
            "attributes": {
              "arguments": null
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "IERC721Metadata",
                  "referencedDeclaration": 1469,
                  "type": "contract IERC721Metadata"
                },
                "id": 3303,
                "name": "UserDefinedTypeName",
                "src": "210:15:16"
              }
            ],
            "id": 3304,
            "name": "InheritanceSpecifier",
            "src": "210:15:16"
          },
          {
            "attributes": {
              "arguments": null
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "ERC721",
                  "referencedDeclaration": 1316,
                  "type": "contract ERC721"
                },
                "id": 3305,
                "name": "UserDefinedTypeName",
                "src": "227:6:16"
              }
            ],
            "id": 3306,
            "name": "InheritanceSpecifier",
            "src": "227:6:16"
          },
          {
            "attributes": {
              "constant": false,
              "functionSelector": "d082e381",
              "name": "tokenCounter",
              "overrides": null,
              "scope": 3353,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint256",
                  "type": "uint256"
                },
                "id": 3307,
                "name": "ElementaryTypeName",
                "src": "240:7:16"
              }
            ],
            "id": 3308,
            "name": "VariableDeclaration",
            "src": "240:27:16"
          },
          {
            "attributes": {
              "constant": false,
              "functionSelector": "7ff9b596",
              "name": "tokenPrice",
              "overrides": null,
              "scope": 3353,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint256",
                  "type": "uint256"
                },
                "id": 3309,
                "name": "ElementaryTypeName",
                "src": "273:7:16"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "hexvalue": "313030303030303030303030303030303030",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "subdenomination": null,
                  "token": "number",
                  "type": "int_const 100000000000000000",
                  "value": "100000000000000000"
                },
                "id": 3310,
                "name": "Literal",
                "src": "301:18:16"
              }
            ],
            "id": 3311,
            "name": "VariableDeclaration",
            "src": "273:46:16"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": true,
              "kind": "constructor",
              "name": "",
              "overrides": null,
              "scope": 3353,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 3312,
                "name": "ParameterList",
                "src": "337:2:16"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 3317,
                "name": "ParameterList",
                "src": "381:0:16"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 1316,
                      "type": "type(contract ERC721)",
                      "value": "ERC721"
                    },
                    "id": 3313,
                    "name": "Identifier",
                    "src": "347:6:16"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "hexvalue": "46616b65204e656674757269616e73",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "subdenomination": null,
                      "token": "string",
                      "type": "literal_string \"Fake Nefturians\"",
                      "value": "Fake Nefturians"
                    },
                    "id": 3314,
                    "name": "Literal",
                    "src": "354:17:16"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "hexvalue": "4e465452",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "subdenomination": null,
                      "token": "string",
                      "type": "literal_string \"NFTR\"",
                      "value": "NFTR"
                    },
                    "id": 3315,
                    "name": "Literal",
                    "src": "373:6:16"
                  }
                ],
                "id": 3316,
                "name": "ModifierInvocation",
                "src": "347:33:16"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1055,
                              "type": "function (address,uint256)",
                              "value": "_mint"
                            },
                            "id": 3318,
                            "name": "Identifier",
                            "src": "391:5:16"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address payable"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": -15,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 3319,
                                "name": "Identifier",
                                "src": "397:3:16"
                              }
                            ],
                            "id": 3320,
                            "name": "MemberAccess",
                            "src": "397:10:16"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3308,
                              "type": "uint256",
                              "value": "tokenCounter"
                            },
                            "id": 3321,
                            "name": "Identifier",
                            "src": "409:12:16"
                          }
                        ],
                        "id": 3322,
                        "name": "FunctionCall",
                        "src": "391:31:16"
                      }
                    ],
                    "id": 3323,
                    "name": "ExpressionStatement",
                    "src": "391:31:16"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "++",
                          "prefix": false,
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3308,
                              "type": "uint256",
                              "value": "tokenCounter"
                            },
                            "id": 3324,
                            "name": "Identifier",
                            "src": "432:12:16"
                          }
                        ],
                        "id": 3325,
                        "name": "UnaryOperation",
                        "src": "432:14:16"
                      }
                    ],
                    "id": 3326,
                    "name": "ExpressionStatement",
                    "src": "432:14:16"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_02b02e9674aa175290e3d27c73085ccd60057241bc577f81661fd56ae5cff832",
                                  "typeString": "literal_string \"https://api.nefturians.io/metadata/\""
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1225,
                              "type": "function (string memory)",
                              "value": "_setBaseURI"
                            },
                            "id": 3327,
                            "name": "Identifier",
                            "src": "456:11:16"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "68747470733a2f2f6170692e6e656674757269616e732e696f2f6d657461646174612f",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "string",
                              "type": "literal_string \"https://api.nefturians.io/metadata/\"",
                              "value": "https://api.nefturians.io/metadata/"
                            },
                            "id": 3328,
                            "name": "Literal",
                            "src": "468:37:16"
                          }
                        ],
                        "id": 3329,
                        "name": "FunctionCall",
                        "src": "456:50:16"
                      }
                    ],
                    "id": 3330,
                    "name": "ExpressionStatement",
                    "src": "456:50:16"
                  }
                ],
                "id": 3331,
                "name": "Block",
                "src": "381:132:16"
              }
            ],
            "id": 3332,
            "name": "FunctionDefinition",
            "src": "326:187:16"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "83d0bfa5",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "buyAToken",
              "overrides": null,
              "scope": 3353,
              "stateMutability": "payable",
              "virtual": false,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 3333,
                "name": "ParameterList",
                "src": "537:2:16"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 3334,
                "name": "ParameterList",
                "src": "555:0:16"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                -18,
                                -18
                              ],
                              "referencedDeclaration": -18,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 3335,
                            "name": "Identifier",
                            "src": "565:7:16"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "value",
                                  "referencedDeclaration": null,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": -15,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 3336,
                                    "name": "Identifier",
                                    "src": "573:3:16"
                                  }
                                ],
                                "id": 3337,
                                "name": "MemberAccess",
                                "src": "573:9:16"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3311,
                                  "type": "uint256",
                                  "value": "tokenPrice"
                                },
                                "id": 3338,
                                "name": "Identifier",
                                "src": "585:10:16"
                              }
                            ],
                            "id": 3339,
                            "name": "BinaryOperation",
                            "src": "573:22:16"
                          }
                        ],
                        "id": 3340,
                        "name": "FunctionCall",
                        "src": "565:31:16"
                      }
                    ],
                    "id": 3341,
                    "name": "ExpressionStatement",
                    "src": "565:31:16"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1055,
                              "type": "function (address,uint256)",
                              "value": "_mint"
                            },
                            "id": 3342,
                            "name": "Identifier",
                            "src": "606:5:16"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address payable"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": -15,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 3343,
                                "name": "Identifier",
                                "src": "612:3:16"
                              }
                            ],
                            "id": 3344,
                            "name": "MemberAccess",
                            "src": "612:10:16"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3308,
                              "type": "uint256",
                              "value": "tokenCounter"
                            },
                            "id": 3345,
                            "name": "Identifier",
                            "src": "624:12:16"
                          }
                        ],
                        "id": 3346,
                        "name": "FunctionCall",
                        "src": "606:31:16"
                      }
                    ],
                    "id": 3347,
                    "name": "ExpressionStatement",
                    "src": "606:31:16"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "++",
                          "prefix": false,
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3308,
                              "type": "uint256",
                              "value": "tokenCounter"
                            },
                            "id": 3348,
                            "name": "Identifier",
                            "src": "647:12:16"
                          }
                        ],
                        "id": 3349,
                        "name": "UnaryOperation",
                        "src": "647:14:16"
                      }
                    ],
                    "id": 3350,
                    "name": "ExpressionStatement",
                    "src": "647:14:16"
                  }
                ],
                "id": 3351,
                "name": "Block",
                "src": "555:113:16"
              }
            ],
            "id": 3352,
            "name": "FunctionDefinition",
            "src": "519:149:16"
          }
        ],
        "id": 3353,
        "name": "ContractDefinition",
        "src": "183:487:16"
      }
    ],
    "id": 3354,
    "name": "SourceUnit",
    "src": "32:639:16"
  },
  "compiler": {
    "name": "solc",
    "version": "0.6.2+commit.bacdbe57.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
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
              "name": "approved",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31": {
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
              "name": "operator",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
            }
          ],
          "name": "ApprovalForAll",
          "type": "event"
        },
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
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
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        }
      },
      "links": {},
      "address": "0x04A38Abb115B294bB31272c61B2CdF997058FbC4",
      "transactionHash": "0xdde2d3b99ad764f380e7094c96f552107e58dcda515ae7d95a91c9ec444d9a2b"
    },
    "11155111": {
      "events": {},
      "links": {},
      "address": "0x9bAADf70BD9369F54901CF3Ee1b3c63b60F4F0ED",
      "transactionHash": "0xed98815924a205a84cd8e815527c8059bd7965fd501003679d6b9d358afcd4a8"
    }
  },
  "schemaVersion": "3.4.11",
  "updatedAt": "2022-11-25T08:10:38.372Z",
  "networkType": "ethereum",
  "devdoc": {
    "methods": {
      "approve(address,uint256)": {
        "details": "See {IERC721-approve}."
      },
      "balanceOf(address)": {
        "details": "See {IERC721-balanceOf}."
      },
      "baseURI()": {
        "details": "Returns the base URI set via {_setBaseURI}. This will be automatically added as a prefix in {tokenURI} to each token's URI, or to the token ID if no specific URI is set for that token ID."
      },
      "getApproved(uint256)": {
        "details": "See {IERC721-getApproved}."
      },
      "isApprovedForAll(address,address)": {
        "details": "See {IERC721-isApprovedForAll}."
      },
      "name()": {
        "details": "See {IERC721Metadata-name}."
      },
      "ownerOf(uint256)": {
        "details": "See {IERC721-ownerOf}."
      },
      "safeTransferFrom(address,address,uint256)": {
        "details": "See {IERC721-safeTransferFrom}."
      },
      "safeTransferFrom(address,address,uint256,bytes)": {
        "details": "See {IERC721-safeTransferFrom}."
      },
      "setApprovalForAll(address,bool)": {
        "details": "See {IERC721-setApprovalForAll}."
      },
      "supportsInterface(bytes4)": {
        "details": "See {IERC165-supportsInterface}.     * Time complexity O(1), guaranteed to always use less than 30 000 gas."
      },
      "symbol()": {
        "details": "See {IERC721Metadata-symbol}."
      },
      "tokenByIndex(uint256)": {
        "details": "See {IERC721Enumerable-tokenByIndex}."
      },
      "tokenOfOwnerByIndex(address,uint256)": {
        "details": "See {IERC721Enumerable-tokenOfOwnerByIndex}."
      },
      "tokenURI(uint256)": {
        "details": "See {IERC721Metadata-tokenURI}."
      },
      "totalSupply()": {
        "details": "See {IERC721Enumerable-totalSupply}."
      },
      "transferFrom(address,address,uint256)": {
        "details": "See {IERC721-transferFrom}."
      }
    }
  },
  "userdoc": {
    "methods": {}
  }
}