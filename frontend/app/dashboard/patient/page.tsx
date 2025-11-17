import { Sidebar, Card, Icon } from "./_components/ui";

const REQUEST_ITEMS = [
  "Skin scan reports",
  "Prescription (12/08)",
  "Prescription (12/09)",
];

const ACCESS_DETAILS = [
  { label: "Hospital :", value: "City General Hospital" },
  { label: "Address :", value: "City Bus stand, Udupi" },
  { label: "Doctor :", value: "Dr. Kishore Kumar (Dermatologist)" },
  { label: "Requested Information :", value: "Skin scan reports, Old Prescription reports" },
  { label: "Access until :", value: "28 October 2025" },
];

const SHARED_ACCESS = [
  { doctor: "Dr. ABC", granted: "05 October 2025", expires: "27 October 2025" },
  { doctor: "Dr. ABC", granted: "15 October 2025", expires: "27 October 2025" },
  { doctor: "Dr. ABC", granted: "20 October 2025", expires: "27 October 2025" },
  { doctor: "Dr. ABC", granted: "21 October 2025", expires: "27 October 2025" },
];

const ADDITIONAL_INFO = [
  { label: "Blood Group", value: "AB +ve" },
  { label: "Height", value: "5'7\"" },
  { label: "Weight", value: "65 Kg" },
];

export default function PatientDashboardPage() {
  return (
    <div className="h-screen overflow-hidden bg-gray-100/60">
      <div className="h-full px-2 py-2 lg:px-4 lg:py-3">
        <div className="flex h-full gap-4">
          <Sidebar active="dashboard" />

          <main className="flex min-h-0 flex-1 flex-col overflow-hidden">
            <div className="flex items-start justify-between pr-2">
              <div>
                <h1 className="text-[32px] sm:text-[40px] font-bold tracking-tight text-gray-900">
                  Welcome Patient A !
                </h1>
                <p className="mt-1 text-base text-gray-500">Today : 22 October 2025</p>
              </div>
              <button
                aria-label="Notifications"
                className="rounded-full border border-white/70 bg-white p-3 shadow-[0px_20px_45px_-25px_rgba(30,41,59,0.35)]"
              >
                <Icon name="bell" className="h-6 w-6 text-gray-500" />
              </button>
            </div>

            <section className="mt-4 flex-1 overflow-auto pr-2 pb-6">
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
                <Card className="lg:col-span-8 flex flex-col gap-4 px-6 py-5">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between gap-4">
                        <h2 className="text-lg font-semibold text-gray-900">Access Requests</h2>
                        <span className="text-sm font-semibold text-gray-500">21 October 2025</span>
                      </div>
                      <div className="space-y-1 text-sm text-gray-600">
                        {ACCESS_DETAILS.map((item) => (
                          <div key={item.label} className="flex flex-wrap gap-1">
                            <span className="font-medium text-gray-700">{item.label}</span>
                            <span>{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="w-full max-w-[220px] rounded-[26px] bg-gray-50/90 px-4 py-3 shadow-inner lg:text-right">
                      <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                        Requested Information
                      </div>
                      <ul className="mt-3 flex flex-col gap-2 text-sm text-gray-600">
                        {REQUEST_ITEMS.map((label) => (
                          <li
                            key={label}
                            className="flex items-center justify-between gap-2 rounded-2xl border border-gray-100 bg-white/80 px-3 py-2 shadow-sm"
                          >
                            <span className="flex items-center gap-2 text-left text-gray-700">
                              <span className="grid h-7 w-7 place-items-center rounded-full bg-gray-100">
                                <Icon name="folder" className="h-4 w-4 text-gray-500" />
                              </span>
                              {label}
                            </span>
                            <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-50">
                              <Icon name="check" className="h-4 w-4" />
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-end">
                    <button className="w-full rounded-full bg-[#1678ff] px-6 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0f63d6] sm:w-auto">
                      Accept
                    </button>
                    <button className="w-full rounded-full border border-gray-200 px-6 py-2 text-sm font-semibold text-gray-600 shadow-sm transition hover:bg-gray-50 sm:w-auto">
                      Reject
                    </button>
                  </div>
                </Card>

                <Card className="lg:col-span-4 flex flex-col items-center gap-4 px-6 py-6 text-sm text-gray-600">
                  <div className="h-20 w-20 rounded-full bg-gray-200" />
                  <div className="w-full space-y-2 text-center">
                    <div className="text-base font-semibold text-gray-800">Full Name</div>
                    <p>Date of Birth : 25 October 2002</p>
                    <p>Gender : Female</p>
                    <p>Contact : +91 1234567890</p>
                    <p>Email : Patient@gmail.com</p>
                    <p>Address : Name of the house/building with area mentioned etc</p>
                  </div>
                  <button className="rounded-full bg-[#1678ff] px-6 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0f63d6]">
                    Edit Profile
                  </button>
                </Card>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-12">
                <Card className="lg:col-span-8 flex flex-col gap-4 px-6 py-5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h2 className="text-lg font-semibold text-gray-900">Current Shared Access</h2>
                  </div>
                  <div className="overflow-hidden rounded-2xl border border-gray-100">
                    <table className="min-w-full divide-y divide-gray-100 text-sm text-gray-600">
                      <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
                        <tr>
                          <th className="px-4 py-3 text-left font-medium">Doctor/Clinic</th>
                          <th className="px-4 py-3 text-left font-medium">Granted On</th>
                          <th className="px-4 py-3 text-left font-medium">Expires On</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 bg-white">
                        {SHARED_ACCESS.map((entry) => (
                          <tr key={`${entry.doctor}-${entry.granted}`}>
                            <td className="px-4 py-3 text-gray-700">{entry.doctor}</td>
                            <td className="px-4 py-3">{entry.granted}</td>
                            <td className="px-4 py-3">{entry.expires}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="flex justify-end">
                    <button className="rounded-full bg-[#1678ff] px-6 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0f63d6]">
                      View more
                    </button>
                  </div>
                </Card>

                <Card className="lg:col-span-4 flex flex-col justify-between gap-4 px-6 py-5 text-sm text-gray-600">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">Additional Information</h2>
                    <div className="mt-4 space-y-2">
                      {ADDITIONAL_INFO.map((item) => (
                        <div key={item.label} className="flex flex-wrap gap-1">
                          <span className="font-medium text-gray-700">{item.label} :</span>
                          <span>{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button className="rounded-full bg-[#1678ff] px-6 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0f63d6]">
                      View more
                    </button>
                  </div>
                </Card>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
