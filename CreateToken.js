
const  { 
    TokenCreateTransaction,
    AccountId,
      PrivateKey,
      Client,
    TokenId,
    TokenInfoQuery,
    Hbar,
    AccountInfoQuery,
    TransferTransaction,
    AccountBalanceQuery,
      FileCreateTransaction,
      ContractCreateTransaction,
      ContractFunctionParameters,
      ContractExecuteTransaction,
      PublicKey,
   } = require("@hashgraph/sdk");


const accountId = "0.0.1448067"
const privateKey = PrivateKey.fromString("302e020100300506032b657004220420af63fc69ff9a35c1904d4d22acc49459cda7d981315120318f43b188f72d92bf");
const client = Client.forMainnet().setOperator(accountId, privateKey);
const  pubkey = PublicKey.fromString("302a300506032b657003210041a1752b779bc9a169a6873431138faea2898034a643eb9cd54c4f191241152d");



async function CreateToken() {

//Create the transaction and freeze for manual signing
const transaction = await new TokenCreateTransaction()
.setTokenName("Sheikh Fan Token")
.setTokenSymbol("SFT")
.setTreasuryAccountId(accountId)
.setInitialSupply(300004)
.setAdminKey(pubkey)
.setMaxTransactionFee(new Hbar(30)) //Change the default max transaction fee
.freezeWith(client);

//Sign the transaction with the token adminKey and the token treasury account private key
const signTx =  await (await transaction.sign(privateKey)).sign(privateKey);

//Sign the transaction with the client operator private key and submit to a Hedera network
const txResponse = await signTx.execute(client);

//Get the receipt of the transaction
const receipt = await txResponse.getReceipt(client);

//Get the token ID from the receipt
const tokenId = receipt.tokenId;

console.log("The new token ID is " + tokenId);

//v2.0".5
}

// const accounts = [



  // 0.0.2032315
  // 0.0.1154763
  // 0.0.2101715
  // 0.0.1152048
  // 0.0.732415
  // 0.0.1171447
  // 0.0.1137010
  // 0.0.1096787


// ]


const MultiTransfer =  (async () => {
  const tokenId = "0.0.2082286"
  const accountId1 =  "0.0.2031883"
  const accountId2 = ""
  //Create the transfer transaction
const transaction = await new TransferTransaction()
.addTokenTransfer(tokenId, accountId1, -111)
.addTokenTransfer(tokenId, "0.0.2032315",111)

.addTokenTransfer(tokenId, accountId1, -111)
.addTokenTransfer(tokenId,"0.0.1154763",111)

.addTokenTransfer(tokenId, accountId1, -111)
.addTokenTransfer(tokenId,"0.0.2101715",111)

.addTokenTransfer(tokenId, accountId1, -111)
.addTokenTransfer(tokenId,  "0.0.1152048",111)

.addTokenTransfer(tokenId, accountId1, -111)
.addTokenTransfer(tokenId, "0.0.732415", 111)

.addTokenTransfer(tokenId, accountId1, -111)
.addTokenTransfer(tokenId,  "0.0.1171447", 111)

.addTokenTransfer(tokenId, accountId1, -111)
.addTokenTransfer(tokenId, "0.0.1137010", 111)

.addTokenTransfer(tokenId, accountId1, -111)
.addTokenTransfer(tokenId, "0.0.1096787", 111)

// .addTokenTransfer(tokenId, accountId1, -111)
// .addTokenTransfer(tokenId, "0.0.2031691", 111)

// .addTokenTransfer(tokenId, accountId1, -111)
// .addTokenTransfer(tokenId, "0.0.2098739", 111)
.freezeWith(client);

//Sign with the sender account private key
const signTx = await transaction.sign(privateKey);

//Sign with the client operator private key and submit to a Hedera network
const txResponse = await signTx.execute(client);

//Request the receipt of the transaction
const receipt = await txResponse.getReceipt(client);

//Obtain the transaction consensus status
const transactionStatus = receipt.status;

console.log("The transaction consensus status " +transactionStatus.toString());

//v2.0.5
})

CreateToken()