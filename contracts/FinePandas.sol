// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity 0.8.7;
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/finance/PaymentSplitter.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@openzeppelin/contracts/utils/Counters.sol";



contract FinePandas is ERC721("Panda", "[PP]"), PaymentSplitter, Ownable {
  using Strings for uint256;
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;


  string baseURI;
  string public baseExtension = ".json";
  int256 public cost = 35;
  int256 public costWl = 25;

  uint256 public maxSupply = 8888;
  uint256 public maxMintAmount = 20;
  bool public paused = true;
  uint256[] public rTokens;

  AggregatorV3Interface internal priceFeed;
  uint256 public rewardForTeam = 178;
  uint256 public rewardForMarketing = 300;
  uint256 public whiteList = 500;

  address payable internal team;
  address payable internal marketing;


  bytes32 public whitelistMerkleRoot;

  mapping(address => uint) public nftStruct;

  address[] public walletLists;


  constructor(
    string memory _initBaseURI,
    address[] memory payees,
    uint256[] memory shares,
    address agregatorInterface
  )PaymentSplitter(payees, shares) {
    setBaseURI(_initBaseURI);
    priceFeed = AggregatorV3Interface(agregatorInterface);
  }


    function RareOwners(uint[] memory idList) public onlyOwner{
        address tmp;
        for(uint i=0;i<=10;i++){
            tmp = ownerOf(idList[i]);
            walletLists.push(tmp);
        }
    }

    function MintRare() public onlyOwner{

    }

  function _baseURI() internal view virtual override returns (string memory) {
    return baseURI;
  }

  function totalSupply() public view returns(uint256 total){
    total= _tokenIds.current();
    return total;
  }

  function mint(uint256 mintAmount) public payable {
    require(!paused);
    require(mintAmount > 0 && mintAmount <= maxMintAmount);
    require(_tokenIds.current() + mintAmount <= maxSupply);
    require(msg.value >= 0.001 ether * mintAmount);
    //require(msg.value >= getPriceByUsdt(cost) * mintAmount);
    //require(msg.value >= 21076211581078502 * mintAmount);
    for (uint256 i = 1; i <= mintAmount; i++) {
      _tokenIds.increment();
      uint256 tokenId = _tokenIds.current();
      _safeMint(msg.sender, tokenId);
    }
  }    

  modifier isValidMerkleProof(bytes32[] calldata merkleProof, bytes32 root) {
        require(
            MerkleProof.verify(
                merkleProof,
                root,
                keccak256(abi.encodePacked(msg.sender))
            ),
            "Address does not exist in list"
        );
        _;
    }

    function mintWhitelist(bytes32[] calldata merkleProof, uint256 mintAmount)
        public
        payable
        isValidMerkleProof(merkleProof, whitelistMerkleRoot)
    {
        require(_tokenIds.current() + mintAmount <= maxSupply);
        require(msg.value >= (getPriceByUsdt(costWl)));
        require(_tokenIds.current() + mintAmount<=whiteList);
        _tokenIds.increment();
        uint256 tokenId = _tokenIds.current();
        for (uint256 i = 1; i <= mintAmount; i++) {
          _safeMint(msg.sender, tokenId);
          whiteList--;
        }
    }

    function setWhitelistMerkleRoot(bytes32 merkleRoot) external onlyOwner {
        whitelistMerkleRoot = merkleRoot;
    }

     
      function getPriceByUsdt(int256 ccost) public view returns (uint256 pricePerPanda) {
        (
            uint80 roundID,
            int256 price,
            uint256 startedAt,
            uint256 timeStamp,
            uint80 answeredInRound
        ) = priceFeed.latestRoundData();
          pricePerPanda = uint256((ccost * 10**26) / price);
          return pricePerPanda;
      }
    

  function tokenURI(uint256 tokenId)
    public
    view
    virtual
    override
    returns (string memory)
  {
    require(
      _exists(tokenId),
      "ERC721Metadata: URI query for nonexistent token"
    );

    string memory currentBaseURI = _baseURI();
    return bytes(currentBaseURI).length > 0
        ? string(abi.encodePacked(currentBaseURI, tokenId.toString(), baseExtension))
        : "";
  }
  
  function setCost(int256 _newCost) public onlyOwner {
    cost = _newCost;
  }

  function setmaxMintAmount(uint256 _newmaxMintAmount) public onlyOwner {
    maxMintAmount = _newmaxMintAmount;
  }

  function setBaseURI(string memory _newBaseURI) public onlyOwner {
    baseURI = _newBaseURI;
  }

  function setBaseExtension(string memory _newBaseExtension) public onlyOwner {
    baseExtension = _newBaseExtension;
  }

  function pause(bool _state) public onlyOwner {
    paused = _state;
  }

    function sendRewarToTeam(uint256 count) public onlyOwner {
      require(rewardForTeam > 0, "Not enough rewards");
      require(_tokenIds.current() + count <= maxSupply);
      for (uint256 i = 1; i <= count; i++) {
        _tokenIds.increment();
        uint256 tokenId = _tokenIds.current();
        rewardForTeam--;
        _safeMint(team, tokenId);
      }
    }

    function sendRewarToMarketing(uint256 count) public onlyOwner {
      require(rewardForMarketing > 0, "Not enough rewards");
      uint256 supply = _tokenIds.current();
      require(supply + count <= maxSupply);
      for (uint256 i = 1; i <= count; i++) {
        _tokenIds.increment();
        uint256 tokenId = _tokenIds.current();
        rewardForMarketing--;
        _safeMint(team, tokenId);
      }
    }
}