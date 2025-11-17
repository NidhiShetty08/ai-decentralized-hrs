import { notFound } from "next/navigation";
import Link from "next/link";
import { Sidebar, Card, Icon } from "../../_components/ui";
import { getGrantedPatientBySlug, GRANTED_PATIENTS, slugify } from "../shared-data";

export default function SharedDataReportPage({ params }: { params: { slug: string } }) {
  const patient = getGrantedPatientBySlug(params.slug);
  if (!patient) {
    notFound();
  }
  const isReportsOnly = patient.access.toLowerCase().includes("reports");

  return (
    <div className="h-screen overflow-hidden bg-[#eef6f0]">
      <div className="h-full px-2 py-1 lg:px-3 lg:py-2">
        <div className="flex h-full gap-3">
          <Sidebar active="granted" />
          <main className="flex min-h-0 flex-1 flex-col overflow-hidden">
            {/* Header */}
            <div className="flex items-start justify-between pr-2">
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 overflow-hidden rounded-full border border-white/80 shadow-md">
                  <img src={patient.avatar} alt={patient.name} className="h-full w-full object-cover" />
                </div>
                <div>
                  <h1 className="text-[26px] sm:text-[32px] font-semibold tracking-tight text-gray-900">{patient.name}</h1>
                  <p className="mt-1 text-sm text-gray-600">Access: <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold text-white ${patient.accessColor}`}>{patient.access}</span></p>
                  <p className="text-xs text-gray-500">Granted on {patient.grantedDate}</p>
                </div>
              </div>
              <div className="pt-2 flex gap-2">
                <Link
                  href="/dashboard/doctor/granted-access"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-100"
                >
                  <Icon name="arrow-left" className="h-4 w-4" />
                  Back
                </Link>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="mt-4 flex-1 overflow-y-auto pe-3 pb-6 space-y-4">
              {/* Summary Card */}
              <Card className="p-6 flex flex-col gap-4">
                <h2 className="text-lg font-semibold text-gray-900">Shared Data Scope</h2>
                <p className="text-sm leading-relaxed text-gray-600">
                  {patient.shared}.
                  {isReportsOnly ? (
                    <>
                      {' '}This patient granted <span className="font-medium text-gray-800">reports-only</span> visibility; only attached report files are shown below. Lab trend visualizations and other clinical modules are intentionally omitted.
                    </>
                  ) : (
                    <> This page consolidates clinically relevant report artifacts the patient granted visibility for. Protected health data out of scope remains redacted.</>
                  )}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
                  {[
                    { label: "Gender", value: patient.gender },
                    { label: "Age", value: patient.age.toString() },
                    { label: "Report Count", value: "12" },
                    { label: "Latest Update", value: patient.grantedDate },
                  ].map((item) => (
                    <div key={item.label} className="rounded-[10px] border border-gray-100 bg-gray-50/70 px-4 py-3">
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-400">{item.label}</p>
                      <p className="mt-1 text-sm font-medium text-gray-800">{item.value}</p>
                    </div>
                  ))}
                </div>
              </Card>

              {!isReportsOnly && (
                <Card className="p-6">
                  <h2 className="text-lg font-semibold text-gray-900">Lab Results</h2>
                  <div className="mt-4 divide-y divide-gray-100 border border-gray-100 rounded-xl bg-white/70">
                    {labResults.map((lab) => (
                      <div key={lab.name} className="flex items-center justify-between px-4 py-3 text-sm">
                        <div className="flex flex-col">
                          <span className="font-medium text-gray-800">{lab.name}</span>
                          <span className="text-[11px] uppercase tracking-wide text-gray-400">{lab.category}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm font-semibold text-gray-700">{lab.value}</span>
                          <span className="text-xs text-gray-500">Range {lab.range}</span>
                          <span className={`text-xs font-semibold ${lab.flag === "High" ? "text-red-600" : lab.flag === "Low" ? "text-amber-600" : "text-green-600"}`}>{lab.flag}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              )}

              

              {/* Shared Files */}
              <Card className="p-6">
                <h2 className="text-lg font-semibold text-gray-900">Shared Files</h2>
                <div className="mt-4 space-y-3">
                  {sharedFiles.map((f) => (
                    <div key={f.label} className="flex items-center justify-between rounded-lg border border-gray-100 bg-gray-50/70 px-4 py-3">
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-800">{f.label}</span>
                        <span className="text-[11px] uppercase tracking-wide text-gray-400">{f.type}</span>
                      </div>
                      <button className="rounded-full border border-gray-300 bg-white px-3 py-1 text-xs font-medium text-gray-600 hover:bg-gray-100">Open</button>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

const labResults = [
  { name: "Hemoglobin", value: "13.9 g/dL", range: "12-15", flag: "Normal", category: "CBC" },
  { name: "Fasting Glucose", value: "108 mg/dL", range: "70-100", flag: "High", category: "Metabolic" },
  { name: "LDL Cholesterol", value: "94 mg/dL", range: "<100", flag: "Normal", category: "Lipid" },
  { name: "Vitamin D", value: "27 ng/mL", range: "30-100", flag: "Low", category: "Nutrient" },
];

const sharedFiles = [
  { label: "ECG Report - Oct", type: "PDF" },
  { label: "Lab Panel - Oct", type: "PDF" },
  { label: "Imaging Set - Chest", type: "DICOM" },
  { label: "Prescription Summary", type: "PDF" },
];

