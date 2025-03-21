import { useState } from "react";
import Header from "../components/Header";
import InputField from "../components/InputField";
import MovieRadio from "../components/MovieRadio";
import TextArea from "../components/TextArea";
import Button from "../components/Button";
import movies from "../assets/MovieList"; 

export default function SurveyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedMovie, setSelectedMovie] = useState("");
  const [comment, setComment] = useState("");
  
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    selectedMovie: "",
  });

  const validateEmail = (email) => {
    return /^[a-zA-Z0-9._%+-]+@.+\..+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = { name: "", email: "", selectedMovie: "" };

    if (!name.trim()) {
      newErrors.name = "โปรดใส่ชื่อของคุณ";
    }
    if (!email.trim()) {
      newErrors.email = "โปรดใส่อีเมลของคุณ";
    } else if (!validateEmail(email)) {
      newErrors.email = "อีเมลไม่ถูกต้อง";
    }
    if (!selectedMovie) {
      newErrors.selectedMovie = "กรุณาเลือกหนังที่คุณชื่นชอบ";
    }

    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email && !newErrors.selectedMovie) {
      alert(`ส่งแบบฟอร์มสำเร็จ! \n\nชื่อ: ${name} \nอีเมล: ${email} \nหนังที่เลือก: ${selectedMovie} \nความคิดเห็น: ${comment || "ไม่มี"}`);
    }
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setSelectedMovie("");
    setComment("");
    setErrors({ name: "", email: "", selectedMovie: "" });
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <Header />
      <form className="p-6" onSubmit={handleSubmit}>
        <InputField label="ชื่อ *" type="text" placeholder="กรุณากรอกชื่อของคุณ" value={name} onChange={(e) => setName(e.target.value)} error={errors.name} />
        <InputField label="อีเมล *" type="email" placeholder="example@email.com" value={email} onChange={(e) => setEmail(e.target.value)} error={errors.email} />
        <MovieRadio movies={movies} selectedMovie={selectedMovie} onChange={(e) => setSelectedMovie(e.target.value)} error={errors.selectedMovie} />
        <TextArea label="ความคิดเห็นเกี่ยวกับหนัง" value={comment} onChange={(e) => setComment(e.target.value)} />
        <div className="flex justify-between mt-4">
          <Button label="🔄 รีเซ็ต" type="button" className="bg-gray-300" onClick={handleReset} />
          <Button label="📩 ส่งแบบสำรวจ" type="submit" className="bg-purple-600 text-white" />
        </div>
      </form>
    </div>
  );
}
