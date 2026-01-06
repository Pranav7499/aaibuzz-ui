

import { Link } from "react-router-dom";

export const CTA = () => {
  return (
    <section className="py-24 bg-[#0f172a] text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        WORK WITH THE PRO CLOUD & DEVOPS TEAM
      </h2>

      <p className="text-slate-300 mb-8 max-w-3xl mx-auto">
        Would you like to have professional infrastructure? Let's talk about it!
      </p>

      <Link
        to="/contact-us-software-development-company-in-india"
        className="inline-block px-10 py-4 bg-blue-600 rounded-md
                   hover:bg-blue-700 transition hover:-translate-y-1 hover:shadow-lg"
      >
        Get Started
      </Link>
    </section>
  );
};
