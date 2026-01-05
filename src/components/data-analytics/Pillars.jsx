export const Pillars = () => {
  const pillars = [
    {
      title: "Data Engineering",
      description:
        "Robust data pipelines that ingest, process, and store massive volumes of structured and unstructured data.",
    },
    {
      title: "Advanced Analytics",
      description:
        "Transform raw data into actionable insights using descriptive, diagnostic, and predictive analytics.",
    },
    {
      title: "AI & Machine Learning",
      description:
        "Build intelligent systems using ML models for forecasting, recommendations, and automation.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Core Pillars
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((item, index) => (
            <div
              key={index}
              className="p-8 border rounded-xl shadow-sm hover:shadow-md transition bg-white"
            >
              <span className="text-blue-600 text-4xl font-bold">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="text-xl font-semibold mt-4 mb-2">
                {item.title}
              </h3>

              <p className="text-slate-600 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
