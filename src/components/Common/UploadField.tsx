// src/components/UploadField.tsx
import React, { useState } from 'react';
import { UseFormSetValue } from 'react-hook-form';
import { useDropzone } from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCloudArrowUp, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import 'tailwindcss/tailwind.css';

interface UploadFieldProps {
    name: string;
    setValue: UseFormSetValue<any>;
    placeholder?: string;
    error?: string;
}

const UploadField: React.FC<UploadFieldProps> = ({ name, setValue, placeholder, error }) => {
    const [fileName, setFileName] = useState<string | null>(null);

    const onDrop = (acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        setValue(name, file);
        setFileName(file.name);
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: {
            'application/pdf': ['.pdf'],
            'application/msword': ['.doc'],
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
        },
        maxFiles: 1,
    });

    const handleRemoveFile = (e: React.MouseEvent) => {
        e.stopPropagation();
        setValue(name, null);
        setFileName(null);
    };

    return (
        <div>
            <div
                {...getRootProps()}
                className={`flex items-center p-4 border border-dashed ${error ? 'border-red-500' : 'border-gray-300'} rounded-md cursor-pointer hover:bg-gray-100`}
            >
                <input {...getInputProps()} />
                {!fileName ? (
                    <>
                        <FontAwesomeIcon icon={faCloudArrowUp} className='h-6 w-6 text-gray-500 mr-2' />
                        <p className='text-gray-500'>{placeholder}</p>
                    </>
                ) : (
                    <div className='flex justify-between w-full'>
                        <p className='text-gray-700'>{fileName}</p>
                        <button type='button' onClick={handleRemoveFile} className='text-gray-500 hover:text-gray-700 relative z-10'>
                            <FontAwesomeIcon icon={faXmark} className='text-red-600 h-4 w-4' />
                        </button>
                    </div>
                )}
            </div>
            {error && (
                <span className='text-red-600'>
                    <FontAwesomeIcon icon={faTriangleExclamation} className='mr-2' /> {error}
                </span>
            )}
        </div>
    );
};

export default UploadField;
