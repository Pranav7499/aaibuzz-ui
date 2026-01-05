export const TechStack = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Tech Stack
        </h2>

        <div className="space-y-12">
          <Category title="Data Engineering">
            Spark, Kafka, Airflow, Hadoop
          </Category>

          <Category title="Databases & Warehousing">
            Snowflake, BigQuery, Redshift, PostgreSQL
          </Category>

          <Category title="BI & Visualization">
            Power BI, Tableau, Looker
          </Category>

          <Category title="Cloud Platforms">
            AWS, Azure, Google Cloud
          </Category>
        </div>
      </div>
    </section>
  );
};

const Category = ({ title, children }) => (
  <div>
    <h3 className="font-bold uppercase text-slate-700 mb-4">{title}</h3>
    <p className="text-slate-600">{children}</p>
  </div>
);
