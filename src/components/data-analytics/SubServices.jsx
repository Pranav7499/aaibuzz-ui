export const SubServices = () => {
  const items = [
    "Data Pipeline Development",
    "Data Migration",
    "Real-Time Analytics",
    "Data Quality Management",
    "Cloud Data Platforms",
    "ML Data Preparation",
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        {items.map((i, idx) => (
          <div key={idx} className="bg-white p-4 rounded border">
            {i}
          </div>
        ))}
      </div>
    </section>
  );
};
