import React from 'react';

function UploadButton() {
  const handleUpload = () => {
    alert('Uploading image...');
    setTimeout(() => alert('Image uploaded successfully!'), 2000);
  };

  return (
    <button onClick={handleUpload}>Upload Image</button>
  );
}

export default UploadButton;
