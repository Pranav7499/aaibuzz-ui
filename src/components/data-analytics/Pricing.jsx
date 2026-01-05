export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Pricing Models</h2>
        <p className="text-slate-600 mb-12">
          Flexible engagement models for data & analytics projects
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <Card title="Fixed Price" />
          <Card title="Dedicated Team" />
          <Card title="Onsite Model" />
        </div>
      </div>
    </section>
  );
};

const Card = ({ title }) => (
  <div className="p-8 bg-slate-50 rounded-xl border">
    <h3 className="font-bold text-lg mb-4">{title}</h3>
    <p className="text-slate-600 text-sm">
      Transparent and flexible pricing model.
    </p>
  </div>
);
