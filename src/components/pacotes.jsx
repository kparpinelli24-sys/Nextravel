const packages = [
  {
    name: 'Atenas - Grécia',
    img: 'https://plus.unsplash.com/premium_photo-1661911756283-fd0fbefee201?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: '7 dias em resort all inclusive com até 30% de desconto.'
  },
  {
    name: 'Suíça dos Alpes',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600',
    desc: 'Pacote completo com hospedagem, passeios e transporte.'
  },
  {
    name: 'Japão em Primavera',
    img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600',
    desc: 'Aproveite a temporada das cerejeiras com condições especiais.'
  },
  {
    name: 'Viagem do ano',
    img: 'https://images.unsplash.com/photo-1620938092396-b6380afc6a7d?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Destino surpresa com ofertas exclusivas e vagas limitadas.'
  }
]

export default function Services() {
  return (
    <section id="pacotes" className="py-24 bg-[#08111C] relative overflow-hidden">
      <div className="absolute right-0 top-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px]"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <h3 className="text-4xl md:text-5xl font-bold text-center mb-14 text-white">
          Pacotes da sua viagem
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-emerald-300">
            {" "}Está aqui!
          </span>
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((item, index) => (
            <div
              key={index}
              className="
                bg-white/5
                border border-white/10
                backdrop-blur-xl
                rounded-3xl
                overflow-hidden
                hover:-translate-y-2
                hover:border-cyan-300/30
                transition-all duration-300
              "
            >
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-48 w-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h4 className="text-2xl font-semibold mb-3 text-white">
                  {item.name}
                </h4>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  {item.desc}
                </p>

                <button
                  className="
                    w-full py-3 rounded-xl font-semibold
                    bg-transparent
                    border border-white/20
                    text-white
                    backdrop-blur-md
                    hover:bg-white/10
                    transition duration-300
                  "
                >
                  Ver oferta
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}