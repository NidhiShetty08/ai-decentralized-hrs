// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract HealthRecords {
    
    struct HealthRecord {
        uint256 id;
        address patientAddress;
        string patientName;
        string recordHash;
        string recordType;
        uint256 timestamp;
        address uploadedBy;
        bool isActive;
    }
    
    uint256 public recordCount = 0;
    
    mapping(uint256 => HealthRecord) public records;
    mapping(address => uint256[]) public patientRecords;
    
    event RecordAdded(uint256 indexed recordId, address indexed patient, string recordHash);
    event RecordRevoked(uint256 indexed recordId);
    
    function addRecord(
        address _patientAddress,
        string memory _patientName,
        string memory _recordHash,
        string memory _recordType
    ) public {
        recordCount++;
        
        records[recordCount] = HealthRecord({
            id: recordCount,
            patientAddress: _patientAddress,
            patientName: _patientName,
            recordHash: _recordHash,
            recordType: _recordType,
            timestamp: block.timestamp,
            uploadedBy: msg.sender,
            isActive: true
        });
        
        patientRecords[_patientAddress].push(recordCount);
        
        emit RecordAdded(recordCount, _patientAddress, _recordHash);
    }
    
    function getPatientRecords(address _patientAddress) 
        public 
        view 
        returns (uint256[] memory) 
    {
        return patientRecords[_patientAddress];
    }
    
    function getRecord(uint256 _recordId) 
        public 
        view 
        returns (
            uint256 id,
            address patientAddress,
            string memory patientName,
            string memory recordHash,
            string memory recordType,
            uint256 timestamp,
            address uploadedBy,
            bool isActive
        ) 
    {
        HealthRecord memory record = records[_recordId];
        return (
            record.id,
            record.patientAddress,
            record.patientName,
            record.recordHash,
            record.recordType,
            record.timestamp,
            record.uploadedBy,
            record.isActive
        );
    }
    
    function revokeRecord(uint256 _recordId) public {
        require(records[_recordId].isActive, "Record already revoked");
        records[_recordId].isActive = false;
        emit RecordRevoked(_recordId);
    }
}