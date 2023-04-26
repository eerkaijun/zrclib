// Need this or ethers fails in node

import { ethers } from "hardhat";
import { Account } from "@zrclib/sdk";
import {
  MockErc20__factory,
  MultiAssetShieldedPool__factory,
  Verifier__factory,
  SwapExecutor__factory,
  MockSwapRouter__factory,
} from "../typechain-types";
import { expect } from "chai";
import artifact from "@zrclib/sdk/contracts/generated/Hasher.json";
import { sleep, tend, time } from "../utils";

async function deploySwapRouter() {
  // Prepare signers
  const [deployer] = await ethers.getSigners();

  const swapRouterFactory = new MockSwapRouter__factory(deployer);
  const swapRouter = await swapRouterFactory.deploy();

  return swapRouter;
}

async function deployERC20Token(name: string, symbol: string) {
  // Prepare signers
  const [deployer] = await ethers.getSigners();

  const erc20Factory = new MockErc20__factory(deployer);
  const token = await erc20Factory.deploy(name, symbol);

  return token;
}

async function deployMultiAssetShieldedPool() {
  // Prepare signers
  const [deployer] = await ethers.getSigners();

  // Deploy the poseidon hasher
  const { abi, bytecode } = artifact;
  const Hasher = await ethers.getContractFactory(abi, bytecode);
  const hasher = await Hasher.deploy();

  // Deploy the Verifier
  const verifierFactory = new Verifier__factory(deployer);
  const verifier = await verifierFactory.deploy();

  // Deploy the Swap Executor
  const swapExecutorFactory = new SwapExecutor__factory(deployer);
  const swapExecutor = await swapExecutorFactory.deploy();

  // Deploy the multi asset shielded pool
  const maspFactory = new MultiAssetShieldedPool__factory(deployer);
  const contract = await maspFactory.deploy(
    hasher.address,
    verifier.address,
    swapExecutor.address
  );

  return { contract };
}

it("Test swap", async function () {
  const TEN = 10 * 1_000_000;
  const FIVE = 5 * 1_000_000;

  let { contract } = await deployMultiAssetShieldedPool();
  let tokenA = await deployERC20Token("LUSD", "LUSD");
  let tokenB = await deployERC20Token("DAI", "DAI");
  let swapRouter = await deploySwapRouter();

  const [deployer, aliceEth, bobEth] = await ethers.getSigners();

  // CREATE ACCOUNTS
  const alice = await Account.create(contract, aliceEth, "password123");
  await alice.login();

  const bob = await Account.create(contract, bobEth, "password123");
  await bob.login();

  let tx, t, proof, publicBalance, privateBalance;

  // MINT TOKENS
  tokenA = tokenA.connect(deployer);
  tx = await tokenA.mint(aliceEth.address, TEN);
  await tx.wait();
  tokenB = tokenB.connect(deployer);
  tx = await tokenB.mint(swapRouter.address, TEN);
  await tx.wait();

  contract = contract.connect(aliceEth);
  tokenA = tokenA.connect(aliceEth);

  /// DEPOSIT
  t = time("Alice creates shield proof for 10 coins");
  proof = await alice.proveShield(TEN, tokenA.address);
  tend(t);

  t = time("Alice approves ERC20 payment");
  tx = await tokenA.approve(contract.address, TEN);
  await tx.wait();
  tend(t);

  t = time("Alice submits transaction");
  tx = await contract.transact(proof);
  await tx.wait();
  tend(t);

  await sleep(10_000); // Waiting for sync

  /// Check balances
  t = time("Check that Alice's ERC20 balance is 0");
  publicBalance = await tokenA.balanceOf(aliceEth.address);
  expect(publicBalance).to.eq(0);
  tend(t);

  t = time("Check Alice's private balance is 10");
  privateBalance = await alice.getBalance(tokenA.address);
  expect(privateBalance).to.eq(TEN); // Transfer to the darkside worked! :)
  tend(t);

  /// WITHDRAW, SWAP and RESHIELD

});