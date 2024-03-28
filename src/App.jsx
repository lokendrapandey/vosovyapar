import { useEffect } from 'react';
import { Routes, Route, useNavigate} from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Products from './Components/Products';
import Blogs from './Components/Blogs' 
import Defdesh from './Defdesh';
import Signout from './Signout';
import './App.css'



function App() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    const checkTokenValidity = () => {
      const storedToken = localStorage.getItem("token");
      if (!storedToken || storedToken !== token) {
        navigate('/login');
      }
    };

    // Check token validity on component mount and on token change
    checkTokenValidity();
    window.addEventListener('storage', checkTokenValidity);

    return () => {
      window.removeEventListener('storage', checkTokenValidity);
    };
  }, [navigate, token]);

  return (
    <div>
<Routes>
  <Route path='/login' element={<Login />} />
  <Route path='/dashboard' element={<Dashboard />}>
    <Route path="/dashboard/blogs" element={<Blogs/>} />
    <Route path="/dashboard/products" element={<Products/>} />
    <Route path="/dashboard/home" element={<Defdesh/>} />
  </Route>
</Routes>
    </div>
  );
}

export default App;
