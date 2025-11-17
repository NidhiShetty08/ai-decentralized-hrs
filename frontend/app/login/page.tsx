"use client";
import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

const SLIDER_LEFT = {
  patient: "0.25rem",
  doctor: "calc(50% + 0.25rem)",
};

type Role = "patient" | "doctor";

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState<Role>("patient");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showErrors, setShowErrors] = useState(false);

  const emailValue = email.trim();
  const passwordValue = password.trim();
  const canSubmit = emailValue.length > 0 && passwordValue.length > 0;
  const emailError = showErrors && emailValue.length === 0;
  const passwordError = showErrors && passwordValue.length === 0;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSubmit) {
      setShowErrors(true);
      return;
    }

    router.push(role === "doctor" ? "/dashboard/doctor" : "/dashboard/patient");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#e5e7eb] px-4">
      <div className="w-full max-w-md rounded-[40px] border border-white/60 bg-white/95 p-7 shadow-[0px_42px_120px_-60px_rgba(15,23,42,0.5)] backdrop-blur">
        <div className="relative mb-8">
          <div className="relative flex w-full items-center justify-between rounded-[36px] bg-[#f0f2f6] p-1">
            {/* Sliding highlight replicates the toggle in the mock */}
            <span
              className="absolute inset-y-1 w-[calc(50%-0.5rem)] rounded-[28px] bg-[#b8c4d6] shadow transition-all duration-300 ease-in-out"
              style={{ left: SLIDER_LEFT[role] }}
            />
            <button
              type="button"
              onClick={() => setRole("patient")}
              className={`relative z-10 w-1/2 rounded-[28px] px-4 py-2 text-base font-semibold transition ${
                role === "patient" ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Patient Login
            </button>
            <button
              type="button"
              onClick={() => setRole("doctor")}
              className={`relative z-10 w-1/2 rounded-[28px] px-4 py-2 text-base font-semibold transition ${
                role === "doctor" ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Doctor Login
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2 text-sm text-gray-500">
            <label className="block text-xs font-semibold uppercase tracking-wide text-gray-400">
              Email
            </label>
            <input
              type="email"
              placeholder="Demo@gmail.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className={`w-full rounded-[18px] border bg-white px-4 py-3 text-gray-700 shadow-sm focus:outline-none focus:ring-2 ${
                emailError
                  ? "border-red-400 focus:border-red-400 focus:ring-red-200"
                  : "border-gray-200 focus:border-[#9aa6b9] focus:ring-[#9aa6b9]/40"
              }`}
            />
            {emailError ? (
              <p className="text-xs font-medium text-red-500">Please enter your email.</p>
            ) : null}
          </div>

          <div className="space-y-2 text-sm text-gray-500">
            <label className="block text-xs font-semibold uppercase tracking-wide text-gray-400">
              Password
            </label>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className={`w-full rounded-[18px] border bg-white px-4 py-3 text-gray-700 shadow-sm focus:outline-none focus:ring-2 ${
                passwordError
                  ? "border-red-400 focus:border-red-400 focus:ring-red-200"
                  : "border-gray-200 focus:border-[#9aa6b9] focus:ring-[#9aa6b9]/40"
              }`}
            />
            {passwordError ? (
              <p className="text-xs font-medium text-red-500">Please enter your password.</p>
            ) : null}
            <button type="button" className="text-xs font-medium text-gray-500 hover:text-gray-700">
              Forgot Password ?
            </button>
          </div>

          <button
            type="submit"
            disabled={!canSubmit}
            className={`w-full rounded-full px-4 py-3 text-sm font-semibold uppercase tracking-wider shadow transition ${
              canSubmit
                ? "bg-[#b4becc] text-gray-800 hover:bg-[#a5b0c0]"
                : "cursor-not-allowed bg-gray-300 text-gray-500"
            }`}
          >
            Login
          </button>

          <button
            type="button"
            onClick={() => router.push(role === "doctor" ? "/dashboard/doctor" : "/dashboard/patient")}
            className="flex w-full items-center justify-center gap-2 rounded-full border border-[#b4becc] px-4 py-3 text-sm font-semibold text-gray-700 shadow hover:bg-gray-50"
          >
            <span className="text-lg">G</span>
            Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
}
