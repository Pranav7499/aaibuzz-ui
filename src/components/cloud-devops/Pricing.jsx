import { FaMoneyBillWave, FaProjectDiagram, FaUsers } from "react-icons/fa";

export const Pricing = () => {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-extrabold text-center mb-16">
        Our Pricing Models
      </h2>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <Price icon={<FaMoneyBillWave />} title="Fixed Price Model" />
        <Price icon={<FaProjectDiagram />} title="Hire Dedicated Model" />
        <Price icon={<FaUsers />} title="Onsite Model" />
      </div>
    </section>
  );
};

const Price = ({ icon, title }) => (
  <div className="p-8 bg-white border rounded-xl">
    <div className="text-4xl text-blue-600 mb-6">{icon}</div>
    <h3 className="font-bold text-xl mb-2">{title}</h3>
    <p className="text-slate-600 text-sm">
      Transparent, scalable pricing aligned with business needs.
    </p>
  </div>
);
