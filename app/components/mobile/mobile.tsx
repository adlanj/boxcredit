"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MobileSection() {
  return (
    <section className="w-full min-h-[60vh] flex flex-col md:flex-row items-center justify-center gap-4 px-4 py-10 bg-gray-50">
      
      {/* LEFT SIDE (Imagen del mismo tamaño que la burbuja) */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center w-full md:w-auto order-1 md:order-2"
      >
        <div className="relative w-full max-w-2xl h-full flex items-stretch">
          <div className="relative w-full rounded-[30px] overflow-hidden">
            <Image
              src="/mobile-placeholder.gif"
              alt="Mobile App"
              width={800}
              height={1200}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </motion.div>

      {/* RIGHT SIDE (Texto / Burbuja) */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-[30px] shadow-md p-10 w-full max-w-2xl order-2 md:order-1 flex flex-col"
      >
        <div className="w-14 h-14 bg-orange-500 rounded-full mb-6"></div>

        <h2 className="text-6xl font-semibold text-gray-900 mb-5 leading-tight">
          Todo desde tu celular
        </h2>

        <p className="text-gray-600 text-xl">
          Gestiona tu préstamo desde cualquier lugar con nuestra app móvil.
        </p>

        <div className="mt-10 flex justify-end">
          <button className="w-16 h-16 flex items-center justify-center bg-orange-500 text-white rounded-full text-3xl">
            ↗
          </button>
        </div>
      </motion.div>
    </section>
  );
}
