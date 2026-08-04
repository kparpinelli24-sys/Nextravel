const services = [
  {
    name: 'Criação de Sites',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600',
    desc: 'Desenvolvimento de sites profissionais, rápidos e totalmente responsivos.'
  },
  {
    name: 'Marketing Digital',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600',
    desc: 'Campanhas inteligentes para aumentar sua visibilidade e suas vendas.'
  },
  {
    name: 'SEO',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600',
    desc: 'Otimização para mecanismos de busca e crescimento orgânico.'
  },
  {
    name: 'Gestão de Redes',
    img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600',
    desc: 'Conteúdo estratégico para fortalecer a presença digital da sua empresa.'
  }
]

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-[#0B0616] relative overflow-hidden">

      <div className="absolute right-0 top-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[140px]"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        <h3 className="text-4xl md:text-5xl font-bold text-center mb-14">
          Nossos
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-purple-400 to-blue-400">
            {" "}serviços
          </span>
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                bg-white/5
                border border-white/10
                backdrop-blur-xl
                rounded-3xl
                overflow-hidden
                hover:-translate-y-2
                hover:border-orange-400/30
                hover:shadow-[0_0_40px_rgba(249,115,22,0.18)]
                transition-all
                duration-300
              "
            >
              <div className="overflow-hidden">
                <img
                  src={service.img}
                  alt={service.name}
                  className="h-48 w-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h4 className="text-2xl font-semibold mb-3 text-white">
                  {service.name}
                </h4>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  {service.desc}
                </p>

                <button
                  className="
                    w-full
                    py-3
                    rounded-xl
                    font-semibold
                    text-white
                    bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500
                    hover:opacity-90
                    hover:shadow-[0_0_25px_rgba(249,115,22,0.35)]
                    transition
                    duration-300
                  "
                >
                  Saiba mais
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}