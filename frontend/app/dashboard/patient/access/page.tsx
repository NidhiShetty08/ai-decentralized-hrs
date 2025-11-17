"use client";
import React from "react";
import { Card } from "../_components/ui"; // reuse patient card
import { SHARED_ACCESS, SharedAccessEntry, formatDate } from "./access-data";

function statusColor(status: SharedAccessEntry["status"]) {
  switch (status) {
    case "active":
      return "bg-emerald-100 text-emerald-700 border-emerald-200";
    case "pending":
      return "bg-amber-100 text-amber-700 border-amber-200";
    case "revoked":
      return "bg-rose-100 text-rose-700 border-rose-200";
    case "expired":
      return "bg-gray-200 text-gray-600 border-gray-300";
    default:
      return "bg-gray-100 text-gray-600 border-gray-200";
  }
}

export default function PatientAccessPage() {
  const [query, setQuery] = React.useState("");
  const filtered = React.useMemo(() => {
    if (!query.trim()) return SHARED_ACCESS;
    const q = query.toLowerCase();
    return SHARED_ACCESS.filter((e) =>
      [e.providerName, e.organization, e.scope, e.status].some((v) => v.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold tracking-wide text-gray-800">Access Sharing</h1>
      </div>

      <Card className="p-5">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex-1 min-w-[220px]">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search providers, org, scope, status"
              className="w-full rounded-full border border-gray-200 bg-gray-50 py-2 px-4 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1f9bff]"
            />
          </div>
          <button
            type="button"
            className="rounded-full bg-[#1678ff] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#0f63d6]"
          >
            New Share
          </button>
        </div>
        <p className="mt-3 text-xs text-gray-500">Manage who can view parts of your health record. Revoke access anytime.</p>
      </Card>

      <Card className="p-0 overflow-hidden">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#eef5ff] text-gray-600">
              <th className="py-3 pl-5 pr-3 text-left font-medium">Provider</th>
              <th className="px-3 py-3 text-left font-medium">Organization</th>
              <th className="px-3 py-3 text-left font-medium">Scope</th>
              <th className="px-3 py-3 text-left font-medium">Shared On</th>
              <th className="px-3 py-3 text-left font-medium">Status</th>
              <th className="px-3 py-3 text-left font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((entry) => (
              <tr key={entry.id} className="border-t border-gray-100 hover:bg-[#f5f9ff] transition">
                <td className="py-3 pl-5 pr-3">
                  <div className="flex flex-col">
                    <span className="font-medium text-gray-800">{entry.providerName}</span>
                    <span className="text-xs text-gray-500">ID: {entry.id}</span>
                  </div>
                </td>
                <td className="px-3 py-3 text-gray-700">{entry.organization}</td>
                <td className="px-3 py-3">
                  <span className="inline-block rounded-full bg-[#e5f2ff] px-3 py-1 text-xs font-medium text-[#0d5ec1]">{entry.scope}</span>
                </td>
                <td className="px-3 py-3 text-gray-600">{formatDate(entry.sharedOn)}</td>
                <td className="px-3 py-3">
                  <span className={`inline-block rounded-full border px-3 py-1 text-xs font-medium ${statusColor(entry.status)}`}>{entry.status}</span>
                </td>
                <td className="px-3 py-3">
                  <div className="flex items-center gap-2">
                    {entry.status === "active" ? (
                      <button
                        type="button"
                        className="rounded-full border border-gray-300 bg-white px-3 py-1 text-xs font-medium text-gray-600 hover:bg-gray-50"
                      >
                        Revoke
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="rounded-full border border-gray-300 bg-white px-3 py-1 text-xs font-medium text-gray-600 hover:bg-gray-50"
                      >
                        Renew
                      </button>
                    )}
                    <button
                      type="button"
                      className="rounded-full border border-[#1678ff] bg-[#1678ff] px-3 py-1 text-xs font-medium text-white hover:bg-[#0f63d6]"
                    >
                      View
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={6} className="py-10 text-center text-sm text-gray-500">
                  No shared access entries match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Card>

      <Card className="p-5">
        <h2 className="text-sm font-semibold text-gray-700">How sharing works</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-gray-600">
          <li>Only authorized providers can view data within the scope you grant.</li>
          <li>You can revoke an active share instantly; expired shares require renewal.</li>
          <li>"Reports Only" restricts access to uploaded PDF / imaging reports.</li>
          <li>"Medications Only" includes current and historical prescriptions.</li>
        </ul>
      </Card>
    </div>
  );
}
