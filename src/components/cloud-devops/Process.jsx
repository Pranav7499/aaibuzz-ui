import { FaLightbulb, FaPencilRuler, FaCode, FaClipboardCheck, FaRocket, FaProjectDiagram } from "react-icons/fa";
import { Section } from "../shared/Section";
import { Title } from "../shared/Title";

const ProcessCard = ({ icon, title, description }) => (
  <div className="p-6 bg-white rounded-lg border shadow-sm hover:shadow-md transition text-center">
    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
      <span className="text-blue-600 text-2xl">{icon}</span>
    </div>
    <h4 className="font-bold text-lg mb-2">{title}</h4>
    <p className="text-slate-600 text-sm">{description}</p>
  </div>
);

export const Process = () => {
  return (
    <Section>
      <Title>Our Working Process</Title>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
          <FaProjectDiagram className="text-blue-600 text-8xl opacity-30" />
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="font-bold">01 Ideation</h4>
            <p className="text-slate-600">
              Understanding requirements and brainstorming cloud architecture.
            </p>
          </div>
          <div>
            <h4 className="font-bold">02 Planning</h4>
            <p className="text-slate-600">
              Breaking goals into milestones with timelines.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ProcessCard icon={<FaPencilRuler />} title="Design" description="Architecture & runbooks" />
        <ProcessCard icon={<FaCode />} title="Develop" description="Infrastructure setup" />
        <ProcessCard icon={<FaClipboardCheck />} title="Test" description="Security & load testing" />
        <ProcessCard icon={<FaRocket />} title="Deploy" description="Production rollout" />
      </div>
    </Section>
  );
};
