export const About = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Modern Data Engineering & Analytics
          </h2>
          <p className="text-slate-600">
            We design, build, and manage data platforms that turn raw data into
            actionable insights using industry best practices.
          </p>
        </div>

        <div className="h-64 bg-blue-100 rounded-xl flex items-center justify-center">
          <span className="text-blue-500 text-6xl">📊</span>
        </div>
      </div>
    </section>
  );
};
