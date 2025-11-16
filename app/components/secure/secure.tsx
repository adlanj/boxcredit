"use client";

export default function Secure() {
  return (
    <section className="w-full bg-white py-8 flex flex-col items-center text-center px-4">

      {/* ICONO */}
      <img
        src="/icon-secure.png"
        alt="Icono de seguridad"
        className="w-20 h-20 mb-4 select-none"
      />

      {/* TÍTULO SUPER GRANDE */}
      <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-orange-500 leading-tight mb-4">
        100% Seguro
      </h2>

      {/* DESCRIPCIÓN SUPER GRANDE */}
      <p className="text-xl sm:text-3xl md:text-4xl text-black max-w-3xl leading-snug font-medium">
        Tu información está protegida con los más altos estándares de seguridad.
      </p>

    </section>
  );
}
