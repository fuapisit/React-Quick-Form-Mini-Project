const InputField = ({ label, type, placeholder, value, onChange }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1 mt-6 text-left">{label} *</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className="w-full px-3 py-2 border rounded-lg"
      />
    </div>
  );
  
  export default InputField;
  