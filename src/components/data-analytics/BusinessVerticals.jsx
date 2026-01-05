export const BusinessVerticals = () => {
  const verticals = ["Education", "Healthcare", "E-Commerce", "Manufacturing"];

  return (
    <section className="py-24 bg-white text-center">
      <h2 className="text-3xl font-bold mb-12">Business Verticals</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {verticals.map((v, i) => (
          <div key={i} className="bg-blue-600 text-white px-10 py-6 rounded-lg">
            {v}
          </div>
        ))}
      </div>
    </section>
  );
};
