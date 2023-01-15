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
                    <div className='img' />
                    <p className="dropzone-content">Drop it like it is hot!</p>
                </div>
            ):(
                <div className="dropzone-content">
                    <div className='img' />
                    <p className="dropzone-content">Перетягніть файли або натисніть, щоб вибрати файли</p>
                </div>
            )}
        </div>
    </div>
  );
};


export default DragAndDrop;