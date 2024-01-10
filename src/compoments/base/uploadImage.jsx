import React, { useState } from 'react';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import axios from 'axios';

const UploadImageBox = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null); // State để lưu đường dẫn URL của ảnh
  const [publicId, setPublicId] = useState(null); // State để lưu publicId của ảnh

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    try {
      const formData = new FormData();
      formData.append('files', file);

      const response = await axios.post('http://localhost:8989/api/upload-files', formData);

      // Lấy đường dẫn (url) và publicId từ API response
      const imageUrl = response.data.path;
      const publicId = response.data.filename;

      // Lưu đường dẫn URL và publicId vào state
      setImageUrl(imageUrl);
      setPublicId(publicId);
      
      console.log('Image uploaded successfully:', response.data);
      // Hiển thị ảnh bằng URL
    } catch (error) {
      console.error('Error uploading file:', error.message);
    }
  };

  const handleDeleteClick = async () => {
    try {
      // Gọi API để xóa ảnh dựa trên publicId
      const response = await axios.delete(`http://localhost:8989/api/delete-files/${publicId}`);

      // Xử lý logic sau khi ảnh được xóa thành công
      console.log('Image deleted successfully:', response.data);

      // Đặt lại state sau khi xóa ảnh
      setImageUrl(null);
      setPublicId(null);
      setSelectedFile(null);
    } catch (error) {
      console.error('Error deleting image:', error.message);
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Upload Image
        </Typography>
        <Box display="flex" flexDirection="column" alignItems="center">
          <input
            type="file"
            accept="image/*"
            id="upload-input"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <label htmlFor="upload-input">
            <Button
              variant="contained"
              color="primary"
              component="span"
            >
              Choose Image
            </Button>
          </label>
          {imageUrl && (
            <div className='flex flex-col items-center'>
              <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '300px', marginTop: '16px' }} />
              <Button
                style={{ alignItems: 'center', marginTop: '16px' }}
                variant="contained"
                color="primary"
                onClick={handleDeleteClick}
                mt={2}
              >
                Delete
              </Button>
            </div>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default UploadImageBox;
