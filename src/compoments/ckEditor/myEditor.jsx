// MyEditor.jsx
import React, { useEffect, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import CloudinaryFileManagerPlugin from './cloudinaryPlugin';
import axios from 'axios';

// khai báo tên cloudDinary
const cloudName = 'dpnlgxwkp';
// khai báo tên unsignedUploadPreset(dùng khi upload)
const unsignedUploadPreset = 'octe1lva';

const MyEditor = ({onContentChange, contentOld}) => {
  const [content, setContent] = useState('');
  const [isFileManagerVisible, setIsFileManagerVisible] = useState(false);


  const handleEditorChange = (e, editor) => {
    const newContent = editor.getContent();
    setContent(newContent);
    onContentChange(newContent); // Truyền giá trị lên cho cha
  };


  const handleImageSelected = (imageUrl) => {
    const editor = tinymce.activeEditor;
    // Insert the selected image into the editor.
    // const currentContent = editor.getContent()
    const imageHtml = `<img src="${imageUrl}" alt="Cloudinary Image" />`;
    // You can customize this part based on your TinyMCE setup.
    // editor.getContent().execCommand('mceInsertContent', false, imageUrl);
    editor.insertContent(imageHtml);
    // editor.getContent().setContent(currentContent);
    setContent(editor.getContent());
    // const newContent = currentContent + imageHtml;
    // setContent(newContent);
    setIsFileManagerVisible(false);
  };

  return (
    <div className='box_tiny'>
      <Editor
        apiKey={`lxm8cy4jc57hcmxw5dc0o5xaf8bbk6ig7t1dcqnys1s4rnvr`}
        init={{
          height: 600,
          //   plugins: 'cloudinaryFileManager mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss', // Add your other plugins here
          //  toolbar: ' cloudinaryFileManagerButton | undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat', // Add your other toolbar buttons here
          plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker',
          toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
          images_upload_base_path: `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          images_upload_credentials: true,
          file_picker_types: 'image',
          file_picker_callback: (cb) => {
            
            // Open file picker
            const input = document.createElement('input');
            input.setAttribute('type', 'file');
            input.setAttribute('accept', 'image/*');
            
            input.onchange = () => {
              const file = input.files[0];
              const reader = new FileReader();
              reader.onload = function () {
                const id = 'blobid' + new Date().getTime();
                const blobCache = window.tinymce.activeEditor.editorUpload.blobCache;
                const base64 = reader.result.split(',')[1];
                const blobInfo = blobCache.create(id, file, base64);
                blobCache.add(blobInfo);

                // Call the callback and populate the Title field with the file name
                const data = new FormData();
                data.append('upload_preset', unsignedUploadPreset);
                data.append('tags', 'browser_upload');
                data.append('file', blobInfo.blob(), blobInfo.filename());

                axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, data)
                  .then(function (res) {
                    cb(res.data.secure_url, { title: res.data.original_filename });
                  })
                  .catch(function (err) {
                    console.log(err);
                  });
              };
              reader.readAsDataURL(file);
            };

            input.click();
          },
          setup: (editor) => {
            // Add CloudinaryFileManagerButton to the toolbar
            editor.ui.registry.addButton('cloudinaryFileManagerButton', {
              text: 'Cloudinary FileManager',
              icon:'../assets/react.svg',
              onAction: () => {
                setIsFileManagerVisible(true);
                // Execute mceCloudinaryFileManager command when the button is clicked
                editor.execCommand('mceCloudinaryFileManager');
              },
            });

            // Define mceCloudinaryFileManager command
            editor.addCommand('mceCloudinaryFileManager', () => {
              // Do something when Cloudinary FileManager is opened
              // You can call a function in CloudinaryFileManagerPlugin to show the FileManager
            //   CloudinaryFileManagerPlugin.show();
            });
          },
        }}
        onEditorChange={handleEditorChange}
        value={contentOld}
      />
      {isFileManagerVisible && (
        <CloudinaryFileManagerPlugin onImageSelected={(imageUrl) => handleImageSelected(imageUrl)} />
      )}
    </div>
  );
};

export default MyEditor;
