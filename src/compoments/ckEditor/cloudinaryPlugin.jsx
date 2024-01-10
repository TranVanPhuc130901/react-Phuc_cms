// CloudinaryFileManagerPlugin.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CloudinaryFileManagerPlugin = ({ onImageSelected }) => {
  const [images, setImages] = useState([]);


  const filePickerCallback = (file) => {
      
  }
  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await axios.get('http://localhost:8989/api/get-files');
        setImages(response.data.images);
      } catch (error) {
        console.error('Failed to fetch images:', error);
      }
    };

    getImages();
  }, []);

  const handleImageClick = (image) => {
    // Do something with the selected image, for example, insert it into the editor.
    if (onImageSelected) {
      onImageSelected(image.secure_url);
    }
  };

  return (
    <div className='cloudinary-file-manager-container fixed top-0 left-0 w-full h-full bg-[rgba(255,255,255,0.75)]'>
        <div className='cloudinary-file-manager absolute  w-[1200px] h-[420px] overflow-y-scroll z-20 border-[1px] border-[#000] p-[20px] bg-[#fff] flex gap-[20px] flex-wrap top-[62%] left-1/2 translate-x-[-50%] translate-y-[-50%]'>
            {images.map((image) => (
                <div className='item-cloudinary w-[calc((100%-60px)/4)]' key={image.asset_id}>
                    <img
                        style={{  height: '150px', objectFit: 'cover', cursor: 'pointer', width: '100%' }}
                        src={image.secure_url}
                        alt={image.alt}
                        onClick={() => handleImageClick(image)}
                        // onKeyDown={(event) => handleKeyDown(event, image)}
                        tabIndex={0}
                    />
                    <div className='item-name'>image name :{image.public_id}</div>
                    <div className='item-size'>image size:{image.bytes / 1024}</div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default CloudinaryFileManagerPlugin;
