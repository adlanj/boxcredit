"use client";

import React from "react";

export default function Header() {
  return (
    <header
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: "url('/header.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 pt-32 flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-0">
        {/* HERO (left) */}
        <div className="flex-1">
          {/* NOTE: el navbar fue separado, este header solo contiene el hero */}
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight text-white">
            Tu préstamo al <span className="text-orange-400">instante</span>
          </h1>
          <p className="text-gray-200 text-base sm:text-lg mt-6 max-w-xl">
            Obtén hasta $10,000 de forma inmediata sin complicaciones.
            <br />
            Sin papeleos, 100% digital y seguro.
          </p>

          <div className="mt-8 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 inline-flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-gray-300" />
              <span className="w-4 h-4 rounded-full bg-gray-300" />
              <span className="w-4 h-4 rounded-full bg-gray-300" />
            </div>
            <span className="text-sm text-white">1000K+ — Tu préstamo hoy</span>
          </div>

          <button
            id="apply"
            className="mt-6 sm:mt-10 bg-orange-500 hover:bg-orange-600 text-white text-xl font-semibold px-8 sm:px-12 py-3 sm:py-4 rounded-full flex items-center gap-3 transition-all transform hover:scale-105 active:scale-95 shadow-lg"
          >
            SOLICITAR AHORA →
          </button>
        </div>

        {/* TARJETA DERECHA */}
        <div className="w-full lg:w-[420px] flex-shrink-0">
          <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-3xl px-6 sm:px-10 py-8 sm:py-10 relative lg:absolute lg:right-20 lg:top-[50%] lg:-translate-y-1/2">
            <button className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 sm:w-14 h-12 sm:h-14 bg-orange-500 rounded-full text-white text-2xl flex items-center justify-center shadow-lg transition-transform hover:scale-125 active:scale-95">
              ↘
            </button>

            <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-tight">
              Préstamos 100% <br /> en línea
            </h2>

            <button className="mt-6 sm:mt-10 bg-orange-500 hover:bg-orange-600 w-full py-2.5 sm:py-3 rounded-full text-lg font-semibold text-white flex items-center justify-center gap-2 transition transform hover:scale-105 active:scale-95">
              DESCARGA LA APP ↗
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
