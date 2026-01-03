import { FaCheckCircle } from "react-icons/fa";

export const SubServices = () => {
  const services = [
    "AWS / Cloud Infrastructure Setup",
    "CI/CD Pipeline Implementation",
    "Docker & Kubernetes",
    "Monitoring & Logging",
    "Cloud Security & Compliance",
    "Cost Optimization & Audits",
    "Infrastructure as Code (IaC)",
    "Cloud Migration Services",
    "DevSecOps Integration",
  ];

  return (
    <section className="py-20 bg-[#f8fbff]">
      <h2 className="text-4xl font-extrabold text-center mb-16">
        Our Sub Services
      </h2>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {services.map((s) => (
          <div
            key={s}
            className="flex gap-4 p-4 bg-white rounded-lg border"
          >
            <FaCheckCircle className="text-blue-600 mt-1" />
            <span className="font-medium">{s}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
