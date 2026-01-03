import { FaCloud } from "react-icons/fa";
import { Section } from "../shared/Section";
import { Title } from "../shared/Title";
import { CenterButton } from "../shared/CenterButton";

const CaseStudy = ({ image, title, description, category }) => (
  <div className="bg-white rounded-2xl overflow-hidden border shadow-sm hover:shadow-lg transition">
    <div className={`h-48 ${image} flex items-center justify-center`}>
      <FaCloud className="text-white text-6xl opacity-50" />
    </div>
    <div className="p-6">
      <span className="text-xs font-semibold text-blue-600 uppercase">{category}</span>
      <h4 className="font-bold text-lg mt-2 mb-2">{title}</h4>
      <p className="text-slate-600 text-sm">{description}</p>
    </div>
  </div>
);

export const CaseStudies = () => {
  return (
    <Section bg="bg-[#f8fbff]">
      <Title>Case Studies</Title>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <CaseStudy
          image="bg-gradient-to-br from-blue-400 to-blue-600"
          title="E-Commerce Cloud Migration"
          description="99.99% uptime & 60% cost reduction"
          category="Cloud Migration"
        />
        <CaseStudy
          image="bg-gradient-to-br from-slate-400 to-slate-600"
          title="FinTech CI/CD"
          description="Deployment reduced to 5 minutes"
          category="DevOps"
        />
        <CaseStudy
          image="bg-gradient-to-br from-orange-400 to-orange-600"
          title="Healthcare Infra"
          description="HIPAA compliant multi-region setup"
          category="Cloud Infra"
        />
      </div>

      <CenterButton text="Explore the list of projects completed by us" />
    </Section>
  );
};
