export const CenterButton = ({ text, href = "/contact-us-software-development-company-in-india" }) => {
  return (
    <div className="text-center mt-16">
      <a
        href={href}
        className="inline-block px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-md transition hover:-translate-y-1 hover:shadow-lg hover:bg-blue-600 hover:text-white"
      >
        {text}
      </a>
    </div>
  );
};