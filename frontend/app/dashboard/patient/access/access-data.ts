export type SharedAccessEntry = {
  id: string;
  providerName: string;
  organization: string;
  scope: string; // e.g. "Full Records", "Medications Only", "Reports Only"
  sharedOn: string; // ISO date or friendly label
  expires?: string; // optional expiry ISO
  status: "active" | "revoked" | "expired" | "pending";
};

export const SHARED_ACCESS: SharedAccessEntry[] = [
  {
    id: "share-1",
    providerName: "Dr. Amelia Hart",
    organization: "Northbridge Cardiology Center",
    scope: "Full Records",
    sharedOn: "2025-10-02",
    status: "active",
  },
  {
    id: "share-2",
    providerName: "Dr. Leon Vargas",
    organization: "Summit Orthopedics Group",
    scope: "Reports Only",
    sharedOn: "2025-09-20",
    status: "active",
  },
  {
    id: "share-3",
    providerName: "Dr. Priya Nair",
    organization: "HarborView Internal Medicine",
    scope: "Medications Only",
    sharedOn: "2025-08-14",
    expires: "2025-12-31",
    status: "pending",
  },
  {
    id: "share-4",
    providerName: "Dr. Ethan Cole",
    organization: "Metro Pulmonary Associates",
    scope: "Full Records",
    sharedOn: "2025-07-03",
    status: "revoked",
  },
  {
    id: "share-5",
    providerName: "Dr. Sofia Marin",
    organization: "Evergreen Neurology Clinic",
    scope: "Reports Only",
    sharedOn: "2025-06-11",
    status: "expired",
    expires: "2025-09-11",
  },
];

export function formatDate(d: string) {
  try {
    const date = new Date(d);
    return date.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  } catch {
    return d;
  }
}
