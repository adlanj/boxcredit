"use client";

export default function TestimonialsCarousel() {
  const testimonials = [
    {
      name: "María López",
      user: "@marialpz",
      text: [
        "BOX CREDIT me salvó cuando necesitaba dinero urgente.",
        "El proceso fue súper rápido y sin burocracia.",
        "En menos de 10 minutos tenía el préstamo aprobado."
      ],
      tags: ["rapidez", "confianza"],
      time: "10:15 15/08/25",
      bg: "bg-white",
      textColor: "text-black",
    },
    {
      name: "Carlos Méndez",
      user: "@carlosm",
      text: [
        "Nunca pensé que pedir un préstamo fuera tan fácil.",
        "Todo desde el celular, sin papeleo.",
        "Cuotas claras, sin letras pequeñas."
      ],
      tags: ["fácil", "transparente"],
      time: "18:45 20/08/25",
      bg: "bg-[#111827]",
      textColor: "text-white",
    },
    {
      name: "Ana Torres",
      user: "@anatorres",
      text: [
        "BOX CREDIT me ayudó con un gasto médico inesperado.",
        "No tuve que hacer trámites complicados.",
        "Lo recomiendo totalmente."
      ],
      tags: ["seguridad", "recomendado"],
      time: "09:00 25/08/25",
      bg: "bg-white",
      textColor: "text-black",
    },
    {
      name: "Kevin Ortiz",
      user: "@kevortiz",
      text: [
        "Me sorprendió lo rápido del depósito.",
        "En cuestión de minutos ya tenía el dinero.",
        "Excelente alternativa para emergencias."
      ],
      tags: ["rápido", "efectivo"],
      time: "12:30 02/09/25",
      bg: "bg-[#111827]",
      textColor: "text-white",
    },
    {
      name: "Valeria Rojas",
      user: "@valerjrz",
      text: [
        "BOX CREDIT tiene una atención impecable.",
        "Me guiaron en todo el proceso.",
        "Muy recomendados si buscas transparencia."
      ],
      tags: ["atención", "transparente"],
      time: "17:05 10/09/25",
      bg: "bg-white",
      textColor: "text-black",
    },
    {
      name: "Luis Herrera",
      user: "@luisherrera",
      text: [
        "Necesitaba cubrir un pago urgente y fue perfecto.",
        "El sistema es intuitivo y muy claro.",
        "Definitivamente volveré a usar BOX CREDIT."
      ],
      tags: ["intuitivo", "rápido"],
      time: "08:20 18/09/25",
      bg: "bg-[#111827]",
      textColor: "text-white",
    },
  ];

  return (
    <section className="py-20 bg-[#F5F5F5] overflow-hidden">
      <h2 className="text-center text-4xl font-bold text-yellow-500 mb-14">
        Lo que dicen nuestros clientes
      </h2>

      {/* CONTENEDOR DEL CARRUSEL */}
      <div className="relative w-full">
        <div
          className="flex gap-6 animate-scroll-slow"
          style={{ width: `${testimonials.length * 380}px` }}
        >
          {/* DUPLICAMOS TESTIMONIOS PARA EFECTO INFINITO */}
          {[...testimonials, ...testimonials].map((t, index) => (
            <div
              key={index}
              className={`min-w-[350px] max-w-[350px] p-8 rounded-2xl shadow-md ${t.bg} ${t.textColor}`}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 bg-black rounded-full"></div>
                <div>
                  <p className="font-semibold text-lg">{t.name}</p>
                  <p className="text-sm text-blue-400">{t.user}</p>
                </div>
              </div>

              <div className="space-y-2 text-sm mb-5">
                {t.text.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 text-xs mb-3">
                {t.tags.map((tag, i) => (
                  <span key={i} className="text-blue-400">#{tag}</span>
                ))}
              </div>

              <p className="text-[11px] opacity-60">{t.time}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ANIMACIÓN CSS */}
      <style jsx>{`
        .animate-scroll-slow {
          animation: scroll 30s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
