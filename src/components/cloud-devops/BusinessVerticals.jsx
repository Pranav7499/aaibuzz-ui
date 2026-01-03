
import {
  FaUniversity,
  FaHospital,
  FaShoppingCart,
  FaIndustry,
} from "react-icons/fa";

export const BusinessVerticals = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16">
          Business Verticals
        </h2>

        <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
          We deliver cloud solutions tailored to industry-specific requirements
          across multiple domains.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <Item icon={<FaUniversity />} title="Education" />
          <Item icon={<FaHospital />} title="Healthcare" />
          <Item icon={<FaShoppingCart />} title="E-Commerce" />
          <Item icon={<FaIndustry />} title="Manufacturing" />
        </div>
      </div>
    </section>
  );
};

const Item = ({ icon, title }) => (
  <div className="flex flex-col items-center bg-blue-600 text-white p-8 rounded-lg hover:scale-105 transition cursor-pointer">
    <div className="text-4xl mb-4">{icon}</div>
    <p className="font-semibold">{title}</p>
  </div>
);