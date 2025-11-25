import { projects } from "../data/data.jsx";
import { motion } from "framer-motion";

function Project() {
  const listProjects = projects.map((project, index) => (
    <motion.div 
      key={project.id} 
      className="card bg-base-200 w-90 shadow-sm "
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <figure>
        <img className="h-70" src={project.image} alt={project.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{project.title} 
        </h2>
        <p>{project.description}</p>
        <div className="flex gap-2 flex-wrap">
          {project.technologies.map((tech, index) => (
            <span key={index} className="badge badge-primary">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  ));

  return (
    <motion.div 
      className="my-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
        <motion.h1 
          className="text-5xl text-primary font-bold mb-5 items-center justify-center flex"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h1>
        <div 
            className="flex flex-wrap place-content-center bg-base-100 rounded-2xl gap-5 mb-10"
        >
            {listProjects}
        </div>
    </motion.div>
  );
}

export default Project;
