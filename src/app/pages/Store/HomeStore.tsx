import Banner from "../../assets/Banner.png";

const HomeStore = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-mulish">
      {/* Banner principal */}
      <div className="w-full">
        <img
          src={Banner}
          alt="Banner principal"
          className="w-full object-cover"
        />
      </div>

      {/* Contenido adicional debajo del banner */}
      <div className="max-w-screen-2xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-8">
          HOLAAAAAAAAAAAAAA
        </h2>
        {/* Aquí puedes añadir más contenido */}
      </div>
    </div>
  );
};

export default HomeStore;
