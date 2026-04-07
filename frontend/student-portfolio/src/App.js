import './App.css';
import AddStudent from './components/AddStudent';
import ViewStudents from './components/ViewStudents';

export default function App() {
  return (
    <div className="container">
      <h1>Student Portfolio</h1>
      <AddStudent />
      <ViewStudents />
    </div>
  );
}