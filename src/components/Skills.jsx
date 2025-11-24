import { Stack, SkillCapabilities } from "../data/data";

function Skills() {
  const listStack = Stack.map((stack) => (
    <div key={stack.id} className="p-5 mb-5 ">
      <img src={stack.iconUrl} alt={stack.name} className="w-15 " />
      <p>{stack.name}</p>
    </div>
  ));
  return (
    <div className="bg-base-100 ">
      <h1 className="text-5xl text-primary font-bold mb-5 items-center justify-center flex">
        Skills
      </h1>
      <div className="flex flex-wrap place-content-center bg-base-200 rounded-2xl">
        {listStack}
      </div>
      <h2 className="text-2xl font-bold text-primary text-center m-8">
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
            <p className="text-lg opacity-80">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
