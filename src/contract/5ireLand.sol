pragma solidity ^0.8.17;

contract LandRegistry {
    struct User {
        string name;
        address userAddress;
    }

    struct Land {
        string id;
        string[] name;
        string location;
        string locationURL;
        string propertyDim;
        string imageURL;
        address[] owners;
    }

    mapping(address => string) private users;
    mapping(string => Land) private lands;

    Land[] private landsArray;

    function registerLand(
        string memory _id,
        string memory _name,
        string memory _location,
        string memory _locationURL,
        string memory _imageURL,
        string memory _propertyDim
    ) public {
        require(
            keccak256(bytes(lands[_id].id)).length >= 1,
            "Land with the same ID already exists"
        );

        lands[_id] = Land(
            _id,
            new string[](0),
            _location,
            _locationURL,
            _propertyDim,
            _imageURL,
            new address[](0)
        );
        lands[_id].name.push(_name);
        lands[_id].owners.push(msg.sender);
        landsArray.push(lands[_id]);
    }

    function transferOwnership(string memory _id, address _to, string memory _name) public {
        Land storage land = lands[_id];
        require(bytes(land.id).length == bytes(_id).length, "Land record not found");
        land.name.push(_name);
        land.owners.push(_to);
    }

    function getLandbyID(string memory _id) public view returns (Land memory) {
        return lands[_id];
    }

    function getAllLands() public view returns (Land[] memory) {
        return landsArray;
    }
}
