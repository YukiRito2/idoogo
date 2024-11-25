import { FaRegUser, FaShoppingCart, FaHeadphonesAlt } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import LogoId from "../../assets/LogoId.png"; // Importa la imagen del logo

const Navbar = () => {
  return (
    <header className="h-[156px] flex flex-col">
      {/* Barra superior */}
      <div className="bg-pink-primary text-white text-center py-2 text-sm font-bold">
        <span>OBTÉN ENVÍO GRATIS POR UNA COMPRA MAYOR A S/ 300</span>
      </div>

      {/* Barra principal */}
      <div className="bg-purple-primary h-[96px] flex items-center justify-center">
        <div className="max-w-screen-2xl w-full px-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={LogoId} alt="IDOOGO Logo" className="h-10" />
          </div>

          {/* Barra de búsqueda */}
          <div className="flex items-center bg-white border-2 border-purple-primary rounded-lg overflow-hidden w-[60%] h-[50px]">
            {/* Dropdown */}
            <select className="p-3 bg-gray-200 border-r-2 border-purple-primary text-sm font-bold text-gray-600 outline-none">
              <option value="Lenovo">Lenovo</option>
              <option value="Apple">Apple</option>
              <option value="Dell">Dell</option>
            </select>

            {/* Input */}
            <input
              type="text"
              placeholder="Encuentra todo en tecnología"
              className="flex-grow p-3 text-gray-700 text-base outline-none"
            />

            {/* Botón de búsqueda */}
            <button className="p-3 bg-transparent">
              <IoMdSearch size={20} className="text-gray-600" />
            </button>
          </div>

          {/* Iconos de usuario */}
          <div className="flex items-center gap-12 text-white">
            <div className="flex flex-col items-center text-sm">
              <FaHeadphonesAlt size={28} />
              <span>Ayuda</span>
            </div>
            <div className="flex flex-col items-center text-sm">
              <FaRegUser size={28} />
              <span>Regístrate</span>
            </div>
            <div className="flex flex-col items-center text-sm">
              <BiLogIn size={28} />
              <span>Iniciar sesión</span>
            </div>
            <div className="flex flex-col items-center text-sm relative">
              <FaShoppingCart size={28} />
              <span>Carrito</span>
              {/* Badge de notificaciones */}
              <div className="absolute top-[-5px] right-[-10px] bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                1
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <nav className="bg-purple-dark text-white flex items-center justify-center">
        <div className="max-w-screen-2xl w-full px-4 flex items-center justify-between text-sm py-2">
          <div className="flex items-center gap-2">
            <AiOutlineMenu size={18} />
            <span className="font-bold">Todas las categorías</span>
          </div>
          <div className="flex items-center gap-6">
            <span>Laptops</span>
            <span>Componentes</span>
            <span>Computadoras</span>
            <span>Impresoras</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
