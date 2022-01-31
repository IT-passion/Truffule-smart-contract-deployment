// const ArtToken = artifacts.require("../contracts/ArtToken.sol");
const ArtMarketplace = artifacts.require("../contracts/ArtMarketplace.sol");

module.exports = function (deployer) {
  // deployer.deploy(ArtToken);
  deployer.deploy(ArtMarketplace, '0xF1d75854333B0C827D6F82179078a02bf4Cc561a');
};