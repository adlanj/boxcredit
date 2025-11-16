export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-14 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo + descripción */}
        <div>
          <h3 className="text-2xl font-bold mb-3">Box Credit</h3>
          <p className="text-white/70 text-sm leading-relaxed">
            Soluciones financieras rápidas, seguras y a tu alcance. 
            Estamos comprometidos con apoyarte en cada paso.
          </p>
        </div>

        {/* Enlaces */}
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-lg mb-2">Enlaces</h4>
          <a href="#inicio" className="text-white/70 hover:text-white">Inicio</a>
          <a href="#beneficios" className="text-white/70 hover:text-white">Beneficios</a>
          <a href="#requisitos" className="text-white/70 hover:text-white">Requisitos</a>
          <a href="#solicitar" className="text-white/70 hover:text-white">Solicitar Préstamo</a>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="font-semibold text-lg mb-2">Contacto</h4>
          <p className="text-white/70 text-sm">WhatsApp: +593 99 999 9999</p>
          <p className="text-white/70 text-sm">Correo: soporte@boxcredit.com</p>
          <p className="text-white/70 text-sm">Atención 24/7</p>
        </div>
      </div>

      <div className="mt-10 border-t border-white/20 pt-6 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} Box Credit — Todos los derechos reservados.
      </div>
    </footer>
  );
}
