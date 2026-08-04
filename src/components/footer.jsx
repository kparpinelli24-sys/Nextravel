import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer id="contato" className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h4 className="text-2xl font-bold mb-4">NovaTech</h4>

        <div className="flex justify-center gap-6 text-2xl mb-4">
          <FaInstagram className="hover:text-pink-400 transition cursor-pointer" />
          <FaLinkedin className="hover:text-blue-400 transition cursor-pointer" />
          <FaGithub className="hover:text-gray-400 transition cursor-pointer" />
        </div>

        <p className="text-gray-400">
          © 2026 NovaTech. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}