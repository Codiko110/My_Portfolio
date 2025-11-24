import { Stack, SkillCapabilities } from "../data/data";

function Skills() {
  return (
    <div className="bg-base-100 py-10">
      <h1 className="text-5xl text-primary font-bold mb-10 text-center">
        Skills
      </h1>

      {/* Technical Skills */}
      <div className="flex flex-wrap justify-center mb-16 bg-base-200 p-5 rounded-2xl">
        {Stack.map((stack) => (
          <div
            key={stack.id}
            className="p-4 m-4 bg-base-100 rounded-xl flex flex-col items-center shadow hover:shadow-xl transition w-30 h-30"
          >
            <img
              src={stack.iconUrl}
              alt={stack.name}
              className="w-14 h-14 mb-3"
            />
            <p className="font-semibold">{stack.name}</p>
          </div>
        ))}
      </div>

      {/* What I Can Do */}
      <h2 className="text-4xl font-bold text-primary text-center mb-8">
        What I Can Do
      </h2>

      <div className="grid md:grid-cols-2 gap-8 px-5 max-w-4xl mx-auto">
        {SkillCapabilities.map((item) => (
          <div
            key={item.id}
            className="bg-base-200 p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-semibold text-primary mb-2">
              {item.title}
            </h3>
            <p className="text-lg opacity-80">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
