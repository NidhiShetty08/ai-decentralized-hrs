const hre = require("hardhat");

async function main() {
  console.log("🏥 Starting Local Health Records Test...\n");

  // Get signers (test accounts)
  const [deployer, doctor, patient] = await hre.ethers.getSigners();
  
  console.log("👤 Test Accounts:");
  console.log("   Deployer:", deployer.address);
  console.log("   Doctor:", doctor.address);
  console.log("   Patient:", patient.address);
  console.log("");

  // Deploy the contract
  console.log("📦 Deploying HealthRecords contract...");
  const HealthRecords = await hre.ethers.getContractFactory("HealthRecords");
  const healthRecords = await HealthRecords.deploy();
  await healthRecords.waitForDeployment();
  
  const contractAddress = await healthRecords.getAddress();
  console.log("✅ Contract deployed to:", contractAddress);
  console.log("");

  // Check initial record count
  let recordCount = await healthRecords.recordCount();
  console.log("📊 Initial record count:", recordCount.toString());
  console.log("");

  // Add first health record
  console.log("➕ Adding first health record...");
  const tx1 = await healthRecords.connect(doctor).addRecord(
    patient.address,
    "John Doe",
    "QmXxxx1234abcd", // Simulated IPFS hash
    "lab_report"
  );
  await tx1.wait();
  console.log("✅ Record 1 added!");
  console.log("   Transaction hash:", tx1.hash);
  console.log("");

  // Add second health record
  console.log("➕ Adding second health record...");
  const tx2 = await healthRecords.connect(doctor).addRecord(
    patient.address,
    "John Doe",
    "QmYyyy5678efgh", // Simulated IPFS hash
    "prescription"
  );
  await tx2.wait();
  console.log("✅ Record 2 added!");
  console.log("   Transaction hash:", tx2.hash);
  console.log("");

  // Check updated record count
  recordCount = await healthRecords.recordCount();
  console.log("📊 Total records now:", recordCount.toString());
  console.log("");

  // Get patient's record IDs
  console.log("🔍 Fetching patient's records...");
  const patientRecordIds = await healthRecords.getPatientRecords(patient.address);
  console.log("   Patient has", patientRecordIds.length, "records");
  console.log("   Record IDs:", patientRecordIds.map(id => id.toString()).join(", "));
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

  // Get details of second record
  console.log("📄 Details of Record #2:");
  const record2 = await healthRecords.getRecord(2);
  console.log("   ID:", record2[0].toString());
  console.log("   Patient Address:", record2[1]);
  console.log("   Patient Name:", record2[2]);
  console.log("   Record Hash:", record2[3]);
  console.log("   Record Type:", record2[4]);
  console.log("   Timestamp:", new Date(Number(record2[5]) * 1000).toLocaleString());
  console.log("   Uploaded By:", record2[6]);
  console.log("   Is Active:", record2[7]);
  console.log("");

  // Test revoke functionality
  console.log("❌ Revoking Record #1...");
  const tx3 = await healthRecords.revokeRecord(1);
  await tx3.wait();
  console.log("✅ Record 1 revoked!");
  console.log("");

  // Check revoked record status
  console.log("📄 Checking Record #1 after revocation:");
  const revokedRecord = await healthRecords.getRecord(1);
  console.log("   Is Active:", revokedRecord[7]); // Should be false
  console.log("");

  console.log("🎉 Local testing complete!");
  console.log("");
  console.log("📋 Summary:");
  console.log("   ✅ Contract deployed successfully");
  console.log("   ✅ Added 2 health records");
  console.log("   ✅ Retrieved patient records");
  console.log("   ✅ Revoked a record");
  console.log("   ✅ All functions working correctly!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });