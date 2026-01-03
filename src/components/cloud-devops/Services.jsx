import {
  FaCloud,
  FaCogs,
  FaDocker,
  FaChartLine,
  FaLock,
  FaHeadset,
} from "react-icons/fa";

export const Services = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-16">
          Our Cloud & DevOps Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <ServiceCard
            icon={<FaCloud />}
            title="Cloud Infrastructure Setup"
            text="AWS, Azure, GCP infrastructure design and deployment with industry best practices."
          />
          <ServiceCard
            icon={<FaCogs />}
            title="CI/CD Pipeline Implementation"
            text="Automated build, test, and deployment pipelines for faster and safer releases."
          />
          <ServiceCard
            icon={<FaDocker />}
            title="Docker & Kubernetes"
            text="Container orchestration for scalable microservices architecture."
          />
          <ServiceCard
            icon={<FaChartLine />}
            title="Monitoring & Logging"
            text="Real-time monitoring, alerting, and centralized logging solutions."
          />
          <ServiceCard
            icon={<FaLock />}
            title="Security & Compliance"
            text="Infrastructure security, compliance audits, and vulnerability management."
          />
          <ServiceCard
            icon={<FaHeadset />}
            title="24/7 DevOps Support"
            text="Round-the-clock monitoring, incident response, and technical support."
          />
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title, text }) => (
  <div className="p-8 bg-white rounded-xl border shadow-sm hover:shadow-md transition">
    <div className="text-blue-600 text-4xl mb-4">{icon}</div>
    <h4 className="font-bold text-lg mb-2">{title}</h4>
    <p className="text-slate-600 text-sm">{text}</p>
  </div>
);
