export const Grid = ({ children, cols = "md:grid-cols-2" }) => {
  return (
    <div className={`grid grid-cols-1 ${cols} gap-12`}>
      {children}
    </div>
  );
};
