import { FaQuoteLeft } from "react-icons/fa";
import { Section } from "../shared/Section";
import { Title } from "../shared/Title";
import { Grid } from "../shared/Grid";

const TestimonialCard = ({ quote, author }) => (
  <div className="bg-white p-10 rounded-2xl shadow-sm border">
    <FaQuoteLeft className="text-blue-200 text-4xl mb-4" />
    <p className="italic mb-6 text-slate-700">"{quote}"</p>
    <p className="font-bold text-blue-600">— {author}</p>
  </div>
);

export const Testimonials = () => {
  return (
    <Section>
      <Title>What Clients Say</Title>
      <Grid cols="md:grid-cols-2">
        <TestimonialCard quote="Helped us scale without downtime." author="CTO, SaaS Startup" />
        <TestimonialCard quote="Reduced cloud cost by 40%." author="IT Head, Enterprise" />
      </Grid>
    </Section>
  );
};
