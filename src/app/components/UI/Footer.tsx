import Acer from "../../assets/Acer.png";
import Amd from "../../assets/Amd.png";
import Asus from "../../assets/Asus.png";
import Dell from "../../assets/Dell.png";
import Gigabyte from "../../assets/Gigabyte.png";
import Hp from "../../assets/Hp.png";
import Intel from "../../assets/Intel.png";
import Lenovo from "../../assets/Lenovo.png";
import Nvidia from "../../assets/Nvidia.png";
import Visa from "../../assets/Visa.png";
import Mastercard from "../../assets/Mastercard.png";
import AmericanExpress from "../../assets/AmericanExpress.png";
import Dinner from "../../assets/Dinner.png";
import Yape from "../../assets/Yape.png";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 font-mulish">
      {/* Marcas más buscadas */}
      <div className="max-w-screen-2xl mx-auto px-4 text-center border-b border-gray-700 pb-6">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="border-t border-gray-700 w-1/3"></span>
          <h2 className="text-lg font-bold tracking-wider whitespace-nowrap">
            Marcas más buscadas
          </h2>
          <span className="border-t border-gray-700 w-1/3"></span>
        </div>
        <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-4 md:gap-8">
          <img src={Acer} alt="Acer" className="h-8 object-contain" />
          <img src={Amd} alt="AMD" className="h-8 object-contain" />
          <img src={Asus} alt="Asus" className="h-8 object-contain" />
          <img src={Dell} alt="Dell" className="h-[80px] object-contain" />
          <img src={Gigabyte} alt="Gigabyte" className="h-9 object-contain" />
          <img src={Hp} alt="HP" className="h-[70px] object-contain" />
          <img src={Intel} alt="Intel" className="h-8 object-contain" />
          <img src={Lenovo} alt="Lenovo" className="h-8 object-contain" />
          <img src={Nvidia} alt="Nvidia" className="h-8 object-contain" />
        </div>
      </div>

      {/* Suscripción al Newsletter */}
      <div className="max-w-screen-2xl mx-auto px-4 text-center border-b border-gray-700 pb-6 pt-6">
        <h2 className="text-lg font-bold mb-4 tracking-wider">
          ¡Suscríbete a nuestro Newsletter!
        </h2>
        <form className="flex flex-col md:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="¡Ingresa tu email!"
            className="px-4 py-2 w-full md:w-[300px] text-black rounded-lg outline-none"
          />
          <button
            type="submit"
            className="bg-purple-primary text-white px-6 py-2 rounded-lg hover:bg-purple-dark transition-colors duration-300"
          >
            Recibir ofertas
          </button>
        </form>
      </div>

      {/* Enlaces informativos */}
      <div className="max-w-screen-2xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mt-8 text-sm border-b border-gray-700 pb-6">
        <div>
          <h3 className="font-bold mb-4">Información útil</h3>
          <ul className="space-y-2">
            <li>¿Qué es idoogo?</li>
            <li>Compra en Idoogo</li>
            <li>Blog</li>
            <li>Marcas</li>
            <li>Políticas de devolución de productos</li>
            <li>Políticas de privacidad</li>
            <li>Políticas de envío</li>
            <li>Términos y Condiciones</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Todo en un solo lugar</h3>
          <ul className="space-y-2">
            <li>✔ Envío Asegurado</li>
            <li>✔ Garantía de Entrega</li>
            <li>✔ Productos Originales</li>
            <li>✔ El mejor precio</li>
            <li>✔ Compra fácil, rápido y seguro</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Compra con tranquilidad</h3>
          <p>
            Idoogo cuenta con los certificados verificados para garantizar la
            seguridad de la compra.
          </p>
        </div>
        <div>
          <h3 className="font-bold mb-4">Contacto</h3>
          <p className="mb-2">🕒 De Lunes a Sábado: 08:00 - 18:00hs</p>
          <p className="mb-2">🕒 Domingos: 08:00 - 14:00hs</p>
          <p className="mb-4 underline">Preguntas frecuentes</p>
          <p className="mb-4 underline">Libro de reclamaciones</p>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#" className="text-lg hover:text-gray-400">
              Facebook
            </a>
            <a href="#" className="text-lg hover:text-gray-400">
              Instagram
            </a>
            <a href="#" className="text-lg hover:text-gray-400">
              TikTok
            </a>
          </div>
        </div>
      </div>

      {/* Métodos de pago */}
      <div className="max-w-screen-2xl mx-auto px-4 mt-8 border-b border-gray-700 pb-6">
        <h3 className="text-center text-sm mb-4 tracking-wider">
          Métodos de Pago
        </h3>
        <div className="flex justify-center items-center gap-4">
          <img src={Visa} alt="Visa" className="h-10 object-contain" />
          <img
            src={Mastercard}
            alt="MasterCard"
            className="h-10 object-contain"
          />
          <img
            src={AmericanExpress}
            alt="AmericanExpress"
            className="h-10 object-contain"
          />
          <img src={Dinner} alt="Dinner" className="h-10 object-contain" />
          <img src={Yape} alt="Yape" className="h-10 object-contain" />
        </div>
      </div>

      {/* Derechos reservados */}
      <div className="max-w-screen-2xl mx-auto px-4 mt-8 text-center text-xs border-t border-gray-700 pt-4">
        <p>© 2024 - Idoogo - Todos los derechos reservados</p>
        <p>Diseñado y desarrollado por TGH Technology Solution</p>
      </div>
    </footer>
  );
};

export default Footer;
