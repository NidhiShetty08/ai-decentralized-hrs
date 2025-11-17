import React from "react";
import { Sidebar, Card, Icon } from "../_components/ui";

// Schedule Page UI based on provided reference screenshot
export default function DoctorSchedulePage() {
  const rows = [
    { time: "10:00 AM", desc: "Consultation of patient A", done: true },
    { time: "10:30 AM", desc: "Consultation of patient A", done: true },
    { time: "11:00 AM", desc: "Rounds - 3rd Floor", done: true },
    { time: "11:00 AM", desc: "Meeting in Room 5A", done: true },
    { time: "12:00 PM", desc: "Lunch Break", done: false },
    { time: "3:15 PM", desc: "Consultation of patient A", done: false },
    { time: "3:45 PM", desc: "Meeting in Room 5A", done: false },
    { time: "5:00 PM", desc: "Rounds - 6th Floor", done: false },
    { time: "6:00 PM", desc: "Null", done: false },
  ];

  return (
    <div className="h-screen overflow-hidden bg-gray-100/60">
      <div className="px-2 lg:px-4 py-2 lg:py-3 max-w-none h-full">
        <div className="flex gap-4 h-full">
          <Sidebar active="schedule" />
          <main className="flex-1 flex flex-col overflow-hidden">
            <div className="flex items-start justify-between pr-2">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Today’s Schedule</h1>
                <p className="mt-1 text-sm text-gray-500">Today : 22 October 2025</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="rounded-full bg-sky-500 px-4 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-sky-600">Edit Chart</button>
                <button aria-label="Notifications" className="rounded-full border border-gray-200 bg-white p-2 shadow-sm">
                  <Icon name="bell" className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="mt-3 flex flex-1 gap-6 overflow-hidden">
              {/* Schedule table */}
              <div className="flex-1 overflow-auto rounded-3xl shadow-sm border border-gray-200 bg-white/90">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="h-0">
                      <th className="p-0" />
                      <th className="p-0" />
                      <th className="p-0" />
                      <th className="p-0" />
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row, idx) => (
                      <tr key={idx} className="border-b border-gray-200 last:border-b-0">
                        {/* Left vertical blue bar only on first row mimicking screenshot */}
                        <td className="align-top relative w-2">
                          {idx === 0 && (
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-sky-600 rounded-full" />
                          )}
                        </td>
                        <td className="py-3 pl-3 pr-2 font-semibold text-gray-900 whitespace-nowrap w-28">{row.time}</td>
                        <td className="py-3 pr-4 text-gray-700">{row.desc}</td>
                        <td className="py-3 pr-4 text-right">
                          <div className="flex items-center justify-end gap-4">
                            <button className="rounded-full bg-gray-200 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-300">View Chart</button>
                            <div className="h-5 w-5 flex items-center justify-center">
                              {row.done ? (
                                <Icon name="check" className="h-5 w-5" />
                              ) : (
                                <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500" />
                              )}
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Right side cards */}
              <div className="w-[300px] flex flex-col gap-4 pr-1">
                <Card className="p-4">
                  <div className="font-semibold text-gray-900">Urgent tasks & messages</div>
                  <div className="mt-2 text-xs text-gray-600 space-y-1">
                    <p>From Nurse abc: Lab results of patient A</p>
                  </div>
                  <div className="mt-4">
                    <button className="rounded-full bg-sky-500 px-4 py-1.5 text-sm font-medium text-white hover:bg-sky-600">View all messages</button>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="font-semibold text-gray-900">Reminder from To-do list</div>
                  <div className="mt-2 text-xs text-gray-600 space-y-1">
                    <p>From Nurse abc: Lab results of patient A</p>
                  </div>
                  <div className="mt-4">
                    <button className="rounded-full bg-sky-500 px-4 py-1.5 text-sm font-medium text-white hover:bg-sky-600">View List</button>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="font-semibold text-gray-900">Urgent tasks & messages</div>
                  <div className="mt-2 text-xs text-gray-600 space-y-1">
                    <p>From Nurse abc: Lab results of patient A</p>
                  </div>
                  <div className="mt-4">
                    <button className="rounded-full bg-sky-500 px-4 py-1.5 text-sm font-medium text-white hover:bg-sky-600">View all messages</button>
                  </div>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
