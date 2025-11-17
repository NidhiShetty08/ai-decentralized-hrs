"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sidebar, Card, Icon } from "../_components/ui";
import { GRANTED_PATIENTS, slugify } from "./shared-data";

export default function GrantedAccessPage() {
  const [search, setSearch] = useState("");

  const grantedPatients = GRANTED_PATIENTS;

  const filtered = grantedPatients.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="h-screen overflow-hidden bg-[#f5faf6]">
      <div className="flex h-full gap-4 px-4 py-4">
        
        {/* Sidebar */}
        <Sidebar active="granted" />

        {/* Main Section */}
        <main className="flex-1 overflow-auto rounded-3xl bg-white px-10 py-8 shadow-[0px_35px_80px_-60px_rgba(15,23,42,0.45)]">
          
          {/* Page Header */}
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-[#0f172a]">
                Granted Access
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                Patients who have shared records with you
              </p>
            </div>

            <button className="rounded-full border border-gray-200 bg-white p-3 shadow-sm">
              <Icon name="bell" className="h-6 w-6 text-gray-700" />
            </button>
          </div>

          {/* Search */}
          <div className="mt-6">
            <div className="relative w-full max-w-md">
              <input
                className="w-full rounded-full border border-gray-200 bg-gray-100 py-2 pl-12 pr-4 text-sm shadow-sm focus:outline-none"
                placeholder="Search patient by name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Icon
                name="search"
                className="absolute left-4 top-2.5 h-5 w-5 text-gray-400"
              />
            </div>
          </div>

          {/* Cards Section */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((p, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                {/* Avatar + Name */}
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200"></div>
                  <div>
                    <p className="text-lg font-semibold text-gray-900">{p.name}</p>
                    <p className="text-sm text-gray-500">
                      Age {p.age} • {p.gender}
                    </p>
                  </div>
                </div>

                {/* Access Badge */}
                <div className="mt-4">
                  <span
                    className={`rounded-full px-4 py-1 text-xs font-semibold text-white ${p.accessColor}`}
                  >
                    {p.access}
                  </span>
                </div>

                {/* Granted Info */}
                <p className="mt-2 text-sm text-gray-500">
                  Granted on {p.grantedDate}
                </p>

                {/* Shared Info */}
                <p className="mt-4 text-sm font-medium text-gray-900">
                  Shared data
                </p>
                <p className="mt-1 text-sm text-gray-600">{p.shared}</p>

                {/* Button */}
                <Link
                  href={`/dashboard/doctor/granted-access/${slugify(p.name)}`}
                  className="mt-6 block w-full rounded-full border border-blue-500 px-4 py-2 text-center text-sm font-medium text-blue-600 transition hover:bg-blue-50"
                >
                  VIEW SHARED DATA →
                </Link>
              </div>
            ))}

            {/* No Results */}
            {filtered.length === 0 && (
              <p className="col-span-full mt-10 text-center text-gray-400">
                No matching patients found.
              </p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
