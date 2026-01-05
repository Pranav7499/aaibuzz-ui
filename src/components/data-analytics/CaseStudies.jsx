export const CaseStudies = () => {
  const studies = [
    {
      title: "Retail Analytics Platform",
      description:
        "Built a real-time analytics platform to track customer behavior and sales trends, improving conversions by 32%.",
      tag: "Retail",
    },
    {
      title: "Healthcare Data Warehouse",
      description:
        "Designed a HIPAA-compliant data warehouse enabling faster reporting and predictive insights.",
      tag: "Healthcare",
    },
    {
      title: "FinTech Risk Analytics",
      description:
        "Implemented big data pipelines to analyze transactions and detect fraud in real time.",
      tag: "FinTech",
    },
  ];

  return (
    <section className="py-20 bg-[#f8fbff]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Case Studies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {studies.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition"
            >
              <span className="text-sm text-blue-600 font-semibold uppercase">
                {item.tag}
              </span>

              <h3 className="text-lg font-semibold mt-3 mb-2">
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
