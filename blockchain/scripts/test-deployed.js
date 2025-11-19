const hre = require("hardhat");

async function main() {
  // YOUR DEPLOYED CONTRACT ADDRESS
  const CONTRACT_ADDRESS = "0xd83CBC510C5c6892772478De5F40c471856F0736";
  
  console.log("🧪 Testing deployed HealthRecords contract on Sepolia...\n");
  
  const [deployer] = await hre.ethers.getSigners();
  console.log("👤 Testing with account:", deployer.address);
  
  // Connect to deployed contract
  const HealthRecords = await hre.ethers.getContractFactory("HealthRecords");
  const healthRecords = HealthRecords.attach(CONTRACT_ADDRESS);
  
  console.log("📦 Connected to contract:", CONTRACT_ADDRESS);
  console.log("");
  
  // Check initial record count
  let count = await healthRecords.recordCount();
  console.log("📊 Current record count:", count.toString());
  console.log("");
  
  // Add first test record
  console.log("➕ Adding first health record...");
  const tx1 = await healthRecords.addRecord(
    deployer.address,
    "John Doe",
    "QmXxxx1234abcd",
    "lab_report"
  );
  
  console.log("⏳ Waiting for transaction confirmation...");
  const receipt1 = await tx1.wait();
  console.log("✅ Record 1 added successfully!");
  console.log("   Transaction hash:", tx1.hash);
  console.log("   Block number:", receipt1.blockNumber);
  console.log("   Gas used:", receipt1.gasUsed.toString());
  console.log("");
  
  // Add second test record
  console.log("➕ Adding second health record...");
  const tx2 = await healthRecords.addRecord(
    deployer.address,
    "Jane Smith",
    "QmYyyy5678efgh",
    "prescription"
  );
  
  console.log("⏳ Waiting for transaction confirmation...");
  const receipt2 = await tx2.wait();
  console.log("✅ Record 2 added successfully!");
  console.log("   Transaction hash:", tx2.hash);
  console.log("   Block number:", receipt2.blockNumber);
  console.log("   Gas used:", receipt2.gasUsed.toString());
  console.log("");
  
  // Check updated record count
  count = await healthRecords.recordCount();
  console.log("📊 Updated record count:", count.toString());
  console.log("");
  
  // Get patient's record IDs
  console.log("🔍 Fetching patient records for:", deployer.address);
  const recordIds = await healthRecords.getPatientRecords(deployer.address);
  console.log("📋 Patient has", recordIds.length, "records");
  console.log("   Record IDs:", recordIds.map(id => id.toString()).join(", "));
  console.log("");
  
  // Get details of first record
  console.log("📄 Details of Record #1:");
  const record1 = await healthRecords.getRecord(1);
  console.log("   ID:", record1[0].toString());
  console.log("   Patient Address:", record1[1]);
  console.log("   Patient Name:", record1[2]);
  console.log("   Record Hash:", record1[3]);
  console.log("   Record Type:", record1[4]);
  console.log("   Timestamp:", new Date(Number(record1[5]) * 1000).toLocaleString());
  console.log("   Uploaded By:", record1[6]);
  console.log("   Is Active:", record1[7]);
  console.log("");
  
  console.log("🎉 Testing complete!");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("🔗 View all transactions on Etherscan:");
  console.log("   https://sepolia.etherscan.io/address/" + CONTRACT_ADDRESS);
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Error:", error);
    process.exit(1);
  });
  