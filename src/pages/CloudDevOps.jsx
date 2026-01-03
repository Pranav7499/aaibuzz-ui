import { Hero } from "../components/cloud-devops/Hero";
import { Experience } from "../components/cloud-devops/Experience";
import { Benefits } from "../components/cloud-devops/Benefits";
import { SubServices } from "../components/cloud-devops/SubServices";
import { Pricing } from "../components/cloud-devops/Pricing";
import { TechStack } from "../components/cloud-devops/TechStack";
import { Process } from "../components/cloud-devops/Process";
import { CaseStudies } from "../components/cloud-devops/CaseStudies";
import { Testimonials } from "../components/cloud-devops/Testimonials";
import { CTA } from "../components/cloud-devops/CTA";
import { About } from "./About";
import { QuoteBanner } from "./QuoteBanner";
import { BestPractices } from "./BestPractices";
import { BusinessVerticals } from "./BusinessVerticals";
import { OrangeBanner } from "./OrangeBanner";

export const CloudDevOps = () => {
  return (
    <>
  <Hero />
  <Experience />
  <About />
  <Benefits />

  <QuoteBanner quote="Aaryas Web Infotech focuses on real project management, achieving success for our Client's Cloud & DevOps projects no matter what." />

  <SubServices />

  <QuoteBanner quote="Aaryas Web Infotech just doesn't build Cloud Solutions; we tailor technology to the unique needs of business." />

  <Pricing />
  <BestPractices />
  <BusinessVerticals />
  <TechStack />
  <Process />
  <CaseStudies />
  <Testimonials />
  <OrangeBanner />
  <CTA />
</>
  );
};
