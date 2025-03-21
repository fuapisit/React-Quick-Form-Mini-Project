const TextArea = ({ value, onChange }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-4 mt-6 text-left">ความคิดเห็นเกี่ยวกับหนัง</label>
      <textarea
        value={value}
        onChange={onChange}
        placeholder="พิมพ์ความคิดเห็นของคุณที่นี่..."
        className="w-full h-24 px-3 py-2 border rounded-lg"
      />
    </div>
  );
  export default TextArea;
  