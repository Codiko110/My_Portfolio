import { about } from "../data/data";
import avatar from "../pictures/avatar.png";

function Hero() {
  return (
    <div className="hero bg-base-100 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={avatar}
          alt={about.name}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <div className="flex mb-5">
            <h1 className="text-5xl font-bold">Hello, I'm </h1>
            <p className="text-primary text-5xl font-bold"> {about.name}</p>
          </div>
          <span>
            <span className="text-rotate">
              <span>
                <span className="bg-red-400 text-red-800 px-2">Developers Web/Mobile</span>
                <span className="bg-blue-400 text-blue-800 px-2">Designer</span>
              </span>
            </span>
          </span>
          <p className="py-6">{about.description}</p>
          <button className="btn btn-primary btn-outline">Hire me</button>
          <button className="btn btn-outline  ml-5 hover:btn-primary">
            Download my CV
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
