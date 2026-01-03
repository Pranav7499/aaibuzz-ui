import { FaCloud, FaAws, FaCogs, FaShieldAlt } from "react-icons/fa";

export const Experience = () => {
  return (
    <section className="py-20 bg-[#f8fbff]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <Info icon={<FaCloud />} title="10+ Years of Cloud Experience" />
        <Info icon={<FaAws />} title="100+ Cloud Projects Delivered" />
        <Info icon={<FaCogs />} title="Automated CI/CD Pipelines" />
        <Info icon={<FaShieldAlt />} title="99.9% Infrastructure Uptime" />
      </div>
    </section>
  );
};

const Info = ({ icon, title }) => (
  <div className="flex gap-6">
    <div className="text-5xl text-blue-600">{icon}</div>
    <div>
      <h3 className="font-semibold text-xl mb-2">{title}</h3>
      <p className="text-slate-600 text-sm">
        Proven enterprise-grade cloud and DevOps expertise.
      </p>
    </div>
  </div>
);
