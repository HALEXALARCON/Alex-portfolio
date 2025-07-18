import { motion } from "framer-motion";
import pokedexImg from "../assets/pokedex.png";
import rickMortyImg from "../assets/rick-and-morty.png";
import climaImg from "../assets/clima.png";
import crudImg from "../assets/crud-form.png";
import mibancoImg from "../assets/mibanco-docs.png";

const projects = [
  {
    title: "Pokédex",
    type: "Frontend",
    image: pokedexImg,
    url: "https://mountruos-de-bolsillo.netlify.app/#/pokedex",
    code: "https://github.com/HALEXALARCON/mounstruosdebolsillo",
  },
  {
    title: "Rick and Morty App",
    type: "Frontend",
    image: rickMortyImg,
    url: "https://r-a-m.netlify.app",
    code: "https://github.com/HALEXALARCON/RickAndMorty",
  },
  {
    title: "App del Clima",
    type: "Frontend",
    image: climaImg,
    url: "https://mi-clima.netlify.app",
    code: "https://github.com/HALEXALARCON/weather-App",
  },
  {
    title: "CRUD de Usuarios",
    type: "Frontend",
    image: crudImg,
    url: "https://crd-frm.netlify.app",
    code: "https://github.com/HALEXALARCON/Form1er",
  },
  {
    title: "MiBanco - Backend",
    type: "Backend",
    image: mibancoImg,
    url: "https://documenter.getpostman.com/view/44455913/2sB2x6nXuy",
    code: "https://github.com/HALEXALARCON/MiBanco",
    isDocs: true,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen px-4 py-20 bg-white dark:bg-black text-black dark:text-white transition-colors duration-500"
    >
      <h2 className="text-3xl font-bold text-center mb-10">
        Proyectos Destacados
      </h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-xl p-6 shadow-lg">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full max-w-[400px] h-48 object-contain rounded-lg mb-4 mx-auto"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 16px rgba(0,0,0,0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p
              className={`text-sm mb-4 font-semibold ${
                project.type === "Frontend" ? "text-blue-400" : "text-pink-400"
              }`}
            >
              {project.type}
            </p>
            <div className="flex gap-4">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  className="text-blue-400 hover:underline"
                >
                  {project.isDocs ? "Ver documentación" : "Ver demo"}
                </a>
              )}
              <a
                href={project.code}
                target="_blank"
                className="text-green-400 hover:underline"
              >
                Ver código
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
