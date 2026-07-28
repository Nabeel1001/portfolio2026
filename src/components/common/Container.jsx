const Container = ({ children, className = "" }) => {
  return (
    <div
      className={`
        w-full
        max-w-350
        mx-auto
        px-6
        lg:px-8
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Container;