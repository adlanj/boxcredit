"use client";

export default function About() {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-14">

      {/* TEXTOS IZQUIERDA */}
      <div className="max-w-xl">
        <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-black mb-10">
          ¿Por qué elegir <br />
          <span className="text-orange-500">BOX CREDIT?</span>
        </h2>

        <div className="mb-14">
          <h3 className="text-5xl lg:text-6xl font-semibold text-black">3K+</h3>
          <p className="text-gray-600 mt-2 leading-relaxed text-xl">
            Clientes <br /> Satisfechos
          </p>
        </div>

        <p className="text-2xl lg:text-3xl font-medium text-black leading-snug max-w-sm">
          La mejor experiencia en préstamos en línea
        </p>
      </div>

      {/* GIF + TARJETA */}
      <div className="flex flex-col items-center justify-center">

        {/* Contenedor del GIF para que no se deforme */}
        <div className="w-[300px] lg:w-[380px] h-auto flex items-center justify-center">
          <img
            src="/gif-boxcredit.gif"
            alt="Gif animado"
            className="w-full object-contain select-none"
          />
        </div>

        {/* TARJETA */}
        <div className="mt-10 bg-white rounded-[30px] border border-gray-200 px-10 py-10 shadow-lg w-full max-w-[380px]">
          <div className="flex items-start gap-5">

            {/* ICONO */}
            <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white text-3xl">📝</span>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-black">
                Rápido y Simple
              </h3>
              <p className="text-gray-600 mt-3 text-lg leading-relaxed">
                Recibe tu dinero en menos de 24 horas. Proceso 100% digital.
              </p>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
