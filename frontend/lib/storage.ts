import { NonceData } from '../types/auth';

/**
 * In-memory storage for nonces and user roles
 * Replace with database in production (PostgreSQL, MongoDB, etc.)
 */
export class Storage {
  private static userNonces = new Map<string, NonceData>();
  private static userRoles = new Map<string, 'doctor' | 'patient'>();

  // Nonce management
  static setNonce(address: string, data: NonceData): void {
    this.userNonces.set(address.toLowerCase(), data);
  }

  static getNonce(address: string): NonceData | undefined {
    return this.userNonces.get(address.toLowerCase());
  }

  static deleteNonce(address: string): void {
    this.userNonces.delete(address.toLowerCase());
  }

  // Role management
  static setRole(address: string, role: 'doctor' | 'patient'): void {
    this.userRoles.set(address.toLowerCase(), role);
  }

  static getRole(address: string): 'doctor' | 'patient' {
    return this.userRoles.get(address.toLowerCase()) || 'patient';
  }

  // Cleanup expired nonces (call periodically)
  static cleanupExpiredNonces(): void {
    const now = Date.now();
    const FIVE_MINUTES = 5 * 60 * 1000;
    
    for (const [address, data] of this.userNonces.entries()) {
      if (now - data.timestamp > FIVE_MINUTES) {
        this.userNonces.delete(address);
      }
    }
  }
}

// Cleanup expired nonces every minute
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    Storage.cleanupExpiredNonces();
  }, 60 * 1000);
}