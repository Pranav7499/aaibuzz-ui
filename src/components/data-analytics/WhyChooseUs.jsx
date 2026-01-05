export const WhyChooseUs = () => {
  const reasons = [
    "Certified Experts",
    "24/7 Support",
    "Scalable Solutions",
    "Proven Track Record",
  ];

  return (
    <section className="py-24 bg-slate-50 text-center">
      <h2 className="text-3xl font-bold mb-12">Why Choose Us</h2>

      <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
        {reasons.map((r, i) => (
          <div key={i} className="bg-white p-6 rounded border">
            {r}
          </div>
        ))}
      </div>
    </section>
  );
};
