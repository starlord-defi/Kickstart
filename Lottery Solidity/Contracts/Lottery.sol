pragma solidity ^0.4.17;

contract Lottery{
    
    address public manager;
    address[] public players;
    
    modifier managerOnly(){
        require(msg.sender == manager);
        _;
    }
    
    function Lottery() public {
        manager = msg.sender;
    }
    
    function enter() public payable{
        require(msg.value > 0.01 ether);
        players.push(msg.sender);
    }
    
    function random() private view returns(uint){
        return uint(keccak256(block.difficulty, now, players));
    }
    
    function pickWinner() public managerOnly{
        uint index = random() % players.length;
        players[index].transfer(this.balance);
        players = new address[](0);
    }
    
    function allPlayers() public view returns(address[]){
        return players;
    }
    
}