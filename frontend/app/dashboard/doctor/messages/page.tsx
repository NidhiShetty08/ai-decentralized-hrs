import React from "react";
import { Sidebar, Card, Icon } from "../_components/ui";

export default function DoctorMessagesPage() {
  const items = Array.from({ length: 25 }).map((_, i) => ({
    title: "Severe headache and dizziness",
    preview:
      "Severe headache and dizziness Severe headache and dizziness Severe headache and dizziness Severe",
    time: "10:50 AM",
    unread: i % 3 === 0,
  }));

  return (
    <div className="h-screen overflow-hidden bg-gray-100/60">
      <div className="px-2 lg:px-4 py-2 lg:py-3 max-w-none h-full">
        <div className="flex gap-4 h-full">
          <Sidebar active="messages" />
          <main className="flex-1 flex flex-col overflow-hidden">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Messages / Inbox</h1>
                <p className="mt-1 text-sm text-gray-500">Today : 22 October 2025</p>
              </div>
              <button aria-label="Notifications" className="rounded-full border border-gray-200 bg-white p-2 shadow-sm">
                <Icon name="bell" className="h-6 w-6" />
              </button>
            </div>

            {/* Search and New Message */}
            <div className="mt-4 flex items-center justify-between">
              <div className="relative w-[640px] max-w-full">
                <input
                  className="w-full rounded-full border border-gray-200 bg-gray-100/70 py-2 pl-10 pr-10 text-sm placeholder:text-gray-400 focus:outline-none"
                  placeholder="Search"
                />
                <div className="absolute left-3 top-2.5 text-gray-400">
                  <Icon name="search" className="h-5 w-5" />
                </div>
              </div>
              <button className="rounded-full bg-sky-500 px-4 py-1.5 text-sm font-medium text-white hover:bg-sky-600 shadow-sm">+ New Message</button>
            </div>

            {/* List */}
            <div className="mt-4 flex-1 overflow-y-auto pe-3 scrollbar-thin-blue">
              <Card className="">
                <ul>
                  {items.map((m, idx) => (
                    <li key={idx} className="group">
                      <div className="flex items-start gap-3 px-6 py-4 border-b border-gray-200/70">
                        <span className={`mt-2 h-2.5 w-2.5 rounded-full ${m.unread ? 'bg-sky-600' : 'bg-gray-300'}`} />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <p className="font-semibold text-gray-900">{m.title}</p>
                            <span className="text-xs text-gray-500">{m.time}</span>
                          </div>
                          <p className="mt-1 text-xs text-gray-500 truncate">{m.preview}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
