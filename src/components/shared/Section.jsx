export const Section = ({ children, bg = "bg-white" }) => {
  return (
    <section className={`py-20 ${bg}`}>
      <div className="max-w-7xl mx-auto px-6">{children}</div>
    </section>
  );
};
