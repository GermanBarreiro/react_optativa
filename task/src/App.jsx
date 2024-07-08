import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './componet/login';
import Home from './componet/home';
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}