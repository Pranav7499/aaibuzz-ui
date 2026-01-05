export const Benefits = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Benefits of Data Engineering & Analytics
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Better Decision Making</h3>
            <p className="text-slate-600 text-sm">
              Transform raw data into actionable insights for faster and smarter decisions.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Scalable Data Pipelines</h3>
            <p className="text-slate-600 text-sm">
              Build reliable and scalable pipelines that grow with your business.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Cost Optimization</h3>
            <p className="text-slate-600 text-sm">
              Optimize storage, compute, and analytics costs efficiently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
