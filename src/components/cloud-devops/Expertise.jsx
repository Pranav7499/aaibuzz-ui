export const Expertise = () => {
  const items = [
    "Cloud Infrastructure",
    "CI/CD Automation",
    "Containerization",
    "Monitoring & Logging",
    "Security & Compliance",
    "Cost Optimization",
    "Disaster Recovery",
    "24/7 Support",
  ];

  return (
    <section className="bg-[#0b132b] py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-red-400 font-semibold mb-4">
          OUR EXPERTISE AS A CLOUD & DEVOPS PARTNER
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          Leading Cloud Infrastructure, DevOps Automation, and IT Consulting Company,
          Creating Smart Solutions for a Smarter World.
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
      </div>
    </section>
  );
};