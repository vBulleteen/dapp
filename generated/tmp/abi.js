web3.setProvider(new web3.providers.HttpProvider('http://localhost:8101'));web3.eth.defaultAccount = web3.eth.accounts[0];KeystoreAbi = [{"constant":false,"inputs":[{"name":"data","type":"bytes"}],"name":"setKey","outputs":[],"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"addr","type":"address"},{"indexed":false,"name":"data","type":"bytes"}],"name":"Key","type":"event"}];KeystoreContract = web3.eth.contract(KeystoreAbi);Keystore = KeystoreContract.at('0x02e7b6b318dae5e7ff2f4ef1c326ba32b76a5306');contractDB = {"Keystore":{"args":[],"types":["file"],"gasPrice":50000000000,"gasLimit":3141592,"compiled":{"code":"6060604052610135806100136000396000f30060606040526000357c010000000000000000000000000000000000000000000000000000000090048063218ebfa31461003957610037565b005b6100896004803590602001906004018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050905061008b565b005b3273ffffffffffffffffffffffffffffffffffffffff167f7af854acd24d0aeaeb076324cf5068408d33457397919ff329b9dc1a1cee356d8260405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156101245780820380516001836020036101000a031916815260200191505b509250505060405180910390a25b5056","info":{"abiDefinition":[{"constant":false,"inputs":[{"name":"data","type":"bytes"}],"name":"setKey","outputs":[],"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"addr","type":"address"},{"indexed":false,"name":"data","type":"bytes"}],"name":"Key","type":"event"}]}}},"Market":{"args":[],"types":["file"],"gasPrice":50000000000,"gasLimit":3141592,"compiled":{"code":"60606040526040516102d83803806102d88339016040526060805160600190602001505b32600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055507f36fa7d5e62b9c09ee038caf36fc8b7b32f3fe85e6a80e98ff616f713831510d78160405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f16801560cf5780820380516001836020036101000a031916815260200191505b509250505060405180910390a15b506101eb806100ed6000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900480632808241a146100445780636e9960c31461009657610042565b005b6100946004803590602001906004018035906020019191908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505090506100fc565b005b6100a16004506100cd565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6000600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506100f9565b90565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff16141515610158576101e8565b7f36fa7d5e62b9c09ee038caf36fc8b7b32f3fe85e6a80e98ff616f713831510d78160405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156101da5780820380516001836020036101000a031916815260200191505b509250505060405180910390a15b5056","info":{"abiDefinition":[{"constant":false,"inputs":[{"name":"meta","type":"bytes"}],"name":"setMeta","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"getAdmin","outputs":[{"name":"","type":"address"}],"type":"function"},{"inputs":[{"name":"meta","type":"bytes"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"meta","type":"bytes"}],"name":"Meta","type":"event"}]}},"onDeploy":[],"deploy":false},"Order":{"args":[],"types":["file"],"gasPrice":50000000000,"gasLimit":3141592,"compiled":{"code":"6060604052604051610cd6380380610cd68339016040526060805160600190602001805190602001805190602001805190602001805190602001505b32600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff0219169083021790555083600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff0219169083021790555082600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055508160036000508190555080600460005081905550426007600050819055507f36fa7d5e62b9c09ee038caf36fc8b7b32f3fe85e6a80e98ff616f713831510d78560405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f16801561015c5780820380516001836020036101000a031916815260200191505b509250505060405180910390a15b5050505050610b588061017e6000396000f300606060405236156100c1576000357c010000000000000000000000000000000000000000000000000000000090048063188ec356146100dc578063195984ac146100fd5780634bb278f31461010a5780634e69d560146101175780634f896d4f1461013857806355d0ad181461014b5780635b7111021461016c578063603daf9a146101be5780636e9960c3146101f5578063abf244e91461022c578063ced72f8714610263578063ea8a1af014610284578063f240f7c314610291576100c1565b6100da5b3460066000828282505401925050819055505b565b005b6100e760045061051b565b6040518082815260200191505060405180910390f35b610108600450610680565b005b610115600450610707565b005b6101226004506104f7565b6040518082815260200191505060405180910390f35b6101496004803590602001506109a8565b005b610156600450610509565b6040518082815260200191505060405180910390f35b6101bc6004803590602001906004018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050905061029e565b005b6101c9600450610458565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102006004506104b6565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610237600450610487565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61026e6004506104e5565b6040518082815260200191505060405180910390f35b61028f60045061052d565b005b61029c6004506108cc565b005b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff161415801561034a5750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff1614155b80156103a45750600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff1614155b156103ae57610455565b3273ffffffffffffffffffffffffffffffffffffffff167f935d94aae9382068e7d866bd9757ae81fa3c669c900ef3e1f16039fde798ed698260405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156104475780820380516001836020036101000a031916815260200191505b509250505060405180910390a25b50565b6000600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050610484565b90565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506104b3565b90565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506104e2565b90565b600060036000505490506104f4565b90565b60006005600050549050610506565b90565b60006006600050549050610518565b90565b6000600760005054905061052a565b90565b600060006005600050541415156105435761067d565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff16141580156105ef5750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff1614155b156105f95761067d565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660003073ffffffffffffffffffffffffffffffffffffffff1631604051809050600060405180830381858888f1935050505090508015156106725761067d565b61067c6001610b03565b5b50565b600060056000505414151561069457610705565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff161415156106f057610705565b426008600050819055506107046002610b03565b5b565b6000600260056000505414151561071d576108c9565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff16141580156107c95750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff1614155b156107d3576108c9565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff1614801561083b57506004600050546008600050544203105b15610845576108c9565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660003073ffffffffffffffffffffffffffffffffffffffff1631604051809050600060405180830381858888f1935050505090508015156108be576108c9565b6108c86003610b03565b5b50565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff16141515610928576109a6565b600260056000505414151561093c576109a6565b60046000505460086000505442031115610955576109a6565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561099b576109a6565b6109a56004610b03565b5b565b600060046005600050541415156109be57610aff565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff16141515610a1a57610aff565b6000821115610a7957600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600083604051809050600060405180830381858888f19350505050505b813073ffffffffffffffffffffffffffffffffffffffff16310390506000811115610af457600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600082604051809050600060405180830381858888f19350505050505b610afe6005610b03565b5b5050565b80600560005081905550803273ffffffffffffffffffffffffffffffffffffffff167f5f66d2a93b609bc6596b75c6dbb0e4f3f7cafd4b3b617157ff304d1076e5837560405180905060405180910390a35b5056","info":{"abiDefinition":[{"constant":true,"inputs":[],"name":"getTimestamp","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"markAsShipped","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"finalize","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"getStatus","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"buyerAmount","type":"uint256"}],"name":"resolve","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"getReceived","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"text","type":"bytes"}],"name":"addMessage","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"getBuyer","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"getAdmin","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"getMerchant","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"getFee","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"cancel","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"dispute","outputs":[],"type":"function"},{"inputs":[{"name":"_meta","type":"bytes"},{"name":"_merchant","type":"address"},{"name":"_admin","type":"address"},{"name":"_fee","type":"uint256"},{"name":"_disputeSeconds","type":"uint256"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"meta","type":"bytes"}],"name":"Meta","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":false,"name":"text","type":"bytes"}],"name":"Message","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":true,"name":"status","type":"uint256"}],"name":"Update","type":"event"}]}},"onDeploy":[],"deploy":false},"Store":{"args":[],"types":["file"],"gasPrice":50000000000,"gasLimit":3141592,"compiled":{"code":"60606040526040516102d83803806102d88339016040526060805160600190602001505b32600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055507f36fa7d5e62b9c09ee038caf36fc8b7b32f3fe85e6a80e98ff616f713831510d78160405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f16801560cf5780820380516001836020036101000a031916815260200191505b509250505060405180910390a15b506101eb806100ed6000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900480632808241a14610044578063abf244e91461009657610042565b005b6100946004803590602001906004018035906020019191908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505090506100fc565b005b6100a16004506100cd565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6000600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506100f9565b90565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff16141515610158576101e8565b7f36fa7d5e62b9c09ee038caf36fc8b7b32f3fe85e6a80e98ff616f713831510d78160405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156101da5780820380516001836020036101000a031916815260200191505b509250505060405180910390a15b5056","info":{"abiDefinition":[{"constant":false,"inputs":[{"name":"meta","type":"bytes"}],"name":"setMeta","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"getMerchant","outputs":[{"name":"","type":"address"}],"type":"function"},{"inputs":[{"name":"meta","type":"bytes"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"meta","type":"bytes"}],"name":"Meta","type":"event"}]}},"onDeploy":[],"deploy":false}};