import { CButton, CImage } from '@coreui/react-pro'
import React, { useEffect, useState } from 'react'
import { GrCloudUpload } from 'react-icons/gr'
import { FaTrashAlt } from "react-icons/fa";



function ImageUpload(props) {
    const [imageFile, setImageFile] = useState(null)
    const [showIcons, setShowIcons] = useState(false)
    const [showUploadIcon, setShowUploadIcons] = useState(true)


    // HANDLE IMAGE UPLOADER
    function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>): void {
        setShowIcons(false)
        const fileInputType = document.createElement('input')
        fileInputType.setAttribute('type', 'file')
        fileInputType.setAttribute('accept', 'image/x-png,image/jpg,image/jpeg')

        if (document.createEvent) {
            //for the sake of browser compatibility
            const event = document.createEvent('MouseEvents')
            event.initEvent('click', true, true)
            fileInputType.dispatchEvent(event)
        } else {
            fileInputType.click()
        }

        fileInputType.addEventListener(
            'change',
            (event) => {
                const fr = new FileReader()
                fr.onerror = (e): void => {
                    console.error(fr.error)
                }

                fr.onload = (e): void => {
                    // Find the index of the comma
                    const base64String = e.target.result
                    const commaIndex = base64String?.indexOf(',');

                    // Remove the prefix including the comma
                    const base64WithoutPrefix = base64String.substring(commaIndex + 1);
                    setImageFile(e.target.result) //BASE64 FILE TO DISPLAY

                    if (typeof props.setValue === 'function') {
                        // SETTING VALUE TO FORMATTED BASE64
                        props.setValue(props.fieldName, base64WithoutPrefix)
                    }
                }
                //fr.readAsArrayBuffer(event.target.files[0])
                fr.readAsDataURL(event.target.files[0])
            },
            false,
        )
    }


    // REMOVE SELECTED IMAGE FILE
    function removeImage() {
        setImageFile(null)
    }

   

    return (
        <div className='position-relative imgBox'
            onMouseOver={() => {
                if (imageFile) {
                    setShowIcons(true)
                    setShowUploadIcons(true)

                } else {
                    setShowUploadIcons(true)
                }
            }}
            onMouseLeave={() => {
                if (imageFile) {

                    setShowIcons(false)
                    setShowUploadIcons(false)
                } else {
                    setShowUploadIcons(true)

                }
            }}
        >
            <CImage src={imageFile ? imageFile : props.imgUrl} width={'100%'} rounded />
            <div className='position-absolute top-0 w-100 h-100 p-3 imgOverlay'>
                {
                    showUploadIcon &&
                    <CButton
                        color="info"
                        className="fs-5 rounded-2 shadow position-absolute top-50 start-50 translate-middle"
                        onMouseUp={handleFileUpload}
                    >
                        <GrCloudUpload className="fs-4 text-white" />
                    </CButton>
                }

                {showIcons ? <CButton size="sm" className="position-absolute bg-danger text-white fs-5 m-2 top-0 end-0" onMouseUp={removeImage}>
                    <FaTrashAlt className="fs-4 text-white" />
                </CButton> : null}
            </div>
        </div>
    )
}

export default ImageUpload