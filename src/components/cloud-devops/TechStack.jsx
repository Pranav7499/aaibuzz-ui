import {
  FaAws,
  FaDocker,
} from "react-icons/fa";
import { SiKubernetes, SiTerraform } from "react-icons/si";

export const TechStack = () => {
  return (
    <section className="py-20 bg-[#f8fbff]">
      <h2 className="text-4xl font-extrabold text-center mb-16">
        Tech Stack
      </h2>

      <div className="flex justify-center gap-10 flex-wrap">
        <Tech icon={<FaAws />} name="AWS" />
        <Tech icon={<FaDocker />} name="Docker" />
        <Tech icon={<SiKubernetes />} name="Kubernetes" />
        <Tech icon={<SiTerraform />} name="Terraform" />
      </div>
    </section>
  );
};

const Tech = ({ icon, name }) => (
  <div className="w-28 p-4 bg-white border rounded-lg text-center">
    <div className="text-4xl mb-2">{icon}</div>
    <p className="text-sm font-medium">{name}</p>
  </div>
);
