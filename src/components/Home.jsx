import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";
import { enhancedImageAPI } from "../../utils/enhancedImageApi";

const Home = () => {
  const [uplaodImage, setUploadimage] = useState(null);
  const [enanchedImage, setEnahancedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  //* jo image upload karenge uploadiamge show hona chaiye
  const UploadImageHandler = async (file) => {
    // is function imageupload se image  aa rahi hai props ke throuhgh

    setUploadimage(URL.createObjectURL(file)); // its convert the image into link
    setLoading(true); // image aab uploaded image ke anadar set ho gayi hai
    // ab usse preview mein dekhenge usse props ke through
    // jaise he image milege usse ImagePreview mein pass kar denge props ke through
    //* home component mein image le rahe hai or saare component mein  props ke through send kar rahe hai

    //! caling api to enhance the image // api ko call kar liya jata hai yaha pe
    try {
      const enanchedURL = await enhancedImageAPI(file);
      setEnahancedImage(enanchedURL);
      setLoading(false);
    } catch (error) {
      console.log(error);
      alert("Error while enanching the image . Please try again later");
    }
  };
  return (
    <>
      <ImageUpload UploadImageHandler={UploadImageHandler} />
      <ImagePreview
        loading={loading}
        uploaded={uplaodImage}
        enhanced={enanchedImage}
      />
    </>
  );
};

export default Home;
