module.exports = {
  addMultiSigAddress: 'addmultisigaddress',
  addNode: 'addnode', // bitcoind v0.8.0+
  addRedeemScript: 'addredeemscript', // Okcash
  anonInfo: 'anoninfo', // Okcash
  anonOutputs: 'anonoutputs',
  backupWallet: 'backupwallet',
  checkKernel: 'checkkernel', // Okcash - PoS
  checkWallet: 'checkwallet',
  createMultiSig: 'createmultisig',
  createRawTransaction: 'createrawtransaction', // bitcoind v0.7.0+
  decodeRawTransaction: 'decoderawtransaction', // bitcoind v0.7.0+
  decodeScript: 'decodescript',
  dumpPrivKey: 'dumpprivkey',
  dumpWallet: 'dumpwallet', // bitcoind v0.9.0+
  encryptWallet: 'encryptwallet',
  estimateAnonFee: 'estimateanonfee', // Okcash
  // estimateFee: 'estimatefee', // bitcoind v0.10.0x Not in Okcash
  // estimatePriority: 'estimatepriority', // bitcoind v0.10.0+
  extKey: 'extkey', // Okcash - HD wallet
  generate: 'generate', // bitcoind v0.11.0+
  getAccount: 'getaccount',
  getAccountAddress: 'getaccountaddress',
  getAddedNodeInfo: 'getaddednodeinfo', // bitcoind v0.8.0+
  getAddressesByAccount: 'getaddressesbyaccount',
  getBalance: 'getbalance',
  getBestBlockHash: 'getbestblockhash', // bitcoind v0.9.0+
  getBlock: 'getblock',
  getBlockchainInfo: 'getblockchaininfo', // bitcoind v0.9.2+
  getBlockCount: 'getblockcount',
  getBlockHash: 'getblockhash',
  getBlockTemplate: 'getblocktemplate', // bitcoind v0.7.0+
  // getChainTips: 'getchaintips', // bitcoind v0.10.0+
  getConnectionCount: 'getconnectioncount',
  getDifficulty: 'getdifficulty',
  getGenerate: 'getgenerate',
  getInfo: 'getinfo',
  // getMempoolInfo: 'getmempoolinfo', // bitcoind v0.10+
  getMiningInfo: 'getmininginfo',
  getNetTotals: 'getnettotals',
  getNetworkInfo: 'getnetworkinfo', // bitcoind v0.9.2+
  getNetworkHashPs: 'getnetworkhashps', // bitcoind v0.9.0+
  getNewAddress: 'getnewaddress',
  getNewExtAddress: 'getnewextaddress', // OKCASH 
  getNewPubKey: 'getnewpubkey', // OKCASH
  getNewStealthAddress: 'getnewstealthaddress', // OKCASH
  getPeerInfo: 'getpeerinfo', // bitcoind v0.7.0+
  // getRawChangeAddress: 'getrawchangeaddress', // bitcoin v0.9+
  getRawMemPool: 'getrawmempool', // bitcoind v0.7.0+
  getRawTransaction: 'getrawtransaction', // bitcoind v0.7.0+
  getReceivedByAccount: 'getreceivedbyaccount',
  getReceivedByAddress: 'getreceivedbyaddress',
  getStakeSubsidy: 'getstakesubsidy', // Okcash - PoS
  getStakingInfo : 'getstakinginfo', // Okcash - PoS
  getSubsidy: 'getsubsidy', // Okcash - PoS
  getTransaction: 'gettransaction',
  // getTxOut: 'gettxout', // bitcoind v0.7.0+
  // getTxOutProof: 'gettxoutproof', // bitcoind v0.11.0+
  // getTxOutSetInfo: 'gettxoutsetinfo', // bitcoind v0.7.0+
  // getUnconfirmedBalance: 'getunconfirmedbalance', // bitcoind v0.9.0+
  // getWalletInfo: 'getwalletinfo', // bitcoind v0.9.2+
  getWork: 'getwork', // OKCASH - OLD bitcoin feature
  getWorkEx: 'getworkex', // OKCASH - OLD bitcoin feature
  help: 'help',
  // importAddress: 'importaddress', // bitcoind v0.10.0+
  importPrivKey: 'importprivkey',
  importStealthAddress: 'importstealthaddress', // OKCASH
  importWallet: 'importwallet', // bitcoind v0.9.0+
  keypoolRefill: 'keypoolrefill',
  listAccounts: 'listaccounts',
  listAddressGroupings: 'listaddressgroupings', // bitcoind v0.7.0+
  // listLockUnspent: 'listlockunspent', // bitcoind v0.8.0+
  listReceivedByAccount: 'listreceivedbyaccount',
  listReceivedByAddress: 'listreceivedbyaddress',
  listSinceBlock: 'listsinceblock',
  listStealthAddresses: 'liststealthaddresses', // OKCASH
  listTransactions: 'listtransactions',
  listUnspent: 'listunspent', // bitcoind v0.7.0+
  // lockUnspent: 'lockunspent', // bitcoind v0.8.0+
  makeKeyPair: 'makekeypair', // Okcash
  move: 'move',
  nextOrphan: 'nextorphan',
  ping: 'ping', // bitcoind v0.9.0+
  // prioritiseTransaction: 'prioritisetransaction', // bitcoind v0.10.0+
  reloadAnonData: 'reloadanondata', // Okcash
  repairWallet: 'repairwallet', // Okcash
  reSendTx: 'resendtx', // Okcash
  reserveBalance: 'reservebalance', // Okcash
  rewindChain: 'rewindchain', // Okcash
  scanforalltxns: 'scanforalltxns', // Okcash
  scanForStealthTxns: 'scanforstealthtxns', // Okcash
  sendAlert: 'sendalert', // Okcash
  sendAnonToAnon: 'sendanontoanon', // Okcash
  sendAnonToOk: 'sendanontook',// Okcash
  sendFrom: 'sendfrom',
  sendMany: 'sendmany',
  sendRawTransaction: 'sendrawtransaction', // bitcoind v0.7.0+
  sendOkToAnon : 'sendoktoanon', // Okcash
  sendToAddress: 'sendtoaddress',
  sendToStealthAddress: 'sendtostealthaddress', // Okcash
  setAccount: 'setaccount',
  // setGenerate: 'setgenerate',
  setBestBlockByHeight: 'setbestblockbyheight', // Okcash
  setTxFee: 'settxfee',
  signMessage: 'signmessage',
  signRawTransaction: 'signrawtransaction', // bitcoind v0.7.0+
  stop: 'stop',
  submitBlock: 'submitblock', // bitcoind v0.7.0+
  validateAddress: 'validateaddress',
  validatePubKey: 'validatepubkey',
  verifyChain: 'verifychain', // bitcoind v0.9.0+
  verifyMessage: 'verifymessage',
  // verifyTxOutProof: 'verifytxoutproof', // bitcoind v0.11.0+
  // walletLock: 'walletlock',
  // walletPassphrase: 'walletpassphrase',
  // walletPassphraseChange: 'walletpassphrasechange',
  smsgAddKey: 'smsgaddkey', // --- OKCASH MESSAGING API ---
  smsgBuckets: 'smsgbuckets',
  smsgDisable: 'smsgdisable',
  smsgEnable: 'smsgenable',
  smsgGetPubKey: 'smsggetpubkey',
  smsgInbox: 'smsginbox', 
  smsgLocalKeys: 'smsglocalkeys',
  smsgOptions: 'smsgoptions',
  smsgOutbox: 'smsgoutbox',
  smsgScanBuckets: 'smsgscanbuckets',
  smsgScanChain: 'smsgscanchain',
  smsgSend: 'smsgsend',
  smsgSendAnon: 'smsgsendanon'
  
}
