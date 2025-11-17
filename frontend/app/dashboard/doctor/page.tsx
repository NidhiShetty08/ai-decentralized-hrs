import { Sidebar, Card, Icon } from "./_components/ui";

export default function DoctorDashboardPage() {
  return (
    <div className="h-screen overflow-hidden bg-gray-100/60">
      <div className="px-2 lg:px-4 py-2 lg:py-3 max-w-none h-full">
        <div className="flex gap-4 h-full">
          {/* Sidebar */}
          <Sidebar active="dashboard" />

          {/* Main Content */}
          <main className="flex-1 flex flex-col overflow-hidden min-h-0">
            {/* Header */}
            <div className="flex items-start justify-between pr-2">
              <div>
                <h1 className="text-[36px] sm:text-[42px] font-bold tracking-tight text-gray-900">
                  Welcome Dr. abc !
                </h1>
                <p className="mt-1 text-base text-gray-500">
                  Today : 22 October 2025
                </p>
              </div>
              <button
                aria-label="Notifications"
                className="rounded-full border border-white/70 bg-white p-3 shadow-[0px_20px_45px_-25px_rgba(30,41,59,0.35)]"
              >
                <Icon name="bell" className="h-6 w-6 text-gray-500" />
              </button>
            </div>

            {/* Upcoming Appointments */}
            <section className="mt-4 flex-1 overflow-auto pr-2 pb-6">
              <h2 className="text-lg font-semibold text-gray-900">
                Upcoming Appointments
              </h2>

              {/* Top Row */}
              <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-12">
                {/* Consultation */}
                {/* Consultation */}
                <Card className="lg:col-span-4 flex flex-col gap-1.5 px-6 pt-3 pb-1.5 rounded-2xl shadow-md min-h-[120px]">
                <div className="space-y-1">
                    <div className="text-lg font-semibold text-gray-900">
                    10:00 AM - Consultation
                    </div>
                    <div className="text-sm text-gray-500">
                    Reason : Fever and cold
                    </div>
                    <p className="text-sm leading-snug text-gray-400">
                    Check ups : some random stuffs like CT scan etc etc some random stuffs like CT scan etc
                    </p>
                </div>
                <button className="mt-1 self-start rounded-full bg-[#1678ff] px-5 py-1 text-sm font-semibold text-white hover:bg-[#0f63d6]">
                    View patients chart
                </button>
                </Card>


                {/* Meeting */}
                <Card className="lg:col-span-4 flex flex-col gap-2 px-6 pt-4 pb-3 rounded-2xl shadow-md">
                  <div className="space-y-1">
                    <div className="text-lg font-semibold text-gray-900">
                      11:00 AM - Meeting
                    </div>
                    <div className="text-sm text-gray-500">
                      Reason : Fever and cold
                    </div>
                    <p className="text-sm leading-snug text-gray-400">
                      Check ups : some random stuffs like CT scan etc etc some
                      random stuffs like CT scan etc
                    </p>
                  </div>
                  <button className="mt-1 self-start rounded-full bg-[#1678ff] px-5 py-1 text-sm font-semibold text-white hover:bg-[#0f63d6]">
                    View patients chart
                  </button>
                </Card>

                {/* Profile */}
                <Card className="lg:col-span-4 flex flex-col gap-2 px-6 pt-4 pb-3 rounded-2xl shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="h-16 w-16 rounded-full bg-gray-200" />
                  </div>
                  <div className="mt-2 space-y-1 text-sm text-gray-600">
                    <div className="font-medium text-gray-700">Full Name</div>
                    <p>Contact : +91 1234567890</p>
                    <p>Email : Patient@gmail.com</p>
                    <p>Specialization : MBBS, M.D</p>
                    <p>Medical License Number : MLN-9876543</p>
                    <p>Affiliated Hospital/Clinic : City General Hospital</p>
                  </div>
                  <button className="mt-1 self-start rounded-full bg-[#1678ff] px-5 py-1 text-sm font-semibold text-white hover:bg-[#0f63d6]">
                    Edit Profile
                  </button>
                </Card>
              </div>

              {/* Second Row */}
              <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-12 lg:auto-rows-min">
                {/* Urgent Tasks */}
                <Card className="lg:col-span-8 flex flex-col gap-2 px-6 py-4 rounded-2xl shadow-md">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Urgent tasks &amp; messages
                    </h3>
                    <div className="mt-2 space-y-1 text-sm text-gray-500">
                      <p>
                        <span className="text-gray-700">From Nurse abc:</span>{" "}
                        Lab results of patient A
                      </p>
                      <p className="text-gray-400">
                        From Nurse abc: Lab results of patient A
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button className="rounded-full bg-[#1678ff] px-6 py-1.5 text-sm font-semibold text-white hover:bg-[#0f63d6]">
                      View all messages
                    </button>
                  </div>
                </Card>

                {/* Reminder */}
                <Card className="lg:col-span-4 flex flex-col gap-2 px-6 py-4 rounded-2xl shadow-md">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      REMINDER - 10:30 AM
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      Consultation of patient A
                    </p>
                    <ul className="mt-2 list-disc pl-5 text-sm text-gray-400">
                      <li>Suffering from high fever</li>
                    </ul>
                  </div>
                  <button className="mt-1 self-start rounded-full bg-[#1678ff] px-6 py-1.5 text-sm font-semibold text-white hover:bg-[#0f63d6]">
                    View my schedule
                  </button>
                </Card>

                {/* Granted Access */}
                <Card className="lg:col-span-8 lg:col-start-1 flex flex-col gap-2 px-6 py-4 rounded-2xl shadow-md">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Granted Access
                    </h3>
                    <div className="mt-2 space-y-1 text-sm text-gray-500">
                      <p>From Patient A: Lab results of patient A</p>
                      <p className="text-gray-400">
                        From Patient B: CT Scan of patient B
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button className="rounded-full bg-[#1678ff] px-6 py-1.5 text-sm font-semibold text-white hover:bg-[#0f63d6]">
                      View all access
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
