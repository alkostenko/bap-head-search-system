import React from 'react';
import "./dragAndDrop.css";

import { useDropzone } from 'react-dropzone';

const DragAndDrop = ({onDrop, accept}) => {
    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop, 
        accept
    });

  return (
    <div className='dropzone' {...getRootProps()}>
        <input className="dropzone-input" {...getInputProps()}/>
        <div className="dropzone-text">
            {isDragActive?(
                <div className="dropzone-content">
                    <img src="../../assets/file_png.png" alt="" />
                    <p className="dropzone-content">Drop it like it is hot!</p>
                </div>
            ):(
                <p className="dropzone-content">Перетягніть файли сюди або натисніть, що вибрати файли</p>
            )}
        </div>
    </div>
  );
};


export default DragAndDrop;