export const Process = () => {
  const steps = ["Ideation", "Plan", "Design", "Develop", "Test", "Deploy"];

  return (
    <section className="py-24 bg-[#0b132b] text-white">
      <h2 className="text-3xl font-bold text-center mb-16">
        Our Working Process
      </h2>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <div key={i} className="bg-[#1c2541] p-6 rounded-xl">
            <h3 className="font-bold mb-2">{s}</h3>
            <p className="text-sm text-slate-300">
              Structured and efficient execution.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
