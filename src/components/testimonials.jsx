const testimonials = [
  {
    name: 'Ana Souza',
    comment: 'Meu faturamento aumentou muito após o novo site.',
    photo: 'https://i.pravatar.cc/100?img=1'
  },
  {
    name: 'Carlos Lima',
    comment: 'Equipe muito profissional e atendimento excelente.',
    photo: 'https://i.pravatar.cc/100?img=2'
  },
  {
    name: 'Juliana Rocha',
    comment: 'Recomendo para qualquer empresa que queira crescer.',
    photo: 'https://i.pravatar.cc/100?img=3'
  }
]

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-4xl font-bold text-center mb-12">
          O que nossos clientes dizem
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-lg">
              <img
                src={item.photo}
                alt={item.name}
                className="w-16 h-16 rounded-full mb-4"
              />

              <h4 className="font-semibold text-lg">{item.name}</h4>
              <p className="text-gray-600 mt-3">{item.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}