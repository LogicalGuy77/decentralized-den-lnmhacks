async function main() {
  const [deployer] = await ethers.getSigners();

  const AssetManager = await ethers.getContractFactory("AssetManager");
  const assetManager = await AssetManager.deploy();
  await assetManager.deployed();

  console.log("AssetManager deployed to:", assetManager.address);

  return assetManager.address;
}

main()
  .then(address => {
    console.log(`AssetManager address: ${address}`);
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


  // 0x1d4E5c1038900C9b8a19d46dcc9Bbd6cFeE8AFEB