export default function Hero() {
  return (
<section
  id="inicio"
  className="pt-32 pb-24 text-white relative overflow-hidden
             bg-[#090312]"
>
  
  <div className="absolute -left-32 top-20 w-80 h-80 bg-orange-500/30 rounded-full blur-[120px]" />

 
  <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[140px]" />


  <div className="absolute left-1/2 bottom-0 w-[400px] h-[300px] bg-blue-500/20 rounded-full blur-[120px] -translate-x-1/2" />

  <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

    <div>
      <span className="inline-block px-4 py-2 rounded-full
                             bg-white/10 border border-white/20
                             backdrop-blur-md text-sm mb-6">
        ✦ Agência Digital Premium
      </span>

      <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
        Transforme sua
        <span className="text-transparent bg-clip-text
                               bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400">
          {" "}presença digital
        </span>
      </h2>

      <p className="text-lg text-slate-300 mb-8 max-w-xl">
        Criamos experiências digitais modernas com design premium,
        alta performance e estratégias inteligentes para acelerar
        o crescimento da sua empresa.
      </p>

      <button className="
        px-6 py-3 rounded-xl font-semibold
        bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500
        hover:scale-105 transition duration-300
        shadow-[0_0_30px_rgba(249,115,22,0.35)]
      ">
        Começar agora
      </button>
    </div>

    <div className="
      rounded-3xl overflow-hidden
      border border-white/10
      bg-white/5
      backdrop-blur-xl
      shadow-[0_0_60px_rgba(109,40,217,0.25)]
    ">
      <img
        src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=700"
        alt="Equipe"
        className="w-full h-full object-cover"
      />
    </div>

  </div>
</section>
  )
}