import { projects } from "../data/data.jsx";

function Project() {
  const listProjects = projects.map((project) => (
    <div key={project.id} className="card bg-base-200 w-90 shadow-sm ">
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
    </div>
  ));

  return (
    <div 
    className="my-20"
    >
        <h1 className="text-5xl text-primary font-bold mb-5 items-center justify-center flex">Projects</h1>
        <div 
            className="flex flex-wrap place-content-center bg-base-100 rounded-2xl gap-5 mb-10"
        >
            {listProjects}
        </div>
    </div>
  );
}

export default Project;
