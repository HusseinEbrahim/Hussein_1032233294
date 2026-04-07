import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ViewStudents() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const res = await axios.get('http://localhost:3000/student/view');
    setStudents(res.data);
  };

  const deleteStudent = async (id) => {
    await axios.delete(`http://localhost:3000/student/delete/${id}`);
    fetchStudents();
  };

  const updateStudent = async (id) => {
    const name = prompt('Enter new name');
    const email = prompt('Enter new email');
    const course = prompt('Enter new course');

    if (!name || !email || !course) return;

    await axios.put(`http://localhost:3000/student/update/${id}`, {
      name,
      email,
      course
    });

    fetchStudents();
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div>
      <h3>Student List</h3>

      {students.length === 0 ? (
        <p>No students found</p>
      ) : (
        students.map((s) => (
          <div key={s._id} className="student-card">
            <b>{s.name}</b><br />
            {s.email}<br />
            {s.course}

            <br />

            <button
              className="update-btn"
              onClick={() => updateStudent(s._id)}
            >
              Update
            </button>

            <button
              className="delete-btn"
              onClick={() => deleteStudent(s._id)}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}