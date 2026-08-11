const testimonials = [
  {
    name: 'Mariana Costa',
    comment:
      'Nossa viagem para as Maldivas foi perfeita. A equipe cuidou de cada detalhe.',
    photo:
      'https://plus.unsplash.com/premium_photo-1664537980500-30bb5ec506e1?q=80&w=1170&auto=format&fit=crop'
  },
  {
    name: 'Rafael Mendes',
    comment:
      'Excelente atendimento e suporte durante toda a viagem. Recomendo muito!',
    photo:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop'
  },
  {
    name: 'Fernanda Oliveira',
    comment:
      'Conseguimos um pacote incrível para a Suíça com um ótimo custo-benefício.',
    photo:
      'https://images.unsplash.com/photo-1613063074391-12ed77ac5a13?q=80&w=736&auto=format&fit=crop'
  }
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#07131F]">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-4xl md:text-5xl font-bold text-center mb-14 text-white">
          O que nossos
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-emerald-300">
            {" "}viajantes dizem
          </span>
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                bg-white/5
                border border-white/10
                backdrop-blur-xl
                rounded-3xl
                p-8
                hover:-translate-y-2
                hover:border-cyan-300/30
                transition-all duration-300
              "
            >
              {/* Foto maior e centralizada */}
              <div className="flex justify-center mb-6">
                <img
                  src={item.photo}
                  alt={item.name}
                  className="
                    w-28 h-28
                    rounded-full
                    object-cover
                    border-4 border-cyan-300/40
                    shadow-lg
                  "
                />
              </div>

              <h4 className="font-semibold text-2xl text-white text-center mb-4">
                {item.name}
              </h4>

              <p className="text-slate-300 leading-relaxed text-center italic">
                “{item.comment}”
              </p>

              <div className="flex justify-center mt-6 text-cyan-300 text-xl">
                ★★★★★
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}