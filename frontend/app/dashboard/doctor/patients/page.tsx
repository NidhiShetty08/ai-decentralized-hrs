import React from "react";
import { Sidebar, Card, Icon } from "../_components/ui";

export default function DoctorPatientsPage() {
  const rows = Array.from({ length: 20 }).map((_, i) => ({
    name: "Full Name",
    gender: "Female",
    age: 25,
    address: "Udupi",
    date: "22 Oct 2025",
    diagnosis: "Fever , Cold",
  }));

  return (
    <div className="h-screen overflow-hidden bg-gray-100/60">
      <div className="px-2 lg:px-4 py-2 lg:py-3 max-w-none h-full">
        <div className="flex gap-4 h-full">
          <Sidebar active="patients" />
          <main className="flex-1 flex flex-col overflow-hidden">
            {/* Header */}
            <div className="flex items-start justify-between pr-2">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Patient Lists</h1>
                <p className="mt-1 text-sm text-gray-500">Today : 22 October 2025</p>
              </div>
              <button aria-label="Notifications" className="rounded-full border border-gray-200 bg-white p-2 shadow-sm">
                <Icon name="bell" className="h-6 w-6" />
              </button>
            </div>

            {/* Filters Row */}
            <div className="mt-3 flex items-center justify-between gap-4 pr-2">
              <div className="flex items-center gap-2">
                <button className="rounded-full bg-white/90 border border-gray-200 shadow-sm px-4 py-1.5 text-sm">Apr 1, 2025</button>
                <div className="rounded-full bg-white/90 border border-gray-200 shadow-sm p-1">
                  <div className="flex gap-1">
                    <button className="rounded-full bg-sky-500 text-white text-sm px-3 py-1">Day</button>
                    <button className="rounded-full text-gray-700 text-sm px-3 py-1 hover:bg-gray-100">Week</button>
                    <button className="rounded-full text-gray-700 text-sm px-3 py-1 hover:bg-gray-100">Year</button>
                  </div>
                </div>
              </div>
              <div className="flex-1 max-w-lg">
                <div className="relative">
                  <input
                    className="w-full rounded-full border border-gray-200 bg-gray-100/70 py-2 pl-10 pr-10 text-sm placeholder:text-gray-400 focus:outline-none"
                    placeholder="Search"
                  />
                  <div className="absolute left-3 top-2.5 text-gray-400">
                    <Icon name="search" className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="mt-4 flex-1 overflow-y-auto pe-3 scrollbar-thin-blue">
              <Card className="overflow-hidden">
                <table className="w-full text-sm border-separate border-spacing-0">
                  <thead>
                    <tr className="bg-white/70">
                      <th className="text-left px-6 py-3 border-b border-gray-200">Patient‘s Name</th>
                      <th className="text-left px-6 py-3 border-b border-gray-200">Gender</th>
                      <th className="text-left px-6 py-3 border-b border-gray-200">Age</th>
                      <th className="text-left px-6 py-3 border-b border-gray-200">Address</th>
                      <th className="text-left px-6 py-3 border-b border-gray-200">Date</th>
                      <th className="text-left px-6 py-3 border-b border-gray-200">Diagnosis</th>
                      <th className="text-left px-6 py-3 border-b border-gray-200">Chart</th>
                      <th className="text-left px-6 py-3 border-b border-gray-200">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((r, idx) => (
                      <tr key={idx} className="border-b border-gray-100 last:border-b-0">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <span className="h-9 w-9 rounded-full bg-sky-500 inline-flex items-center justify-center text-white font-semibold text-xs">P</span>
                            <span className="text-gray-800">{r.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-700">{r.gender}</td>
                        <td className="px-6 py-4 text-gray-700">{r.age}</td>
                        <td className="px-6 py-4 text-gray-700">{r.address}</td>
                        <td className="px-6 py-4 text-gray-700">{r.date}</td>
                        <td className="px-6 py-4 text-gray-700">{r.diagnosis}</td>
                        <td className="px-6 py-4">
                          <button className="rounded-full bg-gray-200 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-300">View</button>
                        </td>
                        <td className="px-6 py-4">
                          <button className="rounded-full bg-gray-200 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-300">View</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
