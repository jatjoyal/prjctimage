import logo from './logo.svg';
import './App.css';
import Student from './components/admin/student/Student';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Studentview from './components/admin/student/Studentview';
import Studentedit from './components/admin/student/Studentedit';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path={'/student'} element={<Student method='post'/>}></Route>
        <Route path={'/studentview'} element={<Studentview method='get'/>}></Route>
        
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
