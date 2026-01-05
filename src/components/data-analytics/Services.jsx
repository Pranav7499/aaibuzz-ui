export const Services = () => {
  const services = [
    {
      title: "Data Engineering",
      desc: "Design and build scalable data pipelines and architectures.",
    },
    {
      title: "ETL / ELT Pipelines",
      desc: "Automated data ingestion, transformation, and loading.",
    },
    {
      title: "Business Intelligence",
      desc: "Dashboards and reporting for data-driven decisions.",
    },
    {
      title: "Big Data Analytics",
      desc: "Processing massive datasets using modern big data tools.",
    },
    {
      title: "Data Warehousing",
      desc: "Centralized data storage optimized for analytics.",
    },
    {
      title: "Advanced Analytics",
      desc: "Predictive and descriptive analytics solutions.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Our Data & Analytics Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-xl border shadow-sm">
              <h3 className="font-bold text-xl mb-3">{s.title}</h3>
              <p className="text-slate-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
