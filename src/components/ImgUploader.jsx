import React, { useState } from 'react';

export default function ImgUploader() {
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);

  const uploadImage = async (event) => {
    const file = event.target.files[0];
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'i4co6ysf');
    setLoading(true);
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dnrxmm7a0/image/upload',
      {
        method: 'POST',
        body: data,
      }
    );
    const uploadedFile = await res.json();
    console.log(uploadedFile);
    setImage(uploadedFile.url);
    setLoading(false);
  };

  return (
    <div>
      <h1>Upload image</h1>
      <input type="file" name="image" onChange={uploadImage} />
      {loading ? <h1>loading</h1> : <img alt="alt" src={image} />}
    </div>
  );
}
