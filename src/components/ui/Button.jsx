const Button = ({ children, onClick }) => {
  return (
    <button
      className="bg-primary text-white px-8 py-2  rounded-md w-fit"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
