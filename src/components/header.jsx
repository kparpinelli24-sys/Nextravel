export default function Header() {
  return (
<header className="fixed top-0 left-0 w-full z-50">
  <div className="
    max-w-7xl mx-auto mt-4
    px-6 py-4
    rounded-2xl
    bg-white/5
    backdrop-blur-xl
    border border-white/10
    flex justify-between items-center
  ">

    <h1 className="text-2xl font-bold text-white">NovaTech</h1>

    <nav className="hidden md:flex gap-8 text-slate-300">
      <a href="#inicio" className="hover:text-white transition">Início</a>
      <a href="#beneficios" className="hover:text-white transition">Benefícios</a>
      <a href="#servicos" className="hover:text-white transition">Serviços</a>
      <a href="#contato" className="hover:text-white transition">Contato</a>
    </nav>

    <button className="
      px-5 py-2 rounded-xl
      bg-gradient-to-r from-orange-500 to-purple-500
      text-white
      hover:shadow-[0_0_25px_rgba(249,115,22,0.4)]
      transition
    ">
      Solicitar orçamento
    </button>

  </div>
</header>
  )}