import Link from "next/link";
import { notFound } from "next/navigation";
import { Sidebar, Card, Icon } from "../../_components/ui";
import { getPatientById } from "../patient-data";

export default function PatientDetailPage({ params }: { params: { id: string } }) {
  const patient = getPatientById(params.id);

  if (!patient) {
    notFound();
  }

  return (
  <div className="h-screen overflow-hidden bg-[#eef6f0]">
      <div className="h-full px-2 py-1 lg:px-3 lg:py-2">
        <div className="flex h-full gap-3">
          <Sidebar active="patients" />
          <main className="flex min-h-0 flex-1 flex-col overflow-hidden">
            <div className="flex items-start justify-between pr-2">
              <div>
                <h1 className="text-[28px] sm:text-[34px] font-semibold tracking-tight text-gray-900">{patient.name}</h1>
                <p className="mt-1 text-sm text-gray-500">Last visit: {patient.date}</p>
              </div>
              <div className="pt-2">
                <Link
                  href="/dashboard/doctor/patients"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-100"
                >
                  <Icon name="arrow-left" className="h-4 w-4" />
                  Back to patients
                </Link>
              </div>
            </div>

            <div className="mt-4 flex-1 overflow-y-auto pe-3 pb-6 space-y-4">
              <Card className="flex flex-col gap-6 p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <div className="relative h-24 w-24 overflow-hidden rounded-full border border-white/80 shadow-md">
                    <img src={patient.avatar} alt={`${patient.name} portrait`} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1 space-y-3 text-sm text-gray-700">
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <DetailField label="Gender" value={patient.gender} />
                      <DetailField label="Age" value={`${patient.age}`} />
                      <DetailField label="Address" value={patient.address} />
                      <DetailField label="Primary Diagnosis" value={patient.diagnosis} />
                    </div>
                    <p className="rounded-[10px] border border-gray-100 bg-gray-50/80 px-4 py-3 text-sm leading-relaxed text-gray-600">
                      Note: The patient reported steady progress during the last consultation. Please review upcoming labs and
                      coordinate with the nursing team if any medication adjustments are needed.
                    </p>
                  </div>
                </div>
              </Card>

              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <Card className="p-6">
                  <h2 className="text-lg font-semibold text-gray-900">Medication Plan</h2>
                  <ul className="mt-4 space-y-3 text-sm text-gray-600">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#0d5ec1]" />
                      Continue current prescription and monitor for side effects. Add notes after each follow-up.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#0d5ec1]" />
                      Schedule lab work within the next 14 days to evaluate response to therapy.
                    </li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h2 className="text-lg font-semibold text-gray-900">Care Team & Next Steps</h2>
                  <ul className="mt-4 space-y-3 text-sm text-gray-600">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#0d5ec1]" />
                      Primary Physician: Dr. Abc (Internal Medicine).
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#0d5ec1]" />
                      Care Coordinator: Nurse Priya – shares weekly progress summaries.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#0d5ec1]" />
                      Next follow-up appointment: Confirm availability for the first week of November.
                    </li>
                  </ul>
                </Card>
              </div>

              <Card className="p-6">
                <h2 className="text-lg font-semibold text-gray-900">Clinical Timeline</h2>
                <div className="mt-4 grid grid-cols-1 gap-4 text-sm text-gray-600 md:grid-cols-2 xl:grid-cols-3">
                  <TimelineItem title="Recent Consultation" value="Discussed symptom control and lifestyle changes." />
                  <TimelineItem title="Lab Orders" value="CBC, lipid profile, fasting sugar – pending results." />
                  <TimelineItem title="Specialist Referrals" value="Dermatology review scheduled for next month." />
                  <TimelineItem title="Patient Notes" value="Patient reported improved energy levels and better sleep." />
                  <TimelineItem title="Follow-up" value="Plan telemedicine check-in in two weeks to review labs." />
                  <TimelineItem title="Documents" value="Radiology images and discharge summaries are available in the archive." />
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="text-lg font-semibold text-gray-900">Patient Files</h2>
                <div className="mt-4 space-y-3 text-sm text-gray-600">
                  <FileRow label="Lab Results - Oct 2025" type="PDF" />
                  <FileRow label="Prescription Summary - Sep 2025" type="PDF" />
                  <FileRow label="Radiology Imaging" type="DICOM" />
                  <FileRow label="Discharge Summary" type="PDF" />
                  <FileRow label="Lifestyle Recommendations" type="DOCX" />
                </div>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

function DetailField({ label, value }: { label: string; value: string }) {
  return (
    <p className="flex flex-col text-sm text-gray-600">
      <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">{label}</span>
      <span className="mt-1 text-sm font-medium text-gray-800">{value}</span>
    </p>
  );
}

function TimelineItem({ title, value }: { title: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 rounded-[10px] border border-gray-100 bg-gray-50/70 px-4 py-3">
      <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">{title}</span>
      <span className="text-sm text-gray-700">{value}</span>
    </div>
  );
}

function FileRow({ label, type }: { label: string; type: string }) {
  return (
    <div className="flex items-center justify-between rounded-[10px] border border-gray-100 bg-gray-50/70 px-4 py-3">
      <div className="flex flex-col">
        <span className="text-sm font-medium text-gray-800">{label}</span>
        <span className="text-xs uppercase tracking-wide text-gray-400">{type} • Secure storage</span>
      </div>
      <button
        type="button"
        className="rounded-full border border-gray-300 px-3 py-1 text-xs font-semibold text-gray-600 transition hover:bg-gray-100"
      >
        View file
      </button>
    </div>
  );
}
