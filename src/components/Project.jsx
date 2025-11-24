import {projects} from '../data/data.jsx';

function Project() {

    const listProjects = projects.map((project) => (
        <div key={project.id} className="p-5 mb-5 ">
            <img src={require(project.imageUrl} alt={project.name} className="w-10 " />   
            <h2 className="text-2xl font-bold">{project.name}</h2>
            <p>{project.description}</p>
            <a href={project.projectUrl} className="text-blue-500 hover:underline">View Project</a>
        </div>

    ));

  return (
    <>
    <div className="bg-base-100">{listProjects}</div>
    </>
  )
}

export default Project