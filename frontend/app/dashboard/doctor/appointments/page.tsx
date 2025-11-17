import React from "react";
import { Sidebar, Card, Icon } from "../_components/ui";

// Appointments Page UI based on provided reference screenshot
export default function DoctorAppointmentsPage() {
  // Increase cards so content spans ~2+ viewport heights to force vertical scrolling
  const cards = Array.from({ length: 18 }).map(() => ({
    time: "10:00 AM - Sarah",
    reason: "Reason : Fever and cold",
    detail:
      "Check ups : some random stuffs like CT scan etc etc some random stuffs",
  }));

  return (
    <div className="h-screen overflow-hidden bg-gray-100/60">
      <div className="px-2 lg:px-4 py-2 lg:py-3 max-w-none h-full">
        <div className="flex gap-4 h-full">
          <Sidebar active="appointments" />

          <main className="flex-1 flex flex-col overflow-hidden">
            {/* Header */}
            <div className="flex items-start justify-between pr-2">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Upcoming Appointments</h1>
                <p className="mt-1 text-sm text-gray-500">Today : 22 October 2025</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-white/90 border border-gray-200 shadow-sm p-1">
                  <div className="flex gap-1">
                    <button className="rounded-full bg-sky-500 text-white text-sm px-3 py-1">Day</button>
                    <button className="rounded-full text-gray-700 text-sm px-3 py-1 hover:bg-gray-100">Week</button>
                    <button className="rounded-full text-gray-700 text-sm px-3 py-1 hover:bg-gray-100">Year</button>
                  </div>
                </div>
                <button aria-label="Notifications" className="rounded-full border border-gray-200 bg-white p-2 shadow-sm">
                  <Icon name="bell" className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Grid of appointment cards with a visible right-side scrollbar */}
            <div className="mt-4 flex-1 overflow-y-auto pe-3 scrollbar-thin-blue">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 min-w-[980px]">
                {cards.map((c, idx) => (
                  <Card key={idx} className="p-5">
                    <div className="font-semibold text-gray-900">{c.time}</div>
                    <div className="mt-2 text-sm text-gray-600">{c.reason}</div>
                    <div className="mt-2 text-sm text-gray-400">{c.detail} stuffs</div>
                    <div className="mt-4">
                      <button className="rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-white hover:bg-sky-600">View patients chart</button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
