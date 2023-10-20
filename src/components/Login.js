import React, { useState } from 'react';
import { login } from '../supports/apiService.js'; // Import service API

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await login(username, password); // Gọi API đăng nhập
      localStorage.setItem('id', response.data.id);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('role', response.data.authorities[0].authority);
    } catch (error) {
      // Xử lý lỗi
      console.error('Lỗi đăng nhập:', error);
    }
  }

  return (
    <div>
      <h2>Đăng nhập</h2>
      <input
        type="text"
        placeholder="Tên đăng nhập"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Mật khẩu"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Đăng nhập</button>
    </div>
  );
}