export interface NonceData {
  nonce: string;
  timestamp: number;
}

export interface AuthRequest {
  walletAddress: string;
}

export interface VerifyRequest {
  walletAddress: string;
  signature: string;
  nonce: string;
}

export interface SetRoleRequest {
  walletAddress: string;
  role: 'doctor' | 'patient';
}

export interface JWTPayload {
  walletAddress: string;
  role: 'doctor' | 'patient';
  timestamp: number;
}

export interface AuthResponse {
  success: boolean;
  token: string;
  role: 'doctor' | 'patient';
  walletAddress: string;
}

export interface ProtectedResponse {
  success: boolean;
  role: string;
  walletAddress: string;
  data: {
    message: string;
    patients?: Patient[];
    records?: HealthRecord[];
  };
}

export interface Patient {
  id: number;
  name: string;
  status: string;
}

export interface HealthRecord {
  id: number;
  type: string;
  date: string;
  status: string;
}