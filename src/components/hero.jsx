export default function Hero() {
  return (
    <section
      id="inicio"
      className="pt-32 pb-24 text-white relative overflow-hidden bg-[#07131F]"
    >
      
      <div className="absolute -left-32 top-20 w-80 h-80 bg-blue-700/25 rounded-full blur-[120px]" />

      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-emerald-700/20 rounded-full blur-[140px]" />

      <div className="absolute left-1/2 bottom-0 w-[400px] h-[300px] bg-cyan-600/15 rounded-full blur-[120px] -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span
            className="inline-block px-4 py-2 rounded-full
            bg-white/10 border border-white/20
            backdrop-blur-md text-sm mb-6"
          >
            ✦ Agência de viagens premium
          </span>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Descubra destinos
            <span
              className="text-transparent bg-clip-text
              bg-gradient-to-r from-cyan-300 via-blue-300 to-emerald-300"
            >
              {" "}inesquecíveis
            </span>
          </h2>

          <p className="text-lg text-slate-300 mb-8 max-w-xl">
            Planejamos viagens completas com roteiros exclusivos,
            hospedagens selecionadas e experiências únicas para você
            explorar o mundo com tranquilidade.
          </p>

          <button
            className="
              px-6 py-3 rounded-xl font-semibold
              bg-transparent
              border border-white/20
              text-white
              backdrop-blur-md
              hover:bg-white/10
              hover:scale-105
              transition duration-300
            "
          >
            Começar agora
          </button>
        </div>

        <div
          className="
            rounded-3xl overflow-hidden
            border border-white/10
            bg-white/5
            backdrop-blur-xl
            shadow-[0_0_60px_rgba(6,182,212,0.12)]
          "
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1661515901973-f84b14ca958a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Destino de viagem"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}