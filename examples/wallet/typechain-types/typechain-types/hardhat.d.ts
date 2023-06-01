/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "ERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155__factory>;
    getContractFactory(
      name: "IERC1155MetadataURI",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155MetadataURI__factory>;
    getContractFactory(
      name: "IERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155__factory>;
    getContractFactory(
      name: "IERC1155Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Receiver__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Permit__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "AbstractShieldedPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AbstractShieldedPool__factory>;
    getContractFactory(
      name: "BlocklistVerifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BlocklistVerifier__factory>;
    getContractFactory(
      name: "CompliantVerifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CompliantVerifier__factory>;
    getContractFactory(
      name: "TransactionVerifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TransactionVerifier__factory>;
    getContractFactory(
      name: "MerkleTreeForBlocklist",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MerkleTreeForBlocklist__factory>;
    getContractFactory(
      name: "IHasher",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IHasher__factory>;
    getContractFactory(
      name: "MerkleTreeWithHistory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MerkleTreeWithHistory__factory>;
    getContractFactory(
      name: "ShieldedPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ShieldedPool__factory>;
    getContractFactory(
      name: "ShieldedPoolWithBlocklist",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ShieldedPoolWithBlocklist__factory>;
    getContractFactory(
      name: "SwapExecutor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SwapExecutor__factory>;
    getContractFactory(
      name: "Blocklist",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Blocklist__factory>;
    getContractFactory(
      name: "BlocklistVerifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BlocklistVerifier__factory>;
    getContractFactory(
      name: "CompliantShieldedPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CompliantShieldedPool__factory>;
    getContractFactory(
      name: "CompliantTransactionVerifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CompliantTransactionVerifier__factory>;
    getContractFactory(
      name: "DefiantDeposit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DefiantDeposit__factory>;
    getContractFactory(
      name: "DefiantDepositProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DefiantDepositProxy__factory>;
    getContractFactory(
      name: "DefiantPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DefiantPool__factory>;
    getContractFactory(
      name: "DefiantWithdrawal",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DefiantWithdrawal__factory>;
    getContractFactory(
      name: "DefiantWithdrawalProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DefiantWithdrawalProxy__factory>;
    getContractFactory(
      name: "EventMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EventMock__factory>;
    getContractFactory(
      name: "MockErc20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockErc20__factory>;
    getContractFactory(
      name: "MockSwapRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockSwapRouter__factory>;
    getContractFactory(
      name: "MultiAssetShieldedPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MultiAssetShieldedPool__factory>;
    getContractFactory(
      name: "Verifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Verifier__factory>;
    getContractFactory(
      name: "WithdrawalAmountManagerImpl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.WithdrawalAmountManagerImpl__factory>;
    getContractFactory(
      name: "WithdrawalAmountManagerTester",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.WithdrawalAmountManagerTester__factory>;
    getContractFactory(
      name: "ZRC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ZRC1155__factory>;
    getContractFactory(
      name: "ZRC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ZRC20__factory>;

    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "ERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155>;
    getContractAt(
      name: "IERC1155MetadataURI",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155MetadataURI>;
    getContractAt(
      name: "IERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155>;
    getContractAt(
      name: "IERC1155Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155Receiver>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Permit>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "AbstractShieldedPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AbstractShieldedPool>;
    getContractAt(
      name: "BlocklistVerifier",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BlocklistVerifier>;
    getContractAt(
      name: "CompliantVerifier",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CompliantVerifier>;
    getContractAt(
      name: "TransactionVerifier",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TransactionVerifier>;
    getContractAt(
      name: "MerkleTreeForBlocklist",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MerkleTreeForBlocklist>;
    getContractAt(
      name: "IHasher",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IHasher>;
    getContractAt(
      name: "MerkleTreeWithHistory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MerkleTreeWithHistory>;
    getContractAt(
      name: "ShieldedPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ShieldedPool>;
    getContractAt(
      name: "ShieldedPoolWithBlocklist",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ShieldedPoolWithBlocklist>;
    getContractAt(
      name: "SwapExecutor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SwapExecutor>;
    getContractAt(
      name: "Blocklist",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Blocklist>;
    getContractAt(
      name: "BlocklistVerifier",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BlocklistVerifier>;
    getContractAt(
      name: "CompliantShieldedPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CompliantShieldedPool>;
    getContractAt(
      name: "CompliantTransactionVerifier",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CompliantTransactionVerifier>;
    getContractAt(
      name: "DefiantDeposit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DefiantDeposit>;
    getContractAt(
      name: "DefiantDepositProxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DefiantDepositProxy>;
    getContractAt(
      name: "DefiantPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DefiantPool>;
    getContractAt(
      name: "DefiantWithdrawal",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DefiantWithdrawal>;
    getContractAt(
      name: "DefiantWithdrawalProxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DefiantWithdrawalProxy>;
    getContractAt(
      name: "EventMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.EventMock>;
    getContractAt(
      name: "MockErc20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockErc20>;
    getContractAt(
      name: "MockSwapRouter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockSwapRouter>;
    getContractAt(
      name: "MultiAssetShieldedPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MultiAssetShieldedPool>;
    getContractAt(
      name: "Verifier",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Verifier>;
    getContractAt(
      name: "WithdrawalAmountManagerImpl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.WithdrawalAmountManagerImpl>;
    getContractAt(
      name: "WithdrawalAmountManagerTester",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.WithdrawalAmountManagerTester>;
    getContractAt(
      name: "ZRC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ZRC1155>;
    getContractAt(
      name: "ZRC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ZRC20>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}