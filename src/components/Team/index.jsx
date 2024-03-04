import TeamMember from "./TeamMember";

const Team = () => {
  return (
    <section className="p-6 rounded-lg shadow-lg bg-white max-w-3xl w-full ">
      <h2 className="text-2xl font-bold text-left">Team</h2>
      <p className="text-sm py-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="flex flex-col gap-4">
        <TeamMember />
        <TeamMember />
        <TeamMember />
      </div>
    </section>
  );
};

export default Team;
