import {
  FaSearch,
  FaDollarSign,
  FaChartLine,
  FaHandshake,
  FaLock,
  FaBook,
  FaCogs,
} from "react-icons/fa";

export const BestPractices = () => {
  return (
    <section className="py-20 bg-[#f8fbff]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              Best Practices
            </h2>
            <p className="text-slate-600 mb-8">
              How we ensure success in Cloud & DevOps services
            </p>
            <p className="text-slate-600">
              Besides technical expertise, we prioritize structured processes,
              security, cost control, and quality delivery to meet project goals
              effectively.
            </p>
          </div>

          <div className="h-64 md:h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
            <FaCogs className="text-blue-600 text-8xl opacity-30" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <Card icon={<FaSearch />} title="Scoping" />
          <Card icon={<FaDollarSign />} title="Cost Estimation" />
          <Card icon={<FaChartLine />} title="Quality Management" />
          <Card icon={<FaHandshake />} title="Collaboration" />
          <Card icon={<FaLock />} title="Security Management" />
          <Card icon={<FaBook />} title="Knowledge Management" />
        </div>
      </div>
    </section>
  );
};

const Card = ({ icon, title }) => (
  <div className="p-6 bg-white rounded-lg border shadow-sm hover:shadow-md transition">
    <div className="text-3xl text-blue-600 mb-4">{icon}</div>
    <h4 className="font-bold text-lg mb-2">{title}</h4>
    <p className="text-slate-600 text-sm">
      We follow structured and proven practices to ensure successful delivery.
    </p>
  </div>
);