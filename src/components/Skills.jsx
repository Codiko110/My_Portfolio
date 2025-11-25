import { Stack, SkillCapabilities } from "../data/data";
import {motion} from "framer-motion";

function Skills() {
  const listStack = Stack.map((stack, index) => (
    <motion.div 
      key={stack.id} 
      className="p-5 mb-5"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1, y: -5 }}
    >
      <img src={stack.iconUrl} alt={stack.name} className="w-15" />
      <p className="mt-2 text-center">{stack.name}</p>
    </motion.div>
  ));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-base-200 mb-10 rounded-2xl py-8">
      
      <motion.h1 
        className="text-5xl text-primary font-bold my-5 items-center justify-center flex"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h1>

      <motion.div 
        className="flex flex-wrap place-content-center bg-base-100 rounded-2xl md:m-10 sm:m-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {listStack}
      </motion.div>

      <motion.h2 
        className="text-2xl font-bold text-primary text-center m-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        What I Can Do
      </motion.h2>

      <motion.div 
        className="grid md:grid-cols-2 gap-8 px-5 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {SkillCapabilities.map((item) => (
          <motion.div
            key={item.id}
            className="bg-base-100 p-6 rounded-xl shadow hover:shadow-lg transition"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
            }}
          >
            <h3 className="text-2xl font-semibold text-primary mb-2">
              {item.title}
            </h3>
            <p className="text-lg opacity-80">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Skills;
