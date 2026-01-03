export const Benefits = () => {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-extrabold text-center mb-16">Benefits</h2>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <Card title="High Scalability" />
        <Card title="Reliability" />
        <Card title="Seamless Integration" />
      </div>
    </section>
  );
};

const Card = ({ title }) => (
  <div className="p-6 border rounded-lg bg-white shadow-sm">
    <h4 className="font-bold text-lg mb-3">{title}</h4>
    <p className="text-slate-600 text-sm">
      Auto-scaling infrastructure and optimized workflows ensure performance.
    </p>
  </div>
);
