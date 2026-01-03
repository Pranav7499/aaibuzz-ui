import { FaCloud } from "react-icons/fa";

export const About = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-3xl font-bold mb-4">
            Modern Cloud & DevOps Solutions
          </h3>
          <p className="text-slate-600">
            We design, deploy, and manage cloud infrastructure using industry
            best practices to ensure performance, security, and cost
            optimization.
          </p>
        </div>

        <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
          <FaCloud className="text-blue-600 text-8xl opacity-30" />
        </div>
      </div>
    </section>
  );
};
