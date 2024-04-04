import React, { useState, useEffect } from 'react';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import axios from 'axios';

const UploadImageBox = ({ urlOld, onImageUpload, isNew ,assetIdOld }) => {
  const [selectedFile, setSelectedFile] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [publicId, setPublicId] = useState("");

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    try {
      const formData = new FormData();
      formData.append('image', file);

      const response = await axios.post('http://localhost:3000/api/image/addImage', formData);

      console.log(response)

      const newImageUrl  = response.data.url;
      const newPublicId  = response.data.filename;

      setImageUrl(newImageUrl);
      setPublicId(newPublicId);

      // Call the callback function to update the parent component state
      onImageUpload({ imageUrl: isNew ? newImageUrl : urlOld, assetId: newPublicId });
    } catch (error) {
      console.error('Error uploading file:', error.message);
    }
  };

  console.log(imageUrl,publicId,urlOld)

  const handleDeleteClick = async () => {
    try {
      if (isNew) {
        // Nếu là mới, xóa theo publicId
        if (publicId) {
          const response = await axios.delete(`http://localhost:8989/api/delete-files/${publicId}`);
          console.log('Image deleted successfully:', response.data);
          setImageUrl(null);
          setPublicId(null);
          setSelectedFile(null);
        }
      } else {
        // Nếu là cập nhật, xóa theo assetIdOld
        if (assetIdOld) {
          const response = await axios.delete(`http://localhost:8989/api/delete-files/${assetIdOld}`);
          console.log('Image deleted successfully:', response.data);
          urlOld = "";
        }
      }
      
      
  
      // Call the callback function to update the parent component state
      onImageUpload({ imageUrl: "", assetId: "" });
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
            <Button variant="contained" color="primary" component="span">
              Choose Image
            </Button>
          </label>
          {(imageUrl || urlOld) && (
            <div className='flex flex-col items-center'>
              <img src={urlOld || imageUrl} alt="Uploaded" style={{ maxWidth: '300px', marginTop: '16px' }} />
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
