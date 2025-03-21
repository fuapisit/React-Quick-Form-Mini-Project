const TextArea = ({ value, onChange }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-4 mt-6 text-left">ความคิดเห็นเกี่ยวกับหนัง</label>
      <textarea
        value={value}
        onChange={onChange}
        placeholder="พิมพ์ความคิดเห็นของคุณที่นี่..."
        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
      />
    </div>
  );
  export default TextArea;
  