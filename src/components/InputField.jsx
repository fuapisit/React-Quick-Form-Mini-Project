const InputField = ({ label, type, placeholder, value, onChange }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1 mt-6 text-left">{label} *</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
      />
    </div>
  );
  
  export default InputField;
  