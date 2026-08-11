import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer id="contato" className="bg-[#050B12] text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h4 className="text-3xl font-bold mb-3 text-white">Nextravel</h4>

        <p className="text-slate-400 mb-6">
          Descubra o mundo com experiências únicas e roteiros inesquecíveis.
        </p>

        <div className="flex justify-center gap-6 text-2xl mb-6">
          <FaInstagram className="hover:text-cyan-300 transition cursor-pointer" />
          <FaFacebook className="hover:text-blue-300 transition cursor-pointer" />
          <FaLinkedin className="hover:text-cyan-300 transition cursor-pointer" />
        </div>

        <p className="text-slate-500 text-sm">
          © 2026 Nextravel. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}