export const Expertise = () => {
  const items = [
    "Data Engineering",
    "ETL & ELT Pipelines",
    "Data Warehousing",
    "Big Data Processing",
    "Business Intelligence",
    "Advanced Analytics",
    "AI & ML Integration",
    "24/7 Data Support",
  ];

  return (
    <section className="bg-[#0b132b] py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-red-400 font-semibold mb-4">
          OUR EXPERTISE IN DATA & ANALYTICS
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          Leading Data Engineering & Analytics Company Delivering
          Insight-Driven Solutions.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {items.map((item, i) => (
            <div key={i}>
              <span className="text-blue-500 text-5xl font-bold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 font-semibold uppercase">{item}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="/contact-us-software-development-company-in-india"
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};
