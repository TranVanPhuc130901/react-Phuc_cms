import React, { useState, useEffect } from 'react';
// import {NotificationContainer, NotificationManager} from 'react-notifications';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const LoginForm = () => {
  const [formData, setFormData] = useState({
    // UserEmail: '',
    // UserPasword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate(); // Utilize useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Implement login logic here, making a fetch request to your backend API
    // Example using fetch (replace with your actual API endpoint and logic):
    const response = await fetch('http://localhost:3000/api/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await response.json(); // Get response data (e.g., token)
 // Chờ promise hoàn thành trước khi sử dụng
    if (data.StatusCode === 1) {
      localStorage.setItem('authToken', data.AccessToken); // Example
      localStorage.setItem('authRsToken', data.RefreshToken);

      // 2. Redirect to admin page using useNavigate
      navigate('/admin');
    } else {
      console.log(data.StatusCode)

      alert("Đăng nhập thất bại")
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[url('../../../public/images/login/bg.jpg')] bg-[center] bg-[cover] ">
      <div className="border border-gray-300 rounded-lg w-[600px] h-[400px] p-8 flex flex-col gap-2 bg-white">
        <h2 className="text-center font-bold text-2xl">Đăng nhập</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <label className="w-[120px]" htmlFor="username">Tên người dùng:</label>
            <input
              className="w-[calc(100%-128px)] px-4 py-2 outline-none rounded-xl"
              type="text"
              id="username"
              name="UserEmail"
              value={formData.UserEmail}
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-2 items-center">
            <label className="w-[120px]" htmlFor="password">Mật khẩu:</label>
            <input
              className="w-[calc(100%-128px)] px-4 py-2 outline-none rounded-xl"
              type="password"
              id="password"
              name="UserPasword"
              value={formData.UserPasword}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-4 py-2 rounded-xl w-[calc(100%-128px)] ml-auto"
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
