import { FaGlobeAmericas, FaPlaneDeparture, FaRegSmile } from 'react-icons/fa'

export default function Benefits() {
  const items = [
    {
      icon: <FaGlobeAmericas className="text-4xl text-cyan-300" />,
      title: 'Destinos exclusivos',
      desc: 'Selecionamos destinos nacionais e internacionais com experiências únicas para todos os estilos de viajantes.'
    },
    {
      icon: <FaPlaneDeparture className="text-4xl text-blue-300" />,
      title: 'Planejamento completo',
      desc: 'Cuidamos de passagens, hospedagem, passeios e suporte durante toda a sua viagem.'
    },
    {
      icon: <FaRegSmile className="text-4xl text-emerald-300" />,
      title: 'Experiências inesquecíveis',
      desc: 'Roteiros personalizados para casais, famílias e grupos, com atendimento especializado.'
    }
  ]

  return (
    <section id="destinos" className="py-24 bg-[#07131F]">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-4xl md:text-5xl font-bold text-center mb-14 text-white">
          Por que viajar com a
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-emerald-300">
            {" "}Nextravel ?
          </span>
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="
                bg-white/5
                border border-white/10
                backdrop-blur-xl
                rounded-3xl
                p-8
                hover:-translate-y-2
                hover:border-cyan-300/40
                transition-all duration-300
              "
            >
              <div className="
                w-16 h-16 rounded-2xl
                bg-white/5
                border border-white/10
                flex items-center justify-center mb-6
              ">
                {item.icon}
              </div>

              <h4 className="text-2xl font-semibold mb-4 text-white">
                {item.title}
              </h4>

              <p className="text-slate-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}