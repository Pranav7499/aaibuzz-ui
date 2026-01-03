import { FaQuoteLeft } from "react-icons/fa";

export const QuoteBanner = ({ quote }) => {
  return (
    <section className="py-12 bg-slate-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <FaQuoteLeft className="text-blue-200 text-3xl mx-auto mb-4" />
        <p className="text-xl font-medium text-slate-700 italic">
          {quote}
        </p>
      </div>
    </section>
  );
};