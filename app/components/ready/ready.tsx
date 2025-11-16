"use client";
import { ArrowRight } from "lucide-react";

export default function ReadySection() {
  return (
    <section className="w-full bg-[#ff9500] py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-white text-4xl md:text-6xl font-bold mb-4">
          ¿Listo para comenzar?
        </h2>

        <p className="text-white/90 text-lg md:text-xl mb-10">
          Obtén tu préstamo hoy mismo y cumple tus objetivos financieros
        </p>

        <a
          href="#solicitar"
          className="inline-flex items-center gap-3 bg-black text-white px-10 py-4 rounded-full text-lg md:text-xl font-semibold hover:opacity-80 transition-all"
        >
          SOLICITAR AHORA
          <ArrowRight size={26} />
        </a>

        <div className="mt-10 text-white/90 text-base md:text-lg">
          <span>Sin compromiso</span> •{" "}
          <span>Respuesta inmediata</span> •{" "}
          <span>Soporte 24/7</span>
        </div>
      </div>
    </section>
  );
}
