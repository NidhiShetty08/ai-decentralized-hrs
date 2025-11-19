const hre = require("hardhat");

async function main() {
  console.log("🚀 Deploying to Sepolia Testnet...\n");

  // Get deployer account
  const [deployer] = await hre.ethers.getSigners();
  console.log("👤 Deploying with account:", deployer.address);
  
  // Check balance
  const balance = await hre.ethers.provider.getBalance(deployer.address);
  console.log("💰 Account balance:", hre.ethers.formatEther(balance), "ETH\n");

  // Deploy contract
  console.log("📦 Deploying HealthRecords contract...");
  const HealthRecords = await hre.ethers.getContractFactory("HealthRecords");
  const healthRecords = await HealthRecords.deploy();
  
  console.log("⏳ Waiting for deployment transaction to be mined...");
  await healthRecords.waitForDeployment();
  
  const contractAddress = await healthRecords.getAddress();
  
  console.log("\n✅ CONTRACT DEPLOYED SUCCESSFULLY!");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("📍 Contract Address:", contractAddress);
  console.log("🔗 View on Etherscan:");
  console.log("   https://sepolia.etherscan.io/address/" + contractAddress);
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
  
  console.log("💾 SAVE THIS ADDRESS - You'll need it for the frontend!\n");
  
  // Test the contract
  console.log("🧪 Testing deployed contract...\n");
  
  const recordCount = await healthRecords.recordCount();
  console.log("📊 Initial record count:", recordCount.toString());
  
  console.log("\n✨ Deployment and verification complete!");
  console.log("🎉 Your smart contract is now live on Sepolia blockchain!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Deployment Error:", error);
    process.exit(1);
  });