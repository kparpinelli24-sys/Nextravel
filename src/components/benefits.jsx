import { FaRocket, FaShieldAlt, FaChartLine } from 'react-icons/fa'

export default function Benefits() {
  const items = [
    {
      icon: <FaRocket className="text-4xl text-[#F97316]" />,
      title: 'Alta performance',
      desc: 'Sites rápidos, modernos e otimizados para oferecer a melhor experiência aos seus clientes.'
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#3B82F6]" />,
      title: 'Segurança avançada',
      desc: 'Proteção completa para seus dados, infraestrutura e aplicações digitais.'
    },
    {
      icon: <FaChartLine className="text-4xl text-[#8B5CF6]" />,
      title: 'Resultados reais',
      desc: 'Estratégias focadas em crescimento, conversão e fortalecimento da sua marca.'
    }
  ]

  return (
    <section id="beneficios" className="py-24 bg-[#090312]">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-4xl md:text-5xl font-bold text-center mb-14 text-white">
          Por que escolher a
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#F97316]">
            {" "}NovaTech
          </span>
          ?
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-[#120B24] border border-[#2A1E45] rounded-3xl p-8 shadow-2xl hover:-translate-y-2 hover:border-[#8B5CF6] transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#1B1333] border border-[#2A1E45] flex items-center justify-center mb-6">
                {item.icon}
              </div>

              <h4 className="text-2xl font-semibold mb-4 text-white">
                {item.title}
              </h4>

              <p className="text-gray-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}