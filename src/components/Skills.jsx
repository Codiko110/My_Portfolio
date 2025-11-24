import { Stack } from "../data/data";

function Skills() {
  const listStack = Stack.map((stack) => (
    <div key={stack.id} className="p-5 mb-5 ">
      <img src={stack.iconUrl} alt={stack.name} className="w-10 " />
      <p>{stack.name}</p>
    </div>
  ));
  return (
    <div className="bg-base-100">
      <h1 className="text-5xl text-primary font-bold mb-5 items-center justify-center flex">Skills</h1>
        <div className="flex flex-wrap place-content-center bg-base-200 rounded-2xl">
        {listStack}
      </div>
    </div>
  );
}

export default Skills;
