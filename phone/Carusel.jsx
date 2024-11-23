import React from 'react';

function Carousel() {
  const slides = [
    { id: "slide1", src: "iphone__ky2k6x5u6vue_og.png", alt: "iPhone Slide 1" },
    { id: "slide2", src: "iphone-16-plus-pro-pro-max-family-4559.webp", alt: "iPhone Slide 2" },
    { id: "slide3", src: "iphone__kqge21l9n26q_og.png", alt: "iPhone Slide 3" },
    { id: "slide4", src: "maxresdefault.jpg", alt: "iPhone Slide 4" },
  ];

  return (
    <div className="mx-auto  max-w-4xl border-[2px] border-blue-900 rounded-[20px] p-4">
      <div className="carousel">
        {slides.map((slide, index) => (
          <div
            id={slide.id}
            key={slide.id}
            className="carousel-item relative w-full flex justify-center items-center"
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full max-h-[500px] object-cover"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href={`#${slides[index === 0 ? slides.length - 1 : index - 1].id}`}
                className="btn btn-circle bg-gray-700 text-white hover:bg-gray-900"
                aria-label="Previous Slide"
              >
                ❮
              </a>
              <a
                href={`#${slides[(index + 1) % slides.length].id}`}
                className="btn btn-circle bg-gray-700 text-white hover:bg-gray-900"
                aria-label="Next Slide"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
