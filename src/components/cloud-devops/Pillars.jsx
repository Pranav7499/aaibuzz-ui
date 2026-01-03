import { FaLightbulb, FaStar, FaHandshake } from "react-icons/fa";

export const Pillars = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-extrabold mb-6">
            3 Pillars of Our Cloud Excellence
          </h2>

          <p className="text-slate-600 mb-4">
            We deliver smart and flexible cloud solutions.
          </p>

          <p className="text-slate-600">
            Since our inception, we have steadfastly adhered to these three pillars
            to achieve our goal of becoming the <b>#1 Cloud & DevOps partner</b>.
          </p>
        </div>

        <div className="space-y-10">
          <Pillar
            icon={<FaLightbulb />}
            title="Innovation"
            text="Constantly pushing boundaries to deliver cutting-edge cloud solutions."
          />
          <Pillar
            icon={<FaStar />}
            title="Quality"
            text="Ensuring robust, reliable, and high-performance infrastructure."
          />
          <Pillar
            icon={<FaHandshake />}
            title="Customer-Centric Approach"
            text="Transparent communication and deep understanding of client needs."
          />
        </div>
      </div>
    </section>
  );
};

const Pillar = ({ icon, title, text }) => (
  <div className="flex gap-6">
    <div className="text-blue-600 text-3xl">{icon}</div>
    <div>
      <h4 className="font-bold text-lg">{title}</h4>
      <p className="text-slate-600">{text}</p>
    </div>
  </div>
);