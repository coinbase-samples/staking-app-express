import { TransactionRequest, ethers } from "ethers";

export class Signer {
  signer: ethers.Wallet;
  constructor() {
    this.signer = new ethers.Wallet(process.env.PRIVATE_KEY!);
  }

  async signTransaction(txRequest: TransactionRequest) {
    return this.signer.signTransaction(txRequest);
  }
}
