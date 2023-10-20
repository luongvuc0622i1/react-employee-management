import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import List from './components/List';
import isUserLoggedIn from './supports/isUserLoggedIn';

function App() {
  const isLoggedIn = isUserLoggedIn();
  return (
    <div>
      {isLoggedIn ? (
        // Hiển thị nút chức năng khi đã đăng nhập
        <div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/profile'>Profile</Link>
        </li>
        <li style={{display: localStorage.getItem('role') === 'ROLE_ADMIN' ? '' : 'none'}}>
          <Link to='/list'>List</Link>
        </li>
      </ul>
      <hr />
      </div>
      ) : ''}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
