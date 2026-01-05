export const Experience = () => {
  const items = [
    { title: "10+ Years Experience", desc: "Delivering enterprise-grade data solutions." },
    { title: "120+ Data Projects", desc: "Successful analytics & data engineering deliveries." },
    { title: "Scalable Pipelines", desc: "Built for high-volume & real-time data." },
    { title: "99.9% Reliability", desc: "Highly available data platforms." },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10">
          {items.map((i, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border text-center">
              <h3 className="font-bold text-lg mb-2">{i.title}</h3>
              <p className="text-slate-600 text-sm">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
