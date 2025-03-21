const Button = ({ label, type, onClick, className }) => (
    <button
      type={type}  
      onClick={onClick}  
      className={`px-4 py-2 rounded-lg ${className} cursor-pointer hover:opacity-80`}  
    >
      {label}  
    </button>
  );
  
  export default Button;
  