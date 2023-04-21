// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import {ShieldedPool} from "@zrclib/tools/contracts/ShieldedPool.sol";
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ZRC20 is ERC20, ShieldedPool {
    constructor(
        address _hasherAddress,
        address _verifier
    ) ShieldedPool(5, _hasherAddress, _verifier) ERC20("ZUSD", "Zero USD") {}

    function mint(address _address, uint256 _amount) public {
        _mint(_address, _amount);
    }

    function transact(Proof calldata _proof) public {
        // Deposit functionality
        if (_proof.extData.extAmount > 0) {
            transfer(address(this), uint256(_proof.extData.extAmount));
        }

        // Proof determines whether we add to or remove from pool
        _transact(_proof);

        // Withdrawal functionality
        if (_proof.extData.extAmount < 0) {
            require(
                _proof.extData.recipient != address(0),
                "Can't withdraw to zero address"
            );

            transfer(
                _proof.extData.recipient,
                uint256(-_proof.extData.extAmount)
            );
        }
    }
}
