import React from "react";

const ImageUpload = (props) => {

    const showImageHandler = (e) => {
        const file = e.target.files[0]  // jo image upload kar rahe hai get kar rahe hai issme 
          if(file){
            props.UploadImageHandler(file)  // jab be image uplaod karenge wo  props.UploadImageHandler(file) cahli jana chaiye or ye function parent se aa raha hai
          }
    }

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 m-full max-m-2xl:">
      <label
        htmlFor="fileInput"
        className="block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-300 transition-all "
      >
        <input type="file" id="fileInput"  className="hidden" onChange={showImageHandler}/>
        <span className="text-large font-medium text-gray-600">Click and drag to upload your image</span>
      </label>
    </div>
  );
};

export default ImageUpload;
