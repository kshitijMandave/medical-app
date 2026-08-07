"use client";

import Image from "next/image";
import TransitionalText from "./TransitionalText";

export default function Hero() {
  const TEXTS = [
    "Complete Dental Care",
    "Root Canal Treatment",
    "Wisdom Tooth Care",
    "Restorative Dentistry",
    "Preventive Dental Care",
    "Comfortable Dental Treatment",
  ];

  return (
    <section className="relative overflow-hidden bg-[#f7fbff]">
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-200/30 blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[550px] w-[550px] rounded-full bg-cyan-200/30 blur-[130px]" />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          {/* ================= LEFT CONTENT ================= */}

          <div className="max-w-2xl">
            {/* Trust Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
              Trusted Dental Care in Sakoli
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-[62px]">
              Kapgate
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Dental Clinic
              </span>
            </h1>

            {/* Animated specialty */}
            <div className="mt-7 flex min-h-[42px] items-center gap-3 text-lg font-semibold text-slate-700 sm:text-xl">
              <span className="h-2.5 w-2.5 rounded-full bg-blue-600 shadow-sm shadow-blue-500/40" />

              <TransitionalText TEXTS={TEXTS} />
            </div>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Professional dental care focused on your comfort, oral health, and
              confident smile. Book your consultation at Kapgate Dental Clinic
              in Sakoli.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {/* Appointment */}
              <a
                href="/appointment"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/25"
              >
                Book an Appointment
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              {/* Call */}
              <a
                href="tel:+919420684424"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600 hover:shadow-md"
              >
                <span>☎</span>
                Call Clinic
              </a>
            </div>

            {/* ================= TRUST INFORMATION ================= */}

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5 border-t border-slate-200 pt-7">
              {/* Experience */}
              <div>
                <p className="text-2xl font-bold text-slate-900">12+</p>

                <p className="mt-1 text-xs font-medium text-slate-500">
                  Years of Experience
                </p>
              </div>

              <div className="hidden h-10 w-px bg-slate-200 sm:block" />

              {/* Rating */}
              <div>
                <p className="text-2xl font-bold text-slate-900">4.6 ★</p>

                <p className="mt-1 text-xs font-medium text-slate-500">
                  Patient Rating
                </p>
              </div>

              <div className="hidden h-10 w-px bg-slate-200 sm:block" />

              {/* Location */}
              <div>
                <p className="text-2xl font-bold text-slate-900">Sakoli</p>

                <p className="mt-1 text-xs font-medium text-slate-500">
                  Bhandara, Maharashtra
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT CONTENT ================= */}

          <div className="relative mx-auto flex w-full max-w-xl justify-center lg:justify-end">
            {/* Background glow */}
            <div className="absolute right-0 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-blue-100/70 blur-3xl" />

            {/* Decorative ring */}
            <div className="absolute right-2 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full border border-blue-200/60" />

            {/* Doctor Image */}
            <div className="relative z-10">
              <div className="relative overflow-hidden rounded-[36px] border border-white bg-gradient-to-b from-blue-50 to-white p-3 shadow-[0_30px_80px_rgba(15,23,42,0.14)]">
                <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-b from-blue-100/70 to-white">
                  <Image
                    src="/doctor.png"
                    alt="Dentist at Kapgate Dental Clinic"
                    width={600}
                    height={650}
                    priority
                    className="h-auto w-full max-w-[470px] object-contain"
                  />

                  {/* Bottom fade */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white/40 to-transparent" />
                </div>
              </div>

              {/* ================= EXPERIENCE CARD ================= */}

              <div className="absolute -left-8 top-12 hidden w-56 rounded-2xl border border-white bg-white/95 p-4 shadow-[0_15px_40px_rgba(15,23,42,0.12)] backdrop-blur sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-lg">
                    🦷
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      BDS Dentist
                    </p>

                    <p className="mt-0.5 text-xs text-slate-500">
                      12+ years experience
                    </p>
                  </div>
                </div>
              </div>

              {/* ================= RATING CARD ================= */}

              <div className="absolute -bottom-5 -right-6 hidden w-60 rounded-2xl border border-white bg-white/95 p-4 shadow-[0_15px_40px_rgba(15,23,42,0.14)] backdrop-blur sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl">
                    ★
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      4.6 / 5 Rating
                    </p>

                    <p className="mt-0.5 text-xs text-slate-500">
                      Patient reviews
                    </p>
                  </div>
                </div>
              </div>

              {/* ================= FLOATING ICONS ================= */}

              <div className="absolute -right-5 top-20 flex h-12 w-12 items-center justify-center rounded-2xl border border-white bg-white text-xl shadow-lg">
                ✨
              </div>

              <div className="absolute -left-4 bottom-28 flex h-12 w-12 items-center justify-center rounded-2xl border border-white bg-white text-xl shadow-lg">
                🦷
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
    </section>
  );
}
