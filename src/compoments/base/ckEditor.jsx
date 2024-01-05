// ckEditor.jsx
import axios from 'axios';


export function uploadAdapter(loader) {
  return {
    upload: () => {
      return new Promise(async (resolve, reject) => {
        try {
          const file = await loader.file;
          const response = await axios.request({
            method: 'POST',
            url: `http://localhost:8989/api/upload-files`,
            data: {
              files: file,
            },
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          resolve({
            default: `${response.data.path}`,
          });
        } catch (error) {
          console.log(error);
          reject('Hello');
        }
      });
    },
    abort: () => {},
  };
}

export function uploadPlugin(editor) {
  editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
    return uploadAdapter(loader);
  };
}
