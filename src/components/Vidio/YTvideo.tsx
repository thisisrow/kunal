import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const YTvideo = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const firstCardRef = useRef<HTMLDivElement>(null);
  const [buttonTop, setButtonTop] = useState("50%");

const videos = [
    {
      id: "short1",
      videoId: "n8hpGs2bNXE",
      type: "short",
      title: "Smile Makeover Short",
      thumbnail: "https://img.youtube.com/vi/n8hpGs2bNXE/hqdefault.jpg",
    },
    {
      id: "video2",
      videoId: "79cVNtpbIRM",
      type: "video",
      title: "Dental Implants Journey",
      thumbnail: "https://img.youtube.com/vi/79cVNtpbIRM/hqdefault.jpg",
    },
    {
      id: "video3",
      videoId: "35Sdpz7P-mo",
      type: "video",
      title: "Cosmetic Dentistry Result",
      thumbnail: "https://img.youtube.com/vi/35Sdpz7P-mo/hqdefault.jpg",
    },
    {
      id: "video4",
      videoId: "An_KT8UMZ_o",
      type: "video",
      title: "Orthodontic Braces Journey",
      thumbnail: "https://img.youtube.com/vi/An_KT8UMZ_o/hqdefault.jpg",
    },
    {
      id: "video5",
      videoId: "5tTzEAI_Y84",
      type: "video",
      title: "Dental Crown Restoration",
      thumbnail: "https://img.youtube.com/vi/5tTzEAI_Y84/hqdefault.jpg",
    },
    {
      id: "video6",
      videoId: "99lD6oMq1bo",
      type: "video",
      title: "Teeth Whitening Transformation",
      thumbnail: "https://img.youtube.com/vi/99lD6oMq1bo/hqdefault.jpg",
    },
    {
      id: "video7",
      videoId: "4Ob0OTUH73c",
      type: "video",
      title: "Veneers: Before and After",
      thumbnail: "https://img.youtube.com/vi/4Ob0OTUH73c/hqdefault.jpg",
    },
  ];

  const handleVideoClick = (index: number) => {
    setSelectedVideo(index);
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
  };

  const scrollBy = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth / 4; // one video width approx
      scrollRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    // On mount, measure the first card height and position buttons vertically centered
    if (firstCardRef.current) {
      const height = firstCardRef.current.offsetHeight;
      setButtonTop(`${height / 2}px`); // center relative to card height
    }
  }, []);

  return (
    <section className="bg-[url('/rectangle-512.png')] mt-[-5%] bg-cover bg-center py-16 md:py-24 px-4 md:px-8">
      <div className="mx-auto max-w-7xl relative">
        <h2 className="text-center mt-[10%] text-3xl lg:text-[50px] font-['Poppins'] font-semibold text-[#0578b1] tracking-[-2px] leading-snug mb-12">
          Watch How Dr. Shet Transforms Smiles
        </h2>

        {/* Container for video strip + buttons */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={() => scrollBy("left")}
            style={{ top: buttonTop }}
            className="absolute left-[-10px] z-10 transform -translate-y-1/2 bg-white hover:bg-gray-100 p-2 rounded-full shadow-md transition"
            aria-label="Scroll left"
          >
            <ChevronLeft className="text-[#0578b1]" />
          </button>

          <button
            onClick={() => scrollBy("right")}
            style={{ top: buttonTop }}
            className="absolute right-[-10px] z-10 transform -translate-y-1/2 bg-white hover:bg-gray-100 p-2 rounded-full shadow-md transition"
            aria-label="Scroll right"
          >
            <ChevronRight className="text-[#0578b1]" />
          </button>

          {/* Video Strip */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 scroll-smooth no-scrollbar scrollbar-hide"
            onTouchStart={(e) => {
              (scrollRef.current! as any).touchStartX = e.touches[0].clientX;
            }}
            onTouchEnd={(e) => {
              const touchStartX = (scrollRef.current! as any).touchStartX;
              const touchEndX = e.changedTouches[0].clientX;
              const diff = touchEndX - touchStartX;
              if (Math.abs(diff) > 50) {
                scrollBy(diff < 0 ? "right" : "left");
              }
            }}
          >
            {videos.map((video, index) => (
              <div
                key={video.id}
                ref={index === 0 ? firstCardRef : null} // ref first card only
                className="min-w-[250px] aspect-[9/16] bg-black rounded-lg overflow-hidden cursor-pointer relative"
                onClick={() => handleVideoClick(index)}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-[#0578b1]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedVideo !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative w-full max-w-4xl mx-4">
              <button
                onClick={handleCloseVideo}
                className="absolute -top-10 right-0 text-white text-xl"
                aria-label="Close video"
              >
                ✕
              </button>
              <div className="relative pt-[56.25%]">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${videos[selectedVideo].videoId}?autoplay=1`}
                  title={videos[selectedVideo].title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
