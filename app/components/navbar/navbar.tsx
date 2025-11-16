"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [openMobile, setOpenMobile] = useState(false);
  const [openRating, setOpenRating] = useState(false);
  const [rating, setRating] = useState(0);
  const [thanks, setThanks] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll para agregar fondo a la barra
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function openRatingModal() {
    setRating(0);
    setThanks(false);
    setOpenRating(true);
  }

  function closeRatingModal() {
    setOpenRating(false);
    setTimeout(() => {
      setRating(0);
      setThanks(false);
    }, 300);
  }

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-black/60 backdrop-blur-xl py-3" : "bg-transparent py-5"}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <img src="/logo.gif" className="h-8" alt="LOGO" />
            <span className="text-white text-2xl font-semibold">BOX CREDIT</span>
          </div>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex items-center gap-8 text-white font-medium">
            <button onClick={openRatingModal}>Califícanos ⭐</button>
            <a href="#apply" className="hover:text-orange-400 transition">Solicitar</a>
            <a href="#app" className="hover:text-orange-400 transition">App</a>
          </div>

          {/* BOTÓN HAMBURGUESA */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setOpenMobile(!openMobile)}
          >
            ☰
          </button>
        </div>

        {/* MENU MOBILE */}
        {openMobile && (
          <div className="md:hidden bg-black/80 backdrop-blur-xl mt-4 py-6 px-6 space-y-4">
            <button
              className="w-full text-left text-white text-lg"
              onClick={openRatingModal}
            >
              Califícanos ⭐
            </button>

            <a
              href="#apply"
              className="block text-white text-lg"
              onClick={() => setOpenMobile(false)}
            >
              Solicitar
            </a>

            <a
              href="#app"
              className="block text-white text-lg"
              onClick={() => setOpenMobile(false)}
            >
              App
            </a>
          </div>
        )}
      </nav>

      {/* MODAL DE CALIFICACIÓN */}
      {openRating && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[999]">
          <div className="bg-white p-8 rounded-2xl w-[90%] max-w-[400px] shadow-xl">

            {!thanks ? (
              <>
                <h2 className="text-2xl font-semibold text-center mb-3">
                  Califica tu experiencia
                </h2>

                <div className="flex justify-center gap-3 my-5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span
                      key={s}
                      onClick={() => setRating(s)}
                      className={`text-4xl cursor-pointer ${
                        s <= rating ? "text-yellow-400" : "text-gray-400"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                <button
                  disabled={rating === 0}
                  onClick={() => setThanks(true)}
                  className={`w-full py-3 rounded-full text-white font-semibold transition ${
                    rating === 0
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-orange-500 hover:bg-orange-600"
                  }`}
                >
                  Continuar →
                </button>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-semibold text-center mb-3">
                  ¡Gracias! 🙌
                </h2>
                <p className="text-center mb-6">Tu calificación nos ayuda a mejorar.</p>

                <button
                  onClick={closeRatingModal}
                  className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full"
                >
                  Cerrar
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
