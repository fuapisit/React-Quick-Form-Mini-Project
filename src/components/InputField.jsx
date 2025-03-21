export default function InputField({ label, type, placeholder, value, onChange, error }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label} *</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`mt-1 p-2 block w-full border ${error ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm`}
        required
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
