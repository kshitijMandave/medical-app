"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Blur */}
      <div className="absolute -top-40 -left-20 h-96 w-96 rounded-full bg-blue-100 blur-[120px] opacity-70" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-100 blur-[140px] opacity-60" />

      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-20 px-6 py-20 lg:flex-row lg:py-28">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-medium text-blue-700 shadow-sm">
            🩺 Trusted by 10,000+ Patients
          </div>

          {/* Heading */}
          <h1 className="mt-7 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Book Your
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {" "}
              Doctor Appointment{" "}
            </span>
            Online
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-lg text-lg leading-8 text-gray-600">
            Connect with trusted doctors, schedule appointments in seconds, and
            receive quality healthcare anytime, anywhere. Fast, secure, and
            hassle-free.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-full bg-blue-600 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-blue-700">
              Book Appointment
            </button>

            <button className="rounded-full border border-gray-300 bg-white px-8 py-4 font-semibold text-gray-700 transition-all duration-300 hover:border-blue-500 hover:text-blue-600 hover:shadow-lg">
              Find Doctors
            </button>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-5">
            <div className="rounded-2xl bg-blue-50 p-5 text-center shadow-sm">
              <h3 className="text-3xl font-bold text-blue-600">500+</h3>
              <p className="mt-1 text-sm text-gray-600">Verified Doctors</p>
            </div>

            <div className="rounded-2xl bg-blue-50 p-5 text-center shadow-sm">
              <h3 className="text-3xl font-bold text-blue-600">10K+</h3>
              <p className="mt-1 text-sm text-gray-600">Happy Patients</p>
            </div>

            <div className="rounded-2xl bg-blue-50 p-5 text-center shadow-sm">
              <h3 className="text-3xl font-bold text-blue-600">24/7</h3>
              <p className="mt-1 text-sm text-gray-600">Online Support</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex w-full justify-center lg:w-1/2">
          {/* Glow */}
          <div className="absolute h-[450px] w-[450px] rounded-full bg-blue-200 blur-[100px] opacity-40" />

          {/* Floating Rating */}
          <div className="absolute left-0 top-10 z-20 rounded-2xl bg-white px-5 py-4 shadow-2xl">
            <p className="text-yellow-500 text-lg">⭐⭐⭐⭐⭐</p>
            <p className="font-semibold text-gray-800">4.9 Rating</p>
            <p className="text-sm text-gray-500">5,000+ Reviews</p>
          </div>

          {/* Floating Appointment */}
          <div className="absolute bottom-10 right-0 z-20 rounded-2xl bg-white px-5 py-4 shadow-2xl">
            <p className="font-semibold text-green-600">
              ✔ Appointment Confirmed
            </p>
            <p className="text-sm text-gray-500">Booked in under 30 sec</p>
          </div>

          {/* Image Card */}
          <div className="relative overflow-hidden rounded-[40px] border border-blue-100 bg-white p-6 shadow-[0_25px_70px_rgba(0,0,0,0.12)]">
            <Image
              src="/doctor.png"
              alt="Doctor"
              width={600}
              height={650}
              priority
              className="h-auto w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
