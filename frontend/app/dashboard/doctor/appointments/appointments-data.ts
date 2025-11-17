export type Appointment = {
  id: string;
  date: string; // YYYY-MM-DD
  time: string; // display time
  patientId?: string;
  patientName: string;
  reason: string;
  detail: string;
};

export const APPOINTMENTS: Appointment[] = [
  { id: 'appt-001', date: '2025-11-13', time: '09:00 AM', patientId: 'p-101', patientName: 'Sarah Khan', reason: 'Fever and cold', detail: 'Routine checkup and follow-up on chest x-ray.' },
  { id: 'appt-002', date: '2025-11-13', time: '09:30 AM', patientId: 'p-102', patientName: 'Aanya Sharma', reason: 'Headache', detail: 'Evaluate recurring headaches for last 2 weeks.' },
  { id: 'appt-003', date: '2025-11-13', time: '10:00 AM', patientId: 'p-103', patientName: 'Michael Lee', reason: 'Back pain', detail: 'Lower back pain after minor fall.' },
  { id: 'appt-004', date: '2025-11-13', time: '10:30 AM', patientId: 'p-104', patientName: 'Priya Patel', reason: 'Skin rash', detail: 'New rash on arms - allergic reaction suspected.' },
  { id: 'appt-005', date: '2025-11-13', time: '11:00 AM', patientId: 'p-105', patientName: 'Carlos Rivera', reason: 'Diabetes follow-up', detail: 'Review blood sugar logs and medication.' },
  { id: 'appt-006', date: '2025-11-13', time: '11:30 AM', patientId: 'p-106', patientName: 'Emma Johnson', reason: 'Annual physical', detail: 'Full physical exam and blood tests.' },
  { id: 'appt-007', date: '2025-11-13', time: '12:00 PM', patientId: 'p-107', patientName: 'Noah Brown', reason: 'Flu symptoms', detail: 'Cough, fever and body aches.' },
  { id: 'appt-008', date: '2025-11-13', time: '01:00 PM', patientId: 'p-108', patientName: 'Lina Gomez', reason: 'Medication refill', detail: 'Refill prescription for hypertension.' },
  { id: 'appt-009', date: '2025-11-13', time: '01:30 PM', patientId: 'p-109', patientName: 'David Kim', reason: 'Knee pain', detail: 'Pain while climbing stairs.' },
  { id: 'appt-010', date: '2025-11-13', time: '02:00 PM', patientId: 'p-110', patientName: 'Aisha Siddiqui', reason: 'Ear infection', detail: 'Earache and decreased hearing in left ear.' },
  { id: 'appt-011', date: '2025-11-13', time: '02:30 PM', patientId: 'p-111', patientName: 'Oliver Martin', reason: 'Stomach pain', detail: 'Intermittent abdominal cramps.' },
  { id: 'appt-012', date: '2025-11-13', time: '03:00 PM', patientId: 'p-112', patientName: 'Sophia Liu', reason: 'High blood pressure', detail: 'BP check and lifestyle counselling.' },
  { id: 'appt-013', date: '2025-11-13', time: '03:30 PM', patientId: 'p-113', patientName: 'Jacob Wilson', reason: 'Chest discomfort', detail: 'EKG and cardiac risk review.' },
  { id: 'appt-014', date: '2025-11-13', time: '04:00 PM', patientId: 'p-114', patientName: 'Maya Singh', reason: 'Follow-up', detail: 'Post-op follow-up for wound check.' },
  { id: 'appt-015', date: '2025-11-13', time: '04:30 PM', patientId: 'p-115', patientName: 'Liam Scott', reason: 'Allergy', detail: 'Seasonal allergy management.' },
  { id: 'appt-016', date: '2025-11-13', time: '05:00 PM', patientId: 'p-116', patientName: 'Zara Khan', reason: 'Consultation', detail: 'New patient consultation - general.' },
  { id: 'appt-017', date: '2025-11-13', time: '05:30 PM', patientId: 'p-117', patientName: 'Hannah Becker', reason: 'Vaccination', detail: 'Flu vaccine and counseling.' },
  { id: 'appt-018', date: '2025-11-13', time: '06:00 PM', patientId: 'p-118', patientName: 'Ethan Wright', reason: 'Injury review', detail: 'Ankle sprain recheck and mobility.' },
  { id: 'appt-019', date: '2025-11-13', time: '06:30 PM', patientId: 'p-119', patientName: 'Chloe Davis', reason: 'Mental health', detail: 'Brief mental health check-in.' },
  { id: 'appt-020', date: '2025-11-13', time: '07:00 PM', patientId: 'p-120', patientName: 'Ben Thompson', reason: 'ENT consult', detail: 'Sore throat and tonsil swelling.' }
];
