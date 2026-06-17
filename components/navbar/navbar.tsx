
function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <p className="navbar-title text-purple-600 font-semibold">KRITSADA.M</p>

        <div className="space-x-6">
          <a href="#about" className="text-gray-800 hover:text-gray-600">About</a>
          <a href="#skills" className="text-gray-800 hover:text-gray-600">Skills</a>
          <a href="#projects" className="text-gray-800 hover:text-gray-600">Projects</a>
          <a href="#contact" className="text-gray-800 hover:text-gray-600">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar