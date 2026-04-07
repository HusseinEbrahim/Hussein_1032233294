import { useState } from 'react';
import axios from 'axios';

export default function AddStudent() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    course: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.course) return;

    await axios.post('http://localhost:3000/student/add', form);
    window.location.reload();

    setForm({ name: '', email: '', course: '' });
  };

  return (
    <div>
      <h3>Add Student</h3>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          placeholder="Course"
          value={form.course}
          onChange={(e) =>
            setForm({ ...form, course: e.target.value })
          }
        />

        <button className="add-btn">Add Student</button>
      </form>
    </div>
  );
}