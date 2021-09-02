import React, { useState, Container } from "react";
import "./GalleryForm.css";


// Function to get  4 random pictures 
const createRandomImages = (w, h) => {
  const images = [];
  for (let index = 0; index < 4; index++) {
    const imageId = Math.round(Math.random() * 1000);
    images.push({
      big: "https://picsum.photos/seed/" + imageId + "/" + w + "/" + h,
      small: "https://picsum.photos/seed/" + imageId + "/150/100",
    });
  }
  return images;
};

// Function to render gallery form
const GalleryForm = () => {
  // States for inputs and images  
  const [enteredWidth, setEnteredWidth] = useState("600");
  const [enteredHeight, setEnteredHeight] = useState("400");
  const [currentImage, setCurrentImage] = useState(0);
  const [images, setImages] = useState(createRandomImages(600, 400));

  // Function to get width input
  const widthChangeHandler = (event) => {
    setEnteredWidth(event.target.value);
  };

  // Function to get height input
  const heightChangeHandler = (event) => {
    setEnteredHeight(event.target.value);
  };

  // Function to set selected image by user
  const imageClickHandler = (index) => {
    return () => setCurrentImage(index);
  };

  // Function to set values from input by clicking on button
  const buttonClickHandler = () => {
    setImages(createRandomImages(enteredWidth, enteredHeight));
  };

  return (
    <div className="gallery-frame">
      <form>
        <div className="gallery-frame-control">
          <label>Image width (px)</label>
          <input
            type="text"
            value={enteredWidth}
            onChange={widthChangeHandler}
          />
        </div>
        <div className="gallery-frame-control">
          <label>Image height (px)</label>
          <input
            type="text"
            value={enteredHeight}
            onChange={heightChangeHandler}
            style={{ margin: 6 }}
          />
        </div>
        <div className="controls">
          <button type="button" onClick={buttonClickHandler}>
            Load image
          </button>
        </div>
      </form>
      <div style={{ textAlign: "center" }}>
        <div className="main-image">
          <img src={images[currentImage].big} />
        </div>
      </div>
      <div className="small-images">
        {images.map((image, index) => (
          <img
            style={{ padding: 2.5 }}
            onClick={imageClickHandler(index)}
            src={image.small}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryForm;
