import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Upload = (props) => {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('Please upload a PDF')
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    try {
      if (file) {
        const formData = new FormData();
        formData.append('resume', file);
        formData.append('id', props.getToken(sessionStorage.getItem('id')))

        await axios.post(`${props.host}/uploadResume`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        navigate('/')
        
      }
    } catch (error) {
      console.error('File upload error:', error);
      setStatus('Error uploading file')
    }
  };

  return (
    <div>
       
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <p>{status}</p>
    </div>
  );
};

export default Upload;
