"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const steps = [
  {
    number: 1,
    title: "Regístrate",
    text: "Completa el formulario en 2 minutos.",
  },
  {
    number: 2,
    title: "Verifica",
    text: "Confirma tu identidad rápidamente.",
  },
  {
    number: 3,
    title: "Solicita",
    text: "Elige el monto y plazo que necesitas.",
  },
  {
    number: 4,
    title: "Recibe",
    text: "Obtén tu dinero en tu cuenta bancaria.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="relative w-full py-24 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/bg.jpg')" }} // ⬅️ ASÍ COMO EL HEADER
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16">
          ¿Cómo funciona?
        </h2>

        {/* LINEA ANIMADA */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={controls}
          variants={{
            visible: { scaleX: 1, transition: { duration: 1.4, ease: "easeOut" } },
          }}
          className="origin-left w-full h-1 bg-orange-500 rounded-full mb-16"
        />

        {/* PASOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    delay: 0.3 + i * 0.2,
                    ease: "easeOut",
                  },
                },
              }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 flex items-center justify-center rounded-full bg-orange-500 shadow-xl text-white text-3xl font-bold border-4 border-orange-300">
                {step.number}
              </div>

              <h3 className="text-xl font-semibold mt-6 text-orange-400">
                {step.title}
              </h3>
              <p className="mt-3 text-white/90 text-sm max-w-[200px]">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
