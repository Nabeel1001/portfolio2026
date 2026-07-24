const Button = ({ children }) => {
  return (
    <button
      className="
      px-6
      py-3
      rounded-xl
      bg-blue-600
      hover:bg-blue-700
      duration-300
      font-semibold
      "
    >
      {children}
    </button>
  );
};

export default Button;