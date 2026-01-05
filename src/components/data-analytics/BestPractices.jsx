export const BestPractices = () => {
  const items = [
    "Scoping",
    "Cost Estimation",
    "Quality Management",
    "Collaboration",
    "Security Management",
    "Documentation",
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">Best Practices</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((i, idx) => (
            <div key={idx} className="bg-white p-6 rounded border">
              <h3 className="font-semibold">{i}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
