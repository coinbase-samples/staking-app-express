import { TransactionRequest, ethers } from "ethers";

export class Signer {
  signer: ethers.Wallet;
  constructor() {
    this.signer = new ethers.Wallet(process.env.PRIVATE_KEY!);
  }

  async signTransaction(unsignedTx: string) {
    let unsignedTxRequest: TransactionRequest = JSON.parse(unsignedTx);
    return this.signer.signTransaction(unsignedTxRequest);
  }
}
