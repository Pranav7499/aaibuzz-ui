import { motion } from "framer-motion";
import {
  FaAws,
  FaCloud,
  FaDocker,
  FaShieldAlt,
  FaCogs,
  FaMoneyBillWave,
  FaProjectDiagram,
  FaCheckCircle,
  FaHospital,
  FaShoppingCart,
  FaUniversity,
  FaIndustry,
  FaQuoteLeft,
  FaLightbulb,
  FaPencilRuler,
  FaCode,
  FaClipboardCheck,
  FaRocket,
  FaUsers,
  FaSearch,
  FaDollarSign,
  FaChartLine,
  FaHandshake,
  FaLock,
  FaBook,
} from "react-icons/fa";
import {
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiJenkins,
  SiGithubactions,
  SiGitlab,
  SiPrometheus,
  SiGrafana,
  SiElasticsearch,
  SiGooglecloud,
} from "react-icons/si";

export default function CloudDevOpsService() {
  return (
    <section className="w-full overflow-x-hidden bg-white text-slate-900">

      {/* ================= HERO ================= */}
      <section className="py-28 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-extrabold tracking-tight"
          >
            <span className="block text-4xl md:text-6xl text-slate-900">
              Cloud & DevOps
            </span>
            <span className="block text-4xl md:text-6xl text-blue-600">
              Services
            </span>
          </motion.h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600">
            Scalable cloud infrastructure and DevOps automation to accelerate
            your software delivery with security, performance, and reliability.
          </p>
        </div>
      </section>

      {/* ================= EXPERIENCE BLOCKS ================= */}
      <Section bg="bg-[#f8fbff]">
        <Grid>
          <Info icon={<FaCloud />} title="10+ Years of Cloud Experience">
            Proven expertise in building scalable, secure cloud infrastructures.
          </Info>
          <Info icon={<FaAws />} title="100+ Cloud Projects Delivered">
            Enterprise-grade AWS and multi-cloud solutions.
          </Info>
          <Info icon={<FaCogs />} title="Automated CI/CD Pipelines">
            Faster releases with reduced deployment risk.
          </Info>
          <Info icon={<FaShieldAlt />} title="99.9% Infrastructure Uptime">
            High availability with continuous monitoring.
          </Info>
        </Grid>

        <CenterButton text="Click here to avail Cloud & DevOps Services" />
      </Section>

      {/* ================= ABOUT / IMAGE SECTION ================= */}
      <SplitSection
        title="Modern Cloud & DevOps Solutions"
        text="We design, deploy, and manage cloud infrastructure using industry best practices to ensure performance, security, and cost optimization."
      />

      {/* ================= BENEFITS (EXPANDED) ================= */}
      <Section>
        <Title>Benefits</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BenefitCard
            title="Faster Deployments"
            description="Automated CI/CD pipelines reduce deployment time from weeks to minutes. Streamlined processes enable rapid iteration and faster time-to-market."
          />
          <BenefitCard
            title="Improved Security"
            description="Built-in security measures with infrastructure-as-code, automated vulnerability scanning, and compliance monitoring to protect your applications."
          />
          <BenefitCard
            title="Cost Optimization"
            description="Right-sizing resources, reserved instances, and automated scaling help reduce cloud costs by up to 40% while maintaining performance."
          />
          <BenefitCard
            title="High Scalability"
            description="Auto-scaling infrastructure that adapts to your traffic demands. Handle millions of users without manual intervention or downtime."
          />
          <BenefitCard
            title="Reliability"
            description="Multi-region deployments, disaster recovery, and automated failover ensure 99.9% uptime for your critical applications."
          />
          <BenefitCard
            title="Seamless Integration"
            description="Our solutions integrate seamlessly with your existing tools, APIs, and workflows, reducing operational bottlenecks."
          />
        </div>
        <CenterButton text="Click here to know more about our Cloud Services" />
      </Section>

      {/* ================= QUOTE BANNER ================= */}
      <QuoteBanner
        quote="AAIBUZZ focuses on real project management, achieving success for our Client's Cloud & DevOps projects no matter what."
      />

      {/* ================= SUB SERVICES ================= */}
      <Section bg="bg-[#f8fbff]">
        <Title>Our Sub Services</Title>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          Refer to the diverse range of Cloud & DevOps services that we offer:
        </p>
        <Grid cols="md:grid-cols-3">
          <SubService title="AWS / Cloud Infrastructure Setup" />
          <SubService title="CI/CD Pipeline Implementation" />
          <SubService title="Docker & Kubernetes" />
          <SubService title="Monitoring & Logging" />
          <SubService title="Cloud Security & Compliance" />
          <SubService title="Cost Optimization & Audits" />
          <SubService title="Infrastructure as Code (IaC)" />
          <SubService title="Cloud Migration Services" />
          <SubService title="DevSecOps Integration" />
        </Grid>
      </Section>

      {/* ================= QUOTE BANNER 2 ================= */}
      <QuoteBanner
        quote="AAIBUZZ just doesn't build Cloud Solutions; we tailor technology to the unique needs of business, ensuring innovation and efficiency to drive success."
      />

      {/* ================= PRICING MODELS ================= */}
      <Section>
        <Title>Our Pricing Models</Title>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          Models to harness our expertise in Cloud & DevOps Services
        </p>
        <Grid cols="md:grid-cols-3">
          <Pricing
            icon={<FaMoneyBillWave />}
            title="Fixed Price Model"
            desc="The team operates within a defined Scope of Work, adhering to specified timelines and costs. The project cost is agreed upon upfront and will remain fixed throughout the project."
            features={[
              "Project scope detailed before contract",
              "Total cost agreed upfront",
              "Clear timelines and milestones",
              "Change requests handled on pro-rata basis",
            ]}
          />
          <Pricing
            icon={<FaProjectDiagram />}
            title="Hire Dedicated Model"
            desc="The Client hires a dedicated team or a single expert to work exclusively on the project. This team is an extension of your in-house staff."
            features={[
              "Work on evolving requirements",
              "Complete control over priorities",
              "Ideal for long-term projects",
              "Continuous development support",
            ]}
          />
          <Pricing
            icon={<FaUsers />}
            title="Onsite Model"
            desc="The development team works directly at the Client's location by collaborating with the in-house team for face-to-face interaction."
            features={[
              "Better communication",
              "Direct project oversight",
              "Real-time adjustments",
              "Seamless collaboration",
            ]}
          />
        </Grid>
      </Section>

      {/* ================= BEST PRACTICES ================= */}
      <Section bg="bg-[#f8fbff]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              Best Practices
            </h2>
            <p className="text-slate-600 mb-8">
              How we ensure success in Cloud & DevOps services
            </p>
            <p className="text-slate-600">
              Besides technical expertise, AAIBUZZ prioritizes several critical factors for achieving successful Cloud & DevOps goals, ensuring high-end infrastructure quality. We uphold rigorous processes and practices integral to delivering objectives and maintaining top-notch quality by adhering to budget constraints and meeting project timelines.
            </p>
          </div>
          <div className="h-64 md:h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
            <FaCogs className="text-blue-600 text-8xl opacity-30" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <BestPractice
            icon={<FaSearch />}
            title="Scoping"
            description="Our standard method of gathering requirements from the Client ensures our project planning is structured and any changes are managed efficiently."
          />
          <BestPractice
            icon={<FaDollarSign />}
            title="Cost Estimation"
            description="The AAIBUZZ team identifies critical factors to estimate costs and implements best practices for cost optimization."
          />
          <BestPractice
            icon={<FaChartLine />}
            title="Quality Management"
            description="Our KPIs related to quality and project health are robust, ensuring quality control at each stage of development."
          />
          <BestPractice
            icon={<FaHandshake />}
            title="Collaboration"
            description="Effective communication between the Client and our team is crucial. AAIBUZZ prioritizes robust and transparent communication channels."
          />
          <BestPractice
            icon={<FaLock />}
            title="Security Management"
            description="At AAIBUZZ, we ensure that our infrastructure is secure and scalable. Our rigorous security management procedures remain intact throughout."
          />
          <BestPractice
            icon={<FaBook />}
            title="Knowledge Management"
            description="At AAIBUZZ, we significantly emphasize comprehensive documentation throughout all stages of our DevOps processes."
          />
        </div>

        <CenterButton text="Get details about the approach to your project" />
      </Section>

      {/* ================= BUSINESS VERTICALS ================= */}
      <Section>
        <Title>Business Verticals</Title>
        <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
          AAIBUZZ is an experienced technology partner for every booming industry and provides the best solutions. We understand industry-specific requirements and propose efficient cloud solutions.
        </p>
        <Grid cols="md:grid-cols-4 sm:grid-cols-2">
          <Industry icon={<FaUniversity />} title="Education" />
          <Industry icon={<FaHospital />} title="Healthcare" />
          <Industry icon={<FaShoppingCart />} title="E-Commerce" />
          <Industry icon={<FaIndustry />} title="Manufacturing" />
        </Grid>
        <CenterButton text="Get details about the approach to your project" />
      </Section>

      {/* ================= TECH STACK ================= */}
      <Section bg="bg-[#f8fbff]">
        <Title>Tech Stack</Title>
        <div className="space-y-12">
          <TechCategory title="Cloud Providers">
            <TechItem icon={<FaAws />} name="AWS" />
            <TechItem icon={<FaCloud />} name="Azure" />
            <TechItem icon={<SiGooglecloud />} name="Google Cloud" />
          </TechCategory>

          <TechCategory title="Containerization & Orchestration">
            <TechItem icon={<FaDocker />} name="Docker" />
            <TechItem icon={<SiKubernetes />} name="Kubernetes" />
          </TechCategory>

          <TechCategory title="Infrastructure as Code">
            <TechItem icon={<SiTerraform />} name="Terraform" />
            <TechItem icon={<SiAnsible />} name="Ansible" />
          </TechCategory>

          <TechCategory title="CI/CD Tools">
            <TechItem icon={<SiJenkins />} name="Jenkins" />
            <TechItem icon={<SiGithubactions />} name="GitHub Actions" />
            <TechItem icon={<SiGitlab />} name="GitLab CI" />
          </TechCategory>

          <TechCategory title="Monitoring & Logging">
            <TechItem icon={<SiPrometheus />} name="Prometheus" />
            <TechItem icon={<SiGrafana />} name="Grafana" />
            <TechItem icon={<SiElasticsearch />} name="Elasticsearch" />
          </TechCategory>
        </div>
      </Section>

      {/* ================= WORKING PROCESS ================= */}
      <Section>
        <Title>Our Working Process</Title>
        <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
          Our success in the cloud infrastructure and DevOps space hinges on our robust operations.
        </p>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="h-64 md:h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
            <FaProjectDiagram className="text-blue-600 text-8xl opacity-30" />
          </div>
          <div className="space-y-6">
            <ProcessStep
              number="01"
              icon={<FaLightbulb />}
              title="Ideation"
              description="By thoroughly understanding the client's requirements and creatively brainstorming ideas to address the problem statement, we aim to formulate a comprehensive infrastructure plan."
            />
            <ProcessStep
              number="02"
              icon={<FaPencilRuler />}
              title="Plan"
              description="We start by defining project goals and breaking them down into achievable milestones. We then establish a timeline and assign dedicated DevOps teams."
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProcessCard
            icon={<FaPencilRuler />}
            title="Design"
            description="We build infrastructure architecture diagrams and runbooks to visually conceptualize the final cloud setup before implementation."
          />
          <ProcessCard
            icon={<FaCode />}
            title="Develop"
            description="Once the tech stack is finalized, our dedicated team initiates the infrastructure setup, meticulously adhering to defined milestones."
          />
          <ProcessCard
            icon={<FaClipboardCheck />}
            title="Test"
            description="We conduct rigorous infrastructure testing using load testing, security scans, and disaster recovery drills."
          />
          <ProcessCard
            icon={<FaRocket />}
            title="Deploy"
            description="After completing testing, we deploy the infrastructure in staging, then production upon client approval."
          />
        </div>
      </Section>

      {/* ================= CASE STUDIES ================= */}
      <Section bg="bg-[#f8fbff]">
        <Title>Case Studies</Title>
        <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
          We have delivered 100+ cloud infrastructure projects and solved complex requirements of our Clients with our standard SOPs and highly efficient team.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CaseStudy
            image="bg-gradient-to-br from-blue-400 to-blue-600"
            title="E-Commerce Cloud Migration"
            description="Migrated a high-traffic e-commerce platform to AWS with 99.99% uptime and 60% cost reduction."
            category="Cloud Migration"
          />
          <CaseStudy
            image="bg-gradient-to-br from-slate-400 to-slate-600"
            title="FinTech CI/CD Pipeline"
            description="Implemented automated CI/CD pipelines for a fintech startup, reducing deployment time from 2 hours to 5 minutes."
            category="DevOps Automation"
          />
          <CaseStudy
            image="bg-gradient-to-br from-orange-400 to-orange-600"
            title="Healthcare Infrastructure"
            description="Built HIPAA-compliant cloud infrastructure for a healthcare provider with multi-region disaster recovery."
            category="Cloud Infrastructure"
          />
        </div>
        <CenterButton text="Explore the list of projects completed by us" />
      </Section>

      {/* ================= TESTIMONIALS ================= */}
      <Section>
        <Title>What Clients Say</Title>
        <Grid cols="md:grid-cols-2">
          <Testimonial
            quote="AAIBUZZ-style DevOps execution helped us scale without downtime."
            author="CTO, SaaS Startup"
          />
          <Testimonial
            quote="Our cloud costs reduced by 40% after their optimization."
            author="IT Head, Enterprise Client"
          />
        </Grid>
      </Section>

      {/* ================= BEST PRACTICES BANNER ================= */}
      <OrangeBanner
        small="We plan your"
        highlight="GOAL STRATEGY"
        text="and ensure best practices across cloud delivery."
      />

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 bg-[#0f172a] text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          WORK WITH THE PRO CLOUD & DEVOPS TEAM
        </h2>
        <p className="text-slate-300 mb-8 max-w-3xl mx-auto">
          Would you like to have professional infrastructure? Let's talk about it!
        </p>
        <button className="px-10 py-4 bg-blue-600 rounded-md hover:bg-blue-700 transition hover:-translate-y-1 hover:shadow-lg">
          Get Started
        </button>
      </section>
    </section>
  );
}

/* ================= COMPONENTS ================= */

const Section = ({ children, bg = "bg-white" }: { children: React.ReactNode; bg?: string }) => (
  <section className={`py-20 ${bg}`}>
    <div className="max-w-7xl mx-auto px-6">{children}</div>
  </section>
);

const Title = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-slate-900">
    {children}
  </h2>
);

const Grid = ({ children, cols = "md:grid-cols-2" }: { children: React.ReactNode; cols?: string }) => (
  <div className={`grid grid-cols-1 ${cols} gap-12`}>{children}</div>
);

const Info = ({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
  <div className="flex gap-6">
    <div className="text-5xl text-blue-600">{icon}</div>
    <div>
      <h3 className="font-semibold text-xl mb-2">{title}</h3>
      <p className="text-slate-600 text-sm">{children}</p>
    </div>
  </div>
);

const CenterButton = ({ text }: { text: string }) => (
  <div className="text-center mt-16">
    <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-md transition hover:-translate-y-1 hover:shadow-lg hover:bg-blue-600 hover:text-white">
      {text}
    </button>
  </div>
);

const SubService = ({ title }: { title: string }) => (
  <div className="flex items-center gap-4 p-4 bg-white rounded-lg border shadow-sm hover:shadow-md transition">
    <FaCheckCircle className="text-blue-600 text-xl flex-shrink-0" />
    <p className="font-medium">{title}</p>
  </div>
);

const Pricing = ({ icon, title, desc, features }: { icon: React.ReactNode; title: string; desc: string; features?: string[] }) => (
  <div className="p-8 bg-white rounded-2xl border shadow-sm hover:shadow-md transition">
    <div className="text-4xl text-blue-600 mb-6">{icon}</div>
    <h3 className="font-bold text-xl mb-3">{title}</h3>
    <p className="text-slate-600 text-sm mb-4">{desc}</p>
    {features && (
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-slate-600">
            <FaCheckCircle className="text-blue-600 mt-0.5 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
);

const Testimonial = ({ quote, author }: { quote: string; author: string }) => (
  <div className="bg-white p-10 rounded-2xl shadow-sm border">
    <FaQuoteLeft className="text-blue-200 text-4xl mb-4" />
    <p className="italic mb-6 text-slate-700">"{quote}"</p>
    <p className="font-bold text-blue-600">— {author}</p>
  </div>
);

const Industry = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
  <div className="flex flex-col items-center bg-blue-600 text-white p-8 rounded-lg hover:scale-105 transition cursor-pointer">
    <div className="text-4xl mb-4">{icon}</div>
    <p className="font-semibold">{title}</p>
  </div>
);

const SplitSection = ({ title, text }: { title: string; text: string }) => (
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h3 className="text-3xl font-bold mb-4">{title}</h3>
        <p className="text-slate-600">{text}</p>
      </div>
      <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
        <FaCloud className="text-blue-600 text-8xl opacity-30" />
      </div>
    </div>
  </section>
);

const OrangeBanner = ({ small, highlight, text }: { small: string; highlight: string; text: string }) => (
  <section className="bg-orange-500 py-20 text-white">
    <div className="max-w-7xl mx-auto px-6">
      <p className="text-lg mb-3">{small}</p>
      <span className="inline-block bg-black px-6 py-2 text-xl font-bold mb-4">
        {highlight}
      </span>
      <p>{text}</p>
    </div>
  </section>
);

const BenefitCard = ({ title, description }: { title: string; description: string }) => (
  <div className="p-6 border rounded-lg bg-white shadow-sm hover:shadow-md transition">
    <h4 className="font-bold text-lg mb-3 text-slate-900">{title}</h4>
    <p className="text-slate-600 text-sm">{description}</p>
  </div>
);

const QuoteBanner = ({ quote }: { quote: string }) => (
  <section className="py-12 bg-slate-100">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <FaQuoteLeft className="text-blue-200 text-3xl mx-auto mb-4" />
      <p className="text-xl font-medium text-slate-700 italic">{quote}</p>
    </div>
  </section>
);

const BestPractice = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="p-6 bg-white rounded-lg border shadow-sm hover:shadow-md transition">
    <div className="text-3xl text-blue-600 mb-4">{icon}</div>
    <h4 className="font-bold text-lg mb-2">{title}</h4>
    <p className="text-slate-600 text-sm">{description}</p>
  </div>
);

const TechCategory = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h3 className="text-lg font-bold text-slate-700 mb-6 uppercase tracking-wide">{title}</h3>
    <div className="flex flex-wrap gap-6">{children}</div>
  </div>
);

const TechItem = ({ icon, name }: { icon: React.ReactNode; name: string }) => (
  <div className="flex flex-col items-center p-4 bg-white rounded-lg border shadow-sm hover:shadow-md transition w-28">
    <div className="text-4xl text-slate-700 mb-2">{icon}</div>
    <span className="text-sm font-medium text-slate-600">{name}</span>
  </div>
);

const ProcessStep = ({ number, icon, title, description }: { number: string; icon: React.ReactNode; title: string; description: string }) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0">
      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
        {number}
      </div>
    </div>
    <div>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-600 text-xl">{icon}</span>
        <h4 className="font-bold text-lg">{title}</h4>
      </div>
      <p className="text-slate-600 text-sm">{description}</p>
    </div>
  </div>
);

const ProcessCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="p-6 bg-white rounded-lg border shadow-sm hover:shadow-md transition text-center">
    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
      <span className="text-blue-600 text-2xl">{icon}</span>
    </div>
    <h4 className="font-bold text-lg mb-2">{title}</h4>
    <p className="text-slate-600 text-sm">{description}</p>
  </div>
);

const CaseStudy = ({ image, title, description, category }: { image: string; title: string; description: string; category: string }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition group cursor-pointer border">
    <div className={`h-48 ${image} flex items-center justify-center`}>
      <FaCloud className="text-white text-6xl opacity-50 group-hover:scale-110 transition" />
    </div>
    <div className="p-6">
      <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">{category}</span>
      <h4 className="font-bold text-lg mt-2 mb-3 group-hover:text-blue-600 transition">{title}</h4>
      <p className="text-slate-600 text-sm">{description}</p>
    </div>
  </div>
);
