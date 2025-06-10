import React, { useState } from "react";

const BeforAfter = () => {
  const transformations = [
    {
      title: "Complete Smile Makeover",
      before:
        "/b1.png",
      after:
        "/a1.png",
      type: "Cosmetic Dentistry",
    },
    {
      title: "Dental Implants",
      before:
        "/b2.png",
      after:
        "/a2.png",
      type: "Implantology",
    },
    {
      title: "Teeth Whitening",
      before:
        "/b3.png",
      after:
        "/a3.png",
      type: "Cosmetic",
    },
    {
      title: "Orthodontic Treatment",
      before:
        "/b4.png",
      after:
        "/a4.png",
      type: "Orthodontics",
    },
    {
      title: "Veneers",
      before:
        "/b5.png",
      after:
        "/a5.png",
      type: "Cosmetic",
    },
    {
      title: "Full Mouth Rehabilitation",
      before:
        "/b6.png",
      after:
        "/a6.png",
      type: "Restorative",
    },
    // {
    //   title: "Full Mouth Rehabilitation",
    //   before:
    //     "/b7.png",
    //   after:
    //     "/a7.png",
    //   type: "Restorative",
    // },
  ];

  const [sliderPositions, setSliderPositions] = useState<{
    [key: number]: number;
  }>(Object.fromEntries(transformations.map((_, index) => [index, 50])));
  const [isDragging, setIsDragging] = useState<{ [key: number]: boolean }>(
    Object.fromEntries(transformations.map((_, index) => [index, false]))
  );

  const handleMouseDown = (index: number) => {
    setIsDragging((prev) => ({ ...prev, [index]: true }));
  };

  const handleMouseUp = (index: number) => {
    setIsDragging((prev) => ({ ...prev, [index]: false }));
  };

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    if (isDragging[index]) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = Math.min(Math.max(0, e.clientX - rect.left), rect.width);
      const newPosition = (x / rect.width) * 100;
      setSliderPositions((prev) => ({
        ...prev,
        [index]: newPosition,
      }));
    }
  };

  const handleTouchMove = (
    e: React.TouchEvent<HTMLDivElement>,
    index: number
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const x = Math.min(Math.max(0, touch.clientX - rect.left), rect.width);
    const newPosition = (x / rect.width) * 100;
    setSliderPositions((prev) => ({
      ...prev,
      [index]: newPosition,
    }));
  };

  React.useEffect(() => {
    const handleMouseUpGlobal = () => {
      setIsDragging(
        Object.fromEntries(transformations.map((_, index) => [index, false]))
      );
    };

    document.addEventListener("mouseup", handleMouseUpGlobal);
    return () => {
      document.removeEventListener("mouseup", handleMouseUpGlobal);
    };
  }, []);

  return (
    <section className="bg-[url(/rectangle-474.svg)] bg-cover bg-center py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-0">
        <div className="relative">
          <h2 className="text-3xl mt-[5%] md:text-4xl lg:text-5xl font-bold text-[#0578b1] text-center mb-12 lg:mb-24">
            Dr. Kunal Shet's Transformation Gallery
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">

            {transformations.map((item, index) => (
              <div key={index} className="w-full p-3">
                {/* <div className="mb-3">
                  <h3 className="text-xl font-semibold text-[#0578b1]">
                    {item.title}
                  </h3>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {item.type}
                  </span>
                </div> */}

                <div
                  className="relative h-[300px] md:h-[350px] w-full overflow-hidden rounded-lg shadow-lg cursor-ew-resize select-none"
                  onMouseDown={() => handleMouseDown(index)}
                  onMouseUp={() => handleMouseUp(index)}
                  onMouseMove={(e) => handleMouseMove(e, index)}
                  onTouchMove={(e) => handleTouchMove(e, index)}
                  onTouchStart={() => handleMouseDown(index)}
                  onTouchEnd={() => handleMouseUp(index)}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.after})` }}
                  />

                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${item.before})`,
                      clipPath: `inset(0 ${100 - sliderPositions[index]}% 0 0)`,
                    }}
                  />

                  <div
                    className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize"
                    style={{ left: `${sliderPositions[index]}%` }}
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-[#0578b1] flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 bg-black/50 text-white text-sm py-1 px-3 rounded-full backdrop-blur-sm">
                    Before
                  </div>

                  <div className="absolute bottom-4 right-4 bg-black/50 text-white text-sm py-1 px-3 rounded-full backdrop-blur-sm">
                    After
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforAfter;