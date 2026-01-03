import { FaShieldAlt, FaHeadset, FaChartLine, FaStar } from "react-icons/fa";

export const WhyChooseUs = () => {
  const items = [
    {
      icon: <FaShieldAlt />,
      title: "Certified Experts",
      text: "AWS, Azure, and GCP certified professionals with proven expertise.",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      text: "Round-the-clock monitoring, incident response, and technical support.",
    },
    {
      icon: <FaChartLine />,
      title: "Scalable Solutions",
      text: "Infrastructure that grows seamlessly with your business needs.",
    },
    {
      icon: <FaStar />,
      title: "Proven Track Record",
      text: "100+ successful cloud migrations and DevOps transformations.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-16">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {items.map((item, i) => (
            <div
              key={i}
              className="p-8 bg-white border rounded-xl shadow-sm text-center"
            >
              <div className="text-blue-600 text-4xl mb-4">{item.icon}</div>
              <h4 className="font-bold mb-2">{item.title}</h4>
              <p className="text-slate-600 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};