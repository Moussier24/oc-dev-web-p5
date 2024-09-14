import { useState } from "react";

export const AnnonceCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      {images.length > 1 && (
        <button
          className="carousel__arrow carousel__arrow--left"
          onClick={prevSlide}
        >
          &#10094;
        </button>
      )}

      <div
        className="carousel__track"
        style={{ transform: `translateX(${-currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="carousel__slide" key={index}>
            <img
              className="carousel__image"
              src={image}
              alt={`slide ${index}`}
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <div className="carousel__counter">
          {currentIndex + 1} / {images.length}
        </div>
      )}

      {images.length > 1 && (
        <button
          className="carousel__arrow carousel__arrow--right"
          onClick={nextSlide}
        >
          &#10095;
        </button>
      )}
    </div>
  );
};
