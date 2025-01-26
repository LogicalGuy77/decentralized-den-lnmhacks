async function main() {
    const [deployer] = await ethers.getSigners();
  
    const Bet = await ethers.getContractFactory("Bet");
    const bet = await Bet.deploy("0x1d4E5c1038900C9b8a19d46dcc9Bbd6cFeE8AFEB", "0x56Ff6f4A98155FB23DaFF8D8895F144B0A8539Ed");
    await bet.deployed();
  
    console.log("Bet deployed to:", bet.address);
  
    return bet.address;
  }
  
  main()
    .then(address => {
      console.log(`Bet address: ${address}`);
      process.exit(0);
    })
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  
  
    // 0xd71DB4e92850F57ab51b45FD53c9471546fA9805

    // 0xFFa73AAEeE475B69c11a551b07f60754c524b507