pragma solidity ^0.8.0;

contract BoxV1 {
    uint public val;

    // the state variables in the implementation contract are never used
    // thats why constructor isn't used

    function initialize(uint _val) external {
        val = _val;
    }
}
