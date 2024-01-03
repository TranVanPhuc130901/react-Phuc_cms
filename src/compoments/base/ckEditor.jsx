import React, { useRef, useEffect } from 'react';
import ClassicEditor from '../../../public/config/ckEditorConfig'; // Đường dẫn đến file cấu hình

const CKEditorWrapper = () => {
  const editorRef = useRef();

  useEffect(() => {
    // Kích thước Editor
    ClassicEditor
      .create(editorRef.current, {
        cloudinary: {
          cloudName: 'dpnlgxwkp', // Thay thế bằng tên Cloudinary của bạn
          uploadPreset: 'octe1lva', // Thay thế bằng upload preset của bạn
        },
        toolbar: [
          'heading',
          '|',
          'bold',
          'italic',
          'link',
          '|',
          'bulletedList',
          'numberedList',
          '|',
          'indent',
          'outdent',
          '|',
          'blockQuote',
          'insertTable',
          '|',
          'undo',
          'redo',
          '|',
          'imageUpload',
          'imageInsert',
          'imageBlock',
        ],
      })
      .catch(error => {
        console.error(error);
      });

    return () => {
      ClassicEditor.destroy();
    };
  }, []);

  return (
    <div>
      <div ref={editorRef}></div>
    </div>
  );
};

export default CKEditorWrapper;
