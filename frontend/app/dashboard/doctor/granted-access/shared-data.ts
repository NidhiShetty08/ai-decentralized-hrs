export type GrantedPatient = {
  name: string;
  age: number;
  gender: string;
  access: string;
  accessColor: string; // tailwind bg color class
  grantedDate: string;
  shared: string;
  avatar: string;
};

export const GRANTED_PATIENTS: GrantedPatient[] = [
  {
    name: "John Doe",
    age: 45,
    gender: "Male",
    access: "Full Access",
    accessColor: "bg-green-500",
    grantedDate: "18 Oct 2025",
    shared: "Shared Lab tests, review medical diagnostics",
    avatar: "/avatars/avatar1.png",
  },
  {
    name: "Jane Smith",
    age: 34,
    gender: "Female",
    access: "Reports Only",
    accessColor: "bg-sky-500",
    grantedDate: "14 Oct 2025",
    shared: "History and lab diagnostics",
    avatar: "/avatars/avatar2.png",
  },
  {
    name: "Bob Johnson",
    age: 65,
    gender: "Male",
    access: "Temporary Access",
    accessColor: "bg-amber-500",
    grantedDate: "25 Oct 2025",
    shared: "ECG graphs and cardiovascular assessment",
    avatar: "/avatars/avatar3.png",
  },
  // Additional dummy patients
  {
    name: "Emily Carter",
    age: 29,
    gender: "Female",
    access: "Full Access",
    accessColor: "bg-green-500",
    grantedDate: "12 Oct 2025",
    shared: "Lab panels, prescription summaries, nutrition logs",
    avatar: "/avatars/avatar4.png",
  },
  {
    name: "Liam Patel",
    age: 52,
    gender: "Male",
    access: "Reports Only",
    accessColor: "bg-sky-500",
    grantedDate: "11 Oct 2025",
    shared: "Radiology reports and discharge summary",
    avatar: "/avatars/avatar5.png",
  },
  {
    name: "Sofia Nguyen",
    age: 41,
    gender: "Female",
    access: "Full Access",
    accessColor: "bg-green-600",
    grantedDate: "10 Oct 2025",
    shared: "Chronic condition monitoring, lab trends",
    avatar: "/avatars/avatar6.png",
  },
  {
    name: "Carlos Mendes",
    age: 37,
    gender: "Male",
    access: "Temporary Access",
    accessColor: "bg-amber-600",
    grantedDate: "09 Oct 2025",
    shared: "Cardiology consult notes and ECG snapshots",
    avatar: "/avatars/avatar7.png",
  },
  {
    name: "Ava Thompson",
    age: 31,
    gender: "Female",
    access: "Reports Only",
    accessColor: "bg-sky-600",
    grantedDate: "08 Oct 2025",
    shared: "Endocrine profile and medication adherence",
    avatar: "/avatars/avatar8.png",
  },
  {
    name: "Noah Singh",
    age: 46,
    gender: "Male",
    access: "Full Access",
    accessColor: "bg-green-500",
    grantedDate: "07 Oct 2025",
    shared: "Blood pressure logs and lifestyle notes",
    avatar: "/avatars/avatar9.png",
  },
  {
    name: "Grace Lee",
    age: 58,
    gender: "Female",
    access: "Temporary Access",
    accessColor: "bg-amber-500",
    grantedDate: "06 Oct 2025",
    shared: "Post-op recovery checklist and wound images",
    avatar: "/avatars/avatar10.png",
  },
  {
    name: "Ethan Brooks",
    age: 27,
    gender: "Male",
    access: "Reports Only",
    accessColor: "bg-sky-500",
    grantedDate: "05 Oct 2025",
    shared: "Allergy test results and immunization record",
    avatar: "/avatars/avatar11.png",
  },
  {
    name: "Maya Fernandez",
    age: 35,
    gender: "Female",
    access: "Full Access",
    accessColor: "bg-green-500",
    grantedDate: "04 Oct 2025",
    shared: "Full longitudinal EHR summary and lab history",
    avatar: "/avatars/avatar12.png",
  },
];

export function slugify(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9\s]/g, "").replace(/\s+/g, "-");
}

export function getGrantedPatientBySlug(slug: string): GrantedPatient | undefined {
  return GRANTED_PATIENTS.find((p) => slugify(p.name) === slug);
}
