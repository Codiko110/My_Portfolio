import { about } from "../data/data";
import avatar from "../pictures/avatar.png";
import Cv from "../assets/cv.pdf";
import {motion} from "framer-motion";

function Hero({ onClickScroll }) {

  
  return (
    <motion.div
    className="hero bg-base-100 min-h-screen"
    initial= {{opacity: 0, y:50}}
    whileInView={{opacity: 1, y:0}}
    transition={{duration: 1}}
    viewport={{once: true}}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={avatar}
          alt={about.name}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <div className="flex items-center gap-2 mb-5">
            <h1 className="text-4xl xl:text-5xl font-bold ">Hello, I'm</h1>
            <p className="text-primary text-4xl xl:text-5xl font-bold ">{about.name}</p>
          </div>

          <span>
            <span className="text-rotate h-13">
              <span>
                <span className="text-5xl">
                  Developers Web/Mobile
                </span>
                <span className="text-5xl">Designer</span>
              </span>
            </span>
          </span>
          <p className="py-6">{about.description}</p>
          <button 
          onClick={onClickScroll}
          className="btn btn-primary outline"
          >Hire me</button>
          <button className="btn btn-outline  ml-5 hover:btn-primary">
            <a href={Cv}>Download CV</a>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;
