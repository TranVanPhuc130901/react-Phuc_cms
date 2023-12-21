import React, { useState } from 'react';

const LoginForm = () => {
  // Sử dụng useState để theo dõi trạng thái của biểu mẫu
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  // Xử lý khi người dùng thay đổi giá trị trên biểu mẫu
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Xử lý khi người dùng nhấn nút đăng nhập
  const handleSubmit = (e) => {
    e.preventDefault();
    // Thực hiện xử lý đăng nhập ở đây, có thể sử dụng formData.username và formData.password
    console.log('Đăng nhập với:', formData.username, formData.password);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[url('../../../public/images/login/bg.jpg')] bg-[center] bg-[cover] ">
      <div className="border border-gray-300 rounded-lg w-[600px] h-[400px] p-8 flex flex-col gap-2 
      bg-white">
      <h2 className='text-center font-bold text-2xl'>Đăng nhập</h2>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <div className='flex gap-2 items-center'>
            <label className='w-[120px]' htmlFor="username">Tên người dùng:</label>
            <input className='w-[calc(100%-128px)] px-4 py-2 outline-none rounded-xl'
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className='flex gap-2 items-center'>
            <label className='w-[120px]' htmlFor="password">Mật khẩu:</label>
            <input className='w-[calc(100%-128px)] px-4 py-2 outline-none rounded-xl'
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-4 py-2 rounded-xl w-[calc(100%-128px)] ml-auto'>Đăng nhập</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
